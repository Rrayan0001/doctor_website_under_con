"use client";

import React from "react";
import { motion } from "framer-motion";

interface CascadeTextProps {
  text: string;
  className?: string;
}

export default function CascadeText({ text, className = "" }: CascadeTextProps) {
  // Split text into characters. Replace standard spaces with non-breaking spaces to preserve formatting.
  const characters = text.split("").map((char) => (char === " " ? "\u00A0" : char));

  const transition = {
    duration: 0.32,
    ease: [0.25, 1, 0.5, 1] as const, // snappier ease-out
  };

  return (
    <motion.span 
      className={`relative overflow-hidden inline-flex ${className}`}
      whileHover="hovered"
    >
      {/* Front layer characters (slides up/out on hover) */}
      <motion.span className="flex" aria-hidden="true">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block transform-gpu"
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              ...transition,
              delay: index * 0.02,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>

      {/* Back layer characters (slides up/in from bottom on hover) */}
      <motion.span className="absolute inset-0 flex" aria-hidden="true">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            className="inline-block transform-gpu"
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              ...transition,
              delay: index * 0.02,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>

      {/* Screen reader fallback */}
      <span className="sr-only">{text}</span>
    </motion.span>
  );
}
