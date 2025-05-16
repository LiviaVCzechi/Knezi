import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'cs';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.timeline': 'Timeline',
    'nav.history': 'History of Repression',
    'nav.exhibitions': 'Exhibitions',
    'nav.documents': 'Documents',
    'nav.conferences': 'Conferences',
    'nav.news': 'News',
    'nav.about': 'About Us',
    'nav.sources': 'Sources',
    'search.placeholder': 'Search...',
    'search.button': 'Search',
    'search.results': 'Search Results',
    
    // Home Page
    'home.title': 'Persecution of Priests in Czechoslovakia 1939-1989',
    'home.subtitle': 'Virtual Museum',
    'home.introduction': 'Exploring the untold stories of religious persecution during a dark period of Czechoslovak history.',
    'home.explore': 'Explore the Museum',
    'home.recent': 'Recent Exhibitions',
    
    // Timeline
    'timeline.title': 'Historical Timeline',
    'timeline.subtitle': 'Key events and personalities',
    
    // Footer
    'footer.funded': 'This virtual museum is funded by',
    'footer.rights': 'All Rights Reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
  },
  cs: {
    // Navigation
    'nav.home': 'Domů',
    'nav.timeline': 'Časová osa',
    'nav.history': 'Historie represí',
    'nav.exhibitions': 'Výstavy',
    'nav.documents': 'Dokumenty',
    'nav.conferences': 'Konference',
    'nav.news': 'Novinky',
    'nav.about': 'O nás',
    'nav.sources': 'Zdroje',
    'search.placeholder': 'Hledat...',
    'search.button': 'Hledat',
    'search.results': 'Výsledky vyhledávání',
    
    // Home Page
    'home.title': 'Perzekuce kněží v Československu 1939-1989',
    'home.subtitle': 'Virtuální muzeum',
    'home.introduction': 'Prozkoumání nevyprávěných příběhů náboženského pronásledování během temného období československé historie.',
    'home.explore': 'Prohlédnout muzeum',
    'home.recent': 'Nedávné výstavy',
    
    // Timeline
    'timeline.title': 'Historická časová osa',
    'timeline.subtitle': 'Klíčové události a osobnosti',
    
    // Footer
    'footer.funded': 'Tento virtuální muzeum je financován',
    'footer.rights': 'Všechna práva vyhrazena',
    'footer.privacy': 'Zásady ochrany osobních údajů',
    'footer.terms': 'Podmínky použití',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};