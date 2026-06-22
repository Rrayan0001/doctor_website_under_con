"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale-up"
  | "blur-in"
  | "clip-up"
  | "clip-left"
  | "rotate-in"
  | "bounce-in";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
  as?: keyof HTMLElementTagNameMap;
}

const VARIANT_STYLES: Record<AnimationVariant, { from: string; to: string }> = {
  "fade-up": {
    from: "opacity-0 translate-y-[60px]",
    to: "opacity-100 translate-y-0",
  },
  "fade-down": {
    from: "opacity-0 -translate-y-[40px]",
    to: "opacity-100 translate-y-0",
  },
  "fade-left": {
    from: "opacity-0 -translate-x-[60px]",
    to: "opacity-100 translate-x-0",
  },
  "fade-right": {
    from: "opacity-0 translate-x-[60px]",
    to: "opacity-100 translate-x-0",
  },
  "scale-up": {
    from: "opacity-0 scale-[0.85]",
    to: "opacity-100 scale-100",
  },
  "blur-in": {
    from: "opacity-0 blur-[12px]",
    to: "opacity-100 blur-0",
  },
  "clip-up": {
    from: "sr-clip-up-hidden",
    to: "sr-clip-up-visible",
  },
  "clip-left": {
    from: "sr-clip-left-hidden",
    to: "sr-clip-left-visible",
  },
  "rotate-in": {
    from: "opacity-0 rotate-6 scale-[0.9]",
    to: "opacity-100 rotate-0 scale-100",
  },
  "bounce-in": {
    from: "opacity-0 scale-[0.3]",
    to: "opacity-100 scale-100",
  },
};

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 800,
  threshold = 0.15,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const styles = VARIANT_STYLES[variant];
  const isBounce = variant === "bounce-in";

  return (
    <div
      ref={ref}
      className={`transition-all ${
        isBounce ? "sr-bounce-transition" : ""
      } ${isVisible ? styles.to : styles.from} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: isBounce
          ? "cubic-bezier(0.34, 1.56, 0.64, 1)"
          : "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform, opacity, filter",
      }}
    >
      {children}
    </div>
  );
}

/* Stagger wrapper: children should be ScrollReveal with incremental delays */
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  className = "",
}: StaggerContainerProps) {
  return <div className={className}>{children}</div>;
}

/* Magnetic hover effect for buttons */
export function MagneticButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}

/* Parallax tilt card */
export function TiltCard({
  children,
  className = "",
  intensity = 8,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.transform = `perspective(800px) rotateX(${
      -y * intensity
    }deg) rotateY(${x * intensity}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-500 ease-out ${className}`}
      style={{ willChange: "transform", transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
