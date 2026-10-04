"use client";

import { useState } from "react";
import { AmbientBackground } from "./AmbientBackground";
import { ScrollReveal } from "./ScrollReveal";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import type { Locale } from "../content/routes";
import "./explore-atlas.css";

type ExploreContent = {
  about: {
    title: string;
    lead: string;
    copy: string[];
    cards: Array<{ title: string; copy: string; detail: string; tags: string[] }>;
    timelineTitle: string;
    timelineLead: string;
    timeline: Array<{ year: string; copy: string; items?: string[] }>;
  };
};

export function ExploreAtlas({ content, locale }: { content: ExploreContent; locale: Locale }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  const about = content.about;

  return <main className="explore-atlas">
    <AmbientBackground variant="explore" />
    <SiteHeader locale={locale} path="/explore" />

    <section className="explore-atlas__hero" aria-labelledby="explore-title">
      <ScrollReveal>
        <p className="explore-atlas__eyebrow">{locale === "zh" ? "01 / 探索" : "01 / EXPLORE"}</p>
        <h1 id="explore-title">{about.title}</h1>
        <p className="explore-atlas__lead">{about.lead}</p>
        <div className="explore-atlas__story">{about.copy.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </ScrollReveal>
    </section>

    <section className="explore-atlas__capabilities" aria-label={locale === "zh" ? "探索的三个方向" : "Three areas of exploration"}>
      {about.cards.map((card, index) => {
        const isExpanded = expanded === index;
        const detailId = `explore-detail-${index}`;
        return <ScrollReveal key={card.title} delay={index * 80}><article className={isExpanded ? "is-expanded" : ""}>
          <h2><button type="button" onClick={() => setExpanded(isExpanded ? null : index)} aria-expanded={isExpanded} aria-controls={detailId}>
            <span className="explore-atlas__card-number" aria-hidden="true">0{index + 1}</span><span className="explore-atlas__card-title">{card.title}</span><i aria-hidden="true">{isExpanded ? "−" : "+"}</i>
          </button></h2>
          <div className="explore-atlas__card-copy"><p>{card.copy}</p><ul>{card.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
          <div id={detailId} className="explore-atlas__details" hidden={!isExpanded}>{card.detail}</div>
        </article></ScrollReveal>;
      })}
    </section>

    <section className="explore-atlas__timeline" aria-labelledby="explore-timeline-title">
      <ScrollReveal><div className="explore-atlas__section-title"><span aria-hidden="true">02</span><h2 id="explore-timeline-title">{about.timelineTitle}</h2><p>{about.timelineLead}</p></div></ScrollReveal>
      <div className="explore-atlas__timeline-list">
        {about.timeline.map((item, index) => <ScrollReveal key={item.year} delay={index * 80}><article><time dateTime={item.year}>{item.year}</time><i aria-hidden="true" /><div><p>{item.copy}</p>{item.items && <ul>{item.items.map((entry) => <li key={entry}>{entry}</li>)}</ul>}</div></article></ScrollReveal>)}
      </div>
    </section>
    <SiteFooter locale={locale} />
  </main>;
}
