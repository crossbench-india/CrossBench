import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useContent } from '../context/ContentContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  LogOut, 
  Globe, 
  Home, 
  FileText, 
  Trophy, 
  Inbox, 
  Settings, 
  Save, 
  RotateCcw, 
  CheckCircle2, 
  Image as ImageIcon, 
  Plus, 
  Trash2, 
  ExternalLink,
  Clock,
  Eye,
  User,
  Building,
  Mail,
  AlertCircle
} from 'lucide-react';

export const AdminDashboardPage = ({ setActivePage }) => {
  const { user, logout } = useAuth();
  const { 
    contentOverrides, 
    updateField, 
    socialLinks,
    updateSocialLinks,
    inquiries, 
    updateInquiryStatus, 
    resetToDefaults 
  } = useContent();
  const { lang, t } = useLanguage();
  const isHindi = lang === 'hi';

  const [activeTab, setActiveTab] = useState('overview');
  const [saveToast, setSaveToast] = useState('');

  // Editable Form States initialized with overrides or defaults (No trailing periods/dandas)
  const [heroTitle1En, setHeroTitle1En] = useState(contentOverrides['hero.title1.en'] || "Independent Insight");
  const [heroTitle2En, setHeroTitle2En] = useState(contentOverrides['hero.title2.en'] || "Strategic Impact");
  const [heroTitle1Hi, setHeroTitle1Hi] = useState(contentOverrides['hero.title1.hi'] || "स्वतंत्र दृष्टि");
  const [heroTitle2Hi, setHeroTitle2Hi] = useState(contentOverrides['hero.title2.hi'] || "रणनीतिक प्रभाव");

  // Editable Social Media URLs
  const [socialState, setSocialState] = useState(socialLinks);

  const [heroSubtitleEn, setHeroSubtitleEn] = useState(
    contentOverrides['hero.sub.en'] || 
    "A premier non-partisan advisory firm operating across dual engines: data-driven political strategy, high-authority PR media management, and empirical public policy audits."
  );
  const [heroSubtitleHi, setHeroSubtitleHi] = useState(
    contentOverrides['hero.sub.hi'] || 
    "एक शीर्ष गैर-पक्षपातपूर्ण परामर्श संस्था: डेटा-आधारित चुनावी रणनीति, 24x7 सामरिक पीआर एवं मीडिया प्रबंधन, और कल्याणकारी योजनाओं का स्वतंत्र लोक नीति मूल्यांकन।"
  );

  // Track record cards editable state
  const defaultInitiatives = t.impactSection.initiatives;
  const [initiatives, setInitiatives] = useState(() => {
    return contentOverrides['trackRecord.initiatives'] || defaultInitiatives;
  });

  const showToast = (msg) => {
    setSaveToast(msg);
    setTimeout(() => setSaveToast(''), 3000);
  };

  const handleSaveHero = () => {
    updateField('hero.title1.en', heroTitle1En);
    updateField('hero.title2.en', heroTitle2En);
    updateField('hero.title1.hi', heroTitle1Hi);
    updateField('hero.title2.hi', heroTitle2Hi);
    updateField('hero.sub.en', heroSubtitleEn);
    updateField('hero.sub.hi', heroSubtitleHi);
    showToast(isHindi ? "हीरो सामग्री सफलतापूर्वक अपडेट हो गई!" : "Hero content updated successfully!");
  };

  const handleUpdateInitiative = (idx, field, value) => {
    const updated = [...initiatives];
    updated[idx] = { ...updated[idx], [field]: value };
    setInitiatives(updated);
  };

  const handleSaveInitiatives = () => {
    updateField('trackRecord.initiatives', initiatives);
    showToast(isHindi ? "ट्रैक रिकॉर्ड कार्ड्स एवं तस्वीरें अपडेट हो गईं!" : "Track record cards & photos updated successfully!");
  };

  const handleSaveSocial = () => {
    updateSocialLinks(socialState);
    showToast(isHindi ? "सोशल मीडिया लिंक्स सफलतापूर्वक अपडेट हो गईं!" : "Social media links updated successfully!");
  };

  const handleReset = () => {
    if (window.confirm(isHindi ? "क्या आप सभी परिवर्तनों को डिफ़ॉल्ट पर रीसेट करना चाहते हैं?" : "Reset all modifications back to system factory defaults?")) {
      resetToDefaults();
      setHeroTitle1En("Independent Insight");
      setHeroTitle2En("Strategic Impact");
      setHeroTitle1Hi("स्वतंत्र दृष्टि");
      setHeroTitle2Hi("रणनीतिक प्रभाव");
      setInitiatives(defaultInitiatives);
      setSocialState({
        facebook: "https://facebook.com/crossbench.india",
        instagram: "https://instagram.com/crossbench.in",
        x: "https://x.com/crossbench_in",
        youtube: "https://youtube.com/@crossbench",
        linkedin: "https://linkedin.com/company/crossbench"
      });
      showToast(isHindi ? "डिफ़ॉल्ट सेटिंग्स पुनर्स्थापित हो गईं!" : "Factory defaults restored!");
    }
  };

  const imagePresets = [
    { label: "Ground Campaign Rally", url: "./images/leader_rally.jpg" },
    { label: "War Room Intelligence", url: "./images/warroom.jpg" },
    { label: "Data Analytics & GIS", url: "./images/analytics.jpg" },
    { label: "PR & Press Media", url: "./images/pr_media.jpg" },
    { label: "Governance & Assembly", url: "./images/governance.jpg" },
    { label: "State Strategy Team", url: "./images/state_campaign.jpg" },
    { label: "Delhi National Hub", url: "./images/delhi_campaign.jpg" },
    { label: "Senior Directorate", url: "./images/team_story.jpg" }
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      {/* Toast Alert */}
      {saveToast && (
        <div className="fixed top-20 right-6 z-50 px-5 py-3 rounded-2xl bg-brand-green text-white font-bold text-xs sm:text-sm shadow-2xl flex items-center space-x-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-white" />
          <span>{saveToast}</span>
        </div>
      )}

      {/* Top Admin Header Bar */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full bg-brand-pink-soft text-brand-pink text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isHindi ? "मास्टर एडमिन सत्र" : "MASTER ADMIN SESSION"}</span>
            </span>
            <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-md font-semibold">
              {user?.email || "support.crossbench@gmail.com"}
            </span>
          </div>
          <h1 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-2xl sm:text-3xl font-extrabold text-slate-900`}>
            {isHindi ? "क्रॉस बेंच मास्टर एडमिनिस्ट्रेशन डैशबोर्ड" : "CROSS BENCH Master Administration Dashboard"}
          </h1>
          <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-500`}>
            {isHindi 
              ? "वेबसाइट की सामग्री, तस्वीरें, पीआर मॉड्यूल और आने वाले क्लाइंट इनटेक का संपूर्ण संपादन व नियंत्रण।" 
              : "Full operational authority to edit site copy, replace photos, manage track records, and review client inquiries."}
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-4 py-2.5 rounded-xl bg-surface-50 hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 flex items-center space-x-1.5 transition-all shadow-xs"
          >
            <Eye className="w-3.5 h-3.5 text-brand-green" />
            <span>{isHindi ? "लाइव वेबसाइट देखें" : "View Live Website"}</span>
          </button>

          <button
            onClick={() => { logout(); setActivePage('home'); }}
            className="px-4 py-2.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold border border-red-200 flex items-center space-x-1.5 transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{isHindi ? "लॉगआउट करें" : "Sign Out"}</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm overflow-x-auto">
        {[
          { id: 'overview', label: isHindi ? "डैशबोर्ड सारांश" : "Overview & Telemetry", icon: Trophy },
          { id: 'hero', label: isHindi ? "हीरो व टैगलाइन एडिटर" : "Hero & Tagline Editor", icon: FileText },
          { id: 'trackrecord', label: isHindi ? "ट्रैक रिकॉर्ड व फोटो प्रबंधन" : "Track Record & Photos", icon: ImageIcon },
          { id: 'social', label: isHindi ? "सोशल मीडिया लिंक्स" : "Social Media Links", icon: Globe },
          { id: 'inbox', label: isHindi ? `परामर्श इनबॉक्स (${inquiries.length})` : `Inquiries Inbox (${inquiries.length})`, icon: Inbox },
          { id: 'settings', label: isHindi ? "सिस्टम सेटिंग्स" : "System Settings", icon: Settings }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-brand-green text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* 4 Telemetry Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {isHindi ? "कुल प्राप्त परामर्श इनटेक" : "Total Client Inquiries"}
              </span>
              <div className="text-3xl font-extrabold text-brand-pink">{inquiries.length}</div>
              <p className="text-xs text-slate-500">
                {isHindi ? "सत्यापित राजनीतिक व नीतिगत लीड्स" : "Verified bilateral consultation requests"}
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {isHindi ? "सक्रिय प्रैक्टिस विंग्स" : "Active Practice Wings"}
              </span>
              <div className="text-3xl font-extrabold text-brand-green">3 Pillars</div>
              <p className="text-xs text-slate-500">Political Consulting, PR Agency, Policy</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {isHindi ? "प्रूवन ट्रैक रिकॉर्ड इनिशिएटिव्स" : "Simultaneous Initiatives"}
              </span>
              <div className="text-3xl font-extrabold text-slate-900">4 Grid Units</div>
              <p className="text-xs text-slate-500">Assembly, Welfare DBT, Lawmaker, Advocacy</p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {isHindi ? "प्रशासनिक सुरक्षा स्थिति" : "Security Covenant Status"}
              </span>
              <div className="text-3xl font-extrabold text-brand-green">Air-Gapped</div>
              <p className="text-xs text-slate-500">Zero cross-account data leakage</p>
            </div>
          </div>

          {/* Recent Inquiries Preview */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-lg sm:text-xl font-bold text-slate-900`}>
                  {isHindi ? "नवीनतम नेतृत्व इनटेक (Recent Inquiries)" : "Latest Leadership Intake"}
                </h3>
                <p className="text-xs text-slate-500">
                  {isHindi ? "सख्त गोपनीयता अनुबंध के अंतर्गत सीधे प्राप्त अनुरोध" : "Confidential consultation requests logged from intake form"}
                </p>
              </div>
              <button
                onClick={() => setActiveTab('inbox')}
                className="text-xs font-bold text-brand-pink hover:underline"
              >
                {isHindi ? "पूरा इनबॉक्स खोलें →" : "Open Full CRM Inbox →"}
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {inquiries.slice(0, 3).map((inq) => (
                <div key={inq.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-slate-900">{inq.fullName}</span>
                      <span className="text-[11px] text-slate-500">({inq.organization})</span>
                      <span className="px-2 py-0.5 rounded-md bg-brand-pink-soft text-brand-pink text-[10px] font-bold">
                        {inq.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5 line-clamp-1">{inq.scope}</p>
                  </div>
                  <div className="text-right text-[11px] text-slate-400 font-mono flex-shrink-0">
                    {inq.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: HERO & BRAND CONTENT */}
      {activeTab === 'hero' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-xl font-bold text-slate-900`}>
                {isHindi ? "मुख्य पृष्ठ हीरो शीर्षक एवं सबटाइटल संपादक" : "Hero Headline & Tagline Editor"}
              </h2>
              <p className="text-xs text-slate-500">
                {isHindi ? "अंग्रेजी और हिंदी दोनों में हेडलाइन को संतुलित करें।" : "Manage balanced bilingual headlines and subtitles live on the site."}
              </p>
            </div>
            <button
              onClick={handleSaveHero}
              className="px-5 py-2.5 rounded-xl bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs sm:text-sm flex items-center space-x-1.5 shadow-sm active:scale-95"
            >
              <Save className="w-4 h-4" />
              <span>{isHindi ? "बदलाव सहेजें" : "Save Changes"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* English Section */}
            <div className="p-5 rounded-2xl bg-surface-50 border border-slate-200 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green flex items-center space-x-1">
                <Globe className="w-3.5 h-3.5" />
                <span>English Version Copy</span>
              </span>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Headline Line 1 (Green Text)</label>
                <input
                  type="text"
                  value={heroTitle1En}
                  onChange={(e) => setHeroTitle1En(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm font-semibold"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Headline Line 2 (Magenta Pink Text)</label>
                <input
                  type="text"
                  value={heroTitle2En}
                  onChange={(e) => setHeroTitle2En(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm font-semibold text-brand-pink"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Hero Subtitle</label>
                <textarea
                  rows={3}
                  value={heroSubtitleEn}
                  onChange={(e) => setHeroSubtitleEn(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-700"
                />
              </div>
            </div>

            {/* Hindi Section */}
            <div className="p-5 rounded-2xl bg-surface-50 border border-slate-200 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-pink flex items-center space-x-1">
                <Globe className="w-3.5 h-3.5" />
                <span>हिंदी वर्ज़न सामग्री (Devanagari)</span>
              </span>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">मुख्य शीर्षक पंक्ति 1 (हरा टेक्स्ट)</label>
                <input
                  type="text"
                  value={heroTitle1Hi}
                  onChange={(e) => setHeroTitle1Hi(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm font-semibold font-hi-title"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">मुख्य शीर्षक पंक्ति 2 (गुलाबी टेक्स्ट)</label>
                <input
                  type="text"
                  value={heroTitle2Hi}
                  onChange={(e) => setHeroTitle2Hi(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm font-semibold text-brand-pink font-hi-title"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">हीरो विवरण (Subtitle)</label>
                <textarea
                  rows={3}
                  value={heroSubtitleHi}
                  onChange={(e) => setHeroSubtitleHi(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs text-slate-700 font-hi-body"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: TRACK RECORD & PHOTOS */}
      {activeTab === 'trackrecord' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-xl font-bold text-slate-900`}>
                {isHindi ? "4 प्रूवन ट्रैक रिकॉर्ड इनिशिएटिव्स एवं फोटो एडिटर" : "4 Proven Track Record Initiatives & Photo Editor"}
              </h2>
              <p className="text-xs text-slate-500">
                {isHindi 
                  ? "प्रत्येक कार्ड की तस्वीर, शीर्षक, मीट्रिक्स और विवरण को एडिट करें।" 
                  : "Modify initiative details, metrics values, and replace card thumbnails."}
              </p>
            </div>
            <button
              onClick={handleSaveInitiatives}
              className="px-5 py-2.5 rounded-xl bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs sm:text-sm flex items-center space-x-1.5 shadow-sm active:scale-95"
            >
              <Save className="w-4 h-4" />
              <span>{isHindi ? "सभी कार्ड्स सहेजें" : "Save All Cards"}</span>
            </button>
          </div>

          {/* Photo Presets Reference */}
          <div className="p-4 rounded-2xl bg-surface-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
              {isHindi ? "उपलब्ध फोटो प्रीसेट्स (क्लिक करके कॉपी करें):" : "Available High-Res Photo Presets:"}
            </span>
            <div className="flex flex-wrap gap-2">
              {imagePresets.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(img.url);
                    showToast(`Copied ${img.url}`);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-brand-pink text-[11px] font-mono text-slate-700 flex items-center space-x-1"
                >
                  <span>{img.label}</span>
                  <span className="text-slate-400">({img.url})</span>
                </button>
              ))}
            </div>
          </div>

          {/* 4 Cards Editor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiatives.map((item, idx) => (
              <div key={item.id || idx} className="p-5 rounded-2xl bg-surface-50 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-brand-pink text-white text-[10px] font-bold uppercase tracking-wider">
                    CARD 0{idx + 1} • {item.categoryTag}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-500">{item.year}</span>
                </div>

                {/* Thumbnail Preview & URL input */}
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-16 rounded-xl overflow-hidden border border-slate-300 flex-shrink-0 bg-slate-100">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow space-y-1">
                    <label className="text-[11px] font-bold text-slate-700">Photo Path / URL</label>
                    <input
                      type="text"
                      value={item.img}
                      onChange={(e) => handleUpdateInitiative(idx, 'img', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-mono"
                    />
                  </div>
                </div>

                {/* Title & Headline */}
                <div className="space-y-2">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700">Card Title</label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleUpdateInitiative(idx, 'title', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-700">Sub-Headline</label>
                    <input
                      type="text"
                      value={item.headline}
                      onChange={(e) => handleUpdateInitiative(idx, 'headline', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-brand-green font-semibold"
                    />
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {item.stats && item.stats.map((st, sIdx) => (
                    <div key={sIdx} className="p-2 rounded-lg bg-white border border-slate-200 space-y-1">
                      <label className="text-[10px] text-slate-400 block truncate">{st.label}</label>
                      <input
                        type="text"
                        value={st.val}
                        onChange={(e) => {
                          const newStats = [...item.stats];
                          newStats[sIdx] = { ...newStats[sIdx], val: e.target.value };
                          handleUpdateInitiative(idx, 'stats', newStats);
                        }}
                        className="w-full px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs font-bold text-brand-pink text-center"
                      />
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div>
                  <label className="text-[11px] font-bold text-slate-700">Summary Description</label>
                  <textarea
                    rows={2}
                    value={item.desc}
                    onChange={(e) => handleUpdateInitiative(idx, 'desc', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs text-slate-600"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB: SOCIAL MEDIA MANAGER */}
      {activeTab === 'social' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h2 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-xl font-bold text-slate-900`}>
                {isHindi ? "सोशल मीडिया प्रोफाइल व लिंक प्रबंधन" : "Social Media Links & Follow Us Manager"}
              </h2>
              <p className="text-xs text-slate-500">
                {isHindi 
                  ? "फुटर में प्रदर्शित होने वाले Facebook, Instagram, X (Twitter), YouTube और LinkedIn के रीडायरेक्ट यूआरएल सेट करें।" 
                  : "Configure external social media redirect URLs for the footer."}
              </p>
            </div>

            <button
              onClick={handleSaveSocial}
              className="px-5 py-2.5 rounded-xl bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs flex items-center space-x-1.5 shadow-sm active:scale-95"
            >
              <Save className="w-4 h-4" />
              <span>{isHindi ? "लिंक्स सहेजें" : "Save Social Links"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {/* Facebook */}
            <div className="p-4 rounded-2xl bg-surface-50 border border-slate-200 space-y-2">
              <label className="text-xs font-bold text-slate-800 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
                <span>Facebook Profile / Page URL</span>
              </label>
              <input
                type="url"
                value={socialState?.facebook || ''}
                onChange={(e) => setSocialState(prev => ({ ...prev, facebook: e.target.value }))}
                placeholder="https://facebook.com/your-page"
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-900 focus:border-brand-pink focus:outline-none"
              />
            </div>

            {/* Instagram */}
            <div className="p-4 rounded-2xl bg-surface-50 border border-slate-200 space-y-2">
              <label className="text-xs font-bold text-slate-800 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-600 inline-block" />
                <span>Instagram Profile URL</span>
              </label>
              <input
                type="url"
                value={socialState?.instagram || ''}
                onChange={(e) => setSocialState(prev => ({ ...prev, instagram: e.target.value }))}
                placeholder="https://instagram.com/your-handle"
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-900 focus:border-brand-pink focus:outline-none"
              />
            </div>

            {/* X (formerly Twitter) */}
            <div className="p-4 rounded-2xl bg-surface-50 border border-slate-200 space-y-2">
              <label className="text-xs font-bold text-slate-800 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-900 inline-block" />
                <span>X (formerly Twitter) Profile URL</span>
              </label>
              <input
                type="url"
                value={socialState?.x || ''}
                onChange={(e) => setSocialState(prev => ({ ...prev, x: e.target.value }))}
                placeholder="https://x.com/your-handle"
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-900 focus:border-brand-pink focus:outline-none"
              />
            </div>

            {/* YouTube */}
            <div className="p-4 rounded-2xl bg-surface-50 border border-slate-200 space-y-2">
              <label className="text-xs font-bold text-slate-800 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block" />
                <span>YouTube Channel URL</span>
              </label>
              <input
                type="url"
                value={socialState?.youtube || ''}
                onChange={(e) => setSocialState(prev => ({ ...prev, youtube: e.target.value }))}
                placeholder="https://youtube.com/@your-channel"
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-900 focus:border-brand-pink focus:outline-none"
              />
            </div>

            {/* LinkedIn */}
            <div className="p-4 rounded-2xl bg-surface-50 border border-slate-200 space-y-2 md:col-span-2">
              <label className="text-xs font-bold text-slate-800 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-700 inline-block" />
                <span>LinkedIn Company / Profile URL</span>
              </label>
              <input
                type="url"
                value={socialState?.linkedin || ''}
                onChange={(e) => setSocialState(prev => ({ ...prev, linkedin: e.target.value }))}
                placeholder="https://linkedin.com/company/your-organization"
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-300 text-xs font-mono text-slate-900 focus:border-brand-pink focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: INQUIRIES CRM INBOX */}
      {activeTab === 'inbox' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <h2 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-xl font-bold text-slate-900`}>
                {isHindi ? "गोपनीय परामर्श इनटेक इनबॉक्स (CRM)" : "Confidential Leadership Inquiries Inbox (CRM)"}
              </h2>
              <p className="text-xs text-slate-500">
                {isHindi 
                  ? "वेबसाइट के 'गोपनीय संपर्क' फॉर्म से प्राप्त सभी क्लाइंट अनुरोध।" 
                  : "Encrypted consultation submissions logged directly from the intake portal."}
              </p>
            </div>
            <div className="text-xs font-bold text-brand-green bg-brand-green-soft px-3 py-1.5 rounded-lg">
              {inquiries.length} {isHindi ? "कुल अनुरोध दर्ज" : "Total Logged Leads"}
            </div>
          </div>

          <div className="space-y-4">
            {inquiries.map((inq) => (
              <div 
                key={inq.id}
                className="p-5 sm:p-6 rounded-2xl bg-surface-50 border border-slate-200 space-y-3 hover:border-brand-pink/50 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-sm text-slate-900">{inq.fullName}</span>
                    {inq.designation && (
                      <span className="text-xs text-slate-500 font-medium">({inq.designation})</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] text-slate-400 font-mono">{inq.date}</span>
                    <select
                      value={inq.status}
                      onChange={(e) => updateInquiryStatus(inq.id, e.target.value)}
                      className="px-2.5 py-1 rounded-lg text-xs font-bold bg-white border border-slate-300 text-brand-pink focus:outline-none"
                    >
                      <option value="New">New</option>
                      <option value="Under Review">Under Review</option>
                      <option value="Under NDA">Under NDA</option>
                      <option value="Consultation Scheduled">Consultation Scheduled</option>
                      <option value="Retained">Retained</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="flex items-center space-x-1.5 text-slate-700">
                    <Building className="w-3.5 h-3.5 text-brand-green" />
                    <span>{inq.organization}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-slate-700">
                    <Mail className="w-3.5 h-3.5 text-brand-pink" />
                    <span className="font-mono">{inq.contactMethod}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-brand-green font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span className="truncate">{inq.vertical}</span>
                  </div>
                </div>

                {inq.scope && (
                  <p className="text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200 leading-relaxed">
                    <span className="font-bold text-slate-800 block text-[11px] uppercase mb-0.5">Project Scope / Mandate:</span>
                    {inq.scope}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: SYSTEM SETTINGS */}
      {activeTab === 'settings' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="pb-4 border-b border-slate-100">
            <h2 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-xl font-bold text-slate-900`}>
              {isHindi ? "सिस्टम सुरक्षा एवं डिफ़ॉल्ट रीसेट" : "System Administration & Settings"}
            </h2>
            <p className="text-xs text-slate-500">
              {isHindi ? "मास्टर एडमिन एक्सेस और डेटा रीसेट ऑप्शंस।" : "Manage Master Admin security parameters and reset options."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-surface-50 border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                {isHindi ? "मास्टर एडमिन अकाउंट" : "Master Admin Account Profile"}
              </span>
              <div className="text-xs space-y-1.5 font-mono text-slate-700">
                <div><span className="font-sans font-bold text-slate-500">Email:</span> support.crossbench@gmail.com</div>
                <div><span className="font-sans font-bold text-slate-500">Password:</span> CrossBench@Master2026#</div>
                <div><span className="font-sans font-bold text-slate-500">Security Clearance:</span> Level 0 (Full Administrative Access)</div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-red-50/50 border border-red-200 space-y-3">
              <span className="text-xs font-bold text-red-800 uppercase tracking-wider block">
                {isHindi ? "फ़ैक्टरी डिफ़ॉल्ट रीसेट" : "Reset to Factory Content"}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isHindi 
                  ? "यदि आप सभी कस्टम संपादनों को हटाकर मूल ब्रांड सामग्री पुनर्स्थापित करना चाहते हैं।" 
                  : "Clear all local content overrides and restore initial production data."}
              </p>
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center space-x-1.5 shadow-sm active:scale-95"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{isHindi ? "सभी बदलाव रीसेट करें" : "Restore System Defaults"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
