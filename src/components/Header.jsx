import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Building2, 
  Menu, 
  X, 
  Globe, 
  ChevronRight, 
  ShieldCheck, 
  Vote, 
  FileText, 
  Users, 
  Info, 
  BookOpen, 
  Lock 
} from 'lucide-react';

export const Header = ({ activePage, setActivePage }) => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home, icon: Building2 },
    { id: 'political', label: t.nav.political, icon: Vote },
    { id: 'policy', label: t.nav.policy, icon: FileText },
    { id: 'solutions', label: t.nav.solutions, icon: Users },
    { id: 'about', label: t.nav.about, icon: Info },
    { id: 'insights', label: t.nav.insights, icon: BookOpen },
    { id: 'contact', label: t.nav.contact, icon: Lock }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-parliament-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3' 
            : 'bg-transparent border-b border-white/5 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-500/20 via-parliament-900 to-parliament-950 border border-gold-500/40 flex items-center justify-center text-gold-400 group-hover:border-gold-400 transition-colors shadow-lg">
                <span className="font-display font-bold text-lg tracking-wider text-gold-300">CB</span>
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-white">
                    {t.brand}
                  </span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                </div>
                <p className="text-[10px] tracking-widest text-slate-400 uppercase font-medium">
                  {t.brandSubtitle}
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activePage === item.id
                      ? 'text-gold-300 bg-white/5 shadow-inner border border-gold-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right Controls: Language Switcher & Consultation CTA */}
            <div className="hidden sm:flex items-center space-x-4">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700/60 hover:border-gold-500/50 text-xs font-semibold text-slate-200 transition-all shadow-sm group"
                title="Switch Language / भाषा बदलें"
              >
                <Globe className="w-3.5 h-3.5 text-gold-400 group-hover:rotate-45 transition-transform" />
                <span className={lang === 'en' ? 'text-gold-400 font-bold' : 'text-slate-400'}>EN</span>
                <span className="text-slate-600">|</span>
                <span className={lang === 'hi' ? 'text-gold-400 font-bold' : 'text-slate-400'}>हिंदी</span>
              </button>

              {/* Consultation Button */}
              <button
                onClick={() => handleNavClick('contact')}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-parliament-950 font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-lg hover:shadow-gold-500/20 flex items-center space-x-2 active:scale-95"
              >
                <ShieldCheck className="w-4 h-4 text-parliament-950" />
                <span>{t.nav.schedule}</span>
              </button>
            </div>

            {/* Mobile Menu Trigger & Mobile Language Toggle */}
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                onClick={toggleLanguage}
                className="px-2.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-bold text-gold-400"
              >
                {lang === 'en' ? 'हिंदी' : 'EN'}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-parliament-950/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-parliament-900 border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400 font-bold text-sm">
                    CB
                  </div>
                  <span className="font-display font-bold text-white text-base">
                    {t.brand}
                  </span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-md text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="py-6 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        activePage === item.id
                          ? 'bg-gold-500/15 text-gold-300 border border-gold-500/30'
                          : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-4 h-4 ${activePage === item.id ? 'text-gold-400' : 'text-slate-400'}`} />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-parliament-950 font-bold text-sm flex items-center justify-center space-x-2 shadow-lg"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{t.nav.schedule}</span>
              </button>

              <div className="text-center text-[11px] text-slate-400 pt-2">
                {t.hero.badge}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
