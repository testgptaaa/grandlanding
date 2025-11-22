import React from 'react';
import { ShieldCheck, Zap, Recycle, Database } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern bg-grid opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Технические <span className="text-tomato-500">Характеристики</span>
          </h2>
          <p className="text-gray-400 font-mono">Архитектурный обзор наших био-продуктов.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Feature 1 - Large */}
          <div className="md:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-tomato-500/50 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-32 bg-tomato-600/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-tomato-600/20"></div>
            <ShieldCheck className="w-12 h-12 text-tomato-500 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">Отсутствие внешних зависимостей</h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Мы не используем сторонние "плагины" вроде пестицидов или нитратов. Только чистый, нативный иммунитет растений, поддерживаемый вручную (Manual Garbage Collection сорняков).
            </p>
          </div>

          {/* Feature 2 */}
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden hover:border-yellow-500/50 transition-colors duration-500 group">
            <Zap className="w-12 h-12 text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-white mb-2">Solar Powered</h3>
            <p className="text-gray-400 text-sm">
              Энергоэффективный фотосинтез. 12 часов зарядки от солнца ежедневно для максимальной сочности.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden hover:border-green-600/50 transition-colors duration-500 group">
            <Recycle className="w-12 h-12 text-green-400 mb-6 group-hover:rotate-180 transition-transform duration-700" />
            <h3 className="text-xl font-bold text-white mb-2">Eco-Cycle</h3>
            <p className="text-gray-400 text-sm">
              Полная рекурсия: компост из старых листьев питает новые плоды. Безотходное производство.
            </p>
          </div>

           {/* Feature 4 - Large */}
           <div className="md:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden flex items-center justify-between group hover:border-blue-500/50 transition-colors duration-500">
            <div className="relative z-10">
              <Database className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Большая база данных</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Более 50 сортов в репозитории бабушки. От классических до экспериментальных веток (branches).
              </p>
            </div>
            <div className="hidden md:block absolute right-0 bottom-0 opacity-30 grayscale group-hover:grayscale-0 transition-all duration-500 mask-image-gradient">
               <img src="https://picsum.photos/seed/tomato_db_v2/300/300" className="w-48 h-48 object-cover rounded-tl-3xl" alt="Database" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;