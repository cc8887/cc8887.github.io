/* ============================================================
   数据层（唯一内容源）
   - 改这里即可改整站；结构变更不需要动渲染代码
   - 字段约定见 README.md
   ============================================================ */

window.PROFILE = {
  name: "cc8887",
  enName: "CC8887",
  title: "游戏客户端 / AI 工具开发",
  avatarText: "★",
  desc: "以工程师的方式拆解问题，以玩家的热情打磨体验。专注 Unreal 客户端、性能优化与 AI 工具链落地。",
  heroTags: [
    { k: "当前等级", v: "Lv.74" },
    { k: "职业",     v: "引擎炼金术士" },
    { k: "阵营",     v: "序・工程" }
  ],
  links: [
    { label: "GitHub",   url: "https://github.com/cc8887" },
    { label: "邮箱",     url: "mailto:qq727626166@gmail.com" },
    { label: "博客",     url: "#" }
  ],
  footNote: "本页为个人展示用途，数值设定为游戏化表达，非真实绩效指标。"
};

/* ---------- 属性池：所有章节共用的字段定义 ----------
   key    : 唯一标识（跨章节沿用同一 key，才能做数值累积与增长动画）
   label  : 显示名
   icon   : 可选图标
   desc   : 悬浮说明
   max    : 该属性的满值（用于百分比条与上限钳制）
------------------------------------------------------------ */
window.ATTR_POOL = {
  coding:     { label: "编码精度",   icon: "⌨", desc: "代码质量、可读性与工程规范的长期积累。", max: 100 },
  debug:      { label: "缺陷洞察",   icon: "🔍", desc: "定位与复现疑难问题的能力，含崩溃、性能、同步问题。", max: 100 },
  arch:       { label: "架构构筑",   icon: "🏛", desc: "系统分层、模块解耦与技术方案选型能力。", max: 100 },
  engine:     { label: "引擎掌控",   icon: "⚙", desc: "对游戏引擎渲染、物理、资源管线的掌握深度。", max: 100 },
  perf:       { label: "性能优化",   icon: "📈", desc: "CPU/GPU/内存 Profile 与优化落地的经验值。", max: 100 },
  tooling:    { label: "工具链锻造", icon: "🔧", desc: "编辑器扩展、自动化脚本与 CI 流水线建设。", max: 100 },
  ai:         { label: "AI 协同",    icon: "🧠", desc: "将大模型能力工程化接入生产流程的能力。", max: 100 },
  art:        { label: "表现力",     icon: "🎨", desc: "UI 动效、视觉还原与交互手感打磨。", max: 100 },
  lead:       { label: "带队指挥",   icon: "🚩", desc: "任务拆解、排期把控与跨职能协作。", max: 100 },
  product:    { label: "产品嗅觉",   icon: "🧭", desc: "从用户与数据反推需求优先级的能力。", max: 100 },
  delivery:   { label: "交付韧性",   icon: "🛡", desc: "在高压周期下稳定产出并保证质量的耐力。", max: 100 },
  learning:   { label: "学习速率",   icon: "📚", desc: "进入新领域后达到可交付水平所需时间的倒数。", max: 100 }
};

