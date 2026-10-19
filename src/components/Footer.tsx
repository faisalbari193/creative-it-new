import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { PaymentMerchantSection } from './PaymentMerchantSection';

interface FooterProps {
  onOpenSeminar: () => void;
  onSelectCourseName: (courseName: string) => void;
  onFacilityClick?: () => void;
  onCareerClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
  showPaymentMerchant?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSeminar,
  onSelectCourseName,
  onFacilityClick,
  onCareerClick,
  onAboutClick,
  onContactClick,
  showPaymentMerchant = false,
}) => {
  const phoneNumbers = [
    '+880 1777308777',
    '+880 1624666000',
    '+880 1624888444',
    '+880 1966177177',
    '+880 1625555444',
    '+880 1990779900',
  ];

  return (
    <footer id="footer-contact" className="bg-[#18181c] text-neutral-300 text-sm">
      {/* 4 Columns Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-b border-neutral-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-base tracking-wide uppercase font-heading">
              Contact
            </h3>
            
            <div className="flex items-start gap-2.5 text-neutral-400">
              <MapPin className="w-4 h-4 text-[#d92228] shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-semibold text-neutral-200">Head Office:</span><br />
                Momtaz Plaza (4th Floor)<br />
                House # 07, Road # 04<br />
                Dhanmondi, Dhaka-1205
              </div>
            </div>

            <div className="space-y-2 pt-2 text-neutral-400">
              {phoneNumbers.map((phone, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#d92228] shrink-0" />
                  <a href={`tel:${phone}`} className="hover:text-white transition-colors">
                    {phone}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-2 text-neutral-400">
              <Mail className="w-3.5 h-3.5 text-[#d92228] shrink-0" />
              <a href="mailto:info@creativeitinstitute.com" className="hover:text-white transition-colors">
                info@creativeitinstitute.com
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-base tracking-wide uppercase font-heading">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-neutral-400">
              <li>
                <button
                  onClick={onOpenSeminar}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Free Seminar Schedule
                </button>
              </li>
              <li><a href="#about-excellence" className="hover:text-white transition-colors">Mentors</a></li>
              <li><a href="#success-stories" className="hover:text-white transition-colors">Success Story</a></li>
              <li><a href="#about-excellence" className="hover:text-white transition-colors">Our Gallery</a></li>
              <li><a href="#exclusive-solutions" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#about-excellence" className="hover:text-white transition-colors">Blog</a></li>
              <li>
                {onCareerClick ? (
                  <button
                    onClick={onCareerClick}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Career
                  </button>
                ) : (
                  <a href="/career" className="hover:text-white transition-colors">
                    Career
                  </a>
                )}
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3: Popular Courses */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-base tracking-wide uppercase font-heading">
              Popular Courses
            </h3>
            <ul className="space-y-2.5 text-neutral-400">
              {[
                'Web Development',
                'Professional Graphic Design',
                'Digital Marketing',
                'Mern Stack Development',
                'Motion Graphics',
                'Professional 3D Animation',
                'Content Writing',
              ].map((courseName, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onSelectCourseName(courseName)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {courseName}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Others */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-base tracking-wide uppercase font-heading">
              Others
            </h3>
            <ul className="space-y-2.5 text-neutral-400">
              <li>
                {onAboutClick ? (
                  <button
                    onClick={onAboutClick}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    About Us
                  </button>
                ) : (
                  <a href="/about-us" className="hover:text-white transition-colors">
                    About Us
                  </a>
                )}
              </li>
              <li>
                {onFacilityClick ? (
                  <button
                    onClick={onFacilityClick}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Our Facility
                  </button>
                ) : (
                  <a href="#exclusive-solutions" className="hover:text-white transition-colors">
                    Our Facility
                  </a>
                )}
              </li>
              <li><a href="#about-excellence" className="hover:text-white transition-colors">Our Achievement</a></li>
              <li><a href="#about-excellence" className="hover:text-white transition-colors">Career Placement</a></li>
              <li><a href="#popular-courses" className="hover:text-white transition-colors">Freelancing</a></li>
              <li><a href="#success-stories" className="hover:text-white transition-colors">Students Feedback</a></li>
              <li>
                {onContactClick ? (
                  <button
                    onClick={onContactClick}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Contact
                  </button>
                ) : (
                  <a href="/contact-us" className="hover:text-white transition-colors">
                    Contact
                  </a>
                )}
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Our Payment Merchant Section - only on designated pages (e.g. Home) */}
      {showPaymentMerchant && <PaymentMerchantSection />}

      {/* Bottom Copyright Bar with White Background matching screenshot */}
      <div className="bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
          
          {/* Brand & Copyright */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#d92228] rounded-md flex items-center justify-center text-white font-black text-xs">
                C
              </div>
              <span className="font-extrabold text-neutral-900 uppercase tracking-tight">
                CREATIVE IT INSTITUTE
              </span>
            </div>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <div>
              Copyright © 2026 Creative IT Institute. All right reserved |{' '}
              <a href="#" className="hover:text-neutral-900 underline font-medium">Sitemap</a>
            </div>
          </div>

          {/* License & TIN */}
          <div className="text-center md:text-right text-[11px] text-neutral-500 font-medium">
            <span>e-TIN: 570007703094, TL: TRAD/DSCC/228155/2019</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:text-white hover:border-[#d92228] hover:bg-[#d92228] transition-all font-semibold"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:text-white hover:border-[#d92228] hover:bg-[#d92228] transition-all font-semibold"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:text-white hover:border-[#d92228] hover:bg-[#d92228] transition-all font-semibold"
              aria-label="YouTube"
            >
              ▶
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:text-white hover:border-[#d92228] hover:bg-[#d92228] transition-all font-semibold"
              aria-label="Instagram"
            >
              ig
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
