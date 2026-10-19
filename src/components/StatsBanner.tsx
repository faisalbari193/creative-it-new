import React from 'react';
import { CountUp } from './CountUp';

export const StatsBanner: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: 20000+ */}
          <div className="bg-emerald-50/50 border border-emerald-100/80 rounded-2xl p-7 sm:p-8 shadow-2xs hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-500 mb-2 font-heading">
              <CountUp value={20000} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 font-heading">
              Students Choose Creative IT
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Creative IT has become a trusted training institute for not only Bangladeshi residents but also those living abroad. More than 20,000 passionate learners are working in different markets after completing courses from our institute.
            </p>
          </div>

          {/* Card 2: 42000+ */}
          <div className="bg-amber-50/50 border border-amber-100/80 rounded-2xl p-7 sm:p-8 shadow-2xs hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-500 mb-2 font-heading">
              <CountUp value={42000} />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 font-heading">
              Got Career Placement.
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Our job placement department has helped more than 42,000 skilled students find jobs in competitive global markets. Promising a better future, we have successfully raised the job placement rate to 67% by providing continuous career support to the learners.
            </p>
          </div>

          {/* Card 3: 89% */}
          <div className="bg-cyan-50/50 border border-cyan-100/80 rounded-2xl p-7 sm:p-8 shadow-2xs hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-600 mb-2 font-heading">
              <CountUp value={89} suffix="%" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-3 font-heading">
              Success Ratio
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Excelling at work needs hands-on experience. The practical approach towards problems puts our students ahead of any other competitors in global job markets. All the courses are structured considering the job prospects to make you well prepared for a bright career.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
