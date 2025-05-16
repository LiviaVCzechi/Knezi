import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, BookOpen, FileText, Clock } from 'lucide-react';

// Mock search function - in a real application, this would query a database
const performSearch = (query: string, language: string) => {
  // This is a simplified mock implementation
  const mockResults = [
    {
      id: '1',
      type: 'exhibition',
      title: {
        en: 'Religious Life Underground',
        cs: 'Náboženský život v podzemí',
      },
      description: {
        en: 'How persecuted priests continued their ministry in secret during the Communist era.',
        cs: 'Jak pronásledovaní kněží pokračovali ve své službě v tajnosti během komunistické éry.',
      },
      date: '2023-12-01',
      url: '/exhibitions/religious-life-underground',
    },
    {
      id: '2',
      type: 'timeline',
      title: {
        en: 'Show Trials Begin',
        cs: 'Začátek inscenovaných procesů',
      },
      description: {
        en: 'Major show trials against religious leaders begin, with fabricated charges of espionage, treason, and Vatican collaboration.',
        cs: 'Začínají velké inscenované procesy proti náboženským vůdcům s vykonstruovanými obviněními ze špionáže, zrady a spolupráce s Vatikánem.',
      },
      date: '1950-04-31',
      url: '/timeline?year=1950',
    },
    {
      id: '3',
      type: 'document',
      title: {
        en: 'Testimony of Father Josef Toufar',
        cs: 'Svědectví pátera Josefa Toufara',
      },
      description: {
        en: 'Original transcript of the forced confession of Father Josef Toufar during StB interrogation.',
        cs: 'Původní přepis vynuceného přiznání pátera Josefa Toufara během výslechu StB.',
      },
      date: '1950-02-15',
      url: '/documents/toufar-testimony',
    },
    {
      id: '4',
      type: 'news',
      title: {
        en: 'New Documents Discovered in State Archives',
        cs: 'Nové dokumenty objeveny ve státních archivech',
      },
      description: {
        en: 'Recently declassified files reveal the extent of surveillance on Catholic clergy in the 1970s and 1980s.',
        cs: 'Nedávno odtajněné spisy odhalují rozsah sledování katolického duchovenstva v 70. a 80. letech.',
      },
      date: '2024-01-20',
      url: '/news/new-documents-discovered',
    },
  ];
  
  // Simple filtering based on query string
  if (!query) return [];
  
  return mockResults.filter((result) => {
    const titleMatch = result.title[language as keyof typeof result.title]
      .toLowerCase()
      .includes(query.toLowerCase());
    const descriptionMatch = result.description[language as keyof typeof result.description]
      .toLowerCase()
      .includes(query.toLowerCase());
    return titleMatch || descriptionMatch;
  });
};

const SearchResults: React.FC = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    setSearchQuery(query);
    
    if (query) {
      setIsSearching(true);
      // Simulate search delay
      const timer = setTimeout(() => {
        const searchResults = performSearch(query, language);
        setResults(searchResults);
        setIsSearching(false);
      }, 500);
      
      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [location.search, language]);
  
  const getIconForType = (type: string) => {
    switch (type) {
      case 'exhibition':
        return <BookOpen size={20} className="text-burgundy-600" />;
      case 'timeline':
        return <Clock size={20} className="text-navy-600" />;
      case 'document':
        return <FileText size={20} className="text-gray-600" />;
      case 'news':
      default:
        return <Calendar size={20} className="text-green-600" />;
    }
  };
  
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'exhibition':
        return language === 'en' ? 'Exhibition' : 'Výstava';
      case 'timeline':
        return language === 'en' ? 'Timeline Event' : 'Událost časové osy';
      case 'document':
        return language === 'en' ? 'Document' : 'Dokument';
      case 'news':
        return language === 'en' ? 'News Article' : 'Zpráva';
      default:
        return type;
    }
  };
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-navy-900 mb-6">
        {t('search.results')}
      </h1>
      
      <div className="mb-8">
        <form className="flex gap-2 max-w-2xl" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('search.placeholder')}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy-500"
          />
          <Link
            to={`/search?q=${encodeURIComponent(searchQuery)}`}
            className="px-6 py-2 bg-burgundy-600 text-white rounded-md hover:bg-burgundy-700 transition-colors duration-300"
          >
            {t('search.button')}
          </Link>
        </form>
      </div>
      
      {searchQuery && (
        <p className="text-gray-600 mb-6">
          {language === 'en'
            ? `Showing results for "${searchQuery}"`
            : `Zobrazují se výsledky pro "${searchQuery}"`}
        </p>
      )}
      
      {isSearching ? (
        <div className="text-center py-8">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-burgundy-500 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">
            {language === 'en' ? 'Searching...' : 'Vyhledávání...'}
          </p>
        </div>
      ) : results.length > 0 ? (
        <div className="space-y-6">
          {results.map((result) => (
            <div 
              key={result.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {getIconForType(result.type)}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <Link
                        to={result.url}
                        className="text-xl font-semibold text-navy-800 hover:text-burgundy-600 transition-colors duration-200"
                      >
                        {result.title[language]}
                      </Link>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                          {getTypeLabel(result.type)}
                        </span>
                        <span className="mx-2">•</span>
                        <span>{result.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-700">
                    {result.description[language]}
                  </p>
                  <Link
                    to={result.url}
                    className="inline-block mt-3 text-burgundy-600 hover:text-burgundy-800 font-medium transition-colors duration-200"
                  >
                    {language === 'en' ? 'View Details' : 'Zobrazit detaily'} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : searchQuery ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600 mb-4">
            {language === 'en'
              ? `No results found for "${searchQuery}"`
              : `Nebyly nalezeny žádné výsledky pro "${searchQuery}"`}
          </p>
          <p className="text-gray-500">
            {language === 'en'
              ? 'Try using different keywords or browse our collections using the navigation menu.'
              : 'Zkuste použít jiná klíčová slova nebo procházejte naše sbírky pomocí navigačního menu.'}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default SearchResults;