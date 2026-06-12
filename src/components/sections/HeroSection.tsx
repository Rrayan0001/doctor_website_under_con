"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import StatPill from "../ui/StatPill";

export default function HeroSection() {
  const handleAvailabilityClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#contact");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const phoneNumber = "919876543210";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Dr.%20Santosh%2C%20I%27d%20like%20to%20check%20availability%20for%20a%20consultation.`;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column - Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <span className="inline-block px-3.5 py-1.5 mb-6 bg-primary-muted text-primary border border-primary-light/30 font-sans text-xs font-bold uppercase tracking-widest rounded-button">
              Trusted Women&apos;s Health Care
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] text-text-dark tracking-tight mb-6"
          >
            <span className="text-primary block">Dr. Santosh</span>
            Gynecologist & <br />
            Women&apos;s Health Specialist
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-[17px] text-text-mid leading-relaxed mb-8 max-w-[480px]"
          >
            Compassionate care for every woman — from adolescence through menopause. Specialist in high-risk pregnancy, PCOS, infertility, and advanced laparoscopic procedures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 w-full mb-12"
          >
            <a
              href="#contact"
              onClick={handleAvailabilityClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-sans font-semibold rounded-button shadow-button hover:bg-primary-light transition-all hover:scale-[1.03]"
            >
              <Calendar className="w-5 h-5" />
              Check Availability
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary-muted font-sans font-semibold rounded-button transition-all hover:scale-[1.03]"
            >
              {/* WhatsApp custom SVG icon */}
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.458h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </motion.div>

          {/* Quick Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 w-full"
          >
            <StatPill number="15+" label="Years Experience" />
            <StatPill number="10,000+" label="Patients Treated" />
            <StatPill number="4.9★" label="Patient Rating" />
          </motion.div>
        </div>

        {/* Right Column - Photo & Organic Blob */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-10 lg:mt-0">
          
          {/* Organic Blob Behind Photo */}
          <div className="absolute w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-primary-muted rounded-full filter blur-3xl opacity-75 z-0" />
          
          <div className="relative z-10 w-[280px] sm:w-[320px] aspect-[768/1284] max-w-full">
            
            {/* Main Doctor Image with 2deg Rotation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="relative rounded-[32px] overflow-hidden shadow-hero-image border border-primary/10 w-full h-full"
            >
              <Image
                src="/images/headshot_navy.jpeg"
                alt="Dr. Santosh - Professional Gynecologist Headshot"
                width={380}
                height={636}
                priority
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Floating Card 1 - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-[-15px] left-[-10px] sm:left-[-25px] bg-white px-4 py-2.5 rounded-card shadow-card border border-border-custom flex items-center gap-2 z-20 hover:scale-105 transition-transform"
            >
              <span className="text-primary text-sm font-bold">✅</span>
              <span className="font-sans text-xs font-bold text-text-dark">
                MBBS · MD (OBG) · Fellowship
              </span>
            </motion.div>

            {/* Floating Card 2 - Top Right */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-[-10px] right-[-5px] sm:right-[-20px] bg-white px-4.5 py-2.5 rounded-card shadow-card border border-border-custom flex items-center gap-2 z-20 hover:scale-105 transition-transform"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="w-2 h-2 rounded-full bg-primary absolute left-[22px]" />
              <span className="font-sans text-xs font-bold text-text-dark pl-1">
                📍 Available Mon – Sat
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
          onClick={() => {
            const nextSec = document.querySelector("#ticker-strip");
            if (nextSec) {
              nextSec.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {/* Scroll Down mouse wheel design */}
          <div className="w-6 h-10 border-2 border-text-light rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-text-light rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
