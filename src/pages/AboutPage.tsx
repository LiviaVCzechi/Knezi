import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-navy-900 mb-6">
        {language === 'en' ? 'About the Virtual Museum' : 'O virtuálním muzeu'}
      </h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-navy-800 mb-4">
            {language === 'en' ? 'Our Mission' : 'Naše mise'}
          </h2>
          <p className="text-gray-700 mb-4">
            {language === 'en'
              ? 'This virtual museum is dedicated to preserving and sharing the history of religious persecution in Czechoslovakia from 1939 to 1989. Our mission is to document, research, and present the stories of priests who faced oppression during this challenging period of history.'
              : 'Toto virtuální muzeum je věnováno zachování a sdílení historie náboženského pronásledování v Československu v letech 1939-1989. Naším posláním je dokumentovat, zkoumat a prezentovat příběhy kněží, kteří čelili útlaku během tohoto náročného období dějin.'}
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-navy-800 mb-4">
            {language === 'en' ? 'Our Work' : 'Naše práce'}
          </h2>
          <p className="text-gray-700 mb-4">
            {language === 'en'
              ? 'Through digital exhibitions, document collections, and interactive timelines, we aim to make this important historical period accessible to researchers, students, and the general public. We collaborate with archives, academic institutions, and survivors to ensure accurate and comprehensive documentation of these events.'
              : 'Prostřednictvím digitálních výstav, sbírek dokumentů a interaktivních časových os se snažíme zpřístupnit toto důležité historické období výzkumníkům, studentům a široké veřejnosti. Spolupracujeme s archivy, akademickými institucemi a pamětníky, abychom zajistili přesnou a komplexní dokumentaci těchto událostí.'}
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-navy-800 mb-4">
            {language === 'en' ? 'Research & Education' : 'Výzkum a vzdělávání'}
          </h2>
          <p className="text-gray-700 mb-4">
            {language === 'en'
              ? 'We are committed to ongoing research and educational initiatives. Our virtual museum regularly organizes conferences, workshops, and educational programs to promote understanding of religious persecution and its impact on society.'
              : 'Jsme oddáni probíhajícímu výzkumu a vzdělávacím iniciativám. Naše virtuální muzeum pravidelně organizuje konference, workshopy a vzdělávací programy na podporu porozumění náboženskému pronásledování a jeho dopadu na společnost.'}
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-navy-800 mb-4">
            {language === 'en' ? 'Contact Us' : 'Kontaktujte nás'}
          </h2>
          <p className="text-gray-700 mb-4">
            {language === 'en'
              ? 'If you have questions, would like to contribute materials, or are interested in collaborating with our virtual museum, please contact us at:'
              : 'Pokud máte dotazy, chtěli byste přispět materiály nebo máte zájem o spolupráci s naším virtuálním muzeem, kontaktujte nás na:'}
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-navy-800">Email: contact@example.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;