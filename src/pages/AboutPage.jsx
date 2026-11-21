import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Scale, 
  ShieldCheck, 
  Building, 
  MapPin, 
  Award, 
  CheckCircle, 
  Lock, 
  ArrowRight 
} from 'lucide-react';

export const AboutPage = ({ setActivePage }) => {
  const { lang, t } = useLanguage();
  const isHindi = lang === 'hi';

  const ethicalCodes = [
    {
      num: "01",
      title: isHindi ? "दलगत निष्पक्षता (Absolute Neutrality)" : "Absolute Partisan Independence",
      desc: isHindi 
        ? "हम किसी एक राजनीतिक विचारधारा या दल के स्थायी बंधक नहीं हैं। हमारा प्रत्येक विश्लेषण केवल प्रामाणिक सांख्यिकी, जमीनी सच्चाई और जनहित पर आधारित होता है।"
        : "We refuse permanent partisan loyalty. Our counsel is anchored strictly in empirical data science, demographic reality, and democratic governance outcomes."
    },
    {
      num: "02",
      title: isHindi ? "अभेद्य डेटा गोपनीयता (Air-Gapped Confidentiality)" : "Air-Gapped Client Confidentiality",
      desc: isHindi 
        ? "एक क्लाइंट का डेटा, आंतरिक सर्वे और चुनावी रणनीति किसी अन्य दल या नेता के साथ कभी साझा नहीं की जाती। सभी टीमें अलग-अलग कानूनी गोपनीयता अनुबंधों (NDA) से बंधी होती हैं।"
        : "Client intelligence, polling databases, and war room blueprints are firewalled behind strict non-disclosure legal covenants. No data cross-pollination is ever permitted."
    },
    {
      num: "03",
      title: isHindi ? "तथ्यों का आदर (Empirical Grounding)" : "Empirical Truth Over Echo-Chambers",
      desc: isHindi 
        ? "हम सुनी-सुनाई धारणाओं या ड्राइंग रूम की गपशप को खारिज करते हैं। हमारा हर निष्कर्ष हजारों मतदाताओं से लिए गए वैज्ञानिक सैंपलिंग डेटा पर टिका होता है।"
        : "We reject anecdotal speculation and confirmation bias. Every strategy is forged through rigorous field sampling, margin-of-error testing, and statistical verification."
    },
    {
      num: "04",
      title: isHindi ? "लोकतांत्रिक संवर्धन (Democratic Strengthening)" : "Democratic System Enhancement",
      desc: isHindi 
        ? "चाहे चुनाव में मतदान प्रतिशत बढ़ाना हो या कल्याणकारी योजनाओं में लीकेज रोकना, हमारा सर्वोच्च लक्ष्य भारतीय लोकतंत्र और सुशासन को सशक्त बनाना है।"
        : "Whether mobilizing citizen voter turnout or streamlining rural welfare delivery, our primary mission is to make democratic institutions accountable and effective."
    },
    {
      num: "05",
      title: isHindi ? "वरिष्ठ नेतृत्व द्वारा संचालन (Executive Discretion)" : "Senior Practice Directorship",
      desc: isHindi 
        ? "संवेदनशील रणनीतिक मामलों को नौसिखिए इंटर्न्स के हवाले नहीं किया जाता। सभी क्लाइंट्स को वरिष्ठ प्रैक्टिस डायरेक्टर्स और अनुभवी नीति विशेषज्ञों का सीधा मार्गदर्शन मिलता है।"
        : "High-stakes political strategy and governmental audits are conducted exclusively by seasoned practice directors, former civil servants, and senior data scientists."
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-green-soft border border-brand-green/30 text-brand-green text-xs font-bold uppercase tracking-wider">
          <Scale className="w-3.5 h-3.5" />
          <span>{isHindi ? "संस्थागत दर्शन" : "INSTITUTIONAL PHILOSOPHY"}</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          {isHindi 
            ? "संसदीय गरिमा और निष्पक्षता का प्रतीक — 'क्रॉस बेंच'" 
            : "The Crossbench Doctrine: Independence as Strategic Capital"}
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
          {isHindi
            ? "संसदीय लोकतंत्र में सत्ता और विपक्ष की कतारों के बीच एक विशेष स्थान होता है—'क्रॉस-बेंच'। यहाँ वे सदस्य बैठते हैं जो किसी भी दल के घोषणापत्र से नहीं, बल्कि केवल देशहित और निष्पक्ष विवेक से निर्णय लेते हैं।"
            : "In parliamentary democracy, the crossbenches represent the vanguard of non-aligned independence. Lawmakers sitting across the aisle evaluate legislation on sheer merit, unaffected by party whips. This is the cornerstone of CROSS BENCH."}
        </p>
      </div>

      {/* Origin & Dual Engine Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs font-bold text-brand-green tracking-widest uppercase">
            {isHindi ? "हमारी उत्पत्ति एवं उद्देश्य" : "OUR GENESIS & RAISON D'ÊTRE"}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            {isHindi 
              ? "चुनाव जीतने की कुशलता और सुशासन चलाने की समझ का सेतु" 
              : "Bridging the Chasm Between Winning Elections and Governing Effectively"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {isHindi
              ? "भारतीय राजनीति में अधिकांश संस्थाएं या तो केवल पीआर और चुनाव प्रचार का काम करती हैं, या फिर केवल अकादमिक रिसर्च का। परंतु वास्तविक लोकतंत्र में इन दोनों का अलग रहना विफलता का कारण बनता है। बिना सुशासन के चुनाव नहीं जीते जा सकते, और बिना चुनावी जीत के सुशासन लागू नहीं किया जा सकता।"
              : "Most consulting outfits in India operate either purely as transactional election PR agencies or as detached academic think tanks. In modern governance, this separation is fatal. A government cannot endure without political dexterity, and a political mandate quickly evaporates without governance competence."}
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {isHindi
              ? "CROSS BENCH की स्थापना इसी खाई को पाटने के लिए की गई है। हम दलों को जनादेश दिलाते हैं और सरकारों को उस जनादेश को मापने योग्य जनकल्याण में बदलने में सहयोग करते हैं।"
              : "CROSS BENCH was founded to integrate both disciplines under a single, non-partisan institutional umbrella: rigorous political science to win power, and empirical policy engineering to exercise power responsibly."}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-brand-green font-bold">
            <span className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-brand-green-soft">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{isHindi ? "100% गैर-पक्षपातपूर्ण" : "100% Non-Partisan"}</span>
            </span>
            <span className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-brand-pink-soft text-brand-pink">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{isHindi ? "अभेद्य डेटा गोपनीयता" : "Air-Gapped Data"}</span>
            </span>
            <span className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>{isHindi ? "संसदीय गरिमा" : "Parliamentary Dignity"}</span>
            </span>
          </div>
        </div>

        {/* Photo Card */}
        <div className="lg:col-span-5 bg-white p-3 rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
          <img 
            src="./images/team_story.jpg" 
            alt="Strategic Team"
            className="w-full h-72 rounded-2xl object-cover"
          />
          <div className="p-4 text-center">
            <span className="text-xs font-bold text-slate-900 block">Senior Practice Directorate</span>
            <span className="text-[11px] text-slate-500">Experienced Policy Specialists & Pollsters</span>
          </div>
        </div>
      </div>

      {/* The 5 Ethical Commandments */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-brand-pink tracking-widest uppercase">
            {isHindi ? "सत्यनिष्ठा के 5 नियम" : "THE 5 CORE COMMITMENTS"}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            {isHindi ? "हमारे नैतिक सिद्धांत एवं नियम" : "Our Ethical Operating Principles"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ethicalCodes.map((code, idx) => (
            <div 
              key={idx}
              className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-card-hover space-y-3 relative transition-all"
            >
              <span className="font-display font-extrabold text-3xl text-brand-green/20 block">
                {code.num}
              </span>
              <h3 className="font-display font-bold text-lg text-slate-900">
                {code.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {code.desc}
              </p>
            </div>
          ))}

          {/* 6th Card: Confidentiality Assurance */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-brand-pink-soft to-white border border-brand-pink/30 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <Lock className="w-6 h-6 text-brand-pink" />
              <h3 className="font-display font-bold text-lg text-slate-900">
                {isHindi ? "गोपनीयता गारंटी" : "Confidentiality Covenant"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isHindi
                  ? "हमारे सभी अनुबंध कानूनी रूप से बाध्यकारी गैर-प्रकटीकरण समझौतों (NDAs) से सुरक्षित होते हैं।"
                  : "Every client relationship is legally shielded behind ironclad non-disclosure covenants."}
              </p>
            </div>
            <div className="pt-4">
              <button
                onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-xs text-brand-pink font-bold flex items-center space-x-1 hover:underline"
              >
                <span>{isHindi ? "परामर्श हेतु संपर्क करें" : "Contact Advisory Board"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hubs / Coordinating Presence */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 text-center space-y-3 max-w-4xl mx-auto shadow-sm">
        <MapPin className="w-8 h-8 text-brand-green mx-auto" />
        <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
          {isHindi ? "नई दिल्ली समन्वय केंद्र एवं अखिल भारतीय फील्ड उपस्थिति" : "New Delhi Coordinating Hub & Pan-India Field Desks"}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {isHindi 
            ? "हमारा मुख्य रणनीतिक समन्वय कार्यालय राष्ट्रीय राजधानी क्षेत्र (नई दिल्ली) में स्थित है, जहाँ से देश भर के विभिन्न राज्यों में चुनाव और नीतिगत प्रोजेक्ट्स का संचालन किया जाता है।"
            : "Headquartered in the administrative and diplomatic enclave of New Delhi, coordinating state election desks, polling field teams, and policy research faculties across the nation."}
        </p>
      </div>
    </div>
  );
};
