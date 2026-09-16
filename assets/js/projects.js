/* ============================================================
   项目陈列渲染
   - 独立模块，只负责把 window.PROJECTS 渲染成静态卡片
   - 不参与时间轴 / 面板 / 光照逻辑，也不发起任何网络请求
   - 数据源见 data.js：window.PROJECTS
   ============================================================ */
(function () {
  var list = window.PROJECTS || [];
  var box = document.getElementById("projGrid");
  if (!box || !list.length) return;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  box.innerHTML = list
    .map(function (p) {
      var tags = (p.tags || [])
        .map(function (t) {
          return '<span class="chip">' + esc(t) + "</span>";
        })
        .join("");
      return (
        '<a class="proj-card" href="' +
        esc(p.url) +
        '" target="_blank" rel="noopener noreferrer">' +
        '<div class="proj-name">' +
        esc(p.name) +
        '<span class="arrow">↗</span></div>' +
        '<p class="proj-desc">' +
        esc(p.desc) +
        "</p>" +
        '<div class="proj-tags">' +
        tags +
        "</div>" +
        '<div class="proj-star">★ ' +
        esc(p.stars) +
        " stars</div>" +
        "</a>"
      );
    })
    .join("");
})();
