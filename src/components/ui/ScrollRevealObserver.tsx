"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight Intersection Observer hook that adds `in-view` class
 * to elements with `.reveal-up`, `.reveal-fade`, or `.reveal-scale`
 * when they enter the viewport.
 */
export default function ScrollRevealObserver() {
  const observed = useRef(false);

  useEffect(() => {
    if (observed.current) return;
    observed.current = true;

    const targets = document.querySelectorAll(
      ".reveal-up, .reveal-fade, .reveal-scale"
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null; // purely behavioral, no DOM output
}
