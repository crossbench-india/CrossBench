import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useContent } from '../context/ContentContext';
import { Scale, ArrowRight, Mail, Facebook, Instagram, Youtube, Linkedin, ShieldCheck } from 'lucide-react';
import { PolicyModal } from './PolicyModal';

export const Footer = ({ setActivePage }) => {
  const { lang, t } = useLanguage();
  const { socialLinks } = useContent();
  const [activePolicyModal, setActivePolicyModal] = useState(null);
  const isHindi = lang === 'hi';

  const handleLinkClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openPolicy = (type) => {
    setActivePolicyModal(type);
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-14 pb-10 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* 1. Logo & Brand Philosophy (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <img 
              src="./logo.jpg" 
              alt="CROSS BENCH" 
              className="h-10 sm:h-11 w-auto object-contain cursor-pointer"
              onClick={() => handleLinkClick('home')}
            />

            <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md`}>
              {t.footer.desc}
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-brand-green-soft border border-brand-green/20 text-xs font-semibold text-brand-green">
              <Scale className="w-3.5 h-3.5" />
              <span>100% Non-Partisan • Strategic PR • Public Policy</span>
            </div>
          </div>

          {/* 2. Core Practices (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <button 
                  onClick={() => handleLinkClick('political')} 
                  className="hover:text-brand-green transition-colors text-left font-semibold text-brand-green flex items-center space-x-1.5"
                >
                  <span>• {t.nav.political}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('pr')} 
                  className="hover:text-brand-pink transition-colors text-left font-semibold text-brand-pink flex items-center space-x-1.5"
                >
                  <span>• {t.nav.pr}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLinkClick('policy')} 
                  className="hover:text-slate-900 transition-colors text-left font-semibold text-slate-800 flex items-center space-x-1.5"
                >
                  <span>• {t.nav.policy}</span>
                </button>
              </li>
              <li className="text-xs text-slate-500 pt-1">
                24x7 War Room & Real-Time PR Defense
              </li>
              <li className="text-xs text-slate-500">
                Welfare Scheme DBT Impact Audits
              </li>
              <li className="text-xs text-slate-500">
                Booth Turnout Engineering (GOTV)
              </li>
            </ul>
          </div>

          {/* 3. Follow Us & Direct Intake (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                {isHindi ? "सोशल मीडिया" : "Follow Us"}
              </h4>
              <div className="flex items-center space-x-2.5">
                {/* Facebook */}
                <a 
                  href={socialLinks?.facebook || "https://facebook.com/crossbench.india"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-brand-pink hover:text-white border border-slate-200 flex items-center justify-center text-slate-600 transition-all shadow-2xs hover:scale-105"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                {/* Instagram */}
                <a 
                  href={socialLinks?.instagram || "https://instagram.com/crossbench.in"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-brand-pink hover:text-white border border-slate-200 flex items-center justify-center text-slate-600 transition-all shadow-2xs hover:scale-105"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* X (formerly Twitter) */}
                <a 
                  href={socialLinks?.x || "https://x.com/crossbench_in"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-slate-900 hover:text-white border border-slate-200 flex items-center justify-center text-slate-600 transition-all shadow-2xs hover:scale-105"
                  title="X (formerly Twitter)"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href={socialLinks?.youtube || "https://youtube.com/@crossbench"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-red-600 hover:text-white border border-slate-200 flex items-center justify-center text-slate-600 transition-all shadow-2xs hover:scale-105"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a 
                  href={socialLinks?.linkedin || "https://linkedin.com/company/crossbench"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-50 hover:bg-brand-green hover:text-white border border-slate-200 flex items-center justify-center text-slate-600 transition-all shadow-2xs hover:scale-105"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-2">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                {isHindi ? "आधिकारिक संपर्क डेस्क" : "Official Communications"}
              </h5>
              <a 
                href="mailto:contact@crossbench.in" 
                className="flex items-center space-x-2 text-xs font-mono font-semibold text-brand-pink hover:underline"
              >
                <Mail className="w-3.5 h-3.5 text-brand-pink" />
                <span>contact@crossbench.in</span>
              </a>
              <button
                onClick={() => handleLinkClick('contact')}
                className="mt-2 text-xs font-bold text-brand-green hover:underline flex items-center space-x-1"
              >
                <span>{isHindi ? "परामर्श इनटेक डेस्क" : "Confidential Intake Desk"}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Clean copyright on Left & Basic Policies on Right (Single Webmail removed as requested) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>{t.footer.copyright}</p>
          
          {/* Institutional Policies Link Bar */}
          <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-slate-500 font-medium text-[11px] sm:text-xs">
            <button
              onClick={() => openPolicy('privacy')}
              className="hover:text-brand-pink transition-colors hover:underline"
            >
              {isHindi ? "गोपनीयता नीति" : "Privacy Policy"}
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={() => openPolicy('terms')}
              className="hover:text-brand-pink transition-colors hover:underline"
            >
              {isHindi ? "अनुबंध शर्तें" : "Terms of Engagement"}
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={() => openPolicy('integrity')}
              className="hover:text-brand-pink transition-colors hover:underline"
            >
              {isHindi ? "अखंडता कोड" : "Integrity Code"}
            </button>
          </div>
        </div>
      </div>

      {/* Policy Details Modal */}
      <PolicyModal 
        isOpen={Boolean(activePolicyModal)} 
        onClose={() => setActivePolicyModal(null)} 
        policyType={activePolicyModal || 'privacy'} 
      />
    </footer>
  );
};
