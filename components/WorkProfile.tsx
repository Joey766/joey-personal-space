"use client";

export function WorkProfile({ content, locale }: { content: any; locale: "zh" | "en" }) {
  const home = locale === "zh" ? "/" : "/en";
  const otherLocale = locale === "zh" ? "/en/work" : "/work";
  const logoSources = ["https://www.google.com/s2/favicons?domain=dh-robotics.com&sz=128", "https://www.google.com/s2/favicons?domain=ey.com&sz=128", "https://www.google.com/s2/favicons?domain=gtht.com&sz=128", "/logos/haikun.jpg", "https://www.google.com/s2/favicons?domain=tianlongsecurities.com&sz=128"];

  return <main className="career-page" id="top">
    <div className="career-light" aria-hidden="true" />
    <header className="career-header">
      <a className="career-mark" href={home} aria-label="AJ">AJ</a>
      <nav><a href={home}>{content.back}</a><a href={otherLocale}>{content.language}</a></nav>
    </header>

    <section className="career-hero">
      <div className="career-hero-media" aria-hidden="true" />
      <p className="career-eyebrow">{content.hero.eyebrow}</p>
      <div className="career-identity"><p>{content.hero.school}</p><p>{content.hero.direction}</p></div>
      <p className="career-intro">{content.hero.intro}</p>
    </section>

    <nav className="career-index" aria-label={content.indexLabel}>{content.index.map((item: any) => <a href={item.href} key={item.href}>{item.label}</a>)}</nav>

    <div className="career-content">
      <section className="career-section education-section" id="education"><div className="career-section-title"><span>{content.education.number}</span><h2>{content.education.title}</h2></div><div className="education-layout"><p className="education-year">{content.education.year}</p><div><h3>{content.education.school}</h3><p className="education-degree">{content.education.degree}</p><p className="education-major">{content.education.major}</p><div className="education-facts">{content.education.facts.map((fact: string) => <span key={fact}>{fact}</span>)}</div><p className="education-courses">{content.education.courses}</p><div className="education-honours">{content.education.honours.map((honour: string) => <p key={honour}>{honour}</p>)}</div></div></div></section>

      <section className="career-section experience-section" id="experience"><div className="career-section-title"><span>{content.experience.number}</span><h2>{content.experience.title}</h2></div><div className="experience-list">{content.experience.items.map((item: any, index: number) => <article className="experience-item" key={item.company}><div className="experience-date">{item.date}</div><div className="experience-main"><p className="experience-tag">{item.tag}</p><h3>{item.company}</h3><h4>{item.role}</h4>{item.department && <p className="experience-department">{item.department}</p>}<p className="experience-summary">{item.details[0]}</p></div><div className="experience-company"><img className={index === 3 ? "haikun-logo" : ""} src={logoSources[index]} alt={`${item.company} logo`} /><span>{item.company}</span></div></article>)}</div></section>

      <section className="career-section projects-section" id="projects"><div className="career-section-title"><span>{content.projects.number}</span><h2>{content.projects.title}</h2></div><div className="career-project-list">{content.projects.items.map((item: any, index: number) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p className="project-subtitle">{item.subtitle}</p><p>{item.copy}</p><p className="project-tools">{item.tools}</p></div></article>)}</div></section>

      <section className="career-section skills-section" id="skills"><div className="career-section-title"><span>{content.skills.number}</span><h2>{content.skills.title}</h2></div><div className="skills-matrix">{content.skills.groups.map((group: any) => <article key={group.title}><p>{group.title}</p><div>{group.items.map((item: string) => <span key={item}>{item}</span>)}</div></article>)}</div></section>

      <section className="career-section campus-section" id="campus"><div className="career-section-title"><span>{content.campus.number}</span><h2>{content.campus.title}</h2></div><div className="campus-layout"><article><h3>{content.campus.club.title}</h3><p className="campus-role">{content.campus.club.role}</p><ul>{content.campus.club.details.map((detail: string) => <li key={detail}>{detail}</li>)}</ul></article><div className="campus-notes">{content.campus.notes.map((note: any) => <article key={note.title}><h3>{note.title}</h3><p>{note.copy}</p></article>)}</div></div></section>

    </div>
    <footer className="career-footer"><span>AJ · 2026</span><a href="#top">{content.backToTop} ↑</a></footer>
  </main>;
}
