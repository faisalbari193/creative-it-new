import React, { useState } from 'react';
import { CONNECTED_COMPANIES } from '../data/coursesData';

export const CompaniesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'working-with' | 'members-of' | 'our-concerns'>('working-with');

  const filteredCompanies = CONNECTED_COMPANIES.filter((c) => c.category === activeTab);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight font-heading">
            3000+ Companies Are Connected to Us
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-6 sm:gap-12 border-b border-neutral-200 mb-10 max-w-xl mx-auto">
          {[
            { id: 'working-with', label: 'Working with' },
            { id: 'members-of', label: 'Members of' },
            { id: 'our-concerns', label: 'Our Concerns' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-companies-${tab.id}`}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative pb-3 text-sm sm:text-base font-bold transition-colors cursor-pointer ${
                  isActive ? 'text-[#d92228]' : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d92228] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {filteredCompanies.map((company, index) => (
            <div
              key={index}
              className="bg-neutral-50/70 border border-neutral-200/80 rounded-2xl p-5 flex flex-col items-center justify-center text-center gap-2 hover:shadow-xs hover:border-red-200 transition-all group"
            >
              <div className="w-13 h-13 rounded-xl bg-white border border-neutral-200 flex items-center justify-center font-black text-sm tracking-wider text-neutral-800 group-hover:text-[#d92228] group-hover:border-red-300 transition-colors shadow-2xs font-heading">
                {company.logoText}
              </div>
              <span className="text-xs sm:text-sm font-bold text-neutral-800 line-clamp-1">
                {company.name}
              </span>
              {company.subText && (
                <span className="text-xs text-neutral-500 font-medium line-clamp-1">
                  {company.subText}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
