import React from 'react';
import { ArrowRight, Code, Brain, Gamepad2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 to-indigo-50 opacity-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
            Experto en Didáctica y TIC
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Transformando la <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Educación</span> a través de la Tecnología
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
            Especialista en el diseño de entornos virtuales de aprendizaje, gamificación y didáctica de las ciencias experimentales. 
            Creo experiencias que fomentan la autogestión y la reflexión.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-lg shadow-indigo-200"
            >
              Ver Proyectos <ArrowRight size={20} />
            </a>
            <a 
              href="#about" 
              className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
            >
              Mi Perfil
            </a>
          </div>

          <div className="mt-12 flex justify-center lg:justify-start gap-8 text-slate-400">
            <div className="flex flex-col items-center lg:items-start">
              <Code size={24} className="mb-2 text-indigo-500" />
              <span className="text-sm font-medium">Desarrollo Web</span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <Gamepad2 size={24} className="mb-2 text-purple-500" />
              <span className="text-sm font-medium">Gamificación</span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <Brain size={24} className="mb-2 text-blue-500" />
              <span className="text-sm font-medium">Metacognición</span>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative w-full max-w-lg mx-auto aspect-square">
            <div className="absolute inset-0 bg-indigo-600 rounded-[2rem] rotate-6 opacity-10"></div>
            <img 
              src="https://picsum.photos/600/600?grayscale" 
              alt="Profile" 
              className="relative rounded-[2rem] shadow-2xl w-full h-full object-cover border-4 border-white"
            />
             <div className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl shadow-lg max-w-xs hidden sm:block">
                <p className="text-sm font-semibold text-indigo-900">"El aprendizaje debe ser una aventura, no una obligación."</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;