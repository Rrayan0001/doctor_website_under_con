"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  tag: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    // Autoplay interval of 4500ms
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4500);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Viewport Container */}
      <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_80%] lg:flex-[0_0_50%] px-4"
            >
              {/* Card Container with clean light styling */}
              <div className="bg-white border border-primary/5 hover:border-accent/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-md h-full flex flex-col justify-between relative group overflow-hidden min-h-[250px]">
                {/* Visual accent backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Large quotation mark decoration */}
                <span className="absolute top-2 left-4 font-display text-[9rem] leading-none text-accent/10 select-none pointer-events-none">
                  &ldquo;
                </span>

                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4 text-accent justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Quote content */}
                  <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed italic mb-6 text-justify">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Attribution footer */}
                <div className="relative z-10 flex flex-col items-center border-t border-primary/5 pt-4 mt-auto w-full text-center">
                  <div className="flex flex-col items-center">
                    <span className="font-display text-base font-bold text-primary-dark">
                      {item.author}
                    </span>
                    <span className="font-sans text-xs text-accent font-medium uppercase tracking-wider mt-0.5">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pill-shaped Dot Indicators */}
      <div className="flex items-center gap-2 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ease-out cursor-pointer ${
              index === selectedIndex
                ? "w-6 bg-accent"
                : "w-2 bg-primary/20 hover:bg-primary/45"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
