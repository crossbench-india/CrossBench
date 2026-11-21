import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PoliticalConsultingPage } from './pages/PoliticalConsultingPage';
import { PublicPolicyPage } from './pages/PublicPolicyPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';

export function AppContent() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} />;
      case 'political':
        return <PoliticalConsultingPage setActivePage={setActivePage} />;
      case 'policy':
        return <PublicPolicyPage setActivePage={setActivePage} />;
      case 'solutions':
        return <SolutionsPage setActivePage={setActivePage} />;
      case 'about':
        return <AboutPage setActivePage={setActivePage} />;
      case 'insights':
        return <InsightsPage setActivePage={setActivePage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-parliament-950 text-slate-100 flex flex-col justify-between selection:bg-gold-500 selection:text-parliament-950 font-sans">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
