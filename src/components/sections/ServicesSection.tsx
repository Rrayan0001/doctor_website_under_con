"use client";

import { MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      num: "01",
      title: t.services.items.s1.title,
      desc: t.services.items.s1.desc,
      isFeatured: true,
      gridClass: "md:col-span-2",
      tag: t.services.mostRequested,
    },
    {
      num: "02",
      title: t.services.items.s2.title,
      desc: t.services.items.s2.desc,
      isFeatured: false,
      gridClass: "md:col-span-1",
    },
    {
      num: "03",
      title: t.services.items.s3.title,
      desc: t.services.items.s3.desc,
      isFeatured: false,
      gridClass: "md:col-span-1",
    },
    {
      num: "04",
      title: t.services.items.s4.title,
      desc: t.services.items.s4.desc,
      isFeatured: true,
      gridClass: "md:row-span-2 md:col-span-1",
    },
    {
      num: "05",
      title: t.services.items.s5.title,
      desc: t.services.items.s5.desc,
      isFeatured: false,
      gridClass: "md:col-span-1",
    },
    {
      num: "06",
      title: t.services.items.s6.title,
      desc: t.services.items.s6.desc,
      isFeatured: false,
      gridClass: "md:col-span-1",
    },
    {
      num: "07",
      title: t.services.items.s7.title,
      desc: t.services.items.s7.desc,
      isFeatured: false,
      gridClass: "md:col-span-1",
    },
    {
      num: "08",
      title: t.services.items.s8.title,
      desc: t.services.items.s8.desc,
      isFeatured: false,
      gridClass: "md:col-span-2",
    },
    {
      num: "09",
      title: t.services.items.s9.title,
      desc: t.services.items.s9.desc,
      isFeatured: false,
      gridClass: "md:col-span-1",
    },
  ];

  const phoneNumber = "919876543210";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Dr.%20Santosh%2C%20I%27d%20like%20to%20ask%20about%20your%20services.`;

  return (
    <section id="services" className="py-20 bg-white scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Left-aligned Header */}
        <div className="mb-16 text-left max-w-2xl">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            {t.services.badge}
          </span>
          <h2 className="font-display text-[2.2rem] sm:text-[3rem] font-bold text-primary-dark leading-tight mb-4 whitespace-pre-line">
            {t.services.title}
          </h2>
          <p className="font-sans text-base text-text-muted leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-fr">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 overflow-hidden transition-all duration-300 bento-card cursor-default ${
                service.gridClass
              } ${
                service.isFeatured
                  ? "bg-primary text-white border border-primary/20 hover:shadow-[0_0_25px_rgba(200,153,74,0.3)] hover:border-accent"
                  : "bg-bg text-text border border-primary/5 hover:border-primary/20"
              }`}
            >
              {/* Massive faint decorative number in the corner */}
              <span
                className={`absolute top-4 right-6 font-display text-[4.5rem] font-bold leading-none select-none pointer-events-none transition-opacity duration-300 ${
                  service.isFeatured
                    ? "text-accent opacity-[0.08]"
                    : "text-accent opacity-[0.07]"
                }`}
              >
                {service.num}
              </span>

              {/* Tag for featured cards */}
              {service.tag && (
                <span className="inline-block bg-accent/20 border border-accent/30 text-accent font-sans text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-6 relative z-10">
                  {service.tag}
                </span>
              )}

              {/* Service title and details */}
              <div className={`flex flex-col h-full justify-between relative z-10 ${service.tag ? "mt-0" : "mt-4"}`}>
                <div className="text-left">
                  <h3
                    className={`font-display text-xl font-bold mb-3 ${
                      service.isFeatured ? "text-white" : "text-primary-dark"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`font-sans text-sm leading-relaxed ${
                      service.isFeatured ? "text-white/85" : "text-text-muted"
                    }`}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Banner */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-bg rounded-2xl border border-primary/5">
          <div className="text-left">
            <h4 className="font-display text-lg font-bold text-primary-dark mb-1">
              {t.services.bannerTitle}
            </h4>
            <p className="font-sans text-sm text-text-muted">
              {t.services.bannerDesc}
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-600 text-white font-sans font-semibold rounded-full shadow-md hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 flex-shrink-0 whitespace-nowrap cursor-pointer"
          >
            <MessageSquare className="w-4.5 h-4.5 fill-current" />
            {t.common.whatsappConsultation}
          </a>
        </div>

      </div>
    </section>
  );
}
