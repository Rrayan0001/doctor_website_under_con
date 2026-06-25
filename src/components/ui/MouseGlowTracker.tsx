"use client";

import React, { useRef, useState } from "react";

interface MouseGlowTrackerProps {
  children: React.ReactNode;
  glowColor?: string; // Configurable glow color (default to gold-ish translucent)
  radius?: number; // Configurable glow radius
  className?: string; // Wrapper class name
}

export default function MouseGlowTracker({
  children,
  glowColor = "rgba(212, 175, 55, 0.08)",
  radius = 400,
  className = "",
}: MouseGlowTrackerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group overflow-hidden ${className}`}
    >
      {/* absolute pointer-events-none overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 ease-out z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(${radius}px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 60%)`,
        }}
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
