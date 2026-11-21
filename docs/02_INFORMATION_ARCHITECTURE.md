# 02. CROSS BENCH — Information Architecture & Sitemap

> **System Blueprint:** Hierarchical layout, navigation taxonomy, component tree, and user journeys.

---

## 1. Global Sitemap & Navigation Structure

The platform is designed with **7 Primary Navigation Nodes**, completely accessible in English (`en`) and Hindi (`hi`):

```
CROSS BENCH Root
├── 01. Home (Landing Page)
│   ├── Top Header (Logo, Nav Links, Bilingual Toggle, CTA)
│   ├── Hero Section (Statement of Non-Partisan Gravitas + Dual CTA)
│   ├── Impact & Credibility Counter (Data Points, Non-Partisan Pledge, Pan-India Coverage)
│   ├── Dual Engine Featurette (Political Strategy vs Public Policy)
│   ├── 4-Tier Solutions Showcase (Parties, Individual Leaders, Ministries, NGOs)
│   ├── Neutrality Charter Card (Ethics, Firewalled Data Security)
│   ├── Perspectives & Insights Teaser (Whitepapers & Electoral Reports)
│   ├── Confidential Consultation CTA Banner
│   └── Global Footer (Sitemap, Compliance, Non-Disclosure Notice, Discreet Careers)
│
├── 02. Political Consulting (/political-consulting)
│   ├── Electoral Research & Booth Profiling
│   ├── 24x7 Digital & Ground War Rooms
│   ├── Candidate Winnability & Leader Persona
│   └── Ground Cadre & GOTV Turnout Machinery
│
├── 03. Public Policy & Governance (/public-policy)
│   ├── Welfare Scheme Impact Assessments
│   ├── Legislative Briefing & Policy Advisory
│   ├── Citizen Grievance & Sentiment Analytics
│   └── Strategic NGO & Think-Tank Advocacy
│
├── 04. Solutions by Client (/solutions)
│   ├── Tab 1: Political Parties (National & State Organizations)
│   ├── Tab 2: Individual Leaders (Ministers, MPs, MLAs, Candidates)
│   ├── Tab 3: Government Ministries & Departments
│   └── Tab 4: NGOs, Civil Society & Think Tanks
│
├── 05. About Us & Charter (/about)
│   ├── The Crossbench Philosophy
│   ├── Dual Leadership & Core Advisory Council
│   ├── The 5 Ethical Non-Partisan Commandments
│   └── Operating Locations & Pan-India Footprint
│
├── 06. Perspectives & Insights (/insights)
│   ├── Electoral Trend Papers (Non-Partisan Analysis)
│   ├── Public Policy Whitepapers (Socio-economic impact)
│   └── Downloadable Executive Summaries (PDF Preview)
│
└── 07. Confidential Consultation (/contact)
    ├── Secure Client Intake Protocol
    ├── End-to-End Encrypted Consultation Request Form
    ├── Direct Secure Channels (Signal/PGP/WhatsApp Advisory)
    └── Delhi NCR & Regional Coordinating Hubs
```

---

## 2. Component Design System

### 2.1 The Global Header
- **Desktop:** Sticky backdrop-blur acrylic header with subtle border (`border-slate-800/80`).
- **Logo:** Elegant Serif typography `"CROSS BENCH"` with subtext `"ADVISORY GROUP"`.
- **Language Switcher:** Instant zero-reloading pill button `[EN | हि]`.
- **Action Button:** Gold-accented `"Schedule Consultation"`.

### 2.2 The Mobile Navigation (Thumb-Zone Optimized)
- Full-screen slide-over drawer with high-contrast Devanagari & Latin typographic hierarchy.
- Direct quick-action buttons at bottom within thumb reach.

---

## 3. User Flows & Conversion Journeys

1. **Party General Secretary / Campaign Manager:**
   Home -> Dual Engine (Political) -> Electoral Strategy -> Solutions (Parties) -> Confidential Consultation.
2. **Sitting MP / MLA Candidate:**
   Home -> Solutions (Individual Leaders) -> Candidate Persona & Ground Intelligence -> Confidential Consultation.
3. **Ministry Bureaucrat / Policy Director:**
   Home -> Dual Engine (Policy) -> Scheme Impact Assessment -> Perspectives/Whitepapers -> Schedule Briefing.
4. **NGO Executive / Foundation Head:**
   Home -> Solutions (NGOs) -> Strategic Advocacy & Research -> Consultation.
