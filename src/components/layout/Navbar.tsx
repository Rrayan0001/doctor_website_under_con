"use client";

import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";

const navLinks = [
  { label: "Home", anchor: "#home" },
  { label: "About Doctor", anchor: "#about" },
  { label: "Treatments", anchor: "#services" },
  { label: "Patient Stories", anchor: "#testimonials" },
  { label: "Gallery", anchor: "#gallery" },
  { label: "Contact", anchor: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "frosted-glass shadow-sm py-3"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo Brand area */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="flex-shrink-0 w-9 h-9 flex items-center justify-center bg-primary-muted rounded-full">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 12C32 9.79086 33.7909 8 36 8C38.2091 8 40 9.79086 40 12C40 14.2091 38.2091 16 36 16C33.7909 16 32 14.2091 32 12Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M36 16C30 16 26 21 26 27C26 33.5 30.5 38 36 38C40.5 38 43 34 43 29.5C43 25 40 24 37.5 24C35.5 24 34.5 25.5 34.5 25.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31 26.5C29.5 27.5 29 29 29 30.5C29 32.5 30.5 34 32.5 34C34.5 34 35 32.5 35 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
                <path d="M34.5 23.5C33.5 22.5 32.5 22 31.5 22C30.5 22 29.5 22.5 29.5 23.5C29.5 25 31.5 25.5 32.5 26.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
                <path d="M22 42C22 46.4183 26.4772 50 32 50C37.5228 50 42 46.4183 42 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg md:text-xl font-bold text-primary tracking-tight leading-none">
                Dr. Santosh Kulkarni
              </span>
              <span className="font-sans text-[9px] font-semibold text-text-mid tracking-wider uppercase mt-1 leading-none">
                Gynecologist & Women&apos;s Health Specialist
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.anchor}
                  onClick={(e) => handleLinkClick(e, link.anchor)}
                  className="font-sans text-sm font-semibold text-text-mid hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-sans text-sm font-semibold rounded-[10px] shadow-[0_4px_12px_rgba(26,107,107,0.2)] hover:bg-primary-light transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-dark hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-text-dark/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] z-50 bg-white shadow-2xl p-8 flex flex-col justify-between transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          {/* Close button in Drawer */}
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-text-dark hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Logo brand wordmark in drawer */}
          <div className="mb-10">
            <span className="font-display text-2xl font-bold text-primary block leading-none">
              Dr. Santosh Kulkarni
            </span>
            <span className="font-sans text-[10px] text-text-mid tracking-wide uppercase mt-1 block">
              Women&apos;s Health Specialist
            </span>
          </div>

          {/* Drawer Links */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.anchor}
                onClick={(e) => handleLinkClick(e, link.anchor)}
                className="font-sans text-lg font-semibold text-text-dark hover:text-primary transition-colors py-2 border-b border-border-custom"
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
          className="w-full text-center py-3 bg-primary text-white font-sans font-semibold rounded-[10px] shadow-button hover:bg-primary-light transition-all inline-flex items-center justify-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          Book Consultation
        </a>
      </div>
    </>
  );
}
