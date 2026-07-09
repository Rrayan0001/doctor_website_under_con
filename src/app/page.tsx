"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TickerStrip from "@/components/sections/TickerStrip";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";
import SplashScreen from "@/components/ui/SplashScreen";
import CandlestickBackground from "@/components/ui/CandlestickBackground";
import ScrollParallax from "@/components/ui/ScrollParallax";

export default function Home() {
  const [showCandles, setShowCandles] = useState(false);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* 1. Cinematic Entrance Splash Screen */}
      <SplashScreen />

      {/* Canvas-Based Candlestick Background Overlay */}
      {showCandles && <CandlestickBackground />}

      {/* Sticky Frosted Navbar */}
      <Navbar />

      {/* Main content elements */}
      <main className="flex-grow relative z-10">
        <HeroSection />
        <TickerStrip />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />

        {/* 7. Parallax Background & Foreground Divider Banner */}
        <ScrollParallax
          bgContent={
            <div className="absolute inset-0 bg-[#041a1c] flex items-center justify-center">
              {/* Radial glow background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(216,178,74,0.15),transparent_70%)]" />
              <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(245,221,160,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(245,221,160,0.1)_1px,transparent_1px)] [background-size:48px_48px]" />
            </div>
          }
          fgContent={
            <div className="flex flex-col items-center justify-center p-6 text-center select-none">
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-widest uppercase text-accent animated-gradient-text">
                Clinical Excellence
              </h2>
              <p className="font-sans text-[10px] sm:text-xs uppercase tracking-wider text-[#faf8f4]/60 mt-4 max-w-2xl leading-relaxed text-center">
                Providing Compassionate and Advanced Gynecology Treatments
              </p>
            </div>
          }
          containerHeight="h-[250px] sm:h-[320px]"
        />

        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* Primary dark Footer */}
      <Footer />



      {/* Floating interactive components */}
      <WhatsAppFAB />
    </div>
  );
}
