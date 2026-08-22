import Link from "next/link";
import { personalSpaceZh } from "../content/personal-space";
import "./personal-chapters.css";
import { ScrollReveal } from "./ScrollReveal";
import { AmbientParticles } from "./AmbientParticles";
import "./personal-ambient.css";

function ChapterHeader() {
  const navigation = [{ label: "主页", href: "/" }, ...personalSpaceZh.navigation];
  return <header className="personal-chapter__header"><Link href="/" className="personal-chapter__mark" aria-label="返回个人空间">AJ</Link><nav>{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav><span>中文 / EN</span></header>;
}

function ChapterFooter() {
  return <footer className="personal-chapter__footer"><Link href="/">JOEY LUO PERSONAL SPACE</Link><span>2026</span></footer>;
}

export function CareerJourney() {
  const { career } = personalSpaceZh;
  return <main className="personal-chapter personal-chapter--career"><AmbientParticles variant="work" /><ChapterHeader /><section className="personal-chapter__intro"><p>{career.eyebrow}</p><h1>{career.title}</h1><span>{career.lead}</span></section><section className="career-journey__timeline" aria-label="职业经历时间线">{career.entries.map((entry, index) => <ScrollReveal key={`${entry.year}-${entry.company}`} delay={index * 70}><article><time>{entry.year}</time><div className="career-journey__point" aria-hidden="true" /><div><p className="career-journey__company">{entry.company}</p><h2>{entry.role}</h2>{entry.focus && <small>{entry.focus}</small>}<p className="career-journey__description">{entry.description}</p></div><div className={`career-journey__logo career-journey__logo--${index}`} aria-label={`${entry.company} 标识`}><strong>{entry.logo.brand}</strong><span>{entry.logo.subline}</span></div></article></ScrollReveal>)}</section><ScrollReveal><section className="career-journey__archive"><p>职业档案</p><h2>更完整地记录<br />学习、实践与创造。</h2><Link href="/career">{career.archiveLabel}</Link></section></ScrollReveal><ChapterFooter /></main>;
}

export function ProjectsShowcase() {
  const { projects } = personalSpaceZh;
  return <main className="personal-chapter personal-chapter--projects"><AmbientParticles variant="projects" /><ChapterHeader /><section className="personal-chapter__intro"><p>{projects.eyebrow}</p><h1>{projects.title}</h1><span>{projects.lead}</span></section><section className="projects-showcase">{projects.items.map((project, index) => <ScrollReveal key={project.number} delay={index * 70}><article><span>{project.number}</span><div><h2>{project.title}</h2>{project.subtitle && <p className="projects-showcase__subtitle">{project.subtitle}</p>}<p>{project.description}</p><div className="projects-showcase__flow">{["发现", "构建", "迭代"].map((step) => <i key={step}>{step}</i>)}</div></div><ul>{project.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul></article></ScrollReveal>)}</section><ChapterFooter /></main>;
}

export function LifeMemories() {
  const { life } = personalSpaceZh;
  return <main className="personal-chapter personal-chapter--life"><AmbientParticles variant="life" /><ChapterHeader /><section className="personal-chapter__intro"><p>{life.eyebrow}</p><h1>{life.title}</h1><span>{life.lead}</span></section><section className="memories-grid" aria-label="个人照片墙">{life.categories.map((category, index) => <ScrollReveal className={`memories-grid__tile memories-grid__tile--${index + 1}`} delay={index * 65} key={category}><article><span>{String(index + 1).padStart(2, "0")}</span><h2>{category}</h2><p>照片位置</p></article></ScrollReveal>)}</section><ChapterFooter /></main>;
}
