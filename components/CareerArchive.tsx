import { SafeLink as Link } from "./SafeLink";
import { AmbientBackground } from "./AmbientBackground";
import { ScrollReveal } from "./ScrollReveal";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { contact } from "../content/contact";
import { projectsForLocale } from "../content/projects";
import { localizedPath, type Locale } from "../content/routes";
import type { CareerContent } from "../content/career";
import "./career.css";
import "./company-logo-images.css";

const experienceLogos = [
  { brand: "DAHUAN", className: "career-neo__experience-logo--dahuan" },
  { brand: "EY", className: "career-neo__experience-logo--ey" },
  { brand: "GUOTAI HAITONG", className: "career-neo__experience-logo--guotai" },
  { brand: "HAIKUN", className: "career-neo__experience-logo--haikun" },
  { brand: "TIANLONG", className: "career-neo__experience-logo--tianlong" },
];

export function CareerArchive({ content, locale = "zh" }: { content: CareerContent; locale?: Locale }) {
  const projects = projectsForLocale(locale);
  return (
    <main className="career-neo">
      <AmbientBackground variant="career" />
      <SiteHeader locale={locale} path="/career" />

      <section className="career-neo__overview" aria-labelledby="career-title">
        <ScrollReveal>
          <p className="career-neo__eyebrow">{locale === "zh" ? "02 / 职业" : "02 / CAREER"}</p>
          <h1 id="career-title">{content.hero.title}</h1>
          <p className="career-neo__theme">{content.hero.theme}</p>
          <p className="career-neo__intro">{content.hero.intro}</p>
        </ScrollReveal>
      </section>

      <section className="career-neo__section career-neo__education" id="education" aria-labelledby="education-title">
        <ScrollReveal><div className="career-neo__section-heading"><span>01</span><h2 id="education-title">{content.ui.labels.education} <em>{content.ui.labels.educationSub}</em></h2></div></ScrollReveal>
        <ScrollReveal delay={100}><article className="career-neo__school-card">
          <span className="career-neo__school-logo" aria-hidden="true">UW</span>
          <div className="career-neo__school-content">
            <p className="career-neo__school-name">{content.education.school}</p>
            <h3>{content.education.degree}</h3>
            <p>{content.education.major}</p>
            <p>{content.education.specialization}</p>
          </div>
          <div className="career-neo__school-meta">
            <p>{content.education.years}</p>
            <dl>{content.education.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
          </div>
          <p className="career-neo__school-award"><span>{content.education.awardLabel}</span>{content.education.award}</p>
        </article></ScrollReveal>
        <ScrollReveal delay={180}>
          <div className="career-neo__academic-route" aria-label={locale === "zh" ? "学术旅程：2023年至预计2027年毕业" : "Academic journey: 2023 to expected graduation in 2027"}>{content.education.journey.map((year, index) => <span key={year} className={index === 0 || index === content.education.journey.length - 1 ? "is-major" : ""}>{year}</span>)}</div>
          <div className="career-neo__academic-themes">{content.education.themes.map((theme) => <span key={theme}>{theme}</span>)}</div>
        </ScrollReveal>
      </section>

      <section className="career-neo__section career-neo__experience" id="experience" aria-labelledby="experience-title">
        <ScrollReveal><div className="career-neo__section-heading"><span>02</span><h2 id="experience-title">{content.ui.labels.experience} <em>{content.ui.labels.experienceSub}</em></h2></div><p className="career-neo__experience-intro">{content.ui.experienceIntro}</p></ScrollReveal>
        <div className="career-neo__timeline">
          {content.experience.map((entry, index) => (
            <ScrollReveal key={entry.company} delay={index * 70}><article className="career-neo__experience-item">
              <p className="career-neo__period">{entry.period}</p>
              <span className="career-neo__timeline-line" aria-hidden="true" />
              <div className="career-neo__experience-copy">
                <p className="career-neo__company">{entry.company}</p>
                <h3>{entry.role}</h3>
                <p className="career-neo__experience-focus">{entry.focus}</p>
                <div className="career-neo__experience-story">{entry.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                <div className="career-neo__experience-tags">{entry.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className={`career-neo__experience-logo ${experienceLogos[index]?.className ?? ""}`} aria-hidden="true"><strong>{experienceLogos[index]?.brand}</strong></div>
            </article></ScrollReveal>
          ))}
        </div>
      </section>

      <section className="career-neo__section career-neo__projects" id="projects" aria-labelledby="projects-title">
        <ScrollReveal><div className="career-neo__section-heading"><span>03</span><h2 id="projects-title">{content.ui.labels.projects}</h2></div><p className="career-neo__section-intro">{content.ui.projectsIntro}</p></ScrollReveal>
        <ol className="career-neo__project-links">
          {projects.map((project, index) => <li key={project.slug}>
            <ScrollReveal delay={index * 60}><Link href={localizedPath(locale, `/projects/${project.slug}`)} aria-label={`${content.ui.projectLink}: ${project.title}`}>
              <span className="career-neo__project-number" aria-hidden="true">0{index + 1}</span>
              <div><h3>{project.title}</h3><p>{project.summary}</p></div>
              <span className="career-neo__project-arrow" aria-hidden="true">↗</span>
            </Link></ScrollReveal>
          </li>)}
        </ol>
      </section>

      <section className="career-neo__section career-neo__stack" id="stack" aria-labelledby="stack-title">
        <ScrollReveal><div className="career-neo__section-heading"><span>04</span><h2 id="stack-title">{content.ui.labels.stack} <em>{content.ui.labels.stackSub}</em></h2></div></ScrollReveal>
        <div className="career-neo__stack-grid">
          {content.skills.map((group) => <ScrollReveal key={group.category}><article><h3>{group.category}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>{group.note && <p className="career-neo__tool-note">{group.note}</p>}</article></ScrollReveal>)}
        </div>
      </section>

      <section className="career-neo__section career-neo__beyond" id="beyond" aria-labelledby="beyond-title">
        <ScrollReveal><div className="career-neo__section-heading"><span>05</span><h2 id="beyond-title">{content.ui.labels.beyond}</h2></div></ScrollReveal>
        <div className="career-neo__beyond-grid">
          <ScrollReveal><article className="career-neo__chess">
            <span className="career-neo__chess-mark" aria-hidden="true">♞</span>
            <h3>{content.beyond.chess.title}</h3>
            <p className="career-neo__chess-credential">{content.beyond.chess.credential}</p>
            <p>{content.beyond.chess.role}</p>
            <small>{content.beyond.chess.period}</small>
            <ul>{content.beyond.chess.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          </article></ScrollReveal>
          <ScrollReveal delay={80}><article className="career-neo__music"><span aria-hidden="true">♫</span><h3>{content.beyond.music.title}</h3><p>{content.beyond.music.detail}</p><Link href={localizedPath(locale, "/life/music")}>{locale === "zh" ? "查看音乐影像" : "Visit the music archive"} <span aria-hidden="true">↗</span></Link></article></ScrollReveal>
        </div>
      </section>

      <section className="career-neo__section career-neo__contact" id="contact" aria-labelledby="contact-title">
        <ScrollReveal>
          <h2 id="contact-title">{content.ui.labels.contact}</h2>
          <p>{content.ui.contactIntro}</p>
          <div><Link href={`mailto:${contact.email}`}>{contact.email}</Link><Link href={contact.github}>GitHub <span aria-hidden="true">↗</span></Link></div>
        </ScrollReveal>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
