"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal, TiltCard } from "@/components/ui/ScrollAnimations";

export default function WhyChooseSection() {
  const { t } = useLanguage();

  const pillars = t.whyChoose.pillars;

  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark to-primary text-white relative overflow-hidden scroll-mt-20">
      
      {/* Subtle background glow elements */}
      <div className="absolute w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] top-[20%] left-[-100px] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] bottom-[10%] right-[-50px] pointer-events-none" />

      {/* Ambient floating particles */}
      <div className="ambient-particle w-2 h-2 bg-accent/30 top-[10%] right-[15%]" style={{ animationDelay: "0s", animationDuration: "10s" }} />
      <div className="ambient-particle w-3 h-3 bg-white/10 top-[50%] left-[8%]" style={{ animationDelay: "3s", animationDuration: "12s" }} />
      <div className="ambient-particle w-2 h-2 bg-accent/20 bottom-[15%] right-[30%]" style={{ animationDelay: "5s", animationDuration: "9s" }} />
      <div className="ambient-particle w-1.5 h-1.5 bg-white/15 top-[30%] left-[40%]" style={{ animationDelay: "7s", animationDuration: "11s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Centered White Section Header */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <ScrollReveal variant="fade-down" delay={0}>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-4 block animated-gradient-text">
              {t.whyChoose.badge}
            </span>
          </ScrollReveal>
          <ScrollReveal variant="blur-in" delay={150} duration={1000}>
            <h2 className="font-display text-[2.2rem] sm:text-[3rem] font-bold text-white leading-tight">
              {t.whyChoose.title}
            </h2>
          </ScrollReveal>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <ScrollReveal
              key={idx}
              variant="fade-up"
              delay={idx * 150}
              duration={800}
            >
              <TiltCard intensity={8}>
                <div
                  className="glass-pillar p-8 flex flex-col items-start text-left shimmer-card h-full"
                >
                  {/* Thin gold horizontal line above the title */}
                  <div className="w-10 h-[2px] bg-accent mb-6" />
                  
                  <h3 className="font-display text-lg font-bold text-white mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
