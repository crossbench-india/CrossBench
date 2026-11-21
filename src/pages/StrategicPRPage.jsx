import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Megaphone, 
  ShieldAlert, 
  Tv, 
  Share2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Radio, 
  Newspaper 
} from 'lucide-react';

export const StrategicPRPage = ({ setActivePage }) => {
  const { lang, t } = useLanguage();
  const isHindi = lang === 'hi';

  const icons = [Megaphone, ShieldAlert, Newspaper, Share2];

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-pink-soft border border-brand-pink/30 text-brand-pink text-xs font-bold uppercase tracking-wider">
          <Megaphone className="w-3.5 h-3.5" />
          <span>{t.prSuite.badge}</span>
        </div>
        <h1 className={`${isHindi ? 'font-hi-title' : 'font-display'} text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight`}>
          {t.prSuite.title}
        </h1>
        <p className="text-xs sm:text-sm text-brand-green font-bold tracking-wide">
          {t.prSuite.subtitle}
        </p>
        <p className={`${isHindi ? 'font-hi-body' : ''} text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto`}>
          {t.prSuite.desc}
        </p>
      </div>

      {/* Hero Composite Banner */}
      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md border border-slate-200 h-64 lg:h-72">
            <img 
              src="./images/pr_media.jpg" 
              alt="Press & Media Management" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <span className="px-3 py-1 rounded-md bg-brand-green-soft text-brand-green text-xs font-bold uppercase tracking-wider">
              {isHindi ? "360° नैरेटिव कमांड" : "360° NARRATIVE CONTROL"}
            </span>
            <h2 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-2xl sm:text-3xl font-extrabold text-slate-900`}>
              {isHindi 
                ? "जब धारणा ही वास्तविकता बन जाती है, तो पीआर ही शक्ति है" 
                : "When Perception Dictates Reality, Strategic PR is Power"}
            </h2>
            <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600 leading-relaxed`}>
              {isHindi
                ? "पारंपरिक पीआर एजेंसियां केवल प्रेस नोट बांटने तक सीमित हैं। CROSS BENCH एक रणनीतिक राजनीतिक और संस्थागत पीआर विंग के रूप में 24x7 समाचार चक्र को नियंत्रित करती है—विपक्षी आरोपों के त्वरित खंडन से लेकर प्राइम-टाइम टीवी डिबेट्स में आपके पक्ष को शीर्ष पर रखने तक।"
                : "Traditional PR agencies distribute commoditized press notes. CROSS BENCH operates as an elite political and institutional war room PR wing—commanding the 24x7 news cycle from 45-minute crisis rebuttal deployment to securing primetime television authority."}
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold">
              <span className="px-3 py-1.5 rounded-lg bg-brand-pink-soft text-brand-pink flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{isHindi ? "45-मिनट क्राइसिस रिस्पॉन्स" : "45-Min Crisis Rebuttal"}</span>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-brand-green-soft text-brand-green flex items-center space-x-1.5">
                <Tv className="w-3.5 h-3.5" />
                <span>{isHindi ? "प्राइम-टाइम टीवी ब्रीफिंग्स" : "Prime-Time TV Briefings"}</span>
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 flex items-center space-x-1.5">
                <Radio className="w-3.5 h-3.5" />
                <span>{isHindi ? "अखिल भारतीय प्रेस नेटवर्क" : "Pan-India Press Network"}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core PR Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.prSuite.modules.map((mod, idx) => {
          const Icon = icons[idx % icons.length];
          const isGreen = idx % 2 === 0;
          return (
            <div 
              key={idx}
              className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isGreen ? 'bg-brand-green-soft text-brand-green' : 'bg-brand-pink-soft text-brand-pink'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      PR MODULE 0{idx + 1}
                    </span>
                    <h3 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-lg sm:text-xl font-bold text-slate-900`}>
                      {mod.title}
                    </h3>
                  </div>
                </div>

                <p className={`text-xs font-semibold ${isGreen ? 'text-brand-green' : 'text-brand-pink'}`}>
                  {mod.tagline}
                </p>

                <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600 leading-relaxed`}>
                  {mod.desc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-50 border border-slate-200 space-y-2">
                <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                  {isHindi ? "प्रमुख आउटपुट्स" : "Key Deliverables"}
                </h4>
                <div className="space-y-1.5">
                  {mod.points.map((pt, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                        isGreen ? 'text-brand-green' : 'text-brand-pink'
                      }`} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-brand-pink to-brand-green text-white p-8 sm:p-10 rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-xl sm:text-2xl font-bold text-white mb-1`}>
            {isHindi ? "रणनीतिक पीआर व मीडिया प्रबंधन हेतु संपर्क करें" : "Engage CROSS BENCH as Your Strategic PR Agency"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-100">
            {isHindi 
              ? "नेताओं, राजनीतिक दलों और संस्थाओं के लिए पूर्णतः गोपनीय मीडिया व क्राइसिस कंसल्टेशन।"
              : "Confidential press choreography, spokesperson prep, and crisis retainers."}
          </p>
        </div>
        <button
          onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-md flex-shrink-0"
        >
          <span>{isHindi ? "पीआर परामर्श बुक करें" : "Book PR Consultation"}</span>
          <ArrowRight className="w-4 h-4 text-brand-pink" />
        </button>
      </div>
    </div>
  );
};
