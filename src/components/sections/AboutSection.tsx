"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

export default function AboutSection() {
  const [showFullProfile, setShowFullProfile] = useState(false);

  const qualifications = [
    "MBBS — Grant Government Medical College, Mumbai (2006)",
    "MD (Obstetrics & Gynecology) — KEM Hospital & GS Medical College, Mumbai (2010)",
    "Fellowship in Advanced Laparoscopic Surgery — AIIMS (2012)",
    "Active Member, FOGSI & Indian Medical Association (IMA)",
  ];

  return (
    <section id="about" className="py-12 md:py-20 about-gradient-bg scroll-mt-20 relative overflow-hidden">
      {/* Decorative Orb */}
      <div className="orb orb-3 top-[-50px] right-[-100px] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image & Badge Overlay */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[4/5] sm:aspect-[768/1288] rounded-image overflow-hidden shadow-hero-image border border-primary/10 group">
              <Image
                src="/images/clinical_scrubs_patients.jpeg"
                alt="Dr. Santosh Kulkarni in a clinical consultation with patients"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Overlapping Badge Overlay */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 glass-card bg-primary/90 text-white p-4 sm:p-5 rounded-[16px] shadow-xl max-w-[150px] hover:scale-105 transition-transform">
                <span className="font-display text-2xl font-bold italic block leading-tight">
                  15+ Years
                </span>
                <span className="font-sans text-xs font-medium uppercase tracking-wider text-white/80 mt-1 block">
                  of Healing
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <SectionHeading
              eyebrow="About the Doctor"
              heading="A Legacy of Compassionate Women's Healthcare"
              align="left"
            />

            <div className="space-y-4 font-sans text-base text-text-mid leading-relaxed mb-8">
              <p>
                Dr. Santosh Kulkarni is a highly experienced Gynecologist and Obstetrician with over 15 years of dedicated practice in women&apos;s health. Known for a calm, thorough, and patient-first approach, Dr. Santosh Kulkarni has guided thousands of women through some of life&apos;s most significant moments.
              </p>
              <p>
                With expertise ranging from routine check-ups to complex laparoscopic procedures, Dr. Santosh Kulkarni combines clinical precision with genuine empathy — ensuring every patient feels heard, respected, and cared for.
              </p>
            </div>

            {/* Qualifications Checklist */}
            <div className="w-full space-y-4 mb-8">
              <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-text-dark">
                Qualifications & Credentials
              </h4>
              <ul className="grid grid-cols-1 gap-3">
                {qualifications.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <span className="w-5 h-5 rounded-full bg-primary-muted text-primary flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/20 group-hover/item:bg-primary group-hover/item:text-white transition-colors duration-300">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-sans text-sm text-text-mid leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* View Full Profile Toggle */}
            <button
              onClick={() => setShowFullProfile(!showFullProfile)}
              className="inline-flex items-center gap-1.5 text-primary hover:text-primary-light font-sans text-sm font-bold transition-all border-b border-primary/20 hover:border-primary-light/50 pb-1"
            >
              {showFullProfile ? (
                <>
                  Collapse Profile <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  View Full Profile <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Expandable Biography Section */}
            <AnimatePresence>
              {showFullProfile && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden mt-6 w-full"
                >
                  <div className="glass-card p-6 rounded-card space-y-4 font-sans text-sm text-text-mid leading-relaxed">
                    <h5 className="font-display text-base font-bold text-text-dark">
                      Philosophy of Care
                    </h5>
                    <p>
                      &quot;I believe that healthcare is a partnership. Every woman&apos;s body and journey is unique. My clinic&apos;s mission is to provide an open, judgment-free space where patients can discuss their health issues freely. We pair state-of-the-art medical technology and evidence-based protocols with a comforting approach, making clinical visits stress-free and empowering.&quot;
                    </p>
                    <h5 className="font-display text-base font-bold text-text-dark pt-2">
                      Specializations & Clinical Focus
                    </h5>
                    <p>
                      - High-risk Obstetrics (Pre-eclampsia, Gestational Diabetes, Multiple Pregnancies) <br />
                      - Minimally Invasive Keyhole Laparoscopic Surgeries (Fibroids, Ovarian Cysts) <br />
                      - Polycystic Ovary Syndrome (PCOS/PCOD) management & lifestyle mentoring <br />
                      - Infertility evaluations & diagnostics (IUI guidance, hormone profiling)
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
