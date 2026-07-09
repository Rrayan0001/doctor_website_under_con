"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t, language } = useLanguage();
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    // Delay animations to start exactly when the 4.3s Splash Screen finishes sliding away
    const timer = setTimeout(() => {
      setStartAnim(true);
    }, 4300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-bg"
    >
      {/* ===================== MOBILE LAYOUT (< lg) ===================== */}
      {/* Full-bleed photo with gradient overlay and text on top */}
      <div className="lg:hidden relative w-full min-h-screen flex flex-col justify-end">

        {/* Background portrait image — full-bleed */}
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={startAnim ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.06 }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/headshot_navy.jpeg"
            alt={t.common.doctorName}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top filter grayscale contrast-[1.05] brightness-[0.95]"
          />
        </motion.div>

        {/* Strong gradient: transparent at top → solid gold/dark at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f10]/95 via-[#0d1f10]/40 to-transparent pointer-events-none" />

        {/* Golden gradient accent strip at bottom-left */}
        <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-[#7a5c00]/70 via-[#b09838]/20 to-transparent pointer-events-none" />

        {/* Text content — pinned to bottom of screen */}
        <div className="relative z-10 px-6 pb-10 pt-48 text-center flex flex-col items-center gap-3 w-full">
          
          {/* Eyebrow badge */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-accent/90 font-sans text-center"
          >
            ✦ {language === "en" ? "GYNECOLOGIST & WOMEN'S HEALTH SPECIALIST" : t.common.doctorSubtitle.toUpperCase()}
          </motion.span>

          {/* Doctor name — large signature font */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.1, delay: 0.55 }}
            className="font-signature text-[3.8rem] leading-[0.95] text-white select-none cursor-default text-center"
          >
            {t.common.doctorName}
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={startAnim ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="w-16 h-[2px] bg-accent origin-center"
          />

          {/* Bio paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="font-sans text-sm text-white/85 leading-relaxed max-w-xs cursor-default text-justify"
          >
            {t.hero.description}
          </motion.p>
        </div>
      </div>

      {/* ===================== DESKTOP LAYOUT (≥ lg) ===================== */}
      {/* Side-by-side split: golden left, photo right */}
      <div className="hidden lg:flex flex-row h-screen">

        {/* LEFT SECTION (Text content + Golden background) */}
        <div className="w-1/2 min-h-screen bg-[#b09838] flex flex-col justify-center items-center px-24 text-center relative overflow-hidden">
          {/* Textured background overlay blending with clinical office image */}
          <div
            className="absolute inset-0 opacity-15 mix-blend-overlay bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: "url('/images/clinical_scrubs_patients.jpeg')" }}
          />

          {/* Large Faint Initials Watermark in background */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 select-none pointer-events-none font-signature text-[22rem] text-white/5 whitespace-nowrap leading-none z-0">
            SK
          </div>

          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Signature Title */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="font-signature text-[7.5rem] text-white leading-none tracking-normal select-none mb-2 cursor-default"
            >
              {t.common.doctorName}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-sans text-sm font-semibold uppercase tracking-[0.25em] text-white/80 mb-8 cursor-default"
            >
              {language === "en" ? "DEDICATED TO ENHANCING WOMEN'S HEALTH & COMPREHENSIVE CARE." : t.common.doctorSubtitle.toUpperCase()}
            </motion.p>

            {/* Bio paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="font-sans text-base text-white/95 leading-relaxed max-w-lg mb-12 cursor-default"
            >
              {t.hero.description}
            </motion.p>
          </div>
        </div>

        {/* RIGHT SECTION (Doctor Portrait grayscale full-bleed) */}
        <div className="w-1/2 h-screen relative overflow-hidden bg-zinc-200">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={startAnim ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.04 }}
            transition={{ duration: 1.4, delay: 0.4 }}
            className="w-full h-full relative"
          >
            <Image
              src="/images/headshot_navy.jpeg"
              alt={t.common.doctorName}
              fill
              priority
              sizes="50vw"
              className="object-cover object-center filter grayscale contrast-[1.08] brightness-[0.98] transition-all duration-700 hover:scale-[1.02]"
            />
            {/* Subtle gradient overlay to darken the bottom of portrait */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
