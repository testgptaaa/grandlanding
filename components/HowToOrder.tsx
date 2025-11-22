import React from 'react';
import { MousePointerClick, GitPullRequest, PackageCheck, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Конфигурация',
    subtitle: 'Выбор пакетов',
    icon: MousePointerClick,
    description: 'Выберите необходимые модули (сорта) в каталоге. Соберите свой идеальный стек витаминов.',
    color: 'text-blue-400',
    borderColor: 'group-hover:border-blue-400/50'
  },
  {
    id: '02',
    title: 'Commit Order',
    subtitle: 'Оформление',
    icon: GitPullRequest,
    description: 'Отправьте Pull Request на покупку через форму. Бабушка проверит мердж-конфликты и подтвердит заказ.',
    color: 'text-purple-400',
    borderColor: 'group-hover:border-purple-400/50'
  },
  {
    id: '03',
    title: 'Сборка Билда',
    subtitle: 'Сбор урожая',
    icon: PackageCheck,
    description: 'Компиляция заказа прямо с грядки. Только свежие исходники, никаких кэшированных овощей.',
    color: 'text-yellow-400',
    borderColor: 'group-hover:border-yellow-400/50'
  },
  {
    id: '04',
    title: 'Deploy',
    subtitle: 'Доставка',
    icon: Rocket,
    description: 'Деплой коробки на ваш стол (localhost). Высокая скорость передачи данных курьером.',
    color: 'text-green-400',
    borderColor: 'group-hover:border-green-400/50'
  }
];

const HowToOrder: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 border-t border-gray-800 relative overflow-hidden">
      {/* Tech Background lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tomato-600 to-transparent hidden md:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Delivery <span className="text-tomato-500">Pipeline</span>
          </h2>
          <p className="text-gray-400 font-mono">
            Алгоритм получения продукта от грядки до продакшена (вашего желудка).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              
              {/* Connecting Arrow (Desktop only, not for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-6 z-20 text-gray-700 group-hover:text-tomato-600 transition-colors duration-500 transform group-hover:translate-x-1">
                  <ArrowRight size={24} />
                </div>
              )}

              <div className={`bg-dark-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 ${step.borderColor} transition-all duration-500 hover:-translate-y-2 relative z-10 h-full flex flex-col`}>
                
                <div className="flex justify-between items-start mb-6">
                   <div className={`w-12 h-12 rounded-lg bg-dark-900 border border-gray-700 flex items-center justify-center ${step.color} shadow-lg`}>
                     <step.icon size={24} />
                   </div>
                   <span className="text-4xl font-extrabold text-gray-800 select-none group-hover:text-gray-700 transition-colors font-mono">
                     {step.id}
                   </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">{step.subtitle}</div>
                
                <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                  {step.description}
                </p>

                {/* Hover glowing line at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tomato-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-tomato-500 to-purple-600">
              <button className="px-8 py-3 rounded-full bg-black text-white font-bold hover:bg-gray-900 transition-all flex items-center gap-2">
                 <Rocket size={18} className="text-tomato-500" />
                 <span>Запустить процесс заказа</span>
              </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default HowToOrder;