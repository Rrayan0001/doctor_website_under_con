"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeSplash({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const [stage, setStage] = useState(1); // 1 = Logo Phase, 2 = Reveal Phase

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Stage 1 (Logo Phase): lasts 1 second
    const stage1Timer = setTimeout(() => {
      setStage(2);
    }, 1000);

    // Stage 2 (Reveal Phase): lasts 1.2 seconds (total 2.2 seconds)
    const stage2Timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2200);

    return () => {
      clearTimeout(stage1Timer);
      clearTimeout(stage2Timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  // Clean up body overflow when component hides or unmounts
  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: stage === 1 ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: stage === 1 ? 0 : 1.2, ease: "easeInOut" }}
        >
          {/* Logo Stage Container */}
          <motion.div
            className="flex flex-col items-center px-6"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{
              scale: stage === 1 ? 1 : 0.94,
              opacity: stage === 1 ? 1 : 0,
            }}
            transition={{
              duration: stage === 1 ? 1.0 : 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Centered Large Gold Brand Logo (SK Monogram SVG) */}
            <svg
              viewBox="0 0 240 240"
              className="w-36 h-36 sm:w-44 sm:h-44 overflow-visible mb-6"
              role="img"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="splash-gold" x1="25%" y1="0%" x2="85%" y2="100%">
                  <stop offset="0%" stopColor="#fff2b6" />
                  <stop offset="45%" stopColor="#c8994a" />
                  <stop offset="100%" stopColor="#9a6b18" />
                </linearGradient>
                <filter id="gold-glow-splash" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feColorMatrix
                    type="matrix"
                    values="1 0 0 0 0.8  0 1 0 0 0.6  0 0 1 0 0.3  0 0 0 0.7 0"
                  />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <circle
                cx="120"
                cy="120"
                r="93"
                fill="none"
                stroke="url(#splash-gold)"
                strokeWidth="2.8"
                filter="url(#gold-glow-splash)"
              />
              <path
                d="M73 151 C82 176 129 176 132 137 C135 99 76 103 83 70 C88 45 129 45 137 71 M153 55 L153 180 M154 122 L193 61 M156 122 L205 180"
                fill="none"
                stroke="url(#splash-gold)"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#gold-glow-splash)"
              />
            </svg>
            <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.1em] text-accent uppercase text-center">
              Dr. Santosh Kulkarni
            </h1>
            <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#faf8f4]/60 mt-2 text-center">
              Obstetrician, Gynaecologist &amp; Infertility Specialist
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
