import React, { useEffect } from 'react';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MottoSection from './components/MottoSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import PortfolioSection from './components/PortfolioSection';
import ProjectIdeaSection from './components/ProjectIdeaSection/ProjectIdeaSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CursorSpotlight from './components/CursorSpotlight';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
    return () => {
      document.documentElement.classList.remove('scroll-smooth');
    };
  }, []);

  return (
    <div className="bg-white text-gray-800 antialiased">
        <CursorSpotlight />
        <div className="relative z-10">
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <MottoSection />
                <ProcessSection />
                <ServicesSection />
                <ClientsSection />
                <PortfolioSection />
                <ProjectIdeaSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    </div>
  );
}
