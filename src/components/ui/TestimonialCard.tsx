interface TestimonialCardProps {
  text: string;
  name: string;
  tag: string;
}

export default function TestimonialCard({ text, name, tag }: TestimonialCardProps) {
  return (
    <div className="testimonial-card-premium p-6 sm:p-8 flex flex-col justify-between h-full">
      {/* Decorative Quote Icon Background */}
      <span className="absolute top-2 left-4 font-display text-[120px] leading-none text-primary/8 select-none pointer-events-none">
        &ldquo;
      </span>

      {/* Star Rating */}
      <div className="flex gap-0.5 mb-4 relative z-10">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-accent fill-accent" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Content */}
      <div className="relative z-10 flex-grow">
        <p className="font-sans text-sm md:text-base text-text-mid leading-relaxed italic mb-6">
          {text}
        </p>
      </div>

      {/* Patient Profile */}
      <div className="flex items-center gap-3 border-t border-border-custom pt-4 relative z-10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light text-white flex items-center justify-center font-display text-lg font-bold shadow-md">
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
