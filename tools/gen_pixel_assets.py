# -*- coding: utf-8 -*-
"""
程序化生成站点像素风素材（原创，CC0）

输出目录：assets/img/
  bg_brick.png    64x64   地牢砖墙，无缝平铺  —— 受光照层
  bg_plate.png    32x32   UI 面板底纹，无缝平铺 —— 不受光照层
  frame_panel.png 24x24   九宫格描边（slice 8）金色华丽框
  frame_card.png  12x12   九宫格描边（slice 4）石板卡片
  frame_tip.png   12x12   九宫格描边（slice 4）提示框

九宫格约束：可拉伸的边必须是"纯色环带"——上/下边纵向每行单色，
左/右边横向每列单色，否则拉伸会出现像素错位。角部不拉伸，可放铆钉。

运行：python tools/gen_pixel_assets.py
"""

import os
import random
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(os.path.dirname(HERE), "assets", "img")


def clamp(v, lo=0, hi=255):
    return max(lo, min(hi, int(v)))


def tint(c, d):
    return (clamp(c[0] + d), clamp(c[1] + d), clamp(c[2] + d))


# ---------------------------------------------------------------- 砖墙
MORTAR = (14, 18, 27)
BRICK = (48, 57, 78)


def make_brick(path, tile=96, bw=48, bh=32, seed=11):
    """运行式错缝砖墙，严格无缝。

    关键约束：
    · tile % bw == 0，砖块网格横向整除，越界砖块取模绕回即天然无缝；
    · rows = tile // bh 必须为【奇数】。错缝周期为 2 行，若 rows 为偶数，
      最后一行与第一行偏移相同，平铺后首尾两行的灰缝会连成一条贯穿
      横线。取奇数后，"末行偏移 bw/2"与"首行偏移 0"继续错缝。
    """
    assert tile % bw == 0
    cols = tile // bw
    rows = tile // bh
    # 错缝周期为 2 行。若 rows 为偶数，最后一行偏移 0、第一行偏移 0，
    # 平铺时首尾两行的灰缝会连成一条贯穿横线 -> 必须让 rows 为奇数，
    # 使"最后一行偏移 bw/2"与"第一行偏移 0"在纵向上继续错缝。
    assert rows % 2 == 1, "行数须为奇数，否则平铺后横缝贯穿"

    rnd = random.Random(seed)
    img = Image.new("RGB", (tile, tile), MORTAR)
    px = img.load()

    for r in range(rows):
        off = (r % 2) * (bw // 2)          # 错缝
        for c in range(-1, cols + 1):
            x0 = c * bw + off
            y0 = r * bh
            draw_one_brick(px, x0, y0, bw, bh, rnd, tile)

    img.save(path)
    return path


def draw_one_brick(px, x0, y0, bw, bh, rnd, tile):
    t = rnd.randint(-6, 6)
    hj = rnd.randint(-3, 3)                  # 轻微色相抖动，避免死板
    base = (clamp(BRICK[0] + t + hj), clamp(BRICK[1] + t), clamp(BRICK[2] + t - hj))
    hi, lo = tint(base, 26), tint(base, -22)
    hl, hd = tint(base, 12), tint(base, -12)

    # 砖块本体严格限制在自己的格子内（左右各留 1px 灰缝，上下同理）
    x1, x2 = x0 + 1, x0 + bw - 2
    y1, y2 = y0 + 1, y0 + bh - 2

    for y in range(y1, y2 + 1):
        for x in range(x1, x2 + 1):
            if y == y1:
                c = hi                        # 顶面受光
            elif y == y2:
                c = lo                        # 底面背光
            elif x == x1:
                c = hl
            elif x == x2:
                c = hd
            else:
                c = base
            px[x % tile, y % tile] = c

    # 颗粒噪点（限制在砖块内部，含边界）
    for _ in range(16):
        nx = rnd.randint(x1, x2)
        ny = rnd.randint(y1, y2)
        cur = px[nx % tile, ny % tile]
        px[nx % tile, ny % tile] = tint(cur, rnd.choice((-11, -6, 6, 10)))

    # 缺角 / 裂纹，打破规整感
    if rnd.random() < 0.22:
        cx = rnd.choice((x1, x2))
        cy = rnd.randint(y1 + 1, y2 - 1)
        px[cx % tile, cy % tile] = MORTAR
        if rnd.random() < 0.6:
            px[cx % tile, (cy + 1) % tile] = MORTAR


# ---------------------------------------------------------------- UI 底纹
PLATE = (20, 26, 41)


def make_plate(path, tile=32, seed=5):
    rnd = random.Random(seed)
    img = Image.new("RGB", (tile, tile), PLATE)
    px = img.load()
    for y in range(tile):
        for x in range(tile):
            px[x, y] = tint(PLATE, rnd.randint(-4, 4))
    for _ in range(20):                       # 零星亮点，避免纯平
        x, y = rnd.randrange(tile), rnd.randrange(tile)
        px[x, y] = tint(PLATE, 9)
    img.save(path)
    return path


# ---------------------------------------------------------------- 九宫格框
def make_frame_panel(path, n=24, band=8):
    """金色华丽框：同心纯色环带 + 四角铆钉。中心透明，露出 CSS 背景。"""
    img = Image.new("RGBA", (n, n), (0, 0, 0, 0))
    px = img.load()
    ring = [
        (5, 7, 12, 255),        # 0 外描边
        (60, 42, 16, 255),      # 1 暗金分隔
        (138, 95, 28, 255),     # 2 金·暗
        (184, 134, 43, 255),    # 3 金·中
        (242, 193, 78, 255),    # 4 金·亮
        (184, 134, 43, 255),    # 5 金·中
        (107, 71, 21, 255),     # 6 金·暗
        (13, 18, 32, 255),      # 7 内阴影
    ]
    hi = (255, 240, 184, 255)

    for y in range(n):
        for x in range(n):
            d = min(x, y, n - 1 - x, n - 1 - y)
            if d >= band:
                continue                       # 中心保持透明
            c = ring[d]
            lx = x if x < band else n - 1 - x
            ly = y if y < band else n - 1 - y
            if 2 <= lx <= 5 and 2 <= ly <= 5:  # 角部铆钉（不参与拉伸）
                if lx == 5 or ly == 5:
                    c = ring[6]
                elif lx <= 3 and ly <= 3:
                    c = ring[4]
                else:
                    c = ring[3]
                if lx == 2 and ly == 2:
                    c = hi
            px[x, y] = c
    img.save(path)
    return path


def make_frame_simple(path, n=12, band=4, gold=False):
    """简洁框：外描边 + 方向性斜面（上/左亮、下/右暗）+ 石面。中心透明。"""
    img = Image.new("RGBA", (n, n), (0, 0, 0, 0))
    px = img.load()
    out = (5, 7, 12, 255)
    if gold:
        bevel = {"top": (184, 134, 43, 255), "bottom": (107, 71, 21, 255),
                 "left": (184, 134, 43, 255), "right": (107, 71, 21, 255)}
        face, face2 = (22, 28, 44, 255), (16, 21, 34, 255)
    else:
        bevel = {"top": (58, 68, 92, 255), "bottom": (8, 11, 18, 255),
                 "left": (40, 48, 68, 255), "right": (12, 16, 26, 255)}
        face, face2 = (24, 30, 46, 255), (17, 22, 35, 255)

    for y in range(n):
        for x in range(n):
            d = min(x, y, n - 1 - x, n - 1 - y)
            if d >= band:
                continue
            if d == 0:
                c = out
            elif d == 1:
                if y == d:
                    c = bevel["top"]
                elif n - 1 - y == d:
                    c = bevel["bottom"]
                elif x == d:
                    c = bevel["left"]
                else:
                    c = bevel["right"]
            elif d == 2:
                c = face
            else:
                c = face2
            px[x, y] = c
    img.save(path)
    return path


# ---------------------------------------------------------------- 头像徽章
def make_badge(path, n=32):
    """像素星形徽章，替代 ★ 字形（字体保持原样，但徽章用像素绘制）。
    中心透明，可叠在任意底色上。"""
    img = Image.new("RGBA", (n, n), (0, 0, 0, 0))
    px = img.load()
    # 16x16 星形位图，1=填充 2=高光 3=暗边
    art = [
        "................",
        ".......11.......",
        "......1221......",
        ".....122221.....",
        "....12222221....",
        "1111122222221111",
        ".12222222222221.",
        "..122222222221..",
        "...1222222221...",
        "....12222221....",
        "....12222221....",
        "...1221..1221...",
        "..1221....1221..",
        ".1221......1221.",
        "..11........11..",
        "................",
    ]
    pal = {".": (0, 0, 0, 0), "1": (242, 193, 78, 255), "2": (255, 240, 184, 255)}
    # art 为 16x16，按 2 倍绘制填满 32x32，保持像素块状感
    for y, row in enumerate(art):
        for x, ch in enumerate(row):
            c = pal.get(ch, (0, 0, 0, 0))
            for dy in (0, 1):
                for dx in (0, 1):
                    if y * 2 + dy < n and x * 2 + dx < n:
                        px[x * 2 + dx, y * 2 + dy] = c
    img.save(path)
    return path


def main():
    os.makedirs(OUT, exist_ok=True)
    made = [
        make_brick(os.path.join(OUT, "bg_brick.png")),
        make_plate(os.path.join(OUT, "bg_plate.png")),
        make_frame_panel(os.path.join(OUT, "frame_panel.png")),
        make_frame_simple(os.path.join(OUT, "frame_card.png"), gold=False),
        make_frame_simple(os.path.join(OUT, "frame_tip.png"), gold=True),
        make_badge(os.path.join(OUT, "badge_star.png")),
    ]
    for p in made:
        im = Image.open(p)
        print("ok  %-16s %s  %s" % (os.path.basename(p), im.size, im.mode))


if __name__ == "__main__":
    main()
