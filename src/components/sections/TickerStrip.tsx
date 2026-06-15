"use client";

const tickerItems = [
  "Pregnancy Care",
  "PCOS Treatment",
  "Infertility",
  "Laparoscopic Surgery",
  "Menopause",
  "High-Risk Pregnancy",
  "Menstrual Disorders",
  "Family Planning",
];

export default function TickerStrip() {
  return (
    <div
      id="ticker"
      className="w-full h-[60px] bg-primary flex items-center overflow-hidden select-none relative z-10 border-y border-white/5"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-pointer">
        {/* First copy */}
        <div className="flex items-center gap-10 pr-10">
          {tickerItems.map((item, idx) => (
            <div
              key={`ticker-1-${idx}`}
              className="flex items-center gap-10 font-sans text-[14px] font-medium uppercase tracking-[0.15em] text-[#faf8f4] whitespace-nowrap"
            >
              <span>{item}</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
        {/* Second copy for infinite scrolling loop */}
        <div className="flex items-center gap-10 pr-10">
          {tickerItems.map((item, idx) => (
            <div
              key={`ticker-2-${idx}`}
              className="flex items-center gap-10 font-sans text-[14px] font-medium uppercase tracking-[0.15em] text-[#faf8f4] whitespace-nowrap"
            >
              <span>{item}</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
