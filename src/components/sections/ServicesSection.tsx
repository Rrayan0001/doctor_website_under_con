"use client";

import { MessageSquare, Baby, Stethoscope, Heart, Scissors, ClipboardList, Sun, Activity, ShieldPlus, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
              {t.services.badge}
            </span>
            <h2 className="font-display text-[2.2rem] sm:text-[3.2rem] font-bold text-primary-dark leading-tight whitespace-pre-line">
              {t.services.title}
            </h2>
          </div>
          <p className="font-sans text-sm text-text-muted leading-relaxed max-w-xs md:text-right">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services — Premium 3×3 Editorial Grid */}
        <div className="services-grid-container rounded-3xl overflow-hidden shadow-lg">
          {services.map((service, idx) => {
            const Icon = SERVICE_ICONS[idx];

            return (
              <div
                key={idx}
                className={`group relative p-7 md:p-9 transition-all duration-300 cursor-default services-grid-item reveal-up ${
                  idx === 8 ? "services-grid-item--full" : ""
                } ${
                  service.isFeatured
                    ? "featured-service-card text-white"
                    : "bg-white/70 hover:bg-white"
                }`}
              >
                {/* Hover glow for light cards */}
                {!service.isFeatured && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary/3 to-transparent" />
                )}

                <div className="relative z-10 flex items-start gap-5">
                  {/* Icon container */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 mt-1 ${
                      service.isFeatured
                        ? "bg-white/10 border border-white/15 group-hover:bg-white/15"
                        : "bg-primary/6 border border-primary/8 group-hover:bg-primary/10 group-hover:border-primary/15"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${service.isFeatured ? "text-accent-light" : "text-primary"}`}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex-grow flex flex-col">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-sans text-[10px] font-bold tracking-[0.15em] select-none ${
                            service.isFeatured ? "text-accent-light/70" : "text-text-faint"
                          }`}
                        >
                          {service.num}
                        </span>
                      </div>
                      {/* Arrow indicator */}
                      <span
                        className={`text-base leading-none opacity-0 group-hover:opacity-100 transition-all duration-200 ${
                          service.isFeatured ? "text-accent-light" : "text-primary"
                        }`}
                      >
                        →
                      </span>
                    </div>

                    <h3
                      className={`font-display text-lg sm:text-xl font-bold leading-snug mb-2 ${
                        service.isFeatured
                          ? "text-white"
                          : "text-primary-dark group-hover:text-primary transition-colors duration-200"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`font-sans text-sm leading-relaxed ${
                        service.isFeatured ? "text-white/75" : "text-text-muted"
                      }`}
                    >
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-7 md:p-8 bg-white border border-primary/8 rounded-2xl shadow-sm">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <h4 className="font-display text-lg font-bold text-primary-dark">
                {t.services.bannerTitle}
              </h4>
            </div>
            <p className="font-sans text-sm text-text-muted pl-3.5">
              {t.services.bannerDesc}
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-emerald-600 text-white font-sans font-semibold rounded-full shadow-md hover:bg-emerald-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 flex-shrink-0 whitespace-nowrap cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            {t.common.whatsappConsultation}
          </a>
        </div>

      </div>
    </section>
  );
}
