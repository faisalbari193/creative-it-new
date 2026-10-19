import React from 'react';

interface AdmissionCtaProps {
  onJoinSeminar?: () => void;
  onBrowseCourse: () => void;
}

export const AdmissionCtaSection: React.FC<AdmissionCtaProps> = ({
  onBrowseCourse,
}) => {
  return (
    <section className="relative py-20 bg-[#1e1e24] text-white overflow-hidden">
      {/* Decorative Dot Matrix Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading">
          Admission Is Going on
        </h2>

        <p className="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
          Enroll to any online or offline course now, take one step ahead towards a competent career
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
          <button
            id="btn-admission-browse"
            onClick={onBrowseCourse}
            className="bg-[#d92228] hover:bg-[#b8181e] text-white px-9 py-3.5 rounded-xl font-bold text-base transition-all cursor-pointer shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            Browse Course
          </button>
        </div>
      </div>
    </section>
  );
};
