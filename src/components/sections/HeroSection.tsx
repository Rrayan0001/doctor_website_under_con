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
      className="relative min-h-screen lg:h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-bg"
    >
      {/* LEFT SECTION (Text content + Golden background) */}
      <div className="w-full lg:w-1/2 min-h-[55vh] lg:min-h-screen bg-[#b09838] flex flex-col justify-start lg:justify-center items-center px-6 sm:px-16 lg:px-24 pt-24 pb-16 lg:py-0 text-center relative overflow-hidden">
        {/* Textured background overlay blending with clinical office image */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/images/clinical_scrubs_patients.jpeg')" }}
        />

        {/* Large Faint Initials Watermark in background */}
        <div className="absolute -bottom-12 sm:-bottom-16 left-1/2 -translate-x-1/2 select-none pointer-events-none font-signature text-[8rem] xs:text-[10rem] sm:text-[14rem] md:text-[18rem] lg:text-[22rem] text-white/5 whitespace-nowrap leading-none z-0">
          SK
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Signature Title (Dr. Santosh Kulkarni) */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-signature text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] text-white leading-none tracking-normal select-none mb-2 cursor-default"
          >
            {t.common.doctorName}
          </motion.h1>

          {/* Subtitle (BOARD CERTIFIED GYNECOLOGIST & OBSTETRICIAN) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.2em] xs:tracking-[0.25em] text-white/80 mb-6 lg:mb-8 cursor-default"
          >
            {language === "en" ? "BOARD CERTIFIED GYNECOLOGIST & OBSTETRICIAN" : t.common.doctorSubtitle.toUpperCase()}
          </motion.p>

          {/* Localized bio paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={startAnim ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-sans text-xs xs:text-sm sm:text-base text-white/95 leading-relaxed max-w-md md:max-w-lg mb-8 lg:mb-12 cursor-default"
          >
            {t.hero.description}
          </motion.p>


        </div>
      </div>

      {/* RIGHT SECTION (Doctor Portrait grayscale full-bleed) */}
      <div className="w-full lg:w-1/2 flex-grow h-[40vh] min-h-[320px] lg:h-screen lg:min-h-0 relative overflow-hidden bg-zinc-200">
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
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center filter grayscale contrast-[1.08] brightness-[0.98] transition-all duration-700 hover:scale-[1.02]"
          />
          {/* Subtle gradient overlay to darken the bottom of portrait */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
        </motion.div>


      </div>
    </section>
  );
}
