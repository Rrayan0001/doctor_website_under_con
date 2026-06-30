"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal, TiltCard } from "@/components/ui/ScrollAnimations";
import MouseGlowTracker from "@/components/ui/MouseGlowTracker";
import GlowingShadow from "@/components/ui/GlowingShadow";
import { ShieldCheck, MessageSquareHeart, Clock, HeartHandshake } from "lucide-react";

export default function WhyChooseSection() {
  const { t } = useLanguage();

  const pillars = t.whyChoose.pillars;

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="w-7 h-7 stroke-[1.8] text-accent group-hover:scale-110 transition-transform duration-300" />;
      case 1:
        return <MessageSquareHeart className="w-7 h-7 stroke-[1.8] text-accent group-hover:scale-110 transition-transform duration-300" />;
      case 2:
        return <Clock className="w-7 h-7 stroke-[1.8] text-accent group-hover:rotate-12 transition-transform duration-300" />;
      default:
        return <HeartHandshake className="w-7 h-7 stroke-[1.8] text-accent group-hover:scale-110 transition-transform duration-300" />;
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#051c1e] to-[#031314] text-white relative overflow-hidden scroll-mt-20 border-b border-primary-dark/20">
      
      {/* Dynamic Background Mesh Blobs */}
      <div className="absolute w-[600px] h-[600px] bg-primary-light/8 rounded-full blur-[120px] -top-[10%] -left-[10%] pointer-events-none animate-pulse" style={{ animationDuration: "12s" }} />
      <div className="absolute w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] bottom-[20%] right-[-10%] pointer-events-none animate-pulse" style={{ animationDuration: "8s" }} />

      {/* Ambient floating particles */}
      <div className="ambient-particle w-2 h-2 bg-accent/20 top-[10%] right-[15%]" style={{ animationDelay: "0s", animationDuration: "10s" }} />
      <div className="ambient-particle w-3 h-3 bg-white/5 top-[50%] left-[8%]" style={{ animationDelay: "3s", animationDuration: "12s" }} />
      <div className="ambient-particle w-2 h-2 bg-accent/15 bottom-[15%] right-[30%]" style={{ animationDelay: "5s", animationDuration: "9s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Centered White Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <ScrollReveal variant="fade-down" delay={0}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-accent bg-accent/8 border border-accent/20 mb-5 select-none shadow-[0_2px_8px_rgba(200,153,74,0.08)]">
              ✦ {t.whyChoose.badge}
            </span>
          </ScrollReveal>
          <ScrollReveal variant="blur-in" delay={150} duration={1000}>
            <h2 className="font-display text-[2.5rem] sm:text-[3.5rem] font-bold text-white leading-tight mb-4">
              {t.whyChoose.title}
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mt-6" />
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
              <TiltCard intensity={5} className="h-full">
                <GlowingShadow glowColor="mixed" className="h-full">
                  <MouseGlowTracker
                    glowColor="rgba(200, 153, 74, 0.12)"
                    radius={250}
                    className="h-full rounded-2xl border border-white/10 bg-[#071e22]/50 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 hover:border-accent/40 hover:-translate-y-2 hover:shadow-[0_10px_35px_rgba(10,79,82,0.4)] group"
                  >
                    <div className="p-8 flex flex-col items-start justify-between h-full relative overflow-hidden min-h-[300px]">
                      {/* Glowing Accent Border Top */}
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary-light via-accent to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                      {/* Watermark Number */}
                      <div className="absolute bottom-4 right-4 text-8xl font-display font-extrabold text-white/[0.02] group-hover:text-accent/[0.05] group-hover:scale-110 transition-all duration-500 select-none pointer-events-none">
                        {`0${idx + 1}`}
                      </div>

                      <div className="w-full">
                        {/* Interactive Animated Icon Container */}
                        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                          {getIcon(idx)}
                        </div>

                        <h3 className="font-display text-xl font-bold text-white mb-4 leading-snug group-hover:text-accent-light transition-colors duration-300 text-left">
                          {pillar.title}
                        </h3>
                      </div>

                      <p className="font-sans text-sm text-white/70 leading-relaxed group-hover:text-white/95 transition-colors duration-300 relative z-10 mt-2 text-left">
                        {pillar.desc}
                      </p>
                    </div>
                  </MouseGlowTracker>
                </GlowingShadow>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
