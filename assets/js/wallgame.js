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
  var SIDE = document.querySelector(".col-side") || FRAME;

  var cvs = document.createElement("canvas");
  cvs.id = "wallgame";
  cvs.className = "wg-canvas";
  cvs.setAttribute("aria-hidden", "true");

  var HUD = document.createElement("div");
  HUD.className = "wg-hud";
  HUD.innerHTML = '<span class="wg-tag">WALL DEFENSE</span>' +
    '<span class="wg-kills">击杀 <b id="wgKills">0</b></span>';

function mount() {
    /* 画布必须挂在 .col-side：#panel 与 .panel-wrap 都有裁剪，
       挂在面板内无法把角色画到框的外侧 */
    if (cvs.parentNode !== SIDE) SIDE.appendChild(cvs);
    if (HUD.parentNode !== FRAME) FRAME.appendChild(HUD);
    if (getComputedStyle(SIDE).position === "static") SIDE.style.position = "relative";
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

  /* ---------- 几何：沿面板框【外侧】边线的路径 ----------
     画布坐标 = 面板框坐标 + (OUT_X, OUT_Y)
     · l/r/t/b：框的四条外沿边线（角色脚底/身体所贴的线）
     · s ∈ [0,1]：0 = 底部转角，1 = 顶边中央（英雄处）
     路线：底边 -> 沿外侧竖边向上 -> 顶边 -> 中央（右侧镜像） */
  function pathPoint(s, side, pad) {
    var l = OUT_X + pad, r = W - OUT_X - pad;
    var t = OUT_Y + pad, b = H - OUT_Y - pad;
    var midX = (l + r) / 2;
    var upLen = b - t;
    var topLen = midX - l;
    var total = upLen + topLen;
    var dist = s * total;

    if (dist <= upLen) {
      return { x: side < 0 ? l : r, y: b - dist, up: true };
    }
    var k = dist - upLen;
    return { x: side < 0 ? l + k : r - k, y: t, up: false };
  }

  /* 单侧路径总长（像素） */
  function pathLen(pad) {
    var l = OUT_X + pad, r = W - OUT_X - pad;
    var t = OUT_Y + pad, b = H - OUT_Y - pad;
    return (b - t) + ((l + r) / 2 - l);
  }

  /* 按"距终点的像素距离"求路径进度：怪物停在离英雄 d 像素处 */
  function sAtDistance(d, pad) {
    var total = pathLen(pad);
    var s = (total - d) / total;
    return s < 0 ? 0 : (s > 1 ? 1 : s);
  }

  var DPR = 1;
  var W = 0, H = 0, PAD = 0;
  /* 角色基础缩放：5 倍 */
  var CHAR_SCALE = 5;
  /* 画布相对面板框向外的留白：需容纳放大后的角色，随 CHAR_SCALE 联动 */
  var OUT_X = Math.round(30 * CHAR_SCALE);
  var OUT_Y = Math.round(38 * CHAR_SCALE);
  var EDGE = 3;                 // 面板金色边框的视觉厚度
  var ATK_FRAME_DT = 0.1 / 3;   // 攻击动画加快 3 倍（0.1s -> 0.0333s）
  var ATK_CD = 0.35;            // 攻击冷却，配合更快的挥砍
  var hero = null, mobs = [], fx = [];
  var spawnTimer = 0, running = false, last = 0, raf = 0;
  var kills = 0;

  function resize() {
    var host = FRAME || HOST;
    var r = host.getBoundingClientRect();
    DPR = Math.min(w.devicePixelRatio || 1, 2);
    var inner = host.querySelector(".p-inner");
    var contentH = inner ? inner.offsetHeight : r.height;
    var panelW = Math.max(240, Math.round(r.width));
    var panelH = Math.max(120, Math.round(Math.max(r.height, contentH)));
    /* 画布 = 面板框 + 四周留白 */
    W = panelW + OUT_X * 2;
    H = panelH + OUT_Y * 2;
    cvs.width = Math.round(W * DPR);
    cvs.height = Math.round(H * DPR);
    cvs.style.width = W + "px";
    cvs.style.height = H + "px";
    /* 位置由 JS 统一设置，避免与 CSS 硬编码失配 */
    cvs.style.left = (-OUT_X) + "px";
    cvs.style.top = (-OUT_Y) + "px";
    g.setTransform(DPR, 0, 0, DPR, 0, 0);
    g.imageSmoothingEnabled = false;
    /* 路径贴合面板框外沿线；外扩留白已提供绘制空间，无需再内缩 */
    PAD = 0;
    if (hero) hero.x = W / 2;
  }

  function makeHero() {
    /* 站在顶边【外侧】的墙头上，脚底正好压住顶边外沿线 */
    return {
      x: W / 2, y: OUT_Y + PAD,
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

  /* 实测：所有素材的脚底像素位于 y=42，即距帧底 5px（48-42-1） */
  var FOOT_GAP = 5;

  function drawSprite(sheet, frame, cx, cy, scale, flip) {
    if (!sheet) return;
    var sw = FW, sh = FH;
    var dw = FW * scale, dh = FH * scale;
    g.save();
    g.translate(cx, cy);
    if (flip) g.scale(-1, 1);
    g.imageSmoothingEnabled = false;
    /* 帧底下移 FOOT_GAP*scale，使"脚底"而非"帧底"落在 (cx,cy) 这条线上 */
    g.drawImage(sheet, frame * sw, 0, sw, sh,
      -dw / 2, -dh + FOOT_GAP * scale, dw, dh);
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
      /* 攻击动画加快 3 倍：帧间隔 0.1s -> 0.0333s */
      if (hero.t >= ATK_FRAME_DT) {
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

    /* 怪物：贴到离英雄"一个身位"处即停下，不会绕到英雄另一侧
       实测素材实际身体宽度约 19px/帧（48px 帧内两侧留白），
       放大 CHAR_SCALE 后即 BODY_W；一个身位 = 一个身体宽度 */
    var BODY_W = 19 * CHAR_SCALE;                 // 实测身体宽度（约 95px）
    var stopDist = Math.max(BODY_W, 40);          // 身位间距 = 一个身位
    var heroReach = sAtDistance(stopDist, PAD);   // 对应路径进度（不再用固定 0.86）
    for (var i = mobs.length - 1; i >= 0; i--) {
      var m = mobs[i];
      m.t += dt;

      if (m.state === "move") {
        /* 到达身位就停住；只有进入攻击范围且英雄可出手时才判定 */
        if (m.s < heroReach) {
          m.s += m.speed * dt;
          if (m.s > heroReach) m.s = heroReach;   // 夹住，绝不越过英雄
          if (m.t >= 0.11) { m.t = 0; m.frame = (m.frame + 1) % 8; }
        } else {
          /* 已贴身：停下（保留待机帧循环），等待英雄出手 */
          if (m.t >= 0.18) { m.t = 0; m.frame = (m.frame + 1) % 8; }
        }
        if (m.s >= heroReach) {
          // 进入一个身位：英雄转身 + 播放攻击
          hero.face = m.side;
          if (hero.state !== "attack" && hero.atkCd <= 0) {
            hero.state = "attack";
            hero.frame = 0;
            hero.t = 0;
            hero.atkCd = ATK_CD;
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

    /* 角色统一放大 5 倍 */
    var scale = CHAR_SCALE;

    /* 怪物（先画，让英雄压在上面） */
    for (var i = 0; i < mobs.length; i++) {
      var m = mobs[i];
      var p = pathPoint(m.s, m.side, PAD);
      var sheet = m.state === "dying" ? ART.mob.death : ART.mob.move;
      var fr = m.state === "dying" ? m.frame : m.frame;
      // 爬墙时轻微起伏
      var bob = m.state === "move" ? Math.sin(m.t * 8 + m.wob) * 1.5 : 0;
      /* 素材默认朝左：怪物自左侧上爬时向右（朝中央）需翻转 */
      drawSprite(sheet, fr, p.x, p.y + bob, scale, m.side < 0);
    }

    /* 英雄：素材默认朝左，face=-1(朝左) 不翻转，face=+1(朝右) 翻转 */
    var hSheet = hero.state === "attack" ? ART.hero.attack
      : hero.state === "idle" ? ART.hero.idle : ART.hero.move;
    drawSprite(hSheet, hero.frame, hero.x, hero.y, scale, hero.face > 0);

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
