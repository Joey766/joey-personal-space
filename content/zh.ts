export const zh = {
  language: "中文 / EN",
  nav: [{ label: "关于我", href: "#about" }, { label: "正在做", href: "#now" }, { label: "作品", href: "#projects" }, { label: "记录", href: "#notes" }, { label: "生活", href: "#life" }, { label: "职业", href: "/work" }],
  welcome: { eyebrow: "罗敖杰 · 个人空间", title: ["欢迎进入", "我的个人空间"], line: "探索 · 构建 · 思考 · 记录", enter: "进入空间", projects: "查看作品" },
  bottom: [{ number: "01", label: "探索", href: "#now" }, { number: "02", label: "构建", href: "#projects" }, { number: "03", label: "思考", href: "#notes" }, { number: "04", label: "生活", href: "#life" }],
  about: { number: "01", title: "关于我", lead: "你好，我是罗敖杰。", copy: ["我喜欢把不同领域的事物连接起来。", "数学训练让我习惯拆解问题；AI 和产品让我把想法做成现实。"], facts: ["University of Waterloo\n数学 · 统计 · 风险管理", "目前关注\nAI · 产品 · Robotics · Quantitative Thinking"] },
  now: { number: "02", title: "正在做", lead: "最近占据我时间与好奇心的事。", items: [{ title: "构建个人空间", copy: "持续迭代这个网站。" }, { title: "探索 AI 产品", copy: "思考 AI 如何进入真实工作流。" }, { title: "计算机视觉与机器人", copy: "探索视觉定位与具身智能。" }, { title: "量化与数据", copy: "用数学和统计理解现实问题。" }] },
  projects: { number: "03", title: "作品与实验", lead: "一些我真正动手做过的事。", view: "查看作品", items: [{ title: "AI 机器人视觉定位系统", tags: "Python / OpenCV / YOLO / LeRobot" }, { title: "信用评级迁移模型", tags: "Python / Markov Chain / Credit Risk" }, { title: "Joey Luo Personal Space", tags: "Vibe Coding / Product Design" }] },
  notes: { number: "04", title: "记录", lead: "一些值得留下来的想法。", copy: ["正在整理中。", "这里会记录项目复盘、产品想法与学习。"] },
  life: { number: "05", title: "生活之外", lead: "屏幕、模型和数字以外，也有很多喜欢的事。", chess: { title: "国际象棋", meta: "FIDE Candidate Master (CM)", copy: "它让我享受长期思考与短期决策之间的张力。" }, interests: ["足球", "钢琴 · 英皇八级", "乒乓球", "篮球"], gallery: ["Chess photo", "Football photo", "Personal photo", "Travel photo"] },
  career: { number: "06", title: "职业档案", lead: "从金融，到数据，再到 AI 与产品。", link: "查看完整职业档案" },
  contact: { number: "07", title: "联系", copy: "如果你想聊项目、AI、产品或金融，欢迎联系我。", links: ["Email", "GitHub", "LinkedIn"] }
};

