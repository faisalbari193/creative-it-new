'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryBar } from './components/CategoryBar';
import { PopularCoursesSection } from './components/PopularCoursesSection';
import { StatsBanner } from './components/StatsBanner';
import { SuccessStoriesSection } from './components/SuccessStoriesSection';
import { ExclusiveSolutionsSection } from './components/ExclusiveSolutionsSection';
import { CategorizedCoursesSection } from './components/CategorizedCoursesSection';
import { ExcellenceSection } from './components/ExcellenceSection';
import { CompaniesSection } from './components/CompaniesSection';
import { AdmissionCtaSection } from './components/AdmissionCtaSection';
import { Footer } from './components/Footer';
import { DiscountModal } from './components/DiscountModal';
import { SeminarModal } from './components/SeminarModal';
import { VideoModal } from './components/VideoModal';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { ChatWithUsButton } from './components/ChatWithUsButton';
import { ContactInquiryModal } from './components/ContactInquiryModal';
import { AICourseChatbot } from './components/AICourseChatbot';
import { FreeSeminarMarquee } from './components/FreeSeminarMarquee';
import { OurFacilitiesPage } from './components/OurFacilitiesPage';
import { CareerPage } from './components/CareerPage';
import { AboutUsPage } from './components/AboutUsPage';
import { ContactUsPage } from './components/ContactUsPage';
import { DiplomaPage } from './components/DiplomaPage';
import { OurCoursePage } from './components/OurCoursePage';
import { Course } from './types';
import { POPULAR_COURSES } from './data/coursesData';

const PAGE_TITLES: Record<string, string> = {
  '/': 'Creative IT Institute | Professional IT Training in Bangladesh',
  '/our-course': 'Our Courses',
  '/diploma': 'Diploma Programs',
  '/our-faciility': 'Our Facilities',
  '/career': 'Career',
  '/about-us': 'About Us',
  '/contact-us': 'Contact Us',
};

