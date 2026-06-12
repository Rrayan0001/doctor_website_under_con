"use client";

import {
  Baby,
  Activity,
  Heart,
  Stethoscope,
  Scissors,
  Sun,
  Shield,
  Calendar,
  Users,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";

const servicesList = [
  {
    icon: Baby,
    title: "Pregnancy & Antenatal Care",
    description: "Complete care through every trimester — scans, health monitoring, birth planning, and postpartum support.",
    tag: "Most Requested",
  },
  {
    icon: Activity,
    title: "PCOS / PCOD Treatment",
    description: "Evidence-based diagnosis and personalised treatment plans for hormonal balance and long-term wellness.",
  },
  {
    icon: Heart,
    title: "Infertility Evaluation",
    description: "Compassionate workup and treatment — from hormonal profiling to IUI and specialist referrals.",
  },
  {
    icon: Stethoscope,
    title: "General Gynaecology",
    description: "Routine pelvic exams, pap smears, menstrual health, contraception, and preventive screenings.",
  },
  {
    icon: Scissors,
    title: "Laparoscopic Surgery",
    description: "Minimally invasive procedures for fibroids, ovarian cysts, endometriosis, and hysterectomy.",
  },
  {
    icon: Sun,
    title: "Menopause Management",
    description: "Holistic support through perimenopause and menopause — HRT counselling, bone health, and lifestyle guidance.",
  },
  {
    icon: Shield,
    title: "High-Risk Pregnancy",
    description: "Specialist monitoring and care for gestational diabetes, hypertension, twin pregnancies, and more.",
  },
  {
    icon: Calendar,
    title: "Menstrual Disorders",
    description: "Diagnosis and treatment for irregular periods, heavy bleeding, painful cycles, and endometriosis.",
  },
  {
    icon: Users,
    title: "Family Planning",
    description: "Counselling and provision of contraceptive options — pills, IUDs, implants, and permanent methods.",
  },
];

export default function ServicesSection() {
  const phoneNumber = "919876543210";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Dr.%20Santosh%2C%20I'd%20like%20to%20ask%20about%20your%20services.`;

  return (
    <section id="services" className="py-12 md:py-20 section-gradient-teal scroll-mt-20 relative overflow-hidden">
      {/* Decorative dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Services"
          heading="Comprehensive Care, Every Stage of Life"
          subheading="From routine check-ups to complex surgical procedures — all under one roof."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {servicesList.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              tag={service.tag}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-sans text-sm font-semibold text-text-mid">
            Not sure which service you need?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-sans text-sm font-bold rounded-button transition-all"
          >
            {/* WhatsApp custom SVG icon */}
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.458h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Talk to Us — WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
