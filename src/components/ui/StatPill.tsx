interface StatPillProps {
  number: string;
  label: string;
}

export default function StatPill({ number, label }: StatPillProps) {
  return (
    <div className="glass-card pl-5 pr-6 py-3.5 rounded-card border-l-[3px] border-primary flex items-center gap-4 hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300 group">
      <div className="font-display text-2xl font-bold text-primary whitespace-nowrap group-hover:scale-105 transition-transform duration-300">
        {number}
      </div>
      <div className="font-sans text-xs font-semibold text-text-mid uppercase tracking-wider leading-snug">
        {label}
      </div>
    </div>
  );
}
