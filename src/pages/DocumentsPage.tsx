import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import DocumentCard from '../components/DocumentCard';

// Sample documents data
const documents = [
  {
    id: 'church-control-act',
    title: {
      en: 'Church Control Act of 1949',
      cs: 'Zákon o kontrole církví z roku 1949',
    },
    description: {
      en: 'Official legislation establishing state control over religious organizations in Czechoslovakia.',
      cs: 'Oficiální legislativa zavádějící státní kontrolu nad náboženskými organizacemi v Československu.',
    },
    type: 'Legal Document',
    date: '1949-10-14',
    fileUrl: '#',
  },
  {
    id: 'toufar-testimony',
    title: {
      en: 'Testimony of Father Josef Toufar',
      cs: 'Svědectví pátera Josefa Toufara',
    },
    description: {
      en: 'Original transcript of interrogation and testimony from the StB archives.',
      cs: 'Původní přepis výslechu a svědectví z archivů StB.',
    },
    type: 'Archive Document',
    date: '1950-02-15',
    externalUrl: '#',
  },
  {
    id: 'vatican-correspondence',
    title: {
      en: 'Vatican Diplomatic Correspondence',
      cs: 'Vatikánská diplomatická korespondence',
    },
    description: {
      en: 'Declassified diplomatic communications between the Vatican and Czechoslovak authorities.',
      cs: 'Odtajněná diplomatická komunikace mezi Vatikánem a československými úřady.',
    },
    type: 'Diplomatic Document',
    date: '1948-1989',
    fileUrl: '#',
    externalUrl: '#',
  },
];

const DocumentsPage: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-navy-900 mb-6">
        {t('nav.documents')}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((document) => (
          <DocumentCard 
            key={document.id}
            {...document}
          />
        ))}
      </div>
    </div>
  );
};

export default DocumentsPage;