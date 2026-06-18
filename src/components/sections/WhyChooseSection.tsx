"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function WhyChooseSection() {
  const { t } = useLanguage();

  const pillars = t.whyChoose.pillars;

  return (
    <section className="py-20 animated-gradient-bg text-white relative overflow-hidden scroll-mt-20">
      
      {/* Drifting glow orbs */}
      <div className="absolute w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] top-[20%] left-[-100px] pointer-events-none orb-animate-1" />
      <div className="absolute w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] bottom-[10%] right-[-50px] pointer-events-none orb-animate-2" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Centered White Section Header */}
        <div className="mb-16 text-center max-w-xl mx-auto">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            {t.whyChoose.badge}
          </span>
          <h2 className="font-display text-[2.2rem] sm:text-[3rem] font-bold text-white leading-tight">
            {t.whyChoose.title}
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              style={{ animationDelay: `${idx * 0.15}s` }}
              className="glass-pillar p-8 flex flex-col items-start text-left scroll-reveal-stagger"
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
          ))}
        </div>

      </div>
    </section>
  );
}
