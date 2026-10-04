import { educationStoryByLocale } from "./profile";

export const zh = {
  language: "中文 / EN",
  nav: [{ label: "探索", href: "#about" }, { label: "职业", href: "#career" }, { label: "项目", href: "#projects" }, { label: "生活", href: "#life" }],
  welcome: {
    eyebrow: "罗敖杰 · 个人空间",
    title: ["探索数学、数据与", "人工智能的无限可能"],
    line: ["滑铁卢大学 · 数学荣誉学士在读", "金融分析与风险管理（FARM）"],
    enter: "继续探索",
  },
  bottom: [{ number: "01", label: "探索", href: "#about" }, { number: "02", label: "职业", href: "#career" }, { number: "03", label: "项目", href: "#projects" }, { number: "04", label: "生活", href: "#life" }],
  about: {
    number: "01", title: "探索",
    lead: "从数学和风险管理出发，探索数据、人工智能与产品之间的连接。",
    copy: [educationStoryByLocale.zh, "在金融实践、AI 产品和机器人视觉工作中，我尝试把数学思维与数据分析用于具体问题。"],
    cards: [
      { title: "量化思维", copy: "通过数学、统计和风险模型，理解问题中的结构与不确定性。", detail: "在 STAT 334 四人课程项目中担任组长，与团队使用给定的 S&P 转移矩阵比较多期评级迁移，并在模型假设下解释长期行为。", tags: ["数学与统计", "风险管理", "马尔可夫链"] },
      { title: "人工智能", copy: "从语言模型到计算机视觉，探索 AI 在具体任务中的用法。", detail: "职跃 AI 中不同岗位的匹配评分一度过于相似；机器人实习中也遇到模型迁移效果不稳定的问题。两段实践都需要从实际输出排查问题，再调整逻辑并验证。", tags: ["Ollama · Qwen3", "OpenCV · YOLO", "Python"] },
      { title: "产品创造", copy: "把需求与技术连接起来，逐步构建可以使用的产品体验。", detail: "香港资管通的设计从用户有限的时间出发，决定首页指标与策略信息的展示顺序；职跃 AI 则在复杂度与稳定性之间缩小范围，优先让用户查看相关 JD。", tags: ["信息优先级", "AI 产品", "产品取舍"] },
    ],
    timelineTitle: "探索的路径",
    timelineLead: "学习、实践与个人项目，逐步连接成一条路径。",
    timeline: [
      { year: "2023", copy: "进入滑铁卢大学数学系。" },
      { year: "2024", copy: "在香港天龙证券开始金融与产品流程实践。", items: ["投资分析", "香港资管通用户流程"] },
      { year: "2025", copy: "继续金融与行业研究实践，开始职跃 AI，并担任 STAT 334 四人课程项目组长。", items: ["金融与研究", "Zhiyue AI", "信用评级迁移"] },
      { year: "2026", copy: "在大寰机器人参与视觉定位工作，并构建这个双语个人空间。", items: ["机器人视觉", "Personal Space"] },
    ],
  },
  // Kept for a future Thoughts chapter; currently absent from public navigation.
  notes: {
    number: "03", title: "思考", lead: "方法比答案更可迁移。",
    cards: [
      { title: "数据驱动", copy: "数学和风险管理训练让我习惯通过数据、模型和结构化分析理解问题。" },
      { title: "AI 原生", copy: "人工智能不仅提升效率，也正在改变软件开发和产品创造方式。" },
      { title: "产品思维", copy: "技术最终需要服务真实用户需求，并转化为有价值的体验。" },
    ],
    questions: ["AI 如何改变个人创造力？", "如何让 AI 真正解决人的问题？", "数学如何帮助理解智能系统？"],
    philosophy: "深入思考，快速构建，持续迭代。",
  },
};
