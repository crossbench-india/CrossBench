import React, { useState, useEffect, useRef } from 'react';

/**
 * AnimatedCounter component
 * Animates numbers from 0 to target value with easing and a post-arrival shimmer/blink.
 *
 * @param {string} value - String like "250+", "160B+", "450+", "100%", "₹185 Cr"
 * @param {number} duration - Animation duration in ms (default 1600ms)
 * @param {string} className - Additional CSS classes
 */
export const AnimatedCounter = ({ value, duration = 1600, className = '' }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasCompleted, setHasCompleted] = useState(false);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Parse target number and prefix/suffix
    // Handles formats like "250+", "160B+", "100%", "13,800+", "₹185 Cr", "+6.2%", "+18%"
    const rawStr = String(value || '0').trim();
    
    // Extract prefix (like "+", "₹")
    const prefixMatch = rawStr.match(/^[^\d]*/);
    const prefix = prefixMatch ? prefixMatch[0] : '';
    
    // Extract suffix (like "+", "%", "B+", " Cr", etc.)
    const suffixMatch = rawStr.slice(prefix.length).match(/[^\d.,].*$/);
    const suffix = suffixMatch ? suffixMatch[0] : '';
    
    // Extract numeric portion
    const numStr = rawStr.slice(prefix.length, rawStr.length - suffix.length).replace(/,/g, '');
    const targetNum = parseFloat(numStr) || 0;
    const isFloat = numStr.includes('.');
    const decimals = isFloat ? (numStr.split('.')[1] || '').length : 0;

    let startTimestamp = null;
    let animationFrameId = null;

    const startCounting = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Ease-out expo / cubic
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = targetNum * easeProgress;

        let formatted = isFloat 
          ? currentVal.toFixed(decimals) 
          : Math.floor(currentVal).toLocaleString('en-IN');

        setDisplayValue(`${prefix}${formatted}${suffix}`);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setDisplayValue(rawStr);
          setHasCompleted(true);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    };

    // IntersectionObserver to trigger when visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    } else {
      startCounting();
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [value, duration]);

  return (
    <span 
      ref={elementRef} 
      className={`inline-block transition-all ${hasCompleted ? 'animate-pulse-once' : ''} ${className}`}
    >
      {displayValue}
    </span>
  );
};
