"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GallerySection() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const images = [
    {
      src: "/images/headshot_clinic.jpeg",
      alt: t.gallery.items[0]?.alt,
      title: t.gallery.items[0]?.title,
    },
    {
      src: "/images/headshot_navy.jpeg",
      alt: t.gallery.items[1]?.alt,
      title: t.gallery.items[1]?.title,
    },
    {
      src: "/images/clinical_scrubs_patients.jpeg",
      alt: t.gallery.items[2]?.alt,
      title: t.gallery.items[2]?.title,
    },
  ];

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  // Lightbox key down listener (Escape key) and focus trapping
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    
    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <section id="gallery" className="py-20 bg-[#0d0d0d] scroll-mt-20 relative overflow-hidden">
      
      {/* Background visual detail */}
      <div className="absolute w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] top-[10%] left-[-100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-left max-w-2xl">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-white mb-4 block">
            {t.gallery.badge}
          </span>
          <p className="font-sans text-sm text-white/70">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 max-w-5xl mx-auto">
          
          {/* Large Left Image (Spans 2 rows, 7 columns wide) */}
          <div
            onClick={() => openLightbox(0)}
            className="md:col-span-7 md:row-span-2 relative aspect-[3/4] md:aspect-auto md:h-[500px] lg:h-[550px] overflow-hidden rounded-xl group cursor-pointer border border-white/5"
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover object-center transition-all duration-500 group-hover:scale-103"
              sizes="(max-w-768px) 100vw, 600px"
              loading="lazy"
            />
            {/* Hover visual moment overlay */}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                <ZoomIn className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Top Right Image (5 columns wide) */}
          <div
            onClick={() => openLightbox(1)}
            className="md:col-span-5 relative aspect-[4/3] md:h-[246px] lg:h-[271px] overflow-hidden rounded-xl group cursor-pointer border border-white/5"
          >
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover object-center transition-all duration-500 group-hover:scale-103"
              sizes="(max-w-768px) 100vw, 400px"
              loading="lazy"
            />
            {/* Hover visual moment overlay */}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                <ZoomIn className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Bottom Right Image (5 columns wide) */}
          <div
            onClick={() => openLightbox(2)}
            className="md:col-span-5 relative aspect-[4/3] md:h-[246px] lg:h-[271px] overflow-hidden rounded-xl group cursor-pointer border border-white/5"
          >
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-103"
              sizes="(max-w-768px) 100vw, 400px"
              loading="lazy"
            />
            {/* Hover visual moment overlay */}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                <ZoomIn className="w-6 h-6" />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Accessible Full-Screen Lightbox Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center lightbox-overlay transition-opacity duration-300 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button with focus management */}
          <button
            ref={closeButtonRef}
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
            aria-label={t.gallery.closeLabel}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Image container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-[90vw] h-[80vh] max-w-4xl"
          >
            <Image
              src={images[photoIndex].src}
              alt={images[photoIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
