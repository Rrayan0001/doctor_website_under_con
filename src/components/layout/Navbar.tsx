"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import CascadeText from "@/components/ui/CascadeText";

export default function Navbar() {
  const { language, t, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  // Intersection Observer for Active Nav Highlighting (Scroll Spy)
  useEffect(() => {
    const sections = ["home", "about", "services", "testimonials", "gallery", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Fallback for scrolling to the very top
    const handleScrollTop = () => {
      if (window.scrollY < 50) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScrollTop);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollTop);
    };
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "frosted-glass py-3 shadow-sm"
            : "bg-transparent py-5 border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo brand area: Custom inline SVG uterus/ovary SK logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className={`flex items-center gap-2.5 group cursor-pointer transition-all duration-300 ${
              isScrolled
                ? "bg-transparent p-0 border-transparent shadow-none"
                : "bg-white/80 backdrop-blur-md pl-2 pr-4 py-1.5 rounded-2xl border border-white/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
            }`}
          >
            <div className="flex-shrink-0 w-10 h-10 relative transition-transform group-hover:scale-105">
              <Image
                src="/bg_logo.png"
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
              {navLinks.map((link) => {
                const isActive = activeSection === link.anchor.replace("#", "");
                return (
                  <a
                    key={link.anchor}
                    href={link.anchor}
                    onClick={(e) => handleLinkClick(e, link.anchor)}
                    className={`font-sans text-sm font-semibold transition-colors relative py-1 whitespace-nowrap
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all
                      ${isActive
                        ? "text-primary after:w-full"
                        : "text-text hover:text-primary after:w-0 hover:after:w-full"
                      }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Language Selector */}
            <div className="flex items-center bg-primary/5 border border-primary/10 rounded-full p-0.5 text-xs">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded-full transition-all duration-200 cursor-pointer ${language === "en"
                    ? "bg-primary text-white font-bold shadow-sm"
                    : "text-text hover:text-primary font-medium"
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("kn")}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${language === "kn"
                    ? "bg-primary text-white font-bold shadow-sm"
                    : "text-text hover:text-primary font-medium"
                  }`}
              >
                ಕನ್ನಡ
              </button>
              <button
                onClick={() => setLanguage("hi")}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${language === "hi"
                    ? "bg-primary text-white font-bold shadow-sm"
                    : "text-text hover:text-primary font-medium"
                  }`}
              >
                हिंदी
              </button>
            </div>


            <motion.a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              initial="initial"
              whileHover="hovered"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-sans text-sm font-semibold rounded-full shadow-md hover:bg-primary-light hover:shadow-lg transition-all transform hover:-translate-y-[1px] whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <CascadeText text={t.navbar.bookBtn} />
            </motion.a>
          </div>

          {/* Mobile Actions: Only Menu Button to prevent clutter */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-text hover:text-primary transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-primary-dark/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer Overlay */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[300px] z-50 bg-bg shadow-2xl p-8 flex flex-col justify-between transition-transform duration-300 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
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
            {navLinks.map((link) => {
              const isActive = activeSection === link.anchor.replace("#", "");
              return (
                <a
                  key={link.anchor}
                  href={link.anchor}
                  onClick={(e) => handleLinkClick(e, link.anchor)}
                  className={`font-sans text-base font-semibold transition-colors py-2 border-b border-primary/5 text-left
                    ${isActive
                      ? "text-primary border-b-primary font-bold"
                      : "text-text hover:text-primary"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Drawer Footer Actions (Language and Theme) */}
        <div className="flex flex-col gap-5 mt-auto pt-6 border-t border-primary/5">
          <div className="flex items-center justify-center gap-4">
            {/* Drawer Language Selector */}
            <div className="flex items-center bg-primary/5 border border-primary/10 rounded-full p-0.5 text-xs">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 rounded-full transition-all duration-200 cursor-pointer ${language === "en"
                    ? "bg-primary text-white font-bold shadow-sm"
                    : "text-text hover:text-primary font-medium"
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("kn")}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${language === "kn"
                    ? "bg-primary text-white font-bold shadow-sm"
                    : "text-text hover:text-primary font-medium"
                  }`}
              >
                ಕನ್ನಡ
              </button>
              <button
                onClick={() => setLanguage("hi")}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${language === "hi"
                    ? "bg-primary text-white font-bold shadow-sm"
                    : "text-text hover:text-primary font-medium"
                  }`}
              >
                हिंदी
              </button>
            </div>
          </div>

          {/* Drawer CTA */}
          <motion.a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            initial="initial"
            whileHover="hovered"
            className="w-full text-center py-3 bg-primary text-white font-sans font-semibold rounded-full shadow-md hover:bg-primary-light hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <CascadeText text={t.navbar.bookBtn} />
          </motion.a>
        </div>
      </div>
    </>
  );
}
