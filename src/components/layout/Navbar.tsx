"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Calendar } from "lucide-react";

const navLinks = [
  { label: "Home", anchor: "#home" },
  { label: "About", anchor: "#about" },
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
                Dr. Santosh Kulkarni
              </span>
              <span className="font-sans text-[8px] sm:text-[9px] font-semibold text-text-muted tracking-wider uppercase mt-1 leading-none">
                Gynecologist & Women&apos;s Health
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
                  className="font-sans text-sm font-semibold text-text hover:text-primary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-sans text-sm font-semibold rounded-full shadow-md hover:bg-primary-light hover:shadow-lg transition-all transform hover:-translate-y-[1px]"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
              Dr. Santosh<br />Kulkarni
            </span>
            <span className="font-sans text-[10px] text-accent font-bold tracking-widest uppercase mt-2 block">
              Gynecologist & Obstetrician
            </span>
          </div>

          {/* Drawer Links */}
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
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
          Book Consultation
        </a>
      </div>
    </>
  );
}
