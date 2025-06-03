import React from 'react';
import { Menu, X, Aperture, User, Briefcase, BookOpen, Mail } from 'lucide-react';

const navItems = [
  { name: 'Início', id: 'home', icon: <Aperture size={18} />, color: 'text-sky-400', hoverColor: 'hover:text-sky-300', sectionColor: 'bg-sky-500' },
  { name: 'Sobre', id: 'about', icon: <User size={18} />, color: 'text-emerald-400', hoverColor: 'hover:text-emerald-300', sectionColor: 'bg-emerald-500' },
  { name: 'Portfólio', id: 'portfolio', icon: <Briefcase size={18} />, color: 'text-rose-400', hoverColor: 'hover:text-rose-300', sectionColor: 'bg-rose-500' },
  { name: 'Blog', id: 'blog', icon: <BookOpen size={18} />, color: 'text-amber-400', hoverColor: 'hover:text-amber-300', sectionColor: 'bg-amber-500' },
  { name: 'Contato', id: 'contact', icon: <Mail size={18} />, color: 'text-violet-400', hoverColor: 'hover:text-violet-300', sectionColor: 'bg-violet-500' },
];

function Header({ currentPage, setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen }) {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand Name */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={() => setCurrentPage('home')}
              className="text-2xl font-bold tracking-tight hover:text-gray-300 transition-colors duration-300"
            >
              Heitor Oliveiro
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(item.id);
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out flex items-center space-x-2
                  ${currentPage === item.id ? `${item.sectionColor} text-white shadow-md` : `text-gray-300 ${item.hoverColor} hover:bg-gray-700/50`}
                  transform hover:scale-105`}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 inset-x-0 bg-gray-800/95 backdrop-blur-sm p-2 space-y-1 sm:px-3 z-40 shadow-xl rounded-b-lg">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(item.id);
                setIsMobileMenuOpen(false);
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-3 py-3 rounded-md text-base font-medium flex items-center space-x-3
                ${currentPage === item.id ? `${item.sectionColor} text-white` : `text-gray-300 ${item.hoverColor} hover:bg-gray-700`}
                transition-colors duration-200`}
            >
              {React.cloneElement(item.icon, { className: item.color })}
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;