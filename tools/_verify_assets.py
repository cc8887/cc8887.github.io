# -*- coding: utf-8 -*-
"""校验像素素材。

砖墙的无错判据（重要）：
  错缝砖墙的横向灰缝本来就是【贯穿直线】，用"是否贯穿"判断是错的。
  真正要验证的是【灰缝间距是否处处均匀】 —— 若平铺边界处间距与内部
  不同（例如内部 2px、边界 3px），才会出现肉眼可见的接缝。

  做法：对每一列，取该列所有灰缝行的 y 坐标，检查相邻灰缝间距是否
  恒等于 bh；对每一行同理检查竖缝间距是否恒等于 bw。
"""
from PIL import Image
import os
from collections import Counter

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(os.path.dirname(HERE), "assets", "img")

MORTAR = (9, 12, 19)


def is_mortar(p):
    return abs(p[0] - MORTAR[0]) <= 8 and abs(p[1] - MORTAR[1]) <= 8 and abs(p[2] - MORTAR[2]) <= 8


def check_pitch(fname, bw=48, bh=32, reps=3):
    """平铺 reps x reps，检查灰缝间距是否恒为 bw / bh"""
    im = Image.open(os.path.join(OUT, fname)).convert("RGB")
    w, h = im.size
    big = Image.new("RGB", (w * reps, h * reps))
    for x in range(0, w * reps, w):
        for y in range(0, h * reps, h):
            big.paste(im, (x, y))
    px = big.load()

    bad_v, bad_h = [], []
    # 纵向：每列检查灰缝行间距
    for x in range(0, big.width, 7):
        seams = [y for y in range(big.height) if is_mortar(px[x, y])]
        # 归并连续灰缝为一条缝
        groups = []
        for y in seams:
            if groups and y - groups[-1][-1] == 1:
                groups[-1].append(y)
            else:
                groups.append([y])
        centers = [sum(g) / len(g) for g in groups]
        pitch = [round(centers[i + 1] - centers[i]) for i in range(len(centers) - 1)]
        odd = [p for p in pitch if abs(p - bh) > 1]
        if odd:
            bad_v.append((x, Counter(odd).most_common(2)))
    # 横向：每行检查灰缝列间距
    for y in range(0, big.height, 7):
        seams = [x for x in range(big.width) if is_mortar(px[x, y])]
        groups = []
        for x in seams:
            if groups and x - groups[-1][-1] == 1:
                groups[-1].append(x)
            else:
                groups.append([x])
        centers = [sum(g) / len(g) for g in groups]
        pitch = [round(centers[i + 1] - centers[i]) for i in range(len(centers) - 1)]
        odd = [p for p in pitch if abs(p - bw) > 1]
        if odd:
            bad_h.append((y, Counter(odd).most_common(2)))
    return bad_v[:3], bad_h[:3]


print("== 灰缝间距均匀性检查（异常列/行 为空 = 完全无缝）==")
v, hh = check_pitch("bg_brick.png")
print("  bg_brick.png  异常列=%s" % (v if v else "无"))
print("                异常行=%s" % (hh if hh else "无"))

print("\n== 九宫格拉伸安全性（可拉伸边必须是纯色环带）==")
for f, band in [("frame_panel.png", 8), ("frame_card.png", 4), ("frame_tip.png", 4)]:
    im = Image.open(os.path.join(OUT, f)).convert("RGBA")
    n = im.size[0]
    px = im.load()
    bad = []
    for d in range(band):
        if len({px[x, d] for x in range(band, n - band)}) != 1:
            bad.append("上边%d行" % d)
        if len({px[x, n - 1 - d] for x in range(band, n - band)}) != 1:
            bad.append("下边%d行" % d)
        if len({px[d, y] for y in range(band, n - band)}) != 1:
            bad.append("左边%d列" % d)
        if len({px[n - 1 - d, y] for y in range(band, n - band)}) != 1:
            bad.append("右边%d列" % d)
    print("  %-16s %s" % (f, "OK" if not bad else "问题 -> " + ", ".join(bad[:6])))
