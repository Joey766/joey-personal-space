import { SafeLink as Link } from "./SafeLink";
import { personalSpaceZh } from "../content/personal-space";
import "./personal-chapters.css";
import { ScrollReveal } from "./ScrollReveal";
import { AmbientBackground as AmbientParticles } from "./AmbientBackground";
import "./personal-ambient.css";
import "./company-logo-images.css";

function ChapterHeader({ content, locale, path }: { content: any; locale: "zh" | "en"; path: string }) {
  const navigation = [{ label: content.ui.home, href: locale === "zh" ? "/" : "/en" }, ...content.navigation];
  const otherLocale = locale === "zh" ? `/en${path === "/" ? "" : path}` : path.replace(/^\/en/, "") || "/";
  return <header className="personal-chapter__header"><Link href={locale === "zh" ? "/" : "/en"} className="personal-chapter__mark" aria-label={content.ui.home}>AJ</Link><nav>{navigation.map((item: any) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav><Link className="personal-chapter__locale" href={otherLocale}>{content.ui.language}</Link></header>;
}

function ChapterFooter() {
  return <footer className="personal-chapter__footer"><Link href="/">JOEY LUO PERSONAL SPACE</Link><span>2026</span></footer>;
}

export function CareerJourney({ content = personalSpaceZh, locale = "zh" }: { content?: any; locale?: "zh" | "en" }) {
  const { career } = content;
  const archiveHref = locale === "zh" ? "/career" : "/en/career";
  return <main className="personal-chapter personal-chapter--career"><AmbientParticles variant="work" /><ChapterHeader content={content} locale={locale} path="/work" /><section className="personal-chapter__intro"><p>{career.eyebrow}</p><h1>{career.title}</h1><span>{career.lead}</span></section><section className="career-journey__timeline" aria-label={career.title}>{career.entries.map((entry: any, index: number) => <ScrollReveal key={`${entry.year}-${entry.company}`} delay={index * 70}><article><time>{entry.year}</time><div className="career-journey__point" aria-hidden="true" /><div><p className="career-journey__company">{entry.company}</p><h2>{entry.role}</h2>{entry.focus && <small>{entry.focus}</small>}<p className="career-journey__description">{entry.description}</p></div><div className={`career-journey__logo career-journey__logo--${index}`} aria-label={`${entry.company} logo`}><strong>{entry.logo.brand}</strong><span>{entry.logo.subline}</span></div></article></ScrollReveal>)}</section><ScrollReveal><section className="career-journey__archive"><p>{career.eyebrow}</p><h2>{career.archiveTitle[0]}<br />{career.archiveTitle[1]}</h2><Link href={archiveHref}>{career.archiveLabel}</Link></section></ScrollReveal><ChapterFooter /></main>;
}

export function ProjectsShowcase({ content = personalSpaceZh, locale = "zh" }: { content?: any; locale?: "zh" | "en" }) {
  const { projects } = content;
  return <main className="personal-chapter personal-chapter--projects"><AmbientParticles variant="projects" /><ChapterHeader content={content} locale={locale} path="/projects" /><section className="personal-chapter__intro"><p>{projects.eyebrow}</p><h1>{projects.title}</h1><span>{projects.lead}</span></section><section className="projects-showcase">{projects.items.map((project: any, index: number) => <ScrollReveal key={project.number} delay={index * 70}><article><span>{project.number}</span><div><h2>{project.title}</h2>{project.subtitle && <p className="projects-showcase__subtitle">{project.subtitle}</p>}<p>{project.description}</p><div className="projects-showcase__flow">{content.ui.flow.map((step: string) => <i key={step}>{step}</i>)}</div></div><ul>{project.stack.map((technology: string) => <li key={technology}>{technology}</li>)}</ul></article></ScrollReveal>)}</section><ChapterFooter /></main>;
}

export function LifeMemories({ content = personalSpaceZh, locale = "zh" }: { content?: any; locale?: "zh" | "en" }) {
  const { life } = content;
  return <main className="personal-chapter personal-chapter--life"><AmbientParticles variant="life" /><ChapterHeader content={content} locale={locale} path="/life" /><section className="personal-chapter__intro"><p>{life.eyebrow}</p><h1>{life.title}</h1><span>{life.lead}</span></section><section className="memories-grid" aria-label={life.title}>{life.categories.map((category: string, index: number) => <ScrollReveal className={`memories-grid__tile memories-grid__tile--${index + 1}`} delay={index * 65} key={category}><article><span>{String(index + 1).padStart(2, "0")}</span><h2>{category}</h2><p>{content.ui.photoSlot}</p></article></ScrollReveal>)}</section><ChapterFooter /></main>;
}
