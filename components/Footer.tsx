import React from 'react';
import { Phone, MapPin, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-500 py-16 border-t border-gray-900 font-mono text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-3 h-3 bg-tomato-600 rounded-full animate-pulse"></span>
              Grandma.io
            </h4>
            <p className="leading-relaxed opacity-70">
              Open source технологии выращивания с 1965 года.
              <br/>Деплоим вкус прямо на ваш стол.
            </p>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-wider text-xs border-b border-gray-800 pb-2 inline-block">Протокол Связи</h5>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 hover:text-tomato-500 transition-colors cursor-pointer group">
                <Phone size={14} className="group-hover:animate-bounce" />
                <span>+7 (999) 000-00-00</span>
              </li>
              <li className="flex items-center gap-3 hover:text-tomato-500 transition-colors cursor-pointer group">
                <MapPin size={14} className="group-hover:animate-bounce" />
                <span>Серверная: с. Простоквашино, стойка 1</span>
              </li>
            </ul>
          </div>

          <div>
             <h5 className="text-white font-bold mb-4 uppercase tracking-wider text-xs border-b border-gray-800 pb-2 inline-block">Карта сайта</h5>
             <ul className="space-y-2">
               <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-tomato-600">/</span> Главная</a></li>
               <li><a href="#products" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-tomato-600">/</span> Каталог</a></li>
               <li><a href="#reviews" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-tomato-600">/</span> Отзывы</a></li>
             </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-wider text-xs border-b border-gray-800 pb-2 inline-block">Соцсети</h5>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Github size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-all">
                <Twitter size={16} />
              </a>
            </div>
            <p className="mt-6 text-[10px] text-gray-700">
              © {new Date().getFullYear()} Grandma Enterprises. Все права защищены.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;