/* ============================================================
   壁面守卫战（Wall Defense）—— Canvas 像素小游戏
   ------------------------------------------------------------
   数值面板的金色边框作为"墙壁"：
   · 英雄站在墙壁顶部中央
   · 怪物从底部两侧生成，沿两侧竖边向上爬
   · 爬到顶部进入英雄攻击范围 -> 英雄转身挥砍 -> 怪物死亡消散
   素材：UnitForge Sample Pack (CC0)，48px/帧，8 帧/行动画
   ============================================================ */

(function (w, d) {
  "use strict";

  var FRAME = document.getElementById("panel");
  if (!FRAME) return;

  var cvs = document.createElement("canvas");
  cvs.id = "wallgame";
  cvs.className = "wg-canvas";
  cvs.setAttribute("aria-hidden", "true");

  var HUD = document.createElement("div");
  HUD.className = "wg-hud";
  HUD.innerHTML = '<span class="wg-tag">WALL DEFENSE</span>' +
    '<span class="wg-kills">击杀 <b id="wgKills">0</b></span>';

  function mount() {
    if (cvs.parentNode !== FRAME) FRAME.appendChild(cvs);
    if (HUD.parentNode !== FRAME) FRAME.appendChild(HUD);
  }
  mount();

  var HOST = cvs;
  var g = cvs.getContext("2d");

  var FW = 48, FH = 48;      // 单帧尺寸
  var reduce = w.matchMedia && w.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 素材加载 ---------- */
  var ART = {
    hero: { idle: null, move: null, attack: null },
    mob: { idle: null, move: null, death: null }
  };
  var NAMES = [
    ["hero", "idle"], ["hero", "move"], ["hero", "attack"],
    ["mob", "idle"], ["mob", "move"], ["mob", "death"]
  ];
  var pending = NAMES.length, failed = 0;

  NAMES.forEach(function (pair) {
    var img = new Image();
    img.onload = function () { ART[pair[0]][pair[1]] = img; if (--pending === 0) boot(); };
    img.onerror = function () { failed++; if (--pending === 0) boot(); };
    img.src = "assets/img/" + pair[0] + "_" + pair[1] + ".png";
  });

  /* ---------- 几何：一条沿边框的路径 ---------- */
  // 参数 s ∈ [0,1]：0 = 左下起点，1 = 顶边中央（英雄处）
  // 路径：左下 -> 左上 -> 顶边 -> 中央（左侧）；右侧镜像
  function pathPoint(s, side, pad) {
    var W = cvs.width / DPR, H = cvs.height / DPR;
    var left = pad, right = W - pad, top = pad, bottom = H - pad;
    var midX = (left + right) / 2;
    var upLen = bottom - top;
    var topLen = midX - left;
    var total = upLen + topLen;
    var dist = s * total;

    if (dist <= upLen) {
      // 沿竖边向上
      var x = side < 0 ? left : right;
      return { x: x, y: bottom - dist, up: true };
    }
    // 折向顶边中央
    var t = dist - upLen;
    var y = top;
    var xx = side < 0 ? left + t : right - t;
    return { x: xx, y: y, up: false };
  }

  var DPR = 1;
  var W = 0, H = 0, PAD = 0;
  var hero = null, mobs = [], fx = [];
  var spawnTimer = 0, running = false, last = 0, raf = 0;
  var kills = 0;

  function resize() {
    var host = FRAME || HOST;
    var r = host.getBoundingClientRect();
    DPR = Math.min(w.devicePixelRatio || 1, 2);
    var inner = host.querySelector(".p-inner");
    var contentH = inner ? inner.offsetHeight : r.height;
    W = Math.max(240, Math.round(r.width));
    H = Math.max(120, Math.round(Math.max(r.height, contentH)));
    cvs.width = Math.round(W * DPR);
    cvs.height = Math.round(H * DPR);
    cvs.style.width = "100%";
    cvs.style.height = Math.round(H) + "px";
    g.setTransform(DPR, 0, 0, DPR, 0, 0);
    g.imageSmoothingEnabled = false;
    PAD = 14;
    if (hero) hero.x = W / 2;
  }

  function makeHero() {
    /* 站在"墙头"：顶边略上方，脚底压住顶边 */
    return {
      x: W / 2, y: PAD + FH * 0.30,
      state: "idle", frame: 0, t: 0, face: 1, atkCd: 0
    };
  }

  function spawn() {
    var side = Math.random() < 0.5 ? -1 : 1;
    mobs.push({
      side: side, s: 0, speed: 0.16 + Math.random() * 0.07,
      state: "move", frame: 0, t: 0, hp: 1, deadT: 0.6, wob: Math.random() * 6.28
    });
  }

  function drawSprite(sheet, frame, cx, cy, scale, flip) {
    if (!sheet) return;
    var sw = FW, sh = FH;
    var dw = FW * scale, dh = FH * scale;
    g.save();
    g.translate(cx, cy);
    if (flip) g.scale(-1, 1);
    g.imageSmoothingEnabled = false;
    g.drawImage(sheet, frame * sw, 0, sw, sh, -dw / 2, -dh, dw, dh);
    g.restore();
  }

  /* ---------- 主循环 ---------- */
  function step(ts) {
    raf = requestAnimationFrame(step);
    if (!last) last = ts;
    var dt = Math.min(0.05, (ts - last) / 1000);
    last = ts;

    update(dt);
    render();
  }

  function update(dt) {
    /* 生成 */
    spawnTimer -= dt;
    if (spawnTimer <= 0 && mobs.length < 7) {
      spawn();
      spawnTimer = 0.55 + Math.random() * 0.7;
    }

    /* 英雄 */
    hero.t += dt;
    if (hero.state === "attack") {
      if (hero.t >= 0.1) {
        hero.t = 0;
        hero.frame++;
        if (hero.frame >= 8) { hero.state = "idle"; hero.frame = 0; }
        if (hero.frame === 4) { /* 命中帧 */ }
      }
    } else if (hero.t >= 0.12) {
      hero.t = 0;
      hero.frame = (hero.frame + 1) % 8;
    }
    if (hero.atkCd > 0) hero.atkCd -= dt;

    /* 怪物 */
    var heroReach = 0.86;   // 到达该进度即进入英雄攻击范围
    for (var i = mobs.length - 1; i >= 0; i--) {
      var m = mobs[i];
      m.t += dt;

      if (m.state === "move") {
        m.s += m.speed * dt;
        if (m.t >= 0.11) { m.t = 0; m.frame = (m.frame + 1) % 8; }
        if (m.s >= heroReach) {
          // 进入攻击范围：英雄转身 + 播放攻击
          hero.face = m.side;
          if (hero.state !== "attack" && hero.atkCd <= 0) {
            hero.state = "attack";
            hero.frame = 0;
            hero.t = 0;
            hero.atkCd = 0.6;
            m.state = "dying";
            m.deadT = 0.75;
            fx.push({ x: 0, y: 0, t: 0, life: 0.35, side: m.side });
            var p = pathPoint(m.s, m.side, PAD);
            fx[fx.length - 1].x = p.x;
            fx[fx.length - 1].y = p.y - FH * 0.5;
            kills++;
            var kEl = d.getElementById("wgKills");
            if (kEl) kEl.textContent = kills;
          }
        }
      } else if (m.state === "dying") {
        if (m.t >= 0.09) { m.t = 0; m.frame = Math.min(7, m.frame + 1); }
        m.deadT -= dt;
        if (m.deadT <= 0) mobs.splice(i, 1);
      }
    }

    /* 命中特效 */
    for (var j = fx.length - 1; j >= 0; j--) {
      fx[j].t += dt;
      if (fx[j].t >= fx[j].life) fx.splice(j, 1);
    }
  }

  function render() {
    g.clearRect(0, 0, W, H);

    var scale = H > 200 ? 1.15 : 0.95;

    /* 怪物（先画，让英雄压在上面） */
    for (var i = 0; i < mobs.length; i++) {
      var m = mobs[i];
      var p = pathPoint(m.s, m.side, PAD);
      var sheet = m.state === "dying" ? ART.mob.death : ART.mob.move;
      var fr = m.state === "dying" ? m.frame : m.frame;
      // 爬墙时轻微起伏
      var bob = m.state === "move" ? Math.sin(m.t * 8 + m.wob) * 1.5 : 0;
      drawSprite(sheet, fr, p.x, p.y + bob, scale, m.side > 0);
    }

    /* 英雄 */
    var hSheet = hero.state === "attack" ? ART.hero.attack
      : hero.state === "idle" ? ART.hero.idle : ART.hero.move;
    drawSprite(hSheet, hero.frame, hero.x, hero.y, scale, hero.face < 0);

    /* 命中特效：金色扩散环 */
    for (var k = 0; k < fx.length; k++) {
      var f = fx[k];
      var pr = f.t / f.life;
      g.save();
      g.globalAlpha = 1 - pr;
      g.strokeStyle = "#f2c14e";
      g.lineWidth = 2;
      g.beginPath();
      g.arc(f.x, f.y, 6 + pr * 18, 0, Math.PI * 2);
      g.stroke();
      g.restore();
    }
  }

  function boot() {
    if (failed === NAMES.length) { HOST.style.display = "none"; return; }
    resize();
    hero = makeHero();
    if (!reduce) {
      running = true;
      raf = requestAnimationFrame(step);
    } else {
      // 降低动态：静态渲染一帧
      hero = makeHero();
      mobs.push({ side: -1, s: 0.6, speed: 0, state: "move", frame: 0, t: 0, hp: 1, deadT: 0, wob: 0 });
      mobs.push({ side: 1, s: 0.45, speed: 0, state: "move", frame: 0, t: 0, hp: 1, deadT: 0, wob: 0 });
      render();
    }
  }

  /* 面板每章重绘会清空子节点，重绘后自动补回画布 */
  if ("MutationObserver" in w) {
    new MutationObserver(function () { mount(); resize(); }).observe(FRAME, { childList: true });
  }

  /* 视口内才跑，节省资源 */
  var io = null;
  if ("IntersectionObserver" in w) {
    io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && !running && !reduce) {
          running = true; last = 0; raf = requestAnimationFrame(step);
        } else if (!e.isIntersecting && running) {
          running = false; cancelAnimationFrame(raf);
        }
      });
    }, { threshold: 0.05 });
    io.observe(HOST);
  }

  w.addEventListener("resize", function () { if (hero) resize(); });

  /* 面板重绘后尺寸可能变化，用 ResizeObserver 同步 */
  if ("ResizeObserver" in w) {
    new ResizeObserver(function () { if (hero) resize(); }).observe(HOST);
  }
})(window, document);
