import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';

const sources = {
  archives: [
    {
      name: {
        en: 'National Archive of the Czech Republic',
        cs: 'Národní archiv České republiky',
      },
      description: {
        en: 'Primary source for state security and judicial documents from 1939-1989.',
        cs: 'Primární zdroj pro dokumenty státní bezpečnosti a soudnictví z let 1939-1989.',
      },
      url: 'https://www.nacr.cz/',
    },
    {
      name: {
        en: 'Security Services Archive',
        cs: 'Archiv bezpečnostních složek',
      },
      description: {
        en: 'Contains records of state surveillance and persecution of religious figures.',
        cs: 'Obsahuje záznamy o státním sledování a pronásledování náboženských osobností.',
      },
      url: 'https://www.abscr.cz/',
    },
  ],
  institutions: [
    {
      name: {
        en: 'Institute for the Study of Totalitarian Regimes',
        cs: 'Ústav pro studium totalitních režimů',
      },
      description: {
        en: 'Research institution focused on the period of Nazi occupation and Communist rule.',
        cs: 'Výzkumná instituce zaměřená na období nacistické okupace a komunistické vlády.',
      },
      url: 'https://www.ustrcr.cz/',
    },
  ],
  libraries: [
    {
      name: {
        en: 'National Library of the Czech Republic',
        cs: 'Národní knihovna České republiky',
      },
      description: {
        en: 'Extensive collection of period publications and historical documents.',
        cs: 'Rozsáhlá sbírka dobových publikací a historických dokumentů.',
      },
      url: 'https://www.nkp.cz/',
    },
  ],
};

const SourcesPage: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-navy-900 mb-6">
        {language === 'en' ? 'Sources & References' : 'Zdroje a reference'}
      </h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-navy-800 mb-4">
            {language === 'en' ? 'Archives' : 'Archivy'}
          </h2>
          <div className="space-y-4">
            {sources.archives.map((archive, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">
                      {archive.name[language]}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {archive.description[language]}
                    </p>
                  </div>
                  <a
                    href={archive.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-burgundy-600 hover:text-burgundy-800 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-navy-800 mb-4">
            {language === 'en' ? 'Research Institutions' : 'Výzkumné instituce'}
          </h2>
          <div className="space-y-4">
            {sources.institutions.map((institution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">
                      {institution.name[language]}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {institution.description[language]}
                    </p>
                  </div>
                  <a
                    href={institution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-burgundy-600 hover:text-burgundy-800 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-navy-800 mb-4">
            {language === 'en' ? 'Libraries' : 'Knihovny'}
          </h2>
          <div className="space-y-4">
            {sources.libraries.map((library, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">
                      {library.name[language]}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {library.description[language]}
                    </p>
                  </div>
                  <a
                    href={library.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-burgundy-600 hover:text-burgundy-800 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SourcesPage;