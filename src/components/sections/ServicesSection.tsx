"use client";

import { MessageSquare, Baby, Stethoscope, Heart, Scissors, ClipboardList, Sun, Activity, ShieldPlus, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal, MagneticButton } from "@/components/ui/ScrollAnimations";
import MouseGlowTracker from "@/components/ui/MouseGlowTracker";

const SERVICE_ICONS = [Baby, Stethoscope, Heart, Scissors, ClipboardList, Sun, Activity, ShieldPlus, Users];

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    { num: "01", title: t.services.items.s1.title, desc: t.services.items.s1.desc, isFeatured: true },
    { num: "02", title: t.services.items.s2.title, desc: t.services.items.s2.desc, isFeatured: false },
    { num: "03", title: t.services.items.s3.title, desc: t.services.items.s3.desc, isFeatured: false },
    { num: "04", title: t.services.items.s4.title, desc: t.services.items.s4.desc, isFeatured: true },
    { num: "05", title: t.services.items.s5.title, desc: t.services.items.s5.desc, isFeatured: true },
    { num: "06", title: t.services.items.s6.title, desc: t.services.items.s6.desc, isFeatured: false },
    { num: "07", title: t.services.items.s7.title, desc: t.services.items.s7.desc, isFeatured: false },
    { num: "08", title: t.services.items.s8.title, desc: t.services.items.s8.desc, isFeatured: true },
    { num: "09", title: t.services.items.s9.title, desc: t.services.items.s9.desc, isFeatured: false },
  ];

  const phoneNumber = "919480422318";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Dr.%20Santosh%2C%20I%27d%20like%20to%20ask%20about%20your%20services.`;

  return (
    <section id="services" className="py-24 bg-[#faf8f4] scroll-mt-20 relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-accent/6 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/4 via-transparent to-transparent pointer-events-none" />

      {/* Ambient floating particles */}
      <div className="ambient-particle w-3 h-3 bg-accent/15 top-[12%] left-[8%]" style={{ animationDelay: "0s", animationDuration: "11s" }} />
      <div className="ambient-particle w-2 h-2 bg-primary/10 top-[55%] right-[5%]" style={{ animationDelay: "3s", animationDuration: "9s" }} />
      <div className="ambient-particle w-4 h-4 bg-accent/8 bottom-[10%] left-[40%]" style={{ animationDelay: "6s", animationDuration: "13s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <ScrollReveal variant="fade-up" delay={0}>
              <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-4 block">
                ✦ {t.services.badge}
              </span>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={150} duration={900}>
              <h2 className="font-display text-[2.2rem] sm:text-[3.2rem] font-bold text-primary-dark leading-tight whitespace-pre-line">
                {t.services.title}
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal variant="fade-left" delay={200}>
            <p className="font-sans text-sm text-text-muted leading-relaxed max-w-xs text-left">
              {t.services.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Services — Premium 3×3 Editorial Grid */}
        <ScrollReveal variant="scale-up" duration={1000}>
          <div className="services-grid-container rounded-3xl overflow-hidden shadow-lg">
            {services.map((service, idx) => {
              const Icon = SERVICE_ICONS[idx];
              const isMobileFeatured = idx % 2 === 0;

              return (
                <MouseGlowTracker
                  key={idx}
                  glowColor={service.isFeatured ? "rgba(255, 255, 255, 0.08)" : "rgba(212, 175, 55, 0.08)"}
                  className={`group relative p-7 md:p-9 transition-all duration-300 cursor-default services-grid-item ${idx === 8 ? "services-grid-item--full" : ""
                    } ${isMobileFeatured ? "mobile-featured" : ""
                    } ${service.isFeatured
                      ? "featured-service-card text-white"
                      : "bg-white/70 hover:bg-white"
                    }`}
                >
                  {/* Hover glow for light cards */}
                  <div className="service-glow" />

                  <div className="relative z-10 flex items-start gap-5">
                    {/* Icon container */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 mt-1 service-icon-container ${service.isFeatured
                          ? "bg-white/10 border border-white/15 group-hover:bg-white/15"
                          : "bg-primary/6 border border-primary/8 group-hover:bg-primary/10 group-hover:border-primary/15"
                        }`}
                    >
                      <Icon
                        className={`w-5 h-5 service-icon ${service.isFeatured ? "text-accent-light" : "text-primary"}`}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Text content */}
                    <div className="flex-grow flex flex-col">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-sans text-[10px] font-bold tracking-[0.15em] select-none service-number ${service.isFeatured ? "text-accent-light/70" : "text-text-faint"
                              }`}
                          >
                            {service.num}
                          </span>
                        </div>
                        {/* Arrow indicator */}
                        <span
                          className={`text-base leading-none opacity-0 group-hover:opacity-100 transition-all duration-200 service-arrow ${service.isFeatured ? "text-accent-light" : "text-primary"
                            }`}
                        >
                          →
                        </span>
                      </div>

                      <h3
                        className={`font-display text-lg sm:text-xl font-bold leading-snug mb-2 service-title ${
                          service.num === "01"
                            ? "service-title-gold text-accent-light"
                            : service.isFeatured
                              ? "text-white"
                              : "text-primary-dark group-hover:text-primary transition-colors duration-200"
                        }`}
                      >
                        {service.title}
                      </h3>

                      <p
                        className={`font-sans text-sm leading-relaxed service-desc ${service.isFeatured ? "text-white/75" : "text-text-muted"
                          }`}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </MouseGlowTracker>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Bottom CTA Banner */}
        <ScrollReveal variant="fade-up" delay={200}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-7 md:p-8 bg-white border border-primary/8 rounded-2xl shadow-sm shimmer-card">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-heartbeat" />
                <h4 className="font-display text-lg font-bold text-primary-dark">
                  {t.services.bannerTitle}
                </h4>
              </div>
              <p className="font-sans text-sm text-text-muted pl-3.5">
                {t.services.bannerDesc}
              </p>
            </div>
            <MagneticButton>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 text-white font-sans font-semibold rounded-full shadow-md hover:bg-emerald-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 flex-shrink-0 whitespace-nowrap cursor-pointer glow-pulse-btn"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                {t.common.whatsappConsultation}
              </a>
            </MagneticButton>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
