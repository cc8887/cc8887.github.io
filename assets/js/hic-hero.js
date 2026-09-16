/* ============================================================
   HTML-in-Canvas 渐进增强层（实验性特性）
   ------------------------------------------------------------
   支持时  ：把 hero 内容移入 <canvas layoutsubtree>，叠加流动扫光
   不支持时：完全不介入，页面就是普通 DOM，用户感知不到任何缺失
   移动端  ：触屏 / 窄屏 / 减弱动效 一律走降级，不下载不执行
   另：滚出视口自动停帧，不空耗 GPU
   ============================================================ */

(function (w, d) {
  "use strict";

  var DPR_CAP   = 2;    /* 移动端 DPR 常为 3，限到 2 避免像素量翻 9 倍 */
  var SWEEP_SEC = 3.6;  /* 扫光一个周期的秒数 */

  /* ---------- 1. 能力检测：唯一可信开关 ---------- */
  function supports() {
    try {
      var c = d.createElement("canvas");
      c.setAttribute("layoutsubtree", "");
      var ctx = c.getContext("2d");
      return !!ctx && typeof ctx.drawElementImage === "function";
    } catch (e) {
      return false;
    }
  }

  /* ---------- 2. 设备与偏好筛选 ---------- */
  function eligible() {
    var mm = w.matchMedia;
    if (!mm) return false;

    /* 精确指针（桌面鼠标）才启用：移动端 / 触屏整体降级 */
    if (!mm("(hover: hover) and (pointer: fine)").matches) return false;

    /* 尊重系统减弱动效偏好 */
    if (mm("(prefers-reduced-motion: reduce)").matches) return false;

    /* 窄屏不做 */
    if (mm("(max-width: 720px)").matches) return false;

    return true;
  }

  function matrixToCss(m) {
    return "matrix(" + [m.a, m.b, m.c, m.d, m.e, m.f].join(",") + ")";
  }

  /* ---------- 3. 失败兜底：把内容原样搬回 hero ---------- */
  function restore(hero, canvas, src) {
    if (src) while (src.firstChild) hero.appendChild(src.firstChild);
    if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
    hero.classList.remove("is-fx");
  }

  /* ---------- 4. 启用增强 ---------- */
  function enhance(hero) {
    var canvas = d.createElement("canvas");
    canvas.className = "hero-fx";
    canvas.setAttribute("layoutsubtree", "");

    var src = d.createElement("div");
    src.className = "hero-fx-src";

    /* 先把内容搬进 canvas 子树，再切换 hero 的排版类 */
    while (hero.firstChild) src.appendChild(hero.firstChild);
    canvas.appendChild(src);
    hero.appendChild(canvas);
    hero.classList.add("is-fx");

    var ctx = canvas.getContext("2d");
    if (!ctx) { restore(hero, canvas, src); return; }

    var cssW = 0, cssH = 0, dpr = 1;

    function resize() {
      /* 先解除上一次写死的高度，量出内容的自然高度 */
      src.style.height = "auto";

      var r = hero.getBoundingClientRect();
      var h = src.getBoundingClientRect().height || src.scrollHeight || 0;

      cssW = Math.max(1, Math.round(r.width));
      cssH = Math.max(1, Math.ceil(h));
      dpr  = Math.min(w.devicePixelRatio || 1, DPR_CAP);

      if (cssH <= 1) { restore(hero, canvas, src); return; }

      canvas.style.height = cssH + "px";
      src.style.height    = cssH + "px";

      canvas.width  = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    var t0 = 0, running = true, inView = true;

    function frame(now) {
      if (!running) return;

      if (inView && cssH > 1) {
        if (!t0) t0 = now;
        var t = (now - t0) / 1000;

        ctx.clearRect(0, 0, cssW, cssH);

        /* 关键：drawElementImage 返回 DOMMatrix，必须回写给源元素，
           否则点击热区与视觉位置会错位 */
        var m = ctx.drawElementImage(src, 0, 0);
        if (m && typeof m.a === "number") {
          src.style.transform = matrixToCss(m);
        }

        /* 斜向流动扫光：金色高光自左上扫向右下，呼应页面主色 */
        var p  = (t % SWEEP_SEC) / SWEEP_SEC;
        var cx = -cssW * 0.5 + p * (cssW * 2);
        var bw = cssW * 0.42;

        var g = ctx.createLinearGradient(cx - bw, 0, cx + bw, cssH);
        g.addColorStop(0,   "rgba(242,193,78,0)");
        g.addColorStop(0.5, "rgba(242,193,78,0.16)");
        g.addColorStop(1,   "rgba(242,193,78,0)");

        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, cssW, cssH);
        ctx.restore();
      }

      requestAnimationFrame(frame);
    }

    resize();
    if (!canvas.parentNode) return; /* resize 里已判定失败并还原 */

    w.addEventListener("resize", resize);

    if ("IntersectionObserver" in w) {
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
      }, { threshold: 0 }).observe(hero);
    }

    requestAnimationFrame(frame);

    /* 手动开关，便于调试或临时关停 */
    w.__heroFx = {
      stop:  function () { running = false; },
      start: function () { if (!running) { running = true; requestAnimationFrame(frame); } }
    };
  }

  /* ---------- 5. 启动 ---------- */
  function boot() {
    if (!supports() || !eligible()) return;

    var hero = d.getElementById("hero");
    if (!hero || !hero.children.length) return;

    try { enhance(hero); } catch (e) { /* 任何异常都不允许影响主页面 */ }
  }

  /* app.js 以 defer + DOMContentLoaded 渲染 hero，这里晚一帧再接管 */
  if (d.readyState === "loading") {
    d.addEventListener("DOMContentLoaded", function () { requestAnimationFrame(boot); });
  } else {
    requestAnimationFrame(boot);
  }
})(window, document);
