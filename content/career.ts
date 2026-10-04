import { education, technicalToolkitByLocale } from "./profile";

export type CareerContent = {
  ui: {
    experienceIntro: string;
    labels: { education: string; educationSub: string; experience: string; experienceSub: string; projects: string; stack: string; stackSub: string; beyond: string; contact: string };
    projectsIntro: string;
    projectLink: string;
    contactIntro: string;
  };
  hero: { title: string; theme: string; intro: string };
  education: {
    school: string; degree: string; major: string; specialization: string; years: string;
    facts: Array<{ label: string; value: string }>;
    award: string; awardLabel: string; journey: string[]; themes: string[];
  };
  experience: Array<{ company: string; role: string; period: string; focus: string; story: string[]; tags: string[] }>;
  skills: Array<{ category: string; items: string[]; note?: string }>;
  beyond: { chess: { title: string; credential: string; role: string; period: string; details: string[] }; music: { title: string; detail: string } };
};

const academicJourney = ["2023", "2024", "2025", "2026", "2027"];

// Facts follow the latest recruiting resumes and the user's account of real
// challenges. Career tells those stories; project details remain in projects.ts.
export const careerZh: CareerContent = {
  ui: {
    experienceIntro: "检查交易链路、恢复数据流程、分析企业差异，再到诊断视觉错配与规划产品信息——这些具体问题，构成了我的实践路径。",
    labels: { education: "教育背景", educationSub: "学术基础", experience: "职业经历", experienceSub: "从问题到实践", projects: "项目与构建", stack: "技术工具", stackSub: "编程、分析与产品开发", beyond: "校园与生活", contact: "保持联系" },
    projectsIntro: "项目中的方法、贡献与边界，在 Projects 中展开记录。",
    projectLink: "查看项目",
    contactIntro: "欢迎交流 AI、产品、数据分析或合作机会。",
  },
  hero: { title: "职业旅程", theme: "数学 × 人工智能 × 产品构建", intro: "在不同领域的学习与实践中，探索自己的方向。" },
  education: {
    school: education.school, degree: "数学荣誉学士 · 在读",
    major: "主修：金融分析与风险管理（FARM）", specialization: "专业方向：专业风险管理（PRM）",
    years: education.start + " — 预计 " + education.expectedGraduation,
    facts: [{ label: "累计平均分", value: education.average }, { label: "学术评级", value: education.academicStanding }, { label: "GRE", value: String(education.gre) }],
    awardLabel: "奖学金", award: "总统奖学金（" + education.scholarship + "，" + education.scholarshipYear + "）",
    journey: academicJourney, themes: ["数学", "数据", "风险管理"],
  },
  experience: [
    {
      company: "上海大寰机器人科技有限公司", role: "AI 训练与数据助理实习生 · 具身智能研发部", period: "2026.03 — 2026.04", focus: "识别不稳定时，先检查模型输出",
      story: [
        "模型迁移到工件图像后，识别效果并不稳定。我使用 Python、OpenCV 与 YOLO，基于 1,000+ 张多角度工件图像筛选和评估模型，检查错误匹配、调整参数与处理逻辑，再用图片对照验证。定位环节采用粗筛—精匹配：以约 30° 姿态间隔筛选候选模板，根据评分确定姿态，并映射参考螺丝孔坐标。",
        "另一条工作线是独立搭建、标定与调试 SO-ARM101 六轴主从机械臂，使用 LeRobot 实现视觉辅助遥操作。采集的 8,000+ 张遥操作图像属于单独的数据集，用于模仿学习数据准备；工件图像则用于视觉模型与定位流程的评估。",
      ], tags: ["模型评估", "错误诊断与验证", "视觉定位", "LeRobot"],
    },
    {
      company: "安永华明会计师事务所（深圳）", role: "审计实习生 · 港股 IPO 项目", period: "2025.07 — 2025.08", focus: "让交易记录与支持文件相互对应",
      story: [
        "在港股 IPO 审计中，我使用 Excel 的 XLOOKUP/VLOOKUP 及方方格子处理 3,000+ 条销售交易记录。工作不止是清洗数据，还需要把合同、发票和凭证逐项匹配，核对一致性，并整理审计抽样底稿。",
        "收入循环测试把这些核验放回完整交易链路：从合同、订单到出库、物流、签收、发票与回款，追溯记录并整理收入确认测试所需的证据，支持团队的审计工作。",
      ], tags: ["交易核验", "收入循环", "Excel"],
    },
    {
      company: "国泰海通证券股份有限公司", role: "债券资本市场部实习生", period: "2025.05 — 2025.06", focus: "先让已有数据流程恢复运行",
      story: [
        "日常市场复盘依赖已有 Python 数据流程正常执行。遇到环境和依赖问题时，我定位原因、恢复运行，针对性调整脚本逻辑，并核验更新后的输出，支持一级发行、资金面、国债收益率和宏观市场数据的整理。",
        "围绕债券发行与交易，我也使用 Wind、FICC 与 Excel 提取市场数据，测算收益率和利差，核对中债隐含评级、内部评级与白名单，参与制作 100+ 份发行和交易材料。",
      ], tags: ["流程诊断与恢复", "输出核验", "固定收益"],
    },
    {
      company: "深圳市海坤投资管理有限公司", role: "远程行研实习生 · 行业研究部门", period: "2025.02 — 2025.09", focus: "通过企业比较理解 AI 教育行业",
      story: [
        "AI 在线教育研究需要同时看技术方向与企业经营。我独立撰写行业报告，使用 Wind 与 Python 对比 10+ 家公司的营收、盈利能力、研发与销售费用，再结合商业模式、竞争差异与行业趋势组织分析。",
        "进入报告审核组后，我继续核查研究数据、分析逻辑与表达一致性，并提出修改建议，让报告中的判断能够对应到具体证据。",
      ], tags: ["独立行业研究", "10+ 企业比较", "Wind · Python"],
    },
    {
      company: "香港天龙证券有限公司", role: "基金经理助理实习生", period: "2024.10 — 2025.01", focus: "用户时间有限，首页应该先展示什么？",
      story: [
        "在「香港资管通」App 的早期设计中，我与香港科技大学金融数学社团合作，从首屏指标和策略展示的优先级入手，规划信息架构、UI 与用户流程。市场和竞品研究、团队讨论与方案迭代，帮助把信息优先级连接到整体 App 使用逻辑。",
        "团队完成了一版原型，小程序进入测试阶段；在我的实习期间，完整 App 尚未正式发布。我还独立撰写北京大学合作项目商业计划书，并使用 R 与 Excel 分析香港地产竞标方案的成本、租金与投资收益率。",
      ], tags: ["信息优先级", "UI 与用户流程", "团队原型与测试"],
    },
  ],
  skills: technicalToolkitByLocale.zh,
  beyond: {
    chess: { title: "国际象棋与校园组织", credential: "FIDE Candidate Master（CM）", role: "滑铁卢大学国际象棋社 · 外联部副社长", period: "2023.09 — 2025.05", details: ["每学期组织与多伦多大学的两天校际比赛，协调双方各六人的参赛队伍。", "协调外部联络，参与周常活动、自由对弈和内部赛事的安排与现场执行。"] },
    music: { title: "音乐", detail: "钢琴 · 英皇八级 / 乐理五级" },
  },
};

