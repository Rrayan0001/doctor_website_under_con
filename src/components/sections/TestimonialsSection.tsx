"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const featuredQuotes = [
  {
    text: "Dr. Kulkarni guided me through a high-risk pregnancy with so much patience and expertise. I felt completely safe throughout.",
    attribution: "— High-Risk Pregnancy Patient, Mumbai",
  },
  {
    text: "After years of struggling with PCOS, Dr. Kulkarni finally gave me a clear plan and real results. Life-changing.",
    attribution: "— Preethi S., PCOS Patient",
  },
  {
    text: "Very professional, thorough, and genuinely caring. The clinic is clean and appointments are always on time.",
    attribution: "— Kavitha M., Regular Patient",
  },
];

const cards = [
  {
    quote: "After years of struggling with PCOS, Dr. Kulkarni finally gave me a clear plan and real results. Life-changing.",
    author: "Preethi S.",
    tag: "PCOS Patient",
  },
  {
    quote: "Very professional, thorough, and genuinely caring. The clinic is clean and appointments are always on time.",
    author: "Kavitha M.",
    tag: "Regular Patient",
  },
  {
    quote: "Cannot recommend enough. Felt completely safe and cared for throughout my entire pregnancy.",
    author: "Anonymous",
    tag: "High-Risk Pregnancy",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setOpacity(0);
      setTimeout(() => {
        // Change text
        setCurrentIndex((prev) => (prev + 1) % featuredQuotes.length);
        // Fade in
        setOpacity(100);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-bg scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Label */}
        <div className="mb-12 text-left">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            PATIENT STORIES
          </span>
          <h2 className="font-display text-[2.2rem] sm:text-[3rem] font-bold text-primary-dark leading-tight">
            What Our Patients Say
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Featured Quote Display (5/12 width) */}
          <div className="lg:col-span-5 bg-white border border-primary/5 rounded-2xl p-8 sm:p-10 shadow-sm relative min-h-[320px] flex flex-col justify-between">
            
            {/* Giant quotation mark in Cormorant */}
            <span className="absolute top-2 left-6 font-display text-[8rem] font-bold text-primary opacity-15 leading-none select-none pointer-events-none">
              &ldquo;
            </span>

            {/* Dynamic quote container */}
            <div
              className="transition-all duration-300 flex-grow flex flex-col justify-center mt-6"
              style={{ opacity: opacity / 100, transform: `translateY(${(100 - opacity) / 15}px)` }}
            >
              <p className="font-display italic text-[1.4rem] sm:text-[1.6rem] text-primary-dark leading-relaxed mb-6 font-medium">
                &ldquo;{featuredQuotes[currentIndex].text}&rdquo;
              </p>
              
              <div className="flex flex-col">
                <span className="font-sans text-sm font-semibold text-text-muted">
                  {featuredQuotes[currentIndex].attribution}
                </span>
                
                {/* 5 Gold Stars */}
                <div className="flex gap-1 text-accent mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Stacked testinomial cards (7/12 width) */}
          <div className="lg:col-span-7 flex flex-col gap-4 pt-4 lg:pt-0">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-primary/5 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                style={{
                  zIndex: 10 + idx,
                  marginTop: idx > 0 ? "-16px" : "0px",
                }}
              >
                <div className="flex flex-col gap-3">
                  {/* Star Rating */}
                  <div className="flex gap-0.5 text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="font-sans italic text-sm text-text-muted leading-relaxed">
                    &ldquo;{card.quote}&rdquo;
                  </p>

                  <div className="flex justify-between items-center mt-1 border-t border-primary/5 pt-2.5">
                    <span className="font-sans text-xs font-bold text-primary-dark">
                      {card.author}
                    </span>
                    <span className="font-sans text-[10px] uppercase font-bold tracking-wider text-accent">
                      {card.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
