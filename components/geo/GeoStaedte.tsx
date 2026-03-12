// HR-UPDATER: v1.0
import React from 'react';
import { MapPin } from 'lucide-react';

const STAEDTE = [
  { name: 'Berlin', slug: 'berlin', jobs: 145 },
  { name: 'München', slug: 'muenchen', jobs: 132 },
  { name: 'Hamburg', slug: 'hamburg', jobs: 118 },
  { name: 'Köln', slug: 'koeln', jobs: 97 },
  { name: 'Frankfurt am Main', slug: 'frankfurt-am-main', jobs: 89 },
  { name: 'Stuttgart', slug: 'stuttgart', jobs: 84 },
  { name: 'Düsseldorf', slug: 'duesseldorf', jobs: 76 },
  { name: 'Leipzig', slug: 'leipzig', jobs: 68 },
  { name: 'Dortmund', slug: 'dortmund', jobs: 62 },
  { name: 'Essen', slug: 'essen', jobs: 58 },
  { name: 'Bremen', slug: 'bremen', jobs: 54 },
  { name: 'Dresden', slug: 'dresden', jobs: 51 },
  { name: 'Hannover', slug: 'hannover', jobs: 49 },
  { name: 'Nürnberg', slug: 'nuernberg', jobs: 47 },
  { name: 'Duisburg', slug: 'duisburg', jobs: 43 },
  { name: 'Bochum', slug: 'bochum', jobs: 39 },
  { name: 'Wuppertal', slug: 'wuppertal', jobs: 36 },
  { name: 'Bielefeld', slug: 'bielefeld', jobs: 34 },
  { name: 'Bonn', slug: 'bonn', jobs: 32 },
  { name: 'Münster', slug: 'muenster', jobs: 31 },
  { name: 'Mannheim', slug: 'mannheim', jobs: 29 },
  { name: 'Augsburg', slug: 'augsburg', jobs: 27 },
  { name: 'Wiesbaden', slug: 'wiesbaden', jobs: 25 },
  { name: 'Karlsruhe', slug: 'karlsruhe', jobs: 24 },
  { name: 'Gelsenkirchen', slug: 'gelsenkirchen', jobs: 22 },
  { name: 'Mönchengladbach', slug: 'moenchengladbach', jobs: 21 },
  { name: 'Braunschweig', slug: 'braunschweig', jobs: 20 },
  { name: 'Aachen', slug: 'aachen', jobs: 19 },
  { name: 'Kiel', slug: 'kiel', jobs: 18 },
  { name: 'Chemnitz', slug: 'chemnitz', jobs: 17 },
  { name: 'Magdeburg', slug: 'magdeburg', jobs: 16 },
  { name: 'Freiburg im Breisgau', slug: 'freiburg', jobs: 15 },
  { name: 'Lübeck', slug: 'luebeck', jobs: 14 },
  { name: 'Erfurt', slug: 'erfurt', jobs: 13 },
  { name: 'Rostock', slug: 'rostock', jobs: 12 },
  { name: 'Mainz', slug: 'mainz', jobs: 11 },
  { name: 'Kassel', slug: 'kassel', jobs: 10 },
  { name: 'Hagen', slug: 'hagen', jobs: 10 },
  { name: 'Saarbrücken', slug: 'saarbruecken', jobs: 9 },
  { name: 'Potsdam', slug: 'potsdam', jobs: 9 },
];

const GeoStaedte: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-[2rem] border border-rose-50 shadow-sm p-8 md:p-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-rose-100 p-3 rounded-full">
            <MapPin size={28} className="text-rose-600" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-rose-950 tracking-tight">Altenpflege-Jobs nach Stadt</h2>
            <p className="text-rose-400 font-medium mt-1">Finden Sie Stellenangebote in Ihrer Nähe</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {STAEDTE.map((stadt) => (
            <a
              key={stadt.slug}
              href={`#/jobs/${stadt.slug}`}
              className="flex items-center gap-2 px-4 py-3 rounded-xl border border-rose-50 hover:border-rose-200 hover:bg-rose-50/50 transition-all group"
            >
              <MapPin size={14} className="text-rose-300 group-hover:text-rose-500 flex-shrink-0" />
              <span className="text-sm font-semibold text-rose-900/70 group-hover:text-rose-700 truncate">{stadt.name}</span>
              <span className="text-[10px] text-rose-300 font-bold ml-auto flex-shrink-0">{stadt.jobs}</span>
            </a>
          ))}
        </div>
        <p className="mt-8 text-sm text-rose-400 leading-relaxed">
          Altenpflege-Stellenangebote sind in ganz Deutschland verfügbar. Ob in Großstädten wie Berlin, München oder Hamburg,
          oder in kleineren Städten und ländlichen Regionen — qualifizierte Pflegekräfte werden überall gesucht.
          Nutzen Sie unsere Suchfunktion, um passende Altenpflege-Jobs in Ihrer Wunschstadt zu finden.
        </p>
      </div>
    </section>
  );
};

export default GeoStaedte;
