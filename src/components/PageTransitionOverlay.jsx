import React from 'react';

export const PageTransitionOverlay = ({ isVisible, message }) => {
  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/75 backdrop-blur-md transition-all duration-300 animate-fadeIn"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="relative flex flex-col items-center justify-center text-center p-6">
        {/* Glowing Halo in Brand Colors */}
        <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-brand-pink/20 via-brand-green/15 to-brand-lime/20 blur-2xl animate-pulse" />

        {/* Circular Emblem Favicon with Soft Shadow & Border */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-brand-pink to-brand-green shadow-2xl flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-white p-1 overflow-hidden">
            <img 
              src="./favicon.png" 
              alt="CROSS BENCH Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Brand Text */}
        <div className="relative mt-4 space-y-1">
          <h3 className="font-display font-extrabold text-sm sm:text-base tracking-widest text-slate-900 uppercase">
            CROSS BENCH
          </h3>
          <p className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-wider">
            {message || "Independent Insight • Strategic Impact"}
          </p>
        </div>

        {/* Subtle Live Animated Dot Track */}
        <div className="relative mt-3 flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-pink animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 rounded-full bg-brand-green animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 rounded-full bg-brand-lime animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
};
