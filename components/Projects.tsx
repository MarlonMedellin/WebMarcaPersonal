import React from 'react';
import { Project } from '../types';
import { Rocket, Award, Layers, Calculator } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Curso Introductorio de Matemáticas Gamificado',
    description: 'Una plataforma integral que transforma el aprendizaje de matemáticas universitarias. Integra módulos interactivos y sistemas de seguimiento para garantizar la comprensión profunda de conceptos.',
    tags: ['HTML5', 'JavaScript', 'CSS3', 'Gamification'],
    image: 'https://picsum.photos/800/500?math',
  },
  {
    id: '2',
    title: 'Space Shooter Math Edition',
    description: 'Un videojuego integrado en el currículo donde los estudiantes resuelven problemas algebraicos para avanzar de nivel. Fomenta la agilidad mental y la aplicación práctica.',
    tags: ['Game Design', 'Canvas API', 'Edutainment'],
    image: 'https://picsum.photos/800/500?space',
  },
  {
    id: '3',
    title: 'Sistema de Badges & Flashcards',
    description: 'Herramientas de refuerzo metacognitivo. Las flashcards ayudan a la memorización activa, mientras que el sistema de insignias recompensa la constancia y los hitos académicos.',
    tags: ['UX/UI', 'Cognitive Science', 'Web App'],
    image: 'https://picsum.photos/800/500?cards',
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Proyectos Destacados</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Implementaciones reales que combinan código robusto con estrategias pedagógicas avanzadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">Ver detalles</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-4">
                <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-600">
                    <Calculator size={32} />
                </div>
                <h4 className="font-semibold text-slate-800">Matemáticas Aplicadas</h4>
            </div>
            <div className="flex flex-col items-center text-center p-4">
                <div className="bg-purple-100 p-4 rounded-full mb-4 text-purple-600">
                    <Rocket size={32} />
                </div>
                <h4 className="font-semibold text-slate-800">Juegos Interactivos</h4>
            </div>
            <div className="flex flex-col items-center text-center p-4">
                <div className="bg-green-100 p-4 rounded-full mb-4 text-green-600">
                    <Layers size={32} />
                </div>
                <h4 className="font-semibold text-slate-800">Flashcards</h4>
            </div>
            <div className="flex flex-col items-center text-center p-4">
                <div className="bg-yellow-100 p-4 rounded-full mb-4 text-yellow-600">
                    <Award size={32} />
                </div>
                <h4 className="font-semibold text-slate-800">Sistema de Badges</h4>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;