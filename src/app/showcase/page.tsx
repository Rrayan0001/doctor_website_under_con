"use client";

import { useState } from "react";
import Link from "next/link";
import CandlestickBackground from "@/components/ui/CandlestickBackground";
import MouseGlowTracker from "@/components/ui/MouseGlowTracker";
import WelcomeSplash from "@/components/ui/WelcomeSplash";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import ScrollRevealFramer from "@/components/ui/ScrollRevealFramer";
import ScrollParallax from "@/components/ui/ScrollParallax";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { ArrowLeft, Play, Sun, Sparkles, MoveRight, HelpCircle } from "lucide-react";

export default function ShowcasePage() {
  const [showCandles, setShowCandles] = useState(true);
  const [showSplash, setShowSplash] = useState(false);

  const mockTestimonials = [
    {
      quote: "The care and attention to detail provided by Dr. Santosh were outstanding. Every phase of my treatment was explained clearly.",
      author: "Priya Sharma",
      tag: "Pregnancy Care",
    },
    {
      quote: "Highly recommend for PCOS management. The approach is extremely modern, evidence-based, and compassionate.",
      author: "Ananya Mehta",
      tag: "PCOS Treatment",
    },
    {
      quote: "The absolute best medical practitioner. The clinic is equipped with premium facilities, and the staff is friendly.",
      author: "Kiran Rao",
      tag: "General Gynecology",
    },
  ];

  const mockImages = [
    { src: "/images/headshot_clinic.jpeg", alt: "Clinic Room", title: "Consultation Suite" },
    { src: "/images/headshot_navy.jpeg", alt: "Doctor Portrait", title: "Dr. Santosh Kulkarni" },
    { src: "/images/clinical_scrubs_patients.jpeg", alt: "Medical Lab", title: "Advanced Laparoscopy Lab" },
  ];

  return (
    <div className="min-h-screen bg-[#031315] text-[#faf8f4] relative font-sans overflow-x-hidden">
      {/* Welcome Splash Screen Trigger Demo */}
      {showSplash && <WelcomeSplash onComplete={() => setShowSplash(false)} />}

      {/* Canvas-Based Candlestick Background */}
      {showCandles && <CandlestickBackground />}

      {/* Floating Header */}
      <header className="sticky top-0 z-50 bg-[#031315]/80 backdrop-blur-md border-b border-[#c8994a]/15 py-4 px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c8994a] hover:text-[#e8c07a] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Website
        </Link>
        <h1 className="font-display text-xl font-bold tracking-wider text-[#faf8f4]">
          PREMIUM ANIMATIONS PLAYGROUND
        </h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowCandles(!showCandles)}
            className="px-4 py-2 border border-[#c8994a]/30 hover:border-[#c8994a] rounded-full text-xs font-semibold bg-[#031315]/90 hover:bg-[#faf8f4]/5 text-accent transition-all cursor-pointer"
          >
            {showCandles ? "Disable Canvas BG" : "Enable Canvas BG"}
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10 flex flex-col gap-16">
        
        {/* Intro */}
        <section className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#c8994a] mb-2 block">
            Exclusive Visual Showcase
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold leading-tight mb-4">
            Interactive Animation Assets
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed">
            A comprehensive gallery displaying the 8 cinematic visual mechanics built directly into the codebase. Hover, scroll, and interact to explore.
          </p>
        </section>

        {/* Animation Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Canvas Candlestick BG */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-[#c8994a]/40 transition-colors">
            <div>
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">
                Effect 1
              </span>
              <h3 className="font-display text-2xl font-bold mb-3">
                Canvas Candlestick Background
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Renders a lightweight, high-performance background simulating live market candles. Implements random walk logic, grid overlays, volume bars, and a gold price-tracking tag at the right edge.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => setShowCandles(!showCandles)}
                className="px-6 py-3 bg-[#c8994a] hover:bg-[#e8c07a] text-[#031315] font-semibold text-xs uppercase tracking-widest rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                {showCandles ? "Disable Backdrop" : "Enable Backdrop"}
              </button>
            </div>
          </div>

          {/* Card 2: Interactive Mouse Glow Tracker */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-[#c8994a]/40 transition-colors">
            <div>
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">
                Effect 2
              </span>
              <h3 className="font-display text-2xl font-bold mb-3">
                Interactive Mouse Glow Tracker
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Dynamically tracks mouse position to create a custom CSS radial spotlight gradient. The overlay fades in on hover over a 500ms transition.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <MouseGlowTracker glowColor="rgba(212, 175, 55, 0.12)" className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center cursor-default">
                <p className="text-xs font-bold text-accent uppercase mb-1">Gold Spotlight</p>
                <p className="text-[10px] text-white/50">Hover me to test</p>
              </MouseGlowTracker>
              <MouseGlowTracker glowColor="rgba(16, 185, 129, 0.15)" className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center cursor-default">
                <p className="text-xs font-bold text-emerald-400 uppercase mb-1">Green Spotlight</p>
                <p className="text-[10px] text-white/50">Hover me to test</p>
              </MouseGlowTracker>
            </div>
          </div>

          {/* Card 3: Welcome Splash Screen */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-[#c8994a]/40 transition-colors">
            <div>
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">
                Effect 3
              </span>
              <h3 className="font-display text-2xl font-bold mb-3">
                Welcome Intro Splash Screen
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                An elegant, luxury cinematic transition. Stage 1 scales and fades the gold logo for 1s. Stage 2 fades out the black backdrop over 1.2s to reveal the content. Locks body scroll and restores on completion.
              </p>
            </div>
            <div>
              <button
                onClick={() => setShowSplash(true)}
                className="px-6 py-3 bg-[#c8994a] hover:bg-[#e8c07a] text-[#031315] font-semibold text-xs uppercase tracking-widest rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                Trigger Splash Screen Demo
              </button>
            </div>
          </div>

          {/* Card 8: High Performance Live Stats Counter */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-[#c8994a]/40 transition-colors">
            <div>
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">
                Effect 8
              </span>
              <h3 className="font-display text-2xl font-bold mb-3">
                Live Stats Counters
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Uses IntersectionObserver to trigger counting. Animates from 0 over 1.8s with a smooth easeOut curve, directly modifying the DOM textContent of a span ref to bypass React re-renders for max FPS.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <p className="text-2xl font-display font-bold text-accent">
                  <AnimatedCounter value={15} suffix="+" />
                </p>
                <p className="text-[9px] uppercase tracking-wider text-white/50">Experience</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <p className="text-2xl font-display font-bold text-accent">
                  <AnimatedCounter value={99.9} decimals={1} suffix="%" />
                </p>
                <p className="text-[9px] uppercase tracking-wider text-white/50">Precision</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <p className="text-2xl font-display font-bold text-accent">
                  <AnimatedCounter value={5000} prefix="$" />
                </p>
                <p className="text-[9px] uppercase tracking-wider text-white/50">Investments</p>
              </div>
            </div>
          </div>

        </div>

        {/* Card 4: Interactive Testimonial Carousel */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#c8994a]/40 transition-colors">
          <div className="mb-6">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">
              Effect 4
            </span>
            <h3 className="font-display text-3xl font-bold mb-2">
              Interactive Testimonial Carousel
            </h3>
            <p className="text-sm text-white/70 leading-relaxed max-w-xl">
              An auto-playing Embla carousel sliding every 4500ms, looping seamlessly. Custom pill indicators stretch smoothly, and cards feature a premium glassmorphic border hover effect.
            </p>
          </div>
          <div className="w-full">
            <TestimonialCarousel testimonials={mockTestimonials} />
          </div>
        </section>

        {/* Card 5: Infinite Image Marquee Slider */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#c8994a]/40 transition-colors">
          <div className="mb-6">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">
              Effect 5
            </span>
            <h3 className="font-display text-3xl font-bold mb-2">
              Infinite Image Marquee Slider
            </h3>
            <p className="text-sm text-white/70 leading-relaxed max-w-xl">
              A seamless continuous horizontal ribbon. Binds a hover transition to pause loop animation, and features image zoom focus transitions on individual card hover.
            </p>
          </div>
          <div className="w-full bg-[#021112]/50 rounded-2xl overflow-hidden py-4 border border-white/5">
            <InfiniteMarquee items={mockImages} speed={25} />
          </div>
        </section>

        {/* Card 6: Scroll Entrance Reveals */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#c8994a]/40 transition-colors">
          <div className="mb-8">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">
              Effect 6
            </span>
            <h3 className="font-display text-3xl font-bold mb-2">
              Scroll Entrance Reveals
            </h3>
            <p className="text-sm text-white/70 leading-relaxed max-w-xl">
              Framer Motion wrappers triggering enter animations when elements hit an offset view margin. Supports direction translates with heavy cubic-bezier damping easing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <ScrollRevealFramer direction="left" className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <p className="text-xs font-bold text-accent uppercase">Slide Left</p>
              <p className="text-[10px] text-white/50 mt-2">Triggered from left margin</p>
            </ScrollRevealFramer>
            <ScrollRevealFramer direction="up" className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <p className="text-xs font-bold text-accent uppercase">Slide Up</p>
              <p className="text-[10px] text-white/50 mt-2">Triggered upwards</p>
            </ScrollRevealFramer>
            <ScrollRevealFramer direction="down" className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <p className="text-xs font-bold text-accent uppercase">Slide Down</p>
              <p className="text-[10px] text-white/50 mt-2">Triggered downwards</p>
            </ScrollRevealFramer>
            <ScrollRevealFramer direction="right" className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <p className="text-xs font-bold text-accent uppercase">Slide Right</p>
              <p className="text-[10px] text-white/50 mt-2">Triggered from right margin</p>
            </ScrollRevealFramer>
          </div>
        </section>

        {/* Card 7: Parallax Background & Foreground Scroll */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#c8994a]/40 transition-colors">
          <div className="mb-6">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">
              Effect 7
            </span>
            <h3 className="font-display text-3xl font-bold mb-2">
              Parallax Scroll (CSS viewTimeline + passive JS fallback)
            </h3>
            <p className="text-sm text-white/70 leading-relaxed max-w-xl">
              Creates depth by moving background and foreground elements at differential rates. Leverages high-performance CSS `view-timeline` with feature detection, defaulting to passive JS fallback computations on unsupported clients.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <ScrollParallax
              bgContent={
                <div className="absolute inset-0 bg-[#071e22] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)]" />
                  <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(245,221,160,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(245,221,160,0.1)_1px,transparent_1px)] [background-size:36px_36px]" />
                </div>
              }
              fgContent={
                <h4 className="font-display text-4xl sm:text-7xl font-bold text-[#faf8f4] opacity-80 uppercase tracking-widest text-center select-none animated-gradient-text">
                  Parallax Depth
                </h4>
              }
              containerHeight="h-[250px]"
            />
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#c8994a]/15 py-8 text-center text-xs text-white/40 mt-16">
        <p>&copy; {new Date().getFullYear()} Dr. Santosh Kulkarni Portfolio. Built with Premium Canvas and CSS visual dynamics.</p>
      </footer>
    </div>
  );
}
