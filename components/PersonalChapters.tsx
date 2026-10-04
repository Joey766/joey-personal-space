import { SafeLink as Link } from "./SafeLink";
import { personalSpaceZh, personalSpaceEn } from "../content/personal-space";
import { projectsForLocale } from "../content/projects";
import { localizedPath, type Locale } from "../content/routes";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ScrollReveal } from "./ScrollReveal";
import { AmbientBackground } from "./AmbientBackground";
import "./personal-chapters.css";
import "./personal-ambient.css";
import "./life-archive.css";
import "./life-archive-expansion.css";
import "./chapter-refinements.css";

type ChapterContent = typeof personalSpaceZh | typeof personalSpaceEn;

export function ProjectsShowcase({ content = personalSpaceZh, locale = "zh" }: { content?: ChapterContent; locale?: Locale }) {
  const projects = projectsForLocale(locale);
  return <main className="personal-chapter personal-chapter--projects">
    <AmbientBackground variant="projects" /><SiteHeader locale={locale} path="/projects" />
    <section className="personal-chapter__intro"><p>{content.projects.eyebrow}</p><h1>{content.projects.title}</h1><span>{content.projects.lead}</span></section>
    <section className="projects-showcase" aria-label={locale === "zh" ? "精选项目" : "Selected projects"}>{projects.map((project, index) => <ScrollReveal key={project.slug} delay={index * 70}>
      <article><span>{project.number}</span><div>
        <h2><Link href={localizedPath(locale, `/projects/${project.slug}`)}>{project.title}</Link></h2>
        <p className="projects-showcase__subtitle">{project.subtitle}</p><p>{project.summary}</p>
        <p className="projects-showcase__status">{project.status} · {project.period}</p>
        <Link className="projects-showcase__detail" href={localizedPath(locale, `/projects/${project.slug}`)}>{locale === "zh" ? "查看项目" : "Explore the project"} <span aria-hidden="true">↗</span></Link>
      </div><ul aria-label={locale === "zh" ? "技术与工具" : "Technologies and tools"}>{project.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul></article>
    </ScrollReveal>)}</section><SiteFooter locale={locale} />
  </main>;
}

export function LifeMemories({ content = personalSpaceZh, locale = "zh" }: { content?: ChapterContent; locale?: Locale }) {
  const { life } = content;
  return <main className="personal-chapter personal-chapter--life">
    <AmbientBackground variant="life" /><SiteHeader locale={locale} path="/life" />
    <section className="personal-chapter__intro life-archive__intro"><p>{life.eyebrow}</p><h1>{life.title}</h1><span>{life.lead}</span></section>
    <section className="life-archive__cards" aria-label={life.title}>{life.archive.map((item, index) => {
      const available = item.slug === "music" && life.musicArchive.videos.length > 0;
      const className = `life-archive__card life-archive__card--${item.slug}${available ? "" : " life-archive__card--uncollected"}`;
      const contents = <><span>0{index + 1}</span><div className="life-archive__visual" aria-hidden="true" /><p>{item.label}</p><h2>{item.title}</h2><i>{available ? (locale === "zh" ? "浏览影像" : "View the archive") : (locale === "zh" ? "待收录" : "To be collected")} {available && <b aria-hidden="true">→</b>}</i></>;
      return <ScrollReveal className="life-archive__reveal" delay={index * 80} key={item.slug}>{available
        ? <Link id={item.slug} className={className} href={localizedPath(locale, `/life/${item.slug}`)}>{contents}</Link>
        : <article id={item.slug} className={className}>{contents}</article>
      }</ScrollReveal>;
    })}</section><SiteFooter locale={locale} />
  </main>;
}
