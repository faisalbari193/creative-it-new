import React, { useState } from 'react';
import { Play, Award, Sparkles, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { SUCCESS_STORIES } from '../data/coursesData';

interface SuccessStoriesSectionProps {
  onPlayVideo: (title: string, videoId: string) => void;
  onSeeMore?: () => void;
}

const TAG_COLOR_MAP: Record<string, { bg: string; text: string }> = {
  'Interior Design': { bg: 'bg-amber-400', text: 'text-neutral-900' },
  '3D Animation': { bg: 'bg-emerald-400', text: 'text-neutral-900' },
  'Web Development': { bg: 'bg-blue-400', text: 'text-neutral-900' },
  'UI/UX Design': { bg: 'bg-purple-400', text: 'text-neutral-900' },
  'Digital Marketing': { bg: 'bg-rose-400', text: 'text-neutral-900' },
  'Motion Graphics': { bg: 'bg-orange-400', text: 'text-neutral-900' },
};

export const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({
  onPlayVideo,
}) => {
  const [showAll, setShowAll] = useState(false);

  // Initially display 2 stories; when showAll is true, display all 6 stories
  const visibleStories = showAll ? SUCCESS_STORIES : SUCCESS_STORIES.slice(0, 2);

  const handleToggle = () => {
    if (showAll) {
      setShowAll(false);
      // Smoothly scroll back to the success stories section header
      const section = document.getElementById('success-stories');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setShowAll(true);
    }
  };

  return (
    <section id="success-stories" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#d92228] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Alumni Achievements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 mb-3 tracking-tight font-heading">
            Success Stories
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
            The presence of our students in the ever expanding IT industry motivates us, drives us to guide more people towards a sustainable future.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
          {visibleStories.map((story) => {
            const tagStyle = TAG_COLOR_MAP[story.tag] || { bg: 'bg-amber-400', text: 'text-neutral-900' };

            return (
              <div
                key={story.id}
                id={`story-card-${story.id}`}
                onClick={() => onPlayVideo(story.title, story.youtubeId || 'dQw4w9WgXcQ')}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900 shadow-lg border border-neutral-200 cursor-pointer aspect-video flex flex-col justify-end transition-all hover:shadow-2xl"
              >
                {/* Background Demo Image */}
                <img
                  src={story.image}
                  alt={story.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-900/40 to-black/20" />

                {/* Play Button in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#d92228] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ring-4 ring-white/70">
                    <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                  </div>
                </div>

                {/* Bottom Content Tag & Text */}
                <div className="relative p-5 sm:p-6 z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-flex items-center gap-1 text-xs font-black uppercase px-2.5 py-0.5 rounded-sm shadow-xs ${tagStyle.bg} ${tagStyle.text}`}>
                      <Sparkles className="w-3 h-3" />
                      <span>{story.tag}</span>
                    </span>

                    {story.earning && (
                      <span className="text-xs font-bold text-amber-300 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-sm border border-amber-400/30">
                        {story.earning}
                      </span>
                    )}
                  </div>

                  <h3 className="text-white font-extrabold text-base sm:text-lg lg:text-xl leading-snug font-bengali drop-shadow-md">
                    {story.title}
                  </h3>

                  <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/15 text-xs text-neutral-300">
                    <div className="w-7 h-7 rounded-full overflow-hidden border border-white/40 shrink-0">
                      <img
                        src={story.image}
                        alt={story.studentName}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="font-medium text-white/90">
                      {story.studentName} • {story.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Toggle Button: See More / See Less */}
        <div className="text-center">
          <button
            id={showAll ? 'btn-see-less-stories' : 'btn-see-more-stories'}
            onClick={handleToggle}
            className="inline-flex items-center gap-2 bg-[#d92228] hover:bg-[#b8181e] text-white px-8 py-3 rounded-xl font-bold text-sm sm:text-base shadow-md shadow-red-500/20 hover:shadow-lg transition-all cursor-pointer group"
          >
            <span>{showAll ? 'See Less' : 'See More'}</span>
            {showAll ? (
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            )}
          </button>
        </div>

      </div>
    </section>
  );
};
