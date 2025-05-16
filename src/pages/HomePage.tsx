import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ExhibitionCard from '../components/ExhibitionCard';
import { ArrowRight } from 'lucide-react';

// Sample data
const featuredExhibitions = [
  {
    id: 'religious-life-underground',
    title: {
      en: 'Religious Life Underground',
      cs: 'Náboženský život v podzemí',
    },
    description: {
      en: 'How persecuted priests continued their ministry in secret during the Communist era.',
      cs: 'Jak pronásledovaní kněží pokračovali ve své službě v tajnosti během komunistické éry.',
    },
    image: 'https://images.pexels.com/photos/16013480/pexels-photo-16013480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2023-12-01',
  },
  {
    id: 'detention-camps',
    title: {
      en: 'Detention Camps for Clergy',
      cs: 'Internační tábory pro duchovní',
    },
    description: {
      en: 'A look at the network of detention camps where priests were imprisoned during the totalitarian period.',
      cs: 'Pohled na síť internačních táborů, kde byli uvězněni kněží během totalitního období.',
    },
    image: 'https://images.pexels.com/photos/911529/pexels-photo-911529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2023-10-15',
  },
  {
    id: 'vatican-trials',
    title: {
      en: 'Vatican Trials',
      cs: 'Vatikánské procesy',
    },
    description: {
      en: 'The show trials against Catholic hierarchy and their connection to the Vatican.',
      cs: 'Inscenované procesy proti katolické hierarchii a jejich spojení s Vatikánem.',
    },
    image: 'https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '2023-09-01',
  },
];

const HomePage: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 to-navy-900/70 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/6174393/pexels-photo-6174393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-20 px-6 py-16 md:py-24 max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t('home.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t('home.introduction')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/timeline"
              className="px-6 py-3 bg-burgundy-600 hover:bg-burgundy-700 rounded-md font-medium transition-colors duration-300"
            >
              {t('home.explore')}
            </Link>
            <Link 
              to="/about"
              className="px-6 py-3 bg-transparent hover:bg-white/10 border border-white rounded-md font-medium transition-colors duration-300"
            >
              {language === 'en' ? 'Learn About Our Mission' : 'Seznamte se s naším posláním'}
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Timeline Events */}
      <section className="mt-16 mb-12">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">
            {t('timeline.title')}
          </h2>
          <Link 
            to="/timeline"
            className="flex items-center text-burgundy-600 hover:text-burgundy-800 font-medium transition-colors duration-300"
          >
            {language === 'en' ? 'View full timeline' : 'Zobrazit celou časovou osu'}
            <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1950, 1968, 1989].map((year) => (
            <div 
              key={year}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-2 bg-burgundy-600"></div>
              <div className="p-6">
                <span className="text-2xl font-bold text-navy-800">{year}</span>
                <h3 className="mt-3 mb-2 font-semibold">
                  {language === 'en' 
                    ? year === 1950 ? 'Show trials begin' 
                      : year === 1968 ? 'Prague Spring reforms' 
                      : 'Fall of Communist regime'
                    : year === 1950 ? 'Začátek politických procesů' 
                      : year === 1968 ? 'Reformy Pražského jara' 
                      : 'Pád komunistického režimu'
                  }
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'en'
                    ? year === 1950 ? 'Communist authorities begin a series of show trials against religious leaders.' 
                      : year === 1968 ? 'Brief period of liberalization allows some religious freedom before Soviet invasion.' 
                      : 'The Velvet Revolution ends Communist rule and begins restoration of religious liberties.'
                    : year === 1950 ? 'Komunistické úřady zahajují sérii inscenovaných procesů proti náboženským vůdcům.' 
                      : year === 1968 ? 'Krátké období liberalizace umožňuje určitou náboženskou svobodu před sovětskou invazí.' 
                      : 'Sametová revoluce ukončuje komunistickou vládu a začíná obnovení náboženských svobod.'
                  }
                </p>
                <Link 
                  to={`/timeline?year=${year}`}
                  className="text-burgundy-600 font-medium hover:text-burgundy-800 transition-colors duration-300"
                >
                  {language === 'en' ? 'Explore events' : 'Prozkoumat události'} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Featured Exhibitions */}
      <section className="my-16">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900">
            {t('home.recent')}
          </h2>
          <Link 
            to="/exhibitions"
            className="flex items-center text-burgundy-600 hover:text-burgundy-800 font-medium transition-colors duration-300"
          >
            {language === 'en' ? 'All exhibitions' : 'Všechny výstavy'}
            <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredExhibitions.map((exhibition) => (
            <ExhibitionCard 
              key={exhibition.id}
              id={exhibition.id}
              title={exhibition.title}
              description={exhibition.description}
              image={exhibition.image}
              date={exhibition.date}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;