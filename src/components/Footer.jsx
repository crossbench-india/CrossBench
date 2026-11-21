import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Shield, Lock, Scale, Building, ArrowUpRight } from 'lucide-react';

export const Footer = ({ setActivePage }) => {
  const { t } = useLanguage();

  const handleLinkClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-parliament-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand & Neutrality Col (span 2 on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 font-bold font-display">
                CB
              </div>
              <div>
                <span className="font-display font-bold text-xl tracking-wider text-white">
                  {t.brand}
                </span>
                <span className="block text-[10px] tracking-widest text-gold-400 font-semibold uppercase">
                  {t.brandSubtitle}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <Scale className="w-3.5 h-3.5 text-gold-400" />
              <span>100% Non-Partisan & Confidential Advisory</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200 mb-4">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleLinkClick('home')} 
                  className="hover:text-gold-300 transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('about')} 
                  className="hover:text-gold-300 transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('solutions')} 
                  className="hover:text-gold-300 transition-colors"
                >
                  {t.nav.solutions}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('insights')} 
                  className="hover:text-gold-300 transition-colors"
                >
                  {t.nav.insights}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('contact')} 
                  className="hover:text-gold-300 transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Practices */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200 mb-4">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handleLinkClick('political')} 
                  className="hover:text-gold-300 transition-colors text-left"
                >
                  {t.nav.political}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('policy')} 
                  className="hover:text-gold-300 transition-colors text-left"
                >
                  {t.nav.policy}
                </button>
              </li>
              <li className="text-xs text-slate-400 pt-1">
                • 24x7 War Room Operations
              </li>
              <li className="text-xs text-slate-400">
                • Scheme Impact Evaluations
              </li>
              <li className="text-xs text-slate-400">
                • Candidate Persona Engineering
              </li>
            </ul>
          </div>

          {/* Institutional Standards */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-200 mb-4">
              {t.footer.complianceTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {t.footer.complianceItems.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-1.5">
                  <Shield className="w-3.5 h-3.5 text-gold-500/70 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 pt-4 border-t border-slate-800">
              <a 
                href="#careers" 
                onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
                className="text-xs text-gold-400 hover:text-gold-300 flex items-center space-x-1 font-medium"
              >
                <span>Senior Advisory Emplanelment</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <Lock className="w-3.5 h-3.5 text-gold-500/70" />
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
