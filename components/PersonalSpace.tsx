"use client";

import { useRef, useState, type MouseEvent } from "react";
import { SafeLink as Link } from "./SafeLink";
import { HeroMascot } from "./HeroMascot";
import { INTRO_VIDEO_SRC } from "../content/site";
import "./personal-space-interactions.css";
import "./home-hero-copy.css";

export function PersonalSpace({ content, locale }: { content: any; locale: "zh" | "en" }) {
  const [menu, setMenu] = useState(false);
  const [activeScene, setActiveScene] = useState<"football" | "basketball" | "chess" | "piano" | null>(null);
  const [doorAwake, setDoorAwake] = useState(false);
  const sceneTimer = useRef<number | undefined>(undefined);
  const pageFor = (href: string) => `${locale === "zh" ? "" : "/en"}${({ "#about": "/explore", "#career": "/career", "#projects": "/projects", "#life": "/life" } as Record<string, string>)[href] ?? href}`;
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
  return <main className="personal-space landing-page">
    <section className={doorAwake ? "welcome door-awake" : "welcome"} id="top" onMouseMove={checkDoor} onMouseLeave={() => setDoorAwake(false)}>
      <video className="welcome-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true"><source src={INTRO_VIDEO_SRC} type="video/mp4" /></video><div className="video-fade" aria-hidden="true" />
      <header className="header"><Link className="jl" href={locale === "zh" ? "/" : "/en"} aria-label="AJ">AJ</Link><nav className="desktop-nav">{content.nav.map((item: any) => <Link key={item.label} href={pageFor(item.href)}>{item.label}</Link>)}</nav><Link className="locale" href={otherLocale}>{content.language}</Link><button className="burger" onClick={() => setMenu(true)} aria-label="Menu"><i /><i /></button></header>
      <div className="welcome-copy"><p className="eyebrow">{content.welcome.eyebrow}</p><h1 className={content.welcome.title.length > 1 ? "welcome-title--balanced" : ""}>{content.welcome.title.map((line: string) => <span key={line}>{line}</span>)}</h1><p className="welcome-line">{Array.isArray(content.welcome.line) ? content.welcome.line.map((line: string) => <span key={line}>{line}</span>) : content.welcome.line}</p><div className="welcome-actions"><Link className="light-pill" href={pageFor("#about")}>{content.welcome.enter} <span>→</span></Link></div></div>
      <HeroMascot locale={locale} />
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
      <nav className="meaning-nav">{content.bottom.map((item: any) => <Link href={pageFor(item.href)} key={item.number}><b>{item.number}</b><span>{item.label}</span></Link>)}</nav>
    </section>
    {menu && <div className="mobile-menu" role="dialog" aria-modal="true"><button onClick={() => setMenu(false)} aria-label="Close">×</button><nav>{content.nav.map((item: any) => <Link href={pageFor(item.href)} key={item.label} onClick={() => setMenu(false)}>{item.label}</Link>)}<i /><Link href={otherLocale}>{content.language}</Link></nav></div>}
  </main>;
}
