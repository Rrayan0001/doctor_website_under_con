"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number; // Target number to reach
  duration?: number; // Total duration in ms
  prefix?: string; // Leading text/symbol
  suffix?: string; // Trailing text/symbol
  decimals?: number; // Decimals place precision
  className?: string; // Tailwind/custom styling
}

export default function AnimatedCounter({
  value,
  duration = 1800, // Default 1.8s
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: AnimatedCounterProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;

    // smooth cubic ease-out curve
    const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentValue = easedProgress * value;

      if (spanRef.current) {
        spanRef.current.textContent = currentValue.toFixed(decimals);
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else if (spanRef.current) {
        // Guarantee the exact target value at the end
        spanRef.current.textContent = value.toFixed(decimals);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView, value, duration, decimals]);

  return (
    <span ref={containerRef} className={className}>
      {prefix}
      <span ref={spanRef}>0</span>
      {suffix}
    </span>
  );
}
