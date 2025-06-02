import React, { useState, useEffect, useRef } from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import PortfolioSection from './components/sections/PortfolioSection';
import BlogSection from './components/sections/BlogSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Descomente esta linha!
  
  // Detectar a seção atual baseada na posição de scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'blog', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Se a seção estiver visível na tela
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentPage(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;