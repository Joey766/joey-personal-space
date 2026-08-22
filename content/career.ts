export const careerZh = {
  hero: {
    title: "职业档案",
    theme: "数学 × 人工智能 × 产品构建",
    intro: "记录学习、实践与创造过程。",
  },
  education: {
    school: "University of Waterloo",
    degree: "数学荣誉学士",
    major: "主修：金融分析与风险管理（FARM）",
    specialization: "专业方向：专业风险管理（PRM）",
    years: "2023 — 2027",
    facts: ["Distinction", "GRE 329", "Q170 / V159"],
  },
  experience: [
    { company: "上海大寰机器人科技有限公司", role: "AI训练与数据助理实习生", period: "2026.03 — 2026.04", description: "使用 Python、OpenCV、YOLO 处理机器人视觉数据，完成图像处理、目标检测与数据优化。", tags: ["AI", "Robotics", "Python", "OpenCV", "YOLO"] },
    { company: "安永华明会计师事务所", role: "审计实习生 · 港股IPO项目", period: "2025.07 — 2025.08", description: "参与 IPO 审计流程，完成合同、发票及财务资料检查，以及 Excel 数据整理与分析。", tags: ["Audit", "IPO", "Excel"] },
    { company: "国泰海通证券股份有限公司", role: "债券资本市场部实习生", period: "2025.05 — 2025.06", description: "参与债券发行材料整理，使用 Wind、FICC 数据完成市场分析。", tags: ["Debt Capital Markets", "Wind", "FICC"] },
    { company: "深圳市海坤投资管理有限公司", role: "行业研究实习生", period: "2025.02 — 2025.09", description: "独立完成行业研究报告，结合 Python 与数据分析支持投资研究。", tags: ["Industry Research", "Python", "Data Analysis"] },
    { company: "香港天龙证券有限公司", role: "基金经理助理", period: "2024.10 — 2025.01", description: "参与产品研究与市场分析，完成 Excel 数据整理和投资分析支持。", tags: ["Investment Research", "Excel", "Product"] },
  ],
  projects: [
    { title: "知跃AI", subtitle: "AI求职助手", description: "构建AI驱动的职业规划平台，实现简历解析、岗位匹配、技能差距分析与求职辅助。", tools: "Ollama · Qwen3 · Streamlit" },
    { title: "AI机器人视觉定位系统", description: "基于计算机视觉实现机器人目标识别、定位与操作流程。", tools: "Python · OpenCV · YOLO · LeRobot" },
    { title: "汽车行业债券评级迁移模型", description: "基于Markov Chain建立信用评级迁移模型，分析债券信用风险变化。", tools: "Python · Markov Chain · Risk Modeling" },
  ],
  skills: [
    { category: "AI 与计算机视觉", items: ["LLM", "Qwen", "Ollama", "OpenCV", "YOLO", "Codex"] },
    { category: "编程与数据", items: ["Python", "R", "SQL", "SAS", "Pandas", "Excel VBA"] },
    { category: "数量分析", items: ["Statistics", "Risk Management", "Credit Risk", "Markov Models"] },
    { category: "产品开发", items: ["Product Design", "User Flow", "AI-assisted Development", "Vibe Coding"] },
  ],
  beyond: {
    chess: { title: "国际象棋", credential: "FIDE Candidate Master (CM)", achievement: "亚洲年龄组亚军" },
    activities: [{ title: "足球与运动", detail: "足球 · 篮球 · 乒乓球" }, { title: "音乐", detail: "钢琴学习" }],
  },
} as const;

// Reserved for a future localized version; components share the same data shape.
export const careerEn = careerZh;
