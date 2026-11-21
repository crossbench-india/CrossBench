import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { LoginModal } from './LoginModal';
import { 
  Menu, 
  X, 
  Globe, 
  ChevronRight, 
  LogIn,
  LogOut,
  ShieldCheck
} from 'lucide-react';

export const Header = ({ activePage, setActivePage }) => {
  const { lang, toggleLanguage, t } = useLanguage();
  const { isAuthenticated, user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHindi = lang === 'hi';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'political', label: t.nav.political },
    { id: 'pr', label: t.nav.pr },
    { id: 'policy', label: t.nav.policy },
    { id: 'solutions', label: t.nav.solutions },
    { id: 'about', label: t.nav.about },
    { id: 'insights', label: t.nav.insights },
    { id: 'contact', label: t.nav.contact }
  ];

  if (isAuthenticated) {
    navItems.push({
      id: 'admin',
      label: isHindi ? 'एडमिन डैशबोर्ड' : 'Admin Dashboard',
      isAdmin: true
    });
  }

  const handleNavClick = (id) => {
    setActivePage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-2.5' 
            : 'bg-white border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Image */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center cursor-pointer group flex-shrink-0"
            >
              <img 
                src="./logo.jpg" 
                alt="CROSS BENCH" 
                className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </div>

            {/* Clean, spacious center header — No overcrowded full-screen links */}

            {/* Right Controls: Unified Menu Trigger Button with Icon + Text */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center space-x-2 px-3.5 sm:px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-brand-green/50 text-slate-800 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-xs active:scale-95 group"
                aria-label="Toggle Navigation Menu"
              >
                <Menu className="w-4 h-4 text-brand-green transition-transform group-hover:scale-110" />
                <span>{isHindi ? "मेन्यू" : "Menu"}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Flyout Drawer (Accessible on Desktop, Tablet, and Mobile) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 animate-fadeIn">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMenuOpen(false)}
          />

          {/* Slide-out Menu Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm sm:max-w-md bg-white border-l border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <img 
                  src="./logo.jpg" 
                  alt="CROSS BENCH" 
                  className="h-8 sm:h-9 w-auto object-contain"
                />
                <button 
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="py-6 space-y-1.5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      activePage === item.id
                        ? item.isAdmin
                          ? 'bg-brand-pink text-white font-bold shadow-xs'
                          : 'bg-brand-green-soft text-brand-green font-bold'
                        : item.isAdmin
                          ? 'bg-brand-pink-soft text-brand-pink font-bold hover:bg-brand-pink hover:text-white'
                          : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      {item.isAdmin && <ShieldCheck className="w-4 h-4" />}
                      <span className={isHindi ? 'font-hi-heading' : ''}>{item.label}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

            {/* Drawer Bottom: Language switch at the VERY BOTTOM & Simple Login Icon */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                {/* Language Switcher at the bottom of menu */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 hover:border-brand-green/50 transition-colors shadow-2xs"
                  title="Switch Language / भाषा बदलें"
                >
                  <Globe className="w-4 h-4 text-brand-green" />
                  <span className={lang === 'en' ? 'text-brand-green font-extrabold' : 'text-slate-400'}>English</span>
                  <span className="text-slate-300">|</span>
                  <span className={lang === 'hi' ? 'text-brand-pink font-extrabold' : 'text-slate-400'}>हिंदी</span>
                </button>

                {/* Simple Login Icon Button */}
                {!isAuthenticated ? (
                  <button
                    onClick={() => { setMenuOpen(false); setLoginModalOpen(true); }}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shadow-2xs"
                    title={isHindi ? "लॉगिन करें" : "Sign In"}
                    aria-label="Sign In"
                  >
                    <LogIn className="w-4 h-4 text-brand-green" />
                  </button>
                ) : (
                  <div className="flex items-center space-x-1.5">
                    <button
                      onClick={() => handleNavClick('admin')}
                      className="p-2 rounded-xl bg-brand-pink-soft text-brand-pink font-bold text-xs flex items-center space-x-1"
                      title="Admin Dashboard"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Admin</span>
                    </button>
                    <button
                      onClick={() => { logout(); setMenuOpen(false); }}
                      className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50"
                      title="Sign Out"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              <p className="text-center text-[11px] text-slate-400 font-medium">
                {t.hero.guarantee}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal 
        isOpen={loginModalOpen} 
        onClose={() => setLoginModalOpen(false)}
        onLoginSuccess={() => handleNavClick('admin')}
      />
    </>
  );
};
