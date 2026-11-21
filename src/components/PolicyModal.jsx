import React from 'react';
import { X, ShieldCheck, Lock, FileText, Scale } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const PolicyModal = ({ isOpen, onClose, policyType = 'privacy' }) => {
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';

  if (!isOpen) return null;

  const content = {
    privacy: {
      title: isHindi ? "गोपनीयता नीति एवं डेटा सुरक्षा प्रोटोकॉल" : "Privacy Policy & Air-Gapped Data Protocol",
      icon: Lock,
      sections: isHindi ? [
        {
          heading: "1. पूर्ण क्लाइंट अनामिकता (Air-Gapped Client Secrecy)",
          text: "CROSS BENCH किसी भी राजनीतिक दल, जन-प्रतिनिधि अथवा संस्थागत क्लाइंट का नाम, चुनावी डेटा या आंतरिक सर्वेक्षण किसी भी तीसरे पक्ष के साथ साझा नहीं करता है। समस्त संचार एंड-टू-एंड एन्क्रिप्टेड और एयर-गैप्ड सर्वर्स पर सुरक्षित रखा जाता है।"
        },
        {
          heading: "2. गैर-प्रकटीकरण अनुबंध (Bilateral NDA)",
          text: "प्रत्येक परामर्श अनुबंध से पूर्व कानूनी रूप से बाध्यकारी गैर-प्रकटीकरण समझौता (NDA) हस्ताक्षरित किया जाता है। अनुबंध समाप्ति के पश्चात सभी आंतरिक डेटा पॉइंट्स क्लाइंट की सहमति अनुसार स्थायी रूप से मिटा दिए जाते हैं।"
        },
        {
          heading: "3. डेटा संग्रह एवं उपयोग",
          text: "वेबसाइट के 'गोपनीय संपर्क' फॉर्म के माध्यम से केवल प्राथमिक परामर्श हेतु आवश्यक संपर्क विवरण एकत्र किए जाते हैं, जिन्हें किसी भी विपणन या विज्ञापन नेटवर्क को कभी बेचा या साझा नहीं किया जाता।"
        }
      ] : [
        {
          heading: "1. Air-Gapped Client Confidentiality",
          text: "CROSS BENCH enforces stringent institutional firewalls. Client identities, demographic telemetry, war room strategies, and survey datasets remain air-gapped from commercial networks and third-party vendors."
        },
        {
          heading: "2. Bilateral Non-Disclosure Agreements (NDAs)",
          text: "Every engagement is bound by enforceable non-disclosure legal covenants. All project materials, internal polling data, and crisis PR playbooks are purged or archived under client-governed retention schedules."
        },
        {
          heading: "3. Direct Communications Data Only",
          text: "Information submitted via our confidential intake desk is used exclusively to facilitate bilateral senior leadership dialogue. We never monetize, syndicate, or disclose partner data."
        }
      ]
    },
    terms: {
      title: isHindi ? "परामर्श नियम एवं अनुबंध शर्तें" : "Terms of Institutional Engagement",
      icon: FileText,
      sections: isHindi ? [
        {
          heading: "1. गैर-पक्षपातपूर्ण परामर्श दर्शन",
          text: "CROSS BENCH किसी राजनीतिक विचारधारा या दलगत एजेंडे से बंधा नहीं है। हमारा कार्य केवल प्रामाणिक जमीनी डेटा, तथ्यात्मक नीतिगत विश्लेषण और नैतिक चुनाव अभियान प्रबंधन पर आधारित है।"
        },
        {
          heading: "2. बौद्धिक संपदा अधिकार",
          text: "परामर्श अवधि के दौरान निर्मित सभी कस्टमाइज्ड रणनीतिक श्वेतपत्र, वॉर रूम डैशबोर्ड और प्रचार योजनाएं संबंधित क्लाइंट की अनन्य बौद्धिक संपदा रहेंगी।"
        },
        {
          heading: "3. क्षेत्राधिकार एवं विधि व्यवस्था",
          text: "सभी कानूनी समझौते भारत के संप्रभु कानूनों और नई दिल्ली स्थित न्यायिक क्षेत्राधिकार के अधीन शासित होंगे।"
        }
      ] : [
        {
          heading: "1. Charter of Non-Partisan Independence",
          text: "CROSS BENCH operates strictly on empirical evidence, rigorous analytics, and strategic clarity. Engagements are accepted without ideological prejudice or partisan allegiance."
        },
        {
          heading: "2. Ownership of Strategic Deliverables",
          text: "Custom campaign blueprints, constituency modeling reports, and media dossiers produced during an engagement remain the proprietary assets of the retaining client."
        },
        {
          heading: "3. Jurisdiction & Governance",
          text: "All institutional engagements and bilateral contracts are executed under the legal frameworks of the Republic of India and subject to New Delhi jurisdiction."
        }
      ]
    },
    integrity: {
      title: isHindi ? "अखंडता, निष्पक्षता एवं आचार संहिता" : "Institutional Integrity & Code of Conduct",
      icon: Scale,
      sections: isHindi ? [
        {
          heading: "1. चुनावी शुचिता एवं लोकतांत्रिक मूल्य",
          text: "हम लोकतांत्रिक मूल्यों, भारत निर्वाचन आयोग के दिशा-निर्देशों और निष्पक्ष चुनावी प्रतिस्पर्धा के उच्चतम मानकों का पालन करते हैं। किसी भी भ्रामक या अनैतिक प्रचार को हमारा समर्थन नहीं है।"
        },
        {
          heading: "2. हितों का टकराव रोकथाम (Conflict of Interest Protocol)",
          text: "एक ही चुनावी क्षेत्र या विधानसभा में एक साथ प्रतिस्पर्धी उम्मीदवारों अथवा विरोधी दलों के लिए समानांतर कार्य स्वीकार नहीं किया जाता।"
        },
        {
          heading: "3. वैज्ञानिक एवं स्वतंत्र कार्यप्रणाली",
          text: "हमारे सभी ओपिनियन पोल्स, लोक नीति ऑडिट और मीडिया रिपोर्ट्स केवल वास्तविक फील्ड डेटा पर आधारित होते हैं, जिन्हें किसी के प्रभाव में बदला नहीं जा सकता।"
        }
      ] : [
        {
          heading: "1. Democratic Integrity & Ethical Standards",
          text: "We adhere strictly to statutory guidelines, democratic dignity, and the Model Code of Conduct set by electoral authorities. Deceptive practices are strictly prohibited."
        },
        {
          heading: "2. Conflict of Interest Firewalls",
          text: "CROSS BENCH enforces strict single-client constituency exclusivity to prevent operational conflicts within the same electoral jurisdiction."
        },
        {
          heading: "3. Uncompromised Empirical Objectivity",
          text: "Public policy evaluations and welfare scheme audits are conducted with peer-reviewed statistical methodologies, unswayed by political pressure."
        }
      ]
    }
  };

  const current = content[policyType] || content.privacy;
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-brand-green-soft text-brand-green flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-brand-pink tracking-widest uppercase">
              CROSS BENCH CHARTER
            </span>
            <h3 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-lg sm:text-xl font-bold text-slate-900`}>
              {current.title}
            </h3>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-4">
          {current.sections.map((sec, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-surface-50 border border-slate-200/80 space-y-1.5">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>{sec.heading}</span>
              </h4>
              <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600 leading-relaxed pl-6`}>
                {sec.text}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 text-xs text-slate-500">
          <span className="font-mono text-[11px]">Governed under bilateral Non-Disclosure Covenant</span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs transition-colors"
          >
            {isHindi ? "स्वीकार करें व बंद करें" : "Acknowledge & Close"}
          </button>
        </div>
      </div>
    </div>
  );
};
