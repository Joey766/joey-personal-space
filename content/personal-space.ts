export const personalSpaceZh = {
  ui: { home: "主页", language: "中文 / EN", photoSlot: "照片位置", flow: ["发现", "构建", "迭代"] },
  navigation: [
    { label: "探索", href: "/explore" },
    { label: "职业", href: "/work" },
    { label: "项目", href: "/projects" },
    { label: "生活", href: "/life" },
  ],
  career: {
    eyebrow: "职业经历",
    title: "职业旅程",
    lead: "实习经历是我把分析、研究与技术能力带入真实问题的过程。",
    archiveLabel: "查看完整职业档案 →", archiveTitle: ["更完整地记录", "学习、实践与创造。"],
    entries: [
      { year: "2026", company: "上海大寰机器人科技有限公司", role: "AI训练与数据助理实习生", focus: "AI / Robotics", description: "使用 Python、OpenCV、YOLO 进行机器人视觉数据处理，完成图像处理、目标检测与数据优化。", logo: { brand: "DAHUAN", subline: "ROBOTICS" } },
      { year: "2025", company: "安永华明会计师事务所", role: "审计实习生 · 港股IPO项目", description: "参与 IPO 审计流程，完成财务资料检查、数据整理和分析。", logo: { brand: "EY", subline: "ASSURANCE · IPO" } },
      { year: "2025", company: "国泰海通证券股份有限公司", role: "债券资本市场部实习生", description: "参与债券发行相关工作，使用 Wind、FICC 数据进行市场分析。", logo: { brand: "国泰海通", subline: "GUOTAI HAITONG SECURITIES" } },
      { year: "2025", company: "深圳市海坤投资管理有限公司", role: "行业研究实习生", description: "完成行业研究与数据分析，结合 Python 支持研究工作。", logo: { brand: "HAIKUN", subline: "INVESTMENT MANAGEMENT" } },
      { year: "2024", company: "香港天龙证券有限公司", role: "基金经理助理", description: "参与产品研究、市场分析和数据整理。", logo: { brand: "TIANLONG", subline: "SECURITIES" } },
    ],
  },
  projects: {
    eyebrow: "项目",
    title: "项目与构建",
    lead: "人工智能正在改变创造的方式。借助新的工具与技术，我开始探索如何从一个想法出发，快速构建属于自己的产品。对我而言，项目不仅是最终成果，更是不断尝试、学习和突破边界的过程。",
    items: [
      { number: "01", title: "Zhiyue AI", subtitle: "AI求职助手", description: "构建 AI 驱动的职业规划平台，实现简历解析、岗位匹配、技能差距分析。", stack: ["Ollama", "Qwen3", "Streamlit"] },
      { number: "02", title: "罗敖杰个人空间", description: "使用 AI 辅助开发个人网站，构建中英文个人空间与职业档案架构。", stack: ["Next.js", "React", "Three.js", "氛围编程"] },
      { number: "03", title: "AI机器人视觉定位系统", description: "探索机器人目标识别、定位与操作流程的计算机视觉工作流。", stack: ["Python", "OpenCV", "YOLO", "LeRobot"] },
      { number: "04", title: "汽车行业债券评级迁移模型", description: "基于马尔可夫链分析汽车行业债券信用风险变化。", stack: ["Python", "马尔可夫链", "风险建模"] },
    ],
  },
  life: {
    eyebrow: "个人生活档案",
    title: "生活",
    lead: "我始终认为，生活与学习、工作应该保持平衡。忙碌之外，生活给予我恢复能量的空间，也让我在不同的体验中发现新的乐趣。无论是棋盘上的思考、运动中的挑战，还是音乐中的表达，这些经历让我保持好奇，更加享受探索世界的过程。",
    archive: [
      { slug: "campus", title: "校园", label: "校园生活", intro: "一段关于学习、社区与日常校园片段的记录。" },
      { slug: "football", title: "Football", label: "足球与运动", intro: "一段关于团队、挑战与持续投入的记录。" },
      { slug: "chess", title: "国际象棋", label: "棋类经历", intro: "一段关于思考、专注、策略与长期训练的记录。" },
      { slug: "music", title: "音乐", label: "创造与表达", intro: "一段关于练习、表达与节奏的记录。" },
      { slug: "travel", title: "旅行", label: "探索不同环境", intro: "一段关于走进不同环境、保持开放与发现新视角的记录。" },
      { slug: "everyday", title: "日常", label: "照片记录", intro: "一段关于平凡日子里值得留下的照片与记忆的记录。" },
    ],
    galleryLabel: "照片墙",
    galleryNote: "照片位置，等待未来的生活片段。",
  },
} as const;

