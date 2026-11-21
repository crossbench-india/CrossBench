import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Vote, 
  FileText, 
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
  ExternalLink
} from 'lucide-react';

export const HomePage = ({ setActivePage }) => {
  const { lang, t } = useLanguage();
  const [activeImpactTab, setActiveImpactTab] = useState(0);
  const isHindi = lang === 'hi';

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentImpact = t.impactSection.tabs[activeImpactTab];

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* 1. HERO SECTION - Clean, Light & Dynamic */}
      <section className="relative pt-28 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-surface-50 to-white bg-light-pattern overflow-hidden border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-green-soft border border-brand-green/30 text-brand-green text-xs font-bold tracking-wider uppercase shadow-sm">
                <Scale className="w-3.5 h-3.5 text-brand-green" />
                <span>{t.hero.badge}</span>
              </div>

              {/* Main Headline with Brand Colors */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                <span className="text-brand-green block">{t.hero.titleLine1}</span>
                <span className="text-brand-pink block mt-1">{t.hero.titleLine2}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                {t.hero.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => handleNavigate('political')}
                  className="px-6 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-light text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 active:scale-95 group"
                >
                  <Vote className="w-4 h-4" />
                  <span>{t.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleNavigate('policy')}
                  className="px-6 py-3.5 rounded-xl bg-brand-pink hover:bg-brand-pink-hover text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 active:scale-95 group"
                >
                  <FileText className="w-4 h-4" />
                  <span>{t.hero.secondaryCta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Guarantee */}
              <div className="pt-4 flex items-center space-x-6 text-xs text-slate-500 font-medium">
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-brand-green" />
                  <span>{t.hero.guarantee}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1.5">
                  <Lock className="w-3.5 h-3.5 text-brand-pink" />
                  <span>Air-Gapped Client Security</span>
                </span>
              </div>
            </div>

            {/* Right Hero Visual Cards (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Card with War Room Photo */}
                <div className="bg-white rounded-3xl p-3 shadow-xl border border-slate-200 overflow-hidden group">
                  <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden">
                    <img 
                      src="./images/warroom.jpg" 
                      alt="War Room Operations" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="px-2.5 py-1 rounded-md bg-brand-pink text-white text-[11px] font-bold tracking-widest uppercase mb-1 inline-block">
                        24x7 WAR ROOM
                      </span>
                      <h4 className="font-bold text-sm sm:text-base leading-snug">
                        Real-Time Perception Management & Counter-Narrative
                      </h4>
                    </div>
                  </div>

                  {/* Micro Metric Banner */}
                  <div className="p-3 grid grid-cols-2 gap-2 text-center pt-3">
                    <div className="p-2.5 rounded-xl bg-brand-green-soft border border-brand-green/20">
                      <span className="block font-bold text-lg text-brand-green">160B+</span>
                      <span className="text-[11px] text-slate-600 font-semibold">Data Points Analyzed</span>
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
                    <span className="text-xs font-bold text-slate-900 block">Electoral Intelligence</span>
                    <span className="text-[11px] text-slate-500">Booth Turnout Analytics</span>
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
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DUAL ENGINE OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            {t.dualEngine.tag}
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900">
            {t.dualEngine.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {t.dualEngine.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Engine 1: Political Strategy */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-brand-green-soft text-brand-green text-xs font-bold tracking-widest uppercase">
                  {t.dualEngine.engine1.tag}
                </span>
                <div className="w-10 h-10 rounded-xl bg-brand-green-soft text-brand-green flex items-center justify-center">
                  <Vote className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">
                  {t.dualEngine.engine1.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-green font-semibold">
                  {t.dualEngine.engine1.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.dualEngine.engine1.desc}
              </p>

              <div className="space-y-2.5 pt-1">
                {t.dualEngine.engine1.features.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100">
              <button
                onClick={() => handleNavigate('political')}
                className="w-full py-3 rounded-xl bg-brand-green-soft hover:bg-brand-green text-brand-green hover:text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2"
              >
                <span>{t.dualEngine.engine1.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Engine 2: Public Policy Advisory */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-brand-pink-soft text-brand-pink text-xs font-bold tracking-widest uppercase">
                  {t.dualEngine.engine2.tag}
                </span>
                <div className="w-10 h-10 rounded-xl bg-brand-pink-soft text-brand-pink flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">
                  {t.dualEngine.engine2.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-pink font-semibold">
                  {t.dualEngine.engine2.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.dualEngine.engine2.desc}
              </p>

              <div className="space-y-2.5 pt-1">
                {t.dualEngine.engine2.features.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-pink flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100">
              <button
                onClick={() => handleNavigate('policy')}
                className="w-full py-3 rounded-xl bg-brand-pink-soft hover:bg-brand-pink text-brand-pink hover:text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2"
              >
                <span>{t.dualEngine.engine2.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. I-PAC INSPIRED IMPACT SLIDER / TABS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Header */}
          <div className="max-w-3xl space-y-3 mb-10">
            <span className="px-3 py-1 rounded-md bg-brand-pink text-white text-xs font-bold uppercase tracking-wider">
              {t.impactSection.badge}
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
              {t.impactSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {t.impactSection.subtitle}
            </p>
          </div>

          {/* Horizontal Tabs */}
          <div className="flex overflow-x-auto no-scrollbar space-x-2 pb-4 mb-8 border-b border-slate-800">
            {t.impactSection.tabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveImpactTab(idx)}
                className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeImpactTab === idx
                    ? 'bg-brand-pink text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <span>{tab.name}</span>
                <span className="ml-2 text-[10px] opacity-70">({tab.year})</span>
              </button>
            ))}
          </div>

          {/* Active Tab Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-xs font-bold text-gold-400 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{currentImpact.location} • {currentImpact.year}</span>
                </div>
                <h3 className="font-display text-xl sm:text-3xl font-bold text-white">
                  {currentImpact.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentImpact.desc}
              </p>

              {/* 4 Impact Stat Chips (I-PAC style) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {currentImpact.stats.map((st, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-center">
                    <span className="block font-extrabold font-display text-lg text-brand-pink">{st.val}</span>
                    <span className="text-[11px] text-slate-400 font-medium">{st.label}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNavigate('contact')}
                  className="px-5 py-2.5 rounded-lg bg-brand-green text-white hover:bg-brand-green-light font-bold text-xs flex items-center space-x-2 transition-all shadow-md"
                >
                  <span>Request Full Case Study & Methodology</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Photo (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-xl h-64 sm:h-80">
                <img 
                  src={currentImpact.img} 
                  alt={currentImpact.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE CROSS BENCH STORY SECTION (I-PAC Story Inspired) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-14 rounded-3xl border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <span className="px-3.5 py-1 rounded-md bg-brand-green-soft text-brand-green text-xs font-bold uppercase tracking-wider">
                {t.story.badge}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900">
                {t.story.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.story.desc1}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.story.desc2}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
                  <span className="text-xs font-bold text-slate-800 block">Senior Practice Faculty & Data Scientists</span>
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
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900">
            {t.solutions.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
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
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-1 group-hover:text-brand-pink transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-brand-green font-semibold mb-3">
                    {cat.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
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

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
              {t.charter.title}
            </h2>

            <blockquote className="font-display text-sm sm:text-base italic text-slate-700 border-l-2 sm:border-l-0 sm:border-y border-brand-green/30 py-4 px-4 sm:px-8 bg-surface-50 rounded-lg">
              "{t.charter.quote}"
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3 text-left">
              {t.charter.points.map((p, idx) => (
                <div key={idx} className="space-y-1.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs sm:text-sm font-bold text-brand-green flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span>{p.title}</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => handleNavigate('about')}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold tracking-wider transition-colors shadow-sm"
              >
                Read Full Institutional Charter & Framework
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
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900">
              {t.insights.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              {t.insights.subtitle}
            </p>
          </div>

          <button
            onClick={() => handleNavigate('insights')}
            className="text-xs sm:text-sm text-brand-pink hover:text-brand-pink-hover font-bold flex items-center space-x-1.5 self-start sm:self-auto"
          >
            <span>Browse All Publications</span>
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
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-brand-pink transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{art.readTime}</span>
                </span>
                <span className="text-brand-pink font-bold group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1">
                  <span>Read Brief</span>
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
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Initiate a Strictly Confidential Strategic Consultation
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Whether you are preparing for an impending legislative election cycle, orchestrating a high-stakes legislative campaign, or requiring an independent third-party audit of state welfare schemes—our senior practice directors are accessible under non-disclosure confidentiality.
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
    </div>
  );
};
