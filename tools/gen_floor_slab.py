"""重制楼板：提亮顶面高光、强化厚度与铆钉，使其在暗色蒙版下依然清晰可辨。
原版顶面高光被光照黑幕压住后几乎看不出来，翻页时"地板"的存在感不足。
"""
from PIL import Image
import os, random

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "img")
random.seed(20260917)

BRICK = ["#3A4257", "#384054", "#3D475D", "#3B4255", "#414A60"]   # 整体提亮
BRICK_DK = ["#20273B", "#1E2639", "#232C42"]
MORTAR = "#0E121B"
GOLD = "#C8912F"
GOLD_LT = "#FFD873"
GOLD_DK = "#7A5118"
STONE_LT = "#8A93A8"      # 顶面受光高光（更亮）
STONE_MID = "#6A7488"
STONE_DK = "#454E63"

def hx(c):
    c = c.lstrip("#")
    return tuple(int(c[i:i+2], 16) for i in (0, 2, 4))

def rnd(cols):
    return hx(random.choice(cols)) + (255,)

W, H = 96, 48
slab = Image.new("RGBA", (W, H), (0, 0, 0, 0))

# 1) 底面投影
for y in range(43, H):
    t = (y - 43) / max(1, H - 1 - 43)
    a = int(130 * (1 - t) ** 1.3)
    for x in range(W):
        slab.putpixel((x, y), (0, 0, 0, a))

# 2) 下沿暗带（厚度）
for y in range(35, 43):
    t = (y - 35) / 8.0
    for x in range(W):
        b = rnd(BRICK_DK)
        k = 0.8 + 0.2 * (1 - t)
        slab.putpixel((x, y), (int(b[0]*k), int(b[1]*k), int(b[2]*k), 255))

# 3) 石砖主体（两排错缝）
BW, BH = 24, 15
for row in range(2):
    y0 = 5 + row * BH
    off = 0 if row == 0 else BW // 2
    for bx in range(-1, W // BW + 2):
        x0 = bx * BW + off
        body = rnd(BRICK)
        for yy in range(BH):
            for xx in range(BW):
                x, y = x0 + xx, y0 + yy
                if not (0 <= x < W and 0 <= y < 43):
                    continue
                v = 1.08 - 0.18 * (yy / BH)
                n = random.uniform(0.93, 1.07)
                slab.putpixel((x, y), (min(255, int(body[0]*v*n)),
                                        min(255, int(body[1]*v*n)),
                                        min(255, int(body[2]*v*n)), 255))
        for yy in range(BH):
            y = y0 + yy
            if 0 <= y < 43:
                if 0 <= x0 < W: slab.putpixel((x0, y), hx(MORTAR) + (255,))
                if 0 <= x0 + BW - 1 < W: slab.putpixel((x0 + BW - 1, y), hx(MORTAR) + (255,))
        for xx in range(BW):
            x = x0 + xx
            if 0 <= x < W and y0 + BH - 1 < 43:
                slab.putpixel((x, y0 + BH - 1), hx(MORTAR) + (255,))

# 4) 顶面高光（大幅提亮：这是"地板受光"的关键）
for y in range(0, 5):
    for x in range(W):
        if y == 0:
            c = STONE_LT
        elif y == 1:
            c = STONE_MID
        else:
            # 2..4 渐暗到石砖色
            t = (y - 2) / 2.0
            a0, a1 = hx(STONE_MID), hx(BRICK[0])
            c = tuple(int(a0[i] + (a1[i] - a0[i]) * t) for i in range(3))
            c = '#%02X%02X%02X' % c
        n = random.uniform(0.96, 1.04)
        cc = hx(c)
        slab.putpixel((x, y), (min(255, int(cc[0]*n)), min(255, int(cc[1]*n)), min(255, int(cc[2]*n)), 255))
# 顶面与主体交界的暗棱
for x in range(W):
    slab.putpixel((x, 5), hx(MORTAR) + (255,))

# 5) 铆钉（更亮更大，每 24px 一个）
for bx in range(W // 24):
    cx = bx * 24 + 11
    cy = 21
    pts = [(0, 0, GOLD_LT), (0, 1, GOLD), (-1, 0, GOLD), (1, 0, GOLD),
           (-1, 1, GOLD_DK), (1, 1, GOLD_DK), (0, 2, GOLD_DK), (0, -1, GOLD_LT)]
    for dx, dy, col in pts:
        x, y = cx + dx, cy + dy
        if 0 <= x < W and 0 <= y < 43:
            slab.putpixel((x, y), hx(col) + (255,))

slab.save(os.path.join(OUT, "floor_slab.png"))
print("floor_slab.png", slab.size)

# ---- 下沿厚度带：提亮顶部，与楼板底面衔接 ----
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
