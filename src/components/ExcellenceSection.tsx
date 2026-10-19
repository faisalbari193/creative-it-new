import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CountUp } from './CountUp';

interface ExcellenceSectionProps {
  onBrowseCourse?: () => void;
  onLearnMore: () => void;
}

export const ExcellenceSection: React.FC<ExcellenceSectionProps> = ({
  onLearnMore,
}) => {
  const stats = [
    { value: 90000, suffix: '+', label: 'Successful Students' },
    { value: 34000, suffix: '+', label: 'Expert Freelancers' },
    { value: 42000, suffix: '+', label: 'Skilled Job Holders' },
    { value: 600, suffix: '+', label: 'Industry Expert' },
    { value: 89, suffix: '%', label: 'Success Ratio' },
    { value: 3000, suffix: '+', label: 'Companies' },
  ];

  return (
    <section id="about-excellence" className="py-16 sm:py-20 bg-neutral-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-sm font-bold text-[#d92228] tracking-wider uppercase block">
              17 Years of Excellence
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 leading-tight tracking-tight font-heading">
              Shaping World-Class IT <br className="hidden sm:inline" />
              Experts
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
              Creative IT has been working with a vision to create IT experts for the past 17 years. In a fast pacing world, where every sector relies on technology, you need to develop IT skills to secure a better future. With the utmost dedication, we have been able to make more than 90,000 IT experts who are currently working in different sectors.
            </p>

            <div className="pt-2">
              <button
                id="btn-excellence-learn-more"
                onClick={onLearnMore}
                className="bg-[#d92228] hover:bg-[#b8181e] text-white px-7 py-3 rounded-xl font-bold text-sm sm:text-base inline-flex items-center gap-2 shadow-sm shadow-red-500/20 hover:shadow-md transition-all cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Demo Image of Computer Lab / Classroom */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
                alt="Creative IT Training Lab with Students"
                className="w-full h-72 sm:h-84 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-xl text-xs sm:text-sm font-semibold text-neutral-800 shadow-sm flex items-center justify-between">
                <span>Hands-on Lab Training with Active Mentorship</span>
                <span className="text-[#d92228] font-bold">Dhanmondi Campus</span>
              </div>
            </div>
          </div>

        </div>

        {/* 6 Stats Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-neutral-200/80 shadow-2xs text-center flex flex-col items-center justify-center gap-1.5 hover:border-red-200 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#d92228] font-heading">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
