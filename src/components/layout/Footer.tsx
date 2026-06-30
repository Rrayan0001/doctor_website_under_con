"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin, Star, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import { motion } from "framer-motion";
import CascadeText from "@/components/ui/CascadeText";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

// Inline SVGs for social media icons due to pruned lucide-react package
const InstagramIcon = ({ size = 20, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 20, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const { t, language } = useLanguage();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(anchor);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  interface FooterLink {
    label: string;
    href: string;
    isExternal?: boolean;
  }

  // Footer links structure using the website's translations
  const footerLinks: { title: string; links: FooterLink[] }[] = [
    {
      title: t.footer.quickLinks,
      links: [
        { label: t.navbar.home, href: "#home" },
        { label: t.navbar.about, href: "#about" },
        { label: t.navbar.treatments, href: "#services" },
        { label: t.navbar.testimonials, href: "#testimonials" },
        { label: t.navbar.gallery, href: "#gallery" },
        { label: t.navbar.contact, href: "#contact" },
      ],
    },
  ];

  // Contact info data of the clinic
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-accent flex-shrink-0" />,
      text: "contact@dr-santosh.com",
      href: "mailto:contact@dr-santosh.com",
    },
    {
      icon: <Phone size={18} className="text-accent flex-shrink-0" />,
      text: "+91 81050 74067",
      href: "tel:+918105074067",
    },
    {
      icon: <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />,
      text: language === "kn"
        ? "ನಿರಾಮಯ್ ಮಹಿಳಾ ಕ್ಲಿನಿಕ್, ಆರ್. ಎನ್. ಶೆಟ್ಟಿ ಸ್ಟೇಡಿಯಂ ಹಿಂದೆ, ಕೆ. ಸಿ. ಪಾರ್ಕ್ ಪೋಸ್ಟ್ ಆಫೀಸ್ ಹತ್ತಿರ, ರಾಜ್ ನಗರ, ಧಾರವಾಡ, ಕರ್ನಾಟಕ ೫೮೦೦೦೮"
        : language === "hi"
        ? "निरामय क्लिनिक, आर. एन. शेट्टी स्टेडियम के पीछे, के. सी. पार्क पोस्ट ऑफिस के पास, राज नगर, धारवाड़, कर्नाटक 580008"
        : "Niramay Women's Clinic, behind R N Shetty Stadium, near K C Park Post Office, Raj Nagar, Dharwad, Karnataka 580008",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <InstagramIcon size={20} />, label: "Instagram", href: "https://instagram.com" },
    { icon: <FacebookIcon size={20} />, label: "Facebook", href: "https://facebook.com" },
    { icon: <Star size={20} />, label: "Google Reviews", href: "https://google.com" },
  ];

  return (
    <footer className="bg-[#071e22] text-white/70 relative h-fit rounded-3xl overflow-hidden m-4 sm:m-6 md:m-8 border border-primary/10">
      <div className="max-w-7xl mx-auto p-8 sm:p-10 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 relative">
                <Image
                  src="/bg_logo.png"
                  alt="Niramay Women's Clinic Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-lg font-bold tracking-tight leading-none font-display">
                  {t.common.doctorName}
                </span>
                <span className="text-accent text-[9px] font-semibold tracking-wider uppercase mt-1 leading-none font-sans">
                  {t.common.doctorSubtitle}
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 font-sans italic mt-2">
              {t.footer.tagline}
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="text-left">
              <h4 className="text-white text-lg font-semibold mb-6 font-sans">
                {section.title}
              </h4>
              <ul className="space-y-3 font-sans text-sm">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    {link.isExternal ? (
                      <motion.a
                        href={link.href}
                        initial="initial"
                        whileHover="hovered"
                        className="text-accent hover:text-accent-light font-semibold transition-colors duration-300 inline-block"
                      >
                        <CascadeText text={link.label} />
                      </motion.a>
                    ) : (
                      <motion.a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        initial="initial"
                        whileHover="hovered"
                        className="hover:text-accent text-white/70 transition-colors duration-300 inline-block"
                      >
                        <CascadeText text={link.label} />
                      </motion.a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Clinic Hours */}
          <div className="text-left">
            <h4 className="text-white text-lg font-semibold mb-6 font-sans flex items-center gap-1.5">
              <Clock size={16} className="text-accent animate-heartbeat" />
              {t.footer.hoursLabel}
            </h4>
            <p className="font-sans text-sm text-white/60 leading-relaxed whitespace-pre-line">
              {t.footer.hoursText}
            </p>
          </div>

          {/* Contact section */}
          <div className="text-left">
            <h4 className="text-white text-lg font-semibold mb-6 font-sans">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-4 font-sans text-sm">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  {item.icon}
                  {item.href ? (
                    <motion.a
                      href={item.href}
                      initial="initial"
                      whileHover="hovered"
                      className="hover:text-accent text-white/70 transition-colors inline-block"
                    >
                      <CascadeText text={item.text} />
                    </motion.a>
                  ) : (
                    <span className="text-white/70 font-sans">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/10 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-white/45">
            {socialLinks.map(({ icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.18, rotate: 8, y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="hover:text-accent transition-colors inline-block"
              >
                {icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left text-xs text-white/50">
            <span>
              &copy; {new Date().getFullYear()} {t.common.clinicName}. All rights reserved.
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <span>
              Developed by{" "}
              <a
                href="https://kreosoftwares.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light font-semibold hover:underline transition-all"
              >
                KREO
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="flex h-[12rem] sm:h-[18rem] md:h-[24rem] lg:h-[30rem] -mt-16 sm:-mt-24 md:-mt-36 lg:-mt-52 -mb-10 sm:-mb-16 md:-mb-24 lg:-mb-36 overflow-hidden">
        <TextHoverEffect text="DR. SANTOSH" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
