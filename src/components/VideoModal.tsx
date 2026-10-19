import React from 'react';
import { X, Play, Award, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  title: string;
  videoId: string;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  title,
  videoId,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-neutral-900 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-neutral-800">
        
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-950 border-b border-neutral-800 text-white">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d92228] animate-pulse" />
            <h4 className="text-xs sm:text-sm font-bold line-clamp-1">{title}</h4>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Bottom details */}
        <div className="p-4 sm:p-5 bg-neutral-900 text-xs sm:text-sm text-neutral-300 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-neutral-400">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Creative IT Institute Official Success Archive</span>
          </div>
          <a
            href="tel:01777308777"
            className="text-white bg-[#d92228] hover:bg-[#b8181e] px-4 py-1.5 rounded font-bold text-xs transition-colors"
          >
            Talk with a Counselor: 01777308777
          </a>
        </div>

      </div>
    </div>
  );
};
