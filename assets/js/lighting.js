/* ============================================================
   2D 火光照明（Pixel Firelight）—— 每个分页一个独立光源
   ------------------------------------------------------------
   【为什么改成"每页一个光源"】
   原实现是单个 position:fixed 的全局光照层（z-index:2）。分页改造后两页
   都进了 .deck（z-index:3 + position:relative → 独立堆叠上下文），并且两页
   各有不透明背景（翻页遮盖需要）。全局光照层于是被整个 .deck 压在下面，
   对最终画面零贡献 —— 实测"隐藏光照层"画面亮度毫无变化。

   改为：光照层放进【每一页内部】（.page-light，z-index:0），压在该页背景
   之上、页内内容（--z-ui:3）之下。两个独立光源：
     · 第一页光源：随第一页滚动进度增长
     · 第二页光源：随第二页滚动进度增长（进入下一层，越往里越亮）
   同时两页背景由纯色改为砖墙贴图，光照才有东西可照。

   光源形态：横跨页面宽度的【条状光带】，中心 y = 0（与光照层顶边平齐），
   上半被裁在光照层之外，只看到光自上而下铺下来的那一半。
   参考 G:/Github/pixel-firelight-demo/ 的光照模型：
     · 滚动进度 -> 光带垂直照射距离（缓入缓出）
     · 多频正弦叠加模拟火焰摇曳（距离 + 亮度）
     · 暖色分层衰减 + 黑色蒙版（destination-out 擦出亮区）

   受光对象：该页砖墙背景（页内光照层）
   不受光对象：全部 UI —— 在 --z-ui:3 层，位于光照层之上
   英雄/怪物：画布在 UI 层之上，故用同一光源在画布内 source-atop 叠加一次
   ============================================================ */

