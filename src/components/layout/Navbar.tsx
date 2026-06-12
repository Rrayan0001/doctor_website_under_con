"use client";

import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";

const navLinks = [
  { label: "Home", anchor: "#home" },
  { label: "About", anchor: "#about" },
  { label: "Services", anchor: "#services" },
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
            className="flex flex-col group cursor-pointer"
          >
            <span className="font-display text-2xl md:text-3xl font-bold text-primary tracking-tight leading-none">
              Dr. Santosh
            </span>
            <span className="font-sans text-[10px] md:text-[11px] font-medium text-text-mid tracking-wide uppercase mt-1">
              Gynecologist & Women&apos;s Health Specialist
            </span>
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
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-sans text-sm font-semibold rounded-button shadow-button hover:bg-primary-light transition-all hover:scale-[1.03]"
            >
              <Calendar className="w-4 h-4" />
              Check Availability
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
              Dr. Santosh
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
          className="w-full text-center py-3 bg-primary text-white font-sans font-semibold rounded-button shadow-button hover:bg-primary-light transition-all inline-flex items-center justify-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          Check Availability
        </a>
      </div>
    </>
  );
}
