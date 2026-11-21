import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ContentProvider } from './context/ContentContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { PageTransitionOverlay } from './components/PageTransitionOverlay';
import { HomePage } from './pages/HomePage';
import { PoliticalConsultingPage } from './pages/PoliticalConsultingPage';
import { StrategicPRPage } from './pages/StrategicPRPage';
import { PublicPolicyPage } from './pages/PublicPolicyPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { Lock, ShieldCheck, Edit3 } from 'lucide-react';

export function AppContent() {
  const [activePage, setActivePage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionMsg, setTransitionMsg] = useState('');
  const { lang, t } = useLanguage();
  const { isAuthenticated, user, logout } = useAuth();
  const isHindi = lang === 'hi';

  // Initial mount transition
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Smooth page change with blurred emblem overlay
  const handlePageChange = (pageId, msg) => {
    if (pageId === activePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setIsTransitioning(true);
    setTransitionMsg(msg || (isHindi ? "पृष्ठ लोड हो रहा है..." : "Loading page..."));
    setTimeout(() => {
      setActivePage(pageId);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
    }, 250);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={handlePageChange} />;
      case 'political':
        return <PoliticalConsultingPage setActivePage={handlePageChange} />;
      case 'pr':
        return <StrategicPRPage setActivePage={handlePageChange} />;
      case 'policy':
        return <PublicPolicyPage setActivePage={handlePageChange} />;
      case 'solutions':
        return <SolutionsPage setActivePage={handlePageChange} />;
      case 'about':
        return <AboutPage setActivePage={handlePageChange} />;
      case 'insights':
        return <InsightsPage setActivePage={handlePageChange} />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminDashboardPage setActivePage={handlePageChange} />;
      default:
        return <HomePage setActivePage={handlePageChange} />;
    }
  };

  return (
    <div className={`min-h-screen bg-surface-50 text-slate-800 flex flex-col justify-between selection:bg-brand-pink selection:text-white ${isHindi ? 'font-hi-body' : 'font-sans'} relative`}>
      {/* Blurred Emblem Transition Overlay on Refresh & Nav */}
      <PageTransitionOverlay isVisible={isTransitioning} message={transitionMsg} />

      <Header activePage={activePage} setActivePage={handlePageChange} />
      
      {/* Master Admin Live Session Bar if logged in & browsing public pages */}
      {isAuthenticated && activePage !== 'admin' && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-brand-pink to-brand-green text-white px-4 py-1.5 shadow-md flex items-center justify-between text-xs font-bold">
          <div className="flex items-center space-x-2 max-w-7xl mx-auto w-full justify-between">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isHindi ? "मास्टर एडमिन मोड सक्रिय:" : "Master Admin Mode:"}</span>
              <span className="font-mono bg-white/20 px-2 py-0.5 rounded text-[11px]">{user?.email}</span>
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange('admin')}
                className="px-2.5 py-0.5 rounded-md bg-white text-slate-900 hover:bg-slate-100 font-bold text-[11px] flex items-center space-x-1 shadow-2xs"
              >
                <Edit3 className="w-3 h-3 text-brand-pink" />
                <span>{isHindi ? "डैशबोर्ड खोलें" : "Open Dashboard"}</span>
              </button>
              <button
                onClick={logout}
                className="px-2 py-0.5 rounded-md bg-black/30 hover:bg-black/50 text-white text-[11px]"
              >
                {isHindi ? "लॉगआउट" : "Logout"}
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Floating Quick Action Pill */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-2">
        <button
          onClick={() => handlePageChange('contact')}
          className="flex items-center space-x-2 px-4 py-3 rounded-full bg-brand-pink hover:bg-brand-pink-hover text-white font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 border-white"
          title="Direct Consultation Request"
        >
          <Lock className="w-4 h-4" />
          <span>{t.nav.schedule}</span>
        </button>
      </div>

      {/* Floating Back-To-Top Button on Bottom-Left */}
      <BackToTop />

      <Footer setActivePage={handlePageChange} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <ContentProvider>
          <AppContent />
        </ContentProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
