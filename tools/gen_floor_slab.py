"""重制楼板：加高到 72px 并强化对比，使其成为清晰的楼层分隔。

用户反馈楼板"有点挡英雄"——实为楼板吸顶后占住视口顶部，而属性栏
sticky top 只有 8px。本次两件事一起做：
  1. 楼板本体 48 -> 72（更高更醒目，楼层感更强）
  2. 顶面高光进一步提亮，避免被光照黑幕压成一团黑

产出（assets/img/）：
  floor_slab.png   96 x 72   楼板主体（横向平铺）
  floor_edge.png   96 x 24   下沿厚度带（横向平铺）
"""
from PIL import Image
import os, random

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "img")
random.seed(20260917)

BRICK = ["#3A4257", "#384054", "#3D475D", "#3B4255", "#414A60"]
BRICK_DK = ["#20273B", "#1E2639", "#232C42"]
MORTAR = "#0E121B"
GOLD = "#C8912F"
GOLD_LT = "#FFD873"
GOLD_DK = "#7A5118"
STONE_LT = "#9AA3B8"      # 顶面受光高光（再加亮）
STONE_MID = "#727C92"
STONE_DK = "#454E63"

def hx(c):
    c = c.lstrip("#")
    return tuple(int(c[i:i+2], 16) for i in (0, 2, 4))

def rnd(cols):
    return hx(random.choice(cols)) + (255,)

W, H = 96, 72                      # 加高：48 -> 72
slab = Image.new("RGBA", (W, H), (0, 0, 0, 0))

# 1) 底面投影
for y in range(66, H):
    t = (y - 66) / max(1, H - 1 - 66)
    a = int(130 * (1 - t) ** 1.3)
    for x in range(W):
        slab.putpixel((x, y), (0, 0, 0, a))

# 2) 下沿暗带（厚度）
for y in range(57, 66):
    t = (y - 57) / 9.0
    for x in range(W):
        b = rnd(BRICK_DK)
        k = 0.8 + 0.2 * (1 - t)
        slab.putpixel((x, y), (int(b[0]*k), int(b[1]*k), int(b[2]*k), 255))

# 3) 石砖主体（三排错缝，配合加高后的高度）
BW, BH = 24, 16
ROWS = 3
for row in range(ROWS):
    y0 = 8 + row * BH
    off = 0 if row % 2 == 0 else BW // 2
    for bx in range(-1, W // BW + 2):
        x0 = bx * BW + off
        body = rnd(BRICK)
        for yy in range(BH):
            for xx in range(BW):
                x, y = x0 + xx, y0 + yy
                if not (0 <= x < W and 0 <= y < 66):
                    continue
                v = 1.08 - 0.18 * (yy / BH)
                n = random.uniform(0.93, 1.07)
                slab.putpixel((x, y), (min(255, int(body[0]*v*n)),
                                        min(255, int(body[1]*v*n)),
                                        min(255, int(body[2]*v*n)), 255))
        # 砖缝
        for yy in range(BH):
            y = y0 + yy
            if 0 <= y < 66:
                if 0 <= x0 < W: slab.putpixel((x0, y), hx(MORTAR) + (255,))
                if 0 <= x0 + BW - 1 < W: slab.putpixel((x0 + BW - 1, y), hx(MORTAR) + (255,))
        for xx in range(BW):
            x = x0 + xx
            if 0 <= x < W and y0 + BH - 1 < 66:
                slab.putpixel((x, y0 + BH - 1), hx(MORTAR) + (255,))

# 4) 顶面高光（8px，更厚更亮）
for y in range(0, 8):
    for x in range(W):
        if y == 0:
            c = STONE_LT
        elif y <= 2:
            c = STONE_MID
        else:
            t = (y - 3) / 4.0
            a0, a1 = hx(STONE_MID), hx(BRICK[0])
            c = '#%02X%02X%02X' % tuple(int(a0[i] + (a1[i] - a0[i]) * t) for i in range(3))
        n = random.uniform(0.96, 1.04)
        cc = hx(c)
        slab.putpixel((x, y), (min(255, int(cc[0]*n)), min(255, int(cc[1]*n)), min(255, int(cc[2]*n)), 255))
# 顶面与主体的暗棱
for x in range(W):
    slab.putpixel((x, 8), hx(MORTAR) + (255,))

# 5) 铆钉（每 24px 一个，位于主体中部）
for bx in range(W // 24):
    cx = bx * 24 + 11
    cy = 30
    pts = [(0, 0, GOLD_LT), (0, 1, GOLD), (-1, 0, GOLD), (1, 0, GOLD),
           (-1, 1, GOLD_DK), (1, 1, GOLD_DK), (0, 2, GOLD_DK), (0, -1, GOLD_LT)]
    for dx, dy, col in pts:
        x, y = cx + dx, cy + dy
        if 0 <= x < W and 0 <= y < 66:
            slab.putpixel((x, y), hx(col) + (255,))

slab.save(os.path.join(OUT, "floor_slab.png"))
print("floor_slab.png", slab.size)

# ---- 下沿厚度带 ----
W2, H2 = 96, 24
edge = Image.new("RGBA", (W2, H2), (0, 0, 0, 0))
PLATE = ["#1A2130", "#1E2536", "#18202F", "#212839"]
for y in range(H2):
    t = y / (H2 - 1.0)
    for x in range(W2):
        b = rnd(PLATE)
        k = 1.0 - 0.5 * t
        n = random.uniform(0.95, 1.05)
        edge.putpixel((x, y), (min(255, int(b[0]*k*n)), min(255, int(b[1]*k*n)), min(255, int(b[2]*k*n)), 255))
for x in range(W2):
    edge.putpixel((x, 0), hx("#2E3648") + (255,))
for bx in range(0, W2, 32):
    for y in range(H2):
        edge.putpixel((bx, y), hx("#05070C") + (255,))
        if bx + 1 < W2:
            edge.putpixel((bx + 1, y), hx("#0A0E17") + (255,))
edge.save(os.path.join(OUT, "floor_edge.png"))
print("floor_edge.png", edge.size)
