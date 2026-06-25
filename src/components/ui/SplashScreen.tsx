"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type SplashScreenProps = {
  durationMs?: number;
  onComplete?: () => void;
};

const GOLD = "#d8b24a";
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];
const NAME_WORDS = ["Dr.", "Santosh", "Kulkarni"];

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  size: 3 + ((index * 7) % 10),
  left: 8 + ((index * 19) % 84),
  delay: (index % 7) * 0.35,
  duration: 7 + ((index * 5) % 8),
  drift: ((index % 2 === 0 ? 1 : -1) * (18 + ((index * 11) % 46))),
  opacity: 0.28 + ((index % 5) * 0.1),
}));

function SplitRevealName() {
  let letterIndex = 0;

  return (
    <h1 className="mt-8 flex flex-wrap items-center justify-center gap-x-3 overflow-hidden px-6 text-center font-display text-[clamp(2.15rem,6vw,5.35rem)] font-medium leading-[0.98] text-[#f8edce] drop-shadow-[0_10px_32px_rgba(216,178,74,0.16)]">
      {NAME_WORDS.map((word) => (
        <span key={word} className="inline-flex overflow-hidden pb-2">
          {Array.from(word).map((letter) => {
            const currentIndex = letterIndex;
            letterIndex += 1;

            return (
              <motion.span
                key={`${word}-${currentIndex}-${letter}`}
                className="inline-block"
                initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{
                  delay: 1.18 + currentIndex * 0.045,
                  duration: 0.78,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {letter}
              </motion.span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

export default function SplashScreen({ durationMs = 4300, onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const previousOverflow = useRef("");

  useEffect(() => {
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => setIsVisible(false), durationMs);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow.current;
    };
  }, [durationMs]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = previousOverflow.current;
        onComplete?.();
      }}
    >
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-[9999] isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#041a1c] text-[#f8edce]"
          initial={{ clipPath: "inset(0% 0% 0% 0% round 0px)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0% round 0px 0px 40px 40px)" }}
          transition={{ duration: 1.28, ease: EASE }}
          aria-label="Welcome animation for Dr. Santosh Kulkarni"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(216,178,74,0.14),transparent_31%),radial-gradient(circle_at_20%_80%,rgba(0,94,94,0.34),transparent_36%),linear-gradient(180deg,#052427_0%,#031315_100%)]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(245,221,160,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(245,221,160,0.1)_1px,transparent_1px)] [background-size:72px_72px]" />

          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              className="absolute bottom-[-5vh] rounded-full bg-[#f2cf69] shadow-[0_0_18px_rgba(242,207,105,0.9)]"
              style={{ width: particle.size, height: particle.size, left: `${particle.left}%`, opacity: particle.opacity }}
              animate={{
                y: ["0vh", "-55vh", "-108vh"],
                x: [0, particle.drift, particle.drift * -0.35],
                scale: [0.45, 1, 0.25],
                opacity: [0, particle.opacity, 0],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <motion.div
            className="relative z-10 flex w-full flex-col items-center px-4"
            initial={{ scale: 0.985 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative flex size-[min(50vw,250px)] min-h-40 min-w-40 items-center justify-center">
              <motion.img
                src="/bg_logo.png"
                alt="SK monogram logo reference"
                className="absolute inset-[10%] h-4/5 w-4/5 object-contain opacity-0 mix-blend-screen"
                animate={{ opacity: [0, 0.1, 0.2] }}
                transition={{ delay: 1.05, duration: 1.4, ease: "easeOut" }}
              />
              <svg viewBox="0 0 240 240" className="absolute inset-0 h-full w-full overflow-visible" role="img" aria-hidden="true">
                <defs>
                  <filter id="gold-glow" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="3.2" result="blur" />
                    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0.88 0 1 0 0 0.62 0 0 1 0 0.18 0 0 0 0.85 0" result="glow" />
                    <feMerge>
                      <feMergeNode in="glow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="liquid-gold" x1="25%" y1="0%" x2="85%" y2="100%">
                    <stop offset="0%" stopColor="#fff2b6" />
                    <stop offset="45%" stopColor={GOLD} />
                    <stop offset="100%" stopColor="#9a6b18" />
                  </linearGradient>
                </defs>
                <motion.circle
                  cx="120"
                  cy="120"
                  r="93"
                  fill="none"
                  stroke="url(#liquid-gold)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  filter="url(#gold-glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.55, ease: EASE }}
                  transform="rotate(-90 120 120)"
                />
                <motion.path
                  d="M73 151 C82 176 129 176 132 137 C135 99 76 103 83 70 C88 45 129 45 137 71 M153 55 L153 180 M154 122 L193 61 M156 122 L205 180"
                  fill="none"
                  stroke="url(#liquid-gold)"
                  strokeWidth="5.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#gold-glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: 0.22, duration: 1.75, ease: EASE }}
                />
              </svg>
            </div>

            <SplitRevealName />

            <motion.div
              className="mt-5 flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 2.25, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="block h-px w-32 bg-gradient-to-r from-transparent via-[#d8b24a] to-transparent shadow-[0_0_18px_rgba(216,178,74,0.75)]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 2.35, duration: 0.75, ease: EASE }}
              />
              <p className="text-center font-sans text-sm font-light uppercase tracking-[0.28em] text-[#d9c98f]/85 sm:text-base">
                Gynecologist &amp; Women&apos;s Health Specialist
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
