import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, RefreshCw, Sparkles } from 'lucide-react';
import { generateTutorResponse } from '../services/geminiService';

const EdTechDemo: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: '¡Hola! Soy tu Asistente Virtual de Matemáticas. Puedo explicarte conceptos algebraicos, ayudarte a reflexionar sobre tu aprendizaje o mostrarte cómo uso la gamificación. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setLoading(true);

    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);

    try {
      const responseText = await generateTutorResponse(userMsg, messages);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, hubo un error técnico. Inténtalo de nuevo.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-indigo-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Demo Interactiva
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Inteligencia Artificial en Educación</h2>
            <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
              Como desarrollador de aplicaciones educativas, integro tecnologías de vanguardia como la IA Generativa (Google Gemini) para crear tutores inteligentes.
            </p>
            <p className="text-indigo-200 mb-8">
              Esta demostración simula un módulo de apoyo para estudiantes, capaz de resolver dudas matemáticas y fomentar la metacognición, similar a lo que implemento en mis cursos gamificados.
            </p>
            <ul className="space-y-3 text-indigo-200">
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full"></div>Respuestas contextuales inmediatas</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full"></div>Adaptación al nivel del estudiante</li>
                <li className="flex items-center gap-2"><div className="w-2 h-2 bg-green-400 rounded-full"></div>Integración mediante API modernas</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl overflow-hidden h-[500px] flex flex-col">
            <div className="p-4 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-600 rounded-lg">
                    <Bot size={20} className="text-white" />
                </div>
                <div>
                    <h3 className="font-semibold text-sm">Tutor Virtual (Demo)</h3>
                    <p className="text-xs text-indigo-300">Powered by Gemini</p>
                </div>
              </div>
              <button 
                onClick={() => setMessages([{ role: 'model', text: '¡Hola! ¿Listo para aprender matemáticas o hablar sobre tecnología educativa?' }])}
                className="text-slate-400 hover:text-white transition-colors"
                title="Reiniciar chat"
              >
                <RefreshCw size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-purple-600' : 'bg-indigo-600'}`}>
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-purple-600 text-white rounded-tr-none' 
                        : 'bg-slate-700 text-slate-100 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-slate-700 p-3 rounded-2xl rounded-tl-none text-sm text-slate-300 flex items-center gap-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-800 border-t border-slate-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Pregunta sobre álgebra o sobre esta app..."
                  className="flex-1 bg-slate-900 border border-slate-600 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
                <button 
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white p-2 rounded-xl transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EdTechDemo;