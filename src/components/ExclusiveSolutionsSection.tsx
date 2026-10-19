import React from 'react';
import { Headphones, Video } from 'lucide-react';

interface ExclusiveSolutionsProps {
  onFacilityClick: () => void;
}

export const ExclusiveSolutionsSection: React.FC<ExclusiveSolutionsProps> = ({ onFacilityClick }) => {
  return (
    <section id="exclusive-solutions" className="py-16 sm:py-20 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 mb-3 tracking-tight font-heading">
            Exclusive Solutions that Set Us Apart
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
            Our aim is to make your learning experience the best possible by providing you with additional facilities that will help you to grow without bounds.
          </p>
        </div>

        {/* 2 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-10">
          
          {/* Card 1: Lifetime Support */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#d92228] flex items-center justify-center mb-5">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 font-heading">
                Lifetime Support
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                The bond between Creative IT and its students is lifelong. We strengthen our bond with you by providing lifelong support that helps you overcome any problem in your career path even after completing their course. The personalized feedback that you receive from us, helps you grow, every day.
              </p>
            </div>
          </div>

          {/* Card 2: Class Videos */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-neutral-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#d92228] flex items-center justify-center mb-5">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 font-heading">
                Class Videos
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                No need to worry if you miss a topic in the class. We record most of our classes so that students who miss a session can still get the information they need. They can watch the videos again and again until they understand the topic thoroughly. Our motto is to provide you a flexible learning experience to gradually improve your competence.
              </p>
            </div>
          </div>

        </div>

        {/* Button: Our Facility */}
        <div className="text-center">
          <button
            id="btn-our-facility"
            onClick={onFacilityClick}
            className="bg-[#d92228] hover:bg-[#b8181e] text-white px-8 py-3 rounded-xl font-bold text-sm sm:text-base shadow-md shadow-red-500/20 hover:shadow-lg transition-all cursor-pointer"
          >
            Our Facility
          </button>
        </div>

      </div>
    </section>
  );
};
