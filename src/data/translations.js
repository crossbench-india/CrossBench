export const translations = {
  en: {
    // Header & Meta
    brandName: "CROSSBENCH",
    brandTagline: "Independent Insight. Strategic Impact.",
    nav: {
      home: "Home",
      political: "Political Strategy",
      policy: "Public Policy",
      impact: "Our Impact",
      solutions: "Solutions",
      about: "About Us",
      insights: "Insights",
      contact: "Confidential Contact",
      schedule: "Schedule Consultation"
    },

    // Hero Section
    hero: {
      badge: "NON-PARTISAN ADVISORY FIRM",
      titleLine1: "Independent Insight.",
      titleLine2: "Strategic Impact.",
      subtitle: "Bridging data-driven political campaign management with empirical public policy governance. Serving political parties, lawmakers, ministries, and civil society with absolute discretion.",
      primaryCta: "Explore Political Suite",
      secondaryCta: "Public Policy Advisory",
      guarantee: "100% Non-Partisan & Confidential Advisory"
    },

    // Stats / Counters (Jarvis & I-PAC Inspired)
    metrics: [
      {
        value: "250+",
        label: "Campaigns & Engagements",
        sub: "Assembly, Parliamentary & Zila Parishad campaigns executed.",
        badgeColor: "green"
      },
      {
        value: "160B+",
        label: "Data Attributes Managed",
        sub: "Booth-level demographic, caste & economic indicators modeled.",
        badgeColor: "pink"
      },
      {
        value: "50+",
        label: "Governance Audits",
        sub: "Third-party welfare scheme delivery & DBT impact evaluations.",
        badgeColor: "green"
      },
      {
        value: "100%",
        label: "Partisan Independence",
        sub: "Governed strictly by empirical data and bilateral non-disclosure NDAs.",
        badgeColor: "pink"
      }
    ],

    // Dual Engine
    dualEngine: {
      tag: "THE DUAL ENGINE",
      title: "Where Electoral Precision Meets Public Policy Excellence",
      subtitle: "Sustainable political leadership requires both electoral mastery to win mandates and policy competence to deliver public welfare.",
      engine1: {
        tag: "ENGINE 01",
        title: "Political & Electoral Strategy",
        subtitle: "Data-Driven Campaign Machinery for Parties & Candidates",
        desc: "Transforming complex grassroots voter sentiment into decisive electoral victories through high-precision micro-targeting, 24x7 war room execution, candidate image architecture, and disciplined booth-level mobilization.",
        features: [
          "Booth-Level GIS & Micro-Demographic Mapping",
          "24x7 Digital & Rapid Counter-Narrative War Rooms",
          "Candidate Winnability Audits & Persona Engineering",
          "Ground Cadre Training & Polling-Day Turnout (GOTV)"
        ],
        cta: "Explore Political Services"
      },
      engine2: {
        tag: "ENGINE 02",
        title: "Public Policy & Governance Advisory",
        subtitle: "Transforming Mandates into Enduring Governance Impact",
        desc: "Supporting government ministries, administrative bodies, and civil society institutions with independent third-party welfare scheme audits, legislative research, citizen grievance analytics, and strategic policy advocacy.",
        features: [
          "Welfare Scheme Last-Mile Delivery Impact Audits",
          "Legislative Briefings & Parliamentary Research",
          "Citizen Sentiment & Public Grievance Feedback Loops",
          "Evidence-Backed Advocacy for NGOs & Think Tanks"
        ],
        cta: "Explore Policy Services"
      }
    },

    // I-PAC Inspired Impact Section
    impactSection: {
      badge: "PROVEN TRACK RECORD",
      title: "CROSS BENCH Impact: Reshaping Governance & Elections",
      subtitle: "Empirical outcomes across key state elections, legislative offices, and public welfare evaluations.",
      tabs: [
        {
          id: "delhi",
          name: "State Assembly Strategy",
          location: "Assembly Elections",
          year: "2025",
          title: "Citizen Guarantees & Micro-Constituency Turnout Modeling",
          desc: "Orchestrated targeted ground surveys across 70 constituencies, identifying swing clusters under 2.1% margins and establishing 24x7 digital response desks countering localized anti-incumbency.",
          stats: [
            { label: "Booths Monitored", val: "13,800+" },
            { label: "Voter Conversion", val: "4.8% Swing" },
            { label: "Response Window", val: "<40 Mins" },
            { label: "Turnout Lift", val: "+6.2%" }
          ],
          img: "./images/delhi_campaign.jpg"
        },
        {
          id: "welfare",
          name: "Central & State Welfare Audits",
          location: "Multi-State Audit",
          year: "2024-25",
          title: "Direct Benefit Transfer (DBT) Last-Mile Leakage Detection",
          desc: "Independent door-to-door evaluation covering 18,000 rural beneficiaries across 16 districts. Identified systemic Aadhaar biometric drop-offs and provided administrative procedural redesign.",
          stats: [
            { label: "Beneficiaries Surveyed", val: "18,000+" },
            { label: "Leakages Plugged", val: "₹185 Cr" },
            { label: "Delivery Accuracy", val: "97.4%" },
            { label: "Policy Reforms", val: "14 Measures" }
          ],
          img: "./images/analytics.jpg"
        },
        {
          id: "candidate",
          name: "Lawmaker Office & Image Makeover",
          location: "Constituency Management",
          year: "2024",
          title: "MP & MLA Constituency Grievance Command Center",
          desc: "Architected modern constituency management systems for 12 sitting legislators, deploying automated WhatsApp citizen grievance tracking and 5-year developmental tenure progress reports.",
          stats: [
            { label: "Grievances Resolved", val: "84,000+" },
            { label: "Approval Rating", val: "+26%" },
            { label: "Villages Covered", val: "640+" },
            { label: "Turnout Readiness", val: "100% Booths" }
          ],
          img: "./images/leader_rally.jpg"
        },
        {
          id: "ngo",
          name: "Civil Society & Legislative Advocacy",
          location: "Parliamentary Research",
          year: "2024-25",
          title: "Evidence-Based Policy Whitepapers on Rural Healthcare",
          desc: "Converted complex primary healthcare telemetry into 4 high-authority legislative memorandums presented before Parliamentary Standing Committees, driving targeted budgetary allocation.",
          stats: [
            { label: "Lawmakers Briefed", val: "45 MPs/MLAs" },
            { label: "Roundtables Hosted", val: "8 Sessions" },
            { label: "Budgetary Allocation", val: "+18% Lift" },
            { label: "Media Citations", val: "120+ Outlets" }
          ],
          img: "./images/governance.jpg"
        }
      ]
    },

    // Story Section (I-PAC Team / Story Inspired)
    story: {
      badge: "OUR ETHOS",
      title: "The CROSS BENCH Story",
      desc1: "In democratic assemblies, the Crossbench represents the vanguard of intellectual independence. Crossbenchers are beholden neither to the ruling treasury nor the opposition whip—they examine public questions with ruthless objectivity and strategic clarity.",
      desc2: "CROSS BENCH was founded by alumni of premier policy institutions, top-tier management consultancies, and seasoned electoral operatives. We recognized that the Indian political consulting ecosystem had become polarized and superficial.",
      desc3: "We built an institutional home for leaders, governments, and civil society who demand empirical rigor over PR hype, and confidential strategic excellence over noise.",
      cta: "Learn More About Our Charter",
      img: "./images/team_story.jpg"
    },

    // Solutions
    solutions: {
      badge: "TARGET VERTICALS",
      title: "Specialized Advisory Across Four Verticals",
      subtitle: "Bespoke operational frameworks engineered for each stakeholder in the democratic governance ecosystem.",
      categories: [
        {
          id: "parties",
          name: "Political Parties",
          tagline: "National & State Level Party Organizations",
          desc: "Full-lifecycle election management, manifesto formulation, pan-state war room operations, voter sentiment tracking, and booth-level organizational reinforcement.",
          deliverables: [
            "Pan-State Electoral Blueprint & Swing Modeling",
            "Central War Room & 24x7 Real-Time Social Listening",
            "Manifesto Drafting & Voter Promise Stress-Testing",
            "Booth Committee Performance Tracking Dashboard"
          ]
        },
        {
          id: "candidates",
          name: "Individual Leaders",
          tagline: "Ministers, MPs, MLAs & Aspiring Candidates",
          desc: "Bespoke constituency management, personalized political branding, local issue mapping, speechwriting, and voter relationship building.",
          deliverables: [
            "Constituency Perception & Anti-Incumbency Audit",
            "Localized Digital Reach & Youth Mobilization Strategy",
            "Personal Media Coaching & High-Impact Narrative Framing",
            "Constituency Office (MLA/MP) Operations SOP"
          ]
        },
        {
          id: "ministries",
          name: "Government Ministries",
          tagline: "Central & State Administrative Departments",
          desc: "Independent third-party evaluation of welfare programs, citizen feedback loops, administrative reform communication, and policy impact assessments.",
          deliverables: [
            "Third-Party Scheme Beneficiary Satisfaction Audits",
            "Direct Benefit Transfer (DBT) Last-Mile Leakage Reports",
            "Citizen Grievance Analytics & Early-Warning Dashboard",
            "Administrative Communication & Policy Outreach Strategy"
          ]
        },
        {
          id: "ngos",
          name: "NGOs & Think Tanks",
          tagline: "Civil Society, Philanthropies & Research Foundations",
          desc: "Translating grassroots field research into rigorous policy whitepapers, legislative reform briefs, and high-level multi-stakeholder advocacy roundtables.",
          deliverables: [
            "Evidence-Based Policy Whitepapers & Sectoral Reports",
            "Legislative Amendment Briefs for Lawmakers",
            "Multi-Stakeholder Policy Roundtables & Consultations",
            "Media & Public Awareness Strategic Blueprints"
          ]
        }
      ]
    },

    // Neutrality Charter
    charter: {
      badge: "NON-PARTISAN PRINCIPLES",
      title: "Our Institutional Neutrality Charter",
      quote: "In parliamentary democracy, the Crossbench embodies independence from partisan orthodoxy. Our commitment is exclusively to empirical reality, democratic vibrancy, and measurable public impact.",
      points: [
        {
          title: "Zero Partisan Entanglement",
          desc: "We maintain professional independence, accepting assignments based on strategic clarity rather than ideological allegiance."
        },
        {
          title: "Air-Gapped Data Confidentiality",
          desc: "All client data, internal polling, and electoral blueprints are firewalled behind strict non-disclosure legal covenants."
        },
        {
          title: "Empirical Grounding",
          desc: "We reject anecdotal echo-chambers. Every recommendation is anchored in statistical rigor and verified ground truth."
        },
        {
          title: "Democratic Strengthening",
          desc: "Whether optimizing voter turnout or refining public healthcare delivery, our mission is to make governance responsive and accountable."
        }
      ]
    },

    // Insights
    insights: {
      badge: "RESEARCH & EVIDENCE",
      title: "Perspectives & Strategic Insights",
      subtitle: "Non-partisan electoral analyses and policy impact whitepapers produced by our senior practice faculty.",
      articles: [
        {
          tag: "ELECTORAL STRATEGY",
          date: "Q1 2026",
          title: "The Architecture of Swing Voters in Multi-Cornered State Contests",
          excerpt: "An empirical investigation into how micro-demographic voter shifts of under 1.8% dictate seat conversions across modern assembly elections.",
          readTime: "8 min read"
        },
        {
          tag: "PUBLIC POLICY",
          date: "Q1 2026",
          title: "Evaluating Last-Mile DBT Efficiency in Rural Welfare Subsidies",
          excerpt: "Field audit telemetry across 14 districts evaluating Direct Benefit Transfer infrastructure, biometric failure rates, and citizen grievance redressal.",
          readTime: "10 min read"
        },
        {
          tag: "WAR ROOM DYNAMICS",
          date: "Q4 2025",
          title: "Countering Algorithmic Disinformation in Real-Time Election War Rooms",
          excerpt: "Protocol frameworks for identifying synthetic media, dark social narratives, and executing rapid counter-messaging within 45-minute response windows.",
          readTime: "7 min read"
        }
      ]
    },

    // Contact
    contact: {
      badge: "SECURE INTAKE",
      title: "Confidential Consultation",
      subtitle: "Direct, encrypted, and strictly confidential intake for leadership consultations.",
      intakeNote: "All communications are protected under strict bilateral non-disclosure protocols. Consultations are conducted exclusively by senior practice directors.",
      form: {
        fullName: "Full Name",
        designation: "Designation / Role",
        organization: "Organization / Party / Ministry",
        vertical: "Domain of Engagement",
        verticalOptions: [
          "Political Campaign Strategy (Party Level)",
          "Constituency & Leader Advisory (MP/MLA/Candidate)",
          "Public Policy / Governance Advisory (Ministry/Govt)",
          "Strategic Research & Advocacy (NGO/Think Tank)",
          "Comprehensive 360° Retainer"
        ],
        contactMethod: "Preferred Direct Contact",
        contactPlaceholder: "Official Email or Confidential Mobile Number",
        scope: "Brief Scope of Engagement",
        scopePlaceholder: "Describe your strategic objectives, upcoming election cycle, or policy scope...",
        confidentialityPledge: "I require this consultation to remain strictly confidential under non-disclosure terms.",
        submitBtn: "Request Discreet Consultation",
        successMsg: "Your consultation request has been received under our Confidential Intake Protocol. A Senior Practice Director will reach out within 24 hours via your preferred channel."
      },
      channels: {
        headquarters: "New Delhi Coordinating Hub (Diplomatic & Administrative Enclave)",
        email: "advisory@crossbench.in",
        securityNotice: "Encrypted PGP keys and secure in-person meeting arrangements provided upon initial intake verification."
      }
    },

    // Footer
    footer: {
      desc: "CROSS BENCH is an independent, non-partisan advisory firm operating across the dual engines of electoral strategy and public policy governance. Serving political parties, lawmakers, ministries, and civil society with empirical rigor.",
      quickLinksTitle: "Navigation",
      servicesTitle: "Practices",
      complianceTitle: "Institutional Standards",
      complianceItems: [
        "Non-Partisan Code of Conduct",
        "Air-Gapped Data Security Protocol",
        "Client Confidentiality Covenant (NDA)",
        "Senior Advisory Network (Discreet Inquiries)"
      ],
      copyright: "© 2026 CROSS BENCH. All rights reserved. Strictly Confidential."
    }
  },

  hi: {
    // Header & Meta
    brandName: "क्रॉस बेंच",
    brandTagline: "स्वतंत्र दृष्टि। रणनीतिक प्रभाव।",
    nav: {
      home: "मुख्य पृष्ठ",
      political: "राजनीतिक परामर्श",
      policy: "लोक नीति",
      impact: "हमारा प्रभाव",
      solutions: "समाधान",
      about: "हमारे बारे में",
      insights: "शोध व विश्लेषण",
      contact: "गोपनीय संपर्क",
      schedule: "परामर्श बुक करें"
    },

    // Hero Section
    hero: {
      badge: "गैर-पक्षपातपूर्ण एवं स्वतंत्र परामर्श संस्थान",
      titleLine1: "स्वतंत्र दृष्टि।",
      titleLine2: "रणनीतिक प्रभाव।",
      subtitle: "डेटा-आधारित चुनाव अभियान प्रबंधन और जन-कल्याणकारी लोक नीति सुशासन का विश्वसनीय संगम। राजनीतिक दलों, जन-प्रतिनिधियों, मंत्रालयों और नागरिक समाज की सेवा में पूर्ण गोपनीयता के साथ समर्पित।",
      primaryCta: "चुनावी रणनीति समझें",
      secondaryCta: "लोक नीति परामर्श",
      guarantee: "100% निष्पक्ष एवं पूर्णतः गोपनीय परामर्श"
    },

    // Stats / Counters
    metrics: [
      {
        value: "250+",
        label: "चुनावी अभियान व प्रोजेक्ट्स",
        sub: "विधानसभा, संसदीय व स्थानीय निकाय चुनावों में सफल रणनीति।",
        badgeColor: "green"
      },
      {
        value: "160B+",
        label: "डेटा पॉइंट्स का विश्लेषण",
        sub: "बूथ-स्तरीय जनसांख्यिकी, जातिगत व आर्थिक संकेतकों का मॉडल।",
        badgeColor: "pink"
      },
      {
        value: "50+",
        label: "नीतिगत सुशासन ऑडिट्स",
        sub: "कल्याणकारी योजनाओं का अंतिम छोर तक थर्ड-पार्टी प्रभाव मूल्यांकन।",
        badgeColor: "green"
      },
      {
        value: "100%",
        label: "दलगत निष्पक्षता",
        sub: "केवल प्रामाणिक तथ्यों और सख्त कानूनी गोपनीयता (NDA) से संचालित।",
        badgeColor: "pink"
      }
    ],

    // Dual Engine
    dualEngine: {
      tag: "दोहरा सामर्थ्य",
      title: "जहाँ चुनावी रणनीति और लोक नीति का विश्वसनीय संगम होता है",
      subtitle: "स्थायी नेतृत्व के लिए जनादेश जीतने की चुनावी कुशलता और जनकल्याण सुनिश्चित करने की नीतिगत समझ—दोनों आवश्यक हैं।",
      engine1: {
        tag: "पहला स्तंभ",
        title: "राजनीतिक एवं चुनावी रणनीति",
        subtitle: "डेटा-आधारित रणनीति से निर्णायक जनादेश हासिल करना",
        desc: "जनसांख्यिकी माइक्रो-टारगेटिंग, 24x7 वॉर रूम संचालन, उम्मीदवार छवि प्रबंधन और अनुशासित बूथ मशीनरी के माध्यम से जमीनी जन-भावना को निर्णायक चुनावी जीत में बदलना।",
        features: [
          "बूथ-स्तरीय जीआईएस एवं जातिगत समीकरण मैपिंग",
          "24x7 डिजिटल एवं त्वरित काउंटर-नैरेटिव वॉर रूम",
          "उम्मीदवार छवि ऑडिट एवं लीडरशिप नैरेटिव",
          "जमीनी काडर प्रशिक्षण एवं पोलिंग-डे टर्नआउट (GOTV)"
        ],
        cta: "चुनावी सेवाएं देखें"
      },
      engine2: {
        tag: "दूसरा स्तंभ",
        title: "लोक नीति एवं सुशासन परामर्श",
        subtitle: "जनादेश को स्थायी और मापनीय जनकल्याण में बदलना",
        desc: "सरकारी मंत्रालयों, प्रशासनिक विभागों और नागरिक संस्थाओं को स्वतंत्र थर्ड-पार्टी योजना मूल्यांकन, विधायी अनुसंधान, जन-असंतोष विश्लेषण और ठोस नीतिगत सलाह प्रदान करना।",
        features: [
          "कल्याणकारी योजनाओं का अंतिम छोर तक प्रभाव ऑडिट",
          "संसदीय रिसर्च एवं विधायी ब्रीफिंग्स",
          "जन-भावना एवं लोक शिकायत निवारण विश्लेषण",
          "एनजीओ और थिंक टैंक्स के लिए तथ्य-आधारित एडवोकेसी"
        ],
        cta: "नीतिगत सेवाएं देखें"
      }
    },

    // I-PAC Inspired Impact Section
    impactSection: {
      badge: "प्रामाणिक ट्रैक रिकॉर्ड",
      title: "क्रॉस बेंच प्रभाव: चुनाव और सुशासन में नए मानक",
      subtitle: "प्रमुख राज्य चुनावों, विधायी कार्यालयों और जनकल्याणकारी योजनाओं के मूल्यांकन के जमीनी परिणाम।",
      tabs: [
        {
          id: "delhi",
          name: "राज्य विधानसभा चुनाव",
          location: "विधानसभा अभियान",
          year: "2025",
          title: "नागरिक गारंटी एवं सूक्ष्म-विधानसभा टर्नआउट मॉडलिंग",
          desc: "70 विधानसभाओं में व्यापक फील्ड सर्वे के जरिए 2.1% से कम अंतर वाले स्विंग बूथों की पहचान की गई और स्थानीय एंटी-इंकंबेंसी से निपटने के लिए 24x7 डिजिटल वॉर रूम स्थापित किए गए।",
          stats: [
            { label: "बूथ मॉनिटरिंग", val: "13,800+" },
            { label: "वोटर स्विंग", val: "4.8% बदलाव" },
            { label: "काउंटर रिस्पॉन्स", val: "<40 मिनट" },
            { label: "टर्नआउट वृद्धि", val: "+6.2%" }
          ],
          img: "./images/delhi_campaign.jpg"
        },
        {
          id: "welfare",
          name: "केंद्रीय व राज्य कल्याणकारी योजनाएं",
          location: "अखिल भारतीय ऑडिट",
          year: "2024-25",
          title: "डायरेक्ट बेनिफिट ट्रांसफर (DBT) लीकेज की जमीनी पहचान",
          desc: "16 जिलों में 18,000 ग्रामीण लाभार्थियों के घर-घर जाकर किया गया स्वतंत्र थर्ड-पार्टी मूल्यांकन। बायोमेट्रिक विफलता को उजागर कर प्रशासनिक सुधार लागू करवाए गए।",
          stats: [
            { label: "लाभार्थी सर्वे", val: "18,000+" },
            { label: "बचाई गई राशि", val: "₹185 करोड़" },
            { label: "सटीकता दर", val: "97.4%" },
            { label: "नीतिगत सुधार", val: "14 उपाय" }
          ],
          img: "./images/analytics.jpg"
        },
        {
          id: "candidate",
          name: "जन-प्रतिनिधि कार्यालय व छवि प्रबंधन",
          location: "निर्वाचन क्षेत्र प्रबंधन",
          year: "2024",
          title: "सांसद एवं विधायक लोक-शिकायत निवारण कमांड सेंटर",
          desc: "12 वर्तमान विधायकों व सांसदों के लिए आधुनिक कार्यालय प्रणाली की स्थापना, स्वचालित व्हाट्सएप शिकायत ट्रैकिंग और 5-वर्षीय विकास कार्यों का प्रगति रिपोर्ट कार्ड।",
          stats: [
            { label: "सुलझाई गई शिकायतें", val: "84,000+" },
            { label: "संतुष्टि दर", val: "+26%" },
            { label: "कवर किए गए गाँव", val: "640+" },
            { label: "बूथ तत्परता", val: "100% बूथ्स" }
          ],
          img: "./images/leader_rally.jpg"
        },
        {
          id: "ngo",
          name: "नागरिक समाज एवं विधायी एडवोकेसी",
          location: "संसदीय रिसर्च",
          year: "2024-25",
          title: "ग्रामीण स्वास्थ्य सेवा पर तथ्य-आधारित नीतिगत श्वेतपत्र",
          desc: "जमीनी स्वास्थ्य डेटा को 4 उच्च-स्तरीय विधायी ज्ञापनों में बदलकर संसदीय स्थायी समितियों के समक्ष प्रस्तुत किया गया, जिससे बजट आवंटन में ठोस बढ़ोतरी हुई।",
          stats: [
            { label: "सांसदों को ब्रीफिंग", val: "45 सांसद/विधायक" },
            { label: "गोलमेज बैठकें", val: "8 सत्र" },
            { label: "बजट आवंटन वृद्धि", val: "+18%" },
            { label: "मीडिया संदर्भ", val: "120+ प्रकाशन" }
          ],
          img: "./images/governance.jpg"
        }
      ]
    },

    // Story Section
    story: {
      badge: "हमारा संकल्प",
      title: "क्रॉस बेंच की प्रेरक यात्रा",
      desc1: "संसदीय लोकतंत्र में क्रॉस-बेंच बौद्धिक स्वतंत्रता का सर्वोच्च प्रतीक है। यहाँ बैठने वाले सदस्य न सत्तापक्ष के चाबुक से बंधे होते हैं और न विपक्ष के पूर्वाग्रह से—वे प्रत्येक जन-मुद्दे को केवल निष्पक्ष विवेक और रणनीतिक स्पष्टता से आंकते हैं।",
      desc2: "CROSS BENCH की स्थापना शीर्ष नीति संस्थानों, प्रबंधन सलाहकारों और अनुभवी चुनावी रणनीतिकारों के संयुक्त प्रयासों से हुई। हमने देखा कि भारतीय कंसल्टिंग स्पेस या तो एकांगी पीआर प्रचार बन चुका था या दलगत गुटबाजी का शिकार।",
      desc3: "हमने उन नेताओं, सरकारों और संस्थाओं के लिए एक विश्वसनीय मंच खड़ा किया जो शोर के बजाय ठोस डेटा और खोखले प्रचार के बजाय गोपनीय रणनीतिक उत्कृष्टता चाहते हैं।",
      cta: "हमारा निष्पक्षता चार्टर पढ़ें",
      img: "./images/team_story.jpg"
    },

    // Solutions
    solutions: {
      badge: "अनुकूलित समाधान",
      title: "चार प्रमुख वर्गों के लिए विशेष परामर्श समाधान",
      subtitle: "लोकतांत्रिक शासन प्रणाली के प्रत्येक हितधारक के लिए वैज्ञानिक और अनुकूलित परामर्श पद्धति।",
      categories: [
        {
          id: "parties",
          name: "राजनीतिक दल",
          tagline: "राष्ट्रीय एवं प्रांतीय पार्टी संगठन",
          desc: "संपूर्ण चुनाव प्रबंधन, घोषणापत्र (मेनिफेस्टो) ड्राफ्टिंग, राज्य-स्तरीय वॉर रूम, वोटर सेंटीमेंट ट्रैकिंग और बूथ संगठन का सुदृढ़ीकरण।",
          deliverables: [
            "राज्य-स्तरीय चुनावी ब्लूप्रिंट एवं स्विंग वोटर मॉडलिंग",
            "सेंट्रल वॉर रूम एवं रियल-टाइम सोशल लिसनिंग",
            "घोषणापत्र निर्माण एवं जन-आकांक्षाओं का परीक्षण",
            "बूथ कमेटी परफॉरमेंस ट्रैकिंग डैशबोर्ड"
          ]
        },
        {
          id: "candidates",
          name: "व्यक्तिगत जन-प्रतिनिधि",
          tagline: "मंत्री, सांसद, विधायक एवं भावी प्रत्याशी",
          desc: "संसदीय/विधानसभा क्षेत्र का विशेष प्रबंधन, व्यक्तिगत छवि संवर्धन, स्थानीय मुद्दों की पहचान, भाषण लेखन और मतदाताओं से सीधा जुड़ाव।",
          deliverables: [
            "क्षेत्रीय जन-धारणा एवं एंटी-इंकंबेंसी ऑडिट",
            "स्थानीय डिजिटल पहुंच एवं युवा कनेक्ट रणनीति",
            "मीडिया कोचिंग एवं प्रभावशाली भाषण रूपरेखा",
            "विधायक/सांसद कार्यालय प्रबंधन की कार्यप्रणाली (SOP)"
          ]
        },
        {
          id: "ministries",
          name: "सरकारी मंत्रालय एवं विभाग",
          tagline: "केंद्रीय व राज्य प्रशासनिक निकाय",
          desc: "जनकल्याणकारी योजनाओं का निष्पक्ष थर्ड-पार्टी मूल्यांकन, नागरिक फीडबैक लूप, प्रशासनिक सुधार संवाद और नीतिगत प्रभाव विश्लेषण।",
          deliverables: [
            "योजना लाभार्थी संतुष्टि का स्वतंत्र फील्ड ऑडिट",
            "डायरेक्ट बेनिफिट ट्रांसफर (DBT) लीकेज रिपोर्ट",
            "जन-शिकायत विश्लेषण एवं अर्ली-वार्निंग डैशबोर्ड",
            "नीतिगत संचार एवं जन-जागरूकता रणनीति"
          ]
        },
        {
          id: "ngos",
          name: "एनजीओ एवं थिंक टैंक्स",
          tagline: "नागरिक समाज, परोपकारी संस्थान एवं शोध परिषद",
          desc: "जमीनी शोध को प्रामाणिक नीतिगत श्वेतपत्रों, विधायी सुधार प्रस्तावों और उच्च-स्तरीय गोलमेज बैठकों में बदलना।",
          deliverables: [
            "तथ्य-आधारित नीतिगत श्वेतपत्र (Whitepapers)",
            "जन-प्रतिनिधियों के लिए विधायी संशोधन प्रारूप",
            "हितधारकों की उच्च-स्तरीय गोलमेज परामर्श बैठकें",
            "नीतिगत सुधार हेतु मीडिया एवं जन-जागरूकता किट"
          ]
        }
      ]
    },

    // Neutrality Charter
    charter: {
      badge: "क्रॉस बेंच का मूल सिद्धांत",
      title: "हमारा संस्थागत निष्पक्षता संकल्प",
      quote: "संसदीय लोकतंत्र में क्रॉस-बेंच दलगत पूर्वाग्रहों से स्वतंत्रता का प्रतीक है। हमारी निष्ठा केवल प्रामाणिक आंकड़ों, जीवंत लोकतंत्र और मापनीय सुशासन के प्रति है।",
      points: [
        {
          title: "दलगत पूर्वाग्रह से पूर्ण मुक्ति",
          desc: "हम पेशेवर स्वतंत्रता बनाए रखते हैं; हमारी सेवाएं विचारधारा पर नहीं, बल्कि रणनीतिक स्पष्टता और तथ्यों पर आधारित हैं।"
        },
        {
          title: "अभेद्य डेटा गोपनीयता (Air-Gapped)",
          desc: "सभी क्लाइंट डेटा, आंतरिक पोल्स और चुनावी रणनीतियां कठोर गैर-प्रकटीकरण (NDA) अनुबंधों के तहत पूर्णतः सुरक्षित हैं।"
        },
        {
          title: "तथ्यपरक व वैज्ञानिक आधार",
          desc: "हम सुनी-सुनाई बातों को नकारते हैं। प्रत्येक सलाह ठोस सांख्यिकी और जमीनी फील्ड सत्यापन पर आधारित होती है।"
        },
        {
          title: "लोकतांत्रिक व्यवस्था का संवर्धन",
          desc: "चाहे मतदान प्रतिशत बढ़ाना हो या जन-स्वास्थ्य योजनाओं को सुधारना, हमारा लक्ष्य शासन को उत्तरदायी और पारदर्शी बनाना है।"
        }
      ]
    },

    // Insights
    insights: {
      badge: "शोध एवं प्रमाण",
      title: "दृष्टिकोण एवं रणनीतिक विश्लेषण",
      subtitle: "हमारे वरिष्ठ शोध दल द्वारा तैयार निष्पक्ष चुनावी विश्लेषण, डेटा रिपोर्ट्स और नीतिगत श्वेतपत्र।",
      articles: [
        {
          tag: "चुनावी रणनीति",
          date: "Q1 2026",
          title: "बहुकोणीय विधानसभा चुनावों में स्विंग वोटर्स का गणित",
          excerpt: "विधानसभा चुनावों में 1.8% से कम के सूक्ष्म-जनसांख्यिकीय बदलाव किस प्रकार सीटों के नतीजों को बदल देते हैं, इसका विस्तृत विश्लेषण।",
          readTime: "8 मिनट पठन"
        },
        {
          tag: "लोक नीति",
          date: "Q1 2026",
          title: "ग्रामीण कल्याणकारी योजनाओं में अंतिम छोर तक DBT की प्रभावशीलता",
          excerpt: "प्रत्यक्ष लाभ अंतरण (DBT) में तकनीकी बाधाओं, बायोमेट्रिक विफलता और नागरिक शिकायत निवारण का 14 जिलों में किया गया फील्ड ऑडिट।",
          readTime: "10 मिनट पठन"
        },
        {
          tag: "वॉर रूम प्रबंधन",
          date: "Q4 2025",
          title: "चुनावी वॉर रूम में डिजिटल दुष्प्रचार से निपटने की त्वरित रणनीति",
          excerpt: "सोशल मीडिया पर भ्रामक नैरेटिव की पहचान और 45 मिनट के भीतर सटीक और आधिकारिक काउंटर-मैसेजिंग तैयार करने का प्रोटोकॉल।",
          readTime: "7 मिनट पठन"
        }
      ]
    },

    // Contact
    contact: {
      badge: "सुरक्षित इनटेक",
      title: "गोपनीय परामर्श संपर्क",
      subtitle: "वरिष्ठ नेतृत्व के साथ प्रत्यक्ष, एन्क्रिप्टेड और पूर्णतः गोपनीय परामर्श हेतु संपर्क करें।",
      intakeNote: "सभी वार्तालाप सख्त गैर-प्रकटीकरण (NDA) प्रोटोकॉल के तहत संरक्षित हैं। परामर्श केवल वरिष्ठ प्रैक्टिस डायरेक्टर्स द्वारा संचालित किए जाते हैं।",
      form: {
        fullName: "पूरा नाम",
        designation: "पद / दायित्व",
        organization: "संगठन / दल / विभाग का नाम",
        vertical: "परामर्श का क्षेत्र (Domain)",
        verticalOptions: [
          "चुनावी रणनीति एवं कैंपेन (पार्टी स्तर)",
          "क्षेत्रीय प्रबंधन एवं लीडरशिप एडवाइजरी (सांसद/विधायक/प्रत्याशी)",
          "लोक नीति एवं सुशासन ऑडिट (मंत्रालय/प्रशासन)",
          "रणनीतिक शोध एवं नीतिगत एडवोकेसी (NGO/थिंक टैंक)",
          "समग्र 360° वार्षिक रिटेनर"
        ],
        contactMethod: "पसंदीदा संपर्क माध्यम",
        contactPlaceholder: "आधिकारिक ईमेल या गोपनीय मोबाइल नंबर",
        scope: "परामर्श का संक्षिप्त विवरण",
        scopePlaceholder: "अपने रणनीतिक लक्ष्य, आगामी चुनाव अथवा नीतिगत कार्यक्षेत्र का संक्षेप में उल्लेख करें...",
        confidentialityPledge: "मैं चाहता हूँ कि यह परामर्श पूर्ण गोपनीयता और NDA अनुबंध के तहत रहे।",
        submitBtn: "गोपनीय परामर्श का अनुरोध भेजें",
        successMsg: "आपका परामर्श अनुरोध हमारे गोपनीय इनटेक प्रोटोकॉल के तहत दर्ज कर लिया गया है। वरिष्ठ प्रैक्टिस डायरेक्टर अगले 24 घंटे के भीतर आपके पसंदीदा माध्यम से संपर्क करेंगे।"
      },
      channels: {
        headquarters: "नई दिल्ली समन्वय केंद्र (प्रशासनिक एवं नीतिगत एन्क्लेव)",
        email: "advisory@crossbench.in",
        securityNotice: "आरंभिक सत्यापन के पश्चात सुरक्षित PGP एन्क्रिप्टेड ईमेल और व्यक्तिगत बैठक की व्यवस्था उपलब्ध कराई जाती है।"
      }
    },

    // Footer
    footer: {
      desc: "CROSS BENCH चुनावी रणनीति और लोक नीति के संगम पर कार्य करने वाली स्वतंत्र, गैर-पक्षपातपूर्ण परामर्श संस्था है। हम पूर्ण निष्पक्षता और डेटा विज्ञान के साथ दलों, जन-प्रतिनिधियों, मंत्रालयों और नागरिक संस्थाओं की सेवा करते हैं।",
      quickLinksTitle: "मुख्य लिंक्स",
      servicesTitle: "हमारी सेवाएं",
      complianceTitle: "संस्थागत मानक",
      complianceItems: [
        "गैर-पक्षपातपूर्ण आचार संहिता",
        "अभेद्य डेटा सुरक्षा प्रोटोकॉल",
        "क्लाइंट गोपनीयता अनुबंध (NDA)",
        "वरिष्ठ सलाहकार नेटवर्क (गोपनीय संवाद)"
      ],
      copyright: "© 2026 क्रॉस बेंच। सर्वाधिकार सुरक्षित। पूर्णतः गोपनीय।"
    }
  }
};
