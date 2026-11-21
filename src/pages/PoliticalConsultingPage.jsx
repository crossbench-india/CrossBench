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
  BarChart, 
  Layers, 
  Compass, 
  Activity 
} from 'lucide-react';

export const PoliticalConsultingPage = ({ setActivePage }) => {
  const { lang, t } = useLanguage();

  const isHindi = lang === 'hi';

  const modules = [
    {
      icon: MapPin,
      title: isHindi ? "बूथ-स्तरीय जनसांख्यिकी एवं जीआईएस मैपिंग" : "Constituency Profiling & Demographic Mapping",
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
    <div className="pt-28 pb-24 space-y-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-4xl mx-auto space-y-5">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider">
          <Vote className="w-3.5 h-3.5" />
          <span>{isHindi ? "इंजन 01 : राजनीतिक परामर्श" : "ENGINE 01 : POLITICAL STRATEGY"}</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
          {isHindi 
            ? "डेटा-आधारित चुनावी रणनीति एवं वॉर रूम प्रबंधन" 
            : "Data-Driven Electoral Strategy & Campaign Machinery"}
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
          {isHindi
            ? "CROSS BENCH किसी भी दल या जन-प्रतिनिधि के अभियान को पारंपरिक अनुमानों के बजाय सटीक सांख्यिकी, जमीनी इंटेलिजेंस और 24x7 वॉर रूम नियंत्रण से सशक्त बनाता है।"
            : "Replacing guesswork with statistical precision. We engineer end-to-end election campaigns that align voter sentiment with strategic narrative, grassroots machinery, and decisive booth-level turnout."}
        </p>
      </div>

      {/* 4 Detailed Modules Grid */}
      <div className="space-y-12">
        {modules.map((mod, idx) => {
          const Icon = mod.icon;
          return (
            <div 
              key={idx}
              className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 hover:border-gold-500/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Description Col */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-gold-400 tracking-widest uppercase">
                        {isHindi ? `मॉड्यूल 0${idx + 1}` : `MODULE 0${idx + 1}`}
                      </span>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                        {mod.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gold-400 font-medium">
                    {mod.tagline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                {/* Right Deliverables Col */}
                <div className="lg:col-span-5 bg-parliament-950/80 p-6 rounded-2xl border border-slate-800/80 space-y-3">
                  <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-gold-400" />
                    <span>{isHindi ? "प्रमुख आउटपुट्स एवं डिलीवरेबल्स" : "Core Deliverables & Intelligence"}</span>
                  </h3>
                  <div className="space-y-2.5 pt-2">
                    {mod.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Execution Methodology */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 text-center space-y-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          {isHindi ? "हमारी 4-चरणीय चुनावी कार्यपद्धति" : "Our 4-Stage Campaign Lifecycle"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            {
              step: "01",
              title: isHindi ? "ग्राउंड डायग्नोस्टिक्स" : "Ground Diagnostics",
              desc: isHindi ? "गहन फील्ड सर्वे, जातिगत डेटा और एंटी-इंकंबेंसी मैपिंग।" : "Deep sampling, booth-level history, and anti-incumbency audits."
            },
            {
              step: "02",
              title: isHindi ? "रणनीतिक नैरेटिव" : "Narrative Synthesis",
              desc: isHindi ? "अभियान की मुख्य थीम, घोषणापत्र और स्लोगन का निर्माण।" : "Core message framing, slogan formulation, and manifesto testing."
            },
            {
              step: "03",
              title: isHindi ? "वॉर रूम डिप्लॉयमेंट" : "War Room Execution",
              desc: isHindi ? "24x7 डिजिटल मीडिया मॉनिटरिंग और त्वरित काउंटर-अटैक।" : "Rapid counter-propaganda, media tracking, and digital surge."
            },
            {
              step: "04",
              title: isHindi ? "टर्नआउट मोबिलाइजेशन" : "Turnout Mobilization",
              desc: isHindi ? "वोटिंग के दिन बूथ मैनेजमेंट और अंतिम मतदाता तक पहुंच।" : "Voting-day booth coordination and maximum voter conversion."
            }
          ].map((stage, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="font-display font-bold text-2xl text-gold-400/80">{stage.step}</span>
              <h3 className="font-serif font-bold text-base text-white">{stage.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-parliament-900 to-parliament-950 p-8 sm:p-10 rounded-3xl border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
            {isHindi ? "आगामी चुनाव के लिए गोपनीय रणनीति सत्र बुक करें" : "Initiate a Confidential Campaign Consultation"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            {isHindi 
              ? "सभी चर्चाएं सख्त गैर-प्रकटीकरण (NDA) के तहत केवल वरिष्ठ राजनीतिक रणनीतिकारों द्वारा संचालित की जाती हैं।"
              : "All inquiries are strictly confidential under non-disclosure covenants."}
          </p>
        </div>
        <button
          onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="px-6 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-parliament-950 font-bold text-sm flex items-center space-x-2 transition-all shadow-lg flex-shrink-0"
        >
          <span>{isHindi ? "परामर्श प्रारंभ करें" : "Schedule Political Briefing"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
