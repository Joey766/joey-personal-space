"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { SafeLink as Link } from "./SafeLink";
import { HeroMascot } from "./HeroMascot";
import { INTRO_VIDEO_SRC } from "../content/site";
import { useAccessibleDialog } from "./useAccessibleDialog";
import "./personal-space-interactions.css";
import "./home-hero-copy.css";

type HomeContent = {
  nav: Array<{ label: string; href: string }>;
  welcome: { eyebrow: string; title: string[]; line: string | string[]; enter: string };
  bottom: Array<{ number: string; label: string; href: string }>;
};

export function PersonalSpace({ content, locale }: { content: HomeContent; locale: "zh" | "en" }) {
  const [menu, setMenu] = useState(false);
  const menuRef = useAccessibleDialog(menu, () => setMenu(false));
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [backdropPaused, setBackdropPaused] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [activeScene, setActiveScene] = useState<"football" | "basketball" | "chess" | "piano" | null>(null);
  const [doorAwake, setDoorAwake] = useState(false);
  const sceneTimer = useRef<number | undefined>(undefined);
  const pageFor = (href: string) => `${locale === "zh" ? "" : "/en"}${({ "#about": "/explore", "#career": "/career", "#projects": "/projects", "#life": "/life" } as Record<string, string>)[href] ?? href}`;
  const otherLocale = locale === "zh" ? "/en" : "/";
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setVideoEnabled(!preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => {
      preference.removeEventListener("change", update);
      window.clearTimeout(sceneTimer.current);
    };
  }, []);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (backdropPaused) video.pause();
    else void video.play().catch(() => setBackdropPaused(true));
  }, [videoEnabled, backdropPaused]);
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
  return <main className="personal-space landing-page" data-locale={locale}>
    <section className={doorAwake ? "welcome door-awake" : "welcome"} id="top" onMouseMove={checkDoor} onMouseLeave={() => setDoorAwake(false)}>
      <div className="welcome-doorway-fallback" aria-hidden="true"><span /></div>
      {videoEnabled && !videoFailed && <video ref={videoRef} className="welcome-video" autoPlay={!backdropPaused} muted loop playsInline preload="metadata" aria-hidden="true" onError={() => setVideoFailed(true)}><source src={INTRO_VIDEO_SRC} type="video/mp4" onError={() => setVideoFailed(true)} /></video>}<div className="video-fade" aria-hidden="true" />
      <header className="header"><Link className="jl" href={locale === "zh" ? "/" : "/en"} aria-label={locale === "zh" ? "个人空间首页" : "Personal Space home"}>AJ</Link><nav className="desktop-nav" aria-label={locale === "zh" ? "主要导航" : "Main navigation"}>{content.nav.map((item) => <Link key={item.label} href={pageFor(item.href)}>{item.label}</Link>)}</nav><div className="home-header-tools">{!videoFailed && <button className="backdrop-toggle" type="button" aria-label={locale === "zh" ? (videoEnabled && !backdropPaused ? "暂停背景动画" : "播放背景动画") : (videoEnabled && !backdropPaused ? "Pause animated backdrop" : "Play animated backdrop")} onClick={() => { if (!videoEnabled) { setVideoEnabled(true); setBackdropPaused(false); } else setBackdropPaused((paused) => !paused); }}><span aria-hidden="true">{videoEnabled && !backdropPaused ? "Ⅱ" : "▷"}</span></button>}<Link className="locale" href={otherLocale} lang={locale === "zh" ? "en" : "zh-CN"} aria-label={locale === "zh" ? "Switch to English" : "切换至中文"}>{locale === "zh" ? "EN" : "中文"}</Link><button className="burger" type="button" onClick={() => setMenu(true)} aria-label={locale === "zh" ? "打开导航菜单" : "Open navigation menu"} aria-haspopup="dialog" aria-expanded={menu}><i /><i /></button></div></header>
      <div className="welcome-copy"><p className="eyebrow">{content.welcome.eyebrow}</p><h1 className={content.welcome.title.length > 1 ? "welcome-title--balanced" : ""}>{content.welcome.title.map((line: string) => <span key={line}>{line}</span>)}</h1><p className="welcome-line">{Array.isArray(content.welcome.line) ? content.welcome.line.map((line: string) => <span key={line}>{line}</span>) : content.welcome.line}</p><div className="welcome-actions"><Link className="light-pill" href={pageFor("#about")}>{content.welcome.enter} <span aria-hidden="true">→</span></Link><Link className="selected-work-shortcut" href={pageFor("#projects")}>{locale === "zh" ? "精选项目" : "Selected work"} <span aria-hidden="true">↗</span></Link></div></div>
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
      <nav className="meaning-nav" aria-label={locale === "zh" ? "个人空间的四个章节" : "The four chapters of Personal Space"}>{content.bottom.map((item) => <Link href={pageFor(item.href)} key={item.number}><b aria-hidden="true">{item.number}</b><span>{item.label}</span></Link>)}</nav>
    </section>
    {menu && <dialog ref={menuRef} className="mobile-menu" aria-label={locale === "zh" ? "导航菜单" : "Navigation menu"}><button type="button" data-dialog-initial-focus onClick={() => setMenu(false)} aria-label={locale === "zh" ? "关闭导航菜单" : "Close navigation menu"}>×</button><nav aria-label={locale === "zh" ? "主要导航" : "Main navigation"}>{content.nav.map((item) => <Link href={pageFor(item.href)} key={item.label} onClick={() => setMenu(false)}>{item.label}</Link>)}<i aria-hidden="true" /><Link href={otherLocale} lang={locale === "zh" ? "en" : "zh-CN"}>{locale === "zh" ? "English" : "中文"}</Link></nav></dialog>}
  </main>;
}
