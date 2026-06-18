"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, t, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(anchor);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: t.navbar.home, anchor: "#home" },
    { label: t.navbar.about, anchor: "#about" },
    { label: t.navbar.treatments, anchor: "#services" },
    { label: t.navbar.testimonials, anchor: "#testimonials" },
    { label: t.navbar.gallery, anchor: "#gallery" },
    { label: t.navbar.contact, anchor: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "frosted-glass py-3 shadow-sm"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo brand area: Custom inline SVG uterus/ovary SK logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="flex-shrink-0 w-10 h-10 relative transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Niramay Women's Clinic Logo"
                fill
                className="object-contain"
                sizes="40px"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base sm:text-lg font-bold text-primary tracking-tight leading-none">
                {t.common.doctorName}
              </span>
              <span className="font-sans text-[8px] sm:text-[9px] font-semibold text-text-muted tracking-wider uppercase mt-1 leading-none">
                {t.common.doctorSubtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <div className="flex gap-3.5 lg:gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.anchor}
                  href={link.anchor}
                  onClick={(e) => handleLinkClick(e, link.anchor)}
                  className="font-sans text-sm font-semibold text-text hover:text-primary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Language Selector */}
            <div className="flex items-center bg-primary/5 border border-primary/10 rounded-full p-0.5 text-xs">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  language === "en"
                    ? "bg-primary text-white font-bold shadow-sm"
                    : "text-text hover:text-primary font-medium"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("kn")}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  language === "kn"
                    ? "bg-primary text-white font-bold shadow-sm"
                    : "text-text hover:text-primary font-medium"
                }`}
              >
                ಕನ್ನಡ
              </button>
              <button
                onClick={() => setLanguage("hi")}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  language === "hi"
                    ? "bg-primary text-white font-bold shadow-sm"
                    : "text-text hover:text-primary font-medium"
                }`}
              >
                हिंदी
              </button>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-sans text-sm font-semibold rounded-full shadow-md hover:bg-primary-light hover:shadow-lg transition-all transform hover:-translate-y-[1px] whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              {t.navbar.bookBtn}
            </a>
          </div>

          {/* Mobile Actions: Language Toggle & Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Language Selector */}
            <div className="flex items-center bg-primary/5 border border-primary/10 rounded-full p-0.5 text-[10px]">
              <button
                onClick={() => setLanguage("en")}
                className={`px-1.5 py-0.5 rounded-full transition-all duration-200 cursor-pointer ${
                  language === "en"
                    ? "bg-primary text-white font-bold"
                    : "text-text hover:text-primary"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("kn")}
                className={`px-2 py-0.5 rounded-full transition-all duration-200 cursor-pointer ${
                  language === "kn"
                    ? "bg-primary text-white font-bold"
                    : "text-text hover:text-primary"
                }`}
              >
                ಕನ್ನಡ
              </button>
              <button
                onClick={() => setLanguage("hi")}
                className={`px-2 py-0.5 rounded-full transition-all duration-200 cursor-pointer ${
                  language === "hi"
                    ? "bg-primary text-white font-bold"
                    : "text-text hover:text-primary"
                }`}
              >
                हिंदी
              </button>
            </div>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-text hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-primary-dark/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer Overlay */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[300px] z-50 bg-bg shadow-2xl p-8 flex flex-col justify-between transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          {/* Close button in Drawer */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-text hover:text-primary transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Large display header doctor name */}
          <div className="mb-10">
            <span className="font-display text-3xl font-bold text-primary block leading-tight">
              {language === "kn" ? (
                <>ಡಾ. ಸಂತೋಷ್<br />ಕುಲಕರ್ಣಿ</>
              ) : language === "hi" ? (
                <>डॉ. संतोष<br />कुलकर्णी</>
              ) : (
                <>Dr. Santosh<br />Kulkarni</>
              )}
            </span>
            <span className="font-sans text-[10px] text-accent font-bold tracking-widest uppercase mt-2 block">
              {t.navbar.mobileSubtitle}
            </span>
          </div>

          {/* Drawer Links */}
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.anchor}
                href={link.anchor}
                onClick={(e) => handleLinkClick(e, link.anchor)}
                className="font-sans text-base font-semibold text-text hover:text-primary transition-colors py-2 border-b border-primary/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Drawer CTA */}
        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, "#contact")}
          className="w-full text-center py-3 bg-primary text-white font-sans font-semibold rounded-full shadow-md hover:bg-primary-light hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          {t.navbar.bookBtn}
        </a>
      </div>
    </>
  );
}
