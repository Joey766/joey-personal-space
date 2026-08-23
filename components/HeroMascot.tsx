"use client";

import { useState, type MouseEvent, type PointerEvent } from "react";
import "./hero-mascot.css";

export function HeroMascot({ locale }: { locale: "zh" | "en" }) {
  const [isBouncing, setIsBouncing] = useState(false);
  const [isOrbitOpen, setIsOrbitOpen] = useState(false);

  const handleMove = (event: MouseEvent<HTMLButtonElement>) => {
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
    if (event.pointerType !== "touch" && !window.matchMedia("(max-width: 760px), (hover: none), (pointer: coarse)").matches) setIsOrbitOpen(true);
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
      <div className="mascot-orbit-items" aria-hidden="true">
        <span className="mascot-orbit-item mascot-orbit-football"><img src="/images/mascot/football.png" alt="" /></span>
        <span className="mascot-orbit-item mascot-orbit-chess"><img src="/images/mascot/chess.png" alt="" /></span>
        <span className="mascot-orbit-item mascot-orbit-piano"><img src="/images/mascot/piano.png" alt="" /></span>
      </div>
      <button
        className={`hero-mascot${isBouncing ? " is-bouncing" : ""}`}
        type="button"
        aria-label={locale === "zh" ? "欢迎来到我的个人空间" : "Welcome to my Personal Space"}
        aria-expanded={isOrbitOpen}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={() => {
          setIsBouncing(true);
          if (window.matchMedia("(max-width: 760px), (hover: none), (pointer: coarse)").matches) {
            setIsOrbitOpen((open) => !open);
          }
          window.setTimeout(() => setIsBouncing(false), 480);
        }}
      >
        <span className="mascot-figure"><img src="/images/mascot/hero-mascot.png" alt="" /></span>
      </button>
    </div>
  );
}
