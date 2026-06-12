"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(anchor);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="section-gradient-dark text-white pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="orb orb-3 top-[-60px] right-[-80px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 relative z-10">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <span className="font-display text-2xl font-bold tracking-tight text-white leading-none">
            Dr. Santosh Kulkarni
          </span>
          <span className="font-sans text-xs text-white/70 tracking-wide uppercase leading-none">
            Gynecologist & Women&apos;s Health
          </span>
          <p className="font-sans text-sm text-white/80 leading-relaxed mt-2 max-w-xs">
            Dedicated to compassionate, evidence-based women&apos;s healthcare. Guiding you through every milestone with clinical excellence and warmth.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-accent mb-6">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Home", anchor: "#home" },
              { label: "About", anchor: "#about" },
              { label: "Services", anchor: "#services" },
              { label: "Gallery", anchor: "#gallery" },
              { label: "Contact", anchor: "#contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.anchor}
                  onClick={(e) => handleLinkClick(e, link.anchor)}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-300 hover:pl-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services List Column */}
        <div>
          <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-accent mb-6">
            Services
          </h4>
          <ul className="flex flex-col gap-3">
            {[
              "Pregnancy Care",
              "PCOS Treatment",
              "Infertility Evaluation",
              "Laparoscopic Surgery",
              "Menopause Care",
              "Menstrual Disorders",
            ].map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "#services")}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-300 hover:pl-1"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-accent mb-6">
            Clinic Contact
          </h4>
          <ul className="flex flex-col gap-3 font-sans text-sm text-white/70">
            <li className="leading-relaxed">
              📍 <strong className="text-white font-medium">Niramay Women&apos;s Clinic:</strong> 402, Medical Enclave, Link Road, Andheri West, Mumbai, 400053
            </li>
            <li>
              📞 <strong className="text-white font-medium">Phone:</strong> +91 98765 43210
            </li>
            <li>
              💬 <strong className="text-white font-medium">WhatsApp:</strong> +91 98765 43210
            </li>
            <li className="leading-relaxed">
              🕐 <strong className="text-white font-medium">Timings:</strong> Mon – Sat: 9:00 AM – 1:00 PM, 5:00 PM – 8:00 PM
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p className="font-sans text-xs text-white/60 text-center md:text-left">
          © {new Date().getFullYear()} Dr. Santosh Kulkarni. All rights reserved.
        </p>
        <p className="font-sans text-xs text-white/60 flex items-center gap-1.5 justify-center md:justify-end">
          Built with <Heart className="w-3.5 h-3.5 text-accent fill-accent animate-pulse" /> for better healthcare.
        </p>
      </div>
    </footer>
  );
}
