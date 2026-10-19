import React from 'react';
import { LayoutGrid, Play, ShieldCheck, Award, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onBrowseCourse: () => void;
  onJoinSeminar: () => void;
  onPlayVideo: (title: string, videoId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onBrowseCourse,
  onJoinSeminar,
  onPlayVideo,
}) => {
  return (
    <section id="home" className="relative isolate pt-10 pb-20 sm:pt-14 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-red-50/50 via-white to-neutral-50/70">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 -z-10 opacity-[0.28] [background-image:radial-gradient(#d9222820_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100/80 text-[#d92228] text-xs sm:text-sm font-bold tracking-wide shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-[#d92228]" />
              <span>Unleash Your Potential</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 leading-[1.12] tracking-tight font-heading">
              Become an IT Pro & <br />
              Rule the <span className="text-[#d92228]">Digital World</span>
            </h1>

            {/* Paragraph Text */}
            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              With a vision to turn manpower into assets, Creative IT Institute is ready to enhance your learning experience with skilled mentors and an updated curriculum. Pick your desired course from more than 45 trendy options.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="btn-hero-browse-courses"
                onClick={onBrowseCourse}
                className="bg-[#d92228] hover:bg-[#b8181e] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center gap-2.5 shadow-md shadow-red-500/20 hover:shadow-lg transition-all cursor-pointer"
              >
                <LayoutGrid className="w-4 h-4" />
                <span>Browse Course</span>
              </button>

              <button
                id="btn-hero-join-seminar"
                onClick={onJoinSeminar}
                className="bg-white hover:bg-red-50 text-[#d92228] border-2 border-[#d92228] px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base flex items-center gap-2.5 transition-all cursor-pointer shadow-2xs"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Join free seminar</span>
              </button>
            </div>

            {/* ISO Certification Badge */}
            <div className="pt-4 flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 shadow-2xs">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-sm font-semibold text-neutral-700 leading-snug">
                One of the best ISO certified IT <br className="hidden sm:inline" />
                Training Institutes in Bangladesh
              </div>
            </div>

          </div>

          {/* Right Hero Visual (Collage with video trigger) */}
          <div className="lg:col-span-6 relative min-h-[390px] sm:min-h-[450px]">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900 group cursor-pointer"
              onClick={() => onPlayVideo('Creative IT South Asia Best IT Institute', 'dQw4w9WgXcQ')}
            >
              {/* Background demo hero image */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Creative IT South Asia's Best IT Institute"
                fetchPriority="high"
                className="w-full h-80 sm:h-[28rem] object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-900/40 to-black/30" />

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#d92228] group-hover:bg-[#b8181e] text-white flex items-center justify-center shadow-xl shadow-red-900/50 group-hover:scale-110 transition-all duration-300 ring-4 ring-white/80">
                  <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
                </div>
              </div>

              {/* Top Banner Tag */}
              <div className="absolute top-4 left-4 bg-[#d92228] text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Special Achievement</span>
              </div>

              {/* South Asia Best Institute Bengali Card Overlay on bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xl shadow-lg border border-neutral-100 flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[#d92228] font-bold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#d92228]" />
                    <span>সাউথ এশিয়ান বিজনেস এক্সিলেন্স অ্যাওয়ার্ড</span>
                  </div>
                  <h3 className="text-neutral-900 font-bold text-base sm:text-lg font-bengali leading-snug">
                    ক্রিয়েটিভ আইটি ইনস্টিটিউট এখন দক্ষিণ এশিয়ার সেরা আইটি প্রতিষ্ঠান
                  </h3>
                </div>

                <div className="hidden sm:flex flex-col items-center justify-center bg-amber-500/10 border border-amber-500/30 px-3.5 py-2.5 rounded-xl text-amber-900 shrink-0">
                  <Award className="w-6 h-6 text-amber-600" />
                  <span className="text-xs font-bold uppercase tracking-wide">Best IT</span>
                </div>
              </div>
            </div>

            {/* Floating Decorative Pill - positioned cleanly below the Special Achievement card */}
            <div className="hidden sm:flex absolute -bottom-11 sm:-bottom-14 -left-2 sm:-left-6 z-20 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-3.5 sm:p-4 border border-neutral-100 items-center gap-3.5 hover:-translate-y-1 transition-transform duration-300 ring-1 ring-black/5">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#d92228] flex items-center justify-center font-extrabold text-xl font-heading shadow-xs">
                45+
              </div>
              <div>
                <div className="font-bold text-sm sm:text-base text-neutral-800 flex items-center gap-2">
                  <span>Trendy Courses</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Active Admissions" />
                </div>
                <div className="text-xs sm:text-sm text-neutral-500 font-medium">Online & Offline Batches</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
