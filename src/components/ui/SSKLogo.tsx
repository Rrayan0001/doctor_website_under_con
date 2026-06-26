"use client";

import React from "react";

interface SSKLogoProps extends React.SVGProps<SVGSVGElement> {
  strokeWidthCircle?: number;
  strokeWidthPath?: number;
}

export default function SSKLogo({
  strokeWidthCircle = 10,
  strokeWidthPath = 15,
  className = "",
  ...props
}: SSKLogoProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={`w-full h-full overflow-visible select-none ${className}`}
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="120"
        cy="120"
        r="93"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidthCircle}
        strokeLinecap="round"
      />
      <path
        d="M46 151 C53 176 88 176 90 137 C93 99 48 103 54 70 C57 45 88 45 94 71 M94 151 C101 176 136 176 138 137 C141 99 96 103 102 70 C105 45 136 45 142 71 M161 55 L161 180 M162 122 L191 61 M163 122 L200 180"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidthPath}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
