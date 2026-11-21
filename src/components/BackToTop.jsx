import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 280);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 animate-fadeIn">
      <button
        onClick={scrollToTop}
        className="flex items-center space-x-1.5 px-3 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-brand-green/60 text-slate-700 hover:text-brand-green shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 group"
        title={isHindi ? "शीर्ष पर जाएं / Back to Top" : "Back to Top"}
        aria-label="Back to Top"
      >
        <ArrowUp className="w-4 h-4 text-brand-green transition-transform group-hover:-translate-y-0.5" />
        <span className="text-xs font-bold text-slate-600 group-hover:text-brand-green hidden sm:inline">
          {isHindi ? "ऊपर" : "Top"}
        </span>
      </button>
    </div>
  );
};
