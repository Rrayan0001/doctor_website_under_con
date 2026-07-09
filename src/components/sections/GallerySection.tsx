"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ui/ScrollAnimations";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import { Reorder } from "framer-motion";
import { CardStack } from "@/components/ui/CardStack";

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
      src: "/images/original_images/WhatsApp Image 2026-07-09 at 12.15.31 PM (1).jpeg",
      alt: "Dr. Santosh Kulkarni consultation room",
      title: "Clinic Consultation Room",
    },
    {
      src: "/images/original_images/WhatsApp Image 2026-07-09 at 12.15.31 PM (2).jpeg",
      alt: "Dr. Santosh Kulkarni patient waiting area",
      title: "Patient Waiting Area",
    },
    {
      src: "/images/original_images/WhatsApp Image 2026-07-09 at 12.15.32 PM (1).jpeg",
      alt: "Dr. Santosh Kulkarni checkup facility",
      title: "Checkup Facility",
    },
    {
      src: "/images/original_images/WhatsApp Image 2026-07-09 at 12.15.32 PM.jpeg",
      alt: "Dr. Santosh Kulkarni clinic entrance",
      title: "Clinic Facility Entrance",
    },
    {
      src: "/gallery1.png",
      alt: t.gallery.items[3]?.alt,
      title: t.gallery.items[3]?.title,
    },
    {
      src: "/gallery2.png",
      alt: t.gallery.items[4]?.alt,
      title: t.gallery.items[4]?.title,
    },
  ];

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const [galleryImages, setGalleryImages] = useState(() =>
    images.map((img, idx) => ({
      id: `img_${idx}`,
      src: img.src,
      alt: img.alt,
      title: img.title,
    }))
  );

  const [activeImage, setActiveImage] = useState<{ index: number; tick: number } | undefined>(undefined);

  useEffect(() => {
    setGalleryImages((prev) =>
      prev.map((img, idx) => {
        const orig = images.find((i) => i.src === img.src) || images[idx];
        return {
          ...img,
          alt: orig.alt,
          title: orig.title,
        };
      })
    );
  }, [t]);

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

      {/* Ambient floating particles */}
      <div className="ambient-particle w-2 h-2 bg-accent/20 top-[15%] right-[12%]" style={{ animationDelay: "0s", animationDuration: "10s" }} />
      <div className="ambient-particle w-3 h-3 bg-primary/15 bottom-[25%] left-[20%]" style={{ animationDelay: "4s", animationDuration: "14s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center flex flex-col items-center max-w-2xl mx-auto">
          <ScrollReveal variant="fade-up" delay={0} className="w-full flex justify-center">
            <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-4 block text-center">
              ✦ {t.gallery.badge}
            </span>
          </ScrollReveal>
          <ScrollReveal variant="fade-up" delay={100} className="w-full">
            <p className="font-sans text-sm text-white/70 text-justify">
              {t.gallery.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Card Stack & Thumbnails Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 max-w-4xl mx-auto py-8">
          
          {/* Card Stack Wrapper */}
          <ScrollReveal variant="fade-right" duration={1000} delay={0} className="relative flex justify-center items-center">
            <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center min-h-[480px] w-[320px] sm:w-[340px] md:w-[360px] gap-4">
              <CardStack
                images={galleryImages}
                activeIndex={activeImage}
                offset={10}
                scaleStep={0.06}
                dimStep={0.15}
                stiffness={170}
                damping={26}
                aspectRatio="4/3"
                borderRadius={16}
                width={280}
              />
              
              {/* Fullscreen Zoom button */}
              <button
                onClick={() => {
                  const actualIndex = images.findIndex((img) => img.src === galleryImages[0].src);
                  openLightbox(actualIndex >= 0 ? actualIndex : 0);
                }}
                className="mt-4 px-4 py-2 border border-white/10 hover:border-white/30 text-white rounded-full bg-white/5 hover:bg-white/10 transition-all flex items-center gap-2 text-xs font-semibold cursor-pointer"
              >
                <ZoomIn className="w-4 h-4" />
                View Fullscreen
              </button>
            </div>
          </ScrollReveal>

          {/* Reorder Thumbnails Strip (Desktop/Tablet) */}
          <ScrollReveal variant="fade-left" duration={1000} delay={200} className="hidden sm:block">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-4">
              <span className="font-sans text-[11px] font-bold text-accent tracking-wider uppercase">
                Drag to Reorder Stack
              </span>
              <Reorder.Group
                axis="y"
                values={galleryImages}
                onReorder={setGalleryImages}
                className="flex flex-col gap-4"
                style={{ listStyle: "none", margin: 0, padding: 0 }}
              >
                {galleryImages.map((img, index) => (
                  <Reorder.Item
                    key={img.id}
                    value={img}
                    className="relative group shrink-0"
                    style={{ listStyle: "none" }}
                  >
                    <div
                      className="w-[88px] h-[66px] rounded-lg overflow-hidden bg-[#1d1d1d] cursor-grab active:cursor-grabbing border-2 border-transparent hover:border-accent transition-colors relative"
                      onClick={() => {
                        setActiveImage({ index, tick: Date.now() });
                      }}
                    >
                      {/* Blurred background */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center filter blur-md scale-110 opacity-30 select-none pointer-events-none"
                        style={{ backgroundImage: `url(${img.src})` }}
                      />
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-contain pointer-events-none z-10 relative"
                        sizes="88px"
                      />
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                        <span className="text-[10px] text-white font-sans bg-black/40 px-1.5 py-0.5 rounded">
                          Bring Front
                        </span>
                      </div>
                    </div>
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </div>
          </ScrollReveal>

          {/* Simple Thumbnails Strip (Mobile) */}
          <div className="block sm:hidden w-full">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-3 max-w-[300px] mx-auto">
              <span className="font-sans text-[10px] font-bold text-accent tracking-wider uppercase">
                Tap image to view
              </span>
              <div className="flex flex-row gap-3">
                {galleryImages.map((img, index) => (
                  <div
                    key={img.id}
                    className="w-[76px] h-[57px] rounded-lg overflow-hidden bg-[#1d1d1d] border-2 border-transparent active:border-accent transition-colors relative cursor-pointer"
                    onClick={() => {
                      setActiveImage({ index, tick: Date.now() });
                    }}
                  >
                    {/* Blurred background */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center filter blur-md scale-110 opacity-30 select-none pointer-events-none"
                      style={{ backgroundImage: `url(${img.src})` }}
                    />
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain pointer-events-none z-10 relative"
                      sizes="76px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Infinite Image Marquee Slider */}
      <div className="mt-16 border-t border-white/5 pt-12 w-full">
        <ScrollReveal variant="fade-up" delay={100}>
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-accent text-center mb-8 uppercase tracking-widest">
            Gallery Reel
          </h3>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={200}>
          <InfiniteMarquee items={images} speed={35} />
        </ScrollReveal>
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
