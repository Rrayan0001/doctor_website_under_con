"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollParallaxProps {
  children?: React.ReactNode;
  bgContent: React.ReactNode; // Background elements/images
  fgContent?: React.ReactNode; // Foreground elements/titles
  className?: string;
  containerHeight?: string; // height of the container
}

export default function ScrollParallax({
  children,
  bgContent,
  fgContent,
  className = "",
  containerHeight = "h-[400px] sm:h-[500px]",
}: ScrollParallaxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [supportTimeline, setSupportTimeline] = useState(true);
  const [offsetBg, setOffsetBg] = useState(0);
  const [offsetFg, setOffsetFg] = useState(0);

  useEffect(() => {
    // Check if browser supports Scroll-driven view timelines
    const isSupported =
      typeof window !== "undefined" &&
      window.CSS &&
      window.CSS.supports &&
      window.CSS.supports("animation-timeline: view()") &&
      window.CSS.supports("animation-range: entry");

    setSupportTimeline(isSupported);

    if (isSupported) return;

    // Passive JS Fallback logic
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;

      // Only perform calculations when component is within viewport
      if (rect.top < viewHeight && rect.bottom > 0) {
        const scrolled = window.scrollY || document.documentElement.scrollTop;
        
        // CSS fallback formulas matching requirements
        // Background: translateY = scrolled * 0.15
        // Foreground: translateY = scrolled * -0.06
        setOffsetBg(scrolled * 0.15);
        setOffsetFg(scrolled * -0.06);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`parallax-container relative overflow-hidden w-full ${containerHeight} ${className}`}
      style={{
        viewTimeline: "--section-scroll block",
      } as React.CSSProperties}
    >
      {/* Background Layer */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] parallax-bg z-0"
        style={
          supportTimeline
            ? undefined
            : { transform: `translateY(${offsetBg}px)` }
        }
      >
        {bgContent}
      </div>

      {/* Foreground Title/Content Layer */}
      {fgContent && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none parallax-fg"
          style={
            supportTimeline
              ? undefined
              : { transform: `translateY(${offsetFg}px)` }
          }
        >
          {fgContent}
        </div>
      )}

      {/* Main Container Content */}
      <div className="relative z-20 w-full h-full">
        {children}
      </div>
    </div>
  );
}
