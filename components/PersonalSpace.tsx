"use client";

import { useRef, useState, type MouseEvent } from "react";
import { INTRO_VIDEO_SRC } from "../content/site";

export function PersonalSpace({ content, locale }: { content: any; locale: "zh" | "en" }) {
  const [entered, setEntered] = useState(false);
  const [menu, setMenu] = useState(false);
  const [activeScene, setActiveScene] = useState<"football" | "basketball" | "chess" | "piano" | null>(null);
  const [doorAwake, setDoorAwake] = useState(false);
  const sceneTimer = useRef<number | undefined>(undefined);
  const enter = () => { setMenu(false); setEntered(true); window.setTimeout(() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }), 520); };
  const otherLocale = locale === "zh" ? "/en" : "/";
  const triggerScene = (scene: "football" | "basketball" | "chess" | "piano") => {
    if (activeScene) return;
    setActiveScene(scene);
    window.clearTimeout(sceneTimer.current);
    sceneTimer.current = window.setTimeout(() => setActiveScene(null), 2200);
  };
  const checkDoor = (event: MouseEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    setDoorAwake(x > 0.42 && x < 0.82 && y > 0.12 && y < 0.86);
  };
  return <main className={entered ? "personal-space entered" : "personal-space"}>
    <section className={doorAwake ? "welcome door-awake" : "welcome"} id="top" onMouseMove={checkDoor} onMouseLeave={() => setDoorAwake(false)}>
      <video className="welcome-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true"><source src={INTRO_VIDEO_SRC} type="video/mp4" /></video><div className="video-fade" aria-hidden="true" />
      <header className="header"><a className="jl" href="#top" aria-label="AJ">AJ</a><nav className="desktop-nav">{content.nav.map((item: any) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav><a className="locale" href={otherLocale}>{content.language}</a><button className="burger" onClick={() => setMenu(true)} aria-label="Menu"><i /><i /></button></header>
      <div className="welcome-copy"><p className="eyebrow">{content.welcome.eyebrow}</p><h1>{content.welcome.title.map((line: string) => <span key={line}>{line}</span>)}</h1><p className="welcome-line">{content.welcome.line}</p><div className="welcome-actions"><button className="light-pill" onClick={enter}>{content.welcome.enter} <span>→</span></button><a href="#projects" onClick={() => setEntered(true)}>{content.welcome.projects} <span>→</span></a></div></div>
      <div className="interest-scenes" aria-hidden="true">
        <div className={`interest-zone football-zone ${activeScene === "football" ? "is-active" : ""}`} onMouseEnter={() => triggerScene("football")}>
          <span className="football-pitch" /><span className="football-player"><i /><i /></span><span className="football-goal"><i /><i /><i /></span><span className="football-ball" />
        </div>
        <div className={`interest-zone chess-zone ${activeScene === "chess" ? "is-active" : ""}`} onMouseEnter={() => triggerScene("chess")}>
          <span className="chess-board"><i /><i /><i /><i /></span><span className="chess-piece chess-king" /><span className="chess-piece chess-queen" /><span className="chess-piece chess-pawn pawn-one" /><span className="chess-piece chess-pawn pawn-two" /><span className="chess-move" />
        </div>
        <div className={`interest-zone basketball-zone ${activeScene === "basketball" ? "is-active" : ""}`} onMouseEnter={() => triggerScene("basketball")}>
          <span className="basketball-backboard" /><span className="basketball-rim"><i /></span><span className="basketball-ball" />
        </div>
        <div className={`interest-zone piano-zone ${activeScene === "piano" ? "is-active" : ""}`} onMouseEnter={() => triggerScene("piano")}>
          <span className="piano-lid" /><span className="piano-case" /><span className="piano-keys"><i /><i /><i /><i /><i /><i /><i /><i /></span><span className="piano-note note-one">♪</span><span className="piano-note note-two">♫</span>
        </div>
      </div>
      <nav className="meaning-nav">{content.bottom.map((item: any) => <a href={item.href} key={item.number}><b>{item.number}</b><span>{item.label}</span></a>)}</nav>
    </section>
    <div className="space-content">
      <section className="about section" id="about"><div className="section-head"><span>{content.about.number}</span><h2>{content.about.title}</h2></div><div className="about-body"><h3>{content.about.lead}</h3>{content.about.copy.map((copy: string) => <p key={copy}>{copy}</p>)}<div className="facts">{content.about.facts.map((fact: string) => <p key={fact}>{fact.split("\n").map((line) => <span key={line}>{line}</span>)}</p>)}</div></div></section>
      <section className="section projects" id="projects"><div className="section-head"><span>{content.projects.number}</span><h2>{content.projects.title}</h2></div><div className="section-lead">{content.projects.lead}</div><div className="project-list">{content.projects.items.map((item: any, index: number) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.copy}</p><p>{item.tags}</p></article>)}</div></section>
      <section className="section notes" id="notes"><div className="section-head"><span>{content.notes.number}</span><h2>{content.notes.title}</h2></div><div className="notes-copy"><h3>{content.notes.lead}</h3>{content.notes.copy.map((copy: string) => <p key={copy}>{copy}</p>)}</div></section>
      <section className="section life" id="life"><div className="section-head"><span>{content.life.number}</span><h2>{content.life.title}</h2></div><div className="section-lead">{content.life.lead}</div><div className="life-grid"><article><h3>{content.life.chess.title}</h3><p className="meta">{content.life.chess.meta}</p><p>{content.life.chess.copy}</p></article><div className="interest-list">{content.life.interests.map((item: string) => <span key={item}>{item}</span>)}</div></div><div className="photo-placeholders">{content.life.gallery.map((item: string) => <div key={item}>{item}</div>)}</div></section>
      <section className="career-preview" id="career"><span>{content.career.number}</span><h2>{content.career.title}</h2><p>{content.career.lead}</p><a href={locale === "zh" ? "/work" : "/en/work"}>{content.career.link} →</a></section>
      <section className="contact section" id="contact"><div className="section-head"><span>{content.contact.number}</span><h2>{content.contact.title}</h2></div><div className="contact-body"><p>{content.contact.copy}</p><nav>{content.contact.links.map((item: string) => <a href="#top" key={item}>{item} ↗</a>)}</nav></div></section>
    </div>
    {menu && <div className="mobile-menu" role="dialog" aria-modal="true"><button onClick={() => setMenu(false)} aria-label="Close">×</button><nav>{content.nav.map((item: any) => <a href={item.href} key={item.label} onClick={() => setMenu(false)}>{item.label}</a>)}<i /><a href={otherLocale}>{content.language}</a></nav></div>}
  </main>;
}
