"use client";

import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";

const testimonials = [
  {
    text: "Dr. Santosh Kulkarni guided me through a high-risk pregnancy with so much patience and expertise. I felt completely safe throughout. Cannot recommend enough.",
    name: "Ananya R.",
    tag: "High-Risk Pregnancy Patient",
  },
  {
    text: "After years of struggling with PCOS, Dr. Santosh Kulkarni finally gave me a clear plan and real results. Life-changing experience.",
    name: "Preethi S.",
    tag: "PCOS Patient",
  },
  {
    text: "Very professional, thorough, and genuinely caring. The clinic is clean and appointments are always on time. My go-to doctor.",
    name: "Kavitha M.",
    tag: "Regular Patient",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 md:py-20 section-gradient-teal scroll-mt-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="orb orb-2 bottom-[-100px] right-[-120px] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Patient Stories"
          heading="What Our Patients Say"
          subheading="Real feedback from women who have trusted Dr. Santosh Kulkarni with their care."
        />

        {/* Responsive Testimonials Row/Grid */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 md:gap-8 pb-4 lg:pb-0 snap-x snap-mandatory no-scrollbar scroll-smooth">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="min-w-[85vw] sm:min-w-[450px] lg:min-w-0 snap-center flex-shrink-0 flex flex-col h-full"
            >
              <TestimonialCard
                text={testimonial.text}
                name={testimonial.name}
                tag={testimonial.tag}
              />
            </div>
          ))}
        </div>

        {/* Mobile Swipe indicator dots */}
        <div className="flex justify-center gap-2 mt-6 lg:hidden">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              className="w-2 h-2 rounded-full bg-primary/30"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
