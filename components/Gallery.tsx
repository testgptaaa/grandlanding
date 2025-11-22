import React from 'react';

const Gallery: React.FC = () => {
  const seeds = ['tomato_gal1', 'tomato_gal2', 'tomato_gal3', 'tomato_gal4', 'tomato_gal5', 'tomato_gal6'];

  return (
    <section className="py-12 bg-black overflow-hidden border-y border-gray-800">
      <div className="flex gap-4 animate-scroll w-[200%] hover:pause">
        {[...seeds, ...seeds].map((seed, idx) => (
          <div key={idx} className="w-80 h-64 flex-shrink-0 rounded-xl overflow-hidden relative group cursor-pointer border border-gray-800">
            <img 
              src={`https://picsum.photos/seed/${seed}/600/800`} 
              alt="Tomato Gallery" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-300"></div>
            
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="text-xs font-mono text-tomato-500">IMG_SOURCE_{idx}.JPG</div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Gallery;