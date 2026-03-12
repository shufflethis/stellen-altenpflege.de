// HR-UPDATER: v1.0

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import { Job } from '../types';
import { Heart, Stars, Users, GraduationCap, TrendingUp, HelpCircle } from 'lucide-react';
import GeoStaedte from '../components/geo/GeoStaedte';

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Wagenmeister/in (m/w/d) für den mobilen Dienst als Vorarbeiter/in (m/w/d)',
    company: 'NORDIC RAIL SERVICE GMBH',
    location: 'Lübeck',
    type: 'Vollzeit',
    description: 'Wagenmeister/in (m/w/d) für den mobilen Dienst als Vorarbeiter/in (m/w/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '2',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Weißenburg i. Bayern',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '3',
    title: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    company: 'HUK-COBURG Versicherungsgruppe',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Versicherungs- und Finanzexperte im angestellten Außendienst im Raum Weißenburg/Gunzenhausen (w/m/d)',
    postedAt: '2026-03-08'
  },
  {
    id: '4',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'Nürnberg',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    postedAt: '2026-03-08'
  },
  {
    id: '5',
    title: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    company: 'Sikla GmbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Key Account Manager (m/w/d) - Gebiet Großraum Nürnberg - München',
    postedAt: '2026-03-08'
  },
  {
    id: '6',
    title: 'Pflegehilfskraft (m/w/d) Altenpflege',
    company: 'WEISS Personalmanagement GmbH - Aschaffenburg',
    location: 'Aschaffenburg',
    type: 'Vollzeit',
    description: 'Pflegehilfskraft (m/w/d) Altenpflege',
    postedAt: '2026-03-07'
  },
  {
    id: '7',
    title: 'Pflegefachmann/Pflegefachfrau (Altenpflege) (m/w/d)',
    company: 'Tempton Personaldienstleistungen GmbH NL Magdeburg Medical',
    location: 'Langelsheim',
    type: 'Vollzeit',
    description: 'Pflegefachmann/Pflegefachfrau (Altenpflege) (m/w/d)',
    postedAt: '2026-03-06'
  },
  {
    id: '8',
    title: 'Pflegedienstleitung (m/w/d) Altenpflege',
    company: 'GS Company Cottbus GmbH & Co. KG',
    location: 'Finsterwalde',
    type: 'Vollzeit',
    description: 'Pflegedienstleitung (m/w/d) Altenpflege',
    postedAt: '2026-03-06'
  },
  {
    id: '9',
    title: 'Helfer Altenpflege m/w/d - Altenheim',
    company: 'PerZukunft Arbeitsvermittlung GmbH&Co.KG',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Helfer Altenpflege m/w/d - Altenheim',
    postedAt: '2026-03-06'
  },
  {
    id: '10',
    title: 'Pflegefachkraft (m/w/d) - Altenpflege',
    company: 'MENetatis GmbH Seniorenzentrum MENetatis Villingen-Schwenningen',
    location: 'Villingen-Schwenningen',
    type: 'Vollzeit',
    description: 'Pflegefachkraft (m/w/d) - Altenpflege',
    postedAt: '2026-03-04'
  },
  {
    id: '11',
    title: 'Pflegefachkraft (m/w/d) - Altenpflege',
    company: 'MENetatis Pflegen und Wohnen GmbH ArteCare Pflegezentrum Reinhardshagen',
    location: 'Reinhardshagen',
    type: 'Vollzeit',
    description: 'Pflegefachkraft (m/w/d) - Altenpflege',
    postedAt: '2026-03-04'
  },
  {
    id: '12',
    title: 'Pflegefachmann/Pflegefachfrau (Altenpflege) (m/w/d)',
    company: 'Tempton Personaldienstleistungen GmbH NL Greifswald',
    location: 'Stralsund',
    type: 'Vollzeit',
    description: 'Pflegefachmann/Pflegefachfrau (Altenpflege) (m/w/d)',
    postedAt: '2026-03-02'
  },
  {
    id: '13',
    title: 'Pflegefachmann/Pflegefachfrau (Altenpflege) (m/w/d)',
    company: 'Orizon GmbH, Niederlassung Markgräflerland',
    location: 'Schopfheim',
    type: 'Vollzeit',
    description: 'Pflegefachmann/Pflegefachfrau (Altenpflege) (m/w/d)',
    postedAt: '2026-03-02'
  },
  {
    id: '14',
    title: 'Pflegefachkraft (m/w/d) Altenpflege - Wunschprämie!',
    company: 'KCS Medical GmbH',
    location: 'Schwalmstadt',
    type: 'Vollzeit',
    description: 'Pflegefachkraft (m/w/d) Altenpflege - Wunschprämie!',
    postedAt: '2026-03-02'
  },
  {
    id: '15',
    title: 'Pflegefachkraft (Altenpflege)',
    company: 'KCS Medical GmbH',
    location: 'Darmstadt',
    type: 'Vollzeit',
    description: 'Pflegefachkraft (Altenpflege)',
    postedAt: '2026-02-27'
  },
  {
    id: '16',
    title: 'Pflegefachkraft für Altenpflege (m/w/d)',
    company: 'MÜNCHENSTIFT GmbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Pflegefachkraft für Altenpflege (m/w/d)',
    postedAt: '2026-02-24'
  },
  {
    id: '17',
    title: 'Pflegehelfer in der Altenpflege (m/w/d)',
    company: 'MÜNCHENSTIFT GmbH',
    location: 'München',
    type: 'Vollzeit',
    description: 'Pflegehelfer in der Altenpflege (m/w/d)',
    postedAt: '2026-02-22'
  },
  {
    id: '18',
    title: 'Pflegefachkraft - Altenpflege (m/w/d)',
    company: 'Privathaushalt',
    location: 'Heidelberg, Neckar',
    type: 'Vollzeit',
    description: 'Pflegefachkraft - Altenpflege (m/w/d)',
    postedAt: '2026-02-22'
  },
  {
    id: '19',
    title: 'Pflegefachkraft Altenpflege (m/w/d)',
    company: 'Avanti GmbH NL München',
    location: 'München',
    type: 'Vollzeit',
    description: 'Pflegefachkraft Altenpflege (m/w/d)',
    postedAt: '2026-02-20'
  },
  {
    id: '20',
    title: 'Pflegeassistent/Pflegeassistentin (Altenpflege) (m/w/d)',
    company: 'Stewe Personalservice GmbH & Co. KG - Niederlassung Iserlohn',
    location: 'Iserlohn',
    type: 'Vollzeit',
    description: 'Pflegeassistent/Pflegeassistentin (Altenpflege) (m/w/d)',
    postedAt: '2026-02-20'
  },
  {
    id: '21',
    title: 'Pflegeassistent/Pflegeassistentin (Altenpflege) (m/w/d)',
    company: 'iperdi AHR GmbH - Niederlassung Ludwigslust',
    location: 'Ludwigslust, Mecklenburg',
    type: 'Vollzeit',
    description: 'Pflegeassistent/Pflegeassistentin (Altenpflege) (m/w/d)',
    postedAt: '2026-02-20'
  },
  {
    id: '22',
    title: 'Pflegefachkraft (m/w/d) in der Altenpflege',
    company: 'Dr. Ebel Fachkliniken GmbH & Co. Carolinum KG',
    location: 'Bad Karlshafen',
    type: 'Vollzeit',
    description: 'Pflegefachkraft (m/w/d) in der Altenpflege',
    postedAt: '2026-02-17'
  },
  {
    id: '23',
    title: 'Helfer/in - Altenpflege',
    company: 'PerZukunft Arbeitsvermittlung GmbH&Co.KG',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Helfer/in - Altenpflege',
    postedAt: '2026-02-17'
  },
  {
    id: '24',
    title: 'Pflegefachmann/Pflegefachfrau (Altenpflege) (m/w/d)',
    company: 'iperdi AHR GmbH - Niederlassung Bremen',
    location: 'Bremen',
    type: 'Vollzeit',
    description: 'Pflegefachmann/Pflegefachfrau (Altenpflege) (m/w/d)',
    postedAt: '2026-02-16'
  },
  {
    id: '25',
    title: 'Pflegeassistent/Pflegeassistentin (Altenpflege) (m/w/d)',
    company: 'OPTIPER GmbH - Niederlassung Mühlhausen',
    location: 'Mühlhausen/Thüringen',
    type: 'Vollzeit',
    description: 'Pflegeassistent/Pflegeassistentin (Altenpflege) (m/w/d)',
    postedAt: '2026-02-16'
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
            <aside className="w-full lg:w-1/4 order-2 lg:order-1">
              <Sidebar />
            </aside>
            <div className="w-full lg:w-3/4 order-1 lg:order-2">
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

        {/* Geo SEO: Deutsche Staedte */}
        <GeoStaedte />

        {/* Karriere in der Altenpflege */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-[2rem] border border-rose-50 shadow-sm p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-rose-100 p-3 rounded-full">
                <GraduationCap size={28} className="text-rose-600" />
              </div>
              <h2 className="text-3xl font-bold text-rose-950 tracking-tight">Karriere in der Altenpflege</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-rose-900/70 leading-relaxed">
              <div>
                <h3 className="text-xl font-bold text-rose-950 mb-3 flex items-center gap-2"><TrendingUp size={20} className="text-rose-500" /> Berufsbild & Perspektiven</h3>
                <p className="mb-4">
                  Die Altenpflege gehört zu den wichtigsten und zukunftssichersten Berufsfeldern in Deutschland.
                  Mit dem demografischen Wandel steigt der Bedarf an qualifizierten Pflegekräften stetig.
                  Altenpflegerinnen und Altenpfleger betreuen und versorgen ältere Menschen in stationären
                  Einrichtungen, ambulanten Diensten oder Tagespflegeeinrichtungen.
                </p>
                <p>
                  Typische Aufgaben umfassen die Grundpflege, medizinische Behandlungspflege, Dokumentation,
                  Beratung von Angehörigen sowie die Gestaltung des Tagesablaufs. Die Ausbildung zur
                  Pflegefachkraft dauert drei Jahre und eröffnet vielfältige Karrierewege.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-rose-950 mb-3">Weiterbildung & Aufstiegsmöglichkeiten</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2"><span className="text-rose-500 font-bold mt-1">•</span> <span><b>Pflegedienstleitung (PDL):</b> Leitungsposition mit Personalverantwortung und Gehältern ab 3.800 EUR</span></li>
                  <li className="flex items-start gap-2"><span className="text-rose-500 font-bold mt-1">•</span> <span><b>Wohnbereichsleitung:</b> Verantwortung für einen Wohnbereich mit Team von 10-20 Pflegekräften</span></li>
                  <li className="flex items-start gap-2"><span className="text-rose-500 font-bold mt-1">•</span> <span><b>Praxisanleitung:</b> Ausbildung und Begleitung von Nachwuchskräften in der Pflege</span></li>
                  <li className="flex items-start gap-2"><span className="text-rose-500 font-bold mt-1">•</span> <span><b>Fachweiterbildungen:</b> Gerontopsychiatrie, Palliativpflege, Wundmanagement</span></li>
                  <li className="flex items-start gap-2"><span className="text-rose-500 font-bold mt-1">•</span> <span><b>Studium:</b> Pflegewissenschaft, Pflegemanagement oder Gerontologie an Fachhochschulen</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-[2rem] border border-rose-50 shadow-sm p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-rose-100 p-3 rounded-full">
                <HelpCircle size={28} className="text-rose-600" />
              </div>
              <h2 className="text-3xl font-bold text-rose-950 tracking-tight">Häufig gestellte Fragen</h2>
            </div>
            <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
              {[
                {
                  q: 'Ist die Stellensuche auf stellen-altenpflege.de kostenlos?',
                  a: 'Ja, die Suche nach Altenpflege-Stellenangeboten ist für Bewerberinnen und Bewerber vollständig kostenlos. Sie können alle Stellenanzeigen durchsuchen und sich direkt bei den Arbeitgebern bewerben.'
                },
                {
                  q: 'Welche Qualifikationen brauche ich für die Altenpflege?',
                  a: 'Für eine Tätigkeit als Pflegefachkraft benötigen Sie eine dreijährige Ausbildung zur/zum Pflegefachfrau/-mann (seit 2020 generalistisch). Für Pflegehilfskräfte gibt es je nach Bundesland ein- bis zweijährige Ausbildungen. Auch Quereinsteiger mit entsprechenden Schulungen haben gute Chancen.'
                },
                {
                  q: 'Wie hoch ist das Gehalt in der Altenpflege?',
                  a: 'Das Einstiegsgehalt für examinierte Altenpfleger liegt bei ca. 2.800-3.200 EUR brutto/Monat. Mit Berufserfahrung, Zulagen (Nacht, Wochenende, Feiertage) und Weiterbildungen sind 3.500-4.500 EUR realistisch. Pflegedienstleitungen verdienen ab 3.800 EUR aufwärts.'
                },
                {
                  q: 'In welchen Städten gibt es die meisten Altenpflege-Stellenangebote?',
                  a: 'Die meisten Stellenangebote in der Altenpflege finden sich in Großstädten wie Berlin, München, Hamburg, Köln, Frankfurt am Main, Stuttgart und Düsseldorf. Aber auch in kleineren Städten und ländlichen Regionen besteht ein hoher Bedarf an Pflegekräften.'
                },
                {
                  q: 'Was ist der Unterschied zwischen ambulanter und stationärer Altenpflege?',
                  a: 'In der stationären Pflege arbeiten Sie in Pflegeheimen oder Seniorenresidenzen, wo Bewohner rund um die Uhr betreut werden. In der ambulanten Pflege besuchen Sie pflegebedürftige Menschen zu Hause und unterstützen sie in ihrer gewohnten Umgebung. Beide Bereiche haben ihre eigenen Vorteile und Herausforderungen.'
                },
                {
                  q: 'Wie bewerbe ich mich über stellen-altenpflege.de?',
                  a: 'Durchsuchen Sie unsere aktuellen Stellenangebote, filtern Sie nach Einrichtungsart, Standort oder Schichtmodell und klicken Sie auf die gewünschte Stelle. Sie werden direkt zur Bewerbungsseite des Arbeitgebers weitergeleitet, wo Sie Ihre Unterlagen einreichen können.'
                },
              ].map((faq, i) => (
                <div key={i} className="border border-rose-100 rounded-2xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-rose-950 mb-2" itemProp="name">{faq.q}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-rose-900/60 leading-relaxed" itemProp="text">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
