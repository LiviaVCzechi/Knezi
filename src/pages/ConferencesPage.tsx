import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, MapPin, Users } from 'lucide-react';

const conferences = [
  {
    id: 'conf-2024',
    title: {
      en: 'Religious Persecution in Central Europe',
      cs: 'Náboženské pronásledování ve střední Evropě',
    },
    description: {
      en: 'International conference examining the patterns of religious persecution across Central European countries during the Cold War era.',
      cs: 'Mezinárodní konference zkoumající vzorce náboženského pronásledování v zemích střední Evropy během studené války.',
    },
    date: '2024-09-15',
    location: {
      en: 'Prague, Czech Republic',
      cs: 'Praha, Česká republika',
    },
    type: 'In-person',
    registration: true,
  },
  {
    id: 'conf-2024-online',
    title: {
      en: 'Digital Archives and Religious History',
      cs: 'Digitální archivy a náboženské dějiny',
    },
    description: {
      en: 'Online workshop focusing on digital preservation and presentation of religious historical documents.',
      cs: 'Online workshop zaměřený na digitální uchovávání a prezentaci náboženských historických dokumentů.',
    },
    date: '2024-06-20',
    type: 'Online',
    registration: true,
  },
];

const ConferencesPage: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-navy-900 mb-6">
        {language === 'en' ? 'Conferences & Events' : 'Konference a události'}
      </h1>
      
      <div className="space-y-6">
        {conferences.map((conference) => (
          <div 
            key={conference.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h2 className="text-xl font-bold text-navy-900 mb-2 md:mb-0">
                {conference.title[language]}
              </h2>
              {conference.registration && (
                <button className="bg-burgundy-600 text-white px-4 py-2 rounded-md hover:bg-burgundy-700 transition-colors duration-300">
                  {language === 'en' ? 'Register Now' : 'Registrovat'}
                </button>
              )}
            </div>
            
            <p className="text-gray-600 mb-4">
              {conference.description[language]}
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {conference.date}
              </div>
              
              {conference.location && (
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  {conference.location[language]}
                </div>
              )}
              
              <div className="flex items-center">
                <Users size={16} className="mr-2" />
                {conference.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConferencesPage;