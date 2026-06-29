"use client";

import React, { ReactNode } from "react";

interface GlowingShadowProps {
  children: ReactNode;
  className?: string;
  glowColor?: "teal" | "gold" | "mixed";
  animateSpeed?: "slow" | "medium" | "fast";
  borderRadius?: string;
}

export default function GlowingShadow({
  children,
  className = "",
  glowColor = "mixed",
  animateSpeed = "slow",
  borderRadius = "rounded-2xl",
}: GlowingShadowProps) {
  // Speed options for the rotating conic border
  const speedClasses = {
    slow: "animate-[spin_12s_linear_infinite]",
    medium: "animate-[spin_8s_linear_infinite]",
    fast: "animate-[spin_4s_linear_infinite]",
  };

  // Glow gradients matching the website palette (teal and gold)
  const glowGradients = {
    teal: "from-[#0a4f52]/40 via-[#1a7a7e]/30 to-[#071e22]/50",
    gold: "from-[#c8994a]/30 via-[#e8c07a]/20 to-transparent",
    mixed: "from-[#0a4f52]/40 via-[#c8994a]/30 to-[#1a7a7e]/40",
  };

  // Conic gradients for the rotating hover border outline
  const conicGradients = {
    teal: "bg-[conic-gradient(from_0deg,rgba(10,79,82,0.15),rgba(26,122,126,0.35),rgba(10,79,82,0.15))]",
    gold: "bg-[conic-gradient(from_0deg,rgba(200,153,74,0.15),rgba(232,192,122,0.35),rgba(200,153,74,0.15))]",
    mixed: "bg-[conic-gradient(from_0deg,rgba(10,79,82,0.15),rgba(200,153,74,0.35),rgba(26,122,126,0.15),rgba(10,79,82,0.15))]",
  };

  return (
    <div className={`relative group/glow ${className}`}>
      
      {/* 1. Behind-the-card Soft Glow Aura (Pulsating and expanding on hover) */}
      <div 
        className={`absolute -inset-1.5 ${borderRadius} bg-gradient-to-r ${glowGradients[glowColor]} opacity-75 blur-xl transition-all duration-1000 group-hover/glow:opacity-100 group-hover/glow:duration-300 group-hover/glow:blur-2xl pointer-events-none z-0`} 
      />
      
      {/* 2. Rotating Conic Gradient Outer Border Outline (Activates on hover) */}
      <div className={`absolute -inset-[1px] ${borderRadius} overflow-hidden pointer-events-none z-0`}>
        <div
          className={`absolute -inset-[300%] ${conicGradients[glowColor]} opacity-0 group-hover/glow:opacity-100 transition-opacity duration-700 ${speedClasses[animateSpeed]}`}
        />
      </div>

      {/* 3. Card Content Wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
