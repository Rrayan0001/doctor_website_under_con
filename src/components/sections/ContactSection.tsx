"use client";

import { useState } from "react";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceToggle = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert(
        language === "kn"
          ? "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಕಡ್ಡಾಯ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ."
          : language === "hi"
          ? "कृपया सभी आवश्यक फ़ील्ड भरें।"
          : "Please fill in all required fields."
      );
      return;
    }
    alert(t.contact.bookingAlert);
    setName("");
    setEmail("");
    setMessage("");
    setSelectedServices([]);
  };

  // Service check options adapted for gynecologist clinic
  const servicesList = [
    t.services.items.s1.title, // Pregnancy Care
    t.services.items.s2.title, // PCOS Treatment
    t.services.items.s3.title, // Infertility Evaluation
    t.services.items.s4.title, // Laparoscopic Surgery
    t.services.items.s5.title, // General Gynaecology
    t.services.items.s6.title, // Menopause Support
    t.services.items.s8.title, // High-Risk Pregnancy
    language === "kn" ? "ವಾಡಿಕೆಯ ತಪಾಸಣೆ" : language === "hi" ? "नियमित जांच" : "Routine Check-up",
    language === "kn" ? "ಇತರೆ" : language === "hi" ? "अन्य" : "Other",
  ];

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

          {/* Right Column: Contact form container */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal variant="fade-left" delay={200} duration={1000}>
              <div className="bg-[#071e22]/90 border border-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-10 shadow-2xl relative">
                
                {/* Form header */}
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-6 border-b border-white/10">
                  <div className="text-left">
                    <h3 className="font-display text-lg sm:text-xl font-bold tracking-wide text-white flex items-center gap-1.5">
                      {language === "kn" ? "ಇಂದೇ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ! ✨" : language === "hi" ? "आज ही हमसे संपर्क करें! ✨" : "REACH OUT TO US TODAY! ✨"}
                    </h3>
                    <p className="text-xs text-white/60 font-sans mt-1">
                      {language === "kn" ? "ನಮಗೆ ಇಮೇಲ್ ಮಾಡಿ: " : language === "hi" ? "हमें ईमेल करें: " : "Mail us at "}{" "}
                      <a href="mailto:contact@dr-santosh.com" className="text-accent hover:underline font-semibold transition-all">
                        contact@dr-santosh.com
                      </a>
                    </p>
                  </div>

                  {/* Or Social Links */}
                  <div className="flex items-center space-x-3 self-start sm:self-center">
                    <span className="text-[10px] font-bold text-white/40 tracking-widest">OR</span>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-colors"
                      aria-label="Facebook"
                    >
                      <FacebookIcon size={16} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent transition-colors"
                      aria-label="Instagram"
                    >
                      <InstagramIcon size={16} />
                    </a>
                  </div>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="pt-6 space-y-6 text-left">
                  <span className="text-white/40 text-[9px] font-bold tracking-widest mb-1 block uppercase font-sans">
                    {language === "kn" ? "ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ" : language === "hi" ? "हमें संदेश भेजें" : "LEAVE US A BRIEF MESSAGE"}
                  </span>

                  {/* Two-column Input Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-accent text-[9px] font-bold tracking-widest mb-2 block uppercase font-sans">
                        {language === "kn" ? "ನಿಮ್ಮ ಹೆಸರು" : language === "hi" ? "आपका नाम" : "YOUR NAME"}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={language === "kn" ? "ನಿಮ್ಮ ಹೆಸರು" : language === "hi" ? "आपका नाम" : "Your name"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-sm placeholder-white/30 focus:outline-none focus:border-accent/50 w-full transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-accent text-[9px] font-bold tracking-widest mb-2 block uppercase font-sans">
                        {language === "kn" ? "ಇಮೇಲ್ ವಿಳಾಸ" : language === "hi" ? "ईमेल पता" : "EMAIL"}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={language === "kn" ? "ಇಮೇಲ್" : language === "hi" ? "ईमेल" : "Email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-sm placeholder-white/30 focus:outline-none focus:border-accent/50 w-full transition-all"
                      />
                    </div>
                  </div>

                  {/* Textarea concern */}
                  <div>
                    <label className="text-accent text-[9px] font-bold tracking-widest mb-2 block uppercase font-sans">
                      {language === "kn" ? "ಆರೋಗ್ಯ ಕಾಳಜಿ ಅಥವಾ ವಿಚಾರಣೆ..." : language === "hi" ? "स्वास्थ्य चिंता या पूछताछ..." : "BRIEFLY DESCRIBE YOUR HEALTH CONCERN OR INQUIRY..."}
                    </label>
                    <textarea
                      required
                      placeholder={language === "kn" ? "ನಿಮ್ಮ ಕಾಳಜಿಯನ್ನು ಸಂಕ್ಷಿಪ್ತವಾಗಿ ವಿವರಿಸಿ..." : language === "hi" ? "अपनी चिंता का संक्षेप में वर्णन करें..." : "Briefly describe your concern..."}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-transparent border border-white/10 rounded-xl px-4 py-3 text-white font-sans text-sm placeholder-white/30 focus:outline-none focus:border-accent/50 w-full h-28 resize-none transition-all"
                    />
                  </div>

                  {/* I'm looking for / Interested in */}
                  <div>
                    <label className="text-accent text-[9px] font-bold tracking-widest mb-3 block uppercase font-sans">
                      {language === "kn" ? "ನಾನು ಆಸಕ್ತಿ ಹೊಂದಿದ್ದೇನೆ..." : language === "hi" ? "मैं इसमें रुचि रखता हूँ..." : "I'M INTERESTED IN..."}
                    </label>
                    
                    {/* Grid of checkbox selections */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2 text-white/80 font-sans text-sm">
                      {servicesList.map((service, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-3 cursor-pointer group select-none"
                        >
                          <div
                            onClick={() => handleServiceToggle(service)}
                            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                              selectedServices.includes(service)
                                ? "border-accent bg-accent/20"
                                : "border-white/30 group-hover:border-white/60"
                            }`}
                          >
                            {selectedServices.includes(service) && (
                              <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                            )}
                          </div>
                          <span
                            onClick={() => handleServiceToggle(service)}
                            className={`text-xs sm:text-sm transition-colors ${
                              selectedServices.includes(service) ? "text-white font-semibold" : "text-white/70 group-hover:text-white"
                            }`}
                          >
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      className="w-full py-4 px-6 bg-accent hover:bg-accent-light text-primary-dark font-sans font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-accent/20 cursor-pointer text-center"
                    >
                      {language === "kn" ? "ಸಂದೇಶ ಕಳುಹಿಸಿ" : language === "hi" ? "संदेश भेजें" : "SEND A MESSAGE"}
                    </motion.button>
                  </div>

                </form>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
