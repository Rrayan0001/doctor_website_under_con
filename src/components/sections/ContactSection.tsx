"use client";

import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

export default function ContactSection() {
  const phoneNumber = "919876543210";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Dr.%20Santosh%2C%20I%27d%20like%20to%20check%20availability%20for%20a%20consultation.`;

  const availabilityHours = [
    { day: "Monday", morning: "9:00 AM – 1:00 PM", evening: "5:00 PM – 8:00 PM", status: "Available" },
    { day: "Tuesday", morning: "9:00 AM – 1:00 PM", evening: "5:00 PM – 8:00 PM", status: "Available" },
    { day: "Wednesday", morning: "9:00 AM – 1:00 PM", evening: "5:00 PM – 8:00 PM", status: "Available" },
    { day: "Thursday", morning: "9:00 AM – 1:00 PM", evening: "5:00 PM – 8:00 PM", status: "Available" },
    { day: "Friday", morning: "9:00 AM – 1:00 PM", evening: "5:00 PM – 8:00 PM", status: "Available" },
    { day: "Saturday", morning: "9:00 AM – 1:00 PM", evening: "5:00 PM – 8:00 PM", status: "Available" },
    { day: "Sunday", morning: "Closed", evening: "Closed", status: "Closed", closed: true },
  ];

  return (
    <section id="contact" className="py-12 md:py-20 contact-gradient scroll-mt-20 relative">
      {/* Decorative orb */}
      <div className="orb orb-1 top-[-100px] left-[-150px] opacity-15" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Contact & Hours"
          heading="Clinic Location & Availability"
          subheading="Check our daily practice hours, find clinic coordinates, or reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Contact Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Info Cards */}
            <div className="glass-card p-8 rounded-card space-y-6">
              
              {/* Address */}
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary-muted text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:shadow-glow">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-xs font-bold text-text-light uppercase tracking-wider">
                    Clinic Address
                  </span>
                  <span className="text-sm font-semibold text-text-dark mt-1">
                    Niramay Women&apos;s Clinic
                  </span>
                  <span className="text-sm text-text-mid mt-0.5 leading-relaxed">
                    402, Medical Enclave, Link Road, Andheri West, Mumbai, Maharashtra 400053
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary-muted text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:shadow-glow">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-xs font-bold text-text-light uppercase tracking-wider">
                    Phone
                  </span>
                  <a
                    href="tel:+919876543210"
                    className="text-sm font-semibold text-text-dark hover:text-primary mt-1 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary-muted text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:shadow-glow">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-xs font-bold text-text-light uppercase tracking-wider">
                    WhatsApp
                  </span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-text-dark hover:text-primary mt-1 transition-colors flex items-center gap-1.5"
                  >
                    +91 98765 43210
                    <span className="text-[10px] bg-[#25D366]/15 text-[#25D366] px-1.5 py-0.5 rounded font-bold uppercase">
                      Online
                    </span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary-muted text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:shadow-glow">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-xs font-bold text-text-light uppercase tracking-wider">
                    Email
                  </span>
                  <a
                    href="mailto:contact@dr-santosh.com"
                    className="text-sm font-semibold text-text-dark hover:text-primary mt-1 transition-colors"
                  >
                    contact@dr-santosh.com
                  </a>
                </div>
              </div>

              {/* Clinic Timings Summary */}
              <div className="flex gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary-muted text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:shadow-glow">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-xs font-bold text-text-light uppercase tracking-wider">
                    Clinic Timings
                  </span>
                  <span className="text-sm text-text-mid mt-1 leading-relaxed">
                    Mon – Sat: 9:00 AM – 1:00 PM <br />
                    5:00 PM – 8:00 PM <br />
                    <span className="text-red-500 font-medium">Sunday: Closed</span>
                  </span>
                </div>
              </div>

            </div>

            {/* Google Map Embed */}
            <div className="overflow-hidden rounded-card border border-border-custom shadow-card h-[240px] relative w-full bg-white">
              <iframe
                title="Dr. Santosh Kulkarni Clinic Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7562858882823!2d72.8277562761899!3d19.11942008707119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9e061805555%3A0xe54dbe4198d023f0!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column - Clinic Weekly Availability Calendar */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card p-5 sm:p-8 md:p-10 rounded-card">
              <h3 className="font-display text-2xl font-bold text-text-dark mb-2">
                Clinic Practice Schedule
              </h3>
              <p className="font-sans text-sm text-text-mid leading-relaxed mb-8">
                Walk-ins are welcomed. To confirm live waiting times, check holiday hours, or consult online, contact us directly via WhatsApp or Phone call.
              </p>

              {/* Weekly Availability Grid */}
              <div className="space-y-4 mb-8">
                {availabilityHours.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-card border transition-all duration-300 ${
                      item.closed
                        ? "bg-red-50/30 border-red-100/70 text-red-700/80"
                        : "bg-white/60 border-border-custom hover:border-primary/30 hover:bg-white hover:shadow-sm"
                    }`}
                  >
                    {/* Day & Status Badge */}
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                      <span className="font-sans text-sm font-bold text-text-dark min-w-[70px]">
                        {item.day}
                      </span>
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[6px] ${
                          item.closed
                            ? "bg-red-100 text-red-700"
                            : "bg-primary-muted text-primary"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* Timings */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs font-sans text-text-mid">
                      {item.closed ? (
                        <span className="font-semibold italic text-red-500">Emergency calls only</span>
                      ) : (
                        <>
                          <div className="flex items-center">
                            <span className="text-text-light mr-1">Morning:</span>
                            <span className="font-semibold text-text-dark">{item.morning}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-text-light mr-1">Evening:</span>
                            <span className="font-semibold text-text-dark">{item.evening}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Actions Card */}
              <div className="bg-gradient-to-r from-primary-muted/50 to-primary-muted/30 p-6 rounded-card border border-primary/10 flex flex-col gap-4">
                <h4 className="font-display text-base font-bold text-primary">
                  Need Consultation Assistance?
                </h4>
                <p className="font-sans text-xs text-text-mid leading-relaxed">
                  Tap below to chat with our clinic representative on WhatsApp or call our desk to verify slot availability.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium flex-1 py-3 bg-[#25D366] text-white font-sans text-sm font-bold rounded-button shadow-md text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4.5 h-4.5 fill-current" />
                    Consult on WhatsApp
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="btn-premium flex-1 py-3 bg-primary text-white font-sans text-sm font-bold rounded-button shadow-md text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4.5 h-4.5" />
                    Call Clinic Desk
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
