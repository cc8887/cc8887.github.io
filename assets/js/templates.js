/* ============================================================
   模板层：所有 DOM 片段由这里生成，复用同一套模板函数
   - 纯字符串模板 + 一次 innerHTML，避免逐节点操作
   - esc() 统一转义，防止内容与结构冲突
   ============================================================ */

(function (w) {
  "use strict";

  var POOL = w.ATTR_POOL, SK = w.SKILL_POOL, RC = w.REC_POOL;

  /* ---------- 工具 ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function qClass(q) { return "q" + (q || 1); }

  /* 稀有度文案 */
  var Q_TEXT = { 1: "普通", 2: "高级", 3: "稀有", 4: "神器", 5: "史诗" };

  /* ============================================================
     1. Hero
     ============================================================ */
  function hero(p) {
    var tags = p.heroTags.map(function (t) {
      return '<span class="tag">' + esc(t.k) + ' <b>' + esc(t.v) + "</b></span>";
    }).join("");

    return '' +
      '<div class="hero-sub">Adventurer Profile</div>' +
      '<h1 class="hero-title">' + esc(p.name) + "</h1>" +
      '<div class="hero-en">' + esc(p.enName) + "</div>" +
      '<p class="hero-desc">' + esc(p.desc) + "</p>" +
      '<div class="hero-tags">' + tags + "</div>" +
      '<div class="scroll-hint">向下滚动以展开履历 ▼</div>';
  }

  /* ============================================================
     2. 时间轴节点：只承载"经历"本身
        所有数值（当前值 / 提升量）一律交给右侧面板
     ============================================================ */
  function chapterNode(ch, idx) {
    var tags = (ch.tags || []).map(function (t) {
      return '<span class="chip ' + qClass(t.q) + '">' + esc(t.t) + "</span>";
    }).join("");

    return '' +
      '<article class="node" id="' + esc(ch.id) + '" data-idx="' + idx + '">' +
        '<span class="node-dot"></span>' +
        '<div class="node-card">' +
          '<div class="node-head">' +
            '<span class="node-year">' + esc(ch.year) + "</span>" +
            '<h3 class="node-role">' + esc(ch.role) + "</h3>" +
            '<span class="node-org">' + esc(ch.org) + '<span class="sep">/</span>' + esc(ch.loc) + "</span>" +
          "</div>" +
          '<p class="node-desc">' + esc(ch.desc) + "</p>" +
          '<div class="node-tags">' + tags + "</div>" +
        "</div>" +
      "</article>";
  }

  /* ============================================================
     3. 面板（页面主体）
     ============================================================ */
  function panel(st, ch) {
    return '' +
      '<div class="p-inner">' +
        basic(st, ch) +
        power(st) +
        bars(st) +
        attrs(st) +
        gains(st) +
        skills(st) +
        recs(st) +
        foot(ch) +
      "</div>";
  }

  function basic(st, ch) {
    var q = Q_TEXT[st.quality] || "普通";
    return '' +
      '<div class="p-basic">' +
        '<div class="p-avatar">' + esc(w.PROFILE.avatarText) + "</div>" +
        '<div class="p-id">' +
          '<div class="p-name">' + esc(w.PROFILE.name) +
            '<span class="q q' + st.quality + '">' + esc(ch.job) + "</span>" +
          "</div>" +
          '<div class="p-job">Lv.<b>' + st.lv + "</b> ・ " + esc(q) + " ・ " + esc(w.PROFILE.title) + "</div>" +
        "</div>" +
        '<div class="p-lv">' +
          '<div class="n">' + st.lv + "</div>" +
          '<div class="t">LEVEL</div>' +
        "</div>" +
      "</div>";
  }

  /* 战斗力：属性总和派生，随章节累积上升，直接标出较上一份的增量 */
  function power(st) {
    var d = st.powerDelta;
    return '' +
      '<div class="p-power">' +
        '<span class="pl">战斗力</span>' +
        '<span class="pv">' + st.power.toLocaleString("en-US") + "</span>" +
        (d > 0
          ? '<span class="pd">▲ +' + d.toLocaleString("en-US") + "</span>"
          : '<span class="pd none">首份基准</span>') +
      "</div>";
  }

  /* 较上一份提升：只列"有提升"的项，按增量降序 */
  function gains(st) {
    var list = st.gainList || [];
    var title = st.isFirst ? "初始能力" : "较上一份提升";

    if (!list.length) {
      return '' +
        '<section class="sec">' +
          '<h4 class="sec-h">' + title + '<span class="cnt">0 项</span></h4>' +
          '<div class="sec-sub">本阶段无新增数值成长</div>' +
        "</section>";
    }

    var maxD = list.reduce(function (m, g) { return Math.max(m, g.delta); }, 1);

    var html = list.map(function (g) {
      var pct = Math.max(6, Math.round(g.delta / maxD * 100));
      return '' +
        '<div class="gain" data-attr="' + esc(g.key) + '">' +
          '<span class="gk">' + esc(POOL[g.key].label) + "</span>" +
          '<span class="gp">' + g.prev + "<i>→</i><b>" + g.now + "</b></span>" +
          '<span class="gb"><i data-pct="' + pct + '"></i></span>' +
          '<span class="gd">+' + g.delta + "</span>" +
        "</div>";
    }).join("");

    return '' +
      '<section class="sec">' +
        '<h4 class="sec-h">' + title + '<span class="cnt">' + list.length + " 项</span></h4>" +
        '<div class="sec-sub">对比基准：' + esc(st.prevLabel || "上一份") + "</div>" +
        '<div class="gains">' + html + "</div>" +
      "</section>";
  }

  function bars(st) {
    return '' +
      '<div class="p-bars">' +
        '<div class="meter hp">' +
          '<span class="lb">HP</span>' +
          '<span class="tr"><i data-pct="' + st.hpPct + '"></i></span>' +
          '<span class="vl">' + st.hp + " / " + st.hpMax + "</span>" +
        "</div>" +
        '<div class="meter mp">' +
          '<span class="lb">MP</span>' +
          '<span class="tr"><i data-pct="' + st.mpPct + '"></i></span>' +
          '<span class="vl">' + st.mp + " / " + st.mpMax + "</span>" +
        "</div>" +
      "</div>";
  }

  /* 数值条目：只显示已解锁（累积值 > 0）的属性，并标出本阶段增量 */
  function attrs(st) {
    var keys = Object.keys(st.attrs);
    var html = keys.map(function (k) {
      var a = POOL[k];
      if (!a) return "";
      var v = st.attrs[k];
      var prev = st.prevAttrs[k] || 0;
      var isNew = st.newKeys.indexOf(k) >= 0;
      var delta = v - prev;
      var q = v >= 80 ? 4 : v >= 55 ? 3 : 1;

      var badge = isNew
        ? '<span class="up new">新 +' + v + "</span>"
        : delta > 0
          ? '<span class="up">↑' + delta + "</span>"
          : '<span class="up zero">—</span>';

      return '' +
        '<div class="attr ' + qClass(q) + (isNew ? " is-new" : "") + '" ' +
             'data-attr="' + esc(k) + '">' +
          '<span class="k">' + esc(a.label) + "</span>" +
          '<span class="dots"></span>' +
          '<span class="v">' + v + "</span>" +
          badge +
        "</div>";
    }).join("");

    return '' +
      '<section class="sec">' +
        '<h4 class="sec-h">能力值<span class="cnt">' + keys.length + " 项</span></h4>" +
        '<div class="attrs">' + html + "</div>" +
      "</section>";
  }

  /* 技能栏：已解锁 + 固定空槽（体现"栏位变多"） */
  function skills(st) {
    var unlocked = st.skills.map(function (id, i) {
      var s = SK[id];
      if (!s) return "";
      var isNew = st.newSkills.indexOf(id) >= 0;
      return '' +
        '<div class="slot ' + qClass(s.q) + (isNew ? " is-new" : "") + '" ' +
             'data-skill="' + esc(id) + '" tabindex="0">' +
          '<span class="ic">' + esc(s.icon) + "</span>" +
          '<span class="lv">' + s.lv + "</span>" +
        "</div>";
    }).join("");

    var empty = "";
    for (var i = 0; i < st.emptySlots; i++) {
      empty += '<div class="slot locked"><span class="ic">?</span></div>';
    }

    return '' +
      '<section class="sec">' +
        '<h4 class="sec-h">技能栏<span class="cnt">' + st.skills.length + " / " + st.slotTotal + "</span></h4>" +
        '<div class="skills">' + unlocked + empty + "</div>" +
      "</section>";
  }

  /* 推荐：职业 + 副本 */
  function recs(st) {
    var list = st.recs.filter(function (id) { return RC[id]; });
    var jobs = list.filter(function (id) { return RC[id].type === "job"; });
    var duns = list.filter(function (id) { return RC[id].type === "dungeon"; });

    function row(id) {
      var r = RC[id];
      var isNew = st.newRecs.indexOf(id) >= 0;
      return '' +
        '<div class="rec ' + (isNew ? "is-new" : "") + '" data-rec="' + esc(id) + '" tabindex="0">' +
          '<span class="ric">' + esc(r.icon) + "</span>" +
          '<span class="rb">' +
            '<div class="rn">' + esc(r.name) + "</div>" +
            '<div class="rd">' + esc(r.desc) + "</div>" +
          "</span>" +
          '<span class="rq ' + r.type + '">' + (r.type === "job" ? "职业" : "副本") + "</span>" +
        "</div>";
    }

    var jobHtml = jobs.map(row).join("");
    var dunHtml = duns.map(row).join("");

    return '' +
      '<section class="sec">' +
        '<h4 class="sec-h">推荐副本<span class="cnt">' + duns.length + " 处</span></h4>" +
        '<div class="recs">' + (dunHtml || emptyHint("继续推进主线以解锁副本")) + "</div>" +
      "</section>" +
      '<section class="sec">' +
        '<h4 class="sec-h">推荐转职<span class="cnt">' + jobs.length + " 个</span></h4>" +
        '<div class="recs">' + (jobHtml || emptyHint("积累经验后可转职")) + "</div>" +
      "</section>";
  }

  function emptyHint(t) {
    return '<div class="rec" style="cursor:default;opacity:.5"><span class="ric">·</span>' +
           '<span class="rb"><div class="rd">' + esc(t) + "</div></span></div>";
  }

  function foot(ch) {
    return '' +
      '<div class="p-foot">' +
        '<span class="dot"></span>' +
        '<span class="ch">当前章节：' + esc(ch.year) + " ・ " + esc(ch.role) + "</span>" +
      "</div>";
  }

  /* ============================================================
     4. 页脚
     ============================================================ */
  function footSite(p) {
    var links = p.links.map(function (l) {
      return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>";
    }).join("");
    return '' +
      '<div class="fl">' + links + "</div>" +
      "<div>" + esc(p.footNote) + "</div>";
  }

  /* ============================================================
     5. Tooltip 内容（属性 / 技能 / 推荐共用一套）
     ============================================================ */
  function tip(kind, id, st) {
    var title, sub, desc, meta;

    if (kind === "attr") {
      var a = POOL[id];
      if (!a) return "";
      var v = st.attrs[id] || 0;
      var prev = st.prevAttrs[id] || 0;
      var d = v - prev;
      title = a.icon + " " + a.label;
      sub = "当前 " + v + " / " + (a.max || 100) +
            (d > 0 ? "（较上一份 +" + d + "）" : "（较上一份无提升）");
      desc = a.desc;
      meta = v >= 80 ? "评价：卓越" : v >= 55 ? "评价：优秀" : v >= 30 ? "评价：合格" : "评价：成长中";
    } else if (kind === "skill") {
      var s = SK[id];
      if (!s) return "";
      title = s.icon + " " + s.name;
      sub = Q_TEXT[s.q] + " ・ Lv." + s.lv + " / " + s.max;
      desc = s.desc;
      meta = "技能类型：主动 / 被动兼备";
    } else {
      var r = RC[id];
      if (!r) return "";
      title = r.icon + " " + r.name;
      sub = r.type === "job" ? "推荐职业" : "推荐副本";
      desc = r.desc;
      meta = r.type === "job" ? "点击可在时间轴中查看相关章节" : "点击可跳转至相关章节";
    }

    return '' +
      "<h5>" + esc(title) + "</h5>" +
      '<div class="t-sub">' + esc(sub) + "</div>" +
      '<div class="t-desc">' + esc(desc) + "</div>" +
      '<div class="t-meta">' + esc(meta) + "</div>";
  }

  w.T = {
    hero: hero,
    chapterNode: chapterNode,
    panel: panel,
    footSite: footSite,
    tip: tip,
    esc: esc
  };
})(window);
