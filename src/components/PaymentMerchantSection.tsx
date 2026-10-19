import React, { useEffect, useRef } from 'react';

export const PaymentMerchantSection: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = cardsRef.current;
    const cards = container?.querySelectorAll<HTMLElement>('.payment-merchant-card');
    if (!container || !cards?.length) return;

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cards.forEach(card => card.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      cards.forEach(card => card.classList.add('is-visible'));
      observer.disconnect();
    }, { threshold: 0.2 });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 bg-[#fcfcfd] border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-xl sm:text-2xl font-bold text-neutral-800 mb-8 font-heading">
          Our Payment Merchant
        </h3>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: bKash */}
          <div className="payment-merchant-card from-left bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center">
            {/* bKash styled logo */}
            <div className="flex items-center justify-center gap-1.5 mb-3">
              <span className="text-2xl font-black text-[#e2136e] tracking-tight">bKash</span>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#e2136e]">
                <path d="M12 2L2 19h20L12 2zm0 4l6.5 11h-13L12 6z" />
              </svg>
            </div>
            <div className="space-y-1 text-sm font-bold text-neutral-800">
              <p>01990779766</p>
              <p>01309014614</p>
            </div>
          </div>

          {/* Card 2: Nagad */}
          <div className="payment-merchant-card from-left bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center">
            {/* Nagad styled logo */}
            <div className="flex items-center justify-center gap-1.5 mb-3">
              <div className="w-6 h-6 rounded-full bg-[#f7931e] flex items-center justify-center text-white text-xs font-black">
                ন
              </div>
              <span className="text-2xl font-black text-[#f7931e] tracking-tight">নগদ</span>
            </div>
            <div className="space-y-1 text-sm font-bold text-neutral-800">
              <p>01309014614</p>
            </div>
          </div>

          {/* Card 3: Rocket */}
          <div className="payment-merchant-card from-right bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center">
            {/* Rocket styled logo */}
            <div className="flex items-center justify-center gap-1.5 mb-3">
              <span className="text-2xl font-black text-[#8c2d8c] tracking-tight">রকেট</span>
            </div>
            <div className="space-y-1 text-sm font-bold text-neutral-800">
              <p>013090146143</p>
            </div>
          </div>

          {/* Card 4: SSLCOMMERZ */}
          <div className="payment-merchant-card from-right bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center">
            {/* SSLCOMMERZ styled logo */}
            <div className="flex items-center justify-center gap-1 mb-3">
              <span className="text-lg font-black text-[#2b6cb0] tracking-tight">SSL</span>
              <span className="text-lg font-black text-neutral-800 tracking-tight">COMMERZ</span>
            </div>
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              SSLCOMMERZ
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
