"use client";

import { useEffect, useRef, useState, type MouseEvent, type PointerEvent } from "react";
import "./hero-mascot.css";

export function HeroMascot({ locale }: { locale: "zh" | "en" }) {
  const [isBouncing, setIsBouncing] = useState(false);
  const [isOrbitOpen, setIsOrbitOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const bounceTimer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(bounceTimer.current), []);
  const openOrbit = () => { setHasOpened(true); setIsOrbitOpen(true); };

  const handleMove = (event: MouseEvent<HTMLButtonElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    event.currentTarget.style.setProperty("--mascot-x", `${x * 5}px`);
    event.currentTarget.style.setProperty("--mascot-y", `${y * 4}px`);
  };

  const handleLeave = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.style.setProperty("--mascot-x", "0px");
    event.currentTarget.style.setProperty("--mascot-y", "0px");
  };

  const handleOrbitEnter = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch" && !window.matchMedia("(max-width: 760px), (hover: none), (pointer: coarse)").matches) openOrbit();
  };

  const handleOrbitLeave = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch" && !window.matchMedia("(max-width: 760px), (hover: none), (pointer: coarse)").matches) setIsOrbitOpen(false);
  };

  return (
    <div
      className={`hero-mascot-orbit${isOrbitOpen ? " is-open" : ""}`}
      onPointerEnter={handleOrbitEnter}
      onPointerLeave={handleOrbitLeave}
    >
      {hasOpened && <div className="mascot-orbit-items" id="mascot-interests" aria-hidden={!isOrbitOpen}>
        <span className="mascot-orbit-item mascot-orbit-football"><img src="/images/mascot/football.webp" alt={locale === "zh" ? "足球" : "Football"} width="240" height="240" decoding="async" /></span>
        <span className="mascot-orbit-item mascot-orbit-chess"><img src="/images/mascot/chess.webp" alt={locale === "zh" ? "国际象棋" : "Chess"} width="240" height="240" decoding="async" /></span>
        <span className="mascot-orbit-item mascot-orbit-piano"><img src="/images/mascot/piano.webp" alt={locale === "zh" ? "钢琴" : "Piano"} width="240" height="240" decoding="async" /></span>
      </div>}
      <button
        className={`hero-mascot${isBouncing ? " is-bouncing" : ""}`}
        type="button"
        aria-label={locale === "zh" ? "展示或收起我的兴趣：足球、国际象棋和钢琴" : "Show or hide my interests: football, chess and piano"}
        aria-expanded={isOrbitOpen}
        aria-controls={hasOpened ? "mascot-interests" : undefined}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onKeyDown={(event) => { if (event.key === "Escape") setIsOrbitOpen(false); }}
        onClick={() => {
          setHasOpened(true);
          setIsOrbitOpen((open) => !open);
          if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setIsBouncing(true);
            window.clearTimeout(bounceTimer.current);
            bounceTimer.current = window.setTimeout(() => setIsBouncing(false), 480);
          }
        }}
      >
        <span className="mascot-figure"><img src="/images/mascot/hero-mascot-localized.webp" alt="" width="640" height="640" decoding="async" /><span className="mascot-speech" aria-hidden="true">{locale === "zh" ? <>欢迎来到<br />我的空间</> : <>Welcome to<br />my space</>}<i aria-hidden="true">✦</i></span></span>
      </button>
    </div>
  );
}
