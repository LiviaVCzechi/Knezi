import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import NewsCard from '../components/NewsCard';

// Sample news data
const newsItems = [
  {
    id: 'new-documents-2024',
    title: {
      en: 'New Documents Discovered in State Archives',
      cs: 'Nové dokumenty objeveny ve státních archivech',
    },
    excerpt: {
      en: 'Recently declassified files reveal the extent of surveillance on Catholic clergy in the 1970s and 1980s.',
      cs: 'Nedávno odtajněné spisy odhalují rozsah sledování katolického duchovenstva v 70. a 80. letech.',
    },
    date: '2024-01-20',
    image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
    categories: ['Research', 'Archives'],
  },
  {
    id: 'conference-announcement',
    title: {
      en: 'International Conference Announced for September 2024',
      cs: 'Mezinárodní konference oznámena na září 2024',
    },
    excerpt: {
      en: 'Leading scholars will gather to discuss religious persecution in Central Europe during the Cold War era.',
      cs: 'Přední odborníci se sejdou k diskusi o náboženském pronásledování ve střední Evropě během studené války.',
    },
    date: '2024-01-15',
    categories: ['Events', 'Conference'],
  },
  {
    id: 'digital-archive-launch',
    title: {
      en: 'Launch of New Digital Archive Section',
      cs: 'Spuštění nové sekce digitálního archivu',
    },
    excerpt: {
      en: 'Our virtual museum now offers access to digitized documents and photographs from the 1950s persecution period.',
      cs: 'Naše virtuální muzeum nyní nabízí přístup k digitalizovaným dokumentům a fotografiím z období pronásledování v 50. letech.',
    },
    date: '2024-01-10',
    image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
    categories: ['Digital Collection', 'Website Update'],
  },
];

const NewsPage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-navy-900 mb-6">
        {t('nav.news')}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((newsItem) => (
          <NewsCard 
            key={newsItem.id}
            {...newsItem}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;