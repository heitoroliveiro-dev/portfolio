import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto text-center">
      <div className="flex justify-center space-x-6 mb-6">
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Linkedin size={24}/></a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Github size={24}/></a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Twitter size={24}/></a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} [Seu Nome]. Todos os direitos reservados.</p>
      <p className="text-xs mt-2">Criado com React & Tailwind CSS. ✨</p>
    </div>
  </footer>
);

export default Footer;