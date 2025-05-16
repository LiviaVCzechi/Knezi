import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface DocumentCardProps {
  id: string;
  title: {
    en: string;
    cs: string;
  };
  description: {
    en: string;
    cs: string;
  };
  type: string;
  date: string;
  fileUrl?: string;
  externalUrl?: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ 
  id, 
  title, 
  description, 
  type, 
  date, 
  fileUrl, 
  externalUrl 
}) => {
  const { language } = useLanguage();
  
  const getDocumentIcon = () => {
    return <FileText size={24} className="text-navy-600" />;
  };
  
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start mb-4">
        <div className="mr-4">
          {getDocumentIcon()}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-navy-900">{title[language]}</h3>
          <p className="text-sm text-gray-500 mt-1">{type} • {date}</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 line-clamp-2">
        {description[language]}
      </p>
      
      <div className="mt-auto flex gap-2">
        {fileUrl && (
          <a 
            href={fileUrl}
            className="inline-flex items-center px-3 py-1.5 text-sm border border-navy-600 text-navy-700 rounded hover:bg-navy-50 transition-colors duration-300"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={16} className="mr-2" />
            {language === 'en' ? 'Download' : 'Stáhnout'}
          </a>
        )}
        
        {externalUrl && (
          <a 
            href={externalUrl}
            className="inline-flex items-center px-3 py-1.5 text-sm bg-navy-600 text-white rounded hover:bg-navy-700 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} className="mr-2" />
            {language === 'en' ? 'View' : 'Zobrazit'}
          </a>
        )}
      </div>
    </div>
  );
};

export default DocumentCard;