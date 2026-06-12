"use client";

const tickerItems = [
  "Gynecology & Obstetrics",
  "High-Risk Pregnancy Care",
  "PCOS Treatment",
  "Infertility Solutions",
  "Laparoscopic Surgery",
  "Menstrual Disorder Management",
  "Menopause Care",
  "Family Planning",
];

export default function TickerStrip() {
  return (
    <div
      id="ticker-strip"
      className="ticker-gradient text-white py-4 overflow-hidden select-none relative z-10"
    >
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 mx-4 text-sm md:text-base font-sans font-semibold tracking-wide uppercase whitespace-nowrap">
            <span className="text-accent">✦</span> {item}
          </div>
        ))}
      </div>
    </div>
  );
}
