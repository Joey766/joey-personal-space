"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { CareerIntro } from "./CareerIntro";
import "./career.css";

type CareerContent = {
  hero: { title: string; theme: string; intro: string };
  education: {
    school: string;
    degree: string;
    degreeEnglish: string;
    major: string;
    specialization: string;
    years: string;
    facts: string[];
  };
  experience: Array<{ company: string; role: string; period: string; bullets: string[] }>;
  projects: Array<{ title: string; subtitle?: string; description: string; tools: string }>;
  skills: Array<{ category: string; items: string[] }>;
  beyond: { chess: { title: string; credential: string; achievement: string }; activities: Array<{ title: string; detail: string }> };
};

const experienceLogos = [
  "https://www.google.com/s2/favicons?domain=dh-robotics.com&sz=128",
  "https://www.google.com/s2/favicons?domain=ey.com&sz=128",
  "https://www.google.com/s2/favicons?domain=gtht.com&sz=128",
  "/logos/haikun.png",
  "/logos/tianlong.png",
];

const navigation = [
  { label: "探索", href: "/explore" },
  { label: "构建", href: "/work" },
  { label: "思考", href: "/thinking" },
  { label: "生活", href: "/life" },
];

export function CareerArchive({ content }: { content: CareerContent }) {
  const [introComplete, setIntroComplete] = useState(false);
  const completeIntro = useCallback(() => setIntroComplete(true), []);

  return (
    <main className={`career-neo ${introComplete ? "career-neo--ready" : "career-neo--intro-active"}`}>
      {!introComplete && <CareerIntro onComplete={completeIntro} />}
      <header className="career-neo__header">
        <Link href="/" className="career-neo__monogram" aria-label="返回个人空间">AJ</Link>
        <nav aria-label="主导航">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="career-neo__header-actions">
          <Link href="/">返回个人空间</Link>
          <span aria-label="语言：中文">中文 / EN</span>
        </div>
      </header>

      <section className="career-neo__section career-neo__education" id="education" aria-labelledby="education-title">
        <div className="career-neo__section-heading"><span>01</span><h2 id="education-title">教育背景</h2></div>
        <article className="career-neo__school-card">
          <div className="career-neo__school-logo" aria-label="University of Waterloo 标识"><img src="https://www.google.com/s2/favicons?domain=uwaterloo.ca&sz=128" alt="University of Waterloo" /></div>
          <div className="career-neo__school-content">
            <p className="career-neo__school-name">{content.education.school}</p>
            <h3>{content.education.degree}</h3>
            <p className="career-neo__degree-english">{content.education.degreeEnglish}</p>
            <p>{content.education.major}</p>
            <p>{content.education.specialization}</p>
          </div>
          <div className="career-neo__school-meta">
            <time>{content.education.years}</time>
            <div>{content.education.facts.map((fact) => <span key={fact}>{fact}</span>)}</div>
          </div>
        </article>
      </section>

      <section className="career-neo__section career-neo__experience" id="experience" aria-labelledby="experience-title">
        <div className="career-neo__section-heading"><span>02</span><h2 id="experience-title">实践经历</h2></div>
        <div className="career-neo__timeline">
          {content.experience.map((entry, index) => (
            <article className="career-neo__experience-item" key={entry.company}>
              <time>{entry.period}</time>
              <div className="career-neo__timeline-line" aria-hidden="true" />
              <div className="career-neo__experience-copy">
                <p className="career-neo__company">{entry.company}</p>
                <h3>{entry.role}</h3>
                <ul>{entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </div>
              <div className="career-neo__experience-logo">
                <img src={experienceLogos[index]} alt={`${entry.company} 标识`} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="career-neo__section career-neo__projects" id="projects" aria-labelledby="projects-title">
        <div className="career-neo__section-heading"><span>03</span><h2 id="projects-title">项目与构建</h2></div>
        <div className="career-neo__project-grid">
          {content.projects.map((project, index) => (
            <article key={project.title}>
              <span>0{index + 1}</span>
              <h3>{project.title}</h3>
              {project.subtitle && <p className="career-neo__project-subtitle">{project.subtitle}</p>}
              <p>{project.description}</p>
              <code>{project.tools}</code>
            </article>
          ))}
        </div>
      </section>

      <section className="career-neo__section career-neo__stack" id="stack" aria-labelledby="stack-title">
        <div className="career-neo__section-heading"><span>04</span><h2 id="stack-title">技术能力</h2></div>
        <div className="career-neo__stack-grid">
          {content.skills.map((group) => (
            <article key={group.category}>
              <h3>{group.category}</h3>
              <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="career-neo__section career-neo__beyond" id="beyond" aria-labelledby="beyond-title">
        <div className="career-neo__section-heading"><span>05</span><h2 id="beyond-title">校园与生活</h2></div>
        <div className="career-neo__beyond-grid">
          <article className="career-neo__chess">
            <span className="career-neo__chess-mark">♞</span>
            <h3>{content.beyond.chess.title}</h3>
            <p>{content.beyond.chess.credential}</p>
            <small>{content.beyond.chess.achievement}</small>
          </article>
          {content.beyond.activities.map((item, index) => (
            <article key={item.title} className={`career-neo__activity career-neo__activity--${index}`}>
              <span aria-hidden="true">{index === 0 ? "◌" : "♫"}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="career-neo__footer"><Link href="/">JOEY LUO PERSONAL SPACE</Link><span>2026</span></footer>
    </main>
  );
}
