'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: number;
  suffix?: string;
}

export const CountUp: React.FC<CountUpProps> = ({ value, suffix = '+' }) => {
  const counterRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    let frameId = 0;
    const animateCount = () => {
      const startTime = performance.now();
      const duration = 1500;
      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = 1 - (1 - progress) ** 4;
        setCount(Math.round(value * easedProgress));
        if (progress < 1) frameId = window.requestAnimationFrame(animate);
      };
      frameId = window.requestAnimationFrame(animate);
    };

    if (typeof IntersectionObserver === 'undefined') {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setCount(value);
      } else {
        animateCount();
      }
      return () => window.cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setCount(value);
        return;
      }
      animateCount();
    }, { threshold: 0.45 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <span ref={counterRef} aria-label={`${value.toLocaleString()}${suffix}`}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};
