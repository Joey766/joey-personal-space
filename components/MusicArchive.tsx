"use client";

import { useRef, useState } from "react";
import { SafeLink as Link } from "./SafeLink";
import { AmbientBackground } from "./AmbientBackground";
import { ScrollReveal } from "./ScrollReveal";
import "./music-archive.css";

function MusicHeader({ content, locale, path }: { content: any; locale: "zh" | "en"; path: string }) {
  const navigation = [{ label: content.ui.home, href: locale === "zh" ? "/" : "/en" }, ...content.navigation];
  const otherLocale = locale === "zh" ? `/en${path}` : path.replace(/^\/en/, "") || "/";
  return <header className="personal-chapter__header"><Link href={locale === "zh" ? "/" : "/en"} className="personal-chapter__mark" aria-label={content.ui.home}>AJ</Link><nav>{navigation.map((entry: any) => <Link href={entry.href} key={entry.href}>{entry.label}</Link>)}</nav><Link className="personal-chapter__locale" href={otherLocale}>{content.ui.language}</Link></header>;
}

function MusicVideoCard({ video, emptyLabel, playLabel, fullscreenLabel }: { video: any; emptyLabel: string; playLabel: string; fullscreenLabel: string }) {
  const player = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const available = Boolean(video.src);

  const togglePlayback = async () => {
    if (!available || !player.current) return;
    if (player.current.paused) await player.current.play();
    else player.current.pause();
  };

  const enterFullscreen = () => {
    const target = player.current;
    if (!target) return;
    if (target.requestFullscreen) void target.requestFullscreen();
    else (target as HTMLVideoElement & { webkitEnterFullscreen?: () => void }).webkitEnterFullscreen?.();
  };

  return <article className={`music-video-card${available ? " is-ready" : " is-placeholder"}${isPlaying ? " is-playing" : ""}`}>
    <button type="button" className="music-video-card__media" onClick={togglePlayback} aria-label={available ? `${playLabel} ${video.title}` : emptyLabel}>
      {available ? <video ref={player} preload="metadata" playsInline poster={video.poster} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} onEnded={() => setIsPlaying(false)}><source src={video.src} type="video/mp4" /></video> : <span className="music-video-card__placeholder" aria-hidden="true"><i>♫</i></span>}
      <span className={`music-video-card__play${isPlaying ? " is-playing" : ""}`} aria-hidden="true"><i>{isPlaying ? "Ⅱ" : "▶"}</i></span>
      {!available && <span className="music-video-card__status">{emptyLabel}</span>}
    </button>
    <div className="music-video-card__meta"><span>{video.date}</span><h2>{video.title}</h2><p>{video.description}</p>{available && <button type="button" className="music-video-card__fullscreen" onClick={enterFullscreen}>{fullscreenLabel} <b>↗</b></button>}</div>
  </article>;
}

export function MusicArchive({ content, locale, item }: { content: any; locale: "zh" | "en"; item: any }) {
  const backHref = locale === "zh" ? "/life" : "/en/life";
  const music = content.life.musicArchive;
  return <main className="personal-chapter life-detail music-archive"><AmbientBackground variant="life" /><MusicHeader content={content} locale={locale} path={`${backHref}/music`} /><section className="life-detail__intro music-archive__intro"><ScrollReveal><Link href={backHref} className="life-detail__back">← {locale === "zh" ? "返回生活" : "Back to Life"}</Link><p>{item.label}</p><h1>{item.title}</h1><span>{item.intro}</span></ScrollReveal></section><section className="music-archive__videos" aria-label={music.label}><ScrollReveal><div className="music-archive__heading"><span>{music.label}</span><p>{music.note}</p></div></ScrollReveal><div className="music-video-grid">{music.videos.map((video: any, index: number) => <ScrollReveal className="music-video-grid__reveal" delay={index * 80} key={video.title}><MusicVideoCard video={video} emptyLabel={music.emptyLabel} playLabel={music.playLabel} fullscreenLabel={music.fullscreenLabel} /></ScrollReveal>)}</div></section></main>;
}