/* ---------- 技能池：技能栏条目 ----------
   q  : 稀有度 1普通 2高级 3稀有 4神器 5史诗
------------------------------------------------ */
window.SKILL_POOL = {
  s_csharp:   { name: "C# 精通",        icon: "🟣", q: 2, lv: 3, max: 5, desc: "主力开发语言，熟悉异步、反射与性能敏感写法。" },
  s_cpp:      { name: "C++ 攻坚",       icon: "🔷", q: 3, lv: 4, max: 5, desc: "引擎层与性能关键路径的主力语言。" },
  s_godot:    { name: "Godot 专精",     icon: "🤖", q: 3, lv: 4, max: 5, desc: "节点/场景体系、着色器与插件开发。" },
  s_unreal:   { name: "UE 管线",        icon: "🎮", q: 3, lv: 3, max: 5, desc: "编辑器扩展、资源管线与自动化审查流程。" },
  s_python:   { name: "Python 自动化",  icon: "🐍", q: 2, lv: 4, max: 5, desc: "批处理、数据处理与工具脚本。" },
  s_lua:      { name: "Lua 热更",       icon: "🌙", q: 2, lv: 3, max: 5, desc: "客户端逻辑热更新与脚本层架构。" },
  s_review:   { name: "代码审查",       icon: "🧐", q: 3, lv: 4, max: 5, desc: "建立规则化审查体系，沉淀缺陷模式库。" },
  s_agent:    { name: "Agent 编排",     icon: "🧩", q: 4, lv: 4, max: 5, desc: "多智能体流程编排、提示词工程与工具集成。" },
  s_rag:      { name: "检索增强",       icon: "📚", q: 3, lv: 3, max: 5, desc: "知识库构建、向量检索与召回调优。" },
  s_prompt:   { name: "提示词工程",     icon: "✍", q: 3, lv: 4, max: 5, desc: "结构化提示词设计与批量化产出流水线。" },
  s_perf:     { name: "性能剖析",       icon: "⏱", q: 4, lv: 4, max: 5, desc: "CPU/GPU Profile、DrawCall 与内存优化。" },
  s_shader:   { name: "着色器编写",     icon: "🌈", q: 3, lv: 3, max: 5, desc: "HLSL/GLSL 与后处理效果实现。" },
  s_tool:     { name: "编辑器扩展",     icon: "🛠", q: 3, lv: 4, max: 5, desc: "为团队定制编辑器面板与批量处理工具。" },
  s_ci:       { name: "CI/CD 建设",     icon: "🔁", q: 2, lv: 3, max: 5, desc: "流水线搭建、质量门禁与自动化回归。" },
  s_mcp:      { name: "MCP 集成",       icon: "🔌", q: 4, lv: 4, max: 5, desc: "把内部平台能力封装为可被 Agent 调用的工具。" },
  s_design:   { name: "系统设计",       icon: "📐", q: 4, lv: 4, max: 5, desc: "从需求到模块划分、接口契约与演进路径。" },
  s_lead:     { name: "小队指挥",       icon: "🚩", q: 4, lv: 3, max: 5, desc: "带 3-6 人小组完成跨模块交付。" },
  s_mentor:   { name: "带教传承",       icon: "🎓", q: 3, lv: 3, max: 5, desc: "新人上手路径设计与规范沉淀。" },
  s_anim:     { name: "动效设计",       icon: "✨", q: 2, lv: 3, max: 5, desc: "UI 动效节奏与过渡曲线把控。" },
  s_data:     { name: "数据分析",       icon: "📊", q: 2, lv: 3, max: 5, desc: "用指标驱动决策，定位体验瓶颈。" },
  s_git:      { name: "版本控制",       icon: "🌿", q: 1, lv: 4, max: 5, desc: "Git / Perforce 分支策略与历史取证。" },
  s_agile:    { name: "敏捷协同",       icon: "🔄", q: 2, lv: 3, max: 5, desc: "迭代节奏管理与跨职能沟通。" }
};

/* ---------- 推荐池：推荐职业 + 推荐副本 ----------
   type: job（推荐职业） / dungeon（推荐副本）
------------------------------------------------------ */
window.REC_POOL = {
  r_job_fe:      { type: "job", icon: "🌐", name: "前端工程师",     desc: "交互与表现层岗位，动效与工程化能力直接迁移" },
  r_job_client:  { type: "job", icon: "🎮", name: "游戏客户端工程师", desc: "引擎与客户端逻辑开发，核心主职业方向" },
  r_job_engine:  { type: "job", icon: "⚙", name: "引擎工程师",      desc: "渲染/性能/工具链方向，需深入底层" },
  r_job_ta:      { type: "job", icon: "🎨", name: "技术美术 TA",     desc: "连接美术与程序，着色器与表现力见长" },
  r_job_ai:      { type: "job", icon: "🧠", name: "AI 应用工程师",   desc: "把大模型能力工程化落地到业务" },
  r_job_tool:    { type: "job", icon: "🛠", name: "工具链工程师",     desc: "为团队提效的编辑器与自动化方向" },
  r_job_arch:    { type: "job", icon: "🏛", name: "系统架构师",       desc: "负责整体技术方案与演进路线" },
  r_job_lead:    { type: "job", icon: "🚩", name: "技术负责人",       desc: "带团队交付，兼顾技术与协作" },

  r_dun_intro:   { type: "dungeon", icon: "🏕", name: "新手村・需求澄清",   desc: "把模糊需求拆成可验收的条目，练基本功" },
  r_dun_bug:     { type: "dungeon", icon: "🐛", name: "遗忘之塔・缺陷围剿", desc: "大规模缺陷收敛与回归防线建设" },
  r_dun_perf:    { type: "dungeon", icon: "⏱", name: "时之狭间・性能优化", desc: "在限定帧预算内完成画面与逻辑的双重压缩" },
  r_dun_refac:   { type: "dungeon", icon: "🧱", name: "废墟遗迹・遗留重构", desc: "在不中断业务的前提下替换核心模块" },
  r_dun_ai:      { type: "dungeon", icon: "🧬", name: "幻梦实验室・AI 集成", desc: "把模型能力接进真实生产链路并保证可控" },
  r_dun_tool:    { type: "dungeon", icon: "🏭", name: "机械工坊・工具铸造", desc: "为团队制造提效武器，收益可复利" },
  r_dun_cross:   { type: "dungeon", icon: "🌉", name: "跨界回廊・多方协同", desc: "跨部门、跨职能推动方案落地" },
  r_dun_boss:    { type: "dungeon", icon: "🐉", name: "终焉之厅・从零到一", desc: "独立负责一个项目从立项到上线" }
};

