"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  // Phase: "visible" → "fading" → "gone"
  const [phase, setPhase] = useState<"visible" | "fading" | "gone">("visible");

  useEffect(() => {
    // Start fade-out after 2 seconds
    const fadeTimer = setTimeout(() => setPhase("fading"), 2000);
    // Remove from DOM after fade completes (800ms transition)
    const goneTimer = setTimeout(() => setPhase("gone"), 2800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className={`splash-screen ${phase === "fading" ? "splash-screen--fading" : ""}`}
      aria-hidden="true"
    >
      {/* Background Watermark */}
      <div className="splash-bg-watermark" />
      {/* Logo */}
      <div className="splash-logo-wrap">
        <Image
          src="/bg_logo.png"
          alt="Niramay Women's Clinic Logo"
          width={76}
          height={76}
          priority
          className="splash-logo"
        />
      </div>

      {/* Thin gold divider */}
      <div className="splash-divider" />

      {/* Doctor name */}
      <p className="splash-label">Dr. Santosh Kulkarni</p>
      <p className="splash-subtitle">Gynecologist &amp; Women's Health Specialist</p>
    </div>
  );
}
