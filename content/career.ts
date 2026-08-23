export const careerZh = {
  ui: {
    navigation: [{ label: "主页", href: "/" }, { label: "职业", href: "/work" }, { label: "项目", href: "/projects" }, { label: "探索", href: "/explore" }, { label: "生活", href: "/life" }],
    back: "返回个人空间", language: "中文 / EN", experienceIntro: "每一段经历，都是一次新的探索。我不希望将自己局限于单一领域，而是在不同方向中寻找可能性。在探索的过程中，我不断发现自己的不足，也逐渐明确真正感兴趣的问题——如何利用数学、数据和技术解决现实世界的问题。",
    labels: { education: "教育背景", educationSub: "学术旅程", experience: "职业时间线", experienceSub: "职业旅程", projects: "项目与构建", stack: "互动工具包", stackSub: "技术能力", beyond: "校园与生活" },
  },
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
    journey: ["2023", "2024", "2025", "2026", "2027"],
    themes: ["数学", "数据", "风险管理"],
  },
  experience: [
    { company: "上海大寰机器人科技有限公司", role: "AI训练与数据助理实习生 —— 具身智能研发部", period: "2026.03 — 2026.04", details: ["借助 Codex 进行 AI 辅助编程，基于 Python、OpenCV 与 YOLO 实例分割，使用多角度工件图像训练视觉模型，实现实拍图自动分割、轮廓提取与标准化处理。", "构建粗筛–精匹配视觉定位流程，通过姿态筛选与匹配评分确定工件姿态，并将参考图中的螺丝孔坐标映射至实际工件位置，为机器人自动锁螺丝提供定位。", "独立完成 SO-ARM101 六轴机械臂主从机搭建、标定与调试，基于 LeRobot 实现视觉辅助遥操作并采集专家演示数据。"], tags: ["AI", "计算机视觉", "Python", "OpenCV", "YOLO", "机器人"] },
    { company: "安永华明会计师事务所（深圳）", role: "审计实习生 —— 港股 IPO 项目", period: "2025.07 — 2025.08", details: ["使用 Excel（XLOOKUP/VLOOKUP）及方方格子批量清洗并核验销售流水、合同、发票及凭证数据，支持审计抽样与底稿整理。", "参与港股 IPO 收入循环穿行测试，核验合同、订单、物流、签收、发票及回款流程，为收入确认及审计结论提供支持。"], tags: ["审计", "IPO", "Excel", "财务分析"] },
    { company: "国泰海通证券股份有限公司", role: "债券资本市场部实习生", period: "2025.05 — 2025.06", details: ["基于 Wind、FICC 与 Excel 提取债券发行及市场数据，完成收益率、利差测算、中债隐含评级及内部评级核验，并制作 100+ 份发行与交易材料。", "使用 Python 搭建数据清洗与汇总流程，整理一级发行、资金面、国债收益率及宏观市场数据，支持每日市场复盘。"], tags: ["固定收益", "债券资本市场", "Wind", "FICC", "Python"] },
    { company: "深圳市海坤投资管理有限公司", role: "远程行研实习生 —— 行业研究部门", period: "2025.02 — 2025.09", details: ["独立撰写 AI 在线教育行业研究报告《人工智能赋能下的在线教育商业模式转型》，分析企业营收、盈利能力及研发/销售费用等指标。", "基于 Wind 数据并借助 AI 辅助编程搭建 Python 分析流程，支持行业研究与投资分析。", "因研究表现获认可，进入行研报告审核组，负责数据核验、逻辑检查及修改建议。"], tags: ["行业研究", "AI 行业", "Python", "数据分析"] },
    { company: "香港天龙证券有限公司", role: "基金经理助理", period: "2024.10 — 2025.01", details: ["参与与香港科技大学金融数学社团合作的「香港资管通」App 从 0 到 1 产品设计，规划注册、团队策略展示、量化合作及虚拟盘/实盘等核心功能。", "独立完成北京大学交流合作项目商业计划书，负责市场分析、合作模式及项目方案设计。", "使用 R 与 Excel 完成香港地产项目财务测算及投资收益率分析，为投资评估提供量化支持。"], tags: ["投资研究", "产品", "R", "Excel"] },
  ],
  projects: [
    { title: "Zhiyue AI", subtitle: "AI求职助手", description: "构建AI驱动的职业规划平台，实现简历解析、岗位匹配、技能差距分析与求职辅助。", tools: "Ollama · Qwen3 · Streamlit", path: ["理解背景", "匹配机会", "优化行动"] },
    { title: "AI机器人视觉定位系统", description: "基于计算机视觉实现机器人目标识别、定位与操作流程。", tools: "Python · OpenCV · YOLO · LeRobot", path: ["捕捉图像", "识别目标", "执行定位"] },
    { title: "汽车行业债券评级迁移模型", description: "基于马尔可夫链建立信用评级迁移模型，分析债券信用风险变化。", tools: "Python · 马尔可夫链 · 风险建模", path: ["整理数据", "建立模型", "评估风险"] },
  ],
  skills: [
    { category: "AI 与计算机视觉", capability: "构建模型调用、视觉识别与 AI 工作流", items: ["LLM", "Qwen", "Ollama", "OpenCV", "YOLO", "Codex"] },
    { category: "编程与数据", capability: "完成数据处理、分析与自动化流程", items: ["Python", "R", "SQL", "SAS", "Pandas", "Excel VBA"] },
    { category: "数据分析", capability: "用模型理解风险、信用与不确定性", items: ["统计学", "风险管理", "信用风险", "马尔可夫模型"] },
    { category: "产品开发", capability: "将问题转化为可迭代的产品体验", items: ["产品设计", "用户流程", "AI 辅助开发", "氛围编程"] },
  ],
  beyond: {
    chess: { title: "国际象棋", credential: "FIDE Candidate Master (CM)", achievement: "亚洲年龄组亚军" },
    activities: [{ title: "足球与运动", detail: "足球 · 篮球 · 乒乓球" }, { title: "音乐", detail: "钢琴学习" }],
  },
} as const;

