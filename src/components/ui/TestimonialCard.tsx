interface TestimonialCardProps {
  text: string;
  name: string;
  tag: string;
}

export default function TestimonialCard({ text, name, tag }: TestimonialCardProps) {
  return (
    <div className="relative bg-white p-6 sm:p-8 rounded-card shadow-card hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden h-full">
      {/* Decorative Quote Icon Background */}
      <span className="absolute top-2 left-4 font-display text-[120px] leading-none text-primary-muted select-none pointer-events-none opacity-60">
        “
      </span>

      {/* Testimonial Content */}
      <div className="relative z-10 pt-4">
        <p className="font-sans text-sm md:text-base text-text-mid leading-relaxed italic mb-6">
          {text}
        </p>
      </div>

      {/* Patient Profile */}
      <div className="flex items-center gap-3 border-t border-border-custom pt-4">
        <div className="w-10 h-10 rounded-full bg-primary-muted text-primary flex items-center justify-center font-display text-lg font-bold">
          {name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <cite className="font-display text-sm font-bold text-text-dark not-italic">
            {name}
          </cite>
          <span className="font-sans text-xs text-text-light font-medium tracking-wide">
            {tag}
          </span>
        </div>
      </div>
    </div>
  );
}
