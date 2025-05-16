import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface ExhibitionCardProps {
  id: string;
  title: {
    en: string;
    cs: string;
  };
  description: {
    en: string;
    cs: string;
  };
  image: string;
  date: string;
}

const ExhibitionCard: React.FC<ExhibitionCardProps> = ({ id, title, description, image, date }) => {
  const { language } = useLanguage();
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title[language]}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-burgundy-600 mb-2">{date}</p>
        <h3 className="text-xl font-bold mb-2 text-navy-900">{title[language]}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description[language]}
        </p>
        <Link 
          to={`/exhibitions/${id}`}
          className="inline-block px-4 py-2 bg-navy-800 text-white rounded-md hover:bg-navy-700 transition-colors duration-300"
        >
          {language === 'en' ? 'View Exhibition' : 'Zobrazit výstavu'}
        </Link>
      </div>
    </div>
  );
};

export default ExhibitionCard;