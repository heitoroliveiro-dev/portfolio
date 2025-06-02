import { section } from 'framer-motion/client';
import {Aperture, User, Briefcase, BookOpen, Mail, Book} from 'lucide-react';

const navItems = [
  { 
    name: 'Início', 
    id: 'home', 
    icon: <Aperture size={18} />, 
    color: 'text-sky-400', 
    hoverColor: 'hover:text-sky-300', 
    sectionColor: 'bg-sky-500' 
},

  { 
    name: 'Sobre',
     id: 'about',
      icon: <User size={18} />,
      color: 'text-emerald-400', 
      hoverColor: 'hover:text-emerald-300', 
      sectionColor: 'bg-emerald-500' 
},

  { 
    name: 'Portfólio',
     id: 'portfolio', 
     icon: <Briefcase size={18} />, 
     color: 'text-rose-400', 
     hoverColor: 'hover:text-rose-300', 
     sectionColor: 'bg-rose-500' 
},

  { 
    name: 'Blog', 
    id: 'blog', 
    icon: <BookOpen size={18} />, 
    color: 'text-amber-400', 
    hoverColor: 'hover:text-amber-300', 
    sectionColor: 'bg-amber-500' 
},

  { 
    name: 'Contato', 
    id: 'contact', 
    icon: <Mail size={18} />, 
    color: 'text-violet-400', 
    hoverColor: 'hover:text-violet-300', 
    sectionColor: 'bg-violet-500' 
},
];

export default navItems;