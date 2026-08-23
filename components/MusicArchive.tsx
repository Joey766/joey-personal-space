"use client";

import { useEffect, useRef, useState } from "react";
import { SafeLink as Link } from "./SafeLink";
import { AmbientBackground } from "./AmbientBackground";
import { ScrollReveal } from "./ScrollReveal";
import "./music-archive.css";

function MusicHeader({ content, locale, path }: { content: any; locale: "zh" | "en"; path: string }) {
  const navigation = [{ label: content.ui.home, href: locale === "zh" ? "/" : "/en" }, ...content.navigation];
  const otherLocale = locale === "zh" ? `/en${path}` : path.replace(/^\/en/, "") || "/";

  return <header className="personal-chapter__header"><Link href={locale === "zh" ? "/" : "/en"} className="personal-chapter__mark" aria-label={content.ui.home}>AJ</Link><nav>{navigation.map((entry: any) => <Link href={entry.href} key={entry.href}>{entry.label}</Link>)}</nav><Link className="personal-chapter__locale" href={otherLocale}>{content.ui.language}</Link></header>;
}

function VideoCover({ video, featured, playLabel, onOpen }: { video: any; featured?: boolean; playLabel: string; onOpen: () => void }) {
  return <button type="button" className={`music-video-cover${featured ? " music-video-cover--featured" : ""}`} onClick={onOpen} aria-label={`${playLabel} ${video.title}`}>
    <img src={video.poster} alt="" />
    <span className="music-video-cover__veil" aria-hidden="true" />
    <span className="music-video-cover__play" aria-hidden="true"><i>▶</i></span>
  </button>;
}

function MusicPlayerModal({ video, music, onClose }: { video: any; music: any; onClose: () => void }) {
  const player = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const togglePlayback = async () => {
    if (!player.current) return;
    if (player.current.paused) await player.current.play();
    else player.current.pause();
  };

  const enterFullscreen = () => {
    const target = player.current;
    if (!target) return;
    if (target.requestFullscreen) void target.requestFullscreen();
    else (target as HTMLVideoElement & { webkitEnterFullscreen?: () => void }).webkitEnterFullscreen?.();
  };

  return <div className="music-player-modal" role="dialog" aria-modal="true" aria-label={video.title} onMouseDown={onClose}>
    <div className="music-player-modal__panel" onMouseDown={(event) => event.stopPropagation()}>
      <button className="music-player-modal__close" type="button" onClick={onClose} aria-label={music.closeLabel}>×</button>
      <div className="music-player-modal__screen">
        <video ref={player} autoPlay playsInline preload="metadata" poster={video.poster} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} onEnded={() => setIsPlaying(false)}><source src={video.src} type="video/mp4" /></video>
        <button className={`music-player-modal__toggle${isPlaying ? " is-playing" : ""}`} type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pause" : music.playLabel}><i>{isPlaying ? "Ⅱ" : "▶"}</i></button>
      </div>
      <div className="music-player-modal__meta"><div><span>{video.date}</span><h2>{video.title}</h2><p>{video.description}</p></div><button type="button" onClick={enterFullscreen}>{music.fullscreenLabel} <b>↗</b></button></div>
    </div>
  </div>;
}

export function MusicArchive({ content, locale, item }: { content: any; locale: "zh" | "en"; item: any }) {
  const backHref = locale === "zh" ? "/life" : "/en/life";
  const music = content.life.musicArchive;
  const [activeVideo, setActiveVideo] = useState<any | null>(null);
  const [featured, ...galleryVideos] = music.videos;

  return <main className="personal-chapter life-detail music-archive"><AmbientBackground variant="life" /><MusicHeader content={content} locale={locale} path={`${backHref}/music`} />
    <section className="life-detail__intro music-archive__intro"><ScrollReveal><Link href={backHref} className="life-detail__back">← {locale === "zh" ? "返回生活" : "Back to Life"}</Link><span className="music-archive__number">{music.number}</span><p>{item.label}</p><h1>{item.title}</h1><span>{item.intro}</span></ScrollReveal></section>
    <section className="music-archive__showcase" aria-label={music.label}>
      <ScrollReveal><div className="music-archive__heading"><span>{music.featuredLabel}</span><p>{music.note}</p></div></ScrollReveal>
      {featured && <ScrollReveal delay={80}><article className="music-featured"><VideoCover video={featured} featured playLabel={music.playLabel} onOpen={() => setActiveVideo(featured)} /><div className="music-featured__meta"><span>{featured.date}</span><h2>{featured.title}</h2><p>{featured.description}</p><button type="button" onClick={() => setActiveVideo(featured)}>{music.playLabel} <b>→</b></button></div></article></ScrollReveal>}
      <div className="music-gallery-heading"><span>{music.galleryLabel}</span><i /></div>
      <div className="music-gallery-grid">{galleryVideos.map((video: any, index: number) => <ScrollReveal className="music-gallery-grid__reveal" delay={index * 90} key={video.title}><article className="music-gallery-card"><VideoCover video={video} playLabel={music.playLabel} onOpen={() => setActiveVideo(video)} /><div><span>{video.date}</span><h2>{video.title}</h2><p>{video.description}</p></div></article></ScrollReveal>)}</div>
    </section>
    {activeVideo && <MusicPlayerModal video={activeVideo} music={music} onClose={() => setActiveVideo(null)} />}
  </main>;
}
