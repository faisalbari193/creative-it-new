import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Award, LayoutGrid } from 'lucide-react';

interface NavbarProps {
  onOpenBrowse?: () => void;
  onSelectCategory?: (categoryId: string) => void;
  currentRoute?: string;
  onNavigate?: (route: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBrowse,
  onSelectCategory,
  currentRoute = '/',
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetRoute?: string, hash?: string) => {
    if (targetRoute) {
      e.preventDefault();
      onNavigate?.(targetRoute);
      setMobileMenuOpen(false);
      return;
    }

    if (currentRoute !== '/' && hash) {
      e.preventDefault();
      onNavigate?.('/');
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen(false);
    }
  };

  const isRedTopBar =
    currentRoute === '/career' ||
    currentRoute === '/about-us' ||
    currentRoute === '/contact-us' ||
    currentRoute === '/diploma' ||
    currentRoute === '/our-course';

  return (
    <header
      className={`w-full sticky top-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-neutral-200/90'
          : 'bg-white shadow-xs border-b border-neutral-100'
      }`}
    >
      {/* Top Contact Strip */}
      <div
        className={`w-full py-2 px-4 sm:px-6 lg:px-8 text-xs transition-colors ${
          isRedTopBar
            ? 'bg-[#ea3840] text-white font-semibold'
            : 'bg-neutral-50/80 border-b border-neutral-100 text-neutral-600'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6 sm:gap-8">
            <a
              id="topbar-phone"
              href="tel:01777308777"
              className={`flex items-center gap-1.5 transition-colors ${
                isRedTopBar ? 'hover:text-white/90 text-white' : 'hover:text-[#d92228]'
              }`}
            >
              <Phone
                className={`w-3.5 h-3.5 ${
                  isRedTopBar ? 'text-white fill-white' : 'text-[#d92228]'
                }`}
              />
              <span className={isRedTopBar ? 'font-semibold text-white' : 'font-medium text-neutral-700'}>
                01777308777
              </span>
            </a>
            <a
              id="topbar-email"
              href="mailto:info@creativeitinstitute.com"
              className={`flex items-center gap-1.5 transition-colors ${
                isRedTopBar ? 'hover:text-white/90 text-white' : 'hover:text-[#d92228]'
              }`}
            >
              <Mail
                className={`w-3.5 h-3.5 ${
                  isRedTopBar ? 'text-white fill-white' : 'text-[#d92228]'
                }`}
              />
              <span className={isRedTopBar ? 'font-semibold text-white' : 'font-medium text-neutral-700'}>
                info@creativeitinstitute.com
              </span>
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] font-medium">
            {isRedTopBar ? null : (
              <>
                <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-full">
                  <Award className="w-3 h-3 text-amber-600" />
                  ISO 9001:2015 Certified
                </span>
                <span className="text-neutral-500">Sunday - Friday: 9:00 AM - 8:00 PM</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Best IT Institute Badge */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              id="brand-logo"
              href="#home"
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              {/* Creative IT custom vector icon */}
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-[#d92228] rounded-xl text-white shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 40 40" className="w-7 h-7 fill-current">
                  <path d="M20 5 L35 15 L35 30 L20 38 L5 30 L5 15 Z" fill="none" stroke="white" strokeWidth="2.5" />
                  <path d="M14 20 L20 14 L26 20 L20 26 Z" fill="white" />
                  <circle cx="20" cy="8" r="2.5" fill="#facc15" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 leading-none">
                  <span className="font-extrabold tracking-tight text-lg sm:text-xl text-[#d92228]">CREATIVE</span>
                </div>
                <span className="font-bold tracking-widest text-[9px] sm:text-[10px] text-neutral-800 uppercase leading-tight">
                  IT INSTITUTE
                </span>
              </div>
            </a>

            {/* South Asia's Best IT Institute Badge (shown on large desktop) */}
            <div className="hidden xl:flex items-center gap-1.5 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-lg text-amber-900 shadow-2xs shrink-0">
              <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold">
                ★
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[9px] uppercase tracking-wider text-amber-700 font-semibold">South Asia's</span>
                <span className="text-[11px] font-extrabold text-neutral-900">Best IT Institute</span>
              </div>
            </div>
          </div>

          {/* Navigation Links (Desktop 1024px+) */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-7 text-[13.5px] xl:text-[15px] font-semibold text-neutral-700 whitespace-nowrap">
            <a
              id="nav-home"
              href="#home"
              onClick={(e) => handleLinkClick(e, '/')}
              className={`${
                currentRoute === '/'
                  ? 'text-[#d92228] font-bold'
                  : 'hover:text-[#d92228] transition-colors'
              }`}
            >
              Home
            </a>
            <a
              id="nav-about"
              href="/about-us"
              onClick={(e) => handleLinkClick(e, '/about-us')}
              className={`${
                currentRoute === '/about-us'
                  ? 'text-[#d92228] font-bold'
                  : 'hover:text-[#d92228] transition-colors'
              }`}
            >
              About us
            </a>
            <a
              id="nav-stories"
              href="#success-stories"
              onClick={(e) => handleLinkClick(e, undefined, '#success-stories')}
              className="hover:text-[#d92228] transition-colors"
            >
              Success story
            </a>
            <a
              id="nav-facilities"
              href="/our-faciility"
              onClick={(e) => handleLinkClick(e, '/our-faciility')}
              className={`${
                currentRoute === '/our-faciility' || currentRoute === '/our-facility'
                  ? 'text-[#d92228] font-bold'
                  : 'hover:text-[#d92228] transition-colors'
              }`}
            >
              Our Facility
            </a>
            <a
              id="nav-diploma"
              href="/diploma"
              onClick={(e) => handleLinkClick(e, '/diploma')}
              className={`${
                currentRoute === '/diploma'
                  ? 'text-[#d92228] font-bold'
                  : 'hover:text-[#d92228] transition-colors'
              }`}
            >
              Diploma
            </a>
            <a
              id="nav-career"
              href="/career"
              onClick={(e) => handleLinkClick(e, '/career')}
              className={`${
                currentRoute === '/career'
                  ? 'text-[#d92228] font-bold'
                  : 'hover:text-[#d92228] transition-colors'
              }`}
            >
              Career
            </a>
            <a
              id="nav-contact"
              href="/contact-us"
              onClick={(e) => handleLinkClick(e, '/contact-us')}
              className={`${
                currentRoute === '/contact-us'
                  ? 'text-[#d92228] font-bold'
                  : 'hover:text-[#d92228] transition-colors'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right Action Buttons & Mobile/Tablet Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
            {/* Browse Course direct route button (hidden on /our-course, /diploma, and /career) */}
            {currentRoute !== '/our-course' &&
              currentRoute !== '/diploma' &&
              currentRoute !== '/career' && (
              <a
                id="btn-browse-course-nav"
                href="/our-course"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('/our-course');
                }}
                className="bg-[#d92228] hover:bg-[#b8181e] text-white px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 shadow-sm shadow-red-500/20 transition-all cursor-pointer whitespace-nowrap"
              >
                <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>Browse Course</span>
              </a>
            )}

            {/* Mobile & Tablet Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                id="btn-mobile-menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-700 hover:text-[#d92228] rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white px-4 sm:px-6 md:px-8 pt-4 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-1 duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '/')}
              className={`block px-3.5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                currentRoute === '/'
                  ? 'text-[#d92228] bg-red-50 font-bold'
                  : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              Home
            </a>
            <a
              href="/about-us"
              onClick={(e) => handleLinkClick(e, '/about-us')}
              className={`block px-3.5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                currentRoute === '/about-us'
                  ? 'text-[#d92228] bg-red-50 font-bold'
                  : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              About us
            </a>
            <a
              href="#success-stories"
              onClick={(e) => handleLinkClick(e, undefined, '#success-stories')}
              className="block px-3.5 py-2.5 rounded-lg font-semibold text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              Success story
            </a>
            <a
              href="/our-faciility"
              onClick={(e) => handleLinkClick(e, '/our-faciility')}
              className={`block px-3.5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                currentRoute === '/our-faciility' || currentRoute === '/our-facility'
                  ? 'text-[#d92228] bg-red-50 font-bold'
                  : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              Our Facility
            </a>
            <a
              href="/diploma"
              onClick={(e) => handleLinkClick(e, '/diploma')}
              className={`block px-3.5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                currentRoute === '/diploma'
                  ? 'text-[#d92228] bg-red-50 font-bold'
                  : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              Diploma
            </a>
            <a
              href="/career"
              onClick={(e) => handleLinkClick(e, '/career')}
              className={`block px-3.5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                currentRoute === '/career'
                  ? 'text-[#d92228] bg-red-50 font-bold'
                  : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              Career
            </a>
            <a
              href="/contact-us"
              onClick={(e) => handleLinkClick(e, '/contact-us')}
              className={`block px-3.5 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                currentRoute === '/contact-us'
                  ? 'text-[#d92228] bg-red-50 font-bold'
                  : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              Contact
            </a>
          </div>

          <div className="pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-neutral-600">
            <div>
              <span className="font-semibold text-neutral-400 uppercase tracking-wider text-[11px] mr-2">Hotlines:</span>
              <span className="font-medium">+880 1777308777, +880 1624666000</span>
            </div>
            <div className="text-neutral-500">
              <span>Sun - Fri: 9:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
