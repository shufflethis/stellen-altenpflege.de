
import React from 'react';
import { Filter, Stethoscope, Home, Activity } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 px-2">
        <Filter size={24} className="text-rose-500" />
        <h3 className="font-bold text-rose-950 text-xl tracking-tight">Filter</h3>
      </div>

      <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-rose-50">
        <section className="mb-10">
          <h4 className="font-black text-rose-200 text-[10px] uppercase mb-6 tracking-[0.3em] flex items-center gap-2">
            <Stethoscope size={14} className="text-rose-400" /> Einrichtungsart
          </h4>
          <div className="space-y-4">
            {[
              'Stationäres Wohnheim', 
              'Ambulanter Dienst', 
              'Tagespflege', 
              'Intensiv-WG', 
              'Hospiz'
            ].map(item => (
              <label key={item} className="flex items-center gap-4 cursor-pointer group">
                <input type="checkbox" className="w-6 h-6 rounded-lg border-rose-100 text-rose-600 focus:ring-rose-500/50 cursor-pointer" />
                <span className="text-rose-900/60 font-bold text-sm group-hover:text-rose-600 transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h4 className="font-black text-rose-200 text-[10px] uppercase mb-6 tracking-[0.3em] flex items-center gap-2">
            <Home size={14} className="text-rose-400" /> Schichtmodell
          </h4>
          <div className="space-y-4">
            {[
              'Nur Früh/Spät', 
              'Reine Nachtwache', 
              'Muttischichten', 
              '12-Stunden-Schichten',
              'Flexibles Zeitkonto'
            ].map(item => (
              <label key={item} className="flex items-center gap-4 cursor-pointer group">
                <input type="radio" name="shift" className="w-6 h-6 border-rose-100 text-rose-600 focus:ring-rose-500/50 cursor-pointer" />
                <span className="text-rose-900/60 font-bold text-sm group-hover:text-rose-600 transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </section>

        <div className="bg-rose-50 p-6 rounded-[1.5rem] border border-rose-100">
          <div className="flex items-center gap-2 text-rose-700 font-bold text-[10px] mb-3 uppercase tracking-widest">
            <Activity size={18} className="text-rose-500" />
            <span>Wussten Sie schon?</span>
          </div>
          <p className="text-rose-900/50 text-[11px] leading-relaxed font-medium italic">
            92% der Pflegekräfte auf unserer Plattform priorisieren ein <b>festes Teamgefüge</b> gegenüber dem Gehalt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
