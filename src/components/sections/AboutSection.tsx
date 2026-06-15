"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

// CountUp component using requestAnimationFrame
function CountUp({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeProgress * (end - start) + start;
      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const credentials = [
    "MBBS — Grant Govt Medical College, Mumbai (2006)",
    "MD (OBG) — KEM Hospital, Mumbai (2010)",
    "Fellowship in Laparoscopy — AIIMS (2012)",
    "FOGSI & IMA Member",
  ];

  return (
    <section id="about" className="py-20 bg-bg relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stacked Image Arrangement (40% width / lg:col-span-4) */}
          <div className="lg:col-span-4 relative flex flex-col items-center">
            <div className="relative w-full max-w-[320px] aspect-[3/4]">
              {/* Decorative Gold Gradient Rectangle Behind Image */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-gradient-to-br from-accent-light to-accent opacity-30 -z-10" />
              
              {/* Main Image Card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-primary/5 bg-[#faf8f4]">
                <Image
                  src="/images/headshot_navy.jpeg"
                  alt="Dr. Santosh Kulkarni"
                  fill
                  className="object-cover object-top"
                  sizes="(max-w-1024px) 100vw, 320px"
                />
              </div>
            </div>

            {/* Credentials Card Below Photo */}
            <div className="mt-6 bg-white border border-primary/5 shadow-md p-5 rounded-xl w-full max-w-[340px]">
              <ul className="flex flex-col gap-2.5">
                {credentials.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span className="font-sans text-[11px] sm:text-xs font-semibold text-text-muted leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Text and Stats (60% width / lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-4">
              ABOUT THE DOCTOR
            </span>
            <h2 className="font-display text-[1.8rem] sm:text-[3rem] font-bold text-primary-dark leading-tight mb-6">
              A Legacy of Compassionate<br />Women&apos;s Healthcare
            </h2>
            <div className="space-y-4 font-sans text-base text-text-muted leading-relaxed mb-8">
              <p>
                Dr. Santosh Kulkarni is a highly experienced Gynecologist and
                Obstetrician with over 15 years of dedicated practice in women&apos;s
                health. Known for a calm, thorough, and patient-first approach,
                Dr. Kulkarni has guided thousands of women through some of life&apos;s
                most significant moments.
              </p>
              <p>
                With expertise ranging from routine check-ups to complex
                laparoscopic procedures, Dr. Kulkarni combines clinical precision
                with genuine empathy &mdash; ensuring every patient feels heard,
                respected, and cared for.
              </p>
            </div>

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
              {[
                { value: 15, suffix: "+", label: "Years Experience", decimals: 0 },
                { value: 10000, suffix: "+", label: "Patients Treated", decimals: 0 },
                { value: 2000, suffix: "+", label: "Successful Deliveries", decimals: 0 },
                { value: 4.9, suffix: "/5", label: "Average Rating", decimals: 1 },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white border border-primary/5 p-4 rounded-2xl shadow-sm flex flex-col">
                  <span className="font-display text-xl sm:text-3xl font-bold text-primary mb-1">
                    <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </span>
                  <span className="font-sans text-xs font-medium text-text-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