export const careerEn = {
  ui: {
    navigation: [{ label: "Home", href: "/en" }, { label: "Career", href: "/en/work" }, { label: "Projects", href: "/en/projects" }, { label: "Explore", href: "/en/explore" }, { label: "Life", href: "/en/life" }],
    back: "Back to Personal Space", language: "中文 / EN", experienceIntro: "From financial analysis to artificial intelligence, exploring how data becomes real products.",
    labels: { education: "Education", educationSub: "Academic Journey", experience: "Experience", experienceSub: "Career Timeline", projects: "Projects", stack: "Technical Stack", stackSub: "Interactive Toolkit", beyond: "Beyond" },
  },
  hero: { title: "Career Journey", theme: "Mathematics × Artificial Intelligence × Product Building", intro: "A record of learning, practice, and creation." },
  education: { school: "University of Waterloo", degree: "Bachelor of Mathematics, Honours", major: "Major: Financial Analysis and Risk Management (FARM)", specialization: "Specialization: Professional Risk Management (PRM)", years: "2023 — 2027", facts: ["Academic Standing: Distinction", "GRE: 329", "Q170 / V159"], journey: ["2023", "2024", "2025", "2026", "2027"], themes: ["Mathematics", "Data", "Risk Management"] },
  experience: [
    { company: "Shanghai Dahuan Robotics Technology Co., Ltd.", role: "AI Training & Data Assistant Intern", period: "2026.03 — 2026.04", details: ["Developed computer vision data pipelines using Python, OpenCV, and YOLO instance segmentation for robotic perception tasks.", "Built coarse-to-fine visual localization workflows by matching object templates and mapping reference coordinates to real-world positions.", "Built and calibrated SO-ARM101 robotic systems and collected expert demonstrations using LeRobot for imitation learning."], tags: ["AI", "Computer Vision", "Python", "OpenCV", "YOLO", "Robotics"] },
    { company: "Ernst & Young (EY)", role: "Audit Intern — Hong Kong IPO Project", period: "2025.07 — 2025.08", details: ["Supported IPO audit procedures through financial document verification, contract review, invoice checking, and data analysis.", "Used Excel-based workflows to improve financial data validation and audit testing efficiency."], tags: ["Audit", "IPO", "Excel", "Financial Analysis"] },
    { company: "Guotai Haitong Securities Co., Ltd.", role: "Fixed Income Intern — Debt Capital Markets", period: "2025.05 — 2025.06", details: ["Analyzed bond issuance and market data using Wind, FICC tools, and Excel.", "Built Python workflows for data cleaning and daily fixed-income market analysis."], tags: ["Fixed Income", "Debt Capital Markets", "Wind", "FICC", "Python"] },
    { company: "Haikun Investment Management Co., Ltd.", role: "Research Intern", period: "2025.02 — 2025.09", details: ["Conducted industry research on AI and online education sectors.", "Built Python-based analysis workflows using financial data to support investment research."], tags: ["Investment Research", "AI Industry", "Python", "Data Analysis"] },
    { company: "Hong Kong Tianlong Securities Co., Ltd.", role: "Assistant to Fund Manager", period: "2024.10 — 2025.01", details: ["Participated in the 0-to-1 product design of the \"Hong Kong Asset Management Connect\" App.", "Developed business plans and performed financial analysis using R and Excel."], tags: ["Investment Research", "Product", "R", "Excel"] },
  ],
  projects: [
    { title: "Zhiyue AI", subtitle: "AI Career Assistant", description: "Built an AI-powered career assistant integrating resume parsing, career preference understanding, job matching, and skill-gap analysis.", tools: "Ollama · Qwen3 · Streamlit", path: ["Parse Resume", "Match Roles", "Identify Gaps"] },
    { title: "Joey Luo Personal Space", subtitle: "AI Personal Website", description: "Built an AI-native personal website using Codex and a Vibe Coding workflow, integrating personal profile, projects, career experience, and an interactive digital space.", tools: "Next.js · React · Three.js · Vibe Coding", path: ["Shape Identity", "Build Space", "Iterate Experience"] },
    { title: "Bond Ratings in the Auto Industry", subtitle: "Markov Chain Credit Rating Model", description: "Built a Markov Chain credit-rating transition model for analyzing automotive bond credit risk.", tools: "Python · Markov Chain · Credit Risk Modeling", path: ["Structure Data", "Model Transitions", "Assess Risk"] },
  ],
  skills: [
    { category: "AI & Computer Vision", capability: "Build model workflows, visual recognition, and AI-assisted development systems.", items: ["LLM", "Qwen", "Ollama", "OpenCV", "YOLO", "Codex"] },
    { category: "Programming & Data", capability: "Process, analyze, and automate data workflows.", items: ["Python", "R", "SQL", "SAS", "Pandas", "Excel VBA"] },
    { category: "Quantitative Modeling", capability: "Use models to reason about risk, credit, and uncertainty.", items: ["Statistics", "Risk Management", "Credit Risk", "Markov Models"] },
    { category: "Product Development", capability: "Turn problems into iterative product experiences.", items: ["Product Design", "User Flow", "AI-assisted Development", "Vibe Coding"] },
  ],
  beyond: { chess: { title: "Chess", credential: "FIDE Candidate Master (CM)", achievement: "Asian Age-Group Runner-up" }, activities: [{ title: "Football & Sports", detail: "Football · Basketball · Table Tennis" }, { title: "Music", detail: "Piano" }] },
} as const;
