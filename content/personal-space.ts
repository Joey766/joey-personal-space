export const personalSpaceZh = {
  navigation: [
    { label: "探索", href: "/explore" },
    { label: "职业", href: "/work" },
    { label: "项目", href: "/projects" },
    { label: "生活", href: "/life" },
  ],
  career: {
    eyebrow: "职业经历",
    title: "Career Journey",
    lead: "实习经历是我把分析、研究与技术能力带入真实问题的过程。",
    archiveLabel: "查看完整职业档案 →",
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
    lead: "围绕 AI 产品、机器人视觉与量化建模的持续实践。",
    items: [
      { number: "01", title: "Zhiyue AI", subtitle: "AI求职助手", description: "构建 AI 驱动的职业规划平台，实现简历解析、岗位匹配、技能差距分析。", stack: ["Ollama", "Qwen3", "Streamlit"] },
      { number: "02", title: "Joey Luo Personal Space", description: "使用 AI 辅助开发个人网站，构建中英文 Personal / Career 架构。", stack: ["Next.js", "React", "Three.js", "Vibe Coding"] },
      { number: "03", title: "AI机器人视觉定位系统", description: "探索机器人目标识别、定位与操作流程的计算机视觉工作流。", stack: ["Python", "OpenCV", "YOLO", "LeRobot"] },
      { number: "04", title: "汽车行业债券评级迁移模型", description: "基于 Markov Chain 分析汽车行业债券信用风险变化。", stack: ["Python", "Markov Chain", "Risk Modeling"] },
    ],
  },
  life: {
    eyebrow: "Memories",
    title: "生活",
    lead: "留给校园、运动、棋局、音乐、旅行和日常的空间。",
    categories: ["校园", "足球与运动", "国际象棋", "音乐", "旅行", "日常"],
  },
} as const;
