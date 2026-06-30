"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ui/ScrollAnimations";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const cards = t.testimonials.cards || [];

  return (
    <section id="testimonials" className="py-20 bg-bg scroll-mt-20 relative overflow-hidden">
      {/* Ambient floating particles */}
      <div className="ambient-particle w-2 h-2 bg-accent/15 top-[20%] left-[10%]" style={{ animationDelay: "1s" }} />
      <div className="ambient-particle w-3 h-3 bg-primary/10 bottom-[30%] right-[8%]" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Section Label */}
        <div className="mb-12 text-left">
          <ScrollReveal variant="fade-up" delay={0}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-accent bg-accent/8 border border-accent/20 mb-5 select-none shadow-[0_2px_8px_rgba(200,153,74,0.08)]">
              ✦ {t.testimonials.badge}
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={150} duration={900}>
            <h2 className="font-display text-[2.2rem] sm:text-[3rem] font-bold text-primary-dark leading-tight">
              {t.testimonials.title}
            </h2>
          </ScrollReveal>
        </div>

        {/* Testimonial Embla Carousel */}
        <ScrollReveal variant="fade-up" delay={250} duration={1000}>
          <div className="w-full max-w-5xl mx-auto mt-8">
            <TestimonialCarousel testimonials={cards} />
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
