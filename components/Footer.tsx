import React from 'react';
import { Mail, Linkedin, Github, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">EdTechPro</h3>
            <p className="text-slate-400 text-sm max-w-xs">
              Diseñando experiencias educativas memorables a través de la tecnología y la pedagogía.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <Globe size={24} />
              <span className="sr-only">Website</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Portafolio Profesional. Desarrollado con React, Tailwind y Gemini API.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;