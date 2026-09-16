# 冒险者档案 · 个人主页

游戏化个人主页：左侧滚动时间轴对应工作经历，右侧 DNF 风格数值 / 技能面板随滚动实时成长。
零依赖、零构建、零图片，直接双击 `index.html` 即可运行。

## 目录结构

```
personal-rpg-homepage/
├── index.html              页面骨架（只放容器，内容全部由模板渲染）
├── assets/
│   ├── css/
│   │   ├── main.css        设计令牌 / 布局 / 时间轴 / 通用动效
│   │   └── panel.css       DNF 风格面板（外框、数值、技能栏、推荐区）
│   └── js/
│       ├── data.js         【唯一内容源】改这里就能改整站
│       ├── templates.js    模板层：所有 DOM 片段的复用工厂
│       └── app.js          应用层：滚动驱动 → 状态累积 → 重绘 + 动画
└── README.md
```

## 快速开始

直接双击 `index.html`。若需本地服务：

```bash
python -m http.server 8000 --directory .
```

## 改内容：只需要动 `data.js`

### 1. 基本信息

```js
window.PROFILE = {
  name: "你的名字", enName: "YOUR NAME", title: "职位",
  avatarText: "★", desc: "一句话简介",
  heroTags: [{ k: "当前等级", v: "Lv.87" }],
  links: [{ label: "GitHub", url: "https://github.com/xxx" }],
  footNote: "页脚说明"
};
```

### 2. 属性池（能力的字段定义）

```js
window.ATTR_POOL = {
  coding: { label: "编码精度", icon: "⌨", desc: "悬浮说明", max: 100 },
  // ...
};
```

`key` 是跨章节累积的锚点 —— 不同章节写同一个 key，面板数值会自动累加。
`max` 用于上限钳制。

### 3. 技能池

```js
window.SKILL_POOL = {
  s_csharp: { name: "C# 精通", icon: "🟣", q: 2, lv: 3, max: 5, desc: "..." }
};
```

`q` = 稀有度 1 普通 / 2 高级 / 3 稀有 / 4 神器 / 5 史诗，决定边框颜色。

### 4. 推荐池

```js
window.REC_POOL = {
  r_job_client: { type: "job",     icon: "🎮", name: "游戏客户端工程师", desc: "..." },
  r_dun_perf:   { type: "dungeon", icon: "⏱", name: "时之狭间・性能优化", desc: "..." }
};
```

`type` 决定归入「推荐转职」还是「推荐副本」。

### 5. 章节（时间轴节点）

```js
window.CHAPTERS = [{
  id: "ch0", year: "2016", role: "启程・实习生", org: "公司", loc: "副本名",
  job: "见习程序员", jobColor: "q1",
  desc: "这段经历的一句话总结",
  lv: 12,                                        // 该章节的等级
  gain: { coding: 18, learning: 30 },            // 属性增量（自动累积）
  skills: ["s_git", "s_python"],                 // 本章解锁技能
  recs: ["r_dun_intro", "r_job_fe"],             // 本章解锁推荐
  tags: [{ t: "版本控制入门", q: 1 }]            // 卡片标签，q 同上
}];
```

章节数量不限，增删数组元素即可，时间轴与面板会自动适配。

## 交互说明

- 滚动驱动：视口 45% 处为判定线，越过即切换章节
- 面板成长：数值累积、新增条目带入场动画、技能栏容量随章节递增
- 悬浮详情：数值 / 技能 / 推荐项均可悬浮查看说明
- 点击推荐：自动跳转到相关章节
- 技能点击：触发一次释放反馈动画

## 性能与复用设计

- 零依赖：不引入任何框架、字体或图片，图标全部用 emoji，外框与纹理用纯 CSS 绘制
- 模板化：Hero / 章节卡 / 面板 / Tooltip 共用同一套模板函数，新增章节不需要写任何 HTML
- 单一数据源：内容只在 `data.js` 定义一次，全站复用
- 事件委托：Tooltip 与点击只绑定 4 个监听器，不随条目数量增长
- 滚动节流：`requestAnimationFrame` 合并，每帧最多一次计算
- 状态 diff：只在章节真正切换时重绘面板，避免无效渲染
- 动画降级：遵循 `prefers-reduced-motion`，无障碍环境下自动关闭动效

## 自定义视觉

改 `assets/css/main.css` 顶部的 CSS 变量即可整体换肤：

```css
--gold: #f2c14e;      /* 主金边色 */
--q-epic: #b26ff5;    /* 稀有度配色 */
--panel-w: 356px;     /* 面板宽度 */
--dur: .42s;          /* 动效时长 */
```

## 说明

页面中的等级、HP/MP、数值均为游戏化表达，用于呈现成长曲线，非真实绩效指标。
