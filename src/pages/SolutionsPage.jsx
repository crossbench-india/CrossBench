import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Building2, 
  Landmark, 
  Users2, 
  HeartHandshake, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  HelpCircle, 
  Lock 
} from 'lucide-react';

export const SolutionsPage = ({ setActivePage }) => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('parties');
  const isHindi = lang === 'hi';

  const tabContent = {
    parties: {
      title: isHindi ? "राजनीतिक दलों के लिए समाधान" : "Solutions for Political Parties",
      subtitle: isHindi ? "राष्ट्रीय एवं प्रांतीय पार्टी संगठनों हेतु संपूर्ण चुनावी प्रबंधन" : "End-to-End Campaign Strategy for National & Regional Party Organizations",
      challenges: isHindi 
        ? [
            "पारंपरिक गुटबाजी और जमीनी काडर के बीच तालमेल का अभाव",
            "विपक्षी दलों द्वारा सोशल मीडिया पर गढ़े जा रहे आक्रामक नैरेटिव",
            "टिकट वितरण में सटीक डेटा और उम्मीदवार की जीत की संभावना का अभाव",
            "मतदान के दिन अनुकूल वोटरों को बूथ तक लाने में संगठनात्मक विफलता"
          ]
        : [
            "Internal factionalism and lack of synchronized cadre command",
            "Vulnerability to real-time opposition digital disinformation",
            "Candidate selection driven by patronage rather than winnability data",
            "Low turnout conversion of friendly voters on polling day"
          ],
      solution: isHindi
        ? "CROSS BENCH पार्टी नेतृत्व को एक केंद्रीकृत 'इलेक्शन कमांड सेंटर' प्रदान करता है। हम बूथ-लेवल डेटा मैपिंग, 24x7 वॉर रूम ऑपरेशंस, जन-सरोकारों से जुड़ा घोषणापत्र (Manifesto) और निष्पक्ष उम्मीदवार चयन मैट्रिक्स उपलब्ध कराते हैं।"
        : "CROSS BENCH provides central party leadership with an integrated Election Command Center. We deploy pan-state booth demographic maps, 24x7 digital listening war rooms, empirical candidate vetting dossiers, and disciplined cadre mobilization protocols.",
      keyDeliverables: isHindi
        ? [
            "राज्य-स्तरीय चुनावी रणनीति एवं स्विंग वोटर पूर्वानुमान मॉडल",
            "24x7 सेंट्रल वॉर रूम एवं सोशल मीडिया नैरेटिव मैनेजमेंट",
            "डेटा-आधारित घोषणापत्र निर्माण एवं लोक-लुभावन वादों का वित्तीय परीक्षण",
            "बूथ कमांडर सत्यापन और रियल-टाइम टर्नआउट ट्रैकिंग डैशबोर्ड"
          ]
        : [
            "Pan-state electoral strategy and seat conversion probability modeling",
            "24x7 central war room and hyper-local media narrative management",
            "Empirical manifesto formulation and fiscal feasibility stress-testing",
            "Booth commander verification and hourly turnout mobile command portal"
          ]
    },
    candidates: {
      title: isHindi ? "व्यक्तिगत नेताओं एवं जन-प्रतिनिधियों के लिए समाधान" : "Solutions for Individual Leaders & Candidates",
      subtitle: isHindi ? "सांसदों, विधायकों, मंत्रियों एवं भावी प्रत्याशियों का संपूर्ण निर्वाचन क्षेत्र प्रबंधन" : "Constituency Management & Persona Architecture for MPs, MLAs & Aspirants",
      challenges: isHindi 
        ? [
            "क्षेत्र के मतदाताओं में व्यक्तिगत एंटी-इंकंबेंसी अथवा संवाद की कमी",
            "विपक्षी उम्मीदवारों द्वारा स्थानीय मुद्दों पर घेराबंदी",
            "पारंपरिक प्रचार तरीकों का युवा और महिला वोटरों पर घटता असर",
            "पार्टी आलाकमान के समक्ष अपनी मजबूत दावेदारी और प्रभाव का प्रमाण न होना"
          ]
        : [
            "Localized anti-incumbency or perceived voter disconnect",
            "Opposition weaponization of hyper-local civic shortcomings",
            "Diminishing returns of legacy rally formats among youth demographics",
            "Difficulty in evidencing grassroots popularity to party high command"
          ],
      solution: isHindi
        ? "हम नेता की छवि का '360° परसेप्शन मेकओवर' करते हैं। उनके कार्यकाल के विकास कार्यों का प्रामाणिक रिपोर्ट कार्ड, स्थानीय समस्याओं पर त्वरित समाधान की कार्यप्रणाली, और मतदाताओं से निरंतर भावनात्मक संवाद का निजी नेटवर्क तैयार किया जाता है।"
        : "We architect an authentic, resilient leadership persona anchored in tangible developmental milestones. We establish localized grievance response units, train campaign communication teams, and run hyper-targeted digital constituency outreach.",
      keyDeliverables: isHindi
        ? [
            "विधानसभा/संसदीय क्षेत्र की विस्तृत जनसांख्यिकी व एंटी-इंकंबेंसी रिपोर्ट",
            "नेता के 5 वर्षों के कार्यों का प्रभावशाली 'प्रगति रिपोर्ट कार्ड'",
            "भाषण लेखन, मीडिया इंटरव्यू कोचिंग और टीवी डिबेट तैयारी",
            "विधायक/सांसद कार्यालय स्थायी जन-संपर्क कार्यप्रणाली (SOP)"
          ]
        : [
            "Constituency perception audit and hyper-local vulnerability mapping",
            "Impactful 5-year developmental tenure progress report card",
            "Personal speechwriting, public speaking coaching and debate preparation",
            "Constituency Office permanent operations playbook and grievance CRM"
          ]
    },
    ministries: {
      title: isHindi ? "सरकारी मंत्रालयों एवं प्रशासनिक विभागों के लिए समाधान" : "Solutions for Government Ministries & Departments",
      subtitle: isHindi ? "कल्याणकारी योजनाओं का निष्पक्ष थर्ड-पार्टी मूल्यांकन एवं सिटिजन फीडबैक" : "Third-Party Scheme Evaluation & Citizen Feedback Loops for Administration",
      challenges: isHindi 
        ? [
            "सरकारी फाइलों में दर्ज आंकड़ों और जमीनी हकीकत के बीच बड़ा अंतर",
            "डीबीटी और सब्सिडी योजनाओं में अंतिम छोर तक होने वाली तकनीकी विफलताएं",
            "जनता की अनसुलझी शिकायतों का प्रशासनिक असंतोष में तब्दील होना",
            "महत्वपूर्ण सरकारी नीतियों और सुधारों का जनता तक सही संदेश न पहुंच पाना"
          ]
        : [
            "Discrepancies between official administrative dashboards and ground realities",
            "Last-mile Direct Benefit Transfer (DBT) biometric and banking drop-offs",
            "Unresolved civic grievances fermenting into broad anti-governance sentiment",
            "Complex policy reforms being miscommunicated or distorted by rumors"
          ],
      solution: isHindi
        ? "CROSS BENCH प्रशासनिक नेतृत्व को 'स्वतंत्र थर्ड-पार्टी विंग' के रूप में सशक्त बनाता है। हम वास्तविक लाभार्थियों के दरवाजे पर जाकर योजनाओं का प्रभाव नापते हैं, लीकेज उजागर करते हैं, और सुशासन को पारदर्शी बनाने की ठोस सिफारिशें देते हैं।"
        : "CROSS BENCH operates as an independent evaluation faculty for administrative leaders. We conduct doorstep beneficiary telemetry, benchmark last-mile DBT delivery, detect early administrative friction, and design transparent public communication frameworks.",
      keyDeliverables: isHindi
        ? [
            "योजना लाभार्थी संतुष्टि का स्वतंत्र जिला-वार फील्ड ऑडिट",
            "अंतिम छोर तक डायरेक्ट बेनिफिट ट्रांसफर (DBT) लीकेज रिपोर्ट",
            "प्रशासनिक असंतोष अर्ली-वार्निंग डैशबोर्ड (Early-Warning Telemetry)",
            "नागरिक-हितैषी नीतिगत सुधार एवं प्रशासनिक सरलीकरण प्रस्ताव"
          ]
        : [
            "Independent district-level welfare scheme beneficiary satisfaction audits",
            "Last-mile Direct Benefit Transfer delivery leakage and barrier telemetry",
            "Public grievance early-warning dashboard for administrative heads",
            "Citizen-centric policy refinement and procedural simplification proposals"
          ]
    },
    ngos: {
      title: isHindi ? "एनजीओ एवं थिंक टैंक्स के लिए समाधान" : "Solutions for NGOs & Think Tanks",
      subtitle: isHindi ? "जमीनी शोध को नीतिगत फैसलों और विधायी सुधारों में बदलने की रणनीति" : "Transforming Grassroots Research into High-Impact Legislative Policy Reform",
      challenges: isHindi 
        ? [
            "गहन फील्ड रिसर्च होने के बावजूद नीति-निर्माताओं और सांसदों तक पहुंच का अभाव",
            "अकादमिक भाषा के कारण मीडिया और जनता में रिपोर्ट का प्रभाव न बन पाना",
            "विभिन्न हितधारकों और सरकारी मंत्रालयों के साथ औपचारिक संवाद में बाधा",
            "सामाजिक पहलों के लिए तथ्य-आधारित नीतिगत प्रभाव का प्रदर्शन न होना"
          ]
        : [
            "Rich grassroots data failing to reach key legislative committee agendas",
            "Academic research reports lacking punchy, actionable policy memorandums",
            "Friction in orchestrating formal consultations with relevant ministry officials",
            "Difficulty in measuring and demonstrating tangible regulatory policy change"
          ],
      solution: isHindi
        ? "हम नागरिक समाज और शासन व्यवस्था के बीच का पुल बनते हैं। हम आपके जमीनी आंकड़ों को उच्च-स्तरीय नीतिगत श्वेतपत्रों, संसदीय ब्रीफिंग्स और बहु-हितधारक गोलमेज बैठकों में बदलते हैं, जिससे वास्तविक नीतिगत बदलाव संभव होता है।"
        : "We bridge the gap between civil society evidence and policy implementation. We convert field telemetry into high-authority policy whitepapers, draft legislative amendments for parliamentarians, and curate high-level multi-stakeholder policy dialogues.",
      keyDeliverables: isHindi
        ? [
            "तथ्य-आधारित नीतिगत श्वेतपत्र एवं अनुसंधान रिपोर्ट्स (Whitepapers)",
            "संसद सदस्यों के लिए विधायी संशोधन प्रारूप एवं प्राइवेट मेंबर बिल ड्राफ्ट",
            "नीति-निर्माताओं और मंत्रालयों के साथ उच्च-स्तरीय गोलमेज बैठकें",
            "नीतिगत सुधार अभियान हेतु रणनीतिक मीडिया एवं एडवोकेसी किट"
          ]
        : [
            "High-authority policy whitepapers and empirical baseline studies",
            "Actionable legislative amendment proposals and private member bill briefs",
            "Multi-stakeholder consultative roundtables with administrative directors",
            "Strategic media advocacy campaigns for regulatory and legal reform"
          ]
    }
  };

  const tabs = [
    { id: 'parties', label: isHindi ? "राजनीतिक दल" : "Political Parties", icon: Building2 },
    { id: 'candidates', label: isHindi ? "जन-प्रतिनिधि" : "Individual Leaders", icon: Landmark },
    { id: 'ministries', label: isHindi ? "सरकारी मंत्रालय" : "Ministries & Departments", icon: Users2 },
    { id: 'ngos', label: isHindi ? "एनजीओ व थिंक टैंक" : "NGOs & Civil Society", icon: HeartHandshake }
  ];

  const current = tabContent[activeTab];

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-brand-pink" />
          <span>{isHindi ? "अनुकूलित समाधान" : "TAILORED SOLUTIONS"}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {isHindi ? "हितधारक अनुसार विशेषज्ञ परामर्श समाधान" : "Bespoke Solutions by Stakeholder"}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {isHindi 
            ? "राजनीतिक दल, जन-प्रतिनिधि, सरकारी मंत्रालय या गैर-सरकारी संस्था—CROSS BENCH प्रत्येक वर्ग की विशिष्ट प्राथमिकताओं के अनुकूल रणनीति तैयार करता है।"
            : "Whether governing, contesting, or advocating—we engineer specialized advisory frameworks aligned with each stakeholder's operational reality."}
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 max-w-3xl mx-auto shadow-sm">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                isActive
                  ? 'bg-brand-pink text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Detailed Content */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-10">
        <div>
          <span className="text-xs font-bold text-brand-green tracking-widest uppercase">
            {isHindi ? "विशिष्ट रणनीतिक रूपरेखा" : "SPECIALIZED ENGAGEMENT BLUEPRINT"}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            {current.title}
          </h2>
          <p className="text-xs sm:text-sm text-brand-pink font-semibold mt-1">
            {current.subtitle}
          </p>
        </div>

        {/* Challenges vs Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Critical Challenges */}
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-50 border border-slate-200 space-y-4">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
              <HelpCircle className="w-4 h-4 text-brand-pink" />
              <span>{isHindi ? "प्रमुख चुनौतियाँ जिनका सामना होता है" : "Key Industry Challenges"}</span>
            </h3>
            <div className="space-y-3 pt-2">
              {current.challenges.map((ch, i) => (
                <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-pink mt-2 flex-shrink-0" />
                  <span>{ch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cross Bench Solution */}
          <div className="p-6 sm:p-8 rounded-2xl bg-brand-green-soft border border-brand-green/30 space-y-4">
            <h3 className="text-xs sm:text-sm font-bold text-brand-green uppercase tracking-wider flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>{isHindi ? "क्रॉस बेंच का समाधान" : "The CROSS BENCH Methodology"}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed pt-1">
              {current.solution}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center space-x-1.5 text-xs text-brand-green font-bold">
                <Lock className="w-3.5 h-3.5" />
                <span>{isHindi ? "पूर्ण गोपनीयता अनुबंध द्वारा सुरक्षित" : "Protected under strict non-disclosure terms"}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-50 border border-slate-200 space-y-4">
          <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
            {isHindi ? "संस्थागत डिलीवरेबल्स एवं आउटपुट्स" : "Concrete Deliverables & Operational Outputs"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {current.keyDeliverables.map((item, i) => (
              <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
          <p className="text-xs text-slate-500 font-medium">
            {isHindi 
              ? "इस वर्ग के अंतर्गत परामर्श आरंभ करने के लिए सीधे हमारे प्रैक्टिस हेड से संपर्क करें।"
              : "Direct consultations arranged with the relevant practice director."}
          </p>
          <button
            onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-pink hover:bg-brand-pink-hover text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-sm"
          >
            <span>{isHindi ? "गोपनीय परामर्श बुक करें" : "Initiate Consultation"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
