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
            {/* Overlay gradient darkens on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-40 group-hover:opacity-85 transition-opacity duration-[700ms] ease-out flex flex-col justify-end p-4 z-10">
              {item.title && (
                <p className="font-display text-base sm:text-lg font-bold text-white tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-[700ms] ease-out">
                  {item.title}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
