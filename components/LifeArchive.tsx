"use client";

import { SafeLink as Link } from "./SafeLink";
import { AmbientBackground } from "./AmbientBackground";
import { MusicArchive, type LifeArchiveItem, type MusicContent } from "./MusicArchive";
import { ScrollReveal } from "./ScrollReveal";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import "./personal-chapters.css";
import "./life-archive.css";

type LifeArchiveContent = {
  life: {
    archive: readonly LifeArchiveItem[];
    musicArchive: MusicContent;
  };
};

export function LifeArchive({ content, locale, slug }: {
  content: LifeArchiveContent;
  locale: "zh" | "en";
  slug: string;
}) {
  const item = content.life.archive.find((entry) => entry.slug === slug);
  const backHref = locale === "zh" ? "/life" : "/en/life";

  if (!item) return null;
  if (slug === "music") return <MusicArchive content={content} locale={locale} item={item} />;

  // Category data remains available for future real archives. The route layer
  // currently redirects unpublished categories to Life instead of showing fake photos.
  return <main className="personal-chapter life-detail">
    <AmbientBackground variant="life" />
    <SiteHeader locale={locale} path={`/life/${slug}`} />
    <section className="life-detail__intro"><ScrollReveal>
      <Link href={backHref} className="life-detail__back">← {locale === "zh" ? "返回生活" : "Back to Life"}</Link>
      <p>{item.label}</p><h1>{item.title}</h1><span>{item.intro}</span>
    </ScrollReveal></section>
    <SiteFooter locale={locale} />
  </main>;
}
