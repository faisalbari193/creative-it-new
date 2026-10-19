import React from 'react';
import { Star, Users } from 'lucide-react';
import { Course } from '../types';
import {
  GRAPHIC_MULTIMEDIA_COURSES,
  WEB_SOFTWARE_COURSES,
  DIGITAL_MARKETING_COURSES,
  ANIMATION_3D_COURSES,
  FILM_MEDIA_COURSES,
  DIPLOMA_COURSES,
  CYBER_SECURITY_COURSES,
} from '../data/coursesData';

interface CategorizedCoursesProps {
  onOpenDiscount: (course: Course) => void;
  onAllCoursesClick: () => void;
}

export const CategorizedCoursesSection: React.FC<CategorizedCoursesProps> = ({
  onOpenDiscount,
  onAllCoursesClick,
}) => {
  const sections = [
    {
      title: 'Graphic & Multimedia',
      id: 'sec-graphic-multimedia',
      courses: GRAPHIC_MULTIMEDIA_COURSES,
    },
    {
      title: 'Web & Software',
      id: 'sec-web-software',
      courses: WEB_SOFTWARE_COURSES,
    },
    {
      title: 'Digital Marketing',
      id: 'sec-digital-marketing',
      courses: DIGITAL_MARKETING_COURSES,
    },
    {
      title: '3D Animation & Visualization',
      id: 'sec-animation-3d',
      courses: ANIMATION_3D_COURSES,
    },
    {
      title: 'Film & Media',
      id: 'sec-film-media',
      courses: FILM_MEDIA_COURSES,
    },
    {
      title: '1 Year Diploma Programs',
      id: 'sec-diploma',
      courses: DIPLOMA_COURSES,
    },
    {
      title: 'Network & Cyber Security',
      id: 'sec-cyber-security',
      courses: CYBER_SECURITY_COURSES,
    },
  ];

  return (
    <section id="categorized-courses" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {sections.map((sec) => (
          <div key={sec.id} id={sec.id} className="space-y-6">
            
            {/* Category Title */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight font-heading">
                {sec.title}
              </h2>
            </div>

            {/* 3 Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sec.courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
                >
                  {/* Image Banner */}
                  <div className="relative h-48 overflow-hidden bg-neutral-900">
                    <img
                      src={course.image}
                      alt={course.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-900/20 to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="inline-block text-xs font-bold uppercase tracking-wider bg-black/60 px-2.5 py-0.5 rounded text-amber-300 border border-white/10 mb-1">
                        {course.category}
                      </span>
                      <h4 className="font-bold text-base sm:text-lg leading-tight drop-shadow-md line-clamp-1 font-heading">
                        {course.title}
                      </h4>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-[#d92228] uppercase tracking-wide block mb-1">
                        {course.badge || 'All Course'}
                      </span>

                      <h3 className="font-extrabold text-neutral-900 text-lg sm:text-xl mb-3 leading-snug font-heading group-hover:text-[#d92228] transition-colors line-clamp-2">
                        {course.title}
                      </h3>

                      {/* Ratings & Students */}
                      <div className="flex items-center justify-between text-sm text-neutral-600 mb-5 pb-4 border-b border-neutral-100">
                        <div className="flex items-center gap-1.5 text-amber-500">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                          </div>
                          <span className="font-semibold text-neutral-700 ml-1">
                            {course.reviewsCount}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-neutral-500 font-medium">
                          <Users className="w-4 h-4" />
                          <span>{course.studentsCount}</span>
                        </div>
                      </div>
                    </div>

                    {/* Fee & Discount Action */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <div className="leading-tight">
                        <div className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Course Fee</div>
                        <div className="text-base sm:text-lg font-black text-neutral-900 font-heading">
                          {course.fee}
                        </div>
                      </div>

                      <button
                        onClick={() => onOpenDiscount(course)}
                        className="text-sm font-bold text-[#d92228] border border-[#d92228] hover:bg-[#d92228] hover:text-white px-4 py-2.5 rounded-xl transition-colors cursor-pointer shadow-2xs"
                      >
                        Click for discount
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}

        {/* All Course Button */}
        <div className="text-center pt-4">
          <button
            id="btn-all-courses-view"
            onClick={onAllCoursesClick}
            className="bg-[#d92228] hover:bg-[#b8181e] text-white px-9 py-3 rounded-xl font-bold text-sm sm:text-base shadow-md shadow-red-500/20 hover:shadow-lg transition-all cursor-pointer"
          >
            All Course
          </button>
        </div>

      </div>
    </section>
  );
};
