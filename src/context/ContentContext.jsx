import React, { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

const STORAGE_KEY = 'crossbench_dynamic_content';
const INQUIRIES_KEY = 'crossbench_inquiries';

const defaultInquiries = [
  {
    id: "inq-101",
    fullName: "राजेश वर्मा (Rajesh Verma)",
    designation: "महासचिव (General Secretary)",
    organization: "राष्ट्रीय लोकतांत्रिक मोर्चा (National Coalition)",
    vertical: "Political Campaign Strategy (Party Level)",
    contactMethod: "+91 98100 XXXXX (Encrypted Signal)",
    scope: "आगामी 2026 विधानसभा चुनाव के लिए 120 सीटों पर बूथ प्रोफाइलिंग और 24x7 वॉर रूम सेटअप की आवश्यकता।",
    date: "2026-11-20 18:30",
    status: "Under Review"
  },
  {
    id: "inq-102",
    fullName: "डॉ. सुमित्रा सेन (Dr. S. Sen)",
    designation: "सलाहकार (Principal Advisor)",
    organization: "राज्य ग्रामीण विकास एवं पंचायती राज (State Dept.)",
    vertical: "Public Policy / Governance Advisory (Ministry/Govt)",
    contactMethod: "advisor.panchayat@state.gov.in",
    scope: "ग्रामीण प्रत्यक्ष लाभ अंतरण (DBT) योजनाओं का निष्पक्ष थर्ड-पार्टी लीकेज मूल्यांकन।",
    date: "2026-11-21 11:15",
    status: "Under NDA"
  },
  {
    id: "inq-103",
    fullName: "आलोक सिंघानिया (A. Singhania)",
    designation: "सांसद प्रतिनिधि (MP Secretariat)",
    organization: "लोकसभा संसदीय कार्यालय (Parliamentary Office)",
    vertical: "Strategic PR & Media Communications (Agency Retainer)",
    contactMethod: "singhania.media@mp-office.in",
    scope: "सांसद के 5-वर्षीय विकास रिपोर्ट कार्ड का निर्माण और रीजनल मीडिया में सकारात्मक छवि प्रबंधन।",
    date: "2026-11-21 15:40",
    status: "New"
  }
];

export const defaultSocialLinks = {
  facebook: "https://facebook.com/crossbench.india",
  instagram: "https://instagram.com/crossbench.in",
  x: "https://x.com/crossbench_in",
  youtube: "https://youtube.com/@crossbench",
  linkedin: "https://linkedin.com/company/crossbench"
};

export const ContentProvider = ({ children }) => {
  const [contentOverrides, setContentOverrides] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [inquiries, setInquiries] = useState(() => {
    try {
      const saved = localStorage.getItem(INQUIRIES_KEY);
      return saved ? JSON.parse(saved) : defaultInquiries;
    } catch {
      return defaultInquiries;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(contentOverrides));
    } catch (e) {
      console.error("Error saving content overrides", e);
    }
  }, [contentOverrides]);

  useEffect(() => {
    try {
      localStorage.setItem(INQUIRIES_KEY, JSON.stringify(inquiries));
    } catch (e) {
      console.error("Error saving inquiries", e);
    }
  }, [inquiries]);

  // Update specific field
  const updateField = (path, value) => {
    setContentOverrides(prev => ({
      ...prev,
      [path]: value
    }));
  };

  // Add inquiry from Contact form
  const addInquiry = (newInquiry) => {
    const entry = {
      id: `inq-${Date.now()}`,
      date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      status: 'New',
      ...newInquiry
    };
    setInquiries(prev => [entry, ...prev]);
  };

  // Update inquiry status
  const updateInquiryStatus = (id, newStatus) => {
    setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq));
  };

  // Reset to factory defaults
  const resetToDefaults = () => {
    setContentOverrides({});
    setInquiries(defaultInquiries);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(INQUIRIES_KEY);
  };

  // Social media links
  const socialLinks = contentOverrides['social.links'] || defaultSocialLinks;

  const updateSocialLinks = (newLinks) => {
    updateField('social.links', newLinks);
  };

  return (
    <ContentContext.Provider value={{
      contentOverrides,
      updateField,
      socialLinks,
      updateSocialLinks,
      inquiries,
      addInquiry,
      updateInquiryStatus,
      resetToDefaults
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
