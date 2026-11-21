import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Vote, 
  FileText, 
  Megaphone, 
  Scale, 
  BarChart3, 
  Building2, 
  Users2, 
  Landmark, 
  HeartHandshake, 
  CheckCircle2, 
  BookOpen, 
  Clock, 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  MapPin, 
  Sparkles,
  ChevronRight,
  X,
  Download
} from 'lucide-react';

export const HomePage = ({ setActivePage }) => {
  const { lang, t } = useLanguage();
  const [selectedCaseModal, setSelectedCaseModal] = useState(null);
  const isHindi = lang === 'hi';

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* 1. HERO SECTION - Clean, Light & Dynamic */}
      <section className="relative pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-surface-50 to-white bg-light-pattern overflow-hidden border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Hero Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-green-soft border border-brand-green/30 text-brand-green text-xs font-bold tracking-wider uppercase shadow-sm">
                <Scale className="w-3.5 h-3.5 text-brand-green" />
                <span>{t.hero.badge}</span>
              </div>

              {/* Main Headline with Brand Colors & Devanagari Title Font */}
              <h1 className={`${isHindi ? 'font-hi-title' : 'font-display'} text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]`}>
                <span className="text-brand-green block">{t.hero.titleLine1}</span>
                <span className="text-brand-pink block mt-1">{t.hero.titleLine2}</span>
              </h1>

              {/* Subtitle */}
              <p className={`${isHindi ? 'font-hi-body' : ''} text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl`}>
                {t.hero.subtitle}
              </p>

              {/* Action Buttons - 3 Core Engines */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => handleNavigate('political')}
                  className="px-5 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm hover:shadow-md flex items-center justify-center space-x-2 active:scale-95 group"
                >
                  <Vote className="w-4 h-4" />
                  <span>{t.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleNavigate('pr')}
                  className="px-5 py-3.5 rounded-xl bg-brand-pink hover:bg-brand-pink-hover text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm hover:shadow-md flex items-center justify-center space-x-2 active:scale-95 group"
                >
                  <Megaphone className="w-4 h-4" />
                  <span>{t.hero.secondaryCta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleNavigate('policy')}
                  className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-900 border border-slate-300 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm flex items-center justify-center space-x-2 active:scale-95"
                >
                  <FileText className="w-4 h-4 text-brand-green" />
                  <span>{t.hero.tertiaryCta}</span>
                </button>
              </div>

              {/* Guarantee */}
              <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                  <span>{t.hero.guarantee}</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center space-x-1.5">
                  <Lock className="w-3.5 h-3.5 text-brand-pink" />
                  <span>Air-Gapped Client Security</span>
                </span>
              </div>
            </div>

            {/* Right Hero Visual Cards (5 cols) */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Card with War Room Photo */}
                <div className="bg-white rounded-3xl p-3.5 shadow-xl border border-slate-200 overflow-hidden group">
                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden">
                    <img 
                      src="./images/warroom.jpg" 
                      alt="War Room Operations" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="px-2.5 py-1 rounded-md bg-brand-pink text-white text-[11px] font-bold tracking-widest uppercase mb-1.5 inline-block">
                        24x7 WAR ROOM & PR DESK
                      </span>
                      <h4 className={`${isHindi ? 'font-hi-heading' : 'font-display'} font-bold text-sm sm:text-base leading-snug`}>
                        {isHindi ? "रियल-टाइम परसेप्शन मैनेजमेंट एवं 45-मिनट क्राइसिस रिस्पॉन्स" : "Real-Time Perception Management & 45-Min Crisis Rebuttal"}
                      </h4>
                    </div>
                  </div>

                  {/* Micro Metric Banner */}
                  <div className="p-3 grid grid-cols-2 gap-2 text-center pt-3">
                    <div className="p-2.5 rounded-xl bg-brand-green-soft border border-brand-green/20">
                      <span className="block font-bold text-lg text-brand-green">160B+</span>
                      <span className="text-[11px] text-slate-600 font-semibold">Data Attributes Modeled</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-brand-pink-soft border border-brand-pink/20">
                      <span className="block font-bold text-lg text-brand-pink">100%</span>
                      <span className="text-[11px] text-slate-600 font-semibold">Non-Partisan Accuracy</span>
                    </div>
                  </div>
                </div>

                {/* Floating Decorative Chip */}
                <div className="absolute -bottom-5 -left-4 bg-white p-3.5 rounded-2xl shadow-lg border border-slate-200 hidden sm:flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-green text-white flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Electoral & PR Intelligence</span>
                    <span className="text-[11px] text-slate-500">Booth Turnout & News Dominance</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS & METRICS COUNTER (Jarvis Inspired) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.metrics.map((item, idx) => (
            <div 
              key={idx}
              className={`bg-white p-7 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-card-hover ${
                item.badgeColor === 'green' ? 'border-t-4 border-t-brand-green border-slate-200' : 'border-t-4 border-t-brand-pink border-slate-200'
              }`}
            >
              <div className={`text-4xl font-extrabold font-display mb-2 ${
                item.badgeColor === 'green' ? 'text-brand-green' : 'text-brand-pink'
              }`}>
                {item.value}
              </div>
              <h3 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-base font-bold text-slate-900 mb-1.5`}>
                {item.label}
              </h3>
              <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600 leading-relaxed`}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROVEN TRACK RECORD - 4 ALL-AT-ONCE INITIATIVES (Light Theme & Simultaneous 4-Column Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200">
          {/* Header */}
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="px-3.5 py-1 rounded-md bg-brand-pink-soft text-brand-pink border border-brand-pink/30 text-xs font-bold uppercase tracking-wider">
              {t.impactSection.badge}
            </span>
            <h2 className={`${isHindi ? 'font-hi-title' : 'font-display'} text-2xl sm:text-4xl font-extrabold text-slate-900`}>
              {t.impactSection.title}
            </h2>
            <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600`}>
              {t.impactSection.subtitle}
            </p>
          </div>

          {/* ALL 4 INITIATIVES DISPLAYED SIMULTANEOUSLY (No hidden tabs, zero scroll on web!) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.impactSection.initiatives.map((item, idx) => (
              <div 
                key={item.id}
                className="bg-surface-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-brand-pink/60 p-5 flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Photo Thumbnail */}
                  <div className="h-36 rounded-xl overflow-hidden relative border border-slate-200/80">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-brand-pink text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        {item.categoryTag}
                      </span>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/60 text-[10px] text-white font-bold">
                      {item.year}
                    </div>
                  </div>

                  {/* Title & Headline */}
                  <div>
                    <h3 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-base font-bold text-slate-900 group-hover:text-brand-pink transition-colors`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-brand-green font-semibold mt-0.5">
                      {item.headline}
                    </p>
                  </div>

                  {/* Summary Description */}
                  <p className={`${isHindi ? 'font-hi-body' : ''} text-xs text-slate-600 leading-relaxed line-clamp-3`}>
                    {item.desc}
                  </p>

                  {/* 2 Key Metric Chips */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {item.stats.map((st, i) => (
                      <div key={i} className="p-2 rounded-lg bg-white border border-slate-200 text-center shadow-xs">
                        <span className="block font-bold text-sm text-brand-pink">{st.val}</span>
                        <span className="text-[10px] text-slate-500 font-medium block truncate">{st.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study Modal Trigger */}
                <div className="pt-4 mt-4 border-t border-slate-200">
                  <button
                    onClick={() => setSelectedCaseModal(item)}
                    className="w-full py-2.5 rounded-lg bg-brand-green hover:bg-brand-green-light text-white text-xs font-bold transition-all flex items-center justify-center space-x-1.5 shadow-sm"
                  >
                    <span>{isHindi ? "विस्तृत रिपोर्ट देखें" : "View Full Case Report"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRIPLE CORE PRACTICES (POLITICAL, PR, PUBLIC POLICY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            {t.dualEngine.tag}
          </span>
          <h2 className={`${isHindi ? 'font-hi-title' : 'font-display'} text-2xl sm:text-4xl font-extrabold text-slate-900`}>
            {t.dualEngine.title}
          </h2>
          <p className={`${isHindi ? 'font-hi-body' : ''} text-sm sm:text-base text-slate-600`}>
            {t.dualEngine.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 1: Political Strategy */}
          <div className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-brand-green-soft text-brand-green text-xs font-bold tracking-widest uppercase">
                  {t.dualEngine.engine1.tag}
                </span>
                <div className="w-10 h-10 rounded-xl bg-brand-green-soft text-brand-green flex items-center justify-center">
                  <Vote className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-xl font-bold text-slate-900 mb-1`}>
                  {t.dualEngine.engine1.title}
                </h3>
                <p className="text-xs text-brand-green font-bold">
                  {t.dualEngine.engine1.subtitle}
                </p>
              </div>

              <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600 leading-relaxed`}>
                {t.dualEngine.engine1.desc}
              </p>

              <div className="space-y-2 pt-1">
                {t.dualEngine.engine1.features.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => handleNavigate('political')}
                className="w-full py-2.5 rounded-xl bg-brand-green-soft hover:bg-brand-green text-brand-green hover:text-white font-bold text-xs transition-all flex items-center justify-center space-x-2"
              >
                <span>{t.dualEngine.engine1.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillar 2: Strategic PR & Media Communications */}
          <div className="bg-white p-7 sm:p-9 rounded-3xl border-2 border-brand-pink/30 shadow-md hover:shadow-card-hover transition-all flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-brand-pink text-white text-[10px] font-bold rounded-bl-xl uppercase tracking-wider">
              PR AGENCY WING
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-brand-pink-soft text-brand-pink text-xs font-bold tracking-widest uppercase">
                  {t.dualEngine.engine2.tag}
                </span>
                <div className="w-10 h-10 rounded-xl bg-brand-pink-soft text-brand-pink flex items-center justify-center">
                  <Megaphone className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-xl font-bold text-slate-900 mb-1`}>
                  {t.dualEngine.engine2.title}
                </h3>
                <p className="text-xs text-brand-pink font-bold">
                  {t.dualEngine.engine2.subtitle}
                </p>
              </div>

              <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600 leading-relaxed`}>
                {t.dualEngine.engine2.desc}
              </p>

              <div className="space-y-2 pt-1">
                {t.dualEngine.engine2.features.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-pink flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => handleNavigate('pr')}
                className="w-full py-2.5 rounded-xl bg-brand-pink hover:bg-brand-pink-hover text-white font-bold text-xs transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>{t.dualEngine.engine2.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillar 3: Public Policy Advisory */}
          <div className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold tracking-widest uppercase">
                  {t.dualEngine.engine3.tag}
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-xl font-bold text-slate-900 mb-1`}>
                  {t.dualEngine.engine3.title}
                </h3>
                <p className="text-xs text-brand-green font-bold">
                  {t.dualEngine.engine3.subtitle}
                </p>
              </div>

              <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600 leading-relaxed`}>
                {t.dualEngine.engine3.desc}
              </p>

              <div className="space-y-2 pt-1">
                {t.dualEngine.engine3.features.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => handleNavigate('policy')}
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-all flex items-center justify-center space-x-2"
              >
                <span>{t.dualEngine.engine3.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE CROSS BENCH STORY SECTION (I-PAC Team / Story Inspired) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-14 rounded-3xl border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <span className="px-3.5 py-1 rounded-md bg-brand-green-soft text-brand-green text-xs font-bold uppercase tracking-wider">
                {t.story.badge}
              </span>
              <h2 className={`${isHindi ? 'font-hi-title' : 'font-display'} text-2xl sm:text-4xl font-extrabold text-slate-900`}>
                {t.story.title}
              </h2>
              <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600 leading-relaxed`}>
                {t.story.desc1}
              </p>
              <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600 leading-relaxed`}>
                {t.story.desc2}
              </p>
              <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600 leading-relaxed`}>
                {t.story.desc3}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleNavigate('about')}
                  className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-sm"
                >
                  <span>{t.story.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Team Photo (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                <img 
                  src={t.story.img} 
                  alt="CROSS BENCH Strategy Team" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
                  <span className="text-xs font-bold text-slate-800 block">Senior Practice Faculty, Media Heads & Data Pollsters</span>
                  <span className="text-[11px] text-slate-500">New Delhi Coordinating Hub</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SOLUTIONS BY CLIENT VERTICAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            {t.solutions.badge}
          </span>
          <h2 className={`${isHindi ? 'font-hi-title' : 'font-display'} text-2xl sm:text-4xl font-extrabold text-slate-900`}>
            {t.solutions.title}
          </h2>
          <p className={`${isHindi ? 'font-hi-body' : ''} text-sm sm:text-base text-slate-600`}>
            {t.solutions.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.solutions.categories.map((cat, idx) => {
            const icons = [Building2, Landmark, Users2, HeartHandshake];
            const Icon = icons[idx % icons.length];
            const isGreen = idx % 2 === 0;
            return (
              <div
                key={cat.id}
                onClick={() => handleNavigate('solutions')}
                className="bg-white p-7 rounded-2xl border border-slate-200 hover:border-brand-pink/50 cursor-pointer transition-all hover:-translate-y-1 shadow-sm hover:shadow-card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                    isGreen ? 'bg-brand-green-soft text-brand-green' : 'bg-brand-pink-soft text-brand-pink'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`${isHindi ? 'font-hi-heading' : 'font-display'} font-bold text-lg text-slate-900 mb-1 group-hover:text-brand-pink transition-colors`}>
                    {cat.name}
                  </h3>
                  <p className="text-xs text-brand-green font-semibold mb-3">
                    {cat.tagline}
                  </p>
                  <p className={`${isHindi ? 'font-hi-body' : ''} text-xs text-slate-600 leading-relaxed line-clamp-3`}>
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-brand-pink font-bold">
                  <span>View Solutions</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. INSTITUTIONAL NEUTRALITY CHARTER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-brand-green/30 shadow-md relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-green-soft text-brand-green text-xs font-bold tracking-widest uppercase">
              {t.charter.badge}
            </span>

            <h2 className={`${isHindi ? 'font-hi-title' : 'font-display'} text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900`}>
              {t.charter.title}
            </h2>

            <blockquote className={`${isHindi ? 'font-hi-quote' : 'font-display italic'} text-sm sm:text-base text-slate-700 border-l-2 sm:border-l-0 sm:border-y border-brand-green/30 py-4 px-4 sm:px-8 bg-surface-50 rounded-lg`}>
              "{t.charter.quote}"
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3 text-left">
              {t.charter.points.map((p, idx) => (
                <div key={idx} className="space-y-1.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className={`${isHindi ? 'font-hi-heading' : ''} text-xs sm:text-sm font-bold text-brand-green flex items-center space-x-2`}>
                    <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span>{p.title}</span>
                  </h4>
                  <p className={`${isHindi ? 'font-hi-body' : ''} text-xs text-slate-600 leading-relaxed`}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => handleNavigate('about')}
                className="px-6 py-2.5 rounded-xl bg-brand-green hover:bg-brand-green-light text-white text-xs font-bold tracking-wider transition-colors shadow-sm"
              >
                {isHindi ? "संस्थागत चार्टर एवं रूपरेखा पढ़ें" : "Read Full Institutional Charter & Framework"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PERSPECTIVES & INSIGHTS TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="px-3 py-1 rounded-md bg-brand-pink-soft text-brand-pink text-xs font-bold uppercase tracking-wider mb-2 inline-block">
              {t.insights.badge}
            </span>
            <h2 className={`${isHindi ? 'font-hi-title' : 'font-display'} text-2xl sm:text-4xl font-extrabold text-slate-900`}>
              {t.insights.title}
            </h2>
            <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600 mt-1 max-w-xl`}>
              {t.insights.subtitle}
            </p>
          </div>

          <button
            onClick={() => handleNavigate('insights')}
            className="text-xs sm:text-sm text-brand-pink hover:text-brand-pink-hover font-bold flex items-center space-x-1.5 self-start sm:self-auto"
          >
            <span>{isHindi ? "सभी शोध पत्र देखें" : "Browse All Publications"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.insights.articles.map((art, idx) => (
            <div 
              key={idx}
              onClick={() => handleNavigate('insights')}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 hover:border-brand-pink/50 cursor-pointer transition-all hover:-translate-y-1 shadow-sm hover:shadow-card-hover flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span className="text-brand-green font-bold tracking-wider uppercase">{art.tag}</span>
                  <span>{art.date}</span>
                </div>
                <h3 className={`${isHindi ? 'font-hi-heading' : 'font-display'} font-bold text-base sm:text-lg text-slate-900 group-hover:text-brand-pink transition-colors leading-snug`}>
                  {art.title}
                </h3>
                <p className={`${isHindi ? 'font-hi-body' : ''} text-xs text-slate-600 leading-relaxed`}>
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{art.readTime}</span>
                </span>
                <span className="text-brand-pink font-bold group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1">
                  <span>{isHindi ? "ब्रीफ पढ़ें" : "Read Brief"}</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CONFIDENTIAL CONSULTATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-green to-slate-900 text-white p-8 sm:p-14 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-5">
            <span className="px-3 py-1 rounded-md bg-brand-pink text-white text-xs font-bold uppercase tracking-wider">
              {t.contact.badge}
            </span>
            <h2 className={`${isHindi ? 'font-hi-title' : 'font-display'} text-2xl sm:text-4xl font-extrabold text-white leading-tight`}>
              {isHindi ? "पूर्णतः गोपनीय रणनीतिक परामर्श प्रारंभ करें" : "Initiate a Strictly Confidential Strategic Consultation"}
            </h2>
            <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-200 leading-relaxed`}>
              {isHindi 
                ? "चाहे आप आगामी विधानसभा चुनाव की तैयारी कर रहे हों, उच्च-स्तरीय मीडिया व पीआर कैंपेन का संचालन करना चाहते हों, या कल्याणकारी योजनाओं के स्वतंत्र थर्ड-पार्टी मूल्यांकन की आवश्यकता हो—हमारे वरिष्ठ प्रैक्टिस डायरेक्टर्स गैर-प्रकटीकरण अनुबंध (NDA) के तहत उपलब्ध हैं।"
                : "Whether you are preparing for an impending legislative election cycle, orchestrating a high-stakes media campaign, or requiring an independent third-party audit of state welfare schemes—our senior practice directors are accessible under non-disclosure confidentiality."}
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleNavigate('contact')}
                className="px-7 py-3.5 rounded-xl bg-brand-pink hover:bg-brand-pink-hover text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center space-x-2 active:scale-95"
              >
                <Lock className="w-4 h-4" />
                <span>{t.nav.schedule}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY DETAIL MODAL */}
      {selectedCaseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-5">
            <button
              onClick={() => setSelectedCaseModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-brand-pink tracking-widest uppercase">
                {selectedCaseModal.categoryTag} • {selectedCaseModal.year}
              </span>
              <h2 className={`${isHindi ? 'font-hi-title' : 'font-display'} text-2xl font-bold text-slate-900 mt-1`}>
                {selectedCaseModal.title}
              </h2>
              <p className="text-xs text-brand-green font-bold mt-0.5">
                {selectedCaseModal.location}
              </p>
            </div>

            <div className="rounded-xl overflow-hidden h-48 border border-slate-200">
              <img 
                src={selectedCaseModal.img} 
                alt={selectedCaseModal.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-700 leading-relaxed`}>
              {selectedCaseModal.desc}
            </p>

            {/* Metrics Chips */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-surface-50 border border-slate-200">
              {selectedCaseModal.stats.map((st, i) => (
                <div key={i} className="text-center p-2 rounded-lg bg-white border border-slate-200 shadow-sm">
                  <span className="block font-bold text-lg text-brand-pink">{st.val}</span>
                  <span className="text-[11px] text-slate-600 font-medium">{st.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setSelectedCaseModal(null);
                  handleNavigate('contact');
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-green text-white font-bold text-xs"
              >
                {isHindi ? "संबंधित प्रैक्टिस से संपर्क करें" : "Consult on Similar Scope"}
              </button>
              <button
                onClick={() => setSelectedCaseModal(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold"
              >
                {isHindi ? "बंद करें" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
