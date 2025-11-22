import React from 'react';
import { ChevronRight, Terminal, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-dark-900 text-white selection:bg-tomato-600">
      
      {/* Tech Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.07] z-0 pointer-events-none"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tomato-600 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20 lg:mt-0">
        
        {/* Left Column: Text */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tomato-600/30 bg-tomato-600/10 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-xs font-mono text-tomato-400 tracking-wider uppercase">Система: Онлайн • Урожай готов</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none">
            НАТУРАЛЬНЫЙ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tomato-500 via-red-500 to-orange-500 neon-text">
              ИНТЕЛЛЕКТ
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-xl leading-relaxed font-light">
            Бабушка Нина представляет: томаты нового поколения v2.0. Выращены на крафтовом навозе и продвинутых агро-алгоритмах. <br/>
            <span className="text-white font-mono">0% ГМО. 0% Багов. 100% Open Source.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 bg-tomato-600 hover:bg-tomato-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-tomato-600/20 hover:shadow-tomato-600/40 hover:scale-105">
              <span>Заказать доставку</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="px-8 py-4 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-xl transition-all font-mono text-sm flex items-center justify-center gap-2">
              <Terminal size={16} />
              <span>changelog.md</span>
            </button>
          </div>

          <div className="pt-8 flex items-center gap-6 text-xs text-gray-500 font-mono border-t border-gray-800/50 mt-8">
             <div className="flex items-center gap-2">
               <Cpu size={14} />
               <span>BIO-ENGINE V.88</span>
             </div>
             <div className="h-4 w-[1px] bg-gray-800"></div>
             <div>UPTIME: 99.9%</div>
             <div className="h-4 w-[1px] bg-gray-800"></div>
             <div className="text-green-500">NO BUGS FOUND</div>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="relative perspective-1000">
          <div className="relative z-10 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl shadow-tomato-900/20 group transform transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-tomato-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
            <img 
              src="https://picsum.photos/seed/tech_tomato_hero_v2/800/1000" 
              alt="Cyber Tomato" 
              className="w-full h-auto object-cover grayscale transition-all duration-700 group-hover:grayscale-0 scale-105"
            />
            
            {/* Floating UI Elements */}
            <div className="absolute top-6 right-6 glass-panel p-4 rounded-xl flex flex-col gap-1 animate-bounce-gentle border-l-4 border-tomato-500">
               <span className="text-[10px] text-gray-400 font-mono uppercase">Уровень сахара (Brix)</span>
               <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                 <div className="h-full w-[92%] bg-gradient-to-r from-tomato-500 to-purple-500"></div>
               </div>
               <span className="text-right text-xs font-bold text-white">92% (Overclocked)</span>
            </div>

             <div className="absolute bottom-6 left-6 glass-panel p-4 rounded-xl border-r-4 border-green-500">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-tomato-500 font-bold border border-gray-800">
                    Sr.
                 </div>
                 <div>
                   <div className="text-xs text-gray-400">Lead Agronomist</div>
                   <div className="text-sm font-bold text-white">Бабушка Нина</div>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Decorative Elements behind image */}
          <div className="absolute -top-10 -right-10 w-24 h-24 border border-dashed border-gray-700 rounded-full animate-spin-slow opacity-50"></div>
          <div className="absolute -bottom-5 -left-5 w-40 h-40 border border-gray-800 rounded-full opacity-50"></div>
        </div>

      </div>
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .rotate-y-6 { transform: rotateY(6deg); }
        .rotate-x-6 { transform: rotateX(6deg); }
      `}</style>
    </div>
  );
};

export default Hero;