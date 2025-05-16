import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TimelinePage from './pages/TimelinePage';
import HistoryPage from './pages/HistoryPage';
import ExhibitionsPage from './pages/ExhibitionsPage';
import DocumentsPage from './pages/DocumentsPage';
import ConferencesPage from './pages/ConferencesPage';
import NewsPage from './pages/NewsPage';
import AboutPage from './pages/AboutPage';
import SourcesPage from './pages/SourcesPage';
import SearchResults from './pages/SearchResults';
import { LanguageProvider } from './contexts/LanguageContext';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/exhibitions" element={<ExhibitionsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/conferences" element={<ConferencesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sources" element={<SourcesPage />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;