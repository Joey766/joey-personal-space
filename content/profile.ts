import type { Locale } from "./routes";

// Shared facts from the latest Chinese and English recruiting resumes.
// Grades and awards belong in Education; the introductory story stays concise.
export const education = {
  school: "University of Waterloo",
  degree: "Bachelor of Mathematics, Honours",
  major: "Financial Analysis and Risk Management",
  majorShort: "FARM",
  specialization: "Professional Risk Management",
  specializationShort: "PRM",
  start: "2023.09",
  expectedGraduation: "2027.06",
  average: "82.17/100",
  academicStanding: "Distinction",
  gre: 329,
  scholarship: "President’s Scholarship of Distinction",
  scholarshipYear: 2024,
} as const;

export const educationStoryByLocale: Record<Locale, string> = {
  zh: "我目前就读于滑铁卢大学，攻读数学荣誉学士，主修金融分析与风险管理（Financial Analysis and Risk Management，FARM），专业方向为专业风险管理（Professional Risk Management，PRM），预计于 2027 年 6 月毕业。",
  en: "I am pursuing a Bachelor of Mathematics, Honours at the University of Waterloo, majoring in Financial Analysis and Risk Management (FARM) with a specialization in Professional Risk Management (PRM). I expect to graduate in June 2027.",
};

const programming = ["Python", "Pandas", "R", "SQL", "Excel", "SAS", "JupyterLab"];
const financial = ["Wind", "FICC"];
const vision = ["OpenCV", "YOLO", "Ollama", "Qwen3", "LeRobot"];
const web = ["Next.js", "React", "TypeScript", "Git", "GitHub", "Vercel", "Codex"];

export const technicalToolkitByLocale: Record<Locale, Array<{ category: string; items: string[]; note?: string }>> = {
  zh: [
    { category: "编程与数据", items: programming },
    { category: "金融与数据工具", items: financial },
    { category: "AI 与计算机视觉", items: vision },
    { category: "网页与开发", items: web, note: "Codex 用于 AI 辅助开发。" },
  ],
  en: [
    { category: "Programming & data", items: programming },
    { category: "Financial & data tools", items: financial },
    { category: "AI & computer vision", items: vision },
    { category: "Web & development", items: web, note: "Codex supports my AI-assisted development workflow." },
  ],
};