export const careerZh = {
  language: "中文 / EN", back: "返回个人空间", backToTop: "回到顶部", indexLabel: "职业档案目录",
  hero: { eyebrow: "职业档案 / CAREER", school: "University of Waterloo", direction: "数学 · AI · 产品 · Quantitative Thinking", intro: "一份关于学习、工作、项目与构建经历的完整记录。" },
  index: [{ label: "教育", href: "#education" }, { label: "经历", href: "#experience" }, { label: "项目", href: "#projects" }, { label: "技能", href: "#skills" }, { label: "校园", href: "#campus" }],
  education: { number: "01 / 教育背景", title: "教育背景", year: "2022—2027", school: "University of Waterloo", degree: "数学荣誉学士 · Bachelor of Mathematics, Honours", major: "数学 / 风险管理方向", facts: ["Top 20%", "Distinction"], courses: "统计、精算、运筹、计算机、应用数学与纯数学等课程背景。", honours: ["President’s Scholarship", "连续四年 Distinction"] },
  experience: { number: "02 / 实习经历", title: "实习经历", mediaLabel: "未来可加入项目图片或工作记录", items: [
    { company: "上海大寰机器人科技有限公司", role: "AI 训练与数据助理实习生", department: "具身智能研发部", date: "2026.03 — 2026.04", tag: "AI / ROBOTICS", mediaLabel: "ROBOTICS", details: ["使用 Codex、Python、OpenCV 与 YOLO 实例分割处理上千张多角度工件图像，实现自动分割、轮廓提取与标准化。", "构建粗筛—精匹配视觉定位流程，并完成 SO-ARM101 六轴机械臂搭建、标定和 LeRobot 演示数据采集。"] },
    { company: "安永华明会计师事务所", role: "审计实习生 · 港股 IPO 项目", department: "", date: "2025.07 — 2025.08", tag: "AUDIT / IPO", mediaLabel: "IPO", details: ["使用 Excel 批量清洗和核验销售流水、合同、发票与凭证。", "参与港股 IPO 收入循环 Walk-through Test，核验合同至回款流程。"] },
    { company: "国泰海通证券股份有限公司", role: "实习生 · 债券资本市场部", department: "", date: "2025.05 — 2025.06", tag: "FIXED INCOME", mediaLabel: "BONDS", details: ["使用 Wind、FICC 与 Excel 完成债券发行、收益率、利差和评级核验，并参与 100+ 份材料制作。", "使用 Python 支持日常数据清洗、汇总与市场复盘。"] },
    { company: "深圳市海坤投资管理有限公司", role: "远程行研实习生", department: "行业研究部门", date: "2025.02 — 2025.09", tag: "RESEARCH", mediaLabel: "RESEARCH", details: ["独立撰写 AI 在线教育行业研究报告，结合 Wind 数据和 Python 分析营收、盈利及费用。", "进入报告审核组，负责数据核验、逻辑检查与修改建议。"] },
    { company: "香港天龙证券有限公司", role: "基金经理助理", department: "", date: "2024.10 — 2025.01", tag: "FINANCE / PRODUCT", mediaLabel: "PRODUCT", details: ["参与“香港资管通”App 从 0 到 1 产品设计，规划策略展示及虚拟盘/实盘流程。", "完成商业计划书，并以 R 与 Excel 进行财务测算和投资收益率分析。"] }
  ] },
  projects: { number: "03 / 项目与构建", title: "项目与构建", view: "查看项目", items: [{ title: "AI 机器人视觉定位系统", subtitle: "Python / OpenCV / YOLO / LeRobot", copy: "图像分割 → 姿态筛选 → 模板匹配 → 螺丝孔定位 → 机器人操作。", tools: "Computer Vision · Robotics · Data" }, { title: "Bond Ratings in the Auto Industry", subtitle: "马克尔夫链债券信用评级模型", copy: "构建一年期与多期 rating transition matrix，研究评级迁移与 Default absorbing state。", tools: "Python · Markov Models · Credit Risk" }, { title: "Joey Luo Personal Space", subtitle: "AI-assisted Personal Website", copy: "从概念、产品设计到 cinematic Welcome Screen，建立中英双语 Personal / Career 架构。", tools: "Product Design · Vibe Coding · AI" }] },
  skills: { number: "04 / 技能", title: "技能", groups: [{ title: "Programming & Data", items: ["Python", "Pandas", "R", "SQL", "Excel / VBA", "Wind", "FICC"] }, { title: "AI & Computer Vision", items: ["Codex", "OpenCV", "YOLO", "LeRobot"] }, { title: "Quantitative", items: ["Statistics", "Risk Management", "Credit Risk", "Markov Models"] }, { title: "Product", items: ["Product Design", "User Flow", "AI-assisted Development", "Vibe Coding"] }] },
  campus: { number: "05 / 校园与其他", title: "校园与其他", club: { title: "University of Waterloo Chess Club", role: "外联部副社长", details: ["与多伦多大学国际象棋社团组织两校对抗赛，每学期一次。", "参与每周活动、自由对弈及内部赛事组织。"] }, notes: [{ title: "国际象棋", copy: "FIDE Candidate Master（CM）；亚洲年龄组亚军。" }, { title: "钢琴", copy: "英皇八级；乐理五级。" }, { title: "运动", copy: "足球、篮球、乒乓球。" }] },
};
