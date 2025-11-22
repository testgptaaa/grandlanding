import React from 'react';
import { Calendar, Code, Coffee, Heart, Shield } from 'lucide-react';

const History: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Decorative background line */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-tomato-900 to-transparent hidden md:block"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
           <span className="text-tomato-500 font-mono text-sm tracking-widest uppercase mb-2 block animate-pulse">Since 1965</span>
           <h2 className="text-4xl md:text-6xl font-bold text-white">
             Legacy Code: <span className="text-transparent bg-clip-text bg-gradient-to-r from-tomato-500 to-purple-500">История Бабушки</span>
           </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="relative group">
             <div className="absolute inset-0 bg-tomato-600 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
             <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl rotate-2 group-hover:rotate-0 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img 
                  src="https://picsum.photos/seed/grandma_tech_v3/600/800" 
                  alt="Grandma Nina" 
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                
                <div className="absolute bottom-6 left-6 z-20">
                    <p className="text-white font-bold text-xl">CTO & Founder</p>
                    <p className="text-tomato-400 font-mono text-sm">Нина Петровна</p>
                </div>
             </div>
             
             {/* Badge */}
             <div className="absolute -top-6 -left-6 bg-dark-800 border border-gray-700 p-4 rounded-xl shadow-xl z-30 transform group-hover:translate-x-2 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-2 rounded-lg">
                    <Code size={20} className="text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase">Опыт разработки</div>
                    <div className="font-bold font-mono text-white">58 Лет</div>
                  </div>
                </div>
             </div>
          </div>

          <div className="space-y-10">
             <div className="pl-6 border-l-2 border-tomato-600/30 hover:border-tomato-600 transition-colors">
               <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                 <span className="text-tomato-500 font-mono">01.</span> Инициализация
               </h3>
               <p className="text-gray-400 leading-relaxed">
                 Все началось, когда "облака" были просто белыми штуками в небе. Бабушка Нина написала свой первый "скрипт" посадки помидоров еще в 60-х. Её страсть к оптимизации урожая привела к созданию уникальной методологии ухода, которую невозможно скопировать (Proprietary Tech).
               </p>
             </div>

             <div className="pl-6 border-l-2 border-tomato-600/30 hover:border-tomato-600 transition-colors">
               <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                 <span className="text-tomato-500 font-mono">02.</span> Секретный Алгоритм
               </h3>
               <p className="text-gray-400 leading-relaxed">
                 В отличие от промышленных ферм, использующих brute-force (химию), Нина использует элегантные решения. Душевные разговоры с рассадой увеличивают <span className="text-white font-mono">growth_rate</span> на 15%. Своевременное пасынкование снижает нагрузку на корневой сервер.
               </p>
             </div>

             <div className="pl-6 border-l-2 border-tomato-600/30 hover:border-tomato-600 transition-colors">
               <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                 <span className="text-tomato-500 font-mono">03.</span> Quality Assurance
               </h3>
               <p className="text-gray-400 leading-relaxed">
                 Каждый помидор проходит ручное code-review перед продажей. Если он не идеален, он идет в рефакторинг (на аджику). Вы получаете только стабильные релизы (Production Ready).
               </p>
             </div>

             <div className="pt-6 flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-sm flex items-center gap-2 transition-all">
                   <Heart size={16} className="text-tomato-500 fill-tomato-500" />
                   <span>Сделано с любовью</span>
                </button>
                <button className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-sm flex items-center gap-2 transition-all">
                   <Shield size={16} className="text-green-500" />
                   <span>Экологически чисто</span>
                </button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default History;