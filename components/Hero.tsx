
import React from 'react';
import { Search, MapPin, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-32 px-4 relative overflow-hidden text-center">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-rose-50/50 rounded-full blur-3xl scale-125 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest mb-10 animate-pulse">
          <Sparkles size={16} />
          Ihr Herzschlag für die Pflege
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-rose-950 mb-8 leading-[1.1] tracking-tighter">
          Pflege mit <br/>
          <span className="text-rose-600 font-accent text-7xl md:text-9xl lowercase">Herz & Seele.</span>
        </h1>
        <p className="text-xl text-rose-900/50 mb-16 max-w-xl mx-auto font-medium leading-relaxed">
          Entdecken Sie Jobs in der Altenpflege, bei denen Menschlichkeit zählt. Wir bringen Sie zu Arbeitgebern, die Wertschätzung groß schreiben.
        </p>
        
        <div className="max-w-3xl mx-auto bg-white p-3 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center gap-3 border border-rose-50">
          <div className="flex-grow flex items-center px-6 py-5 w-full bg-rose-50/30 rounded-full">
            <Search className="text-rose-400 mr-4" size={24} />
            <input 
              type="text" 
              placeholder="Beruf (z.B. Fachkraft, PDL)" 
              className="w-full bg-transparent focus:outline-none text-rose-950 font-bold placeholder-rose-200"
            />
          </div>
          <div className="flex-grow flex items-center px-6 py-5 w-full bg-rose-50/30 rounded-full">
            <MapPin className="text-rose-400 mr-4" size={24} />
            <input 
              type="text" 
              placeholder="Region" 
              className="w-full bg-transparent focus:outline-none text-rose-950 font-bold placeholder-rose-200"
            />
          </div>
          <button className="w-full md:w-auto bg-rose-600 hover:bg-rose-700 text-white font-black px-12 py-5 rounded-full transition-all shadow-xl shadow-rose-200 uppercase tracking-widest text-sm">
            Finden
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
