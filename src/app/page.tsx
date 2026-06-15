import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TickerStrip from "@/components/sections/TickerStrip";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky frosted Navbar */}
      <Navbar />

      {/* Main content elements */}
      <main className="flex-grow">
        <HeroSection />
        <TickerStrip />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </main>

      {/* Primary dark Footer */}
      <Footer />

      {/* Floating interactive components */}
      <WhatsAppFAB />
    </div>
  );
}
