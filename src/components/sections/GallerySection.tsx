"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, ZoomIn } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import SectionHeading from "../ui/SectionHeading";

const galleryItems = [
  {
    type: "image",
    src: "/images/headshot_navy.jpeg",
    alt: "Dr. Santosh Kulkarni - Professional Headshot",
    title: "Dr. Santosh Kulkarni - Professional Headshot",
    aspect: "aspect-[768/1284]",
  },
  {
    type: "image",
    src: "/images/clinical_scrubs_patients.jpeg",
    alt: "Dr. Santosh Kulkarni with Patients in Clinic",
    title: "Clinical Consultations Setting",
    aspect: "aspect-[768/1288]",
  },
  {
    type: "image",
    src: "/images/headshot_clinic.jpeg",
    alt: "Dr. Santosh Kulkarni - Consulting Room",
    title: "Consulting Room & Medical Office",
    aspect: "aspect-[768/1279]",
  },
  {
    type: "placeholder",
    title: "Clinic Reception Coming Soon",
    label: "Clinic Photo Coming Soon",
    aspect: "aspect-[4/3]",
  },
  {
    type: "placeholder",
    title: "Patient Waiting Lounge Coming Soon",
    label: "Lounge Photo Coming Soon",
    aspect: "aspect-[4/3]",
  },
  {
    type: "placeholder",
    title: "Advanced Diagnostics Room Coming Soon",
    label: "Diagnostics Photo Coming Soon",
    aspect: "aspect-[4/3]",
  },
];

// Map galleryItems to Lightbox slide format
const slides = galleryItems.map((item) => {
  if (item.type === "image") {
    return { src: item.src!, alt: item.alt };
  } else {
    // Generate beautiful clean SVG data URL for placeholders in Lightbox
    const svgContent = `
      <svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'>
        <rect width='100%' height='100%' fill='%23E6F4F4'/>
        <circle cx='400' cy='250' r='60' fill='%231A6B6B' opacity='0.15'/>
        <path d='M400 220v60M370 250h60' stroke='%231A6B6B' stroke-width='4' stroke-linecap='round'/>
        <text x='50%' y='65%' font-family='Playfair Display, serif' font-size='28' font-weight='bold' fill='%231A6B6B' text-anchor='middle'>
          ${item.title}
        </text>
        <text x='50%' y='75%' font-family='Inter, sans-serif' font-size='18' fill='%234A5C5C' text-anchor='middle'>
          Client to Replace
        </text>
      </svg>
    `.trim().replace(/\n/g, '').replace(/"/g, "'");
    return { src: `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}` };
  }
});

export default function GallerySection() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section id="gallery" className="py-12 md:py-20 section-gradient-white scroll-mt-20 relative overflow-hidden">
      {/* Decorative mesh pattern */}
      <div className="absolute inset-0 mesh-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Gallery"
          heading="A Glimpse Into Our Practice"
          subheading="Explore our warm, patient-first clinic space and professional settings."
        />

        {/* Gallery Grid - Responsive Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-8 space-y-4 sm:space-y-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className={`break-inside-avoid relative rounded-image overflow-hidden cursor-pointer group shadow-card border border-border-custom hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 ${item.aspect}`}
            >
              {item.type === "image" ? (
                <>
                  <Image
                    src={item.src!}
                    alt={item.alt!}
                    width={400}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover overlay with zoom icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white">
                    <ZoomIn className="w-8 h-8 animate-pulse" />
                    <span className="font-sans text-xs font-bold uppercase tracking-wider">
                      Zoom Photo
                    </span>
                  </div>
                </>
              ) : (
                /* Placeholder Tile */
                <div className="w-full h-full min-h-[260px] bg-primary-muted flex flex-col items-center justify-center gap-4 p-8 text-center select-none group-hover:bg-primary-muted/80 transition-colors">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                    <Camera className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-display text-lg font-bold text-primary">
                      {item.title}
                    </span>
                    <span className="font-sans text-xs text-text-mid font-semibold uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                  {/* Zoom indicator for consistency */}
                  <div className="absolute top-4 right-4 text-primary opacity-40 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* React Lightbox */}
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={slides}
        />

      </div>
    </section>
  );
}
