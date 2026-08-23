"use client";

import { useRef, useState } from "react";
import { SafeLink as Link } from "./SafeLink";
import { AmbientBackground } from "./AmbientBackground";
import { MusicArchive } from "./MusicArchive";
import { ScrollReveal } from "./ScrollReveal";
import "./life-archive.css";

const slideNames = ["01", "02", "03", "04", "05"];

function LifeHeader({ content, locale, path }: { content: any; locale: "zh" | "en"; path: string }) {
  const navigation = [{ label: content.ui.home, href: locale === "zh" ? "/" : "/en" }, ...content.navigation];
  const otherLocale = locale === "zh" ? `/en${path}` : path.replace(/^\/en/, "") || "/";
  return <header className="personal-chapter__header"><Link href={locale === "zh" ? "/" : "/en"} className="personal-chapter__mark" aria-label={content.ui.home}>AJ</Link><nav>{navigation.map((item: any) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav><Link className="personal-chapter__locale" href={otherLocale}>{content.ui.language}</Link></header>;
}

function relativeOffset(index: number, active: number, length: number) {
  let offset = index - active;
  if (offset > length / 2) offset -= length;
  if (offset < -length / 2) offset += length;
  return offset;
}

export function LifeArchive({ content, locale, slug }: { content: any; locale: "zh" | "en"; slug: string }) {
  const item = content.life.archive.find((entry: any) => entry.slug === slug);
  const [active, setActive] = useState(0);
  const startX = useRef<number | null>(null);
  const backHref = locale === "zh" ? "/life" : "/en/life";

  if (!item) return null;
  if (slug === "music") return <MusicArchive content={content} locale={locale} item={item} />;
  const move = (direction: number) => setActive((current) => (current + direction + slideNames.length) % slideNames.length);
  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => { startX.current = event.clientX; };
  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return;
    const distance = event.clientX - startX.current;
    startX.current = null;
    if (Math.abs(distance) > 42) move(distance < 0 ? 1 : -1);
  };

  return <main className="personal-chapter life-detail"><AmbientBackground variant="life" /><LifeHeader content={content} locale={locale} path={`${backHref}/${slug}`} /><section className="life-detail__intro"><ScrollReveal><Link href={backHref} className="life-detail__back">← {locale === "zh" ? "返回生活" : "Back to Life"}</Link><p>{item.label}</p><h1>{item.title}</h1><span>{item.intro}</span></ScrollReveal></section><section className="life-gallery" aria-label={`${item.title} ${content.life.galleryLabel}`}><ScrollReveal><div className="life-gallery__heading"><span>{content.life.galleryLabel}</span><p>{content.life.galleryNote}</p></div></ScrollReveal><div className="life-gallery__viewport" onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerCancel={() => { startX.current = null; }}>{slideNames.map((number, index) => { const offset = relativeOffset(index, active, slideNames.length); return <button type="button" key={number} className={`life-gallery__slide life-gallery__slide--${slug}`} data-active={offset === 0} style={{ "--offset": offset } as React.CSSProperties} onClick={() => setActive(index)} aria-label={`${content.life.galleryLabel} ${number}`}><span>{number}</span><i>{item.title}</i></button>; })}</div><div className="life-gallery__controls"><button type="button" onClick={() => move(-1)} aria-label="Previous photo">←</button><span>{String(active + 1).padStart(2, "0")} / {slideNames.length}</span><button type="button" onClick={() => move(1)} aria-label="Next photo">→</button></div></section></main>;
}
