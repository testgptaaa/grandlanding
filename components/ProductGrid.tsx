import React from 'react';
import { PRODUCTS } from '../constants';
import { ShoppingCart, ArrowUpRight } from 'lucide-react';

const ProductGrid: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900" id="products">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-16 border-l-4 border-tomato-600 pl-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">Маркетплейс</h2>
          <p className="text-xl text-gray-400 font-light">
            Выберите конфигурацию пакета витаминов.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative bg-dark-800 rounded-3xl overflow-hidden border border-gray-800 hover:border-tomato-600/50 transition-all duration-300 shadow-lg hover:shadow-tomato-900/20">
              
              {/* Image Area */}
              <div className="h-64 overflow-hidden relative bg-gray-900">
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-tomato-600/90 backdrop-blur text-white text-[10px] font-mono font-bold px-3 py-1 rounded border border-tomato-400/50 uppercase tracking-wider shadow-lg">
                    {product.tag}
                  </span>
                </div>
                
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                {/* Tech overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent opacity-90"></div>
              </div>

              {/* Content Area */}
              <div className="p-6 relative">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-tomato-500 transition-colors">{product.name}</h3>
                  <span className="text-green-400 font-mono font-bold text-lg bg-green-900/20 px-2 py-0.5 rounded border border-green-800">
                    {product.price}₽
                  </span>
                </div>
                
                <p className="text-gray-400 text-xs mb-6 h-10 line-clamp-2 font-mono leading-relaxed opacity-70">
                  &gt; {product.description}
                </p>
                
                <button className="w-full py-3 bg-gray-700 hover:bg-white text-white hover:text-black rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 active:scale-95">
                  <span>В корзину</span>
                  <ShoppingCart size={16} />
                </button>
              </div>
              
              {/* Hover corner effect */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 p-2 rounded-full text-white backdrop-blur-sm">
                 <ArrowUpRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;