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
        <div className="text-left font-sans text-sm sm:text-base leading-relaxed">
          <strong className="text-white block mb-0.5">{t.common.clinicName}</strong>
          <span className="block mb-1 text-white/80">
            {language === "kn" ? (
              <>ಕೆ. ಸಿ. ಪಾರ್ಕ್ ಪೋಸ್ಟ್ ಆಫೀಸ್ ಎದುರು, ಧಾರವಾಡ, ಕರ್ನಾಟಕ ೫೮೦೦೦೮</>
            ) : language === "hi" ? (
              <>के. सी. पार्क पोस्ट ऑफिस के सामने, धारवाड़, कर्नाटक 580008</>
            ) : (
              <>Opp. K. C. Park Post Office, Dharwad, Karnataka 580008</>
            )}
          </span>
          <a
            href="https://maps.google.com/?q=Tavargeri+Nursing+Home+Pvt+Ltd+Opp+K+C+Park+Post+Office+Dharwad"
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
        <div className="flex flex-col gap-1 text-white/80 font-sans text-xs sm:text-sm">
          <a href="tel:+918105074067" className="hover:text-accent transition-colors">
            +91 81050 74067 (Primary & WhatsApp)
          </a>
          <a href="tel:+9108362747603" className="hover:text-accent transition-colors">
            0836-2747603
          </a>
          <a href="tel:+9108362448359" className="hover:text-accent transition-colors">
            0836-2448359
          </a>
        </div>
      ),
    },
    {
      icon: <Mail className="w-5 h-5 text-accent" />,
      content: (
        <a href="mailto:santoshikulkarni815@gmail.com" className="hover:text-accent text-white/80 font-sans text-sm sm:text-base transition-colors">
          santoshikulkarni815@gmail.com
        </a>
      ),
    },
    {
      icon: <Clock className="w-5 h-5 text-accent" />,
      content: (
        <div className="text-left font-sans text-sm sm:text-base text-white/80 leading-relaxed">
          <span className="block font-bold text-white mb-0.5">{t.contact.timingsLabel}</span>
          <span className="text-xs sm:text-sm">
            {t.contact.weekdays}: {language === "kn" ? "೧೨:೦೦ - ೭:೦೦" : language === "hi" ? "12:00 - 7:00" : "12:00 PM – 7:00 PM"}
            <br />
            {language === "kn" ? "ಶನಿವಾರ" : language === "hi" ? "शनिवार" : "Saturday"}: {language === "kn" ? "೧೨:೦೦ - ೩:೦೦" : language === "hi" ? "12:00 - 3:00" : "12:00 PM – 3:00 PM"}
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
                <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-accent mb-4 block">
                  ✦ {t.navbar.contact}
                </span>
                <h2 className="font-display text-[2.8rem] sm:text-[3.6rem] lg:text-[4.2rem] font-bold text-white leading-none tracking-tight">
                  {titleWords.map((word, idx) => (
                    <span key={idx} className="block mt-3">
                      {word}
                    </span>
                  ))}
                </h2>
              </div>
            </ScrollReveal>

            {/* List elements */}
            <ul className="space-y-8">
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
                  src="https://maps.google.com/maps?q=Tavargeri+Nursing+Home+Pvt+Ltd+Opp+K+C+Park+Post+Office+Dharwad&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "1.25rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tavargeri Nursing Home Pvt Ltd Location Map"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
