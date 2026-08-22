import Link from "next/link";
import { personalSpaceZh } from "../content/personal-space";
import "./personal-chapters.css";

function ChapterHeader() {
  return <header className="personal-chapter__header"><Link href="/" className="personal-chapter__mark" aria-label="返回个人空间">AJ</Link><nav>{personalSpaceZh.navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav><span>中文 / EN</span></header>;
}

function ChapterFooter() {
  return <footer className="personal-chapter__footer"><Link href="/">JOEY LUO PERSONAL SPACE</Link><span>2026</span></footer>;
}

export function CareerJourney() {
  const { career } = personalSpaceZh;
  return <main className="personal-chapter personal-chapter--career"><ChapterHeader /><section className="personal-chapter__intro"><p>{career.eyebrow}</p><h1>{career.title}</h1><span>{career.lead}</span></section><section className="career-journey__timeline" aria-label="职业经历时间线">{career.entries.map((entry) => <article key={`${entry.year}-${entry.company}`}><time>{entry.year}</time><div className="career-journey__point" aria-hidden="true" /><div><p className="career-journey__company">{entry.company}</p><h2>{entry.role}</h2>{entry.focus && <small>{entry.focus}</small>}<p className="career-journey__description">{entry.description}</p></div></article>)}</section><section className="career-journey__archive"><p>职业档案</p><h2>更完整地记录<br />学习、实践与创造。</h2><Link href="/career">{career.archiveLabel}</Link></section><ChapterFooter /></main>;
}

export function ProjectsShowcase() {
  const { projects } = personalSpaceZh;
  return <main className="personal-chapter personal-chapter--projects"><ChapterHeader /><section className="personal-chapter__intro"><p>{projects.eyebrow}</p><h1>{projects.title}</h1><span>{projects.lead}</span></section><section className="projects-showcase">{projects.items.map((project) => <article key={project.number}><span>{project.number}</span><div><h2>{project.title}</h2>{project.subtitle && <p className="projects-showcase__subtitle">{project.subtitle}</p>}<p>{project.description}</p></div><ul>{project.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul></article>)}</section><ChapterFooter /></main>;
}

export function LifeMemories() {
  const { life } = personalSpaceZh;
  return <main className="personal-chapter personal-chapter--life"><ChapterHeader /><section className="personal-chapter__intro"><p>{life.eyebrow}</p><h1>{life.title}</h1><span>{life.lead}</span></section><section className="memories-grid" aria-label="个人照片墙">{life.categories.map((category, index) => <article className={`memories-grid__tile memories-grid__tile--${index + 1}`} key={category}><span>{String(index + 1).padStart(2, "0")}</span><h2>{category}</h2><p>照片位置</p></article>)}</section><ChapterFooter /></main>;
}
