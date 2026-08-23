"use client";

import Link from "next/link";
import { useState } from "react";
import { AmbientParticles } from "./AmbientParticles";
import { ScrollReveal } from "./ScrollReveal";
import "./explore-atlas.css";

const routeMap: Record<string, string> = {
  "#top": "/",
  "#about": "/explore",
  "#career": "/work",
  "#projects": "/projects",
  "#life": "/life",
};

export function ExploreAtlas({ content, locale }: { content: any; locale: "zh" | "en" }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  const base = locale === "zh" ? "" : "/en";
  const linkFor = (href: string) => `${base}${routeMap[href] ?? href}`;
  const otherLocale = locale === "zh" ? "/en/explore" : "/explore";
  const about = content.about;

  return <main className="explore-atlas">
    <AmbientParticles variant="explore" />
    <header className="explore-atlas__header">
      <Link className="explore-atlas__monogram" href={base || "/"} aria-label="AJ">AJ</Link>
      <nav>{content.nav.map((item: any) => <Link href={linkFor(item.href)} key={item.label}>{item.label}</Link>)}</nav>
      <Link className="explore-atlas__locale" href={otherLocale}>{content.language}</Link>
    </header>

    <section className="explore-atlas__hero">
      <ScrollReveal><p>{locale === "zh" ? "01 / 探索" : "01 / EXPLORE"}</p><h1>{about.title}</h1><h2>{about.lead}</h2></ScrollReveal>
    </section>

    <section className="explore-atlas__capabilities" aria-label={about.title}>
      {about.cards.map((card: any, index: number) => {
        const isExpanded = expanded === index;
        return <ScrollReveal key={card.title} delay={index * 80}><article className={isExpanded ? "is-expanded" : ""}>
          <button type="button" onClick={() => setExpanded(isExpanded ? null : index)} aria-expanded={isExpanded}>
            <span>0{index + 1}</span><h3>{card.title}</h3><i>{isExpanded ? "−" : "+"}</i>
          </button>
          <div className="explore-atlas__card-copy"><p>{card.copy}</p><div>{card.tags.map((tag: string) => <span key={tag}>{tag}</span>)}</div></div>
          <div className="explore-atlas__details" aria-hidden={!isExpanded}>{card.detail}</div>
        </article></ScrollReveal>;
      })}
    </section>

    <section className="explore-atlas__timeline">
      <ScrollReveal><div className="explore-atlas__section-title"><span>02</span><h2>{about.timelineTitle}</h2><p>{about.timelineLead}</p></div></ScrollReveal>
      <div className="explore-atlas__timeline-list">
        {about.timeline.map((item: any, index: number) => <ScrollReveal key={item.year} delay={index * 80}><article><time>{item.year}</time><i aria-hidden="true" /><div><p>{item.copy}</p>{item.items && <ul>{item.items.map((entry: string) => <li key={entry}>{entry}</li>)}</ul>}</div></article></ScrollReveal>)}
      </div>
    </section>
  </main>;
}
