import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { LoginModal } from './LoginModal';
import { 
  Menu, 
  X, 
  Globe, 
  ChevronRight, 
  Lock,
  LogIn,
  LogOut,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export const Header = ({ activePage, setActivePage }) => {
  const { lang, toggleLanguage, t } = useLanguage();
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false);
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

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-[13px] font-semibold transition-all duration-150 flex items-center space-x-1 ${
                    activePage === item.id
                      ? item.isAdmin 
                        ? 'text-white bg-brand-pink font-bold shadow-xs' 
                        : 'text-brand-green bg-brand-green-soft font-bold'
                      : item.isAdmin
                        ? 'text-brand-pink bg-brand-pink-soft font-bold hover:bg-brand-pink hover:text-white'
                        : 'text-slate-700 hover:text-brand-pink hover:bg-slate-50'
                  }`}
                >
                  {item.isAdmin && <ShieldCheck className="w-3.5 h-3.5" />}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Right Controls: Exactly ONE Language Switcher & Master Admin Login */}
            <div className="hidden sm:flex items-center space-x-3">
              {/* Single Clean Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 hover:border-brand-green/50 text-xs font-bold text-slate-700 transition-all shadow-sm"
                title="Switch Language / भाषा बदलें"
              >
                <Globe className="w-3.5 h-3.5 text-brand-green" />
                <span className={lang === 'en' ? 'text-brand-green font-extrabold' : 'text-slate-400'}>EN</span>
                <span className="text-slate-300">|</span>
                <span className={lang === 'hi' ? 'text-brand-pink font-extrabold' : 'text-slate-400'}>हिंदी</span>
              </button>

              {/* Master Admin Login / Session Control (Replaces Schedule Consultation) */}
              {!isAuthenticated ? (
                <button
                  onClick={() => setLoginModalOpen(true)}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 font-bold text-xs tracking-wide transition-all border border-slate-200 flex items-center space-x-1.5 active:scale-95 shadow-2xs"
                  title="Master Admin Login / एडमिन लॉगिन"
                >
                  <LogIn className="w-3.5 h-3.5 text-brand-green" />
                  <span>{isHindi ? "लॉगिन" : "Login"}</span>
                </button>
              ) : (
                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={() => handleNavClick('admin')}
                    className="px-3 py-1.5 rounded-xl bg-brand-pink text-white font-bold text-xs flex items-center space-x-1 shadow-sm hover:bg-brand-pink-hover transition-all"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{isHindi ? "डैशबोर्ड" : "Admin"}</span>
                  </button>
                  <button
                    onClick={logout}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                    title={isHindi ? "लॉगआउट करें" : "Sign Out"}
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center space-x-2 xl:hidden">
              <button
                onClick={toggleLanguage}
                className="px-2.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-brand-green"
              >
                {lang === 'en' ? 'हिंदी' : 'EN'}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-brand-green bg-slate-100 border border-slate-200"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-white border-l border-slate-200 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <img 
                  src="./logo.jpg" 
                  alt="CROSS BENCH" 
                  className="h-8 w-auto object-contain"
                />
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-slate-400 hover:text-slate-800"
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
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      activePage === item.id
                        ? item.isAdmin
                          ? 'bg-brand-pink text-white font-bold'
                          : 'bg-brand-green-soft text-brand-green font-bold'
                        : item.isAdmin
                          ? 'bg-brand-pink-soft text-brand-pink font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      {item.isAdmin && <ShieldCheck className="w-4 h-4" />}
                      <span>{item.label}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Actions: Admin Login / Dashboard */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              {!isAuthenticated ? (
                <button
                  onClick={() => { setMobileMenuOpen(false); setLoginModalOpen(true); }}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-sm"
                >
                  <LogIn className="w-4 h-4 text-brand-green" />
                  <span>{isHindi ? "मास्टर एडमिन लॉगिन" : "Master Admin Sign In"}</span>
                </button>
              ) : (
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-brand-pink-soft text-xs text-brand-pink font-bold flex items-center justify-between">
                    <span className="flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{user?.email}</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-wider bg-brand-pink text-white px-2 py-0.5 rounded">Admin</span>
                  </div>
                  <button
                    onClick={() => { logout(); setMobileMenuOpen(false); }}
                    className="w-full py-2.5 rounded-xl bg-red-50 text-red-700 font-bold text-xs flex items-center justify-center space-x-1.5"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>{isHindi ? "लॉगआउट करें" : "Sign Out"}</span>
                  </button>
                </div>
              )}

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
