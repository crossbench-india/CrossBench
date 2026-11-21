import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  ArrowRight, 
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
  Lock 
} from 'lucide-react';

export const HomePage = ({ setActivePage }) => {
  const { t } = useLanguage();

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-parliament-grid overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-parliament-700/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-gold-500/30 text-gold-400 text-xs sm:text-sm font-medium shadow-lg backdrop-blur-sm">
            <Scale className="w-4 h-4 text-gold-400" />
            <span>{t.hero.eyebrow}</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15]">
            <span>{t.hero.titleLine1}</span>{' '}
            <span className="block mt-2 gold-gradient-text font-serif italic font-normal">
              {t.hero.titleLine2}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
            {t.hero.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleNavigate('political')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-parliament-950 font-bold text-sm tracking-wide transition-all shadow-xl hover:shadow-gold-500/20 flex items-center justify-center space-x-2.5 active:scale-95 group"
            >
              <Vote className="w-4 h-4" />
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleNavigate('policy')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm tracking-wide border border-slate-700/80 hover:border-slate-600 transition-all backdrop-blur-sm flex items-center justify-center space-x-2.5 active:scale-95"
            >
              <FileText className="w-4 h-4 text-gold-400" />
              <span>{t.hero.secondaryCta}</span>
            </button>
          </div>

          {/* Security Guarantee Note */}
          <div className="pt-6 flex items-center justify-center space-x-6 text-xs text-slate-400">
            <span className="flex items-center space-x-1.5">
              <Lock className="w-3.5 h-3.5 text-gold-500" />
              <span>100% Non-Partisan & Confidential</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
              <span>Senior Practice Directorship</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. CREDIBILITY METRICS COUNTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.metrics.map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-2xl relative group hover:border-gold-500/40 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-display font-bold text-gold-400 mb-2">
                {item.value}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. THE DUAL ENGINE (POLITICAL VS POLICY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Dual Core Methodology</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            {t.dualEngine.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {t.dualEngine.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Engine 1: Political Strategy */}
          <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-800 relative hover:border-gold-500/40 transition-all group flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-gold-500/10 text-gold-400 text-xs font-bold tracking-widest uppercase">
                  {t.dualEngine.engine1.tag}
                </span>
                <Vote className="w-6 h-6 text-gold-400" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-1">
                  {t.dualEngine.engine1.title}
                </h3>
                <p className="text-sm text-gold-400/90 font-medium">
                  {t.dualEngine.engine1.subtitle}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {t.dualEngine.engine1.desc}
              </p>

              <div className="space-y-3 pt-2">
                {t.dualEngine.engine1.features.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800/80">
              <button
                onClick={() => handleNavigate('political')}
                className="w-full py-3 rounded-lg bg-slate-900 hover:bg-gold-500/10 hover:border-gold-500/50 text-gold-300 border border-slate-700/80 font-semibold text-sm transition-all flex items-center justify-center space-x-2 group-hover:text-gold-200"
              >
                <span>{t.dualEngine.engine1.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Engine 2: Public Policy Advisory */}
          <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-slate-800 relative hover:border-gold-500/40 transition-all group flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-bold tracking-widest uppercase">
                  {t.dualEngine.engine2.tag}
                </span>
                <FileText className="w-6 h-6 text-gold-400" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-1">
                  {t.dualEngine.engine2.title}
                </h3>
                <p className="text-sm text-gold-400/90 font-medium">
                  {t.dualEngine.engine2.subtitle}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {t.dualEngine.engine2.desc}
              </p>

              <div className="space-y-3 pt-2">
                {t.dualEngine.engine2.features.map((feat, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-800/80">
              <button
                onClick={() => handleNavigate('policy')}
                className="w-full py-3 rounded-lg bg-slate-900 hover:bg-gold-500/10 hover:border-gold-500/50 text-gold-300 border border-slate-700/80 font-semibold text-sm transition-all flex items-center justify-center space-x-2 group-hover:text-gold-200"
              >
                <span>{t.dualEngine.engine2.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLUTIONS BY CLIENT VERTICAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <Users2 className="w-3.5 h-3.5" />
            <span>Target Verticals</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
            {t.solutions.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {t.solutions.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.solutions.categories.map((cat, idx) => {
            const icons = [Building2, Landmark, Users2, HeartHandshake];
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={cat.id}
                onClick={() => handleNavigate('solutions')}
                className="glass-panel p-6 rounded-xl border border-slate-800/90 hover:border-gold-500/50 cursor-pointer transition-all hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4 group-hover:border-gold-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gold-400 font-medium mb-3">
                    {cat.tagline}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-gold-400 font-semibold">
                  <span>View Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. INSTITUTIONAL NEUTRALITY CHARTER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gold-border-glow bg-gradient-to-b from-parliament-900 to-parliament-950 p-8 sm:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[90px] pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-gold-500/30 text-gold-400 text-xs font-bold tracking-widest uppercase">
              {t.charter.badge}
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {t.charter.title}
            </h2>

            <blockquote className="font-serif text-base sm:text-lg italic text-slate-300 border-l-2 sm:border-l-0 sm:border-y border-gold-500/40 py-4 px-4 sm:px-8">
              "{t.charter.quote}"
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-left">
              {t.charter.points.map((p, idx) => (
                <div key={idx} className="space-y-1.5 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <h4 className="text-sm font-bold text-gold-300 flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>{p.title}</span>
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => handleNavigate('about')}
                className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold tracking-wider transition-colors border border-slate-700"
              >
                Read Full Institutional Charter & Framework
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PERSPECTIVES & INSIGHTS TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Thought Leadership</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              {t.insights.title}
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              {t.insights.subtitle}
            </p>
          </div>

          <button
            onClick={() => handleNavigate('insights')}
            className="text-xs sm:text-sm text-gold-400 hover:text-gold-300 font-semibold flex items-center space-x-1.5 self-start sm:self-auto"
          >
            <span>Browse All Whitepapers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.insights.articles.map((art, idx) => (
            <div 
              key={idx}
              onClick={() => handleNavigate('insights')}
              className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-gold-500/40 cursor-pointer transition-all hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span className="text-gold-400 font-bold tracking-wider">{art.tag}</span>
                  <span>{art.date}</span>
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-gold-300 transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{art.readTime}</span>
                </span>
                <span className="text-gold-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1">
                  <span>Read Brief</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CONFIDENTIAL CONSULTATION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-parliament-900 via-parliament-850 to-parliament-900 border border-gold-500/30 p-8 sm:p-14 rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-6">
            <span className="px-3 py-1 rounded-md bg-gold-500/20 text-gold-300 text-xs font-bold uppercase tracking-widest">
              Direct Senior Practice Intake
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
              Initiate a Strictly Confidential Strategic Consultation
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you are preparing for an impending legislative election cycle, orchestrating a high-stakes legislative campaign, or requiring an independent third-party audit of state welfare schemes—our senior practice directors are accessible under non-disclosure confidentiality.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleNavigate('contact')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-parliament-950 font-bold text-sm tracking-wide transition-all shadow-xl hover:shadow-gold-500/25 flex items-center space-x-2.5 active:scale-95"
              >
                <Lock className="w-4 h-4 text-parliament-950" />
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
