import React from 'react';
import { Clock, ChevronRight, Video, MapPin } from 'lucide-react';
import { SEMINAR_SCHEDULES } from '../data/seminarsData';

interface FreeSeminarMarqueeProps {
  onOpenSeminar: (topic?: string) => void;
}

export const FreeSeminarMarquee: React.FC<FreeSeminarMarqueeProps> = ({ onOpenSeminar }) => {
  // Duplicate for seamless infinite loop
  const seminarList = [...SEMINAR_SCHEDULES, ...SEMINAR_SCHEDULES];

  return (
    <div
      id="free-seminar-ticker"
      className="bg-neutral-900 border-b border-neutral-800 text-neutral-100 relative z-10 shadow-xs overflow-hidden select-none"
    >
      <div className="w-full flex items-center">
        {/* Left Fixed Badge / Label */}
        <div className="relative z-10 flex items-center shrink-0 pl-3 sm:pl-4 pr-3 sm:pr-4 py-1.5 sm:py-2 bg-gradient-to-r from-neutral-900 via-neutral-900 to-transparent">
          <button
            onClick={() => onOpenSeminar()}
            className="bg-[#d92228] hover:bg-[#b8181e] text-white px-2.5 py-1 sm:px-3 sm:py-1.2 rounded-md font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            <span className="hidden sm:inline tracking-wider">ফ্রি সেমিনার শিডিউল</span>
            <span className="sm:hidden tracking-wider">সেমিনার</span>
          </button>
        </div>

        {/* Scrolling Marquee Container */}
        <div className="relative flex-1 overflow-hidden py-2 sm:py-2.5 mask-marquee group">
          <div className="animate-seminar-marquee flex items-center gap-6 sm:gap-8 group-hover:[animation-play-state:paused]">
            {seminarList.map((item, idx) => (
              <button
                key={`${item.id}-${idx}`}
                onClick={() => onOpenSeminar(item.topic)}
                className="group/item inline-flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer whitespace-nowrap bg-neutral-800/60 hover:bg-neutral-800 px-3 sm:px-3.5 py-1 rounded-full border border-neutral-700/50 hover:border-red-500/50"
              >
                {/* Mode Icon */}
                {item.mode === 'online' ? (
                  <span className="text-emerald-400 flex items-center gap-1 text-[11px] font-semibold bg-emerald-950/70 border border-emerald-800/40 px-1.5 py-0.2 rounded-full">
                    <Video className="w-3 h-3" />
                    <span>অনলাইন</span>
                  </span>
                ) : (
                  <span className="text-amber-400 flex items-center gap-1 text-[11px] font-semibold bg-amber-950/70 border border-amber-800/40 px-1.5 py-0.2 rounded-full">
                    <MapPin className="w-3 h-3" />
                    <span>ক্যাম্পাস + অনলাইন</span>
                  </span>
                )}

                {/* Topic Name */}
                <span className="font-bold text-neutral-100 group-hover/item:text-red-400 transition-colors">
                  {item.topic}
                </span>

                {/* Date & Time */}
                <span className="text-neutral-400 text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3 text-red-400" />
                  <span className="text-amber-300 font-semibold">{item.day}</span>
                  <span>({item.time})</span>
                </span>

                {/* Action Tag */}
                <span className="text-[10px] bg-red-600/30 text-red-300 group-hover/item:bg-red-600 group-hover/item:text-white px-2 py-0.5 rounded-full font-bold transition-colors">
                  ফ্রি বুকিং &rarr;
                </span>

                {/* Divider dot */}
                <span className="text-neutral-600 ml-1 select-none">|</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right CTA Button */}
        <div className="relative z-20 hidden md:flex items-center shrink-0 pr-3 sm:pr-4 pl-3 py-1.5 bg-gradient-to-l from-neutral-900 via-neutral-900 to-transparent">
          <button
            id="btn-marquee-all-seminars"
            onClick={() => onOpenSeminar()}
            className="text-xs text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 font-bold px-3 py-1.5 rounded-lg border border-neutral-700 flex items-center gap-1 transition-all shadow-xs cursor-pointer"
          >
            <span>সকল শিডিউল</span>
            <ChevronRight className="w-3.5 h-3.5 text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
