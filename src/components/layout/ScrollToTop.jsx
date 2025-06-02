import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return isVisible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none z-50"
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={24} />
    </button>
  ) : null;
};

export default ScrollToTop;