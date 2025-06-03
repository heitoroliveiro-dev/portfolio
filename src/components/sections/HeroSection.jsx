import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
    <div className="w-full text-center max-w-3xl">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
        <span className="block">Olá, eu sou Heitor Oliveiro</span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-rose-400 to-amber-400 mt-2">
          Desenvolvedor Web Full Stack
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
        Transformando ideias em experiências digitais intuitivas e visualmente impactantes.
      </p>
      <div className="space-x-4">
        <a
          href="#portfolio"
          onClick={e => {
            e.preventDefault();
            document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Ver Projetos
        </a>
        <a
          href="#contact"
          onClick={e => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-transparent border-2 border-gray-400 hover:border-white hover:text-white text-gray-300 font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Entrar em Contato
        </a>
      </div>
      <div className="mt-16 animate-bounce">
        <ChevronDown size={48} className="mx-auto text-gray-500" />
      </div>
    </div>
  </section>
);

export default HeroSection;