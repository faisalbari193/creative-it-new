import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

interface ChatWithUsButtonProps {
  onClick: () => void;
  isOpen?: boolean;
}

export const ChatWithUsButton: React.FC<ChatWithUsButtonProps> = ({ onClick, isOpen }) => {
  if (isOpen) return null;

  return (
    <button
      id="btn-chat-with-us"
      type="button"
      onClick={onClick}
      aria-label="AI Course Advisor and Chat with us"
      title="AI Course Advisor - Ask questions & compare courses"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-gradient-to-r from-[#d92228] to-[#b8181e] hover:from-[#b8181e] hover:to-[#991217] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-xl shadow-red-600/35 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group border-2 border-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
    >
      {/* Live Online Ping Dot */}
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
      </span>

      <div className="relative flex items-center justify-center">
        <Bot className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        <Sparkles className="w-2.5 h-2.5 text-amber-300 absolute -top-1 -right-1 animate-pulse" />
      </div>
      
      <div className="text-left select-none">
        <span className="text-xs sm:text-sm font-bold tracking-tight block leading-none">
          AI Course Advisor
        </span>
        <span className="text-[10px] text-white/80 font-medium block mt-0.5 leading-none">
          Course Explanation & Comparison
        </span>
      </div>
    </button>
  );
};
