"use client";
import React from "react";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

/**
 * Spotlight — an SVG-based radial beam that appears on load.
 * Adapted from the Ecommerce-v1-master reference to use teal (#0a4f52)
 * instead of white, matching the doctor portfolio bright-mode palette.
 */
export const HeroSpotlight: React.FC<SpotlightProps> = ({ className = "", fill }) => {
  return (
    <svg
      className={`animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#hero-spotlight-filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "#0a4f52"}
          fillOpacity="0.14"
        />
      </g>
      <defs>
        <filter
          id="hero-spotlight-filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
};

export default HeroSpotlight;
