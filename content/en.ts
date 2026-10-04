import { educationStoryByLocale } from "./profile";

export const en = {
  language: "中文 / EN",
  nav: [{ label: "Explore", href: "#about" }, { label: "Career", href: "#career" }, { label: "Projects", href: "#projects" }, { label: "Life", href: "#life" }],
  welcome: {
    eyebrow: "JOEY LUO · PERSONAL SPACE",
    title: ["Exploring Mathematics,", "Data & Artificial Intelligence"],
    line: ["Mathematics student at the University of Waterloo", "Financial Analysis and Risk Management"],
    enter: "Continue exploring",
  },
  bottom: [{ number: "01", label: "EXPLORE", href: "#about" }, { number: "02", label: "CAREER", href: "#career" }, { number: "03", label: "PROJECTS", href: "#projects" }, { number: "04", label: "LIFE", href: "#life" }],
  about: {
    number: "01", title: "Explore",
    lead: "Connecting mathematical thinking with data, AI and products.",
    copy: [educationStoryByLocale.en, "Through finance internships, AI projects and robotic-vision work, I am exploring how mathematical thinking and data analysis can help with concrete problems."],
    cards: [
      { title: "Quantitative thinking", copy: "Using mathematics, statistics and risk models to understand structure and uncertainty.", detail: "I led a four-person STAT 334 team using a supplied S&P matrix to compare credit migration across time horizons and interpret long-run behavior under the model assumptions.", tags: ["Mathematics & statistics", "Risk management", "Markov chains"] },
      { title: "Artificial intelligence", copy: "Exploring language models and computer vision through specific tasks.", detail: "Near-identical job scores in Zhiyue AI and unstable model transfer in robot vision both required me to inspect actual outputs, diagnose the issue, adjust the logic, and validate again.", tags: ["Ollama · Qwen3", "OpenCV · YOLO", "Python"] },
      { title: "Product creation", copy: "Connecting needs with technology and building usable experiences step by step.", detail: "For Asset Management Connect, limited user attention shaped the order of homepage metrics and strategy content. For Zhiyue AI, implementation complexity and stability led me to prioritize relevant job descriptions for user review.", tags: ["Information priorities", "AI products", "Product trade-offs"] },
    ],
    timelineTitle: "A path of exploration",
    timelineLead: "Connecting study, practical experience and personal projects.",
    timeline: [
      { year: "2023", copy: "Joined the University of Waterloo Mathematics program." },
      { year: "2024", copy: "Started working with finance and product flows at Hong Kong Tianlong Securities.", items: ["Investment analysis", "Asset Management Connect"] },
      { year: "2025", copy: "Continued finance and industry-research work, began Zhiyue AI, and led a four-person STAT 334 course team.", items: ["Finance & research", "Zhiyue AI", "Credit-rating migration"] },
      { year: "2026", copy: "Worked on visual localization at Dahuan Robotics and built this bilingual Personal Space.", items: ["Robot vision", "Personal Space"] },
    ],
  },
  // Preserved for a future Thoughts chapter; not exposed in public navigation.
  notes: {
    number: "03", title: "Think", lead: "Ideas about methodology and collaboration.",
    copy: ["Data-driven thinking: grounding judgment in evidence.", "AI-native workflows, product thinking, and human–AI collaboration."],
  },
};
