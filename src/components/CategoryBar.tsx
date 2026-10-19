import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Palette, Code, TrendingUp, Box, Film, GraduationCap, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../data/coursesData';

interface CategoryBarProps {
  selectedCategory?: string;
  onSelectCategory?: (categoryId: string) => void;
}

export const CategoryBar: React.FC<CategoryBarProps> = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  
  // Drag-to-scroll state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const hasMoved = useRef(false);

  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScrollability();
    el.addEventListener('scroll', checkScrollability, { passive: true });
    window.addEventListener('resize', checkScrollability);

    return () => {
      el.removeEventListener('scroll', checkScrollability);
      window.removeEventListener('resize', checkScrollability);
    };
  }, [checkScrollability]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollStart.current = el.scrollLeft;
    hasMoved.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) {
      hasMoved.current = true;
    }
    scrollContainerRef.current.scrollLeft = scrollStart.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#d92228]" strokeWidth={2} />;
      case 'Code':
        return <Code className="w-6 h-6 text-[#1d4ed8]" strokeWidth={2.2} />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#059669]" strokeWidth={2.2} />;
      case 'Box':
        return <Box className="w-6 h-6 text-[#9333ea]" strokeWidth={2} />;
      case 'Film':
        return <Film className="w-6 h-6 text-[#d97706]" strokeWidth={2} />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#4f46e5]" strokeWidth={2} />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#0284c7]" strokeWidth={2} />;
      default:
        return <Palette className="w-6 h-6 text-[#d92228]" strokeWidth={2} />;
    }
  };

  return (
    <section id="category-bar-section" className="w-full bg-white py-6 sm:py-8 border-y border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container for both Desktop Grid and Mobile/Tablet Smooth Slider */}
        <div className="relative">
          
          {/* Mobile & Tablet Left Arrow Button (shown when scrollable) */}
          {canScrollLeft && (
            <button
              id="btn-cat-prev"
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Previous Category"
              className="lg:hidden absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 shadow-md border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-[#d92228] hover:border-red-300 transition-all cursor-pointer backdrop-blur-xs"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}

          {/* 
            Desktop: Clean 7-Column Grid (Zero horizontal scroll needed!)
            Mobile / Tablet: Smooth draggable, swipeable horizontal row with hidden scrollbar
            NOTE: No route navigation is added here, only the clean hover effect is maintained per user instruction.
          */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className="flex lg:grid lg:grid-cols-7 gap-3 sm:gap-3.5 overflow-x-auto lg:overflow-visible no-scrollbar scroll-smooth py-1 px-1 w-full select-none cursor-grab active:cursor-grabbing lg:cursor-default"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {CATEGORIES.map((category) => {
              return (
                <div
                  key={category.id}
                  id={`cat-card-${category.id}`}
                  className="flex-shrink-0 w-44 sm:w-48 lg:w-auto p-4 sm:p-5 rounded-2xl border border-neutral-200 hover:border-[#d92228] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center flex flex-col items-center justify-center gap-3.5 group bg-white shadow-2xs cursor-pointer select-none"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-neutral-50/80 group-hover:bg-red-50/40 border border-neutral-100/80 flex items-center justify-center transition-colors">
                    {getIcon(category.iconName)}
                  </div>
                  <span className="text-sm sm:text-[15px] font-bold text-neutral-800 group-hover:text-neutral-900 transition-colors line-clamp-2 leading-tight">
                    {category.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mobile & Tablet Right Arrow Button (shown when scrollable) */}
          {canScrollRight && (
            <button
              id="btn-cat-next"
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Next Category"
              className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 shadow-md border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-[#d92228] hover:border-red-300 transition-all cursor-pointer backdrop-blur-xs"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}

        </div>
      </div>
    </section>
  );
};
