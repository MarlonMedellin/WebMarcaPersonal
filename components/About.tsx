import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    "Didáctica de las Ciencias Experimentales",
    "Diseño y Desarrollo de Apps Educativas",
    "Sistemas de Gamificación (Badges, Niveles)",
    "Desarrollo Web (HTML, CSS, JavaScript)",
    "Fomento del Aprendizaje Autogestionado"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Sobre Mí</h2>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>
                Soy un profesional apasionado con amplia experiencia en la <strong>didáctica de las ciencias experimentales</strong> y un experto en <strong>TIC</strong>, especializado en la intersección entre la pedagogía y la tecnología.
              </p>
              <p>
                Mi carrera se ha centrado en el diseño y desarrollo de aplicaciones educativas innovadoras que no solo transmiten conocimiento, sino que transforman la manera en que los estudiantes interactúan con él.
              </p>
              <p>
                Creo firmemente en la <strong>autogestión del aprendizaje</strong> y la reflexión metacognitiva. Mis proyectos buscan garantizar experiencias de aprendizaje sólidas, motivadoras y aplicables profesionalmente en entornos virtuales modernos.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="text-green-500 h-5 w-5 flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
             {/* Decorative stats visualization */}
             <div className="bg-slate-50 rounded-2xl p-8 shadow-xl border border-slate-100">
                <h3 className="text-lg font-semibold mb-6 text-slate-800">Enfoque Pedagógico</h3>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-indigo-700">Innovación Tecnológica</span>
                            <span className="text-sm font-medium text-indigo-700">95%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2.5">
                            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-purple-700">Diseño Instruccional</span>
                            <span className="text-sm font-medium text-purple-700">90%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2.5">
                            <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-blue-700">Gamificación</span>
                            <span className="text-sm font-medium text-blue-700">98%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2.5">
                            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '98%' }}></div>
                        </div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;