export default function App() {
  const pathname = usePathname();
  const getRoute = (path: string) => {
    const normalizedPath = path.toLowerCase();
    if (normalizedPath === '/our-faciility' || normalizedPath === '/our-facility' || normalizedPath.startsWith('/our-faci')) {
      return '/our-faciility';
    }
    if (normalizedPath === '/career' || normalizedPath.startsWith('/career')) {
      return '/career';
    }
    if (normalizedPath === '/about-us' || normalizedPath.startsWith('/about')) {
      return '/about-us';
    }
    if (normalizedPath === '/contact-us' || normalizedPath.startsWith('/contact')) {
      return '/contact-us';
    }
    if (normalizedPath === '/diploma' || normalizedPath.startsWith('/diploma')) {
      return '/diploma';
    }
    if (normalizedPath === '/our-course' || normalizedPath.startsWith('/our-course') || normalizedPath === '/our-courses') {
      return '/our-course';
    }
    return '/';
  };

  const [currentRoute, setCurrentRoute] = useState<string>(() => getRoute(pathname || '/'));
  const [selectedCategory, setSelectedCategory] = useState<string>('graphic-multimedia');
  const [discountModalOpen, setDiscountModalOpen] = useState<boolean>(false);
  const [selectedCourseForDiscount, setSelectedCourseForDiscount] = useState<Course | null>(null);
  const [seminarModalOpen, setSeminarModalOpen] = useState<boolean>(false);
  const [selectedSeminarTopic, setSelectedSeminarTopic] = useState<string>('Graphic Design & Freelancing Career');
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
  const [activeVideoTitle, setActiveVideoTitle] = useState<string>('');
  const [activeVideoId, setActiveVideoId] = useState<string>('');
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);
  const [chatbotOpen, setChatbotOpen] = useState<boolean>(false);

  useEffect(() => {
    setCurrentRoute(getRoute(pathname || '/'));
  }, [pathname]);

  useEffect(() => {
    const pageTitle = PAGE_TITLES[currentRoute] ?? PAGE_TITLES['/'];
    document.title =
      currentRoute === '/' ? pageTitle : `${pageTitle} | Creative IT Institute`;
  }, [currentRoute]);

  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const targets = document.querySelectorAll<HTMLElement>(
      'main section, main article, main section .grid > div',
    );
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: '0px 0px -48px 0px' },
    );

    targets.forEach((target, index) => {
      target.classList.add('scroll-reveal');
      target.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [currentRoute]);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      if (path === '/our-faciility' || path === '/our-facility' || path.startsWith('/our-faci')) {
        setCurrentRoute('/our-faciility');
      } else if (path === '/career' || path.startsWith('/career')) {
        setCurrentRoute('/career');
      } else if (path === '/about-us' || path.startsWith('/about')) {
        setCurrentRoute('/about-us');
      } else if (path === '/contact-us' || path.startsWith('/contact')) {
        setCurrentRoute('/contact-us');
      } else if (path === '/diploma' || path.startsWith('/diploma')) {
        setCurrentRoute('/diploma');
      } else if (path === '/our-course' || path.startsWith('/our-course') || path === '/our-courses') {
        setCurrentRoute('/our-course');
      } else {
        setCurrentRoute('/');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (route: string) => {
    if (route === '/our-faciility' || route === '/our-facility') {
      window.history.pushState({}, '', '/our-faciility');
      setCurrentRoute('/our-faciility');
    } else if (route === '/career') {
      window.history.pushState({}, '', '/career');
      setCurrentRoute('/career');
    } else if (route === '/about-us') {
      window.history.pushState({}, '', '/about-us');
      setCurrentRoute('/about-us');
    } else if (route === '/contact-us') {
      window.history.pushState({}, '', '/contact-us');
      setCurrentRoute('/contact-us');
    } else if (route === '/diploma') {
      window.history.pushState({}, '', '/diploma');
      setCurrentRoute('/diploma');
    } else if (route === '/our-course') {
      window.history.pushState({}, '', '/our-course');
      setCurrentRoute('/our-course');
    } else {
      window.history.pushState({}, '', '/');
      setCurrentRoute('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDiscount = (course?: Course) => {
    setSelectedCourseForDiscount(course || null);
    setDiscountModalOpen(true);
  };

  const handleOpenSeminar = (topic?: string) => {
    if (topic) {
      setSelectedSeminarTopic(topic);
    }
    setSeminarModalOpen(true);
  };

  const handlePlayVideo = (title: string, videoId: string) => {
    setActiveVideoTitle(title);
    setActiveVideoId(videoId);
    setVideoModalOpen(true);
  };

  const scrollToCourses = () => {
    const el = document.getElementById('popular-courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCategorized = () => {
    const el = document.getElementById('categorized-courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExcellence = () => {
    const el = document.getElementById('about-excellence');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    const targetEl = document.getElementById(`sec-${catId}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      scrollToCourses();
    }
  };

  const handleSelectCourseByName = (courseName: string) => {
    const found = POPULAR_COURSES.find(c => c.title.toLowerCase().includes(courseName.toLowerCase()));
    if (found) {
      handleOpenDiscount(found);
    } else {
      scrollToCourses();
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-800 flex flex-col selection:bg-[#d92228] selection:text-white relative overflow-x-clip">
      {/* Free Seminar Continuous Schedule & News Marquee (Placed above Navbar on home) */}
      {currentRoute === '/' && <FreeSeminarMarquee onOpenSeminar={handleOpenSeminar} />}

      {/* Top Navbar */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenBrowse={() => {
          navigateTo('/our-course');
        }}
        onSelectCategory={(catId) => {
          if (currentRoute !== '/') {
            navigateTo('/');
            setTimeout(() => handleCategorySelect(catId), 150);
          } else {
            handleCategorySelect(catId);
          }
        }}
      />

      {/* Main Content Sections: Conditionally render OurFacilitiesPage, CareerPage, or Home */}
      {currentRoute === '/our-faciility' || currentRoute === '/our-facility' ? (
        <main key={currentRoute} className="page-enter flex-1">
          <OurFacilitiesPage
            onJoinSeminar={() => handleOpenSeminar('Our Facilities & Career Opportunities')}
            onBrowseCourse={() => {
              navigateTo('/our-course');
            }}
            onPlayVideo={handlePlayVideo}
            onBackToHome={() => navigateTo('/')}
          />
          {/* Admission Is Going on CTA */}
          <AdmissionCtaSection
            onJoinSeminar={handleOpenSeminar}
            onBrowseCourse={() => {
              navigateTo('/our-course');
            }}
          />
        </main>
      ) : currentRoute === '/career' ? (
        <main key={currentRoute} className="page-enter flex-1">
          <CareerPage
            onJoinSeminar={() => handleOpenSeminar('Career Development & Placement Seminar')}
            onBrowseCourse={() => {
              navigateTo('/our-course');
            }}
          />
        </main>
      ) : currentRoute === '/about-us' ? (
        <main key={currentRoute} className="page-enter flex-1">
          <AboutUsPage
            onBrowseCourse={() => {
              navigateTo('/our-course');
            }}
            onSelectDepartment={() => {
              navigateTo('/our-course');
            }}
          />
          {/* Admission Is Going on CTA matching screenshot */}
          <AdmissionCtaSection
            onJoinSeminar={handleOpenSeminar}
            onBrowseCourse={() => {
              navigateTo('/our-course');
            }}
          />
        </main>
      ) : currentRoute === '/contact-us' ? (
        <main key={currentRoute} className="page-enter flex-1">
          <ContactUsPage />
          {/* Admission Is Going on CTA matching screenshot */}
          <AdmissionCtaSection
            onJoinSeminar={handleOpenSeminar}
            onBrowseCourse={() => {
              navigateTo('/our-course');
            }}
          />
        </main>
      ) : currentRoute === '/diploma' ? (
        <main key={currentRoute} className="page-enter flex-1">
          <DiplomaPage
            onOpenDiscount={handleOpenDiscount}
            onEnrollCourse={handleOpenDiscount}
          />
        </main>
      ) : currentRoute === '/our-course' ? (
        <main key={currentRoute} className="page-enter flex-1">
          <OurCoursePage
            onOpenDiscount={handleOpenDiscount}
            onJoinSeminar={() => handleOpenSeminar('Our Courses & Admission Consultation')}
            onNavigateHome={() => navigateTo('/')}
          />
        </main>
      ) : (
        <main key={currentRoute} className="page-enter flex-1">
          {/* Hero Section */}
          <HeroSection
            onBrowseCourse={() => navigateTo('/our-course')}
            onJoinSeminar={handleOpenSeminar}
            onPlayVideo={handlePlayVideo}
          />

          {/* Category Carousel Bar */}
          <CategoryBar
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />

          {/* Popular Courses Carousel & Filter */}
          <PopularCoursesSection
            onOpenDiscount={handleOpenDiscount}
            onEnrollCourse={handleOpenDiscount}
          />

          {/* Stats & Trust Impact Banner (20000+, 42000+, 89%) */}
          <StatsBanner />

          {/* Success Stories Section */}
          <SuccessStoriesSection
            onPlayVideo={handlePlayVideo}
          />

          {/* Exclusive Solutions that Set Us Apart */}
          <ExclusiveSolutionsSection
            onFacilityClick={() => navigateTo('/our-faciility')}
          />

          {/* Categorized Courses Grids (Graphic & Multimedia, Web & Software, Digital Marketing, etc.) */}
          <CategorizedCoursesSection
            onOpenDiscount={handleOpenDiscount}
            onAllCoursesClick={() => navigateTo('/our-course')}
          />

          {/* 17 Years of Excellence - Shaping World-Class IT Experts */}
          <ExcellenceSection
            onLearnMore={scrollToCourses}
          />

          {/* 3000+ Connected Companies */}
          <CompaniesSection />

          {/* Admission Is Going on CTA */}
          <AdmissionCtaSection
            onJoinSeminar={handleOpenSeminar}
            onBrowseCourse={() => navigateTo('/our-course')}
          />
        </main>
      )}

      {/* Footer & Copyright */}
      <Footer
        onOpenSeminar={handleOpenSeminar}
        onSelectCourseName={handleSelectCourseByName}
        onFacilityClick={() => navigateTo('/our-faciility')}
        onCareerClick={() => navigateTo('/career')}
        onAboutClick={() => navigateTo('/about-us')}
        onContactClick={() => navigateTo('/contact-us')}
        showPaymentMerchant={currentRoute === '/'}
      />

      {/* Interactive Modals */}
      <DiscountModal
        isOpen={discountModalOpen}
        onClose={() => setDiscountModalOpen(false)}
        selectedCourse={selectedCourseForDiscount}
      />

      <SeminarModal
        isOpen={seminarModalOpen}
        onClose={() => setSeminarModalOpen(false)}
        initialTopic={selectedSeminarTopic}
      />

      <VideoModal
        isOpen={videoModalOpen}
        title={activeVideoTitle}
        videoId={activeVideoId}
        onClose={() => setVideoModalOpen(false)}
      />

      {/* Floating Chat / AI Course Advisor Button */}
      <ChatWithUsButton
        onClick={() => setChatbotOpen(true)}
        isOpen={chatbotOpen}
      />

      {/* Floating Scroll to Top Button */}
      <ScrollToTopButton />

      {/* Quick Student Inquiry Modal */}
      <ContactInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />

      {/* AI Course Advisor & Comparison Chatbot */}
      <AICourseChatbot
        isOpen={chatbotOpen}
        onClose={() => setChatbotOpen(false)}
        onOpenInquiry={() => {
          setChatbotOpen(false);
          setInquiryModalOpen(true);
        }}
        onOpenDiscount={() => {
          setChatbotOpen(false);
          handleOpenDiscount();
        }}
      />
    </div>
  );
}
