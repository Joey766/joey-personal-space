"use client";

import { useEffect, useRef, useState } from "react";
import { SafeLink as Link } from "./SafeLink";
import { AmbientBackground } from "./AmbientBackground";
import { ScrollReveal } from "./ScrollReveal";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useAccessibleDialog } from "./useAccessibleDialog";
import "./personal-chapters.css";
import "./life-archive.css";
import "./music-archive.css";

type MusicVideo = {
  title: string;
  date: string;
  description: string;
  src: string;
  poster: string;
};

export type MusicContent = {
  number: string;
  label: string;
  featuredLabel: string;
  galleryLabel: string;
  note: string;
  playLabel: string;
  fullscreenLabel: string;
  closeLabel: string;
  videos: readonly MusicVideo[];
};

export type LifeArchiveItem = { slug: string; label: string; title: string; intro: string };

function VideoCover({ video, featured = false, playLabel, onOpen }: {
  video: MusicVideo;
  featured?: boolean;
  playLabel: string;
  onOpen: () => void;
}) {
  return <button type="button" className={`music-video-cover${featured ? " music-video-cover--featured" : ""}`} onClick={onOpen} aria-label={`${playLabel} ${video.title}`} aria-haspopup="dialog">
    <img src={video.poster} alt="" width={1280} height={720} loading={featured ? "eager" : "lazy"} decoding="async" />
    <span className="music-video-cover__veil" aria-hidden="true" />
    <span className="music-video-cover__play" aria-hidden="true"><i>▶</i></span>
  </button>;
}

function MusicPlayerModal({ video, music, locale, onClose }: {
  video: MusicVideo;
  music: MusicContent;
  locale: "zh" | "en";
  onClose: () => void;
}) {
  const player = useRef<HTMLVideoElement>(null);
  const dialog = useAccessibleDialog(true, onClose);
  const [error, setError] = useState<"media" | "fullscreen" | null>(null);

  useEffect(() => {
    const element = player.current;
    if (!element) return;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Opening is intentional, but motion-sensitive visitors still choose when to play.
    // Browser autoplay restrictions are handled by the native playback controls.
    if (!motionPreference.matches) void element.play().catch(() => undefined);
    const handleMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) element.pause();
    };
    motionPreference.addEventListener("change", handleMotionChange);
    return () => {
      motionPreference.removeEventListener("change", handleMotionChange);
      element.pause();
    };
  }, []);

  const enterFullscreen = async () => {
    const target = player.current;
    if (!target) return;
    try {
      if (target.requestFullscreen) await target.requestFullscreen();
      else {
        const safariPlayer = target as HTMLVideoElement & { webkitEnterFullscreen?: () => void };
        if (safariPlayer.webkitEnterFullscreen) safariPlayer.webkitEnterFullscreen();
        else setError("fullscreen");
      }
    } catch {
      setError("fullscreen");
    }
  };

  return <dialog ref={dialog} className="music-player-modal" aria-modal="true" aria-labelledby="music-player-title" tabIndex={-1}>
    <div className="music-player-modal__panel">
      <button className="music-player-modal__close" type="button" onClick={onClose} aria-label={music.closeLabel} data-dialog-initial-focus>×</button>
      <div className="music-player-modal__screen">
        {/* These existing concert recordings have no supplied caption tracks. */}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video ref={player} controls playsInline preload="metadata" poster={video.poster} aria-label={video.title} onError={() => setError("media")}>
          <source src={video.src} type="video/mp4" onError={() => setError("media")} />
          {locale === "zh" ? "当前浏览器无法播放这段视频。" : "Your browser cannot play this video."}
        </video>
      </div>
      <div className="music-player-modal__meta">
        <div><span>{video.date}</span><h2 id="music-player-title">{video.title}</h2><p>{video.description}</p></div>
        <button type="button" onClick={() => void enterFullscreen()}>{music.fullscreenLabel} <b aria-hidden="true">↗</b></button>
      </div>
      {error && <p className="music-player-modal__status" role="status">
        {error === "media" ? <>{locale === "zh" ? "视频暂时无法播放。" : "The video could not be loaded."} <a href={video.src} target="_blank" rel="noopener noreferrer">{locale === "zh" ? "直接打开视频" : "Open the video directly"}</a></> : (locale === "zh" ? "当前浏览器未能进入全屏，你仍可以在此播放。" : "Fullscreen is unavailable. You can continue watching here.")}
      </p>}
    </div>
  </dialog>;
}

export function MusicArchive({ content, locale, item }: {
  content: { life: { musicArchive: MusicContent } };
  locale: "zh" | "en";
  item: LifeArchiveItem;
}) {
  const backHref = locale === "zh" ? "/life" : "/en/life";
  const music = content.life.musicArchive;
  const [activeVideo, setActiveVideo] = useState<MusicVideo | null>(null);
  const [featured, ...galleryVideos] = music.videos;

  return <main className="personal-chapter life-detail music-archive">
    <AmbientBackground variant="life" />
    <SiteHeader locale={locale} path="/life/music" />
    <section className="life-detail__intro music-archive__intro"><ScrollReveal>
      <Link href={backHref} className="life-detail__back">← {locale === "zh" ? "返回生活" : "Back to Life"}</Link>
      <span className="music-archive__number">{music.number}</span><p>{item.label}</p><h1>{item.title}</h1><span>{item.intro}</span>
    </ScrollReveal></section>
    <section className="music-archive__showcase" aria-label={music.label}>
      <ScrollReveal><div className="music-archive__heading"><span>{music.featuredLabel}</span><p>{music.note}</p></div></ScrollReveal>
      {featured && <ScrollReveal delay={80}><article className="music-featured">
        <VideoCover video={featured} featured playLabel={music.playLabel} onOpen={() => setActiveVideo(featured)} />
        <div className="music-featured__meta"><span>{featured.date}</span><h2>{featured.title}</h2><p>{featured.description}</p><button type="button" onClick={() => setActiveVideo(featured)} aria-haspopup="dialog">{music.playLabel} <b aria-hidden="true">→</b></button><noscript><a className="music-video-fallback" href={featured.src}>{locale === "zh" ? "直接打开视频" : "Open video"}</a></noscript></div>
      </article></ScrollReveal>}
      <div className="music-gallery-heading"><span>{music.galleryLabel}</span><i aria-hidden="true" /></div>
      <div className="music-gallery-grid">{galleryVideos.map((video, index) => <ScrollReveal className="music-gallery-grid__reveal" delay={index * 90} key={video.src}>
        <article className="music-gallery-card"><VideoCover video={video} playLabel={music.playLabel} onOpen={() => setActiveVideo(video)} /><div><span>{video.date}</span><h2>{video.title}</h2><p>{video.description}</p><noscript><a className="music-video-fallback" href={video.src}>{locale === "zh" ? "直接打开视频" : "Open video"}</a></noscript></div></article>
      </ScrollReveal>)}</div>
    </section>
    <SiteFooter locale={locale} />
    {activeVideo && <MusicPlayerModal key={activeVideo.src} video={activeVideo} music={music} locale={locale} onClose={() => setActiveVideo(null)} />}
  </main>;
}
