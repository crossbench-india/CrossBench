import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  Building, 
  CheckCircle, 
  Send, 
  AlertCircle, 
  KeyRound, 
  Clock, 
  FileCheck 
} from 'lucide-react';

export const ContactPage = () => {
  const { lang, t } = useLanguage();
  const isHindi = lang === 'hi';

  const [formData, setFormData] = useState({
    fullName: '',
    designation: '',
    organization: '',
    vertical: t.contact.form.verticalOptions[0],
    contactMethod: '',
    scope: '',
    confidentialityAgreed: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.contactMethod || !formData.organization) {
      setError(isHindi ? "कृपया सभी आवश्यक विवरण भरें।" : "Please complete all mandatory intake fields.");
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 space-y-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
          <Lock className="w-3.5 h-3.5" />
          <span>{isHindi ? "गोपनीय इनटेक प्रोटोकॉल" : "CONFIDENTIAL INTAKE PROTOCOL"}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {t.contact.title}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Security Notice & Coordinating Desks (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Security Protocol Card */}
          <div className="gold-border-glow bg-gradient-to-br from-parliament-900 to-parliament-950 p-8 rounded-3xl border border-gold-500/30 space-y-5">
            <div className="flex items-center space-x-3 text-gold-400">
              <ShieldCheck className="w-7 h-7" />
              <h3 className="font-serif font-bold text-lg text-white">
                {isHindi ? "संस्थागत गोपनीयता की गारंटी" : "Confidentiality Covenant"}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {t.contact.intakeNote}
            </p>

            <div className="space-y-3 pt-2 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{isHindi ? "प्रत्येक बैठक पूर्णतः गैर-प्रकटीकरण (NDA) से बंधी होती है।" : "Every initial discussion is protected under bilateral NDAs."}</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{isHindi ? "क्लाइंट का डेटा कभी किसी अन्य दल से साझा नहीं होता (Air-Gapped)।" : "Client intelligence is air-gapped from all other accounts."}</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{isHindi ? "संवेदनशील परामर्श केवल वरिष्ठ प्रैक्टिस डायरेक्टर्स द्वारा किए जाते हैं।" : "Directorship-level engagement with zero junior delegation."}</span>
              </div>
            </div>
          </div>

          {/* Coordination Hub Info */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-5 text-sm text-slate-300">
            <div className="flex items-start space-x-3">
              <Building className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">
                  {isHindi ? "समन्वय केंद्र" : "Coordinating Secretariat"}
                </h4>
                <p className="text-xs text-slate-400">
                  {t.contact.channels.headquarters}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">
                  {isHindi ? "सुरक्षित आधिकारिक ईमेल" : "Direct Intake Channel"}
                </h4>
                <p className="text-xs text-gold-300 font-mono">
                  {t.contact.channels.email}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <KeyRound className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-1">
                  {isHindi ? "एन्क्रिप्टेड वार्तालाप" : "Encrypted Meetings"}
                </h4>
                <p className="text-xs text-slate-400">
                  {t.contact.channels.securityNotice}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Intake Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gold-500/20 border border-gold-500/40 text-gold-400 flex items-center justify-center mx-auto shadow-lg">
                  <FileCheck className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {isHindi ? "गोपनीय अनुरोध दर्ज हो चुका है" : "Consultation Request Received"}
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  {t.contact.form.successMsg}
                </p>
                <div className="inline-flex items-center space-x-2 text-xs text-gold-400 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
                  <Clock className="w-4 h-4" />
                  <span>{isHindi ? "अपेक्षित प्रतिक्रिया समय: 24 घंटे के भीतर" : "Response SLA: Within 24 Hours"}</span>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        designation: '',
                        organization: '',
                        vertical: t.contact.form.verticalOptions[0],
                        contactMethod: '',
                        scope: '',
                        confidentialityAgreed: true
                      });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                  >
                    {isHindi ? "नया अनुरोध भेजें" : "Submit Another Intake"}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      {t.contact.form.fullName} <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={isHindi ? "उदा. राजेश शर्मा" : "e.g. Dr. Rajesh Verma"}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-gold-500/70 focus:outline-none text-sm text-white placeholder-slate-400 transition-colors"
                      required
                    />
                  </div>

                  {/* Designation */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      {t.contact.form.designation}
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      placeholder={isHindi ? "उदा. सांसद / महासचिव / सचिव" : "e.g. Member of Parliament / Director"}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-gold-500/70 focus:outline-none text-sm text-white placeholder-slate-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Organization */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      {t.contact.form.organization} <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder={isHindi ? "दल, मंत्रालय अथवा संस्था का नाम" : "Party / Ministry / Foundation Name"}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-gold-500/70 focus:outline-none text-sm text-white placeholder-slate-400 transition-colors"
                      required
                    />
                  </div>

                  {/* Preferred Contact */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                      {t.contact.form.contactMethod} <span className="text-gold-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      placeholder={t.contact.form.contactPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-gold-500/70 focus:outline-none text-sm text-white placeholder-slate-400 transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Vertical Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    {t.contact.form.vertical}
                  </label>
                  <select
                    name="vertical"
                    value={formData.vertical}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-gold-500/70 focus:outline-none text-sm text-white transition-colors"
                  >
                    {t.contact.form.verticalOptions.map((opt, i) => (
                      <option key={i} value={opt} className="bg-slate-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Scope */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                    {t.contact.form.scope}
                  </label>
                  <textarea
                    rows={4}
                    name="scope"
                    value={formData.scope}
                    onChange={handleChange}
                    placeholder={t.contact.form.scopePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 focus:border-gold-500/70 focus:outline-none text-sm text-white placeholder-slate-400 transition-colors resize-none"
                  />
                </div>

                {/* Confidentiality Pledge Checkbox */}
                <div className="flex items-center space-x-3 pt-2">
                  <input
                    type="checkbox"
                    id="confidentialityAgreed"
                    name="confidentialityAgreed"
                    checked={formData.confidentialityAgreed}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-gold-500 focus:ring-gold-400"
                  />
                  <label htmlFor="confidentialityAgreed" className="text-xs text-slate-300 select-none cursor-pointer">
                    {t.contact.form.confidentialityPledge}
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-parliament-950 font-bold text-sm tracking-wide transition-all shadow-xl hover:shadow-gold-500/20 flex items-center justify-center space-x-2 active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.contact.form.submitBtn}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
