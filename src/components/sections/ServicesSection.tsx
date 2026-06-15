"use client";

import { MessageSquare } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Pregnancy & Antenatal Care",
    desc: "Complete care through every trimester — scans, health monitoring, and birth planning.",
    isFeatured: true,
    gridClass: "md:col-span-2",
    tag: "Most Requested",
  },
  {
    num: "02",
    title: "PCOS Treatment",
    desc: "Evidence-based diagnosis and lifestyle-led treatment plans for hormonal balance.",
    isFeatured: false,
    gridClass: "md:col-span-1",
  },
  {
    num: "03",
    title: "Infertility Evaluation",
    desc: "Compassionate diagnostic workups, ovulation induction, and follicular monitoring.",
    isFeatured: false,
    gridClass: "md:col-span-1",
  },
  {
    num: "04",
    title: "Laparoscopic Surgery",
    desc: "Minimally invasive keyhole surgery for fibroids, ovarian cysts, and hysterectomy with fast recovery times.",
    isFeatured: true,
    gridClass: "md:row-span-2 md:col-span-1",
  },
  {
    num: "05",
    title: "General Gynaecology",
    desc: "Routine preventive checks, Pap smears, contraception advice, and pelvic pain management.",
    isFeatured: false,
    gridClass: "md:col-span-1",
  },
  {
    num: "06",
    title: "Menopause Management",
    desc: "HRT counseling, bone density tracking, and custom support for perimenopausal symptoms.",
    isFeatured: false,
    gridClass: "md:col-span-1",
  },
  {
    num: "07",
    title: "Menstrual Disorders",
    desc: "Clinical solutions for heavy bleeding, painful periods, and irregular cycles.",
    isFeatured: false,
    gridClass: "md:col-span-1",
  },
  {
    num: "08",
    title: "High-Risk Pregnancy",
    desc: "Close medical surveillance for gestational diabetes, hypertension, and multiple pregnancies.",
    isFeatured: false,
    gridClass: "md:col-span-2",
  },
  {
    num: "09",
    title: "Family Planning",
    desc: "Consultation on modern contraceptive methods including loops, implants, and pills.",
    isFeatured: false,
    gridClass: "md:col-span-1",
  },
];

export default function ServicesSection() {
  const phoneNumber = "919876543210";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Dr.%20Santosh%2C%20I%27d%20like%20to%20ask%20about%20your%20services.`;

  return (
    <section id="services" className="py-20 bg-white scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Left-aligned Header */}
        <div className="mb-16 text-left max-w-2xl">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            TREATMENTS
          </span>
          <h2 className="font-display text-[2.2rem] sm:text-[3rem] font-bold text-primary-dark leading-tight mb-4">
            Comprehensive Care,<br />Every Stage of Life
          </h2>
          <p className="font-sans text-base text-text-muted leading-relaxed">
            From routine check-ups to complex surgical procedures &mdash; all under one roof.
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
                <div>
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
              Not sure which treatment is right for you?
            </h4>
            <p className="font-sans text-sm text-text-muted">
              Connect with Dr. Kulkarni&apos;s team on WhatsApp for quick guidance.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-600 text-white font-sans font-semibold rounded-full shadow-md hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 flex-shrink-0"
          >
            <MessageSquare className="w-4.5 h-4.5 fill-current" />
            WhatsApp Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
