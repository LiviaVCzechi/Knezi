import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ExhibitionCard from '../components/ExhibitionCard';

// Sample exhibitions data
const exhibitions = [
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

const ExhibitionsPage: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-navy-900 mb-6">
        {t('nav.exhibitions')}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exhibitions.map((exhibition) => (
          <ExhibitionCard 
            key={exhibition.id}
            {...exhibition}
          />
        ))}
      </div>
    </div>
  );
};

export default ExhibitionsPage;