import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Lock, Building, Scale, ArrowUpRight } from 'lucide-react';

export const Footer = ({ setActivePage }) => {
  const { t } = useLanguage();

  const handleLinkClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-4">
            <img 
              src="./logo.jpg" 
              alt="CROSS BENCH" 
              className="h-11 w-auto object-contain cursor-pointer"
              onClick={() => handleLinkClick('home')}
            />

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-brand-green-soft border border-brand-green/20 text-xs font-semibold text-brand-green">
              <Scale className="w-3.5 h-3.5" />
              <span>100% Non-Partisan & Confidential Advisory</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <button 
                  onClick={() => handleLinkClick('home')} 
                  className="hover:text-brand-pink transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('about')} 
                  className="hover:text-brand-pink transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('solutions')} 
                  className="hover:text-brand-pink transition-colors"
                >
                  {t.nav.solutions}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('insights')} 
                  className="hover:text-brand-pink transition-colors"
                >
                  {t.nav.insights}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')} 
                  className="hover:text-brand-pink transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Practices */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <button 
                  onClick={() => handleLinkClick('political')} 
                  className="hover:text-brand-green transition-colors text-left font-semibold text-brand-green"
                >
                  • {t.nav.political}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('policy')} 
                  className="hover:text-brand-pink transition-colors text-left font-semibold text-brand-pink"
                >
                  • {t.nav.policy}
                </button>
              </li>
              <li className="text-xs text-slate-500 pt-1">
                24x7 Digital & Field War Rooms
              </li>
              <li className="text-xs text-slate-500">
                Welfare Scheme DBT Audits
              </li>
              <li className="text-xs text-slate-500">
                Booth Turnout Optimization (GOTV)
              </li>
            </ul>
          </div>

          {/* Institutional Standards */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              {t.footer.complianceTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {t.footer.complianceItems.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-green mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-slate-100">
              <a 
                href="#intake" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
                className="text-xs text-brand-pink hover:underline flex items-center space-x-1 font-bold"
              >
                <span>Senior Practice Inquiry</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <Lock className="w-3.5 h-3.5 text-brand-green" />
              <span>Air-Gapped Confidentiality</span>
            </span>
            <span className="flex items-center space-x-1">
              <Building className="w-3.5 h-3.5 text-slate-400" />
              <span>New Delhi Coordinating Hub</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
