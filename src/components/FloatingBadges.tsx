import React from 'react';
import { Tag } from 'lucide-react';

interface FloatingBadgesProps {
  onOpenDiscount: () => void;
  onOpenSeminar?: () => void;
}

export const FloatingBadges: React.FC<FloatingBadgesProps> = ({
  onOpenDiscount,
  onOpenSeminar,
}) => {
  return (
    <>
      {/* Left side fixed tab: GET DISCOUNT */}
      <button
        id="btn-floating-discount"
        onClick={onOpenDiscount}
        aria-label="Get Discount"
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-[#d92228] hover:bg-[#b8181e] text-white py-3 px-2 rounded-r-md shadow-xl transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer group"
        style={{
          writingMode: 'vertical-rl',
          transform: 'translateY(-50%) rotate(180deg)',
        }}
      >
        <span className="font-bold text-[11px] tracking-widest uppercase flex items-center gap-1.5">
          <Tag className="w-3 h-3 rotate-90 group-hover:scale-110 transition-transform" />
          GET DISCOUNT
        </span>
      </button>

      {/* Right side fixed tab: Join Free Seminar matching screenshot */}
      {onOpenSeminar && (
        <button
          id="btn-floating-seminar"
          onClick={onOpenSeminar}
          aria-label="Join Free Seminar"
          className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#d92228] hover:bg-[#b8181e] text-white py-3.5 px-2 rounded-l-md shadow-xl transition-all duration-200 flex items-center justify-center cursor-pointer group"
          style={{
            writingMode: 'vertical-rl',
            transform: 'translateY(-50%)',
          }}
        >
          <span className="font-bold text-[11px] tracking-widest uppercase">
            Join Free Seminar
          </span>
        </button>
      )}
    </>
  );
};
