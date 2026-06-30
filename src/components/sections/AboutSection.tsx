"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal, TiltCard } from "@/components/ui/ScrollAnimations";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import MouseGlowTracker from "@/components/ui/MouseGlowTracker";

export default function AboutSection() {
  const { t } = useLanguage();

  const credentials = t.about.credentials;

  return (
    <section id="about" className="py-20 bg-bg relative overflow-hidden scroll-mt-20">
      {/* Ambient floating particles */}
      <div className="ambient-particle w-3 h-3 bg-accent/20 top-[15%] right-[10%]" style={{ animationDelay: "0s" }} />
      <div className="ambient-particle w-2 h-2 bg-primary/15 top-[60%] left-[5%]" style={{ animationDelay: "2s" }} />
      <div className="ambient-particle w-4 h-4 bg-accent/10 bottom-[20%] right-[25%]" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stacked Image Arrangement (40% width / lg:col-span-4) */}
          <ScrollReveal variant="fade-right" duration={1000} className="lg:col-span-4 relative flex flex-col items-center">
            <TiltCard className="relative w-full max-w-[320px] aspect-[3/4]" intensity={6}>
              {/* Decorative Gold Gradient Rectangle Behind Image */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-gradient-to-br from-accent-light to-accent opacity-30 -z-10" />
              
              {/* Main Image Card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-primary/5 bg-[#faf8f4]">
                <Image
                  src="/images/headshot_clinic.jpeg"
                  alt={t.common.doctorName}
                  fill
                  className="object-cover object-top"
                  sizes="(max-w-1024px) 100vw, 320px"
                />
              </div>
            </TiltCard>

            {/* Credentials Card Below Photo */}
            <ScrollReveal variant="fade-up" delay={300} className="mt-6 w-full max-w-[340px]">
              <MouseGlowTracker>
                <div className="bg-white border border-primary/5 shadow-md p-5 rounded-xl shimmer-card">
                  <ul className="flex flex-col gap-2.5">
                    {credentials.map((item, idx) => (
                      <ScrollReveal key={idx} variant="fade-left" delay={idx * 100 + 400}>
                        <li className="flex items-start gap-2.5 text-left">
                          <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                          <span className="font-sans text-[11px] sm:text-xs font-semibold text-text-muted leading-tight">
                            {item}
                          </span>
                        </li>
                      </ScrollReveal>
                    ))}
                  </ul>
                </div>
              </MouseGlowTracker>
            </ScrollReveal>
          </ScrollReveal>

          {/* Right Column: Text and Stats (60% width / lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <ScrollReveal variant="fade-up" delay={100}>
              <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-4 block">
                ✦ {t.about.badge}
              </span>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={200}>
              <h2 className="font-display text-[1.8rem] sm:text-[3rem] font-bold text-primary-dark leading-tight mb-6 whitespace-pre-line">
                {t.about.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={300}>
              <div className="space-y-4 font-sans text-base text-text-muted leading-relaxed mb-8">
                <p>
                  {t.about.para1}
                </p>
                <p>
                  {t.about.para2}
                </p>
              </div>
            </ScrollReveal>

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
              {[
                { value: 15, suffix: "+", label: t.about.stats.experience, decimals: 0 },
                { value: 10000, suffix: "+", label: t.about.stats.treated, decimals: 0 },
                { value: 2000, suffix: "+", label: t.about.stats.deliveries, decimals: 0 },
                { value: 4.9, suffix: "/5", label: t.about.stats.rating, decimals: 1 },
              ].map((stat, idx) => (
                <ScrollReveal key={idx} variant="scale-up" delay={400 + idx * 120}>
                  <TiltCard intensity={5}>
                    <MouseGlowTracker>
                      <div className="bg-white border border-primary/5 p-4 rounded-2xl shadow-sm flex flex-col shimmer-card h-full justify-center">
                        <span className="font-display text-xl sm:text-3xl font-bold text-primary mb-1">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                        </span>
                        <span className="font-sans text-xs font-medium text-text-muted">
                          {stat.label}
                        </span>
                      </div>
                    </MouseGlowTracker>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
