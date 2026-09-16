/* ============================================================
   2D 火光照明（Pixel Firelight）—— 顶部条状光源
   ------------------------------------------------------------
   光源形态：横跨视口的【条状光带】，中心 y = 0，即与页面顶部平齐。
   实现上是一个极扁的椭圆（水平半轴 rx 远大于垂直半轴 ry），
   上半部分被裁在视口之外，看到的只有光自上而下铺下来的那一半。

   参考 G:/Github/pixel-firelight-demo/ 的光照模型：
   · 滚动进度 -> 光带垂直照射距离（缓入缓出）
   · 多频正弦叠加模拟火焰摇曳（距离 + 亮度）
   · 暖色分层衰减 + 黑色蒙版（destination-out 擦出亮区）
   本实现用 2D canvas 绘制（而非 demo 的 WebGPU/WGSL）：柔边由多层
   gradient 叠加近似，无 WebGPU 依赖、无回退分支，兼容性更好。

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
  /* 条状光源 = 以 (x, BAR_TOP) 为中心的极扁椭圆；BAR_WIDE 越大，
     横向越接近"整条均匀发光"，越小则两端衰减越明显（更像一段灯管）。 */
  var MIN_REACH = 0.22;      // 初始垂直照射距离 = 0.22 * 视口高
  var FULL_REACH = 1.35;     // 终态垂直照射距离 = 1.35 * 视口高（满屏）
  var BAR_WIDE = 2.0;        // 水平半轴 = 2.0 * 视口宽
  var BAR_TOP = 0;           // 光带中心 y（0 = 与页面顶部平齐）
  var TRACK_X = 0.25;        // 光带中心 x 跟随英雄的比例（0 = 固定居中）
  var SMOOTH = 4;            // 距离/位置追随速率（帧率无关）
  var EDGE_MARGIN = 0.08;    // 光带中心 x 最多贴到视口边缘 8% 处
  /* 完全照不到处残留的黑度（0 = 全亮，1 = 纯黑）。
     1 即"火光照不到 = 黑漆漆"；若希望留一点余晖可下调（如 0.88）。 */
  var MASK_FAR = 1.0;

  /* 光源：target 为外部设定（英雄位置），cur 平滑追随 */
  var tgt = { x: 0, y: 0, has: false };
  var cur = { x: 0, y: 0, inited: false };
  var reach = 0;
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

  /* 条状光源固定贴在顶部（y = BAR_TOP），只有 x 会随英雄轻微平移。
     TRACK_X = 0 时完全居中，1 时完全跟随英雄。 */
  function targetNow() {
    var W = w.innerWidth;
    var mid = W * 0.5;
    var hx = tgt.has ? tgt.x : mid;
    var x = mid + (hx - mid) * TRACK_X;
    var mx = W * EDGE_MARGIN;
    return { x: Math.min(W - mx, Math.max(mx, x)), y: BAR_TOP };
  }

  function advance(dt) {
    var p = targetNow();
    if (!cur.inited) { cur.x = p.x; cur.y = p.y; cur.inited = true; }

    var s = 1 - Math.exp(-dt * SMOOTH);
    cur.x += (p.x - cur.x) * s;
    cur.y += (p.y - cur.y) * s;

    var base = w.innerHeight * MIN_REACH;
    var full = w.innerHeight * FULL_REACH;
    var goal = base + (full - base) * easeInOutSine(scrollProgress());
    reach += (goal - reach) * s;
  }

  /* 光带半轴：ry 随滚动增长，rx 恒为视口宽的数倍 */
  function geom() {
    return {
      cx: cur.x,
      cy: cur.y,
      ry: Math.max(48, reach * flick.r),
      rx: Math.max(1, w.innerWidth * BAR_WIDE)
    };
  }

  /* 椭圆渐变：canvas 的径向渐变只能是正圆，先用 scale 把坐标系横向
     拉伸，再画正圆渐变，得到 rx/ry 的椭圆。这是标准做法。
     铺满的矩形用屏幕坐标传入，内部换算回拉伸后的局部坐标。 */
  function fillEllipse(ctx, cx, cy, rx, ry, x0, y0, bw, bh, stops) {
    var sx = Math.max(1e-4, rx / ry);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(sx, 1);
    var grd = ctx.createRadialGradient(0, 0, 0, 0, 0, ry);
    for (var k = 0; k < stops.length; k++) grd.addColorStop(stops[k][0], stops[k][1]);
    ctx.fillStyle = grd;
    ctx.fillRect((x0 - cx) / sx, y0 - cy, bw / sx, bh);
    ctx.restore();
  }

  /* 衰减曲线：归一化距离 d（0 = 紧贴光带，1 = 照射边缘）-> 蒙版黑度
     比例。0 = 完全透明（全亮），1 = 全黑。 */
  var FALLOFF = [
    [0.00, 0.00], [0.22, 0.04], [0.42, 0.22],
    [0.60, 0.50], [0.78, 0.78], [0.92, 0.93], [1.00, 1.00]
  ];

  /* 主画布：擦掉蒙版 -> alpha = 1 - MASK_FAR * 黑度 */
  function holeStops() {
    var out = [];
    for (var k = 0; k < FALLOFF.length; k++) {
      out.push([FALLOFF[k][0],
        "rgba(0,0,0," + (1 - MASK_FAR * FALLOFF[k][1]).toFixed(3) + ")"]);
    }
    return out;
  }

  /* 精灵画布：直接压暗 -> alpha = MASK_FAR * 黑度 */
  function darkStops() {
    var out = [];
    for (var k = 0; k < FALLOFF.length; k++) {
      out.push([FALLOFF[k][0],
        "rgba(0,0,0," + (MASK_FAR * FALLOFF[k][1]).toFixed(3) + ")"]);
    }
    return out;
  }

  /* ---------------- 全屏光照层：黑幕蒙版 + 擦出光带 ----------------
     模型（与"画一层深色渐变"相反）：
       1) 先铺满一层【纯黑蒙版】—— 照不到就是黑漆漆
       2) 再沿光带用 destination-out 把蒙版【擦亮】
          —— 蒙版的"透明度"即是光照强度：越靠近顶部光带擦得越透
       3) 最后在亮区内叠加暖色火光
     这样照不到处是真正的纯黑，而不是"半透明的深色"。 */
  function drawBackdrop() {
    var W = w.innerWidth, H = w.innerHeight;
    /* 以 CSS 像素分辨率绘制，再由 CSS 拉伸到视口：
       高分屏下相当于 2x 放大，光边更柔和；同时开销更低 */
    if (cvs.width !== W || cvs.height !== H) { cvs.width = W; cvs.height = H; }
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.clearRect(0, 0, W, H);

    var q = geom();
    var i = flick.i;

    /* 1) 铺满纯黑蒙版 */
    g.globalCompositeOperation = "source-over";
    g.fillStyle = "#000";
    g.fillRect(0, 0, W, H);

    /* 2) 擦出光带 */
    g.globalCompositeOperation = "destination-out";
    fillEllipse(g, q.cx, q.cy, q.rx, q.ry, 0, 0, W, H, holeStops());

    /* 3) 暖光叠加：近光带暖白 -> 橙 -> 橙红（只落在亮区内） */
    g.globalCompositeOperation = "source-over";
    fillEllipse(g, q.cx, q.cy, q.rx, q.ry, 0, 0, W, H, [
      [0.00, "rgba(255,236,198," + (0.40 * i).toFixed(3) + ")"],
      [0.18, "rgba(255,198,112," + (0.28 * i).toFixed(3) + ")"],
      [0.45, "rgba(228,122,42," + (0.15 * i).toFixed(3) + ")"],
      [0.75, "rgba(150,54,12," + (0.07 * i).toFixed(3) + ")"],
      [1.00, "rgba(96,28,6,0)"]
    ]);
  }

  /* ---------------- 画布内部着色（照亮英雄/怪物） ----------------
     ctx 需已按 DPR 缩放（wallgame 内即如此），故此处用 CSS 像素坐标。
     rect 为画布在视口中的位置，用于把光源屏幕坐标换算到画布坐标。 */
  function tintSprites(ctx, rect, cssW, cssH) {
    if (!ctx || !rect) return;
    var q = geom();
    /* 光带是"视口级"的物理光源，故半轴用视口宽而非画布宽，
       换算到画布坐标后与全屏层严格一致。 */
    var lx = q.cx - rect.left;
    var ly = q.cy - rect.top;
    var i = flick.i;

    /* 与全屏层同一模型：先用黑色把精灵压暗（压暗量 = 蒙版黑度），
       再叠加暖光。离光带越远压得越黑，等效"被蒙版遮住"。 */
    ctx.save();
    ctx.globalCompositeOperation = "source-atop";
    fillEllipse(ctx, lx, ly, q.rx, q.ry, 0, 0, cssW, cssH, darkStops());
    fillEllipse(ctx, lx, ly, q.rx, q.ry, 0, 0, cssW, cssH, [
      [0.00, "rgba(255,226,168," + (0.42 * i).toFixed(3) + ")"],
      [0.28, "rgba(255,176,88," + (0.24 * i).toFixed(3) + ")"],
      [0.62, "rgba(200,86,26," + (0.07 * i).toFixed(3) + ")"],
      [1.00, "rgba(120,40,10,0)"]
    ]);
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
    /* 由 wallgame 每帧写入英雄的屏幕坐标（含滚动偏移）。
       条状光源只用其 x（按 TRACK_X 比例轻微平移），y 恒为 BAR_TOP。 */
    setSource: function (x, y) { tgt.x = x; tgt.y = y; tgt.has = true; },
    clearSource: function () { tgt.has = false; },
    tintSprites: tintSprites,
    /* 便于调试/外部校验 */
    debug: function () {
      var q = geom();
      return {
        x: q.cx, y: q.cy,
        r: reach, rx: q.rx, ry: q.ry,
        reach: reach,
        flickR: flick.r, flickI: flick.i, reduce: reduce
      };
    }
  };
})(window, document);
