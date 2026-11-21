import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const MASTER_ADMIN_EMAIL = 'support.crossbench@gmail.com';
export const MASTER_ADMIN_PASSWORD = 'CrossBench@Master2026#';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('crossbench_admin_session');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const isAuthenticated = !!user;

  const login = (email, password) => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPass = password.trim();

    if (cleanEmail === MASTER_ADMIN_EMAIL.toLowerCase() && cleanPass === MASTER_ADMIN_PASSWORD) {
      const userData = {
        email: MASTER_ADMIN_EMAIL,
        role: 'Master Admin',
        name: 'Master Administrator',
        loginTime: new Date().toISOString()
      };
      setUser(userData);
      localStorage.setItem('crossbench_admin_session', JSON.stringify(userData));
      return { success: true };
    }

    return { 
      success: false, 
      error: 'अमान्य क्रेडेंशियल्स! कृपया सही मास्टर एडमिन ईमेल और पासवर्ड दर्ज करें।' 
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('crossbench_admin_session');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
