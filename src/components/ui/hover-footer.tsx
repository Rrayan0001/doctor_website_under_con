"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const FooterBackgroundGradient = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Premium accent glows */}
      <div className="absolute -bottom-48 -left-48 w-[450px] h-[450px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute -bottom-48 -right-48 w-[450px] h-[450px] bg-accent/8 rounded-full blur-[120px] mix-blend-screen" />
    </div>
  );
};

export const TextHoverEffect = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== 0 && cursor.y !== 0) {
      const rect = svgRef.current.getBoundingClientRect();
      const cx = ((cursor.x - rect.left) / rect.width) * 100;
      const cy = ((cursor.y - rect.top) / rect.height) * 100;
      setMaskPosition({ cx: `${cx}%`, cy: `${cy}%` });
    }
  }, [cursor]);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  return (
    <svg
      ref={svgRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`w-full h-full select-none ${className}`}
      viewBox="0 0 1000 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="textHoverReveal"
          cx={maskPosition.cx}
          cy={maskPosition.cy}
          r="25%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="rgba(200, 153, 74, 0.95)" />
          <stop offset="60%" stopColor="rgba(200, 153, 74, 0.35)" />
          <stop offset="100%" stopColor="rgba(200, 153, 74, 0)" />
        </radialGradient>
      </defs>

      {/* Base stroke text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-display font-bold text-7xl sm:text-8xl fill-transparent stroke-white/10 stroke-[1px]"
      >
        {text}
      </text>

      {/* Interactive spotlight reveal text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#textHoverReveal)"
        className="font-display font-bold text-7xl sm:text-8xl fill-transparent stroke-accent stroke-[1.2px] transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
        }}
      >
        {text}
      </text>
    </svg>
  );
};
