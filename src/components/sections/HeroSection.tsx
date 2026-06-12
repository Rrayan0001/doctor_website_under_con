"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar, ShieldCheck, GraduationCap, Award, Baby, Stethoscope,
  Star, Users, CheckCircle2, Quote, Sparkles, ChevronRight
} from "lucide-react";

export default function HeroSection() {
  const handleAvailabilityClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector("#contact");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const phoneNumber = "919876543210";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Dr.%20Santosh%2C%20I%27d%20like%20to%20check%20availability%20for%20a%20consultation.`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden hero-gradient-bg"
    >
      {/* ═══ Animated Floating Orbs ═══ */}
      <div className="orb orb-2 bottom-[10%] left-[-80px]" />

      {/* ═══ Subtle Mesh Grid Pattern ═══ */}
      <div className="absolute inset-0 mesh-pattern opacity-40 pointer-events-none" />

      {/* ═══ Decorative Sparkles ═══ */}
      <div className="sparkle top-[25%] left-[8%]" style={{ animationDelay: '0s' }} />
      <div className="sparkle bottom-[35%] left-[32%]" style={{ animationDelay: '2s' }} />

      {/* ════════════════════════════════════════════════════════
          DESKTOP LAYOUT — lg and above
      ════════════════════════════════════════════════════════ */}
      <div className="hidden lg:flex flex-1 w-full h-full min-h-screen">

        {/* LEFT: Text content, vertically centred */}
        <div className="relative z-10 flex flex-col justify-center pl-12 xl:pl-20 pr-6 pt-32 pb-10 w-[52%] flex-shrink-0">

          {/* Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-7 bg-primary-muted border border-border-custom text-primary font-sans text-[11px] font-bold uppercase tracking-wider rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              Trusted Care. Every Stage. Every Woman.
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-[44px] xl:text-[54px] font-bold leading-[1.12] text-text-dark tracking-tight mb-5"
          >
            Expert Women&apos;s<br />
            <span className="text-primary">Healthcare</span><br />
            for Every Stage of Life
          </motion.h1>

          {/* Lotus Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-5"
          >
            <div className="h-[1.5px] bg-primary/20 w-10" />
            <svg className="w-4 h-4 text-primary opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C11.5 5 10 7.5 7.5 9C6.5 9.5 5 9.5 4 10.5C3 11.5 3 13 4 14C5 15 6.5 15 7.5 15.5C10 17 11.5 19.5 12 22C12.5 19.5 14 17 16.5 15.5C17.5 15 19 15 20 14C21 13 21 11.5 20 10.5C19 9.5 17.5 9.5 16.5 9C14 7.5 12.5 5 12 2Z" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
            </svg>
            <div className="h-[1.5px] bg-primary/20 w-10" />
          </motion.div>

          {/* Doctor Name + Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mb-3"
          >
            <h2 className="font-display text-xl font-bold text-primary">Dr. Santosh Kulkarni</h2>
            <span className="font-sans text-xs font-semibold text-text-mid">MBBS, MD (OBG)</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="font-sans text-[14.5px] text-text-mid leading-relaxed mb-7 max-w-[430px]"
          >
            Providing compassionate and evidence-based women&apos;s healthcare for pregnancy, fertility, PCOS, menopause, and advanced gynecological treatments. Trusted by over 10,000 patients across Karnataka.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center gap-4 mb-8"
          >
            <a
              href="#contact"
              onClick={handleAvailabilityClick}
              className="btn-premium inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-white font-sans font-semibold rounded-[10px] shadow-[0_4px_16px_rgba(26,107,107,0.25)] hover:bg-primary-light transition-all"
            >
              <Calendar className="w-[18px] h-[18px]" />
              Book Consultation
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-2.5 px-7 py-3.5 border-2 border-primary/30 text-primary hover:bg-primary-muted font-sans font-semibold rounded-[10px] transition-all"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.458h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Doctor
            </a>
          </motion.div>

          {/* Credentials Badges Strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="grid grid-cols-4 gap-2 p-3 bg-white/50 border border-border-custom rounded-[14px] w-full max-w-[500px]"
          >
            {[
              { Icon: GraduationCap, title: "MBBS • MD (OBG)", sub: "15+ Years Experience" },
              { Icon: Award, title: "Fellowship in", sub: "Advanced Laparoscopy" },
              { Icon: Baby, title: "High-Risk Pregnancy", sub: "Specialist" },
              { Icon: Stethoscope, title: "PCOS & Infertility", sub: "Management" },
            ].map(({ Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary-muted text-primary flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-sans text-[9.5px] font-semibold text-text-dark leading-tight">{title}</span>
                  <span className="font-sans text-[8.5px] text-text-mid leading-tight mt-0.5">{sub}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: Premium Doctor Portrait Section */}
        <div className="relative flex-1 flex items-center justify-center pt-28 pb-16 pr-12 xl:pr-20 pl-4 h-full min-h-screen">
          
          {/* Main Portrait Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative w-full max-w-[480px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,118,110,0.15)] bg-gradient-to-b from-[#F8FAFC] to-[#E6F4F4]"
          >
            {/* Large subtle teal gradient circle behind doctor */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] aspect-square rounded-full bg-gradient-to-tr from-[#14B8A6]/40 to-[#0F766E]/20 blur-2xl z-0" />
            
            <Image
              src="/images/headshot_clinic.jpeg"
              alt="Dr. Santosh Kulkarni – Gynecologist"
              fill
              priority
              className="object-cover object-top z-10"
            />
          </motion.div>

          {/* Floating Card – Top Right: Availability */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute top-[22%] right-[2%] xl:right-[5%] bg-white/90 backdrop-blur-md border border-white/50 p-3 rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-[12px] bg-[#E6F4F4] text-[#0F766E] flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="flex flex-col pr-2">
              <span className="font-sans text-[12px] font-bold text-slate-800 leading-tight">Available</span>
              <span className="font-sans text-[11px] text-slate-500 font-medium">Mon - Sat</span>
            </div>
          </motion.div>

          {/* Floating Card – Bottom Left: Trust Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-[28%] left-[0%] xl:left-[4%] bg-white/90 backdrop-blur-md border border-white/50 p-3 rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center gap-3 z-20"
          >
            <div className="w-10 h-10 rounded-[12px] bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col pr-2">
              <span className="font-sans text-[13px] font-bold text-slate-800 leading-tight">15+ Years</span>
              <span className="font-sans text-[11px] text-slate-500 font-medium">Experience</span>
            </div>
          </motion.div>

          {/* Floating Card – Bottom Right: Review Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-[18%] right-[4%] xl:right-[8%] bg-white/90 backdrop-blur-md border border-white/50 p-4 rounded-[16px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col gap-1 z-20"
          >
            <div className="flex gap-1 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-sans text-[13px] font-bold text-slate-800 leading-tight">4.9/5 Rating</span>
            <span className="font-sans text-[11px] text-slate-500 font-medium">500+ Reviews</span>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP – Bottom Stats Bar (sits below the two-column flex) */}
      <div className="hidden lg:block w-full px-12 xl:px-20 pb-10 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="bg-white/95 backdrop-blur-md border border-border-custom rounded-[22px] shadow-[0_8px_32px_rgba(26,107,107,0.06)] px-8 py-5 grid grid-cols-4 divide-x divide-primary/10"
        >
          {[
            { Icon: Star, value: "4.9/5", label: "Rating (500+ Reviews)", teal: false },
            { Icon: Users, value: "10,000+", label: "Women Treated", teal: false },
            { Icon: CheckCircle2, value: "15+", label: "Years of Experience", teal: false },
            { Icon: Sparkles, value: "Trusted by Thousands", label: "Across Karnataka", teal: true },
          ].map(({ Icon, value, label, teal }) => (
            <div key={value} className="flex items-center gap-4 px-6 first:pl-0 last:pr-0">
              <div className="w-11 h-11 rounded-full bg-primary-muted text-primary flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className={`font-display text-lg font-bold leading-none ${teal ? "text-primary" : "text-text-dark"}`}>{value}</span>
                <span className="font-sans text-xs text-text-mid mt-1 leading-none">{label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ════════════════════════════════════════════════════════
          MOBILE LAYOUT — below lg
      ════════════════════════════════════════════════════════ */}
      <div className="flex lg:hidden flex-col items-center text-center max-w-xl mx-auto px-6 w-full z-10 pt-28 pb-8">

        {/* Eyebrow Badge */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 mb-5 bg-primary-muted border border-border-custom text-primary font-sans text-[11px] font-bold uppercase tracking-wider rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            Trusted Women&apos;s Healthcare
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl font-bold leading-[1.2] text-text-dark tracking-tight mb-4"
        >
          Expert Women&apos;s <span className="text-primary">Healthcare</span> for Every Stage of Life
        </motion.h1>

        {/* Lotus Divider */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex items-center gap-3 mb-4">
          <div className="h-[1.5px] bg-primary/20 w-8" />
          <svg className="w-4 h-4 text-primary opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C11.5 5 10 7.5 7.5 9C6.5 9.5 5 9.5 4 10.5C3 11.5 3 13 4 14C5 15 6.5 15 7.5 15.5C10 17 11.5 19.5 12 22C12.5 19.5 14 17 16.5 15.5C17.5 15 19 15 20 14C21 13 21 11.5 20 10.5C19 9.5 17.5 9.5 16.5 9C14 7.5 12.5 5 12 2Z" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
          </svg>
          <div className="h-[1.5px] bg-primary/20 w-8" />
        </motion.div>

        {/* Doctor Info */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="mb-6">
          <h2 className="font-display text-2xl font-bold text-primary">Dr. Santosh Kulkarni</h2>
          <span className="font-sans text-xs font-semibold text-text-mid block mt-0.5">MBBS, MD (OBG)</span>
          <span className="font-sans text-xs text-text-mid block mt-0.5">15+ Years of Experience</span>
        </motion.div>

        {/* Doctor Image Card with floating stat badges */}
        <div className="relative w-full max-w-[260px] sm:max-w-[280px] aspect-[5/6] my-4">
          <div className="absolute w-[280px] h-[280px] bg-primary-muted rounded-full filter blur-3xl opacity-60 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full h-full rounded-[24px] border border-primary/10 overflow-hidden shadow-lg z-10"
          >
            <Image src="/images/headshot_clinic.jpeg" alt="Dr. Santosh Kulkarni" fill className="object-cover object-top scale-105" priority />
          </motion.div>

          {/* Left floating badge – Rating */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute top-[20%] left-[-28px] sm:left-[-36px] bg-white border border-[#D6EAEA] p-3 rounded-[16px] shadow-md flex flex-col items-center text-center z-20 w-[92px]"
          >
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-sans text-sm font-bold text-text-dark">4.9</span>
            </div>
            <span className="font-sans text-[9px] text-text-mid mt-1 leading-none">Rating</span>
            <span className="font-sans text-[8px] text-text-mid/70 mt-0.5 leading-none">(500+ Reviews)</span>
          </motion.div>

          {/* Right floating badge – Experience */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-[25%] right-[-28px] sm:right-[-36px] bg-white border border-[#D6EAEA] p-3 rounded-[16px] shadow-md flex flex-col items-center text-center z-20 w-[92px]"
          >
            <div className="flex items-center gap-1 text-primary">
              <Stethoscope className="w-4 h-4" />
              <span className="font-sans text-sm font-bold text-text-dark">15+</span>
            </div>
            <span className="font-sans text-[9px] text-text-mid mt-1 leading-none">Years of</span>
            <span className="font-sans text-[8px] text-text-mid/70 mt-0.5 leading-none">Experience</span>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-sans text-sm text-text-mid leading-relaxed mb-6 max-w-[400px] mt-4"
        >
          Providing compassionate, evidence-based care for pregnancy, fertility, PCOS, menopause and advanced gynecological treatments.
        </motion.p>

        {/* Stacked CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col w-full max-w-[340px] gap-3 mb-8"
        >
          <a
            href="#contact"
            onClick={handleAvailabilityClick}
            className="w-full py-3.5 px-6 bg-primary text-white font-sans font-semibold rounded-[10px] shadow-[0_4px_16px_rgba(26,107,107,0.2)] flex items-center justify-between transition-all"
          >
            <div className="flex items-center gap-2.5">
              <Calendar className="w-5 h-5" />
              <span>Book Consultation</span>
            </div>
            <ChevronRight className="w-4 h-4 text-white/80" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 border-2 border-primary/30 text-primary hover:bg-primary-muted font-sans font-semibold rounded-[10px] flex items-center justify-center gap-2.5 transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.458h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>WhatsApp Doctor</span>
          </a>
        </motion.div>

        {/* Mobile Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-[340px] bg-white/95 border border-border-custom rounded-[20px] shadow-[0_6px_20px_rgba(26,107,107,0.04)] p-4 grid grid-cols-3 divide-x divide-primary/10 mb-2"
        >
          {[
            { Icon: CheckCircle2, value: "15+", line1: "Years", line2: "Experience" },
            { Icon: Users, value: "10,000+", line1: "Women", line2: "Treated" },
            { Icon: Star, value: "4.9/5", line1: "Patient", line2: "Rating" },
          ].map(({ Icon, value, line1, line2 }) => (
            <div key={value} className="flex flex-col items-center text-center px-1">
              <div className="w-8 h-8 rounded-full bg-primary-muted text-primary flex items-center justify-center mb-1.5">
                <Icon className="w-4 h-4" />
              </div>
              <span className="font-sans text-xs font-bold text-text-dark leading-none">{value}</span>
              <span className="font-sans text-[9px] text-text-mid mt-1 leading-none">{line1}</span>
              <span className="font-sans text-[8px] text-text-mid/70 mt-0.5 leading-none">{line2}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
