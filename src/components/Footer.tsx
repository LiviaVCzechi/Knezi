import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('home.subtitle')}</h3>
            <p className="text-gray-300 mb-4">
              {t('footer.funded')} [Funding Body]
            </p>
            <img 
              src="https://via.placeholder.com/150x50" 
              alt="Funding organization logo" 
              className="h-12 mb-4" 
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.about')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/about" className="hover:text-burgundy-400 transition-colors duration-200">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/sources" className="hover:text-burgundy-400 transition-colors duration-200">
                  {t('nav.sources')}
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-burgundy-400 transition-colors duration-200"
                >
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="hover:text-burgundy-400 transition-colors duration-200"
                >
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.explore')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/timeline" className="hover:text-burgundy-400 transition-colors duration-200">
                  {t('nav.timeline')}
                </Link>
              </li>
              <li>
                <Link to="/exhibitions" className="hover:text-burgundy-400 transition-colors duration-200">
                  {t('nav.exhibitions')}
                </Link>
              </li>
              <li>
                <Link to="/documents" className="hover:text-burgundy-400 transition-colors duration-200">
                  {t('nav.documents')}
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-burgundy-400 transition-colors duration-200">
                  {t('nav.news')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} {t('home.subtitle')}. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;