export const personalSpaceEn = {
  ui: { home: "Home", language: "中文 / EN", photoSlot: "Photo slot", flow: ["Discover", "Build", "Iterate"] },
  navigation: [
    { label: "Explore", href: "/en/explore" },
    { label: "Career", href: "/en/work" },
    { label: "Projects", href: "/en/projects" },
    { label: "Life", href: "/en/life" },
  ],
  career: {
    eyebrow: "Career Journey",
    title: "Career Journey",
    lead: "A record of bringing analysis, research, and technology into real-world problems.",
    archiveLabel: "View Full Career Archive →", archiveTitle: ["A fuller record of", "learning, practice, and creation."],
    entries: [
      { year: "2026", company: "Shanghai Dahuan Robotics Technology Co., Ltd.", role: "AI Training & Data Assistant Intern", focus: "AI / Robotics", description: "Developed computer vision data pipelines using Python, OpenCV, and YOLO instance segmentation for robotic perception tasks.", logo: { brand: "DAHUAN", subline: "ROBOTICS" } },
      { year: "2025", company: "Ernst & Young (EY)", role: "Audit Intern — Hong Kong IPO Project", description: "Supported IPO audit procedures through financial document verification, contract review, invoice checking, and data analysis.", logo: { brand: "EY", subline: "ASSURANCE · IPO" } },
      { year: "2025", company: "Guotai Haitong Securities Co., Ltd.", role: "Fixed Income Intern — Debt Capital Markets", description: "Analyzed bond issuance and market data using Wind, FICC tools, and Excel.", logo: { brand: "GUOTAI HAITONG", subline: "SECURITIES" } },
      { year: "2025", company: "Haikun Investment Management Co., Ltd.", role: "Research Intern", description: "Conducted industry research on AI and online education sectors, supported by Python-based financial data analysis.", logo: { brand: "HAIKUN", subline: "INVESTMENT MANAGEMENT" } },
      { year: "2024", company: "Hong Kong Tianlong Securities Co., Ltd.", role: "Assistant to Fund Manager", description: "Participated in product research, market analysis, and investment data organization.", logo: { brand: "TIANLONG", subline: "SECURITIES" } },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Projects & Builds",
    lead: "Ongoing work across AI products, computer vision, and quantitative modeling.",
    items: [
      { number: "01", title: "Zhiyue AI", subtitle: "AI Career Assistant", description: "Built an AI-powered career assistant integrating resume parsing, career preference understanding, job matching, and skill-gap analysis.", stack: ["Ollama", "Qwen3", "Streamlit"] },
      { number: "02", title: "Joey Luo Personal Space", subtitle: "AI Personal Website", description: "Built an AI-native personal website using Codex and a Vibe Coding workflow, integrating profile, projects, career experience, and an interactive digital space.", stack: ["Next.js", "React", "Three.js", "Vibe Coding"] },
      { number: "03", title: "Bond Ratings in the Auto Industry", subtitle: "Markov Chain Credit Rating Model", description: "Built a Markov Chain credit-rating transition model to analyze credit-risk changes in the automotive bond market.", stack: ["Python", "Markov Chain", "Credit Risk Modeling"] },
    ],
  },
  life: {
    eyebrow: "Personal Life Archive",
    title: "Life",
    lead: "I believe life should stay in balance with study and work. Beyond busy days, it offers space to recharge and discover new interests. Whether through thought on the chessboard, challenge in sport, or expression in music, these experiences keep me curious and open to the world.",
    archive: [
      { slug: "campus", title: "Campus", label: "Campus Life", intro: "A record of learning, community, and everyday campus moments." },
      { slug: "football", title: "Football", label: "Football & Sports", intro: "A record of teamwork, challenge, and steady commitment." },
      { slug: "chess", title: "Chess", label: "Chess", intro: "A record of thought, focus, strategy, and long-term training." },
      { slug: "music", title: "Music", label: "Music", intro: "A record of practice, expression, and rhythm." },
      { slug: "travel", title: "Travel", label: "Travel", intro: "A record of new environments, open-mindedness, and fresh perspectives." },
      { slug: "everyday", title: "Everyday", label: "Everyday Moments", intro: "A record of the photos and memories worth keeping from ordinary days." },
    ],
    galleryLabel: "Gallery",
    galleryNote: "Photo placeholders for future moments.",
  },
} as const;