/* ============================================================
   章节（时间轴节点）
   gain  : 本章获得的属性增量（同一 key 跨章累积）
   skills: 本章解锁的技能 id
   recs  : 本章解锁的推荐 id
   ============================================================ */
window.CHAPTERS = [
  {
    id: "ch0", role: "仅有开发热情的萌新", org: "入行起点", loc: "新手村",
    job: "见习冒险者", jobColor: "q1",
    desc: "带着一腔热情踏入开发世界：靠思辨拆解问题，靠学习补齐短板，把热情当作最耐烧的燃料。",
    lv: 12,
    gain: { coding: 18, learning: 30, debug: 12, delivery: 10 },
    skills: ["s_git", "s_python"],
    recs: ["r_dun_intro", "r_job_fe"],
    tags: [
      { t: "思辨能力", q: 1 },
      { t: "学习能力", q: 1 },
      { t: "100x热情", q: 2 }
    ]
  },
  {
    id: "ch1", role: "网易", org: "Unreal 客户端开发", loc: "主线・技能构筑",
    job: "剑士・客户端", jobColor: "q2",
    desc: "在大型项目中承担客户端技能与玩法开发，从零搭建可复用的技能框架，让后续扩展不必重复造轮子。",
    lv: 32,
    gain: { coding: 22, arch: 26, engine: 26, delivery: 16 },
    skills: ["s_cpp", "s_unreal", "s_design"],
    recs: ["r_dun_bug", "r_job_client"],
    tags: [
      { t: "技能开发", q: 2 },
      { t: "框架搭建", q: 3 }
    ]
  },
  {
    id: "ch2", role: "萨罗斯", org: "Unreal 客户端开发", loc: "主线・性能攻坚",
    job: "狂战士・性能向", jobColor: "q3",
    desc: "深入客户端性能战场：逐帧剖析 CPU/GPU 开销，压 DrawCall、削内存，把卡顿从体验里一点点抠掉。",
    lv: 52,
    gain: { perf: 36, engine: 24, debug: 22, coding: 14, tooling: 14 },
    skills: ["s_perf", "s_shader", "s_tool"],
    recs: ["r_dun_perf", "r_job_engine"],
    tags: [
      { t: "性能优化", q: 3 },
      { t: "渲染管线", q: 3 },
      { t: "内存治理", q: 3 }
    ]
  },
  {
    id: "ch3", role: "XX", org: "AI 相关工具开发・性能优化", loc: "外传・新大陆",
    job: "元素师・AI 炼金", jobColor: "q4",
    desc: "把大模型能力炼成趁手兵器：Agent 编排、知识库检索与工具集成，让 AI 真正嵌进日常研发流程。",
    lv: 74,
    gain: { ai: 44, tooling: 30, arch: 18, learning: 18, product: 14 },
    skills: ["s_agent", "s_rag", "s_prompt", "s_mcp"],
    recs: ["r_dun_ai", "r_dun_tool", "r_job_ai"],
    tags: [
      { t: "AI 工具开发", q: 4 },
      { t: "Agent 编排",  q: 4 },
      { t: "MCP 集成",    q: 4 }
    ]
  }
];

/* 面板状态初值（游戏化设定，非真实指标） */
window.PANEL_BASE = {
  hpMax: 8640,
  mpMax: 5120,
  expRate: 0
};
