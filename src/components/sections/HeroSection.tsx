"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Calendar, MessageSquare, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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

export default function HeroSection() {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const phoneNumber = "919480422318";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Dr.%20Santosh%2C%20I%27d%20like%20to%20check%20availability%20for%20a%20consultation.`;

  const handleBookClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[100dvh] pt-24 pb-12 flex flex-col justify-between overflow-hidden bg-bg text-left"
    >
      {/* Soft cursor-following glow (Hero only) */}
      {isHovered && (
        <div
          className="absolute pointer-events-none rounded-full bg-primary/10 blur-[100px] transition-all duration-75 mix-blend-multiply"
          style={{
            width: "350px",
            height: "350px",
            left: `${mousePos.x - 175}px`,
            top: `${mousePos.y - 175}px`,
            zIndex: 1,
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-8 flex-grow flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full relative z-10">
        
        {/* Left Column: Content (55% width on large screens) */}
        <div className="w-full lg:w-[55%] flex flex-col items-start text-left animate-clip-up">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
            {t.hero.trustTag}
          </span>
          <h1 className={`font-display font-bold text-primary-dark mb-6 leading-[1.25] lg:leading-[1.18] ${
            language === "en"
              ? "text-[2.1rem] xs:text-[2.6rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem]"
              : "text-[1.8rem] xs:text-[2.2rem] sm:text-[3rem] lg:text-[3.8rem] xl:text-[4.2rem]"
          }`}>
            {language === "en" ? (
              <>
                Expert Care for<br />
                Every Stage of<br />
                a Woman&apos;s Life.
              </>
            ) : language === "kn" ? (
              <>
                ಮಹಿಳೆಯ ಜೀವನದ<br />
                ಪ್ರತಿಯೊಂದು ಹಂತದಲ್ಲೂ<br />
                ಸೂಕ್ತ ಆರೋಗ್ಯ ರಕ್ಷಣೆ.
              </>
            ) : (
              <>
                महिला के जीवन के<br />
                हर चरण के लिए<br />
                विशेषज्ञ देखभाल।
              </>
            )}
          </h1>
          <p className="font-sans text-[1rem] sm:text-[1.125rem] text-text-muted leading-relaxed mb-8 max-w-xl">
            {t.hero.description}
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#contact"
              onClick={handleBookClick}
              className="px-8 py-4 bg-primary text-white font-sans font-semibold rounded-full shadow-md hover:bg-primary-light hover:shadow-lg transition-all text-center whitespace-nowrap"
            >
              {t.common.bookConsultation}
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-primary/30 hover:border-primary text-primary font-sans font-semibold rounded-full hover:bg-primary/5 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <MessageSquare className="w-5 h-5 text-emerald-600 fill-emerald-600/10" />
              {t.common.whatsappDoctor}
            </a>
          </div>
        </div>

        {/* Right Column: Photo (45% width on large screens) */}
        <div className="w-full lg:w-[45%] flex justify-center relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
          
          {/* Subtle radial teal glow behind photo */}
          <div className="absolute w-[450px] h-[450px] bg-primary/12 rounded-full blur-[80px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
          
          <div className="relative z-10 w-full max-w-[400px] aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-primary/5 bg-[#faf8f4] group">
            <Image
              src="/images/headshot_clinic.jpeg"
              alt="Dr. Santosh Kulkarni in clinic"
              fill
              priority
              className="object-cover object-top transition-transform duration-700 group-hover:scale-102"
              sizes="(max-w-768px) 100vw, 400px"
            />
            {/* Gradient Overlay at Bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Badges */}
          <div className="absolute left-[-20px] top-[15%] bg-white/95 border border-primary/10 shadow-md py-2 px-4 rounded-full flex items-center gap-2 z-20 animate-float">
            <span className="text-accent">✦</span>
            <span className="font-sans text-xs font-bold text-primary-dark">{t.hero.badgePregnancy}</span>
          </div>
          
          <div className="absolute right-[-10px] top-[45%] bg-white/95 border border-primary/10 shadow-md py-2 px-4 rounded-full flex items-center gap-2 z-20 animate-float-delayed" style={{ animationDelay: "1.5s" }}>
            <span className="text-accent">✦</span>
            <span className="font-sans text-xs font-bold text-primary-dark">{t.hero.badgeFellowship}</span>
          </div>

          <div className="absolute left-[10px] bottom-[10%] bg-white/95 border border-primary/10 shadow-md py-2 px-4 rounded-full flex items-center gap-2 z-20 animate-float" style={{ animationDelay: "0.8s" }}>
            <span className="text-accent">✦</span>
            <span className="font-sans text-xs font-bold text-primary-dark">{t.hero.badgeFogsi}</span>
          </div>
        </div>
      </div>

      {/* Desktop Bottom Stats Bar */}
      <div className="hidden lg:block w-full max-w-7xl mx-auto px-6 md:px-8 mt-12 relative z-10">
        <div className="bg-white/90 backdrop-blur-md border border-primary/10 rounded-2xl shadow-md px-10 py-6 grid grid-cols-4 divide-x divide-primary/10">
          {[
            { value: 15, suffix: "+", label: t.common.yearsExperience, decimals: 0 },
            { value: 10000, suffix: "+", label: t.common.womenTreated, decimals: 0 },
            { value: 4.9, suffix: "/5", label: t.common.patientRating, decimals: 1 },
            { value: 500, suffix: "+", label: t.common.reviews, decimals: 0 },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center px-6 first:pl-0 last:pr-0 text-center">
              <span className="font-display text-4xl font-bold text-primary mb-1">
                <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </span>
              <span className="font-sans text-xs font-medium text-text-muted uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Stats Card (below tablet width) */}
      <div className="lg:hidden w-full max-w-md mx-auto px-6 mt-8 relative z-10">
        <div className="bg-white border border-primary/10 shadow-md rounded-2xl p-5 grid grid-cols-3 divide-x divide-primary/10">
          {[
            { value: 15, suffix: "+", line1: t.hero.stats.years, line2: t.hero.stats.experience, decimals: 0 },
            { value: 10000, suffix: "+", line1: t.hero.stats.women, line2: t.hero.stats.treated, decimals: 0 },
            { value: 4.9, suffix: "", line1: t.hero.stats.patient, line2: t.hero.stats.rating, decimals: 1 },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center px-1 text-center">
              <span className="font-display text-[1.25rem] sm:text-2xl font-bold text-primary mb-0.5">
                <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </span>
              <span className="font-sans text-[10px] font-bold text-text-muted mt-1 leading-none">{stat.line1}</span>
              <span className="font-sans text-[9px] text-text-muted/70 mt-0.5 leading-none">{stat.line2}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
