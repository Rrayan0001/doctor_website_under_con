"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealFramerProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  className?: string;
}

export default function ScrollRevealFramer({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: ScrollRevealFramerProps) {
  // Map directions to start offsets
  const directionOffsets = {
    up: { y: 35, x: 0 },
    down: { y: -35, x: 0 },
    left: { x: -45, y: 0 },
    right: { x: 45, y: 0 },
    none: { x: 0, y: 0 },
  };

  const startOffset = directionOffsets[direction];

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: startOffset.x,
        y: startOffset.y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.215, 0.61, 0.355, 1], // premium damping easing curve
      }}
    >
      {children}
    </motion.div>
  );
}