(function (w, d) {
  "use strict";

  var reduce = w.matchMedia && w.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ALL = [];

  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
  function easeInOutSine(p) { return -(Math.cos(Math.PI * p) - 1) / 2; }

  /* 衰减曲线：归一化距离（0 = 紧贴光带，1 = 照射边缘）-> 蒙版黑度 */
  var FALLOFF = [
    [0.00, 0.00], [0.22, 0.04], [0.42, 0.22],
    [0.60, 0.50], [0.78, 0.78], [0.92, 0.93], [1.00, 1.00]
  ];

  /* 页内画布：擦掉蒙版 -> alpha = 1 - maskFar * 黑度 */
  function holeStops(mf) {
    var out = [];
    for (var k = 0; k < FALLOFF.length; k++) {
      out.push([FALLOFF[k][0], "rgba(0,0,0," + (1 - mf * FALLOFF[k][1]).toFixed(3) + ")"]);
    }
    return out;
  }

  /* 精灵画布：直接压暗 -> alpha = maskFar * 黑度 */
  function darkStops(mf) {
    var out = [];
    for (var k = 0; k < FALLOFF.length; k++) {
      out.push([FALLOFF[k][0], "rgba(0,0,0," + (mf * FALLOFF[k][1]).toFixed(3) + ")"]);
    }
    return out;
  }

  /* 椭圆渐变：径向渐变只能画正圆，先横向拉伸坐标系再画正圆 = 椭圆。
     铺满的矩形用画布坐标传入，内部换算回拉伸后的局部坐标。 */
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

  /* 多频正弦叠加：火焰摇曳（距离 + 亮度） */
  function flicker(t) {
    var f1 = Math.sin(t * 8.1) * (0.6 + 0.4 * Math.sin(t * 2.7));
    var f2 = Math.sin(t * 13.7 + 1.2);
    return { r: 1 + 0.028 * f1 + 0.012 * f2, i: 0.94 + 0.06 * f1 + 0.02 * f2 };
  }

  /* ---------------- 光源工厂：每个宿主元素一个独立光源 ---------------- */
  function makeLight(host, cfg) {
    if (!host) return null;

    var cvs = d.createElement("canvas");
    cvs.className = "light-canvas";
    cvs.setAttribute("aria-hidden", "true");
    host.appendChild(cvs);
    var g = cvs.getContext("2d");
    if (!g) return null;

    var tgt = { x: 0, y: 0, has: false };
    var cur = { x: 0, y: 0, inited: false };
    var reach = 0;
    var flick = { r: 1, i: 1 };

    function vw() { return Math.max(1, cvs.clientWidth || w.innerWidth || 1); }
    function vh() { return Math.max(1, cvs.clientHeight || w.innerHeight || 1); }

    function size() {
      var cw = Math.round(vw()), ch = Math.round(vh());
      if (cvs.width !== cw) cvs.width = cw;
      if (cvs.height !== ch) cvs.height = ch;
    }

    function geom() {
      return {
        cx: cur.x,
        cy: cur.y,
        ry: Math.max(48, reach * flick.r),
        rx: Math.max(1, vw() * cfg.barWide)
      };
    }

    /* 条状光源贴顶（y = barTop），x 随英雄轻微平移（trackX） */
    function targetNow() {
      var W = vw(), mid = W * 0.5;
      var hx = tgt.has ? tgt.x : mid;
      var x = mid + (hx - mid) * cfg.trackX;
      var mx = W * cfg.edgeMargin;
      return { x: clamp(x, mx, Math.max(mx, W - mx)), y: cfg.barTop };
    }

    function advance(dt) {
      var p = targetNow();
      if (!cur.inited) { cur.x = p.x; cur.y = p.y; cur.inited = true; }

      var s = 1 - Math.exp(-dt * cfg.smooth);
      cur.x += (p.x - cur.x) * s;
      cur.y += (p.y - cur.y) * s;

      var H = vh();
      var base = H * cfg.minReach;
      var full = H * cfg.fullReach;
      var goal = base + (full - base) * easeInOutSine(clamp(cfg.progress(), 0, 1));
      reach += (goal - reach) * s;
    }

    /* 黑幕蒙版 + destination-out 擦出光带 + 暖光叠加。
       这样照不到处是真正的纯黑，而不是"半透明的深色"。 */
    function draw() {
      size();
      var W = cvs.width, H = cvs.height;
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.clearRect(0, 0, W, H);

      var q = geom();
      var i = flick.i;

      g.globalCompositeOperation = "source-over";
      g.fillStyle = "#000";
      g.fillRect(0, 0, W, H);

      g.globalCompositeOperation = "destination-out";
      fillEllipse(g, q.cx, q.cy, q.rx, q.ry, 0, 0, W, H, holeStops(cfg.maskFar));

      g.globalCompositeOperation = "source-over";
      fillEllipse(g, q.cx, q.cy, q.rx, q.ry, 0, 0, W, H, cfg.warm(i));
    }

    /* 画布内部着色（照亮英雄/怪物）：
       画布必须盖在面板之上，故不可能位于光照层之下，
       只能在画布内用同一光源以 source-atop 单独叠加一次。 */
    function tintSprites(ctx, rect, cssW, cssH) {
      if (!ctx || !rect) return;
      var q = geom();
      var i = flick.i;
      var cr = cvs.getBoundingClientRect();
      /* 光源是"视口级"的，换算到画布局部坐标后与页内光照层严格一致 */
      var lx = q.cx + cr.left - rect.left;
      var ly = q.cy + cr.top - rect.top;

      ctx.save();
      ctx.globalCompositeOperation = "source-atop";
      fillEllipse(ctx, lx, ly, q.rx, q.ry, 0, 0, cssW, cssH, darkStops(cfg.maskFar));
      fillEllipse(ctx, lx, ly, q.rx, q.ry, 0, 0, cssW, cssH, cfg.tint(i));
      ctx.restore();
    }

    /* 宿主页不在视口内就不必重绘，省一整块画布的填充开销 */
    function inView() {
      var r = host.getBoundingClientRect();
      var H = w.innerHeight || d.documentElement.clientHeight || 0;
      return r.bottom > 0 && r.top < H;
    }

    var api = {
      canvas: cvs,
      setSource: function (x, y) { tgt.x = x; tgt.y = y; tgt.has = true; },
      clearSource: function () { tgt.has = false; },
      tintSprites: tintSprites,
      advance: advance,
      draw: draw,
      isVisible: inView,
      setFlicker: function (f) { flick = f; },
      debug: function () {
        var q = geom();
        return {
          x: q.cx, y: q.cy, r: reach, rx: q.rx, ry: q.ry,
          reach: reach, flickR: flick.r, flickI: flick.i,
          w: cvs.width, h: cvs.height, visible: inView()
        };
      }
    };
    ALL.push(api);
    return api;
  }

  /* ---------------- 暖色分层（近光带暖白 -> 橙 -> 橙红） ---------------- */
  function warmStops(i) {
    return [
      [0.00, "rgba(255,236,198," + (0.40 * i).toFixed(3) + ")"],
      [0.18, "rgba(255,198,112," + (0.28 * i).toFixed(3) + ")"],
      [0.45, "rgba(228,122,42," + (0.15 * i).toFixed(3) + ")"],
      [0.75, "rgba(150,54,12," + (0.07 * i).toFixed(3) + ")"],
      [1.00, "rgba(96,28,6,0)"]
    ];
  }
  function tintStops(i) {
    return [
      [0.00, "rgba(255,226,168," + (0.42 * i).toFixed(3) + ")"],
      [0.28, "rgba(255,176,88," + (0.24 * i).toFixed(3) + ")"],
      [0.62, "rgba(200,86,26," + (0.07 * i).toFixed(3) + ")"],
      [1.00, "rgba(120,40,10,0)"]
    ];
  }

  var BASE = {
    minReach: 0.22,     // 初始垂直照射距离 = 0.22 * 视口高
    fullReach: 1.35,    // 终态垂直照射距离 = 1.35 * 视口高
    barWide: 2.0,       // 水平半轴 = 2.0 * 页宽
    barTop: 0,          // 光带中心 y（0 = 与光照层顶边平齐）
    trackX: 0.25,       // 光带中心 x 跟随英雄的比例
    smooth: 4,          // 距离/位置追随速率（帧率无关）
    edgeMargin: 0.08,   // 光带中心 x 最多贴到边缘 8% 处
    maskFar: 1.0,       // 完全照不到处残留的黑度（1 = 纯黑）
    warm: warmStops,
    tint: tintStops
  };

  function mix(over) {
    var r = {}, k;
    for (k in BASE) if (Object.prototype.hasOwnProperty.call(BASE, k)) r[k] = BASE[k];
    for (k in over) if (Object.prototype.hasOwnProperty.call(over, k)) r[k] = over[k];
    return r;
  }

  /* ---------------- 两页各自的滚动进度 ---------------- */
  var p2 = d.getElementById("pageResume");

  /* 第一页：向下滚动即点亮（第一页是 sticky，用 scrollY 最直接） */
  function introProgress() {
    var vh = w.innerHeight || 1;
    var y = w.scrollY || d.documentElement.scrollTop || 0;
    return clamp(y / (vh * 0.75), 0, 1);
  }

  /* 第二页：顶边从视口下沿升起开始算，滚入约 1.8 屏后照满
     —— "刚下到下一层时是暗的，越往里走越亮" */
  function resumeProgress() {
    if (!p2) return 1;
    var vh = w.innerHeight || 1;
    return clamp((vh - p2.getBoundingClientRect().top) / (vh * 1.8), 0, 1);
  }

  var introLight = makeLight(d.getElementById("lightIntro"), mix({
    trackX: 0,
    progress: introProgress
  }));

  var resumeLight = makeLight(d.getElementById("lightResume"), mix({
    trackX: 0.25,
    /* 下一层：minReach 更低 = 刚下到这层时更暗，探索感更强；
       fullReach 更大 = 读到底时照得更通透 */
    minReach: 0.14,
    fullReach: 1.75,
    progress: resumeProgress
  }));

  /* ---------------- 主循环 ---------------- */
  var last = 0;

  function frame(now) {
    var t = now / 1000;
    var dt = last ? Math.min(0.05, t - last) : 0.016;
    last = t;
    var f = flicker(t);
    for (var k = 0; k < ALL.length; k++) {
      ALL[k].setFlicker(f);
      ALL[k].advance(dt);
      if (ALL[k].isVisible()) ALL[k].draw();
    }
    requestAnimationFrame(frame);
  }

  /* 降低动态：不做闪烁，且仅在滚动/缩放时重绘 */
  function onStatic() {
    for (var k = 0; k < ALL.length; k++) {
      ALL[k].advance(1);
      if (ALL[k].isVisible()) ALL[k].draw();
    }
  }

  if (reduce) {
    w.addEventListener("scroll", onStatic, { passive: true });
    w.addEventListener("resize", onStatic);
    onStatic();
  } else {
    requestAnimationFrame(frame);
  }

  /* ---------------- 对外接口 ----------------
     w.PixelLight 保持兼容：指向第二页光源（英雄/怪物在第二页），
     wallgame 直接用它做 setSource / tintSprites。 */
  var NOOP = {
    setSource: function () {}, clearSource: function () {},
    tintSprites: function () {}, debug: function () { return null; }
  };

  w.PixelLight = resumeLight || introLight || NOOP;
  w.PixelLights = {
    intro: introLight,
    resume: resumeLight,
    all: ALL,
    debug: function () {
      return {
        reduce: reduce,
        intro: introLight ? introLight.debug() : null,
        resume: resumeLight ? resumeLight.debug() : null
      };
    }
  };
})(window, document);
