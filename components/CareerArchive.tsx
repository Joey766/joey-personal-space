import Link from "next/link";
import { AmbientParticles } from "./AmbientParticles";
import { ScrollReveal } from "./ScrollReveal";
import "./career.css";
import "./company-logo-images.css";

type CareerContent = {
  ui: { navigation: Array<{ label: string; href: string }>; back: string; language: string; experienceIntro: string; labels: { education: string; educationSub: string; experience: string; experienceSub: string; projects: string; stack: string; stackSub: string; beyond: string } };
  hero: { title: string; theme: string; intro: string };
  education: {
    school: string;
    degree: string;
    major: string;
    specialization: string;
    years: string;
    facts: string[];
    journey: string[];
    themes: string[];
  };
  experience: Array<{ company: string; role: string; period: string; details: string[]; tags: string[] }>;
  projects: Array<{ title: string; subtitle?: string; description: string; tools: string; path: string[] }>;
  skills: Array<{ category: string; capability: string; items: string[] }>;
  beyond: { chess: { title: string; credential: string; achievement: string }; activities: Array<{ title: string; detail: string }> };
};

const experienceLogos = [
  { brand: "DAHUAN", subline: "ROBOTICS", className: "career-neo__experience-logo--dahuan" },
  { brand: "EY", subline: "ASSURANCE · IPO", className: "career-neo__experience-logo--ey" },
  { brand: "GUOTAI HAITONG", subline: "SECURITIES", className: "career-neo__experience-logo--guotai" },
  { brand: "HAIKUN", subline: "INVESTMENT MANAGEMENT", className: "career-neo__experience-logo--haikun" },
  { brand: "TIANLONG", subline: "SECURITIES", className: "career-neo__experience-logo--tianlong" },
];

export function CareerArchive({ content, locale = "zh" }: { content: CareerContent; locale?: "zh" | "en" }) {
  const home = locale === "zh" ? "/" : "/en";
  const otherLocale = locale === "zh" ? "/en/career" : "/career";
  return (
    <main className="career-neo">
      <AmbientParticles variant="career" />
      <header className="career-neo__header">
        <Link href={home} className="career-neo__monogram" aria-label={content.ui.back}>AJ</Link>
        <nav aria-label={`${content.hero.title} navigation`}>
          {content.ui.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="career-neo__header-actions">
          <Link href={home}>{content.ui.back}</Link>
          <Link href={otherLocale} aria-label={content.ui.language}>{content.ui.language}</Link>
        </div>
      </header>

      <section className="career-neo__section career-neo__education" id="education" aria-labelledby="education-title">
        <ScrollReveal><div className="career-neo__section-heading"><span>01</span><h2 id="education-title">{content.ui.labels.education} <em>{content.ui.labels.educationSub}</em></h2></div></ScrollReveal>
        <ScrollReveal delay={100}><article className="career-neo__school-card">
          <div className="career-neo__school-logo" aria-label="University of Waterloo logo"><img src="https://www.google.com/s2/favicons?domain=uwaterloo.ca&sz=128" alt="University of Waterloo" /></div>
          <div className="career-neo__school-content">
            <p className="career-neo__school-name">{content.education.school}</p>
            <h3>{content.education.degree}</h3>
            <p>{content.education.major}</p>
            <p>{content.education.specialization}</p>
          </div>
          <div className="career-neo__school-meta">
            <time>{content.education.years}</time>
            <div>{content.education.facts.map((fact) => <span key={fact}>{fact}</span>)}</div>
          </div>
        </article></ScrollReveal>
        <ScrollReveal delay={180}><div className="career-neo__academic-route" aria-label={`${content.education.years} timeline`}>{content.education.journey.map((year, index) => <span key={year} className={index === 0 || index === content.education.journey.length - 1 ? "is-major" : ""}>{year}</span>)}</div><div className="career-neo__academic-themes">{content.education.themes.map((theme) => <span key={theme}>{theme}</span>)}</div></ScrollReveal>
      </section>

      <section className="career-neo__section career-neo__experience" id="experience" aria-labelledby="experience-title">
        <ScrollReveal><div className="career-neo__section-heading"><span>02</span><h2 id="experience-title">{content.ui.labels.experience} <em>{content.ui.labels.experienceSub}</em></h2></div><p className="career-neo__experience-intro">{content.ui.experienceIntro}</p></ScrollReveal>
        <div className="career-neo__timeline">
          {content.experience.map((entry, index) => (
            <ScrollReveal key={entry.company} delay={index * 70}><article className="career-neo__experience-item">
              <time>{entry.period}</time>
              <div className="career-neo__timeline-line" aria-hidden="true" />
              <div className="career-neo__experience-copy">
                <p className="career-neo__company">{entry.company}</p>
                <h3>{entry.role}</h3>
                <ul className="career-neo__experience-details">{entry.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                <div className="career-neo__experience-tags">{entry.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <div className={`career-neo__experience-logo ${experienceLogos[index].className}`}>
                <strong>{experienceLogos[index].brand}</strong>
                <small>{experienceLogos[index].subline}</small>
              </div>
            </article></ScrollReveal>
          ))}
        </div>
      </section>

      <section className="career-neo__section career-neo__projects" id="projects" aria-labelledby="projects-title">
        <ScrollReveal><div className="career-neo__section-heading"><span>03</span><h2 id="projects-title">{content.ui.labels.projects}</h2></div></ScrollReveal>
        <div className="career-neo__project-grid">
          {content.projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 90}><article>
              <span>0{index + 1}</span>
              <h3>{project.title}</h3>
              {project.subtitle && <p className="career-neo__project-subtitle">{project.subtitle}</p>}
              <p>{project.description}</p>
              <div className="career-neo__project-flow">{project.path.map((step) => <span key={step}>{step}</span>)}</div>
              <code>{project.tools}</code>
            </article></ScrollReveal>
          ))}
        </div>
      </section>

      <section className="career-neo__section career-neo__stack" id="stack" aria-labelledby="stack-title">
        <ScrollReveal><div className="career-neo__section-heading"><span>04</span><h2 id="stack-title">{content.ui.labels.stack} <em>{content.ui.labels.stackSub}</em></h2></div></ScrollReveal>
        <div className="career-neo__stack-grid">
          {content.skills.map((group) => (
            <ScrollReveal key={group.category}><article>
              <h3>{group.category}</h3>
              <div>{group.items.map((item) => <span data-capability={group.capability} key={item}>{item}</span>)}</div>
            </article></ScrollReveal>
          ))}
        </div>
      </section>

      <section className="career-neo__section career-neo__beyond" id="beyond" aria-labelledby="beyond-title">
        <ScrollReveal><div className="career-neo__section-heading"><span>05</span><h2 id="beyond-title">{content.ui.labels.beyond}</h2></div></ScrollReveal>
        <div className="career-neo__beyond-grid">
          <ScrollReveal><article className="career-neo__chess">
            <span className="career-neo__chess-mark">♞</span>
            <h3>{content.beyond.chess.title}</h3>
            <p>{content.beyond.chess.credential}</p>
            <small>{content.beyond.chess.achievement}</small>
          </article></ScrollReveal>
          {content.beyond.activities.map((item, index) => (
            <ScrollReveal key={item.title} delay={(index + 1) * 80}><article className={`career-neo__activity career-neo__activity--${index}`}>
              <span aria-hidden="true">{index === 0 ? "◌" : "♫"}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article></ScrollReveal>
          ))}
        </div>
      </section>

      <footer className="career-neo__footer"><Link href={home}>JOEY LUO PERSONAL SPACE</Link><span>2026</span></footer>
    </main>
  );
}
