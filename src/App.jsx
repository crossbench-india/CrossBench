import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PoliticalConsultingPage } from './pages/PoliticalConsultingPage';
import { StrategicPRPage } from './pages/StrategicPRPage';
import { PublicPolicyPage } from './pages/PublicPolicyPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { Lock } from 'lucide-react';

export function AppContent() {
  const [activePage, setActivePage] = useState('home');
  const { lang, t } = useLanguage();
  const isHindi = lang === 'hi';

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} />;
      case 'political':
        return <PoliticalConsultingPage setActivePage={setActivePage} />;
      case 'pr':
        return <StrategicPRPage setActivePage={setActivePage} />;
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
    <div className={`min-h-screen bg-surface-50 text-slate-800 flex flex-col justify-between selection:bg-brand-pink selection:text-white ${isHindi ? 'font-hi-body' : 'font-sans'} relative`}>
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Floating Quick Action Pill */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-2">
        <button
          onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center space-x-2 px-4 py-3 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 border-white"
          title="Direct Consultation Request"
        >
          <Lock className="w-4 h-4" />
          <span>{t.nav.schedule}</span>
        </button>
      </div>

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
