import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  FileText, 
  Landmark, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Search, 
  MessageSquareWarning, 
  GraduationCap 
} from 'lucide-react';

export const PublicPolicyPage = ({ setActivePage }) => {
  const { lang, t } = useLanguage();
  const isHindi = lang === 'hi';

  const policyModules = [
    {
      icon: Search,
      img: "./images/analytics.jpg",
      title: isHindi ? "कल्याणकारी योजनाओं का थर्ड-पार्टी स्वतंत्र मूल्यांकन" : "Welfare Scheme Third-Party Impact Assessments",
      tagline: isHindi ? "अंतिम छोर तक सरकारी लाभ पहुँचने का निष्पक्ष ऑडिट" : "Rigorous Empirical Evaluation of Direct Benefit Transfer (DBT) Schemes",
      desc: isHindi 
        ? "सरकारी योजनाओं के क्रियान्वयन में आने वाली जमीनी रुकावटों, बायोमेट्रिक व तकनीकी विफलता और लीकेज का स्वतंत्र फील्ड ऑडिट। मंत्रालयों और नीति निर्धारकों को वास्तविक लाभार्थियों से मिला निष्पक्ष फीडबैक।"
        : "Field audit telemetry across central and state welfare initiatives. We measure last-mile DBT delivery efficacy, identification leakages, bureaucratic delays, and citizen satisfaction to give leadership an unvarnished audit.",
      deliverables: isHindi 
        ? [
            "योजना प्रभाव मूल्यांकन स्कोरकार्ड (Scheme Health Index)",
            "अंतिम छोर तक लीकेज और लाभार्थी असुविधा रिपोर्ट",
            "योजना सरलीकरण एवं प्रशासनिक सुधार का नीतिगत प्रारूप"
          ]
        : [
            "Scheme Health Index & beneficiary satisfaction scorecards",
            "Last-mile leakage and administrative bottleneck telemetry",
            "Actionable policy refinement and workflow simplification blueprints"
          ]
    },
    {
      icon: Landmark,
      img: "./images/governance.jpg",
      title: isHindi ? "संसदीय अनुसंधान एवं विधायी ब्रीफिंग्स" : "Legislative Research & Parliamentary Briefings",
      tagline: isHindi ? "सांसदों और नीति-निर्माताओं के लिए तथ्यात्मक आधार" : "Objective, High-Authority Briefings on Draft Legislation & Budgets",
      desc: isHindi 
        ? "संसद या विधानसभा में पेश होने वाले विधेयकों, स्थायी समितियों की रिपोर्ट्स और राज्य बजटों का गहन विश्लेषण। जन-प्रतिनिधियों को सटीक सवाल, शून्यकाल के मुद्दे और ठोस बहस सामग्री उपलब्ध कराना।"
        : "In-depth legislative briefs analyzing draft legislation, parliamentary standing committee reports, and state budgetary outlays. Equipping lawmakers with authoritative empirical data for floor debates.",
      deliverables: isHindi 
        ? [
            "2-पेज कार्यकारी विधायी ब्रीफ (Actionable Legislative Briefs)",
            "विभिन्न राज्यों के नीतिगत मॉडल का तुलनात्मक अध्ययन",
            "संसदीय प्रश्नों और शून्यकाल बहसों के लिए प्रामाणिक ड्राफ्ट्स"
          ]
        : [
            "Executive 2-page actionable legislative briefs for lawmakers",
            "Cross-state policy comparative benchmarking dossiers",
            "Draft questions, zero-hour interventions, and private member bills"
          ]
    },
    {
      icon: MessageSquareWarning,
      img: "./images/team_story.jpg",
      title: isHindi ? "जन-भावना एवं लोक शिकायत निवारण विश्लेषण" : "Citizen Sentiment & Public Grievance Feedback Loops",
      tagline: isHindi ? "असंतोष के बड़े रूप लेने से पहले अर्ली-वार्निंग सिस्टम" : "Proactive Early-Warning Systems on Public Discontent & Services",
      desc: isHindi 
        ? "टेलीफोनिक पोल्स, फोकस ग्रुप चर्चा (FGDs) और प्रशासनिक डेटा के संयोजन से स्वास्थ्य, शिक्षा, सड़क, बिजली और कृषि पर जनता के मूड की सटीक ट्रैकिंग। सरकार के लिए पूर्व-चेतावनी प्रणाली।"
        : "Synthesizing localized grievance registries, quantitative telephonic polling, and qualitative focus group discussions to detect emerging public frustration before it escalates into political headwinds.",
      deliverables: isHindi 
        ? [
            "प्रशासनिक असंतोष अर्ली-वार्निंग डैशबोर्ड (Early-Warning Telemetry)",
            "क्षेत्र-वार लोक सेवा संतुष्टि सूचकांक (Public Service Satisfaction Index)",
            "संकट निवारण हेतु नागरिक संवाद एवं जन-संपर्क कार्ययोजना"
          ]
        : [
            "Public grievance early-warning dashboard for administrative leadership",
            "District-level public services delivery satisfaction benchmarks",
            "Civic engagement and proactive grievance redressal communication kits"
          ]
    },
    {
      icon: GraduationCap,
      img: "./images/delhi_campaign.jpg",
      title: isHindi ? "एनजीओ एवं थिंक टैंक्स के लिए रणनीतिक एडवोकेसी" : "Strategic Policy Advocacy for NGOs & Think Tanks",
      tagline: isHindi ? "जमीनी शोध को नीतिगत फैसलों में बदलने का पुल" : "Bridging Grassroots Civil Society Evidence with Policy Makers",
      desc: isHindi 
        ? "गैर-सरकारी संगठनों, परोपकारी ट्रस्टों और शोध संस्थानों के फील्ड डेटा को उच्च-स्तरीय नीतिगत श्वेतपत्रों, विधायी संशोधन प्रस्तावों और मंत्रालयों के साथ गोलमेज बैठकों में बदलना।"
        : "Translating complex social, legal, and environmental field studies into compelling, empirical policy whitepapers, regulatory memorandums, and multi-stakeholder consultative roundtables.",
      deliverables: isHindi 
        ? [
            "तथ्य-आधारित नीतिगत श्वेतपत्र एवं अनुसंधान रिपोर्ट्स (Whitepapers)",
            "मंत्रालयों एवं आयोगों के लिए नीति संशोधन ज्ञापन (Policy Memorandums)",
            "बहु-हितधारक गोलमेज परामर्श बैठकों का संचालन व समन्वय"
          ]
        : [
            "Evidence-based policy whitepapers and sectoral baseline studies",
            "Targeted policy amendment memorandums for relevant ministries",
            "Multi-stakeholder consultative roundtables and advocacy collateral"
          ]
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
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

      {/* Modules with Photos */}
      <div className="space-y-10">
        {policyModules.map((mod, idx) => {
          const Icon = mod.icon;
          return (
            <div 
              key={idx}
              className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-card-hover transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Photo Col (4 cols) */}
                <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-64 lg:h-72">
                  <img 
                    src={mod.img} 
                    alt={mod.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Col (8 cols) */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-pink-soft text-brand-pink flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-brand-pink tracking-widest uppercase">
                        {isHindi ? `पॉलिसी मॉड्यूल 0${idx + 1}` : `POLICY PILLAR 0${idx + 1}`}
                      </span>
                      <h2 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-xl sm:text-2xl font-bold text-slate-900`}>
                        {mod.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-green font-semibold">
                    {mod.tagline}
                  </p>

                  <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600 leading-relaxed`}>
                    {mod.desc}
                  </p>

                  <div className="p-4 rounded-xl bg-surface-50 border border-slate-200 space-y-2">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-brand-pink" />
                      <span>{isHindi ? "संस्थागत डिलीवरेबल्स एवं रिपोर्ट्स" : "Institutional Deliverables & Telemetry"}</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {mod.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-pink flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
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
