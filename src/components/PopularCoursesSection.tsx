import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Users, MessageSquare } from 'lucide-react';
import { Course } from '../types';
import {
  POPULAR_COURSES,
  GRAPHIC_MULTIMEDIA_COURSES,
  WEB_SOFTWARE_COURSES,
  DIGITAL_MARKETING_COURSES,
  ANIMATION_3D_COURSES,
  FILM_MEDIA_COURSES,
  DIPLOMA_COURSES,
  CYBER_SECURITY_COURSES,
} from '../data/coursesData';

interface PopularCoursesSectionProps {
  onOpenDiscount: (course: Course) => void;
  onEnrollCourse: (course: Course) => void;
}

type TabType =
  | 'all'
  | 'graphic'
  | 'web'
  | 'marketing'
  | 'animation'
  | 'film'
  | 'diploma'
  | 'cyber';

const TABS: { id: TabType; label: string }[] = [
  { id: 'all', label: 'All Course' },
  { id: 'graphic', label: 'Graphic & Multimedia' },
  { id: 'web', label: 'Web & Software' },
  { id: 'marketing', label: 'Digital Marketing' },
  { id: 'animation', label: '3D Animation & Visualization' },
  { id: 'film', label: 'Film & Media' },
  { id: 'diploma', label: '1 Year Diploma Programs' },
  { id: 'cyber', label: 'Network & Cyber Security' },
];

export const PopularCoursesSection: React.FC<PopularCoursesSectionProps> = ({
  onOpenDiscount,
  onEnrollCourse,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const getDisplayedCourses = () => {
    switch (activeTab) {
      case 'graphic':
        return GRAPHIC_MULTIMEDIA_COURSES;
      case 'web':
        return WEB_SOFTWARE_COURSES;
      case 'marketing':
        return DIGITAL_MARKETING_COURSES;
      case 'animation':
        return ANIMATION_3D_COURSES;
      case 'film':
        return FILM_MEDIA_COURSES;
      case 'diploma':
        return DIPLOMA_COURSES;
      case 'cyber':
        return CYBER_SECURITY_COURSES;
      default:
        return POPULAR_COURSES;
    }
  };

  const courses = getDisplayedCourses();

  return (
    <section id="popular-courses" className="py-16 sm:py-20 bg-neutral-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 mb-3 tracking-tight font-heading">
            Popular Courses
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            We have designed our courses with the most demanding professional skills. The knowledge, experience, and expertise gained through the program will ensure your desired job in the global market. From the list below you can enroll to any online or offline courses at any time.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 border-b border-neutral-200 mb-10 pb-2">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-popular-${tab.id}`}
                onClick={() => {
                  setActiveTab(tab.id);
                }}
                className={`relative px-3.5 py-2.5 text-xs sm:text-sm md:text-base font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'text-[#d92228]'
                    : 'text-neutral-600 hover:text-neutral-900'
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

        {/* Course Cards Container */}
        <div className="relative">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                id={`course-card-${course.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* Image Banner */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-neutral-900">
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Gradient & Course Name Badge on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded text-amber-300 border border-white/10 mb-1">
                      {course.category}
                    </span>
                    <h4 className="font-bold text-base sm:text-lg leading-tight drop-shadow-md line-clamp-1 font-heading">
                      {course.title}
                    </h4>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    <span className="text-xs sm:text-sm font-bold text-[#d92228] uppercase tracking-wide block mb-1">
                      {course.badge || 'All Course'}
                    </span>

                    {/* Course Title */}
                    <h3 className="font-extrabold text-neutral-900 text-lg sm:text-xl mb-3 leading-snug font-heading group-hover:text-[#d92228] transition-colors">
                      {course.title}
                    </h3>

                    {/* Star Rating & Students */}
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

                  {/* Pricing & Discount CTA */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <div className="leading-tight">
                      <div className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Course Fee</div>
                      <div className="text-base sm:text-lg font-black text-neutral-900 font-heading">
                        {course.fee}
                      </div>
                    </div>

                    <button
                      id={`btn-discount-${course.id}`}
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
      </div>
    </section>
  );
};
