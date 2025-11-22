import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import GrandmaChat from './components/GrandmaChat';
import History from './components/History';
import Reviews from './components/Reviews';
import HowToOrder from './components/HowToOrder';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-200">
      <Hero />
      <Features />
      
      {/* Scrolling Ticker Banner */}
      <div className="bg-tomato-600 text-black py-3 overflow-hidden border-y border-tomato-500">
        <div className="animate-marquee whitespace-nowrap font-mono font-bold text-sm uppercase tracking-widest flex gap-8">
           {[1,2,3,4,5,6].map(i => (
             <span key={i} className="flex items-center gap-4">
               <span>/// SYSTEM STATUS: OPTIMAL</span>
               <span>/// HARVEST TIME: 05:00 AM</span>
               <span>/// STOCK: LIMITED</span>
             </span>
           ))}
        </div>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <History />
      <ProductGrid />
      <HowToOrder />
      <Gallery />
      <Reviews />
      <Footer />
      <GrandmaChat />
    </div>
  );
};

export default App;