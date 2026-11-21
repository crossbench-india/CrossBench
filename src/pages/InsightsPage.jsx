import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  Download, 
  X, 
  CheckCircle2 
} from 'lucide-react';

export const InsightsPage = ({ setActivePage }) => {
  const { lang, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModal, setActiveModal] = useState(null);
  const isHindi = lang === 'hi';

  const publications = [
    {
      id: "paper-1",
      category: "political",
      tag: isHindi ? "चुनावी रणनीति" : "ELECTORAL STRATEGY",
      date: isHindi ? "फरवरी 2026" : "February 2026",
      title: isHindi 
        ? "त्रिकोणीय और बहुकोणीय विधानसभा चुनावों में 1.8% स्विंग वोटर्स का गणित" 
        : "The Architecture of Swing Voters in Multi-Cornered State Contests",
      readTime: isHindi ? "8 मिनट पठन" : "8 min read",
      author: isHindi ? "क्रॉस बेंच चुनावी शोध प्रकोष्ठ" : "CROSS BENCH Electoral Research Desk",
      abstract: isHindi 
        ? "भारतीय राज्यों में जहां अब दो-दलीय मुकाबला त्रिकोणीय या चतुष्कोणीय हो चुका है, वहां जीत का अंतर घटकर 1.5% से 2% के बीच रह गया है। यह शोध पत्र दर्शाता है कि कैसे 50 विशिष्ट बूथों पर सूक्ष्म-रणनीति पूरे विधानसभा क्षेत्र का परिणाम पलट देती है।"
        : "In increasingly fragmented state elections featuring triangular or quadrangular contests, winning margins frequently narrow below 2%. This empirical study models how micro-targeted interventions across just 50 sensitive polling booths can flip entire legislative outcomes.",
      keyFindings: isHindi 
        ? [
            "पारंपरिक जातिगत गठबंधनों की तुलना में 'लाभार्थी वर्ग' अधिक लोचदार (Flexible) मतदान व्यवहार दिखा रहा है।",
            "मतदान से ठीक 72 घंटे पहले लिया गया निर्णय 18% से 22% मतदाताओं के रुख को बदलता है।",
            "डिजिटल दुष्प्रचार का सबसे अधिक असर उन मतदाताओं पर होता है जो किसी दल से औपचारिक रूप से जुड़े नहीं हैं।"
          ]
        : [
            "Welfare beneficiary cohorts exhibit significantly higher electoral mobility than traditional caste vote banks.",
            "Decisions made in the final 72 hours before voting account for 18% to 22% of swing voter conversion.",
            "Dark social disinformation disproportionately impacts unaligned non-cadre independent voters."
          ]
    },
    {
      id: "paper-2",
      category: "policy",
      tag: isHindi ? "लोक नीति एवं सुशासन" : "PUBLIC POLICY",
      date: isHindi ? "जनवरी 2026" : "January 2026",
      title: isHindi 
        ? "ग्रामीण भारत में डायरेक्ट बेनिफिट ट्रांसफर (DBT) की अंतिम छोर तक प्रभावशीलता का मूल्यांकन" 
        : "Evaluating Last-Mile DBT Efficiency in Rural Welfare Subsidies",
      readTime: isHindi ? "10 मिनट पठन" : "10 min read",
      author: isHindi ? "पब्लिक पॉलिसी एवं गवर्नेंस विंग" : "CROSS BENCH Public Policy Practice",
      abstract: isHindi 
        ? "14 पिछड़े जिलों के 12,000 लाभार्थियों से जुटाए गए फील्ड ऑडिट आंकड़ों के आधार पर यह अध्ययन डीबीटी ट्रांसफर में होने वाली बायोमेट्रिक विफलता, बैंकिंग कॉरेस्पोंडेंट की दूरी और जन-शिकायतों के निवारण का निष्पक्ष लेखा-जोखा प्रस्तुत करता है।"
        : "Based on empirical field audits encompassing 12,000 rural beneficiaries across 14 aspirational districts. Evaluates Direct Benefit Transfer transaction failures, banking correspondent proximity, and administrative grievance redressal mechanisms.",
      keyFindings: isHindi 
        ? [
            "लगभग 7.4% लेन-देन बायोमेट्रिक अथवा आधार-सीडिंग की त्रुटि के कारण पहले प्रयास में विफल हो जाते हैं।",
            "गाँव में बैंकिंग कियोस्क तक पहुँचने में औसतन प्रति व्यक्ति ₹80 से ₹140 का अतिरिक्त यात्रा खर्च आता है।",
            "सरल स्थानीय भाषा में एसएमएस अलर्ट से लाभार्थी जागरूकता में 43% की बढ़ोतरी दर्ज की गई।"
          ]
        : [
            "Initial transaction failure rates average 7.4% due to Aadhaar seeding and biometric friction.",
            "Beneficiaries spend between ₹80 and ₹140 on transportation to reach rural banking kiosks.",
            "Localized vernacular SMS alerts improve welfare receipt awareness by over 43%."
          ]
    },
    {
      id: "paper-3",
      category: "warroom",
      tag: isHindi ? "वॉर रूम प्रबंधन" : "WAR ROOM OPERATIONS",
      date: isHindi ? "दिसंबर 2025" : "December 2025",
      title: isHindi 
        ? "आधुनिक चुनावी वॉर रूम में डिजिटल दुष्प्रचार और नैरेटिव नियंत्रण के 45-मिनट प्रोटोकॉल" 
        : "Countering Algorithmic Disinformation in Real-Time Election War Rooms",
      readTime: isHindi ? "7 मिनट पठन" : "7 min read",
      author: isHindi ? "डिजिटल इंटेलिजेंस एवं स्ट्रेटेजी सेल" : "CROSS BENCH Digital Intelligence Cell",
      abstract: isHindi 
        ? "डीपफेक, एआई-जनित ऑडियो और व्हाट्सएप पर फैलने वाले भ्रामक प्रचार का मुकाबला करने के लिए आधुनिक चुनाव वॉर रूम का संगठनात्मक ढांचा कैसा होना चाहिए? यह पेपर 45 मिनट के भीतर आधिकारिक काउंटर-नैरेटिव स्थापित करने की कार्यप्रणाली रेखांकित करता है।"
        : "Structural protocols for election war rooms to identify synthetic deepfakes, coordinated misinformation surges, and execute authoritative multimedia rebuttals within 45-minute tactical narrative windows.",
      keyFindings: isHindi 
        ? [
            "अफवाह फैलने के पहले 60 मिनट में यदि खंडन न आए, तो 70% मतदाता उसे सच मान लेते हैं।",
            "केवल शब्दों में खंडन निष्प्रभावी होता है; डेटा और वीडियो सबूत के साथ काउंटर-अटैक 3 गुना अधिक प्रभावी है।",
            "काडर नेटवर्क को पहले 15 मिनट में आधिकारिक फैक्ट-चेक किट उपलब्ध कराना अनिवार्य है।"
          ]
        : [
            "Uncontested misinformation gains permanent perceptual traction among 70% of voters after 60 minutes.",
            "Textual denials fail; verified visual rebuttals and source video side-by-sides are 3x more effective.",
            "Equipping ground cadre with official fact-check kits within 15 minutes prevents grassroots demoralization."
          ]
    },
    {
      id: "paper-4",
      category: "political",
      tag: isHindi ? "चुनावी रणनीति" : "ELECTORAL STRATEGY",
      date: isHindi ? "नवंबर 2025" : "November 2025",
      title: isHindi 
        ? "विधायक और सांसद के 5-वर्षीय कार्यकाल के एंटी-इंकंबेंसी का वैज्ञानिक निदान" 
        : "Deconstructing Legislative Anti-Incumbency: A 5-Year Tenure Audit",
      readTime: isHindi ? "9 मिनट पठन" : "9 min read",
      author: isHindi ? "क्रॉस बेंच चुनावी शोध प्रकोष्ठ" : "CROSS BENCH Electoral Research Desk",
      abstract: isHindi 
        ? "जन-प्रतिनिधियों के प्रति मतदाताओं की नाराजगी के वास्तविक कारण क्या होते हैं? 25 विधानसभा क्षेत्रों के अध्ययन से यह सिद्ध होता है कि 60% असंतोष व्यक्तिगत नहीं, बल्कि स्थानीय प्रशासन और सुलभता (Accessibility) से संबंधित होता है।"
        : "An empirical autopsy of voter dissatisfaction across 25 assembly constituencies. Reveals that over 60% of perceived anti-incumbency stems from office accessibility and local administrative apathy rather than ideological opposition.",
      keyFindings: isHindi 
        ? [
            "नियमित जन-सुनवाई कार्यालय चलाने वाले नेताओं के विरुद्ध एंटी-इंकंबेंसी 35% कम पाई गई।",
            "स्थानीय विकास निधि (MLALAD/MPLAD) के सही प्रचार से मतदाताओं में संतोष का स्तर दोगुना हो जाता है।",
            "युवाओं में रोजगार और स्थानीय बुनियादी ढांचे के वादों का ऑडिट जीत-हार का प्रमुख कारक बनता है।"
          ]
        : [
            "Lawmakers running structured weekly public grievance clinics reduced net anti-incumbency by 35%.",
            "Transparent constituency development fund progress report cards double public approval ratings.",
            "Youth employment grievances represent the single largest variable determining incumbent retention."
          ]
    }
  ];

  const filtered = selectedFilter === 'all' 
    ? publications 
    : publications.filter(p => p.category === selectedFilter);

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-brand-green" />
          <span>{isHindi ? "संस्थागत शोध एवं विश्लेषण" : "RESEARCH & THOUGHT LEADERSHIP"}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {isHindi ? "दृष्टिकोण, श्वेतपत्र एवं चुनावी विश्लेषण" : "Perspectives, Whitepapers & Policy Briefs"}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
          {isHindi 
            ? "हमारे वरिष्ठ शोधकर्ताओं और रणनीतिकारों द्वारा तैयार किए गए प्रामाणिक श्वेतपत्र, जो भारतीय राजनीति और लोक नीति के सबसे जटिल सवालों के वैज्ञानिक उत्तर प्रस्तुत करते हैं।"
            : "Rigorous, non-partisan empirical whitepapers authored by our senior practice faculty, addressing the most pressing strategic dilemmas in modern Indian elections and public administration."}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { id: 'all', label: isHindi ? "सभी शोध पत्र" : "All Publications" },
          { id: 'political', label: isHindi ? "चुनावी रणनीति" : "Electoral Strategy" },
          { id: 'policy', label: isHindi ? "लोक नीति एवं सुशासन" : "Public Policy" },
          { id: 'warroom', label: isHindi ? "वॉर रूम प्रबंधन" : "War Room Tactics" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedFilter(tab.id)}
            className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedFilter === tab.id
                ? 'bg-brand-pink text-white shadow-sm'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Publications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((pub) => (
          <div
            key={pub.id}
            className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="px-3 py-1 rounded-md bg-brand-green-soft text-brand-green font-bold uppercase tracking-wider text-[11px]">
                  {pub.tag}
                </span>
                <span className="flex items-center space-x-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{pub.readTime}</span>
                </span>
              </div>

              <h2 className="font-display font-bold text-xl text-slate-900 group-hover:text-brand-pink transition-colors leading-snug">
                {pub.title}
              </h2>

              <p className="text-xs text-brand-green font-bold">
                {pub.author} • {pub.date}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pub.abstract}
              </p>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setActiveModal(pub)}
                className="text-xs sm:text-sm text-brand-pink font-bold flex items-center space-x-1.5 group-hover:underline"
              >
                <span>{isHindi ? "पूर्ण शोध पत्र एवं निष्कर्ष देखें" : "Read Executive Brief & Findings"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => alert(isHindi ? "पीडीएफ ब्रीफ डाउनलोड किया जा रहा है..." : "Downloading Executive Brief PDF...")}
                className="p-2.5 rounded-lg bg-surface-50 hover:bg-slate-100 text-slate-700 border border-slate-200"
                title="Download Executive PDF Brief"
              >
                <Download className="w-4 h-4 text-brand-green" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reader Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-brand-pink tracking-widest uppercase">
                {activeModal.tag} • {activeModal.date}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {activeModal.title}
              </h2>
              <p className="text-xs text-brand-green mt-1 font-bold">
                {activeModal.author}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-50 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-1.5">
                {isHindi ? "संक्षिप्त सारांश (Executive Abstract)" : "Executive Abstract"}
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {activeModal.abstract}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
                {isHindi ? "शोध के प्रमुख निष्कर्ष (Key Findings & Telemetry)" : "Key Empirical Findings & Takeaways"}
              </h4>
              <div className="space-y-2">
                {activeModal.keyFindings.map((finding, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 p-3 rounded-lg bg-surface-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                    <span>{finding}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => alert(isHindi ? "शोध पत्र की पूर्ण पीडीएफ प्रति डाउनलोड हो रही है..." : "Downloading Full Empirical Dossier...")}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs sm:text-sm flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>{isHindi ? "पूर्ण श्वेतपत्र (PDF) डाउनलोड करें" : "Download Full Dossier (PDF)"}</span>
              </button>
              <button
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold"
              >
                {isHindi ? "बंद करें" : "Close Reader"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
