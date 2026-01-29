
import React from 'react';
import { User, Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="h-24 flex items-center bg-white/90 backdrop-blur-md border-b border-rose-50 sticky top-0 z-50 px-4">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="bg-rose-100 text-rose-600 p-3 rounded-2xl shadow-sm group-hover:bg-rose-600 group-hover:text-white transition-all">
            <Heart size={26} fill="currentColor" className="opacity-80" />
          </div>
          <span className="text-2xl font-black tracking-tight text-rose-950">
            ALTEN<span className="text-rose-600 font-accent text-3xl lowercase">pflege</span>
          </span>
        </div>
        
        <div className="hidden lg:flex gap-10 font-bold text-rose-950/40 uppercase text-[10px] tracking-[0.3em]">
          <a href="#" className="hover:text-rose-600 transition-colors">Stellen</a>
          <a href="#" className="hover:text-rose-600 transition-colors">Top-Arbeitgeber</a>
          <a href="#" className="hover:text-rose-600 transition-colors">Ratgeber</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-rose-50 text-rose-600 px-6 py-3 rounded-full font-bold hover:bg-rose-100 transition-all flex items-center gap-2">
            <User size={18} />
            <span>Login</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
