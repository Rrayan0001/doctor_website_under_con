"use client";

import { MapPin, Phone, Mail, ArrowRight, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal, MagneticButton } from "@/components/ui/ScrollAnimations";

export default function ContactSection() {
  const { t, language } = useLanguage();

  const phoneNumber = "919480422318";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Dr.%20Santosh%2C%20I%27d%20like%20to%20check%20availability%20for%20a%20consultation.`;

  const handleBookClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert(t.contact.bookingAlert);
  };

  return (
    <section id="contact" className="py-20 bg-bg scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Address and Map (5/12 width) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal variant="fade-right" delay={0} duration={900}>
              <h2 className="font-display text-[2.2rem] sm:text-[3rem] font-bold text-primary-dark leading-tight text-left">
                {t.contact.title}
              </h2>
            </ScrollReveal>

            {/* Address Card */}
            <div className="bg-white border border-primary/5 p-6 rounded-2xl shadow-sm space-y-4">
              <div className="flex gap-3 items-start text-left">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="font-sans text-sm">
                  <strong className="text-primary-dark block mb-1">{t.common.clinicName}</strong>
                  <span className="text-text-muted">
                    {language === "kn" ? (
                      <>೪೦೨, ಮೆಡಿಕಲ್ ಎನ್‌ಕ್ಲೇವ್, ಲಿಂಕ್ ರೋಡ್,<br />ಅಂಧೇರಿ ವೆಸ್ಟ್, ಮುಂಬೈ — ೪೦೦೦೫೩</>
                    ) : language === "hi" ? (
                      <>402, मेडिकल एन्क्लेव, लिंक रोड,<br />अंधेरी वेस्ट, मुंबई &mdash; 400053</>
                    ) : (
                      <>402, Medical Enclave, Link Road,<br />Andheri West, Mumbai &mdash; 400053</>
                    )}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 items-center text-left border-t border-primary/5 pt-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919480422318" className="font-sans text-sm text-text-muted hover:text-primary transition-colors">
                  +91 94804 22318
                </a>
              </div>

              <div className="flex gap-3 items-center text-left border-t border-primary/5 pt-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:contact@dr-santosh.com" className="font-sans text-sm text-text-muted hover:text-primary transition-colors">
                  contact@dr-santosh.com
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <ScrollReveal variant="scale-up" delay={300} duration={800}>
              <div className="overflow-hidden rounded-2xl border border-primary/5 shadow-sm h-[250px] relative w-full bg-white">
                <iframe
                  title="Google Maps Location - Niramay Women's Clinic Andheri West"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7562858882823!2d72.8277562761899!3d19.11942008707119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e061805555%3A0xe54dbe4198d023f0!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>

            {/* Directions link */}
            <div className="text-left">
              <a
                href="https://maps.google.com/?q=Niramay+Women's+Clinic+Andheri+West+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-primary hover:text-primary-light font-sans text-sm font-bold transition-all"
              >
                {t.contact.directions} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Timings and Booking Form (7/12 width) */}
          <div className="lg:col-span-7 space-y-6 w-full">
            <ScrollReveal variant="fade-left" delay={100} duration={900}>
              <h2 className="font-display text-[2.2rem] sm:text-[3rem] font-bold text-primary-dark leading-tight text-left">
                {t.contact.bookingTitle}
              </h2>
            </ScrollReveal>

            {/* Timings Card */}
            <div className="bg-white border border-primary/5 p-6 rounded-2xl shadow-sm text-left">
              <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-4">
                {t.contact.timingsLabel}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="font-display text-lg font-bold text-primary-dark block mb-1">
                    {t.contact.weekdays}
                  </span>
                  <div className="space-y-1 font-sans text-sm text-text-muted">
                    <p><span className="font-semibold text-primary">{t.contact.morning}:</span> {language === "kn" ? "೯:೦೦ ರಿಂದ ಮಧ್ಯಾಹ್ನ ೧:೦೦" : language === "hi" ? "सुबह 9:00 - दोपहर 1:00" : "9:00 AM – 1:00 PM"}</p>
                    <p><span className="font-semibold text-primary">{t.contact.evening}:</span> {language === "kn" ? "೫:೦０ ರಿಂದ ರಾತ್ರಿ ೮:೦೦" : language === "hi" ? "शाम 5:00 - रात 8:00" : "5:00 PM – 8:00 PM"}</p>
                  </div>
                </div>
                <div>
                  <span className="font-display text-lg font-bold text-red-600 block mb-1">
                    {t.contact.sunday}
                  </span>
                  <p className="font-sans text-sm text-text-muted italic">
                    {t.contact.sundayClosed}
                  </p>
                </div>
              </div>
            </div>

            {/* Stacked CTA Buttons */}
            <ScrollReveal variant="fade-up" delay={400}>
              <div className="flex flex-col gap-4">
                <MagneticButton>
                  <button
                    onClick={handleBookClick}
                    className="w-full py-4 px-6 bg-primary text-white font-sans font-semibold rounded-full shadow-md hover:bg-primary-light transition-all text-center cursor-pointer glow-pulse-btn"
                  >
                    {t.contact.bookBtn}
                  </button>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 bg-emerald-600 text-white font-sans font-semibold rounded-full shadow-md hover:bg-emerald-750 transition-all text-center flex items-center justify-center gap-2 cursor-pointer glow-pulse-btn"
                  >
                    <MessageSquare className="w-5 h-5 fill-current" />
                    {t.common.whatsappNow}
                  </a>
                </MagneticButton>
              </div>
            </ScrollReveal>

            {/* Small notes below */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 pt-2">
              <span className="font-sans text-xs font-semibold text-text-muted flex items-center justify-center gap-1.5">
                <span className="text-accent">✦</span> {t.contact.note1}
              </span>
              <span className="font-sans text-xs font-semibold text-text-muted flex items-center justify-center gap-1.5">
                <span className="text-accent">✦</span> {t.contact.note2}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
