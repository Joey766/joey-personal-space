import { zh } from "./zh";

export const en = {
  language: "中文 / EN",
  nav: [{ label: "Explore", href: "#about" }, { label: "Build", href: "#projects" }, { label: "Think", href: "#notes" }, { label: "Life", href: "#life" }],
  welcome: { eyebrow: "JOEY LUO · PERSONAL SPACE", title: ["Welcome to", "My Personal Space"], line: "Explore · Build · Think · Life", enter: "Enter", projects: "Explore builds" },
  bottom: [{ number: "01", label: "EXPLORE", href: "#about" }, { number: "02", label: "BUILD", href: "#projects" }, { number: "03", label: "THINK", href: "#notes" }, { number: "04", label: "LIFE", href: "#life" }],
  about: { number: "01", title: "Explore", lead: "Hello, I’m Joey Luo.", copy: ["I am a University of Waterloo Mathematics student, majoring in Financial Analysis and Risk Management (FARM) with a specialization in Professional Risk Management (PRM).", "I explore AI, data, and product development—using mathematics to deconstruct problems and turn ideas into reality."], facts: ["University of Waterloo\nBachelor of Mathematics, Honours", "FARM · PRM\nAI · Data · Product Development"] },
  projects: { number: "02", title: "Projects & Experiments", lead: "A quick overview of things I have built.", items: [{ title: "Zhiyue AI", copy: "AI job-search assistant / AI career intelligence platform", tags: "AI Product / LLM / Qwen3 / Ollama / Streamlit" }, { title: "AI Robot Visual Localization System", copy: "Embodied AI robotics project", tags: "Python / OpenCV / YOLO / LeRobot" }, { title: "Joey Luo Personal Space", copy: "AI-native personal website", tags: "Vibe Coding / Product Design / Next.js / React / Three.js" }, { title: "Credit Rating Transition Model", copy: "Quantitative risk modelling project", tags: "Python / Markov Chain / Credit Risk" }] },
  notes: { number: "03", title: "Think", lead: "Ideas about methodology and collaboration.", copy: ["Data-driven thinking: grounding judgment in evidence.", "AI-native workflows, product thinking, and human–AI collaboration."] },
  life: { number: "04", title: "Life", lead: "A few things beyond technology that keep me curious and grounded.", chess: { title: "Chess", meta: "FIDE Candidate Master (CM)", copy: "Chess taught me to enjoy the tension between long thought and short decisions." }, interests: ["Football", "Basketball", "Piano"], gallery: ["Chess photo", "Football photo", "Personal photo", "Travel photo"] },
  career: { number: "05", title: "Career", lead: "From finance, to data, to AI and product.", link: "View full career profile" },
  contact: { number: "06", title: "Contact", copy: "If you would like to talk about projects, AI, product, or finance, I would love to hear from you.", links: ["Email", "GitHub", "LinkedIn"] }
};

// The English experience keeps the same information architecture while its editorial translation is refined.
Object.assign(en, {
  about: { ...en.about, cards: zh.about.cards, timeline: zh.about.timeline },
  projects: { ...zh.projects },
  notes: { ...zh.notes },
  life: { ...zh.life },
  projectBack: "Back to builds",
  projectHome: "Personal space",
});

