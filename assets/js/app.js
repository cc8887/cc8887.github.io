/* ============================================================
   应用层：滚动驱动 -> 状态累积 -> 面板重绘 + 动画
   ============================================================ */

(function (w, d) {
  "use strict";

  var T = w.T, CH = w.CHAPTERS, POOL = w.ATTR_POOL;
  var $ = function (s, r) { return (r || d).querySelector(s); };

  var el = {
    hero: $("#hero"),
    chapters: $("#chapters"),
    panel: $("#panel"),
    foot: $("#foot"),
    tip: $("#tip"),
    tlProgress: $("#tlProgress"),
    expFill: $("#expFill"),
    expText: $("#expText"),
    side: $(".col-side"),
    wrap: $(".panel-wrap"),
    layout: $(".layout")
  };

  var reduceMotion = w.matchMedia && w.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var curIdx = -1;
  var curState = null;
  var rafPending = false;

  /* 触发判定线（视口比例）：节点顶边越过此线即点亮该章 */
  var LINE_RATIO = 0.45;
  /* 尾部占位额外余量（px），避免末章擦边差一点触发不到 */
  var TAIL_PAD = 40;

  /* 快照：依次算出每一章的累积属性，便于任意两章之间做 diff */
  var SNAPS = [];
  (function buildSnapshots() {
    var acc = {};
    for (var i = 0; i < CH.length; i++) {
      var g = CH[i].gain || {};
      Object.keys(g).forEach(function (k) {
        if (!POOL[k]) return;
        acc[k] = (acc[k] || 0) + g[k];
        var max = POOL[k].max || 100;
        if (acc[k] > max) acc[k] = max;
      });
      SNAPS.push(Object.assign({}, acc));
    }
  })();

  /* 累积值求和（用于战斗力与 HP/MP 派生） */
  function sumOf(o) {
    var s = 0;
    Object.keys(o).forEach(function (k) { s += o[k]; });
    return s;
  }

  /* ============================================================
     状态计算：把 0..idx 章节累积成一个面板状态
     数值一律在面板呈现，左栏只保留经历文本
     ============================================================ */
  function buildState(idx) {
    idx = Math.max(0, Math.min(idx, CH.length - 1));
    var ch = CH[idx];

    var attrs = Object.assign({}, SNAPS[idx]);
    var prevAttrs = idx > 0 ? Object.assign({}, SNAPS[idx - 1]) : {};
    var isFirst = idx === 0;

    /* 只保留有值的属性，并保持池内声明顺序 */
    var ordered = {};
    Object.keys(POOL).forEach(function (k) { if (attrs[k]) ordered[k] = attrs[k]; });

    /* 较上一份提升：增量 > 0 的项，按增量降序 */
    var gainList = [];
    Object.keys(POOL).forEach(function (k) {
      if (!ordered[k]) return;
      var now = attrs[k], prev = prevAttrs[k] || 0;
      var delta = now - prev;
      if (delta > 0) gainList.push({ key: k, now: now, prev: prev, delta: delta });
    });
    gainList.sort(function (a, b) { return b.delta - a.delta; });

    var skills = [], recs = [];
    for (var i = 0; i <= idx; i++) {
      (CH[i].skills || []).forEach(function (s) { if (skills.indexOf(s) < 0) skills.push(s); });
      (CH[i].recs || []).forEach(function (r) { if (recs.indexOf(r) < 0) recs.push(r); });
    }

    /* 技能栏容量随进度增长：基础 6 格，每章 +3 */
    var slotTotal = 6 + (idx + 1) * 3;
    var emptySlots = Math.max(0, slotTotal - skills.length);

    /* 战斗力 / HP / MP 由属性总量派生 */
    var power = sumOf(ordered);
    var prevPower = idx > 0 ? sumOf(SNAPS[idx - 1]) : 0;

    var cnt = Object.keys(ordered).length;
    var avg = cnt ? power / cnt : 0;

    var hpMax = w.PANEL_BASE.hpMax, mpMax = w.PANEL_BASE.mpMax;
    var hp = Math.round(hpMax * (0.45 + avg / 100 * 0.55));
    var mp = Math.round(mpMax * (0.40 + avg / 100 * 0.60));

    var quality = idx >= 5 ? 5 : idx >= 4 ? 4 : idx >= 3 ? 3 : idx >= 1 ? 2 : 1;

    var prevCh = idx > 0 ? CH[idx - 1] : null;

    return {
      idx: idx,
      lv: ch.lv,
      quality: quality,
      attrs: ordered,
      prevAttrs: prevAttrs,
      newKeys: ch.gain ? Object.keys(ch.gain).filter(function (k) { return POOL[k]; }) : [],
      gainList: gainList,
      isFirst: isFirst,
      prevLabel: prevCh ? prevCh.role + " ・ " + prevCh.org : "初始基准",
      power: power,
      powerDelta: isFirst ? 0 : power - prevPower,
      skills: skills,
      newSkills: (ch.skills || []).slice(),
      recs: recs,
      newRecs: (ch.recs || []).slice(),
      slotTotal: slotTotal,
      emptySlots: emptySlots,
      hp: hp, hpMax: hpMax, hpPct: Math.round(hp / hpMax * 100),
      mp: mp, mpMax: mpMax, mpPct: Math.round(mp / mpMax * 100)
    };
  }

  /* ============================================================
     渲染
     ============================================================ */
  function renderAll() {
    el.hero.innerHTML = T.hero(w.PROFILE);
    el.chapters.innerHTML = CH.map(T.chapterNode).join("") +
      '<div class="tl-tail" id="tlTail" aria-hidden="true"></div>';
    el.foot.innerHTML = T.footSite(w.PROFILE);
  }

  function renderPanel(st) {
    var ch = CH[st.idx];
    el.panel.innerHTML = T.panel(st, ch);

    /* 转职扫光 */
    if (!reduceMotion) {
      el.panel.classList.remove("flash");
      void el.panel.offsetWidth;
      el.panel.classList.add("flash");
    }

    /* 条状动画：下一帧再写宽度，触发 transition */
    requestAnimationFrame(function () {
      el.panel.querySelectorAll("[data-pct]").forEach(function (i) {
        i.style.width = (i.dataset.pct || 0) + "%";
      });
    });
  }

  /* ============================================================
     尾部占位高度
     页面可滚动距离不足时，最后一章"顶边到达判定线"所需的 scrollY
     会超出可滚动范围，导致它永远触发不了，只能靠"滚到底"兜底与
     前一章同时点亮。这里在列表尾部撑出一段空白，使最后一章也能
     停到判定线（屏幕中部）。窄屏（上下堆叠）页面本身够长，
     计算结果为 0 时不撑开。
     ============================================================ */
  /* 章节节点（排除尾部占位 .tl-tail） */
  function chNodes() {
    var list = [];
    if (!el.chapters) return list;
    for (var i = 0; i < el.chapters.children.length; i++) {
      var n = el.chapters.children[i];
      if (n.classList && n.classList.contains("tl-tail")) continue;
      list.push(n);
    }
    return list;
  }

  function fitTail() {
    var tail = d.getElementById("tlTail");
    var ns = chNodes();
    if (!tail || ns.length < 1) return;
    var last = ns[ns.length - 1];
    if (!last || !last.getBoundingClientRect) return;

    tail.style.height = "0px";
    var vh = w.innerHeight || d.documentElement.clientHeight;
    var docH = Math.max(d.documentElement.scrollHeight, d.body.scrollHeight);
    /* 最后一章在其"理想位置"下，需要文档再多高才能滚到判定线 */
    var need = last.getBoundingClientRect().top + (w.scrollY || 0) - vh * LINE_RATIO;
    /* TAIL_PAD：额外余量，避免刚好擦边（滚动位置取整、缩放等）导致
       末章停在判定线下方 1~2px 而差一点触发不到 */
    var extra = Math.ceil(need - (docH - vh)) + TAIL_PAD;
    tail.style.height = (extra > 0 ? Math.min(extra, vh * 1.5) : 0) + "px";
  }

  function setActive(idx) {
    if (idx === curIdx) return;
    curIdx = idx;

    var nodes = chNodes();
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].classList.toggle("is-on", i <= idx);
    }

    curState = buildState(idx);
    renderPanel(curState);
  }

  /* ============================================================
     滚动监听（rAF 节流，单一入口）
     ============================================================ */
  function measure() {
    rafPending = false;

    /* 触发判定：节点顶边越过判定线（视口 LINE_RATIO 处）即点亮该章。
       尾部节点"够不到判定线"的问题由 fitTail() 撑出的占位空间解决，
       这里保持干净的固定判定线。 */
    var vh = w.innerHeight || d.documentElement.clientHeight;
    var nodes = chNodes();
    var line = vh * LINE_RATIO;

    var activeIdx = 0;
    for (var i = 0; i < nodes.length; i++) {
      /* +1px 容差：抵消布局/缩放的亚像素误差 */
      if (nodes[i].getBoundingClientRect().top <= line + 1) activeIdx = i;
    }

    /* 滚到最底部时强制最后一章（兜底） */
    if (w.innerHeight + w.scrollY >= d.body.offsetHeight - 4) {
      activeIdx = nodes.length - 1;
    }
    setActive(activeIdx);

    /* 时间轴进度 */
    var first = nodes[0], last = nodes[nodes.length - 1];
    if (first && last) {
      var start = first.offsetTop + first.offsetHeight / 2;
      var end = last.offsetTop + last.offsetHeight / 2;
      var p = (w.scrollY + line - start) / Math.max(1, end - start);
      el.tlProgress.style.height = Math.max(0, Math.min(1, p)) * 100 + "%";
    }

    /* 顶部 EXP */
    var total = d.body.scrollHeight - vh;
    var prog = total > 0 ? Math.max(0, Math.min(1, w.scrollY / total)) : 0;
    el.expFill.style.width = (prog * 100).toFixed(2) + "%";
    el.expText.textContent = "EXP " + Math.round(prog * 100) + "%";
  }

  function onScroll() {
    if (!rafPending) { rafPending = true; requestAnimationFrame(measure); }
  }

  /* ============================================================
     Tooltip：事件委托，一套逻辑服务三类元素
     ============================================================ */
  function showTip(target) {
    var kind, id;
    if (target.dataset.attr) { kind = "attr"; id = target.dataset.attr; }
    else if (target.closest("[data-skill]")) { kind = "skill"; id = target.closest("[data-skill]").dataset.skill; }
    else if (target.closest("[data-rec]")) { kind = "rec"; id = target.closest("[data-rec]").dataset.rec; }
    else return;

    var html = T.tip(kind, id, curState || buildState(0));
    if (!html) return;

    el.tip.innerHTML = html;
    el.tip.classList.add("show");
    el.tip.setAttribute("aria-hidden", "false");
    moveTip(target);
  }

  function moveTip(target) {
    var r = target.getBoundingClientRect();
    var tw = el.tip.offsetWidth, th = el.tip.offsetHeight;
    var left = r.left - tw - 12;
    if (left < 8) left = Math.min(r.right + 12, w.innerWidth - tw - 8);
    var top = r.top + r.height / 2 - th / 2;
    top = Math.max(8, Math.min(top, w.innerHeight - th - 8));
    el.tip.style.left = left + "px";
    el.tip.style.top = top + "px";
  }

  function hideTip() {
    el.tip.classList.remove("show");
    el.tip.setAttribute("aria-hidden", "true");
  }

  function bindTip() {
    var sel = "[data-attr], [data-skill], [data-rec]";

    d.addEventListener("mouseover", function (e) {
      var t = e.target.closest(sel);
      if (t && el.panel.contains(t)) showTip(t);
    });
    d.addEventListener("mouseout", function (e) {
      var t = e.target.closest(sel);
      if (t) hideTip();
    });
    d.addEventListener("focusin", function (e) {
      var t = e.target.closest(sel);
      if (t && el.panel.contains(t)) showTip(t);
    });
    d.addEventListener("focusout", hideTip);

    /* 技能点击：轻微反馈 */
    el.panel.addEventListener("click", function (e) {
      var s = e.target.closest("[data-skill]");
      if (s && !s.classList.contains("locked")) {
        s.classList.remove("acted");
        void s.offsetWidth;
        s.classList.add("acted");
      }
      var r = e.target.closest("[data-rec]");
      if (r) jumpToRec(r.dataset.rec);
    });
    el.panel.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var t = e.target.closest("[data-skill], [data-rec]");
      if (t) { e.preventDefault(); t.click(); }
    });
  }

  /* 点击推荐项 -> 跳到相关章节 */
  function jumpToRec(id) {
    for (var i = 0; i < CH.length; i++) {
      if ((CH[i].recs || []).indexOf(id) >= 0) {
        var node = d.getElementById(CH[i].id);
        if (node) node.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
        return;
      }
    }
  }

  /* ============================================================
     启动
     ============================================================ */
  function init() {
    renderAll();
    bindTip();
    fitTail();
    w.addEventListener("scroll", onScroll, { passive: true });
    w.addEventListener("resize", function () { fitTail(); onScroll(); });
    measure();
    /* 字体 / 图片就位后布局会变，重算一次占位高度 */
    w.addEventListener("load", function () { fitTail(); measure(); });
    if (d.fonts && d.fonts.ready && d.fonts.ready.then) {
      d.fonts.ready.then(function () { fitTail(); measure(); });
    }
  }

  if (d.readyState === "loading") d.addEventListener("DOMContentLoaded", init);
  else init();
})(window, document);
