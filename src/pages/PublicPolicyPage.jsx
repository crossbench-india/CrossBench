import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  FileText, 
  Landmark, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Search, 
  MessageSquareWarning, 
  GraduationCap,
  Mail,
  MapPin,
  X,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const PublicPolicyPage = ({ setActivePage }) => {
  const { lang, t } = useLanguage();
  const [selectedModule, setSelectedModule] = useState(null);
  const isHindi = lang === 'hi';

  const policyModules = [
    {
      id: "mod-1",
      stopNumber: "01",
      stopLabel: isHindi ? "स्टॉप 01 • योजना ऑडिट" : "STOP 01 • SCHEME AUDIT",
      icon: Search,
      img: "./images/analytics.jpg",
      color: "pink",
      title: isHindi ? "कल्याणकारी योजनाओं का थर्ड-पार्टी स्वतंत्र मूल्यांकन" : "Welfare Scheme Third-Party Impact Assessments",
      tagline: isHindi ? "अंतिम छोर तक सरकारी लाभ पहुँचने का निष्पक्ष ऑडिट" : "Rigorous Empirical Evaluation of Direct Benefit Transfer (DBT) Schemes",
      desc: isHindi 
        ? "सरकारी योजनाओं के क्रियान्वयन में आने वाली जमीनी रुकावटों, बायोमेट्रिक व तकनीकी विफलता और लीकेज का स्वतंत्र फील्ड ऑडिट। मंत्रालयों और नीति निर्धारकों को वास्तविक लाभार्थियों से मिला निष्पक्ष फीडबैक।"
        : "Field audit telemetry across central and state welfare initiatives. We measure last-mile DBT delivery efficacy, identification leakages, bureaucratic delays, and citizen satisfaction to give leadership an unvarnished audit.",
      deliverables: isHindi 
        ? [
            "योजना प्रभाव मूल्यांकन स्कोरकार्ड (Scheme Health Index)",
            "अंतिम छोर तक लीकेज और लाभार्थी असुविधा रिपोर्ट",
            "योजना सरलीकरण एवं प्रशासनिक सुधार का नीतिगत प्रारूप",
            "बायोमेट्रिक प्रमाणीकरण व बैंकिंग विफलता डेटा मैपिंग"
          ]
        : [
            "Scheme Health Index & beneficiary satisfaction scorecards",
            "Last-mile leakage and administrative bottleneck telemetry",
            "Actionable policy refinement and workflow simplification blueprints",
            "Biometric failure and banking disconnect geospatial modeling"
          ]
    },
    {
      id: "mod-2",
      stopNumber: "02",
      stopLabel: isHindi ? "स्टॉप 02 • विधायी रिसर्च" : "STOP 02 • LEGISLATIVE RESEARCH",
      icon: Landmark,
      img: "./images/governance.jpg",
      color: "green",
      title: isHindi ? "संसदीय अनुसंधान एवं विधायी ब्रीफिंग्स" : "Legislative Research & Parliamentary Briefings",
      tagline: isHindi ? "सांसदों और नीति-निर्माताओं के लिए तथ्यात्मक आधार" : "Objective, High-Authority Briefings on Draft Legislation & Budgets",
      desc: isHindi 
        ? "संसद या विधानसभा में पेश होने वाले विधेयकों, स्थायी समितियों की रिपोर्ट्स और राज्य बजटों का गहन विश्लेषण। जन-प्रतिनिधियों को सटीक सवाल, शून्यकाल के मुद्दे और ठोस बहस सामग्री उपलब्ध कराना।"
        : "In-depth legislative briefs analyzing draft legislation, parliamentary standing committee reports, and state budgetary outlays. Equipping lawmakers with authoritative empirical data for floor debates.",
      deliverables: isHindi 
        ? [
            "2-पेज कार्यकारी विधायी ब्रीफ (Actionable Legislative Briefs)",
            "विभिन्न राज्यों के नीतिगत मॉडल का तुलनात्मक अध्ययन",
            "संसदीय प्रश्नों और शून्यकाल बहसों के लिए प्रामाणिक ड्राफ्ट्स",
            "बजट आवंटन एवं व्यय विश्लेषण (Fiscal Outlay Review)"
          ]
        : [
            "Executive 2-page actionable legislative briefs for lawmakers",
            "Cross-state policy comparative benchmarking dossiers",
            "Draft questions, zero-hour interventions, and private member bills",
            "State budget allocation and fiscal outlay execution audits"
          ]
    },
    {
      id: "mod-3",
      stopNumber: "03",
      stopLabel: isHindi ? "स्टॉप 03 • जन-भावना" : "STOP 03 • CITIZEN SENTIMENT",
      icon: MessageSquareWarning,
      img: "./images/team_story.jpg",
      color: "pink",
      title: isHindi ? "जन-भावना एवं लोक शिकायत निवारण विश्लेषण" : "Citizen Sentiment & Public Grievance Feedback Loops",
      tagline: isHindi ? "असंतोष के बड़े रूप लेने से पहले अर्ली-वार्निंग सिस्टम" : "Proactive Early-Warning Systems on Public Discontent & Services",
      desc: isHindi 
        ? "टेलीफोनिक पोल्स, फोकस ग्रुप चर्चा (FGDs) और प्रशासनिक डेटा के संयोजन से स्वास्थ्य, शिक्षा, सड़क, बिजली और कृषि पर जनता के मूड की सटीक ट्रैकिंग। सरकार के लिए पूर्व-चेतावनी प्रणाली।"
        : "Synthesizing localized grievance registries, quantitative telephonic polling, and qualitative focus group discussions to detect emerging public frustration before it escalates into political headwinds.",
      deliverables: isHindi 
        ? [
            "प्रशासनिक असंतोष अर्ली-वार्निंग डैशबोर्ड (Early-Warning Telemetry)",
            "क्षेत्र-वार लोक सेवा संतुष्टि सूचकांक (Public Service Satisfaction Index)",
            "संकट निवारण हेतु नागरिक संवाद एवं जन-संपर्क कार्ययोजना",
            "सोशल व जमीनी शिकायतों का एकीकृत हीटमैप (Grievance Heatmaps)"
          ]
        : [
            "Public grievance early-warning dashboard for administrative leadership",
            "District-level public services delivery satisfaction benchmarks",
            "Civic engagement and proactive grievance redressal communication kits",
            "Integrated cross-departmental citizen grievance heatmaps"
          ]
    },
    {
      id: "mod-4",
      stopNumber: "04",
      stopLabel: isHindi ? "स्टॉप 04 • नीतिगत सुधार" : "STOP 04 • STRATEGIC ADVOCACY",
      icon: GraduationCap,
      img: "./images/delhi_campaign.jpg",
      color: "green",
      title: isHindi ? "एनजीओ एवं थिंक टैंक्स के लिए रणनीतिक एडवोकेसी" : "Strategic Policy Advocacy for NGOs & Think Tanks",
      tagline: isHindi ? "जमीनी शोध को नीतिगत फैसलों में बदलने का पुल" : "Bridging Grassroots Civil Society Evidence with Policy Makers",
      desc: isHindi 
        ? "गैर-सरकारी संगठनों, परोपकारी ट्रस्टों और शोध संस्थानों के फील्ड डेटा को उच्च-स्तरीय नीतिगत श्वेतपत्रों, विधायी संशोधन प्रस्तावों और मंत्रालयों के साथ गोलमेज बैठकों में बदलना।"
        : "Translating complex social, legal, and environmental field studies into compelling, empirical policy whitepapers, regulatory memorandums, and multi-stakeholder consultative roundtables.",
      deliverables: isHindi 
        ? [
            "तथ्य-आधारित नीतिगत श्वेतपत्र एवं अनुसंधान रिपोर्ट्स (Whitepapers)",
            "मंत्रालयों एवं आयोगों के लिए नीति संशोधन ज्ञापन (Policy Memorandums)",
            "बहु-हितधारक गोलमेज परामर्श बैठकों का संचालन व समन्वय",
            "संसदीय स्थायी समितियों हेतु साक्ष्य-आधारित प्रस्तुतिकरण"
          ]
        : [
            "Evidence-based policy whitepapers and sectoral baseline studies",
            "Targeted policy amendment memorandums for relevant ministries",
            "Multi-stakeholder consultative roundtables and advocacy collateral",
            "Authoritative evidence presentations for parliamentary standing panels"
          ]
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. Page Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-pink-soft border border-brand-pink/30 text-brand-pink text-xs font-bold uppercase tracking-wider">
          <FileText className="w-3.5 h-3.5" />
          <span>{isHindi ? "इंजन 02 : लोक नीति एवं सुशासन" : "ENGINE 02 : PUBLIC POLICY ADVISORY"}</span>
        </div>
        <h1 className={`${isHindi ? 'font-hi-title' : 'font-display'} text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]`}>
          {isHindi ? (
            <>
              <span className="block">प्रशासनिक प्रभावशीलता एवं</span>
              <span className="text-brand-pink block mt-1">नीतिगत सुशासन परामर्श</span>
            </>
          ) : (
            <>
              <span className="block">Transforming Governance with</span>
              <span className="text-brand-pink block mt-1">Empirical Policy Advisory</span>
            </>
          )}
        </h1>
        <p className={`${isHindi ? 'font-hi-body' : ''} text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto`}>
          {isHindi
            ? "CROSS BENCH सरकारी मंत्रालयों, जन-प्रतिनिधियों और नागरिक संस्थाओं को निष्पक्ष थर्ड-पार्टी योजना ऑडिट, विधायी अनुसंधान और सिटिजन फीडबैक लूप्स प्रदान करता है।"
            : "Bridging the critical divide between policy intent and ground execution. We assist administrative leadership with independent scheme evaluations, legislative analysis, and citizen-centric governance metrics."}
        </p>
      </div>

      {/* 2. INTERACTIVE CURVING POLICY ROADMAP */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-slate-200 shadow-sm relative overflow-hidden">
        {/* Roadmap Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-brand-green-soft text-brand-green border border-brand-green/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-green" />
            <span>{isHindi ? "इंटरैक्टिव नीतिगत रोडमैप" : "Interactive Policy Roadmap"}</span>
          </span>
          <h2 className={`${isHindi ? 'font-hi-title' : 'font-display'} text-2xl sm:text-4xl font-extrabold text-slate-900`}>
            {isHindi ? "नीतिगत प्रभाव एवं सुधार का 4-चरणीय रोडमैप" : "4-Stage Governance & Policy Impact Roadmap"}
          </h2>
          <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600`}>
            {isHindi 
              ? "प्रत्येक स्टॉप और सर्कल पर क्लिक करें और संबंधित नीति मॉड्यूल का संपूर्ण प्रारूप, कार्यप्रणाली व डिलीवरेबल्स पॉप-अप में देखें।"
              : "Explore the interconnected curving milestones below. Click any milestone stop to inspect full deliverables and telemetry in popup modal."}
          </p>
        </div>

        {/* Desktop & Tablet Curving Road Layout */}
        <div className="relative max-w-5xl mx-auto hidden md:block py-10">
          {/* Curving SVG Highway Path in Background */}
          <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
            <svg viewBox="0 0 900 1100" className="w-full h-full" preserveAspectRatio="none">
              {/* Outer Road Bed */}
              <path
                d="M 200,80 C 750,80 750,380 200,380 C -150,380 -150,720 700,720 C 950,720 950,1020 450,1020"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="48"
                strokeLinecap="round"
              />
              {/* Inner Highway Surface */}
              <path
                d="M 200,80 C 750,80 750,380 200,380 C -150,380 -150,720 700,720 C 950,720 950,1020 450,1020"
                fill="none"
                stroke="#F8FAFC"
                strokeWidth="38"
                strokeLinecap="round"
              />
              {/* Center Dashed Lane Markings */}
              <path
                d="M 200,80 C 750,80 750,380 200,380 C -150,380 -150,720 700,720 C 950,720 950,1020 450,1020"
                fill="none"
                stroke="#EA005C"
                strokeWidth="3"
                strokeDasharray="12 12"
                opacity="0.45"
              />
            </svg>
          </div>

          {/* 4 Interactive Stops connected along the roadmap */}
          <div className="relative z-10 space-y-24">
            {policyModules.map((mod, idx) => {
              const isEven = idx % 2 === 1;
              const Icon = mod.icon;
              return (
                <div 
                  key={mod.id}
                  className={`flex items-center gap-8 lg:gap-12 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Circular Milestone Photo Stop Node */}
                  <div className="flex-shrink-0 relative group">
                    {/* Pulsing Glow behind circle */}
                    <div className={`absolute -inset-2 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity ${
                      mod.color === 'pink' ? 'bg-brand-pink/30' : 'bg-brand-green/30'
                    }`} />

                    <button
                      onClick={() => setSelectedModule(mod)}
                      className={`relative w-32 h-32 lg:w-40 lg:h-40 rounded-full border-4 shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 transform group-hover:scale-105 active:scale-95 ${
                        mod.color === 'pink' 
                          ? 'border-brand-pink ring-4 ring-brand-pink/20' 
                          : 'border-brand-green ring-4 ring-brand-green/20'
                      }`}
                      title={`${mod.title} - Click for Full Report`}
                    >
                      <img 
                        src={mod.img} 
                        alt={mod.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                        <span className="px-2.5 py-1 rounded-full bg-white/95 text-slate-900 text-[11px] font-bold shadow-md flex items-center space-x-1">
                          <Icon className="w-3.5 h-3.5 text-brand-pink" />
                          <span>पॉप-अप ↗</span>
                        </span>
                      </div>
                    </button>

                    {/* Milestone Stop Tag Badge */}
                    <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-white text-[10px] font-bold tracking-widest uppercase shadow-md whitespace-nowrap ${
                      mod.color === 'pink' ? 'bg-brand-pink' : 'bg-brand-green'
                    }`}>
                      {mod.stopLabel}
                    </div>
                  </div>

                  {/* Connected Information Card */}
                  <div 
                    onClick={() => setSelectedModule(mod)}
                    className="flex-1 bg-surface-50 hover:bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 hover:border-brand-pink/50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-brand-pink uppercase tracking-wider">
                          {isHindi ? `पॉलिसी मॉड्यूल ${mod.stopNumber}` : `POLICY PILLAR ${mod.stopNumber}`}
                        </span>
                        <span className="text-xs font-bold text-slate-500 group-hover:text-brand-pink flex items-center space-x-1">
                          <span>{isHindi ? "विस्तृत विवरण देखें" : "View Details"}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>

                      <h3 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-lg sm:text-xl font-bold text-slate-900 group-hover:text-brand-pink transition-colors`}>
                        {mod.title}
                      </h3>

                      <p className="text-xs font-semibold text-brand-green">
                        {mod.tagline}
                      </p>

                      <p className={`${isHindi ? 'font-hi-body' : ''} text-xs text-slate-600 line-clamp-2`}>
                        {mod.desc}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center gap-1.5">
                        {mod.deliverables.slice(0, 2).map((del, dIdx) => (
                          <span key={dIdx} className="text-[11px] font-medium bg-white px-2.5 py-1 rounded-lg border border-slate-200 text-slate-700 flex items-center space-x-1">
                            <CheckCircle2 className="w-3 h-3 text-brand-green flex-shrink-0" />
                            <span className="truncate max-w-[240px]">{del}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View: Vertical Roadmap with Curving Milestone Nodes */}
        <div className="md:hidden space-y-8 relative">
          <div className="absolute left-6 top-6 bottom-6 w-1 bg-gradient-to-b from-brand-pink via-brand-green to-brand-pink rounded-full opacity-40 pointer-events-none" />

          {policyModules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div 
                key={mod.id}
                onClick={() => setSelectedModule(mod)}
                className="relative pl-14 cursor-pointer"
              >
                {/* Node Milestone Circle */}
                <div className={`absolute left-0 top-2 w-12 h-12 rounded-full border-2 overflow-hidden shadow-md flex items-center justify-center bg-white ${
                  mod.color === 'pink' ? 'border-brand-pink ring-2 ring-brand-pink/20' : 'border-brand-green ring-2 ring-brand-green/20'
                }`}>
                  <img src={mod.img} alt={mod.title} className="w-full h-full object-cover" />
                </div>

                <div className="bg-surface-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                  <span className="text-[10px] font-bold text-brand-pink uppercase tracking-wider block">
                    {mod.stopLabel}
                  </span>
                  <h3 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-base font-bold text-slate-900`}>
                    {mod.title}
                  </h3>
                  <p className="text-xs text-brand-green font-semibold">
                    {mod.tagline}
                  </p>
                  <button 
                    className="pt-2 text-xs font-bold text-brand-pink flex items-center space-x-1"
                  >
                    <span>{isHindi ? "टैप करें और पूरा विवरण देखें ↗" : "Tap for full details ↗"}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. DETAIL POPUP MODAL (When any roadmap circle / stop is clicked) */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl space-y-5">
            {/* Close Button */}
            <button
              onClick={() => setSelectedModule(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1 pr-10">
              <span className="px-2.5 py-1 rounded-md bg-brand-pink-soft text-brand-pink border border-brand-pink/30 text-xs font-bold uppercase tracking-wider inline-block">
                {selectedModule.stopLabel}
              </span>
              <h2 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-xl sm:text-2xl font-bold text-slate-900 pt-1`}>
                {selectedModule.title}
              </h2>
              <p className="text-xs sm:text-sm text-brand-green font-semibold">
                {selectedModule.tagline}
              </p>
            </div>

            {/* Circular Image & Preview Container */}
            <div className="h-56 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative">
              <img 
                src={selectedModule.img} 
                alt={selectedModule.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-semibold">
                {isHindi ? "फील्ड रिसर्च एवं प्रशासनिक डेटा एकत्रीकरण" : "Field Telemetry & Administrative Governance"}
              </div>
            </div>

            {/* Descriptive Content */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                {isHindi ? "पद्धति एवं रणनीतिक कार्यप्रणाली" : "Methodology & Strategic Framework"}
              </h4>
              <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600 leading-relaxed`}>
                {selectedModule.desc}
              </p>
            </div>

            {/* Full Institutional Deliverables Checklist */}
            <div className="p-4 sm:p-5 rounded-2xl bg-surface-50 border border-slate-200 space-y-2.5">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-pink" />
                <span>{isHindi ? "संस्थागत डिलीवरेबल्स एवं रिपोर्ट्स" : "Institutional Deliverables & Telemetry"}</span>
              </h4>
              <div className="space-y-2 pt-1">
                {selectedModule.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setSelectedModule(null);
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-pink hover:bg-brand-pink-hover text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md active:scale-95"
              >
                <span>{isHindi ? "इस नीति पर परामर्श बुक करें" : "Consult on this Policy"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSelectedModule(null)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs"
              >
                {isHindi ? "बंद करें" : "Close"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Bottom CTA */}
      <div className="bg-gradient-to-r from-slate-900 to-brand-green text-white p-8 sm:p-10 rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-xl sm:text-2xl font-bold text-white mb-1`}>
            {isHindi ? "मंत्रालय अथवा नीतिगत परामर्श हेतु संपर्क करें" : "Request a Policy Advisory & Impact Briefing"}
          </h3>
          <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-200`}>
            {isHindi 
              ? "सरकारी निकायों, नीति समन्वयकों और संस्थागत प्रमुखों के लिए सीधी गोपनीय बैठक।"
              : "Discreet consultations arranged for administrative leadership and foundation heads."}
          </p>
          <div className="pt-3 flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="flex items-center space-x-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 text-slate-100">
              <Mail className="w-3.5 h-3.5 text-brand-pink" />
              <span>contact@crossbench.in</span>
            </span>
            <span className="flex items-center space-x-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 text-slate-100">
              <Mail className="w-3.5 h-3.5 text-brand-green-light" />
              <span>support@crossbench.in</span>
            </span>
          </div>
        </div>
        <button
          onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="px-6 py-3.5 rounded-xl bg-brand-pink hover:bg-brand-pink-hover text-white font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-md flex-shrink-0"
        >
          <span>{isHindi ? "नीतिगत परामर्श बुक करें" : "Schedule Policy Consultation"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
