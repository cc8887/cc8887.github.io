/* ============================================================
   分页（幻灯片式翻页）
   ------------------------------------------------------------
   结构：.deck 内上下两页 + 中间一段"门限"空白
     · .page--intro  ：第一页，sticky 钉在顶部（内容超出视口时自动
                       退化为普通流，否则超出的部分永远滚不到）
     · .page-gate    ：翻页门限，滚过这段距离之前第二页不会出现
     · .page--resume ：第二页，正常流，随滚动上移盖住第一页

   为什么第二页不用 transform？
   transform 会让内部 .col-side 的 sticky 面板失去正确的吸附参照，
   导致数值面板不跟随。故翻页位移完全交给正常滚动完成，JS 只负责
   第一页的淡出与轻微上移视差，以及门限高度的写入。
   ============================================================ */

(function (w, d) {
  "use strict";

  /* 翻页门限：滚动多少（视口高倍数）之后第二页才开始出现 */
  var GATE_VH = 0.6;
  /* 第一页淡出完成的时机：第二页覆盖到视口的这个比例时完全消失 */
  var FADE_END = 0.42;
  /* 第一页淡出同时上移的幅度（自身高度百分比），制造视差 */
  var LIFT_PCT = 5;

  var el = {
    p1: d.getElementById("pageIntro"),
    p2: d.getElementById("pageResume"),
    gate: d.getElementById("pageGate"),
    hint: d.getElementById("pageHint")
  };
  if (!el.p1 || !el.p2) return;

  var rafPending = false;

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }

  /* 门限高度：按视口写入。矮屏下适当收窄，避免"滚很久才翻页" */
  function fitGate() {
    if (!el.gate) return;
    var vh = w.innerHeight || d.documentElement.clientHeight;
    el.gate.style.height = Math.round(vh * GATE_VH) + "px";
  }

  /* 第一页是否钉住：内容高度超过视口就不能 sticky，
     否则超出部分会被永久压在视口外。 */
  function fitIntro() {
    var vh = w.innerHeight || d.documentElement.clientHeight;
    el.p1.classList.add("is-static");
    var contentH = el.p1.offsetHeight;
    if (contentH <= vh + 1) el.p1.classList.remove("is-static");
    return !el.p1.classList.contains("is-static");
  }

  function apply() {
    rafPending = false;
    var vh = w.innerHeight || d.documentElement.clientHeight;

    /* 第二页顶边相对视口的位置 -> 覆盖进度
       0 = 顶边还在视口下沿（未出现），1 = 已完全盖满视口 */
    var r = el.p2.getBoundingClientRect();
    var cover = clamp((vh - r.top) / Math.max(1, vh), 0, 1);

    /* 第一页：随第二页覆盖而淡出并轻微上移 */
    var fade = clamp(cover / FADE_END, 0, 1);
    el.p1.style.opacity = String(1 - fade);
    el.p1.style.transform = "translateY(" + (-fade * LIFT_PCT).toFixed(3) + "%)";

    /* 门限期提示：第一页已钉住、第二页尚未出现时显示 */
    if (el.hint) {
      var show = cover < 0.04 && (w.scrollY || 0) < vh * GATE_VH * 0.9;
      el.hint.style.opacity = show ? "1" : "0";
    }
  }

  function onScroll() {
    if (!rafPending) { rafPending = true; requestAnimationFrame(apply); }
  }

  function refit() {
    fitGate();
    fitIntro();
    apply();
  }

  w.addEventListener("scroll", onScroll, { passive: true });
  w.addEventListener("resize", refit);
  w.addEventListener("load", refit);
  if (d.fonts && d.fonts.ready && d.fonts.ready.then) {
    d.fonts.ready.then(refit);
  }

  refit();

  /* 对外：便于调试与回归校验 */
  w.PixelPages = {
    gateVh: GATE_VH,
    state: function () {
      var vh = w.innerHeight;
      var r = el.p2.getBoundingClientRect();
      return {
        vh: vh,
        scrollY: Math.round(w.scrollY || 0),
        gateH: el.gate ? Math.round(parseFloat(getComputedStyle(el.gate).height)) : -1,
        p1Static: el.p1.classList.contains("is-static"),
        p1Opacity: +(el.p1.style.opacity || 1),
        p2Top: Math.round(r.top),
        cover: +clamp((vh - r.top) / Math.max(1, vh), 0, 1).toFixed(3),
        hint: el.hint ? +(el.hint.style.opacity || 0) : -1
      };
    }
  };
})(window, document);
