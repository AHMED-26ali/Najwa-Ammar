/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import PortfolioGallery from './components/PortfolioGallery';
import StatsCounter from './components/StatsCounter';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import { ProjectItem, ServiceItem } from './types';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { HERO_DATA } from './data/agencyData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [targetServiceForContact, setTargetServiceForContact] = useState<string>('');

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setTargetServiceForContact(serviceTitle);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = () => {
    scrollToContact('استشارة إعلانية شاملة');
  };

  const handleWhatsappFloating = () => {
    const text = 'مرحباً مطبعة نجوى عمار للدعاية والإعلان، أود التواصل معكم بخصوص خدماتكم الإعلانية.';
    window.open(`https://wa.me/${HERO_DATA.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FCFAF6] text-slate-900 selection:bg-emerald-500 selection:text-white relative">
      
      {/* Dynamic Ambient Background Gradients */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-emerald-200/25 via-teal-100/20 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-amber-200/25 via-yellow-100/20 to-transparent rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 right-1/3 w-[700px] h-[600px] bg-gradient-to-tl from-blue-200/20 via-emerald-100/15 to-transparent rounded-full blur-[140px]" />
      </div>

      {/* Navigation Top Bar Contract */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Layout */}
      <main>
        {/* 1. Hero Section with Interactive Showcase */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onOpenContact={() => scrollToContact()}
        />

        {/* 2. Services with Interactive Filters and Scope Inspection */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onRequestQuote={(title) => scrollToContact(title)}
        />

        {/* 3. Why Choose Us? 6 Pillars Bento Grid */}
        <WhyChooseUs />

        {/* 4. Portfolio Showcase (iOS Photos Style with 5 Categories) */}
        <PortfolioGallery
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 5. Animated Achievements & Numbers Counter (+100 projects, +80 clients, etc.) */}
        <StatsCounter />

        {/* 6. iOS-Style Client Testimonials */}
        <TestimonialsSection />

        {/* 7. Contact & Direct 1-Click Social Channels (WhatsApp, IG, FB, TikTok, Email) */}
        <ContactSection initialService={targetServiceForContact} />

        {/* 8. FAQ Section */}
        <FaqSection />
      </main>

      {/* 10. Modern Minimal Footer */}
      <Footer />

      {/* Interactive Case Study Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={(title) => {
          setSelectedProject(null);
          scrollToContact(title);
        }}
      />

      {/* Interactive Service Details Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOrderService={(title) => {
          setSelectedService(null);
          scrollToContact(title);
        }}
      />

      {/* Floating 1-Click WhatsApp Quick Button (Modern Glass Style) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={handleWhatsappFloating}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600/90 hover:bg-emerald-600 backdrop-blur-xl text-white shadow-xl shadow-emerald-950/20 hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-400/40"
          aria-label="تواصل عبر واتساب"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
          <span className="text-xs font-bold hidden sm:inline-block">تواصل فوري عبر واتساب</span>
        </button>
      </div>

    </div>
  );
}
