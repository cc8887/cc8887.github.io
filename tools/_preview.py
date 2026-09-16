# -*- coding: utf-8 -*-
"""生成平铺预览图，用于肉眼确认无缝与整体观感（不入库，仅本地查看）"""
from PIL import Image
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(os.path.dirname(HERE), "assets", "img")

im = Image.open(os.path.join(OUT, "bg_brick.png")).convert("RGB")
w, h = im.size
big = Image.new("RGB", (w * 4, h * 3))
for x in range(0, w * 4, w):
    for y in range(0, h * 3, h):
        big.paste(im, (x, y))

# 与 UI 元素合成，检查协调度
plate = Image.open(os.path.join(OUT, "bg_plate.png")).convert("RGB")
panel = Image.open(os.path.join(OUT, "frame_panel.png")).convert("RGBA")
card = Image.open(os.path.join(OUT, "frame_card.png")).convert("RGBA")

# 面板：底纹 + 九宫格拉伸到 300x160
pw, ph = 300, 160
plate_bg = Image.new("RGB", (pw, ph))
for x in range(0, pw, plate.width):
    for y in range(0, ph, plate.height):
        plate_bg.paste(plate, (x, y))


def nine(img, W, H, band):
    n = img.size[0]
    edge = n - band * 2
    out = img.copy()
    # 用 PIL 分块缩放拼接，模拟 border-image 的 stretch 行为
    res = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    corners = {
        "tl": img.crop((0, 0, band, band)),
        "tr": img.crop((n - band, 0, n, band)),
        "bl": img.crop((0, n - band, band, n)),
        "br": img.crop((n - band, n - band, n, n)),
    }
    top = img.crop((band, 0, n - band, band)).resize((W - band * 2, band), Image.NEAREST)
    bot = img.crop((band, n - band, n - band, n)).resize((W - band * 2, band), Image.NEAREST)
    lef = img.crop((0, band, band, n - band)).resize((band, H - band * 2), Image.NEAREST)
    rig = img.crop((n - band, band, n, n - band)).resize((band, H - band * 2), Image.NEAREST)
    res.paste(corners["tl"], (0, 0))
    res.paste(corners["tr"], (W - band, 0))
    res.paste(corners["bl"], (0, H - band))
    res.paste(corners["br"], (W - band, H - band))
    res.paste(top, (band, 0))
    res.paste(bot, (band, H - band))
    res.paste(lef, (0, band))
    res.paste(rig, (W - band, band))
    return res


pf = nine(panel, pw, ph, 8)
plate_bg.paste(pf, (0, 0), pf)

# 卡片
cw, ch = 260, 70
card_bg = Image.new("RGB", (cw, ch), (24, 30, 46))
cf = nine(card, cw, ch, 4)
card_bg.paste(cf, (0, 0), cf)

canvas = Image.new("RGB", (w * 4, h * 3 + ph + ch + 40), (9, 12, 19))
canvas.paste(big, (0, 0))
canvas.paste(plate_bg, (20, h * 3 + 10))
canvas.paste(card_bg, (20, h * 3 + 10 + ph + 10))
canvas = canvas.resize((canvas.width * 2, canvas.height * 2), Image.NEAREST)
canvas.save(os.path.join(HERE, "_preview.png"))
print("preview ->", os.path.join(HERE, "_preview.png"), canvas.size)
