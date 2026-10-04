import type { Locale } from "./routes";

export type ProjectCopy = {
  title: string; subtitle: string; summary: string; status: string; context: string;
  workflow: string[];
  sections: {
    title: string; paragraphs?: string[]; items?: string[];
    visual?: "credit-matrices" | "credit-five-year";
  }[];
};
export type PortfolioProject = {
  slug: string; period: { zh: string; en: string }; technologies: string[];
  zh: ProjectCopy; en: ProjectCopy; repository?: string;
};

// Facts: latest bilingual recruiting resumes pp. 1–2, user clarifications,
// final STAT 334 report pp. 1–19, and this repository.
// The source PDFs and private repository are not public downloads.
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "zhiyue-ai", period: { zh: "2025.06 起", en: "Since June 2025" },
    technologies: ["Ollama", "Qwen3", "AI-assisted development"],
    zh: {
      title: "职跃 AI / Zhiyue AI", subtitle: "面向中文招聘市场的 AI 求职助手",
      summary: "从分散的岗位信息出发，把简历、求职偏好与职位要求连接起来，辅助筛选机会并理解能力差距。",
      status: "持续完善中", context: "个人独立产品项目 · AI 辅助开发",
      workflow: ["理解简历与偏好", "搜索并筛选岗位", "分析岗位匹配", "理解能力差距"],
      sections: [
        { title: "用户问题", paragraphs: ["岗位信息分散、筛选成本高，同一份个人经历常常需要反复整理。即使找到感兴趣的岗位，也未必容易判断自己的优势、缺口和下一步准备方向。职跃 AI 围绕这些求职环节组织产品流程。"] },
        { title: "产品实现", paragraphs: ["我自主规划并开发了简历解析、求职偏好理解、岗位搜索与个性化筛选，让个人背景和岗位信息可以在同一个流程中比较。", "通过 Ollama 与 Qwen3 对照用户经历、偏好与职位描述，输出匹配评估、核心优势、能力差距及提升建议。开发过程中使用 AI 辅助工具，并以实际产品输出检查实现。"] },
        { title: "一次范围取舍", paragraphs: ["最初考虑自动搜索网页并直接跳转岗位页面。面对实现复杂度与稳定性问题，我缩小这部分范围，优先展示相关 JD 和岗位信息，保留用户的查看与选择环节。"] },
        { title: "从输出发现问题", paragraphs: ["不同岗位的匹配评分一度过于相似。检查实际输出后，我排查匹配逻辑、做针对性调整，再验证修改后的结果。这次迭代把注意力从“流程能运行”推进到“输出是否能帮助判断”。"] },
        { title: "当前阶段", paragraphs: ["这是仍在持续完善的个人产品。页面展示我已经完成的功能和真实迭代，后续继续围绕求职流程与输出质量改进。"] },
      ],
    },
    en: {
      title: "Zhiyue AI", subtitle: "An AI job-search assistant for the Chinese job market",
      summary: "Connecting scattered job information with resumes and career preferences to support filtering, fit evaluation, and capability-gap analysis.",
      status: "In development", context: "Independent product project · AI-assisted development",
      workflow: ["Understand the profile", "Find and filter roles", "Evaluate job fit", "Identify capability gaps"],
      sections: [
        { title: "The user problem", paragraphs: ["Job information is scattered, screening takes time, and applicants repeatedly process the same background information. Finding a relevant role also leaves another question: which strengths fit its requirements, and what still needs preparation?"] },
        { title: "What I built", paragraphs: ["I designed and built a connected workflow for resume parsing, preference understanding, job search, and personalized filtering.", "With Ollama and Qwen3, the assistant compares a person's experience and preferences with job descriptions to produce fit assessments, strengths, capability gaps, and improvement suggestions. I used AI-assisted development and checked the resulting product outputs."] },
        { title: "A scope decision", paragraphs: ["I initially considered automated web searches that opened job pages directly. Implementation complexity and reliability led me to narrow that scope: present relevant job descriptions and information for users to review and select."] },
        { title: "An output-led iteration", paragraphs: ["Matching scores for different roles were once nearly identical. I noticed the pattern in actual outputs, investigated the matching logic, made targeted adjustments, and validated the revised results. The question shifted from whether the workflow ran to whether its output helped distinguish opportunities."] },
        { title: "Current stage", paragraphs: ["This remains an evolving personal product. The case study reflects implemented work and actual iterations, with further improvements focused on the job-search workflow and output quality."] },
      ],
    },
  },
  {
    slug: "robotics-vision", period: { zh: "2026.03 — 2026.04", en: "March — April 2026" },
    technologies: ["Python", "OpenCV", "YOLO", "LeRobot", "SO-ARM101"],
    zh: {
      title: "机器人视觉定位", subtitle: "计算机视觉与具身智能实习实践",
      summary: "从模型迁移后的不稳定匹配入手，参与工件视觉定位的诊断与迭代，并完成另一条机械臂遥操作数据准备工作。",
      status: "实习项目", context: "大寰机器人 · 具身智能研发部",
      workflow: ["检查错误匹配", "评估并调整模型", "验证定位输出", "准备遥操作数据"],
      sections: [
        { title: "实际挑战", paragraphs: ["模型迁移后，工件识别与匹配效果不稳定。我的工作从检查错误匹配开始，把模型选择、参数和处理逻辑放回实际图像中验证，而不只检查流程能否运行。"] },
        { title: "诊断与迭代", paragraphs: ["使用 Python、OpenCV 与 YOLO，在 1,000+ 张多角度工件图像上进行视觉与分割模型筛选、评估。定位不正确的匹配后，调整参数及处理逻辑，再通过图片对照验证修改后的输出。"] },
        { title: "定位方法", paragraphs: ["优化粗筛—精匹配流程，先按约 30° 的姿态间隔筛选候选模板，再根据匹配评分确定姿态，将参考图中的螺丝孔坐标映射到实际工件位置。"] },
        { title: "另一条数据工作线", paragraphs: ["独立搭建、标定与调试 SO-ARM101 六轴主从机械臂，基于 LeRobot 实现视觉辅助遥操作，采集 8,000+ 张遥操作图像用于模仿学习数据准备。", "1,000+ 张工件图像与 8,000+ 张遥操作图像是两组不同的数据。我的贡献覆盖视觉流程与遥操作数据准备，整体机器人研发由团队共同推进。"] },
      ],
    },
    en: {
      title: "Robot Vision", subtitle: "Visual localization and robotics data workflows",
      summary: "Diagnosing unstable workpiece matching after model transfer, refining visual localization, and preparing teleoperation data in a separate robotics workstream.",
      status: "Internship project", context: "Dahuan Robotics · Embodied Intelligence R&D",
      workflow: ["Inspect incorrect matches", "Evaluate and adjust models", "Validate localization outputs", "Prepare teleoperation data"],
      sections: [
        { title: "The challenge", paragraphs: ["Recognition and matching were unstable after model transfer. I worked from the incorrect matches back to model selection, parameters, and processing logic, using actual images to check each revision."] },
        { title: "Diagnosis and iteration", paragraphs: ["Using Python, OpenCV, and YOLO, I selected and evaluated vision and segmentation models across 1,000+ multi-angle workpiece images. I diagnosed incorrect matches, adjusted parameters and processing logic, and compared images to validate the revised outputs."] },
        { title: "Localization approach", paragraphs: ["I refined coarse-to-fine matching to filter candidate templates at approximately 30° pose intervals, determine a pose from matching scores, and map reference screw-hole coordinates to the workpiece position."] },
        { title: "A separate data workstream", paragraphs: ["I independently assembled, calibrated, and debugged a SO-ARM101 six-axis leader–follower arm, implemented LeRobot vision-assisted teleoperation, and collected 8,000+ teleoperation images for imitation-learning data preparation.", "The 1,000+ workpiece images and 8,000+ teleoperation images are separate datasets. My contribution covered vision workflows and teleoperation data preparation within a broader team robotics project."] },
      ],
    },
  },
  {
    slug: "credit-transition", period: { zh: "2025.09 — 2025.12", en: "September — December 2025" },
    technologies: ["Markov Chain", "Excel MMULT"],
    zh: {
      title: "信用评级迁移模型", subtitle: "汽车行业债券评级 · STAT 334",
      summary: "带领四人课程小组，使用已有 S&P 年度转移矩阵研究评级迁移，比较五年汽车行业案例与模型中的长期吸收行为。",
      status: "课程团队项目", context: "四人小组 · 组长",
      workflow: ["组织评级案例", "使用给定年度矩阵", "计算多期迁移", "解释结果与边界"],
      sections: [
        { title: "研究问题", paragraphs: ["汽车行业债券的信用评级如何随时间变化？小组使用离散时间马尔可夫链，分析短期评级稳定性、向下迁移与违约概率随时间的变化。"] },
        { title: "输入与方法", visual: "credit-matrices", paragraphs: ["输入是给定的 S&P 一年期转移矩阵，以信用评级为状态、以一年为转移间隔。报告展示完整评级矩阵，并归并为 Investment Grade（IG）、High Yield（HY）与 Default 三状态模型。", "通过 Excel MMULT 计算矩阵幂 Pⁿ，比较不同期限的转移行为；Default 设置为吸收状态。十家车企的评级历史用于案例组织，不用于重新估计这份矩阵。"] },
        { title: "我的角色与协作", paragraphs: ["作为四人小组的组长（Team Leader），我统筹任务分工与进度，整理十家汽车公司的评级历史，并承担转移矩阵计算、图表、报告写作与展示工作。", "项目与 Peixuan Han、Matthew Huh、Scott Wang 共同完成，矩阵分析和最终材料也包含团队协作。"] },
        { title: "五年汽车行业案例", visual: "credit-five-year", paragraphs: ["报告以五年到期债券为场景，比较 Mercedes-Benz（A）、Nissan Motor（BB）与 K&N Parent（CCC+）的评级迁移。不同初始评级对应不同的迁移路径；归并模型则帮助比较投资级与高收益级的总体变化。", "下表是报告中的三状态五年转移结果。它描述给定模型下的状态概率，不是对这些发行人的独立预测或实证估计。"] },
        { title: "结果与解释", paragraphs: ["三状态模型中，两年后 IG 保持在 IG 的概率为 85.4393%，HY 保持在 HY 的概率为 88.6064%；转入 Default 的概率分别为 0.2156% 与 5.4320%。", "报告中的 P¹⁰²⁴ 与 P²⁰⁴⁸ 数值趋于 [0, 0, 1]。在给定转移结构下，非 Default 状态为暂态，Default 为吸收、回返状态。"] },
        { title: "假设与边界", paragraphs: ["分析采用 Markov 假设，并在多期计算中保持年度转移结构不变。Default 的吸收设定不包含违约后的恢复。", "长期吸收是模型结构的结论，不能据此断言现实中的每家汽车公司最终都会违约；报告未进行预测准确率验证或回测。"] },
      ],
    },
    en: {
      title: "Credit Rating Migration", subtitle: "Automotive bond ratings · STAT 334",
      summary: "Led a four-person course team using an existing S&P annual transition matrix to study five-year automotive cases and long-run absorption under a Markov model.",
      status: "Team course project", context: "Four-person team · Team Leader",
      workflow: ["Organize rating cases", "Use the supplied matrix", "Compute multi-period migration", "Interpret results and limits"],
      sections: [
        { title: "The question", paragraphs: ["How do automotive bond ratings change over time? Our group used a discrete-time Markov chain to examine short-term stability, downward migration, and changing default probabilities across time horizons."] },
        { title: "Input and method", visual: "credit-matrices", paragraphs: ["The input was a supplied S&P one-year transition matrix, with credit ratings as states and annual transitions. The report presents the detailed rating matrix and a three-state model: Investment Grade (IG), High Yield (HY), and Default.", "We used Excel MMULT to compute matrix powers Pⁿ across different horizons, with Default defined as an absorbing state. Rating histories for ten automotive firms served as case material, not as data for re-estimating the supplied matrix."] },
        { title: "My role and collaboration", paragraphs: ["As Team Leader, I allocated tasks, coordinated progress, organized the company rating histories, and worked on transition calculations, charts, report writing, and the presentation.", "The four-person project was completed with Peixuan Han, Matthew Huh, and Scott Wang. The analysis and final materials included shared team work."] },
        { title: "Five-year automotive cases", visual: "credit-five-year", paragraphs: ["The report considers bonds maturing in five years and compares Mercedes-Benz (A), Nissan Motor (BB), and K&N Parent (CCC+). Their initial ratings lead to different migration paths; the grouped model also provides an Investment Grade versus High Yield comparison.", "The table below reproduces the report's three-state five-year results. These are probabilities under the supplied model, rather than independently estimated forecasts for those issuers."] },
        { title: "Results and interpretation", paragraphs: ["In the three-state model, the two-year probabilities of remaining in IG and HY are 85.4393% and 88.6064%, respectively. Their corresponding probabilities of entering Default are 0.2156% and 5.4320%.", "The report's P¹⁰²⁴ and P²⁰⁴⁸ converge numerically toward [0, 0, 1]. Under this transition structure, non-Default states are transient; Default is absorbing and recurrent."] },
        { title: "Assumptions and limits", paragraphs: ["The analysis assumes the Markov property and retains the annual transition structure across time horizons. The absorbing Default state does not model recovery after default.", "Long-run absorption follows from the model structure. It does not establish that every real automotive firm will eventually default, and the report does not include predictive-accuracy testing or backtesting."] },
      ],
    },
  },
  {
    slug: "personal-space", period: { zh: "初次构建 2026.07 — 2026.08", en: "Initial build July — August 2026" },
    technologies: ["React", "TypeScript", "Vinext", "Vite", "CSS", "Codex"],
    zh: {
      title: "Personal Space", subtitle: "中英双语交互个人 Portfolio",
      summary: "用电影感入口和四个章节连接探索、职业、项目与生活，把个人网站做成可以持续积累的空间。",
      status: "持续维护与迭代", context: "独立网页项目 · AI 辅助开发",
      workflow: ["组织双语内容", "设计空间入口", "实现页面与交互", "验证并持续迭代"],
      sections: [
        { title: "内容与结构", paragraphs: ["网站需要让中英文访客理解我的背景，也能顺着探索、职业、项目与生活找到各自感兴趣的内容。四个核心章节承担不同的信息任务，事实基础共享，表达分别适应中文与英文。"] },
        { title: "设计方向", paragraphs: ["我自主完成信息架构、页面设计与开发，通过 AI 辅助开发推进实现。单屏视频首页、门的意象与互动人物共同建立空间入口，详细经历和项目方法则放在章节与 case study 中。"] },
        { title: "实现与发布", paragraphs: ["页面使用 React、TypeScript 和 Next.js App Router 风格的路由接口组织；当前运行时是 Vinext，使用 Vite 构建。背景、视频与轻量交互由 CSS 和浏览器原生能力实现。", "建立 GitHub–Vercel 持续部署流程，让修改能够经过构建与检查后发布。"] },
        { title: "设计取舍与迭代", paragraphs: ["首页保持单屏 cinematic 入口，避免信息挤占门的意象；项目详情负责解释问题、方法与证据。交互同时考虑键盘、移动端和 reduced-motion，让内容在不同使用方式下仍然可达、可读。", "初次构建在 2026 年 7–8 月完成。此后继续维护双语内容、导航、交互与呈现，根据实际检查持续调整。"] },
      ],
    },
    en: {
      title: "Personal Space", subtitle: "Bilingual Interactive Personal Portfolio",
      summary: "A cinematic doorway into exploration, career experience, projects, and life—designed as a personal space that can keep growing.",
      status: "Ongoing maintenance and iteration", context: "Independent web project · AI-assisted development",
      workflow: ["Structure bilingual content", "Design the entrance", "Build pages and interactions", "Validate and iterate"],
      sections: [
        { title: "Content and architecture", paragraphs: ["The site gives Chinese- and English-speaking visitors a connected view of my background. Explore, Career, Projects, and Life serve distinct purposes, with shared facts and language-specific writing."] },
        { title: "Design direction", paragraphs: ["I designed the information architecture and pages, then developed the site with AI assistance. The single-screen video entrance, doorway, and interactive character establish its identity; individual chapters and case studies carry the detailed experience and project evidence."] },
        { title: "Implementation and publishing", paragraphs: ["The pages use React and TypeScript with Next.js App Router-style APIs. The current runtime is Vinext, with Vite handling the build. CSS, web video, and native browser features support the background and lightweight interactions.", "GitHub–Vercel continuous deployment connects changes to publishing after build and validation."] },
        { title: "Choices and iteration", paragraphs: ["The homepage stays a one-screen cinematic entrance. Project pages explain problems, methods, and evidence without crowding that doorway. Keyboard access, mobile layouts, and reduced-motion behavior make the same content available across different ways of visiting.", "The initial build ran from July to August 2026. Maintenance continues through updates to bilingual content, navigation, interactions, and presentation."] },
      ],
    },
  },
];

export function getProject(slug: string) { return portfolioProjects.find((project) => project.slug === slug); }
export function projectsForLocale(locale: Locale) {
  return portfolioProjects.map((project, index) => ({ ...project[locale], slug: project.slug, number: String(index + 1).padStart(2, "0"), stack: project.technologies, period: project.period[locale] }));
}

// STAT 334 final report pp. 6, 14 and 17. Shared numerical source for both languages.
// Five-year entries preserve the precision displayed in the supplied report.
export const creditMatrices = {
  states: ["IG", "HY", "Default"],
  annual: [[0.923, 0.077, 0], [0.032, 0.940, 0.028], [0, 0, 1]],
  twoYear: [[0.854393, 0.143451, 0.002156], [0.059616, 0.886064, 0.054320], [0, 0, 1]],
  fiveYear: [[0.68966129, 0.29155761, 0.0187811], [0.1211668, 0.75403115, 0.12480205], [0, 0, 1]],
} as const;
