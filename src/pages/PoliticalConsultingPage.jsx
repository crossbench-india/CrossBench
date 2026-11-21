import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Vote, 
  MapPin, 
  Radio, 
  UserCheck, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Layers 
} from 'lucide-react';

export const PoliticalConsultingPage = ({ setActivePage }) => {
  const { lang, t } = useLanguage();
  const isHindi = lang === 'hi';

  const modules = [
    {
      icon: MapPin,
      img: "./images/analytics.jpg",
      title: isHindi ? "बूथ-स्तरीय जनसांख्यिकी एवं जीआईएस मैपिंग" : "Constituency Profiling & Micro-Demographic Mapping",
      tagline: isHindi ? "सांख्यिकीय सटीकता से स्विंग वोटर्स की पहचान" : "Statistical Micro-Targeting Down to Individual Polling Booths",
      desc: isHindi 
        ? "ऐतिहासिक चुनाव आयोग आंकड़ों, जातिगत समीकरणों, आर्थिक पैमानों और बूथ-वाइज ट्रेंड्स का बहुस्तरीय विश्लेषण। प्रत्येक बूथ को रेड, येलो और ग्रीन रिस्क कैटिगरी में वर्गीकृत किया जाता है।"
        : "Multi-layered demographic modeling integrating historical Election Commission polling records, caste matrix estimations, economic indicators, and hyper-local grievances. Every booth is classified into risk profiles.",
      deliverables: isHindi 
        ? [
            "बूथ-वार वोट स्विंग और जीत-हार की संवेदनशीलता रिपोर्ट",
            "जातिगत एवं सामाजिक समूहों का सूक्ष्म-जनसांख्यिकीय विश्लेषण",
            "विपक्षी दलों के पारंपरिक वोटबैंक में सेंधमारी की कार्ययोजना"
          ]
        : [
            "Booth-level swing vulnerability & margin sensitivity models",
            "Caste, community & socio-economic micro-cluster maps",
            "Targeted voter acquisition strategy for opposition strongholds"
          ]
    },
    {
      icon: Radio,
      img: "./images/warroom.jpg",
      title: isHindi ? "24x7 डिजिटल एवं ग्राउंड वॉर रूम ऑपरेशंस" : "24x7 Digital & Ground War Room Operations",
      tagline: isHindi ? "रियल-टाइम परसेप्शन मैनेजमेंट और त्वरित काउंटर-नैरेटिव" : "Real-Time Perception Management & Rapid Crisis Mitigation",
      desc: isHindi 
        ? "सोशल मीडिया, रीजनल टीवी, प्रिंट मीडिया और जमीनी बातचीत की 24x7 रीयल-टाइम मॉनिटरिंग। विपक्षी दुष्प्रचार का 45 मिनट के भीतर अकाट्य तथ्यों के साथ खंडन और जन-संवाद का नियंत्रण।"
        : "Continuous multi-channel monitoring across digital networks, regional broadcast television, print newsrooms, and dark social networks. Rapid-response counter-messaging deployed within 45-minute tactical windows.",
      deliverables: isHindi 
        ? [
            "दैनिक सुबह एवं शाम का इंटेलिजेंस ब्रीफिंग डॉजियर (Daily Dossier)",
            "विपक्ष के आरोपों का त्वरित खंडन (Fact-check & Counter-Campaigns)",
            "हाई-इम्पैक्ट विजुअल कंटेंट, इन्फोग्राफिक्स और वीडियो एंथम्स"
          ]
        : [
            "Twice-daily intelligence and narrative executive briefings",
            "Rapid rebuttal multimedia packages countering opposition claims",
            "Viral localized campaign video explainers & digital anthems"
          ]
    },
    {
      icon: UserCheck,
      img: "./images/leader_rally.jpg",
      title: isHindi ? "उम्मीदवार छवि संवर्धन एवं लीडरशिप नैरेटिव" : "Candidate Winnability & Leadership Persona",
      tagline: isHindi ? "व्यक्तिगत ट्रैक-रिकॉर्ड को जनाधार में बदलना" : "Engineering High-Credibility Political Profiles for Lawmakers",
      desc: isHindi 
        ? "वर्तमान सांसदों, विधायकों और चुनाव लड़ने के इच्छुक प्रत्याशियों की व्यक्तिगत जन-धारणा का निष्पक्ष ऑडिट। भाषण कला, मीडिया उपस्थिति और मतदाताओं से भावनात्मक जुड़ाव का वैज्ञानिक ढांचा।"
        : "Perception gap audits and bespoke communication engineering for sitting MPs, MLAs, and high-profile electoral aspirants. Calibrating leadership narrative with voter aspirations.",
      deliverables: isHindi 
        ? [
            "उम्मीदवार की जन-धारणा एवं लोकप्रियता का तटस्थ सर्वे",
            "मीडिया इंटरव्यू एवं सार्वजनिक रैलियों हेतु भाषण कोचिंग",
            "स्थानीय जन-मुद्दों पर आधारित 'विजन डॉक्युमेंट' का निर्माण"
          ]
        : [
            "Independent candidate perception and anti-incumbency survey",
            "Speechwriting, debate coaching & press conference choreography",
            "Hyper-local constituency development vision charter"
          ]
    },
    {
      icon: Users,
      img: "./images/state_campaign.jpg",
      title: isHindi ? "जमीनी काडर मशीनरी एवं पोलिंग-डे टर्नआउट (GOTV)" : "Ground Cadre Machinery & Polling-Day Turnout",
      tagline: isHindi ? "समर्थन को वास्तविक वोटों में तब्दील करने की व्यवस्था" : "Systematic Voter Slip Mobilization & Turnout Execution",
      desc: isHindi 
        ? "चुनाव केवल हवा से नहीं, बल्कि मतदान केंद्र तक मतदाता को लाने से जीते जाते हैं। बूथ अध्यक्षों का सत्यापन, डोर-टू-डोर कैंपेन ट्रैकिंग और वोटिंग वाले दिन अधिकतम टर्नआउट की कार्यप्रणाली।"
        : "Elections are decided at the ballot box. We structure rigorous booth committees, manage physical voter slip distributions, and monitor hourly turnout to mobilize friendly voter segments on polling day.",
      deliverables: isHindi 
        ? [
            "बूथ कमांडर टूलकिट और डोर-टू-डोर मॉनिटरिंग प्रोटोकॉल",
            "वोटिंग-डे रियल-टाइम टर्नआउट मोबाइल डैशबोर्ड",
            "आखिरी 72 घंटों की निर्णायक वोटर मोबिलाइजेशन रणनीति"
          ]
        : [
            "Booth commander field playbook & verification checklists",
            "Hourly voting-day turnout monitoring mobile portal",
            "Decisive last 72-hour voter conversion & turnout protocol"
          ]
    }
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-green-soft border border-brand-green/30 text-brand-green text-xs font-bold uppercase tracking-wider">
          <Vote className="w-3.5 h-3.5" />
          <span>{isHindi ? "इंजन 01 : राजनीतिक रणनीति" : "ENGINE 01 : POLITICAL STRATEGY"}</span>
        </div>
        <h1 className={`${isHindi ? 'font-hi-title' : 'font-display'} text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]`}>
          {isHindi ? (
            <>
              <span className="block">डेटा-आधारित चुनावी रणनीति एवं</span>
              <span className="text-brand-green block mt-1">वॉर रूम प्रबंधन</span>
            </>
          ) : (
            <>
              <span className="block">Data-Driven Electoral Strategy &</span>
              <span className="text-brand-green block mt-1">Campaign Machinery</span>
            </>
          )}
        </h1>
        <p className={`${isHindi ? 'font-hi-body' : ''} text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto`}>
          {isHindi
            ? "CROSS BENCH किसी भी दल या जन-प्रतिनिधि के अभियान को पारंपरिक अनुमानों के बजाय सटीक सांख्यिकी, जमीनी इंटेलिजेंस और 24x7 वॉर रूम नियंत्रण से सशक्त बनाता है।"
            : "Replacing guesswork with statistical precision. We engineer end-to-end election campaigns that align voter sentiment with strategic narrative, grassroots machinery, and decisive booth-level turnout."}
        </p>
      </div>

      {/* Modules with Photos */}
      <div className="space-y-10">
        {modules.map((mod, idx) => {
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
                    <div className="w-10 h-10 rounded-xl bg-brand-green-soft text-brand-green flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-brand-green tracking-widest uppercase">
                        {isHindi ? `मॉड्यूल 0${idx + 1}` : `MODULE 0${idx + 1}`}
                      </span>
                      <h2 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-xl sm:text-2xl font-bold text-slate-900`}>
                        {mod.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-pink font-semibold">
                    {mod.tagline}
                  </p>

                  <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-600 leading-relaxed`}>
                    {mod.desc}
                  </p>

                  <div className="p-4 rounded-xl bg-surface-50 border border-slate-200 space-y-2">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-brand-green" />
                      <span>{isHindi ? "प्रमुख आउटपुट्स एवं डिलीवरेबल्स" : "Core Deliverables & Intelligence"}</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {mod.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green flex-shrink-0 mt-0.5" />
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
      <div className="bg-gradient-to-r from-brand-green to-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-xl sm:text-2xl font-bold text-white mb-1`}>
            {isHindi ? "आगामी चुनाव के लिए गोपनीय रणनीति सत्र बुक करें" : "Initiate a Confidential Campaign Consultation"}
          </h3>
          <p className={`${isHindi ? 'font-hi-body' : ''} text-xs sm:text-sm text-slate-200`}>
            {isHindi 
              ? "सभी चर्चाएं सख्त गैर-प्रकटीकरण (NDA) के तहत केवल वरिष्ठ राजनीतिक रणनीतिकारों द्वारा संचालित की जाती हैं।"
              : "All inquiries are strictly confidential under bilateral non-disclosure covenants."}
          </p>
        </div>
        <button
          onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="px-6 py-3.5 rounded-xl bg-brand-pink hover:bg-brand-pink-hover text-white font-bold text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-md flex-shrink-0"
        >
          <span>{isHindi ? "परामर्श प्रारंभ करें" : "Schedule Political Briefing"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
