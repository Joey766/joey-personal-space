"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import "./reveal.css";

export function ScrollReveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches || typeof IntersectionObserver === "undefined") return;

    let observer: IntersectionObserver | undefined;
    const show = () => {
      delete node.dataset.reveal;
      setVisible(true);
      observer?.disconnect();
    };
    const handleMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) show();
    };

    try {
      observer = new IntersectionObserver(([entry]) => {
        if (entry?.isIntersecting) show();
      }, { threshold: 0.08 });
      // Server-rendered content and content already on screen stay readable.
      // Only content below the viewport is prepared for an entrance animation.
      if (node.getBoundingClientRect().top >= window.innerHeight) node.dataset.reveal = "pending";
      observer.observe(node);
      motionPreference.addEventListener("change", handleMotionChange);
    } catch {
      delete node.dataset.reveal;
    }

    return () => {
      observer?.disconnect();
      motionPreference.removeEventListener("change", handleMotionChange);
      delete node.dataset.reveal;
    };
  }, []);

  return <div ref={ref} className={`scroll-reveal ${visible ? "scroll-reveal--visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
