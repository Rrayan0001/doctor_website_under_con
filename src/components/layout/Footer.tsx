"use client";

import Image from "next/image";
import { Star, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(anchor);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-dark text-white/80 pt-16 pb-8 border-t border-primary/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 relative z-10">
        
        {/* Column 1: SVG Logo & Tagline */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 relative">
              <Image
                src="/logo.png"
                alt="Niramay Women's Clinic Logo"
                fill
                className="object-contain"
                sizes="40px"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold text-white tracking-tight leading-none">
                {t.common.doctorName}
              </span>
              <span className="font-sans text-[9px] font-semibold text-white/50 tracking-wider uppercase mt-1 leading-none">
                {t.common.doctorSubtitle}
              </span>
            </div>
          </div>
          <p className="font-sans text-sm text-white/70 leading-relaxed italic max-w-sm">
            {t.footer.tagline}
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 text-white/70 hover:text-accent hover:bg-white/10 flex items-center justify-center transition-all"
              aria-label="Follow on Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 text-white/70 hover:text-accent hover:bg-white/10 flex items-center justify-center transition-all"
              aria-label="Follow on Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 text-white/70 hover:text-accent hover:bg-white/10 flex items-center justify-center transition-all"
              aria-label="Read Google Reviews"
            >
              <Star className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-accent mb-6">
            {t.footer.quickLinks}
          </h4>
          <ul className="grid grid-cols-2 gap-3">
            {[
              { label: t.navbar.home, anchor: "#home" },
              { label: t.navbar.about, anchor: "#about" },
              { label: t.navbar.treatments, anchor: "#services" },
              { label: t.navbar.testimonials, anchor: "#testimonials" },
              { label: t.navbar.gallery, anchor: "#gallery" },
              { label: t.navbar.contact, anchor: "#contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.anchor}
                  onClick={(e) => handleLinkClick(e, link.anchor)}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info + Hours */}
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-accent mb-6">
              {t.footer.contactInfo}
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-white/70">
              <li className="flex gap-2.5 items-start text-left">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>
                  {language === "kn" ? (
                    <>ನಿರಾಮಯ್ ಮಹಿಳಾ ಕ್ಲಿನಿಕ್, ೪೦೨ ಮೆಡಿಕಲ್ ಎನ್‌ಕ್ಲೇವ್, ಲಿಂಕ್ ರೋಡ್, ಅಂಧೇರಿ ವೆಸ್ಟ್, ಮುಂಬೈ — ೪೦೦೦೫೩</>
                  ) : language === "hi" ? (
                    <>निरामय महिला क्लिनिक, 402 मेडिकल एन्क्लेव, लिंक रोड, अंधेरी वेस्ट, मुंबई &mdash; 400053</>
                  ) : (
                    <>Niramay Women&apos;s Clinic, 402 Medical Enclave, Link Road, Andheri West, Mumbai &mdash; 400053</>
                  )}
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <span>contact@dr-santosh.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-sans text-xs font-semibold uppercase tracking-wider text-accent mb-3 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {t.footer.hoursLabel}
            </h5>
            <p className="font-sans text-xs text-white/60 leading-relaxed pl-5 whitespace-pre-line text-left">
              {t.footer.hoursText}
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <p className="font-sans text-xs text-white/50 text-center sm:text-left">
          {t.footer.copyright}
        </p>
        <p className="font-sans text-xs text-white/50 text-center sm:text-right">
          {t.common.doctorSubtitle}
        </p>
      </div>
    </footer>
  );
}