export const careerEn = {
  language: "中文 / EN", back: "Back to personal space", backToTop: "Back to top", indexLabel: "Career archive index",
  hero: { eyebrow: "CAREER ARCHIVE / 2026", school: "University of Waterloo", direction: "Mathematics · AI · Product · Quantitative Thinking", intro: "A complete record of learning, work, projects, and things I have built." },
  index: [{ label: "Education", href: "#education" }, { label: "Experience", href: "#experience" }, { label: "Projects", href: "#projects" }, { label: "Technical Stack", href: "#skills" }, { label: "Beyond", href: "#campus" }],
  education: { number: "01 / EDUCATION", title: "Education", year: "2023—2027", school: "University of Waterloo", degree: "Bachelor of Mathematics, Honours", major: "Major: Financial Analysis and Risk Management (FARM) · Specialization: Professional Risk Management (PRM)", facts: ["Academic Standing: Distinction", "GRE 329", "Quantitative 170", "Verbal 159"], courses: "", honours: [] },
  experience: { number: "02 / EXPERIENCE", title: "Experience", mediaLabel: "Space reserved for future work records", items: [
    { company: "Shanghai Dahuan Robotics Technology Co., Ltd.", role: "AI Training & Data Assistant Intern", department: "Embodied Intelligence R&D", date: "2026.03 — 2026.04", tag: "AI / ROBOTICS", mediaLabel: "ROBOTICS", details: ["Used Codex, Python, OpenCV, and YOLO instance segmentation to process thousands of multi-angle workpiece images.", "Built a coarse-to-fine visual localization workflow and worked on SO-ARM101 calibration and LeRobot demonstration data collection."] },
    { company: "Ernst & Young Hua Ming LLP", role: "Audit Intern · Hong Kong IPO", department: "", date: "2025.07 — 2025.08", tag: "AUDIT / IPO", mediaLabel: "IPO", details: ["Cleaned and verified sales ledgers, contracts, invoices, and vouchers in Excel.", "Participated in revenue-cycle walk-through testing for a Hong Kong IPO."] },
    { company: "Guotai Haitong Securities Co., Ltd.", role: "Intern · Debt Capital Markets", department: "", date: "2025.05 — 2025.06", tag: "FIXED INCOME", mediaLabel: "BONDS", details: ["Used Wind, FICC, and Excel for bond issuance, yield, spread, and rating checks across 100+ materials.", "Built Python workflows for daily data aggregation and market review."] },
    { company: "Shenzhen Haikun Investment Management Co., Ltd.", role: "Remote Industry Research Intern", department: "Industry Research", date: "2025.02 — 2025.09", tag: "RESEARCH", mediaLabel: "RESEARCH", details: ["Wrote an AI online-education industry report using Wind data and Python analysis.", "Joined the review group for data validation, logic checks, and revision recommendations."] },
    { company: "Hong Kong Tianlong Securities Co., Ltd.", role: "Fund Manager Assistant", department: "", date: "2024.10 — 2025.01", tag: "FINANCE / PRODUCT", mediaLabel: "PRODUCT", details: ["Contributed to 0-to-1 product design for the Hong Kong Asset Management Connect app.", "Prepared a business plan and used R and Excel for financial modelling and return analysis."] }
  ] },
  projects: { number: "03 / PROJECTS", title: "Projects & Builds", view: "", items: [{ title: "Zhiyue AI", subtitle: "AI Job Search Assistant", copy: "Built an AI-powered job search assistant integrating resume parsing, preference understanding, job matching, and skill-gap analysis.", tools: "Ollama · Qwen3 · Streamlit · AI Product Design" }, { title: "AI Robot Vision Localization System", subtitle: "Computer Vision & Robotics", copy: "Built a computer-vision workflow for robot perception, covering image processing, object detection, and localization.", tools: "Python · OpenCV · YOLO · LeRobot" }, { title: "Bond Ratings in the Auto Industry", subtitle: "Markov Chain Credit Rating Model", copy: "Built a Markov Chain credit-rating transition model to analyze automotive-industry rating dynamics.", tools: "Python · Markov Chain · Credit Risk Modeling" }] },
  skills: { number: "03 / TECHNICAL STACK", title: "Technical Stack", groups: [{ title: "Programming & Data", items: ["Python", "Pandas", "R", "SQL", "Excel / VBA", "Wind", "FICC"] }, { title: "AI & Robotics", items: ["Codex", "OpenCV", "YOLO", "LeRobot"] }, { title: "Quantitative Modeling", items: ["Risk Management", "Credit Risk", "Markov Models"] }, { title: "Product Development", items: ["Product Design", "User Flow", "AI-assisted Development", "Vibe Coding"] }] },
  campus: { number: "05 / CAMPUS & MORE", title: "Campus & More", club: { title: "University of Waterloo Chess Club", role: "Vice President, External Relations", details: ["Organized an inter-university match with the University of Toronto Chess Club once per term.", "Contributed to weekly events, free play, and internal tournaments."] }, notes: [{ title: "Chess", copy: "FIDE Candidate Master (CM); Asian age-group runner-up." }, { title: "Piano", copy: "ABRSM Grade 8; Music Theory Grade 5." }, { title: "Sport", copy: "Football, basketball, and table tennis." }] },
};
