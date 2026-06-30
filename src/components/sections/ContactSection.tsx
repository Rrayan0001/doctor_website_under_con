"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ui/ScrollAnimations";

// Inline social SVGs to bypass pruned lucide-react exports
const FacebookIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function ContactSection() {
  const { t, language } = useLanguage();


  // Splitting left title into rows to match reference image layout
  const titleWords =
    language === "kn"
      ? ["ನಿಮ್ಮ", "ಆರೋಗ್ಯಕರ", "ಭವಿಷ್ಯವನ್ನು", "ಒಟ್ಟಾಗಿ ನಿರ್ಮಿಸೋಣ!"]
      : language === "hi"
      ? ["आइए", "मिलकर आपके", "स्वस्थ भविष्य", "का निर्माण करें!"]
      : ["LET'S BUILD", "YOUR HEALTHY", "FUTURE", "TOGETHER!"];

  // Left side list details
  const contactItems = [
    {
      icon: <MapPin className="w-5 h-5 text-accent" />,
      content: (
        <div className="text-left font-sans text-sm sm:text-base">
          <strong className="text-white block mb-0.5">{t.common.clinicName}</strong>
          <span className="block mb-1 text-white/80">
            {language === "kn" ? (
              <>೪೦೨, ಮೆಡಿಕಲ್ ಎನ್‌ಕ್ಲೇವ್, ಲಿಂಕ್ ರೋಡ್, ಅಂಧೇರಿ ವೆಸ್ಟ್, ಮುಂಬೈ — ೪೦೦೦೫೩</>
            ) : language === "hi" ? (
              <>402, मेडिकल एन्क्लेव, लिंक रोड, अंधेरी वेस्ट, मुंबई &mdash; 400053</>
            ) : (
              <>402, Medical Enclave, Link Road, Andheri West, Mumbai &mdash; 400053</>
            )}
          </span>
          <a
            href="https://maps.google.com/?q=Niramay+Women's+Clinic+Andheri+West+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-light hover:underline text-xs font-bold inline-flex items-center gap-1 transition-colors"
          >
            {t.contact.directions} <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      ),
    },
    {
      icon: <Phone className="w-5 h-5 text-accent" />,
      content: (
        <a href="tel:+919480422318" className="hover:text-accent text-white/80 font-sans text-sm sm:text-base transition-colors">
          +91 94804 22318
        </a>
      ),
    },
    {
      icon: <Mail className="w-5 h-5 text-accent" />,
      content: (
        <a href="mailto:contact@dr-santosh.com" className="hover:text-accent text-white/80 font-sans text-sm sm:text-base transition-colors">
          contact@dr-santosh.com
        </a>
      ),
    },
    {
      icon: <Clock className="w-5 h-5 text-accent" />,
      content: (
        <div className="text-left font-sans text-sm sm:text-base text-white/80">
          <span className="block font-bold text-white mb-0.5">{t.contact.timingsLabel}</span>
          <span className="text-xs sm:text-sm">
            {t.contact.weekdays}: {language === "kn" ? "೯:೦೦ - ೧:೦೦ | ೫:೦೦ - ೮:೦೦" : language === "hi" ? "9:00 - 1:00 | 5:00 - 8:00" : "9:00 AM – 1:00 PM | 5:00 PM – 8:00 PM"}
            <br />
            <span className="text-red-400 font-semibold">{t.contact.sunday}: {t.contact.sundayClosed}</span>
          </span>
        </div>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat z-10"
      style={{ backgroundImage: "url('/contact_us_bg.png')" }}
    >
      {/* Dark overlay mask to ensure text contrast and visual tone */}
      <div className="absolute inset-0 bg-[#071e22]/92 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Contact details */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <ScrollReveal variant="fade-right" delay={0} duration={900}>
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent mb-4 block">
                  {t.navbar.contact}
                </span>
                <h2 className="font-display text-[2.5rem] sm:text-[3.2rem] lg:text-[3.8rem] font-bold text-white leading-none tracking-tight">
                  {titleWords.map((word, idx) => (
                    <span key={idx} className="block mt-1">
                      {word}
                    </span>
                  ))}
                </h2>
              </div>
            </ScrollReveal>

            {/* List elements */}
            <ul className="space-y-6">
              {contactItems.map((item, idx) => (
                <ScrollReveal
                  key={idx}
                  variant="fade-right"
                  delay={100 + idx * 100}
                  duration={800}
                >
                  <li className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div className="flex-1 text-white/80">
                      {item.content}
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          {/* Right Column: Google Maps iframe */}
          <div className="lg:col-span-7 w-full h-[450px]">
            <ScrollReveal variant="fade-left" delay={200} duration={1000} className="w-full h-full">
              <div className="w-full h-full bg-[#071e22]/90 border border-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.757049845778!2d72.82798687598818!3d19.119424050730438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e17b8f9e6d%3A0x3f5d5cfc02b28c89!2sLink+Rd%2C+Andheri+West%2C+Mumbai%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "1.25rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Niramay Women's Clinic Location Map"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
