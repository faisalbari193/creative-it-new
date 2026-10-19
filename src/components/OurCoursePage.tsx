import React, { useState } from 'react';
import {
  Star,
  Phone,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { ALL_COURSE_CATEGORIES, CourseCardItem } from '../data/ourCoursesData';
import { Course } from '../types';

interface OurCoursePageProps {
  onOpenDiscount: (course: Course) => void;
  onJoinSeminar: () => void;
  onNavigateHome?: () => void;
}

export const OurCoursePage: React.FC<OurCoursePageProps> = ({
  onOpenDiscount,
  onJoinSeminar,
  onNavigateHome,
}) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const totalCourses = ALL_COURSE_CATEGORIES.reduce((acc, cat) => acc + cat.courses.length, 0);

  const handleCategoryClick = (categoryId: string) => {
    // If clicking already selected category, reset to all so all courses remain visible
    if (activeCategoryFilter === categoryId) {
      setActiveCategoryFilter('all');
      return;
    }
    setActiveCategoryFilter(categoryId);
    setTimeout(() => {
      const element = document.getElementById(`category-${categoryId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const toCourse = (item: CourseCardItem): Course => ({
    id: item.id,
    title: item.title,
    category: item.category,
    rating: item.rating,
    reviewsCount: item.reviewsCount,
    studentsCount: item.studentsCount,
    fee: item.fee,
    badge: item.badge || 'All Course',
    image: item.mentorImage || 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    mentor: item.mentorName || 'Creative IT Institute Faculty',
    description: `Join Creative IT's world-class ${item.title} course with hands-on live projects and dedicated lab mentorship.`,
  });

  const filteredCategories =
    activeCategoryFilter === 'all'
      ? ALL_COURSE_CATEGORIES
      : ALL_COURSE_CATEGORIES.filter((c) => c.id === activeCategoryFilter);

  return (
    <div className="w-full bg-white text-neutral-800">
      {/* 1. Top Promotional Banner matching our-course.png */}
      <section className="relative w-full bg-gradient-to-r from-[#0d1d41] via-[#102a5e] to-[#0a1835] py-5 sm:py-6 overflow-hidden border-b border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-amber-400 text-neutral-900 flex items-center justify-center shrink-0 shadow-md">
              <Phone className="w-5 h-5 fill-current" />
            </div>
            <div className="text-white">
              <h2 className="text-base sm:text-lg md:text-xl font-bold font-heading tracking-wide">
                সিট বুক করে ভর্তির আগেই ফ্রি পরামর্শ নিন এক্সপার্ট মেন্টর থেকে
              </h2>
              <p className="text-xs sm:text-sm text-blue-200/80">
                অভিজ্ঞ মেন্টরদের সাথে সরাসরি কথা বলে বেছে নিন আপনার পছন্দের কোর্স
              </p>
            </div>
          </div>

          <button
            id="btn-promo-book-now"
            onClick={onJoinSeminar}
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-extrabold px-6 py-2.5 rounded-lg text-sm sm:text-base tracking-wider uppercase shadow-lg shadow-amber-500/20 hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            BOOK NOW
          </button>
        </div>
      </section>

      {/* 2. Courses Main Heading & Intro matching our-course.png */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-heading">
          Courses
        </h1>
        <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-600 max-w-4xl mx-auto leading-relaxed">
          We offer all the trendy courses that are in demand in the global market. In addition, you are getting
          lab facilities where high-end computers with the required configuration are ready to facilitate your
          learning. After class, you can practice the topic in our labs to grow your skills. The courses are
          designed to make you confident throughout the learning journey with Creative IT.
        </p>
      </section>

      {/* 4. Admission Is Going On Sub-Header matching our-course.png */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight font-heading">
          Admission Is Going On
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          We have designed our course list with the demanding skills in the local and global market. From the
          list, you can pick any online or offline course according to your preference.
        </p>

        {/* Quick Filter Pill Chips Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          <button
            onClick={() => setActiveCategoryFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategoryFilter === 'all'
                ? 'bg-[#d92228] text-white shadow-xs'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            }`}
          >
            All Courses ({totalCourses})
          </button>
          {ALL_COURSE_CATEGORIES.map((cat) => (
            <button
              key={`pill-${cat.id}`}
              onClick={() => handleCategoryClick(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategoryFilter === cat.id
                  ? 'bg-[#d92228] text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat.title} ({cat.courses.length})
            </button>
          ))}
        </div>

      </section>

      {/* 5. Course Grids by Category matching our-course.png */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20">
        {filteredCategories.map((category) => (
          <div key={category.id} id={`category-${category.id}`} className="space-y-6 scroll-mt-24">
            {/* Category Title Header */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight font-heading">
                {category.title}
              </h3>
              <span className="text-xs font-semibold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                {category.courses.length} Courses
              </span>
            </div>

            {/* 3-Column Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
                >
                  {/* Top Banner Thumbnail Graphic */}
                  <div
                    className={`relative h-48 sm:h-52 bg-gradient-to-br ${course.thumbnailAccent} p-4 sm:p-5 flex flex-col justify-between overflow-hidden`}
                  >
                    {/* Background subtle textures/mesh */}
                    <div className="absolute inset-0 bg-radial from-white/10 to-transparent pointer-events-none" />
                    <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />

                    {/* Top Row inside thumbnail: Tag & Badge */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="bg-red-500 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider shadow-xs">
                        {course.isDiploma ? 'Diploma Program' : 'All Course'}
                      </span>
                      <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest bg-black/30 px-2 py-0.5 rounded backdrop-blur-xs">
                        Creative IT
                      </span>
                    </div>

                    {/* Content inside thumbnail: Typography + Mentor/Tech graphic */}
                    <div className="relative z-10 flex items-end justify-between gap-3 mt-auto">
                      <div className="space-y-1 max-w-[65%]">
                        {course.thumbnailSub && (
                          <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                            {course.thumbnailSub}
                          </div>
                        )}
                        <div className="text-white font-black text-base sm:text-lg leading-tight uppercase font-heading drop-shadow-sm">
                          {course.thumbnailTitle}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-white/70">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span>Industry-Standard Curriculum</span>
                        </div>
                      </div>

                      {/* Mentor portrait or tech illustration */}
                      {course.mentorImage ? (
                        <div className="relative shrink-0">
                          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 border-white/40 shadow-lg ring-2 ring-black/10">
                            <img
                              src={course.mentorImage}
                              alt={course.mentorName || 'Mentor'}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center shrink-0">
                          <Sparkles className="w-7 h-7 text-amber-300" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Course Details Card Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Red "All Course" pill */}
                      <span className="inline-block bg-red-50 text-[#d92228] text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-2">
                        {course.badge || 'All Course'}
                      </span>

                      {/* Course Title */}
                      <h4 className="text-base sm:text-[17px] font-bold text-neutral-900 group-hover:text-[#d92228] transition-colors leading-snug line-clamp-2">
                        {course.title}
                      </h4>

                      {/* Rating & Students info */}
                      <div className="flex items-center justify-between text-xs text-neutral-600 mt-3 pt-2 border-t border-neutral-100">
                        <div className="flex items-center gap-1.5">
                          <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                          </div>
                          <span className="font-semibold text-neutral-800">
                            {course.rating} ({course.reviewsCount})
                          </span>
                        </div>
                        <span className="font-medium text-neutral-500">{course.studentsCount}</span>
                      </div>
                    </div>

                    {/* Bottom Fee & Discount CTA Button */}
                    <div className="mt-4 pt-3.5 border-t border-neutral-100 flex items-center justify-between gap-2">
                      <div>
                        <div className="text-xs text-neutral-400">Course Fee</div>
                        <div className="text-sm sm:text-base font-extrabold text-neutral-900">
                          {course.fee}
                        </div>
                      </div>

                      <button
                        onClick={() => onOpenDiscount(toCourse(course))}
                        className="border border-[#d92228] text-[#d92228] hover:bg-[#d92228] hover:text-white px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer"
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
      </div>
    </div>
  );
};
