"use client";

import { Stethoscope, Heart, Baby, Star, LucideIcon } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

interface StatItemProps {
  number: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
  decimals?: number;
}

function StatCounterItem({ number, suffix, label, icon: Icon, decimals = 0 }: StatItemProps) {
  return (
    <div
      className="flex flex-col items-center text-center py-2 px-3 md:py-3 md:px-4 transition-all duration-300 hover:scale-[1.05] stat-card-glow rounded-card relative z-10"
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1.5 bg-white/10 border border-white/15 text-accent icon-glow">
        <Icon className="w-4 h-4" />
      </div>

      {/* Number */}
      <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-0.5 flex items-center justify-center">
        <AnimatedCounter value={number} suffix={suffix} decimals={decimals} />
      </div>

      {/* Label */}
      <p className="font-sans text-[11px] sm:text-xs font-semibold text-white/60 tracking-wide">
        {label}
      </p>
    </div>
  );
}

export default function StatsCounter() {
  const statsList = [
    {
      number: 15,
      suffix: "+",
      label: "Years Experience",
      icon: Stethoscope,
      decimals: 0,
    },
    {
      number: 10000,
      suffix: "+",
      label: "Patients Treated",
      icon: Heart,
      decimals: 0,
    },
    {
      number: 5000,
      suffix: "+",
      label: "Successful Deliveries",
      icon: Baby,
      decimals: 0,
    },
    {
      number: 4.9,
      suffix: "★",
      label: "Average Rating",
      icon: Star,
      decimals: 1,
    },
  ];

  return (
    <section className="stats-gradient py-6 md:py-8 scroll-mt-20 relative overflow-hidden">
      {/* Decorative floating orbs */}
      <div className="orb orb-2 top-[-80px] left-[-100px] opacity-20" />
      <div className="orb orb-3 bottom-[-60px] right-[-80px] opacity-15" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-0 lg:divide-x divide-white/10">
          {statsList.map((stat, idx) => (
            <div key={idx}>
              <StatCounterItem
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
                decimals={stat.decimals}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
