"use client";

import { MessageSquare, Baby, Stethoscope, Heart, Scissors, ClipboardList, Sun, Activity, ShieldPlus, Users, Sparkles, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal, MagneticButton } from "@/components/ui/ScrollAnimations";
import MouseGlowTracker from "@/components/ui/MouseGlowTracker";

const SERVICE_ICONS = [
  Stethoscope, // s1: General Gynaecology
  Baby,        // s2: Pregnancy & Antenatal Care
  ShieldPlus,  // s3: Normal & C-Section Delivery
  Activity,    // s4: PCOS / PCOD Treatment
  Heart,       // s5: Infertility Evaluation & Treatment
  Calendar,    // s6: Menstrual Disorders
  Sun,         // s7: Menopause Management
  Users,       // s8: Family Planning & Contraception
  ShieldPlus,  // s9: High-Risk Pregnancy
  Scissors,    // s10: Laparoscopic Surgery
  Stethoscope, // s11: Fibroids & Ovarian Cysts
  Sparkles,    // s12: Sustainable Menstruation Practices
];

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
    { num: "09", title: t.services.items.s9.title, desc: t.services.items.s9.desc, isFeatured: true },
    { num: "10", title: t.services.items.s10.title, desc: t.services.items.s10.desc, isFeatured: false },
    { num: "11", title: t.services.items.s11.title, desc: t.services.items.s11.desc, isFeatured: false },
    { num: "12", title: t.services.items.s12.title, desc: t.services.items.s12.desc, isFeatured: true },
  ];

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-3xl mx-auto">
          <ScrollReveal variant="fade-up" delay={0} className="w-full flex justify-center">
            <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-2 block text-center">
              ✦ {t.services.badge}
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={150} duration={900} className="w-full">
            <h2 className="font-display text-[2.5rem] sm:text-[3.6rem] lg:text-[4rem] font-bold text-primary-dark leading-tight whitespace-pre-line text-center">
              {t.services.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={200} className="w-full">
            <p className="font-sans text-sm text-text-muted leading-relaxed max-w-xl text-center mx-auto mt-2">
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
                  glowColor="rgba(212, 175, 55, 0.08)"
                  className={`group relative p-7 md:p-9 transition-all duration-300 cursor-default services-grid-item ${
                    isMobileFeatured ? "mobile-featured" : ""
                    } ${service.isFeatured
                      ? "featured-service-card"
                      : "bg-white/70 hover:bg-white"
                    }`}
                >
                  {/* Hover glow for light cards */}
                  <div className="service-glow" />

                  <div className="relative z-10 flex flex-col items-center text-center h-full">
                    {/* Icon container */}
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 mb-5 service-icon-container ${service.isFeatured
                          ? "bg-accent/10 border border-accent/15 group-hover:bg-accent/15"
                          : "bg-primary/6 border border-primary/8 group-hover:bg-primary/10 group-hover:border-primary/15"
                        }`}
                    >
                      <Icon
                        className={`w-5 h-5 service-icon ${service.isFeatured ? "text-accent" : "text-primary"}`}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Text content */}
                    <div className="flex-grow flex flex-col items-center">
                      <span
                        className={`font-sans text-[10px] font-bold tracking-[0.15em] select-none service-number mb-2 ${service.isFeatured ? "text-accent/80" : "text-text-faint"}`}
                      >
                        {service.num}
                      </span>

                      <h3
                        className={`font-display text-lg sm:text-xl font-bold leading-snug mb-3 service-title ${
                          service.num === "01"
                            ? "service-title-gold text-accent"
                            : "text-primary-dark group-hover:text-primary transition-colors duration-200"
                        }`}
                      >
                        {service.title}
                      </h3>

                      <p
                        className="font-sans text-sm leading-relaxed service-desc text-text-muted"
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
          <div className="mt-10 flex flex-col items-center justify-center text-center gap-6 p-7 md:p-8 bg-white border border-primary/8 rounded-2xl shadow-sm shimmer-card max-w-3xl mx-auto">
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1 justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-heartbeat" />
                <h4 className="font-display text-lg font-bold text-primary-dark">
                  {t.services.bannerTitle}
                </h4>
              </div>
              <p className="font-sans text-sm text-text-muted">
                {t.services.bannerDesc}
              </p>
            </div>
            <MagneticButton>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="px-6 py-3.5 bg-primary text-white font-sans font-semibold rounded-full shadow-md hover:bg-primary-dark hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 flex-shrink-0 whitespace-nowrap cursor-pointer glow-pulse-btn"
            >
              <ArrowRight className="w-4 h-4" />
              {t.common.contactMe}
            </a>
          </MagneticButton>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
