import React from 'react';
import { Star, GitCommit, ThumbsUp, MessageCircle } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-dark-800 relative" id="reviews">
       {/* Background noise/grain could be added here via CSS */}
       
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-gray-700 pb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Фидбек от юзеров</h2>
            <div className="flex items-center gap-4">
               <div className="flex text-yellow-500">
                 {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
               </div>
               <span className="text-gray-400 font-mono text-sm">Средний рейтинг: 5.0 (на основе данных из деревни)</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="px-6 py-2 rounded-lg bg-dark-900 text-gray-300 border border-gray-700 hover:border-tomato-500 hover:text-white transition-all text-sm font-mono flex items-center gap-2">
              <span>Фильтр: Все</span>
            </button>
            <button className="px-6 py-2 rounded-lg bg-tomato-600 text-white shadow-lg shadow-tomato-600/20 hover:bg-tomato-500 transition-all text-sm font-bold flex items-center gap-2">
              <MessageCircle size={16} />
              <span>Оставить отзыв</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-dark-900 p-6 rounded-2xl border border-gray-800 hover:border-tomato-600/50 transition-all hover:-translate-y-2 duration-300 group relative overflow-hidden">
              
              {/* Decorate hover glow */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tomato-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="flex justify-between items-start mb-4 mt-2">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black border border-gray-700 flex items-center justify-center text-sm font-bold text-tomato-500 shadow-inner">
                     {review.author.charAt(0)}
                   </div>
                   <div>
                     <div className="text-sm font-bold text-white leading-none mb-1">{review.author.split(',')[0]}</div>
                     <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wide">{review.author.split(',')[1] || 'Покупатель'}</div>
                   </div>
                </div>
                <div className="bg-gray-800/50 px-2 py-1 rounded text-[10px] text-gray-400 font-mono flex items-center gap-1 border border-gray-700/50">
                  <GitCommit size={10} /> v2.5
                </div>
              </div>

              <div className="flex text-tomato-500 mb-4 space-x-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill={i < review.rating ? "currentColor" : "none"} 
                    className={i < review.rating ? "text-yellow-500" : "text-gray-800"}
                  />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                "{review.text}"
              </p>

              <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-600 font-mono">
                 <span>2 часа назад</span>
                 <button className="flex items-center gap-1 hover:text-tomato-500 transition-colors cursor-pointer group/btn">
                    <ThumbsUp size={12} className="group-hover/btn:scale-110 transition-transform" />
                    <span>Полезно</span>
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;