export const careerEn: CareerContent = {
  ui: {
    experienceIntro: "Tracing transactions, restoring data workflows, comparing companies, diagnosing visual mismatches and shaping product information: the concrete problems behind my experience.",
    labels: { education: "Education", educationSub: "Academic foundations", experience: "Experience", experienceSub: "Working through real problems", projects: "Projects & builds", stack: "Technical toolkit", stackSub: "Programming, analysis and product development", beyond: "Beyond work", contact: "Get in touch" },
    projectsIntro: "Projects brings together the methods, contributions and scope of each piece of work.",
    projectLink: "View project",
    contactIntro: "I welcome conversations about AI, product, data analysis and opportunities to collaborate.",
  },
  hero: { title: "Career Journey", theme: "Mathematics × Artificial Intelligence × Product Building", intro: "Finding direction through learning and practice in different fields." },
  education: {
    school: education.school, degree: education.degree,
    major: "Major: " + education.major + " (" + education.majorShort + ")", specialization: "Specialization: " + education.specialization + " (" + education.specializationShort + ")",
    years: "Sep. 2023 — Expected Jun. 2027",
    facts: [{ label: "Cumulative average", value: education.average }, { label: "Academic standing", value: education.academicStanding }, { label: "GRE", value: String(education.gre) }],
    awardLabel: "Scholarship", award: education.scholarship + " (" + education.scholarshipYear + ")",
    journey: academicJourney, themes: ["Mathematics", "Data", "Risk Management"],
  },
  experience: [
    {
      company: "Shanghai Dahuan Robotics Technology Co., Ltd.", role: "AI Training & Data Assistant Intern · Embodied Intelligence R&D", period: "Mar. 2026 — Apr. 2026", focus: "Diagnosing inconsistent recognition after model transfer",
      story: [
        "When recognition on workpiece images became inconsistent after model transfer, I compared vision and segmentation models across 1,000+ multi-angle images with Python, OpenCV and YOLO. I inspected incorrect matches, adjusted parameters and processing logic, and checked revised outputs against the images. Coarse-to-fine localization then screened poses at approximately 30° intervals and mapped reference screw-hole coordinates to the workpiece.",
        "In a separate workstream, I independently assembled, calibrated and debugged a six-axis leader–follower SO-ARM101 arm and implemented LeRobot vision-assisted teleoperation. The 8,000+ teleoperation images formed a separate dataset for imitation-learning preparation; the workpiece images supported vision evaluation and localization.",
      ], tags: ["Model evaluation", "Diagnosis & validation", "Visual localization", "LeRobot"],
    },
    {
      company: "Ernst & Young Hua Ming LLP (Shenzhen)", role: "Audit Intern · Hong Kong IPO Engagement", period: "Jul. 2025 — Aug. 2025", focus: "Connecting transaction records with supporting evidence",
      story: [
        "On a Hong Kong IPO engagement, I cleaned and reconciled 3,000+ sales transaction records with Excel XLOOKUP/VLOOKUP and batch-processing tools. Matching contracts, invoices and supporting documents required consistency checks before preparing the audit sampling papers.",
        "Revenue-cycle testing put those checks into the full transaction chain. I traced contracts and orders through dispatch, logistics, delivery confirmation, invoicing and cash collection, organizing evidence for the team's revenue-recognition testing.",
      ], tags: ["Transaction verification", "Revenue cycle", "Excel"],
    },
    {
      company: "Guotai Haitong Securities Co., Ltd.", role: "Intern · Debt Capital Markets", period: "May 2025 — Jun. 2025", focus: "Restoring an existing market-data workflow",
      story: [
        "Daily market recaps relied on a Python workflow that needed to run reliably. I diagnosed environment and dependency issues, restored execution, made targeted changes to the existing scripts and validated their outputs for issuance, liquidity, government-bond yield and macro-market updates.",
        "Alongside that work, I used Wind, FICC and Excel to analyze issuance and trading data, calculate yields and spreads, and verify ChinaBond implied ratings, internal ratings and whitelist eligibility. I contributed to 100+ issuance and trading documents.",
      ], tags: ["Workflow recovery", "Output validation", "Fixed income"],
    },
    {
      company: "Shenzhen Haikun Investment Management Co., Ltd.", role: "Remote Industry Research Intern", period: "Feb. 2025 — Sep. 2025", focus: "Understanding AI education through company comparisons",
      story: [
        "For an independent AI and online-education report, I used Wind and Python to compare 10+ companies on revenue, profitability, R&D and selling expenses. Those comparisons supported analysis of business models, competitive positioning and industry trends.",
        "I also reviewed research reports for data accuracy, analytical logic and consistency, recommending revisions that kept the conclusions connected to their evidence.",
      ], tags: ["Independent research", "10+ company comparison", "Wind · Python"],
    },
    {
      company: "Hong Kong Tianlong Securities Co., Ltd.", role: "Fund Manager Assistant Intern", period: "Oct. 2024 — Jan. 2025", focus: "Deciding what a time-limited user should see first",
      story: [
        "In early design work for Hong Kong Asset Management Connect with the HKUST Financial Mathematics Society, I prioritized homepage metrics and strategy information, then shaped the UI, information hierarchy and user flows around them. Market and competitor research fed into team discussions and revisions to the prototype plans.",
        "The team completed a prototype and began mini-program testing; the full app had not formally launched during my internship. I also independently drafted the Peking University cooperation business plan and used R and Excel to assess costs, rental income and investment returns for a Hong Kong real-estate bidding proposal.",
      ], tags: ["Information hierarchy", "UI & user flows", "Team prototype & testing"],
    },
  ],
  skills: technicalToolkitByLocale.en,
  beyond: {
    chess: { title: "Chess & campus leadership", credential: "FIDE Candidate Master (CM)", role: "University of Waterloo Chess Club · Vice President, External Relations", period: "Sep. 2023 — May 2025", details: ["Organized a two-day match with the University of Toronto each semester, coordinating six-player teams from each university.", "Coordinated external relations and supported weekly activities, free play, internal tournaments and event logistics."] },
    music: { title: "Music", detail: "Piano · ABRSM Grade 8 / Music Theory Grade 5" },
  },
};
