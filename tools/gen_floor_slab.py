"""重制楼板素材：修正"素材位置太低"。

问题根因（不是素材画错，是显示尺寸与容器不匹配）：
  CSS 里 background-size 设为 192x144（源图 2 倍放大），而 .floor-slab
  容器只有 72px 高 —— 于是只显示源图【上半张】。结果是：
    · 铆钉被挤到可见区底部（观感"下坠"）
    · 下沿厚度带与投影整个被裁掉
  即用户反馈的"底板的素材位置好像太低了"。

修正：
  1. 源图保持原生 96x72，CSS 显示尺寸同步为 96px 72px（与容器等高），
     整张图完整可见，1:1 像素完美（高分屏由 pixelated 整数倍放大）。
  2. 重新构图，铆钉从"贴底"移到楼板【垂直正中】，不再显得下坠：
       0-6   顶面高光（最亮，受光面）
       7     暗棱（顶面与立面的转折）
       8-64  砖体三排错缝
       ~35   金铜铆钉（垂直居中）
       65-71 底部暗唇（过渡到下方厚度带）
  3. floor_edge.png 为独立的下沿厚度带（96x24，显示 96px 24px）。

产出（assets/img/）：
  floor_slab.png   96 x 72
  floor_edge.png   96 x 24
"""
from PIL import Image
import os, random

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "img")
random.seed(20260917)

BRICK = ["#3A4257", "#384054", "#3D475D", "#3B4255", "#414A60"]
BRICK_DK = ["#1B2233", "#192032", "#1E2639"]
MORTAR = "#0E121B"
GOLD = "#C8912F"
GOLD_LT = "#FFD873"
GOLD_DK = "#7A5118"
STONE_LT = "#A8B2C6"      # 顶面最亮（受光）
STONE_MID = "#7C8699"
STONE_LO = "#5A6478"

W, H = 96, 72                      # 原生尺寸，与 CSS 显示尺寸 1:1

def hx(c):
    c = c.lstrip("#")
    return tuple(int(c[i:i + 2], 16) for i in (0, 2, 4))

def mix(a, b, t):
    ca, cb = hx(a), hx(b)
    return '#%02X%02X%02X' % tuple(int(ca[i] + (cb[i] - ca[i]) * t) for i in range(3))

img = Image.new("RGBA", (W, H), (0, 0, 0, 0))
put = lambda x, y, c: img.putpixel((x, y), hx(c) + (255,)) if (0 <= x < W and 0 <= y < H) else None

# ---- 1) 顶面高光 0-6：最亮，模拟"被上一层灯光照到" ----
for ly in range(0, 7):
    if ly == 0:
        c = STONE_LT
    elif ly <= 2:
        c = STONE_MID
    else:
        c = mix(STONE_MID, STONE_LO, (ly - 3) / 3.0)
    for lx in range(W):
        n = random.uniform(0.96, 1.04)
        cc = hx(c)
        put(lx, ly, '#%02X%02X%02X' % tuple(min(255, int(v * n)) for v in cc))

# ---- 2) 暗棱 7：顶面与立面的转折 ----
for lx in range(W):
    put(lx, 7, MORTAR)

# ---- 3) 砖体 8-64：三排错缝，每排 19px ----
BW, BH = 24, 19
for row in range(3):
    y0 = 8 + row * BH
    off = 0 if row % 2 == 0 else BW // 2
    for bx in range(-1, W // BW + 2):
        x0 = bx * BW + off
        body = random.choice(BRICK)
        for yy in range(BH):
            for xx in range(BW):
                x, y = x0 + xx, y0 + yy
                if not (0 <= x < W and 8 <= y < 65):
                    continue
                v = (1.10 - 0.20 * (yy / BH)) * random.uniform(0.93, 1.07)
                cb = hx(body)
                put(x, y, '#%02X%02X%02X' % tuple(min(255, int(q * v)) for q in cb))
        # 砖缝
        for yy in range(BH):
            if 8 <= y0 + yy < 65:
                put(x0, y0 + yy, MORTAR)
                put(x0 + BW - 1, y0 + yy, MORTAR)

# ---- 4) 铆钉：垂直居中（ly=35，板高 72 的正中）----
RY = 35
for bx in range(W // 24):
    cx = bx * 24 + 12
    for dx, dy, col in [(0, -1, GOLD_LT), (0, 0, GOLD_LT), (-1, 0, GOLD), (1, 0, GOLD),
                        (-1, 1, GOLD_DK), (1, 1, GOLD_DK), (0, 1, GOLD_DK)]:
        put(cx + dx, RY + dy, col)

# ---- 5) 底部暗唇 65-71：过渡到下方厚度带 ----
for ly in range(65, H):
    t = (ly - 65) / (H - 1 - 65)
    c = mix("#242C40", "#121826", t)
    for lx in range(W):
        n = random.uniform(0.94, 1.06)
        cc = hx(c)
        put(lx, ly, '#%02X%02X%02X' % tuple(min(255, int(v * n)) for v in cc))
for lx in range(W):
    put(lx, 65, MORTAR)

img.save(os.path.join(OUT, "floor_slab.png"))
print("floor_slab.png", img.size)

# ---- 下沿厚度带 96x24 ----
W2, H2 = 96, 24
edge = Image.new("RGBA", (W2, H2), (0, 0, 0, 0))
PLATE = ["#1A2130", "#1E2536", "#18202F", "#212839"]
for ly in range(H2):
    t = ly / (H2 - 1.0)
    for lx in range(W2):
        b = hx(random.choice(PLATE))
        k = (1.0 - 0.5 * t) * random.uniform(0.95, 1.05)
        edge.putpixel((lx, ly), (min(255, int(b[0] * k)), min(255, int(b[1] * k)),
                                 min(255, int(b[2] * k)), 255))
for lx in range(W2):
    edge.putpixel((lx, 0), hx("#2E3648") + (255,))      # 与楼板衔接的亮边
for bx in range(0, W2, 32):                              # 竖向分缝
    for ly in range(H2):
        edge.putpixel((bx, ly), hx("#05070C") + (255,))
        if bx + 1 < W2:
            edge.putpixel((bx + 1, ly), hx("#0A0E17") + (255,))
edge.save(os.path.join(OUT, "floor_edge.png"))
print("floor_edge.png", edge.size)
