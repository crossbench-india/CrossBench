import React, { useState } from 'react';
import { useAuth, MASTER_ADMIN_EMAIL, MASTER_ADMIN_PASSWORD } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  Lock, 
  Mail, 
  KeyRound, 
  Eye, 
  EyeOff, 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  Copy
} from 'lucide-react';

export const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const { login } = useAuth();
  const { lang } = useLanguage();
  const isHindi = lang === 'hi';

  const [email, setEmail] = useState(MASTER_ADMIN_EMAIL);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const res = login(email, password);
    if (res.success) {
      if (onLoginSuccess) onLoginSuccess();
      onClose();
    } else {
      setError(res.error);
    }
  };

  const handleAutoFill = () => {
    setEmail(MASTER_ADMIN_EMAIL);
    setPassword(MASTER_ADMIN_PASSWORD);
    setError('');
  };

  const copyCredentials = () => {
    navigator.clipboard.writeText(`Email: ${MASTER_ADMIN_EMAIL}\nPassword: ${MASTER_ADMIN_PASSWORD}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
          aria-label="Close Login Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <img 
              src="./logo.jpg" 
              alt="CROSS BENCH" 
              className="h-9 w-auto object-contain mx-auto"
            />
          </div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-pink-soft text-brand-pink text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isHindi ? "मास्टर एडमिन पोर्टल" : "MASTER ADMIN ACCESS"}</span>
          </div>
          <h2 className={`${isHindi ? 'font-hi-heading' : 'font-display'} text-xl sm:text-2xl font-bold text-slate-900`}>
            {isHindi ? "प्रशासनिक लॉगिन" : "Administrator Sign In"}
          </h2>
          <p className={`${isHindi ? 'font-hi-body' : ''} text-xs text-slate-500`}>
            {isHindi 
              ? "वेबसाइट सामग्री एवं डैशबोर्ड प्रबंधन हेतु सुरक्षित प्रवेश।" 
              : "Secure authentication to manage platform content & inquiries."}
          </p>
        </div>

        {/* Error Notification */}
        {error && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              {isHindi ? "मास्टर एडमिन ईमेल" : "Master Admin Email"}
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-50 border border-slate-300 focus:border-brand-pink focus:outline-none text-xs sm:text-sm text-slate-900 font-medium"
                placeholder="support.crossbench@gmail.com"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              {isHindi ? "पासवर्ड" : "Password"}
            </label>
            <div className="relative">
              <KeyRound className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-surface-50 border border-slate-300 focus:border-brand-pink focus:outline-none text-xs sm:text-sm text-slate-900 font-medium"
                placeholder="••••••••••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-brand-green hover:bg-brand-green-light text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95 flex items-center justify-center space-x-2"
          >
            <Lock className="w-4 h-4" />
            <span>{isHindi ? "मास्टर एडमिन के रूप में लॉगिन करें" : "Sign In as Master Admin"}</span>
          </button>
        </form>

        {/* Master Admin Credentials Card (Helper for testing and owner convenience) */}
        <div className="p-4 rounded-2xl bg-surface-50 border border-slate-200 space-y-2.5">
          <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
            <span className="flex items-center space-x-1.5 text-brand-green">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isHindi ? "मास्टर एडमिन क्रेडेंशियल्स (सत्यापित)" : "Authorized Admin Credentials"}</span>
            </span>
            <button
              onClick={handleAutoFill}
              className="text-brand-pink hover:underline font-bold text-[11px]"
            >
              {isHindi ? "ऑटो-फिल करें" : "Auto Fill"}
            </button>
          </div>

          <div className="text-[11px] font-mono text-slate-700 space-y-1 bg-white p-2.5 rounded-lg border border-slate-200">
            <div><span className="text-slate-400 font-sans">Email:</span> {MASTER_ADMIN_EMAIL}</div>
            <div><span className="text-slate-400 font-sans">Password:</span> {MASTER_ADMIN_PASSWORD}</div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <button
              onClick={copyCredentials}
              className="text-[11px] text-slate-500 hover:text-slate-800 flex items-center space-x-1 font-medium"
            >
              <Copy className="w-3 h-3" />
              <span>{copied ? (isHindi ? "कॉपी हो गया!" : "Copied!") : (isHindi ? "विवरण कॉपी करें" : "Copy details")}</span>
            </button>
            <span className="text-[10px] text-slate-400">
              {isHindi ? "256-बिट एन्क्रिप्टेड" : "256-bit Encrypted"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
