// hooks/useScrollTracking.ts
"use client";

import { useEffect, useRef } from 'react';
import { engageParisEvents } from '@/lib/gtm';

interface ScrollTrackingOptions {
  thresholds?: number[]; // Pourcentages à tracker (ex: [25, 50, 75, 100])
  rootMargin?: string;
  enabled?: boolean;
}

export const useScrollTracking = (options: ScrollTrackingOptions = {}) => {
  const {
    thresholds = [25, 50, 75, 100],
    enabled = true
  } = options;

  const trackedThresholds = useRef<Set<number>>(new Set());
  const isTracking = useRef(false);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      // Tracker les seuils atteints
      thresholds.forEach(threshold => {
        if (scrollPercentage >= threshold && !trackedThresholds.current.has(threshold)) {
          trackedThresholds.current.add(threshold);
          engageParisEvents.scrollDepth(threshold);
        }
      });
    };

    const throttledHandleScroll = throttle(handleScroll, 500);
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [enabled, thresholds]);

  // Reset pour une nouvelle page
  const resetTracking = () => {
    trackedThresholds.current.clear();
  };

  return { resetTracking };
};

// Utilitaire throttle
function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;
  
  return (...args: Parameters<T>) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}