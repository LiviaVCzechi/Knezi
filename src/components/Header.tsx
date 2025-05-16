import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Search, Menu, X, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'cs' : 'en');
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/timeline', label: t('nav.timeline') },
    { path: '/history', label: t('nav.history') },
    { path: '/exhibitions', label: t('nav.exhibitions') },
    { path: '/documents', label: t('nav.documents') },
    { path: '/conferences', label: t('nav.conferences') },
    { path: '/news', label: t('nav.news') },
    { path: '/about', label: t('nav.about') },
    { path: '/sources', label: t('nav.sources') },
  ];

  return (
    <header className="bg-navy-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold mr-4">
              {t('home.subtitle')}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-burgundy-400 transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-burgundy-500 font-medium' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder={t('search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-1 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-burgundy-500"
                aria-label={t('search.placeholder')}
              />
              <button
                type="submit"
                className="bg-burgundy-600 hover:bg-burgundy-700 px-3 py-1 rounded-r-md transition-colors duration-200"
                aria-label={t('search.button')}
              >
                <Search size={18} />
              </button>
            </form>
            <button
              onClick={toggleLanguage}
              className="flex items-center text-sm hover:text-burgundy-400 transition-colors duration-200"
              aria-label={language === 'en' ? 'Switch to Czech' : 'Switch to English'}
            >
              <Globe size={18} className="mr-1" />
              {language === 'en' ? 'CS' : 'EN'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-burgundy-400 focus:outline-none"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-gray-700">
            <form onSubmit={handleSearch} className="flex items-center mb-4">
              <input
                type="text"
                placeholder={t('search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow px-3 py-2 rounded-l-md text-gray-800 focus:outline-none"
                aria-label={t('search.placeholder')}
              />
              <button
                type="submit"
                className="bg-burgundy-600 hover:bg-burgundy-700 px-3 py-2 rounded-r-md transition-colors duration-200"
                aria-label={t('search.button')}
              >
                <Search size={18} />
              </button>
            </form>

            <button
              onClick={toggleLanguage}
              className="w-full flex items-center justify-center py-2 text-white bg-navy-700 hover:bg-navy-600 rounded-md transition-colors duration-200"
              aria-label={language === 'en' ? 'Switch to Czech' : 'Switch to English'}
            >
              <Globe size={18} className="mr-2" />
              {language === 'en' ? 'Přepnout na češtinu' : 'Switch to English'}
            </button>

            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 px-4 hover:bg-navy-700 rounded-md transition-colors duration-200 ${
                  location.pathname === item.path ? 'bg-navy-700 text-burgundy-400' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;