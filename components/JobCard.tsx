
import React from 'react';
import { MapPin, Clock, ChevronRight, HeartPulse, CheckCircle2 } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="care-card p-8 flex flex-col md:flex-row items-center gap-8 cursor-pointer group">
      <div className="w-24 h-24 rounded-3xl bg-rose-50 flex-shrink-0 flex items-center justify-center border border-rose-100 overflow-hidden shadow-inner group-hover:scale-110 transition-transform">
        <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-grow text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-rose-950 group-hover:text-rose-600 transition-colors mb-1 tracking-tight">
              {job.title}
            </h3>
            <p className="text-rose-400 font-bold text-sm flex items-center justify-center md:justify-start gap-2">
              <HeartPulse size={16} /> {job.company}
            </p>
          </div>
          <div className="bg-rose-600 text-white font-black text-lg px-6 py-2 rounded-2xl shadow-lg shadow-rose-100">
            {job.salary}
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-bold text-rose-900/40 mb-6">
          <span className="flex items-center gap-2">
            <MapPin size={18} className="text-rose-300" />
            {job.location}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={18} className="text-rose-300" />
            {job.type}
          </span>
          <span className="text-rose-200 font-medium italic lowercase">{job.postedAt}</span>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {['Zulassungs-Bonus', '30 Tage Urlaub', 'Dienstplan-Garantie'].map(tag => (
            <span key={tag} className="bg-rose-50/50 text-rose-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 border border-rose-100">
              <CheckCircle2 size={12} className="text-rose-500" /> {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-full bg-rose-50 text-rose-300 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all shadow-inner">
          <ChevronRight size={32} />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
