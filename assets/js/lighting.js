/* ============================================================
   2D 火光照明（Pixel Firelight）
   ------------------------------------------------------------
   参考 G:/Github/pixel-firelight-demo/ 的光照模型：
   · 滚动进度 -> 光源半径（缓入缓出）
   · 多频正弦叠加模拟火焰摇曳（半径 + 亮度）
   · 暖色分层衰减 + 黑暗遮罩
   本实现用 2D canvas 绘制（而非 demo 的 WebGPU/WGSL）：柔边由多层
   radial-gradient 叠加近似，无 WebGPU 依赖、无回退分支，兼容性更好。

   受光对象：砖墙背景（全屏光照层）+ 英雄/怪物（画布内部着色）
   不受光对象：全部 UI —— 它们在 --z-ui 层，位于光照层之上。

   为什么英雄/怪物要在画布内部着色？
   画布必须盖在面板之上（怪物沿面板外沿攀爬，压在下面会被不透明面板
   挡住），因此它不可能位于全屏光照层之下。故同一光源在画布内以
   source-atop 单独叠加一次，等效受光。
   ============================================================ */

(function (w, d) {
  "use strict";

  var reduce = w.matchMedia && w.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var host = d.getElementById("lightLayer");
  if (!host) return;

  var cvs = document.createElement("canvas");
  cvs.id = "lightCanvas";
  cvs.setAttribute("aria-hidden", "true");
  host.appendChild(cvs);

  var g = cvs.getContext("2d");
  if (!g) return;

  /* ---------------- 可调参数 ---------------- */
  var MIN_RATIO = 0.20;      // 初始光半径 = 0.20 * min(w,h)
  var FULL_DIAG = 0.58;      // 终态光半径 = 0.58 * 视口对角线
  var SMOOTH = 4;            // 半径/位置追随速率（帧率无关）
  var EDGE_MARGIN = 0.08;    // 光源目标点最多贴到视口边缘 8% 处

  /* 光源：target 为外部设定（英雄位置），cur 平滑追随 */
  var tgt = { x: 0, y: 0, has: false };
  var cur = { x: 0, y: 0, inited: false };
  var radius = 0;
  var last = 0;
  var flick = { r: 1, i: 1 };

  function easeInOutSine(p) { return -(Math.cos(Math.PI * p) - 1) / 2; }

  function scrollProgress() {
    var doc = d.documentElement;
    var max = Math.max(1, doc.scrollHeight - w.innerHeight);
    return Math.min(1, Math.max(0, (w.scrollY || doc.scrollTop || 0) / max));
  }

  function flicker(t) {
    var f1 = Math.sin(t * 8.1) * (0.6 + 0.4 * Math.sin(t * 2.7));
    var f2 = Math.sin(t * 13.7 + 1.2);
    return { r: 1 + 0.028 * f1 + 0.012 * f2, i: 0.94 + 0.06 * f1 + 0.02 * f2 };
  }

  function defaultTarget() {
    return { x: w.innerWidth * 0.5, y: w.innerHeight * 0.22 };
  }

  /* 目标点钳制在视口内（含边距）：避免英雄滚出视口后光源跑到屏外，
     导致整页漆黑。钳制后再平滑追随，故不会有跳变。 */
  function targetNow() {
    var p = tgt.has ? { x: tgt.x, y: tgt.y } : defaultTarget();
    var mx = w.innerWidth * EDGE_MARGIN, my = w.innerHeight * EDGE_MARGIN;
    return {
      x: Math.min(w.innerWidth - mx, Math.max(mx, p.x)),
      y: Math.min(w.innerHeight - my, Math.max(my, p.y))
    };
  }

  function advance(dt) {
    var p = targetNow();
    if (!cur.inited) { cur.x = p.x; cur.y = p.y; cur.inited = true; }

    var s = 1 - Math.exp(-dt * SMOOTH);
    cur.x += (p.x - cur.x) * s;
    cur.y += (p.y - cur.y) * s;

    var base = Math.min(w.innerWidth, w.innerHeight) * MIN_RATIO;
    var full = FULL_DIAG * Math.hypot(w.innerWidth, w.innerHeight);
    var goal = base + (full - base) * easeInOutSine(scrollProgress());
    radius += (goal - radius) * s;
  }

  /* ---------------- 全屏光照层（照亮砖墙） ---------------- */
  function drawBackdrop() {
    var W = w.innerWidth, H = w.innerHeight;
    /* 以 CSS 像素分辨率绘制，再由 CSS 拉伸到视口：
       高分屏下相当于 2x 放大，光边更柔和；同时开销更低 */
    if (cvs.width !== W || cvs.height !== H) { cvs.width = W; cvs.height = H; }
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.clearRect(0, 0, W, H);

    var r = Math.max(48, radius * flick.r);
    var i = flick.i;

    /* 1) 黑暗遮罩：近光透明，远处压暗（保留少量余晖） */
    /* 1) 黑暗遮罩：近光透明，远处压暗。
       上限刻意不压到全黑（约 0.62 而非 0.9+）：实测遮罩过重会让远处砖墙
       亮度掉到 5 以下、纹理完全不可见，与"砖墙背景"的初衷相悖。
       保留余晖后再由下方的暖光叠加提亮，暗部仍可辨轮廓。 */
    var dark = g.createRadialGradient(cur.x, cur.y, 0, cur.x, cur.y, r);
    dark.addColorStop(0.00, "rgba(5,4,3,0.00)");
    dark.addColorStop(0.34, "rgba(6,4,3,0.07)");
    dark.addColorStop(0.60, "rgba(5,3,2,0.19)");
    dark.addColorStop(0.84, "rgba(4,2,1,0.34)");
    dark.addColorStop(1.00, "rgba(3,2,1,0.48)");
    g.globalCompositeOperation = "source-over";
    g.fillStyle = dark;
    g.fillRect(0, 0, W, H);

    /* 2) 暖光叠加：近焰暖白 -> 橙 -> 橙红 */
    g.globalCompositeOperation = "lighter";
    var glow = g.createRadialGradient(cur.x, cur.y, 0, cur.x, cur.y, r);
    glow.addColorStop(0.00, "rgba(255,236,198," + (0.46 * i).toFixed(3) + ")");
    glow.addColorStop(0.18, "rgba(255,198,112," + (0.32 * i).toFixed(3) + ")");
    glow.addColorStop(0.45, "rgba(228,122,42," + (0.17 * i).toFixed(3) + ")");
    glow.addColorStop(0.75, "rgba(150,54,12," + (0.09 * i).toFixed(3) + ")");
    glow.addColorStop(1.00, "rgba(96,28,6," + (0.035 * i).toFixed(3) + ")");
    g.fillStyle = glow;
    g.fillRect(0, 0, W, H);
    g.globalCompositeOperation = "source-over";
  }

  /* ---------------- 画布内部着色（照亮英雄/怪物） ----------------
     ctx 需已按 DPR 缩放（wallgame 内即如此），故此处用 CSS 像素坐标。
     rect 为画布在视口中的位置，用于把光源屏幕坐标换算到画布坐标。 */
  function tintSprites(ctx, rect, cssW, cssH) {
    if (!ctx || !rect) return;
    var lx = cur.x - rect.left;
    var ly = cur.y - rect.top;
    var r = Math.max(48, radius * flick.r);
    var i = flick.i;

    ctx.save();
    /* source-atop：只在已绘制的精灵像素上着色，不影响透明区域 */
    ctx.globalCompositeOperation = "source-atop";

    var dk = ctx.createRadialGradient(lx, ly, 0, lx, ly, r);
    dk.addColorStop(0.00, "rgba(255,242,214,0.03)");
    dk.addColorStop(0.42, "rgba(44,20,7,0.30)");
    dk.addColorStop(0.78, "rgba(10,6,3,0.66)");
    dk.addColorStop(1.00, "rgba(5,3,2,0.84)");
    ctx.fillStyle = dk;
    ctx.fillRect(0, 0, cssW, cssH);

    var gl = ctx.createRadialGradient(lx, ly, 0, lx, ly, r);
    gl.addColorStop(0.00, "rgba(255,216,152," + (0.40 * i).toFixed(3) + ")");
    gl.addColorStop(0.32, "rgba(255,172,82," + (0.22 * i).toFixed(3) + ")");
    gl.addColorStop(0.68, "rgba(184,72,20,0.05)");
    gl.addColorStop(1.00, "rgba(120,40,10,0)");
    ctx.fillStyle = gl;
    ctx.fillRect(0, 0, cssW, cssH);
    ctx.restore();
  }

  /* ---------------- 主循环 ---------------- */
  function frame(now) {
    var t = now / 1000;
    var dt = last ? Math.min(0.05, t - last) : 0.016;
    last = t;
    if (!reduce) flick = flicker(t);
    advance(dt);
    drawBackdrop();
    requestAnimationFrame(frame);
  }

  /* 降低动态：不做闪烁，且仅在滚动/缩放时重绘 */
  function onStatic() {
    advance(1);
    drawBackdrop();
  }
  if (reduce) {
    w.addEventListener("scroll", onStatic, { passive: true });
    w.addEventListener("resize", onStatic);
    onStatic();
  } else {
    requestAnimationFrame(frame);
  }

  /* ---------------- 对外接口 ---------------- */
  w.PixelLight = {
    /* 由 wallgame 每帧写入英雄的屏幕坐标（含滚动偏移） */
    setSource: function (x, y) { tgt.x = x; tgt.y = y; tgt.has = true; },
    clearSource: function () { tgt.has = false; },
    tintSprites: tintSprites,
    /* 便于调试/外部校验 */
    debug: function () {
      return { x: cur.x, y: cur.y, r: radius, flickR: flick.r, flickI: flick.i, reduce: reduce };
    }
  };
})(window, document);
