"use client";

import React from "react";
import Image from "next/image";

interface MarqueeItem {
  src: string;
  alt: string;
  title?: string;
}

interface InfiniteMarqueeProps {
  items: MarqueeItem[];
  speed?: number; // duration in seconds
  reverse?: boolean;
}

export default function InfiniteMarquee({
  items,
  speed = 30,
  reverse = false,
}: InfiniteMarqueeProps) {
  // Triple the list to ensure seamless looping without empty gaps
  const tripledItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-8 select-none group/marquee">
      {/* Scrolling container */}
      <div
        className="flex gap-6 w-max animate-marquee-loop group-hover/marquee:[animation-play-state:paused]"
        style={{
          animationName: reverse ? "marquee-reverse" : "marquee",
          animationDuration: `${speed}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {tripledItems.map((item, idx) => (
          <div
            key={idx}
            className="relative w-64 h-44 sm:w-80 sm:h-56 rounded-2xl overflow-hidden shadow-md flex-shrink-0 group cursor-pointer border border-primary/5 bg-[#faf8f4]"
          >
            {/* Image zooms in on hover over 700ms */}
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-w-768px) 250px, 320px"
              className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-105"
            />
            {/* Ambient hover overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-[700ms] ease-out z-10" />
          </div>
        ))}
      </div>
    </div>
  );
}
