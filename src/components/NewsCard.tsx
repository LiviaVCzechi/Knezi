import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NewsCardProps {
  id: string;
  title: {
    en: string;
    cs: string;
  };
  excerpt: {
    en: string;
    cs: string;
  };
  date: string;
  image?: string;
  categories: string[];
}

const NewsCard: React.FC<NewsCardProps> = ({ id, title, excerpt, date, image, categories }) => {
  const { language } = useLanguage();
  
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title[language]} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center mb-3 text-sm text-gray-600">
          <Calendar size={16} className="mr-2" />
          <span>{date}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-navy-900">
          {title[language]}
        </h3>
        
        {categories.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-gray-600 mb-4">
          {excerpt[language]}
        </p>
        
        <Link 
          to={`/news/${id}`}
          className="inline-block text-burgundy-600 font-medium hover:text-burgundy-800 transition-colors duration-300"
        >
          {language === 'en' ? 'Read more' : 'Číst více'} →
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;