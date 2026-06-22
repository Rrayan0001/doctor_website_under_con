"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ui/ScrollAnimations";

export default function TestimonialsSection() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(100);

  const featuredQuotes = t.testimonials.featured || [];
  const cards = t.testimonials.cards || [];

  // Reset index on language change to prevent NaN/out-of-bounds state during hydration
  useEffect(() => {
    setCurrentIndex(0);
    setOpacity(100);
  }, [language]);

  useEffect(() => {
    if (!featuredQuotes || featuredQuotes.length === 0) return;
    const interval = setInterval(() => {
      // Fade out
      setOpacity(0);
      setTimeout(() => {
        // Change text with robust index wrap check
        setCurrentIndex((prev) => {
          if (isNaN(prev) || prev >= featuredQuotes.length - 1) return 0;
          return prev + 1;
        });
        // Fade in
        setOpacity(100);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredQuotes.length]);

  const currentQuote = featuredQuotes[currentIndex] || featuredQuotes[0] || { text: "", attribution: "" };

  return (
    <section id="testimonials" className="py-20 bg-bg scroll-mt-20 relative overflow-hidden">
      {/* Ambient floating particles */}
      <div className="ambient-particle w-2 h-2 bg-accent/15 top-[20%] left-[10%]" style={{ animationDelay: "1s" }} />
      <div className="ambient-particle w-3 h-3 bg-primary/10 bottom-[30%] right-[8%]" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Section Label */}
        <div className="mb-12 text-left">
          <ScrollReveal variant="fade-up" delay={0}>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-4 block animated-gradient-text">
              {t.testimonials.badge}
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={150} duration={900}>
            <h2 className="font-display text-[2.2rem] sm:text-[3rem] font-bold text-primary-dark leading-tight">
              {t.testimonials.title}
            </h2>
          </ScrollReveal>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Featured Quote Display (5/12 width) */}
          <ScrollReveal variant="fade-right" duration={1000} className="lg:col-span-5">
            <div className="bg-white border border-primary/5 rounded-2xl p-8 sm:p-10 shadow-sm relative min-h-[320px] flex flex-col justify-between shimmer-card">

              {/* Giant quotation mark in Cormorant */}
              <span className="absolute top-2 left-6 font-display text-[8rem] font-bold text-primary opacity-15 leading-none select-none pointer-events-none">
                &ldquo;
              </span>

              {/* Dynamic quote container */}
              <div
                className="transition-all duration-300 flex-grow flex flex-col justify-center mt-6 text-left"
                style={{ opacity: opacity / 100, transform: `translateY(${(100 - opacity) / 15}px)` }}
              >
                <p className="font-display italic text-[1.4rem] sm:text-[1.6rem] text-primary-dark leading-relaxed mb-6 font-medium">
                  &ldquo;{currentQuote.text}&rdquo;
                </p>

                <div className="flex flex-col">
                  <span className="font-sans text-sm font-semibold text-text-muted">
                    {currentQuote.attribution}
                  </span>

                  {/* 5 Gold Stars */}
                  <div className="flex gap-1 text-accent mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Right Column: Stacked testimonial cards (7/12 width) */}
          <div className="lg:col-span-7 flex flex-col gap-4 pt-4 lg:pt-0">
            {cards.map((card, idx) => (
              <ScrollReveal key={idx} variant="fade-left" delay={idx * 120 + 200} duration={700}>
                <div
                  className="bg-white border border-primary/5 p-6 rounded-2xl shadow-sm testimonial-card-lift shimmer-card"
                  style={{
                    zIndex: 10 + idx,
                    marginTop: idx > 0 ? "-16px" : "0px",
                  }}
                >
                  <div className="flex flex-col gap-3 text-left">
                    {/* Star Rating */}
                    <div className="flex gap-0.5 text-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    <p className="font-sans italic text-sm text-text-muted leading-relaxed">
                      &ldquo;{card.quote}&rdquo;
                    </p>

                    <div className="flex justify-between items-center mt-1 border-t border-primary/5 pt-2.5">
                      <span className="font-sans text-xs font-bold text-primary-dark">
                        {card.author}
                      </span>
                      <span className="font-sans text-[10px] uppercase font-bold tracking-wider text-accent">
                        {card.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
