// HR-UPDATER: v1.0

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { Job } from '../types';
import { Heart, Stars, Users } from 'lucide-react';

const MOCK_JOBS: Job[] = [
  {
    id: 'care1',
    title: 'Pflegefachkraft (m/w/d) - Stationär',
    company: 'Seniorenresidenz Abendrot',
    location: 'Dresden',
    type: 'Vollzeit',
    salary: '3.400€ - 4.200€',
    description: 'Werden Sie Teil unseres Teams im Herzen von Dresden. Wir bieten kleine Wohngruppen, eine digitale Pflegedokumentation und garantierte Wochenend-Freizeit.',
    postedAt: 'Vor 2 Std.',
    logo: 'https://picsum.photos/seed/care1/120/120'
  },
  {
    id: 'care2',
    title: 'Pflegehelfer (m/w/d) mit Herz',
    company: 'Ambulanter Pflegedienst "Hand in Hand"',
    location: 'Leipzig',
    type: 'Teilzeit',
    salary: '2.100€ - 2.600€',
    description: 'Begleiten Sie unsere Senioren in ihrem Zuhause. Wir legen Wert auf Zeit für Gespräche und eine tourenoptimierte Planung ohne Stress.',
    postedAt: 'Vor 5 Std.',
    logo: 'https://picsum.photos/seed/care2/120/120'
  },
  {
    id: 'care3',
    title: 'Pflegedienstleitung (PDL)',
    company: 'Haus Lebensfreude GmbH',
    location: 'Berlin-Zehlendorf',
    type: 'Vollzeit',
    salary: '5.200€ - 6.500€',
    description: 'Leitung einer modernen Einrichtung mit 80 Plätzen. Gestalten Sie innovative Pflegekonzepte und führen Sie ein motiviertes Team.',
    postedAt: 'Gestern',
    logo: 'https://picsum.photos/seed/care3/120/120'
  }
];

const Home: React.FC = () => {
  const [jobs] = useState<Job[]>(MOCK_JOBS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            <aside className="w-full lg:w-1/4">
              <Sidebar />
            </aside>
            <div className="w-full lg:w-3/4">
              <div className="flex items-center justify-between mb-8 bg-white p-8 rounded-[2rem] border border-rose-50 shadow-sm">
                <div className="flex items-center gap-5">
                  <div className="bg-rose-600 p-4 rounded-full text-white shadow-lg shadow-rose-200">
                    <Heart size={32} fill="currentColor" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-rose-950 tracking-tight">
                      Jobs mit <span className="text-rose-600">Sinn</span>
                    </h2>
                    <p className="text-rose-400 font-medium">Entdecken Sie Stellenangebote, die den Unterschied machen.</p>
                  </div>
                </div>
              </div>
              
              {loading ? (
                <div className="space-y-6">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="h-48 bg-white/50 animate-pulse rounded-[2rem] border border-rose-50"></div>
                  ))}
                </div>
              ) : (
                <div className="grid gap-8">
                  {jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              )}

              {/* Caregiver CTA */}
              <div className="mt-24 bg-rose-950 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute -top-10 -right-10 opacity-10">
                  <Heart size={240} />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-4xl font-bold mb-4 leading-tight">Ihre Zeit ist <span className="text-rose-400">wertvoll.</span></h3>
                    <p className="text-rose-100/70 text-lg font-medium leading-relaxed mb-6">
                      Wir helfen Ihnen, einen Arbeitgeber zu finden, der Ihre Fachkompetenz und Ihre Menschlichkeit gleichermaßen schätzt.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <div className="flex items-center gap-2 text-rose-300 text-sm font-bold">
                        <Stars size={18} /> Geprüfte Einrichtungen
                      </div>
                      <div className="flex items-center gap-2 text-rose-300 text-sm font-bold">
                        <Users size={18} /> Über 500+ Fachkräfte
                      </div>
                    </div>
                  </div>
                  <button className="bg-rose-500 hover:bg-rose-400 text-white font-black px-12 py-5 rounded-full transition-all shadow-xl shadow-rose-900/40 uppercase tracking-widest text-sm">
                    Jetzt bewerben
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-rose-100 py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-black text-rose-950 mb-6 flex items-center justify-center md:justify-start gap-2">
              pflege<span className="text-rose-600">stellen</span>
            </div>
            <p className="max-w-sm text-rose-900/60 font-medium leading-relaxed">
              Die Plattform für erfüllende Karrieren in der Altenpflege. Gemeinsam für mehr Lebensqualität im Alter.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-rose-950 font-bold uppercase text-xs tracking-widest">Bereiche</h4>
            <a href="#" className="text-rose-600/60 hover:text-rose-600 transition-colors">Stationäre Pflege</a>
            <a href="#" className="text-rose-600/60 hover:text-rose-600 transition-colors">Ambulante Pflege</a>
            <a href="#" className="text-rose-600/60 hover:text-rose-600 transition-colors">Tagespflege</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-rose-950 font-bold uppercase text-xs tracking-widest">Support</h4>
            <Link to="/impressum" className="text-rose-600/60 hover:text-rose-600 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-rose-600/60 hover:text-rose-600 transition-colors">Datenschutz</Link>
            <Link to="/kontakt" className="hover:text-blue-400 transition-colors">Kontakt</Link>
            <Link to="/autor/thomas-sander" className="hover:text-blue-400 transition-colors">Autor</Link>
            <p className="mt-4 text-xs text-rose-200">© 2024 stellen-altenpflege.de</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
