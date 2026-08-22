"use client";

import { useEffect, useState } from "react";
import { INTRO_VIDEO_SRC } from "../content/site";

export function CareerIntro({ onComplete }: { onComplete: () => void }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const beginTransition = window.setTimeout(() => setLeaving(true), 6500);
    const finish = window.setTimeout(onComplete, 7600);
    return () => {
      window.clearTimeout(beginTransition);
      window.clearTimeout(finish);
    };
  }, [onComplete]);

  return (
    <section className={`career-intro ${leaving ? "career-intro--leaving" : ""}`} aria-label="职业档案介绍">
      <video className="career-intro__video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
        <source src={INTRO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="career-intro__shade" aria-hidden="true" />
      <div className="career-intro__copy">
        <p>职业档案</p>
        <h1>Career Journey</h1>
        <strong>数学 × 人工智能 × 产品构建</strong>
        <span>记录学习、实践与创造过程。</span>
      </div>
      <div className="career-intro__progress" aria-hidden="true"><i /></div>
    </section>
  );
}
