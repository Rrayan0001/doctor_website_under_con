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
import { Sparkles, Sliders } from "lucide-react";

export default function Home() {
  const [showCandles, setShowCandles] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

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
              <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#faf8f4]/60 mt-4 max-w-md leading-relaxed">
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

      {/* Floating Interactive Settings panel for Showcase */}
      <div className="fixed bottom-6 left-6 z-[999] flex flex-col items-start gap-3">
        {showSettings && (
          <div className="bg-[#071e22]/95 backdrop-blur-md border border-[#c8994a]/30 p-4 rounded-2xl shadow-xl w-64 text-left animate-fade-in flex flex-col gap-3">
            <h4 className="font-display text-sm font-bold text-[#faf8f4] tracking-wide border-b border-[#c8994a]/20 pb-2">
              Animation Controls
            </h4>
            <div className="flex items-center justify-between text-xs text-[#faf8f4]/80">
              <span>Financial Chart Background</span>
              <button
                onClick={() => setShowCandles(!showCandles)}
                className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-300 ${
                  showCandles ? "bg-[#c8994a]" : "bg-white/20"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-[#071e22] transition-transform duration-300 ${
                    showCandles ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
            <a
              href="/showcase"
              className="mt-2 text-center text-xs font-semibold text-[#071e22] bg-[#c8994a] hover:bg-[#e8c07a] py-2 px-4 rounded-full transition-all flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              View Animations Showcase
            </a>
          </div>
        )}
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="w-12 h-12 rounded-full bg-[#0a4f52] border border-[#c8994a]/30 text-[#faf8f4] flex items-center justify-center shadow-lg hover:bg-[#1a7a7e] hover:border-[#c8994a] transition-all cursor-pointer"
          aria-label="Toggle settings panel"
        >
          <Sliders className="w-5 h-5 text-accent" />
        </button>
      </div>

      {/* Floating interactive components */}
      <WhatsAppFAB />
    </div>
  );
}
