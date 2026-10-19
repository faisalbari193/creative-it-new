import React from 'react';
import {
  Play,
  Phone,
  Mail,
  Award,
  Users,
  Briefcase,
  Headphones,
  CheckCircle2,
  ExternalLink,
  Laptop,
  Shield,
  BookOpen,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface OurFacilitiesPageProps {
  onJoinSeminar: () => void;
  onBrowseCourse: () => void;
  onPlayVideo: (videoUrl: string, title: string) => void;
  onBackToHome: () => void;
}

export const OurFacilitiesPage: React.FC<OurFacilitiesPageProps> = ({
  onJoinSeminar,
  onBrowseCourse,
  onPlayVideo,
  onBackToHome
}) => {
  return (
    <div className="w-full bg-white text-neutral-800">
      
      {/* Top Red Contact Bar matching the screenshot */}
      <div className="w-full bg-[#d92228] text-white py-2 px-4 sm:px-6 lg:px-8 text-xs font-semibold">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-start gap-6 sm:gap-10">
          <a
            href="tel:01777308777"
            className="inline-flex items-center gap-2 hover:text-white/90 transition-opacity"
          >
            <Phone className="w-3.5 h-3.5 fill-white" />
            <span>01777308777</span>
          </a>
          <a
            href="mailto:info@creativeitinstitute.com"
            className="inline-flex items-center gap-2 hover:text-white/90 transition-opacity"
          >
            <Mail className="w-3.5 h-3.5 fill-white" />
            <span>info@creativeitinstitute.com</span>
          </a>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-20">
        
        {/* Page Header matching image exactly */}
        <div className="mb-12 sm:mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#d92228] mb-4 tracking-tight font-heading">
            Our Facilities
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-4xl font-normal">
            We do more than just training you, our responsibility extends to facilitate your career growth through our continuous support. Here you will get the opportunities to fully utilize your potential with our special services.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">

          {/* ============================================================
              1. Freelancing Special Class (Full-Width Card)
             ============================================================ */}
          <div className="bg-[#fbfcfb] border border-neutral-200/80 rounded-3xl p-6 sm:p-10 shadow-2xs hover:shadow-sm transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Text & Illustrated Video Banner */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-3 tracking-tight font-heading">
                    Freelancing Special Class
                  </h2>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    Don't have any idea how to start freelancing? Our mentors are here to guide you through the path to clarify all your confusions. From sending buyer request to client management, you will understand how to professionally work on the freelancing platform with maximum efficacy.
                  </p>
                </div>

                {/* Freelancing Banner Thumbnail with Play Button */}
                <div
                  onClick={() =>
                    onPlayVideo(
                      'https://www.youtube.com/embed/dQw4w9WgXcQ',
                      'নতুনরা যেভাবে ফ্রিল্যান্সিং শুরু করবেন - Creative IT Institute'
                    )
                  }
                  className="group relative bg-gradient-to-br from-amber-50 via-orange-50/70 to-red-50/50 border border-amber-200/70 rounded-2xl p-6 overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all select-none"
                >
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#d92228] rounded-md flex items-center justify-center text-white text-xs font-black">
                        C
                      </div>
                      <span className="text-xs font-extrabold text-neutral-800 tracking-wider">CREATIVE IT</span>
                    </div>
                  </div>

                  <div className="my-4 relative z-10">
                    <span className="text-xs sm:text-sm font-semibold text-neutral-700 block">
                      নতুনরা যেভাবে
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-[#d92228] tracking-tight block">
                      ফ্রিল্যান্সিং
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-neutral-800 block">
                      শুরু করবেন
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-[#d92228] text-white flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-1" />
                    </div>
                  </div>

                  {/* Floating Graphic accents */}
                  <div className="absolute right-4 bottom-2 opacity-85 pointer-events-none">
                    <div className="w-28 h-28 sm:w-36 sm:h-36 bg-contain bg-no-repeat bg-center opacity-70 flex items-center justify-center">
                      <Laptop className="w-20 h-20 text-neutral-800/20" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Freelancing MarketPlace White Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/90 shadow-xs">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 text-center mb-6 tracking-tight font-heading">
                  Freelancing MarketPlace
                </h3>

                {/* 4-column Grid of Marketplaces */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { name: '99designs', color: 'text-neutral-900', font: 'font-bold' },
                    { name: 'cgtrader', color: 'text-neutral-800', font: 'font-semibold tracking-tight' },
                    { name: 'codecanyon', color: 'text-emerald-700', font: 'font-semibold' },
                    { name: 'Codestore/>', color: 'text-red-600', font: 'font-mono font-bold text-xs' },
                    { name: 'creative', color: 'text-neutral-800', font: 'italic font-serif font-bold' },
                    { name: 'envato', color: 'text-emerald-600', font: 'font-bold' },
                    { name: 'fiverr.', color: 'text-emerald-600', font: 'font-black tracking-tight' },
                    { name: 'freelancer', color: 'text-sky-600', font: 'font-bold' },
                    { name: 'freepik', color: 'text-blue-600', font: 'font-bold' },
                    { name: 'graphicriver', color: 'text-neutral-800', font: 'font-semibold text-xs' },
                    { name: 'Storyblocks', color: 'text-amber-600', font: 'font-bold text-xs' },
                    { name: 'toptal', color: 'text-blue-700', font: 'font-black tracking-wider text-xs' },
                    { name: 'upwork', color: 'text-emerald-600', font: 'font-bold' },
                    { name: 'VectorStock', color: 'text-neutral-800', font: 'font-bold text-xs' },
                    { name: 'pikbest', color: 'text-orange-600', font: 'font-bold' },
                    { name: '+2 marketplaces', color: 'text-neutral-500 bg-neutral-100', font: 'font-semibold text-xs' },
                  ].map((market, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-neutral-200/90 rounded-xl p-2 sm:p-3 h-14 flex items-center justify-center text-center shadow-2xs hover:border-neutral-400 hover:shadow-xs transition-all"
                    >
                      <span className={`text-xs sm:text-sm ${market.color} ${market.font}`}>
                        {market.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ============================================================
              2. Career Placement Support (Full-Width Card)
             ============================================================ */}
          <div className="bg-[#fbfcfb] border border-neutral-200/80 rounded-3xl p-6 sm:p-10 shadow-2xs hover:shadow-sm transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Column */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight font-heading">
                      Career Placement<br className="hidden sm:inline" /> Support
                    </h2>
                    {/* 700+ Contracting Company Badge matching screenshot */}
                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-black text-[#d92228] leading-none">
                        700+
                      </div>
                      <div className="text-[11px] font-bold text-neutral-600 uppercase tracking-tight">
                        Contracting<br />Company
                      </div>
                    </div>
                  </div>

                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    Our career placement department is ready to help you find a lucrative job. We ensure your resume gets into the hands of the right hiring manager. So far this department has helped more than 16000 students to find jobs in competitive global platforms. Promising a better future, we have successfully raised the job placement rate to 66% in 2023.
                  </p>
                </div>

                {/* Video Banner Thumbnail */}
                <div
                  onClick={() =>
                    onPlayVideo(
                      'https://www.youtube.com/embed/dQw4w9WgXcQ',
                      'ইন্ডাস্ট্রিতে চাকরির অভাব? চাকরি নাকি দক্ষ মানুষ! - Creative IT'
                    )
                  }
                  className="group relative bg-[#0d1b2a] text-white border border-neutral-700/50 rounded-2xl p-6 overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all select-none"
                >
                  <div className="flex items-center justify-between relative z-10 text-xs">
                    <div className="flex items-center gap-1.5 bg-white/10 px-2 py-0.5 rounded text-[10px] font-semibold text-neutral-300">
                      <Award className="w-3 h-3 text-amber-400" />
                      ISO 9001:2015
                    </div>
                    <div className="flex items-center gap-1.5 font-bold text-neutral-200">
                      <div className="w-5 h-5 bg-[#d92228] rounded flex items-center justify-center text-white text-[10px]">
                        C
                      </div>
                      CREATIVE IT
                    </div>
                  </div>

                  <div className="my-6 relative z-10 max-w-xs">
                    <h4 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                      ইন্ডাস্ট্রিতে <span className="text-yellow-400">চাকরির অভাব?</span>
                    </h4>
                    <p className="text-sm font-semibold text-neutral-300 mt-1">
                      চাকরি নাকি দক্ষ মানুষ!
                    </p>
                  </div>

                  {/* Red Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-[#d92228] text-white flex items-center justify-center shadow-lg shadow-red-500/40 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Career Placement Partner White Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/90 shadow-xs">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 text-center mb-6 tracking-tight font-heading">
                  Career Placement Partner
                </h3>

                {/* 4-column Grid of Corporate Partners */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { name: 'Shwapno', color: 'text-amber-600', font: 'font-bold text-xs' },
                    { name: 'Renata Ltd', color: 'text-blue-700', font: 'font-semibold text-xs' },
                    { name: 'PLATINUM GROUP', color: 'text-neutral-800', font: 'font-bold text-[10px]' },
                    { name: 'ACI Limited', color: 'text-emerald-700', font: 'font-bold text-xs' },
                    { name: 'প্রাণ (PRAN)', color: 'text-red-600', font: 'font-extrabold text-xs' },
                    { name: 'sheba.xyz', color: 'text-blue-600', font: 'font-semibold text-xs' },
                    { name: 'Apex Footwear', color: 'text-neutral-700', font: 'font-bold text-xs' },
                    { name: 'WALTON', color: 'text-blue-600', font: 'font-black tracking-wider text-xs' },
                    { name: 'ORIGINAL STORE', color: 'text-sky-700', font: 'font-bold text-[10px]' },
                    { name: 'Creative Tech', color: 'text-neutral-800', font: 'font-bold text-xs' },
                    { name: 'ORIENTAL', color: 'text-indigo-800', font: 'font-bold text-xs' },
                    { name: 'Dot Monkey', color: 'text-red-500', font: 'font-bold text-xs' },
                    { name: 'Rangs Group', color: 'text-neutral-700', font: 'font-bold text-xs' },
                    { name: 'Akij Group', color: 'text-emerald-700', font: 'font-bold text-xs' },
                    { name: '+21 companies', color: 'text-[#d92228] bg-red-50/80', font: 'font-bold text-xs' },
                    { name: 'Square Group', color: 'text-neutral-800', font: 'font-bold text-xs' },
                  ].map((partner, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-neutral-200/90 rounded-xl p-2 sm:p-3 h-14 flex items-center justify-center text-center shadow-2xs hover:border-neutral-400 hover:shadow-xs transition-all"
                    >
                      <span className={`text-xs ${partner.color} ${partner.font}`}>
                        {partner.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ============================================================
              Row 3: Lifetime Support & CIT.Tools (2 Columns)
             ============================================================ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Lifetime Support */}
            <div className="bg-[#f0f9f4] border border-emerald-100/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-shadow">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight font-heading">
                  Lifetime Support
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  The bond between Creative IT and its students is lifelong. We strengthen our bond with you by providing lifelong support that helps you overcome any problem in your career path even after completing their course. The personalized feedback that you receive from us, helps you grow, every day.
                </p>
              </div>

              {/* Graphic Banner */}
              <div
                onClick={() =>
                  onPlayVideo(
                    'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    'প্রশিক্ষণ শেষে আমাদের সাপোর্ট পাবেন লাইফটাইম - Creative IT'
                  )
                }
                className="group relative bg-[#0b192e] text-white rounded-2xl p-6 min-h-[170px] flex flex-col items-center justify-center text-center overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all select-none"
              >
                <div className="relative z-10">
                  <span className="text-xs sm:text-sm text-neutral-300 font-medium block">
                    প্রশিক্ষণ শেষে আমাদের
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-white block mt-0.5">
                    সাপোর্ট পাবেন <span className="text-yellow-400">লাইফটাইম</span>
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[#d92228] text-white flex items-center justify-center shadow-lg shadow-red-500/40 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* CIT.Tools */}
            <div className="bg-[#f0f9f4] border border-emerald-100/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-shadow">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight font-heading">
                  CIT.Tools
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  We provide premium softwares and tools to complete your projects. You can avail this opportunity by doing any course at our institute. Most of the paid tools that are needed to get your work done are available here.
                </p>
              </div>

              {/* Graphic Banner */}
              <div
                onClick={() =>
                  onPlayVideo(
                    'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    'কি কি সুবিধা থাকছে cit.tools এ? - Creative IT'
                  )
                }
                className="group relative bg-[#132a2b] text-white rounded-2xl p-6 min-h-[170px] flex items-center justify-between overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all select-none"
              >
                <div className="relative z-10 max-w-[65%]">
                  <span className="text-xs text-neutral-300 block">cit.tools</span>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-snug mt-1">
                    কি কি সুবিধা থাকছে <span className="text-emerald-400">cit.tools</span> এ কারা পাচ্ছে এই সুবিধাটি?
                  </h4>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[#d92228] text-white flex items-center justify-center shadow-lg shadow-red-500/40 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="relative z-10 w-20 h-20 rounded-full bg-emerald-900/40 flex items-center justify-center border border-emerald-500/30">
                  <Sparkles className="w-8 h-8 text-emerald-300" />
                </div>
              </div>
            </div>

          </div>

          {/* ============================================================
              Row 4: 24/7 Support & Virtual Internship (2 Columns)
             ============================================================ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 24/7 Support */}
            <div className="bg-[#fff5f5] border border-rose-100/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-shadow">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight font-heading">
                  24/7 Support
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                  We provide 24/7 online support to all of our students. Our expert team is always ready to help you solve any problems in your career path.
                </p>
                <p className="font-bold text-neutral-900 text-sm sm:text-base mt-2 mb-6">
                  [Condition Applied]
                </p>
              </div>

              {/* Graphic Banner */}
              <div
                onClick={() =>
                  onPlayVideo(
                    'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    '২৪ ঘণ্টা যেকোনো সময় সাপোর্ট - Creative IT'
                  )
                }
                className="group relative bg-white border border-rose-200 rounded-2xl p-5 min-h-[170px] flex items-center justify-between overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all select-none"
              >
                <div className="relative z-10 max-w-[60%]">
                  <span className="text-xs font-semibold text-rose-600 block">আমাদের শিক্ষার্থীরা</span>
                  <span className="text-base sm:text-lg font-black text-neutral-900 block mt-0.5 leading-snug">
                    ২৪ ঘণ্টা যেকোনো সময় পাবে সমস্যার সমাধান
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[#d92228] text-white flex items-center justify-center shadow-lg shadow-red-500/40 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="w-20 h-20 rounded-full bg-red-50 border border-red-200 flex flex-col items-center justify-center text-center p-2 text-[#d92228]">
                  <Headphones className="w-6 h-6 mb-1" />
                  <span className="text-[9px] font-bold uppercase leading-tight">24/7 Online</span>
                </div>
              </div>
            </div>

            {/* Virtual Internship */}
            <div className="bg-[#f0f9f4] border border-emerald-100/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-shadow">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight font-heading">
                  Virtual Internship
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  Without in-hand experience, no one can be competent in any skill. Practical work experience is a must have for better career opportunities. CIT offers its students virtual internship opportunities, where they can work under the supervision of industry experts. The online internships qualify to be as effective as offline work experience. Hence, you can also complete our internship at our office.
                </p>
              </div>

              {/* Graphic Banner */}
              <div
                onClick={() =>
                  onPlayVideo(
                    'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    'ভার্চুয়াল ইন্টার্নশিপের সুযোগ - Creative IT'
                  )
                }
                className="group relative bg-[#1c2430] text-white rounded-2xl p-5 min-h-[170px] flex items-center justify-between overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all select-none"
              >
                <div className="relative z-10 max-w-[65%]">
                  <span className="text-xs text-neutral-300 block">কোর্স শেষে</span>
                  <h4 className="text-base sm:text-lg font-black text-white leading-snug mt-0.5">
                    ভার্চুয়াল <span className="text-red-400">ইন্টার্নশিপের সুযোগ</span> একমাত্র আমরাই দিচ্ছি
                  </h4>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[#d92228] text-white flex items-center justify-center shadow-lg shadow-red-500/40 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                <div className="w-20 h-20 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-amber-400" />
                </div>
              </div>
            </div>

          </div>

          {/* ============================================================
              Row 5: English Language & Practice Lab Support (2 Columns)
             ============================================================ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* English Language */}
            <div className="bg-[#f0f9f4] border border-emerald-100/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-shadow">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight font-heading">
                  English Language
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  We emphasize on the basic English to make you competent for the job market. Our English Language Course includes the topics and strategies to help you properly communicate on the international platform.
                </p>
              </div>

              {/* Graphic Banner */}
              <div
                onClick={() =>
                  onPlayVideo(
                    'https://www.youtube.com/embed/dQw4w9WgXcQ',
                    'ভালো কাজ ও ইংরেজিতে দক্ষ আপনার সাফল্যের চাবিকাঠি - Creative IT'
                  )
                }
                className="group relative bg-white border border-emerald-200/90 rounded-2xl p-6 min-h-[170px] flex flex-col items-center justify-center text-center overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all select-none"
              >
                <div className="relative z-10">
                  <span className="text-base sm:text-lg font-black text-neutral-900 block leading-snug">
                    ভালো কাজ ও <span className="text-[#d92228]">ইংরেজিতে দক্ষতা</span>
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-600 block mt-1">
                    আপনার সাফল্যের চাবিকাঠি
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-[#d92228] text-white flex items-center justify-center shadow-lg shadow-red-500/40 group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Practice Lab Support */}
            <div className="bg-[#fdfbf2] border border-amber-200/70 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-shadow">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight font-heading">
                  Practice Lab Support
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  We offer our students practice lab support so that they can complete their courseworks feasibly at any time. The uninterrupted learning environment that we ensure, helps the student gather practical knowledge in an efficient manner.
                </p>
              </div>

              {/* Graphic Element */}
              <div className="bg-white border border-amber-200/80 rounded-2xl p-6 min-h-[170px] flex items-center justify-center gap-6 shadow-2xs">
                <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-500">
                  <span className="text-2xl font-black tracking-widest">•••</span>
                </div>
                <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-[#d92228]">
                  <Play className="w-6 h-6 fill-[#d92228] ml-1" />
                </div>
              </div>
            </div>

          </div>

          {/* ============================================================
              Row 6: Review Class & Class Videos (2 Columns)
             ============================================================ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Review Class */}
            <div className="bg-[#f5f7fc] border border-blue-100/70 rounded-3xl p-6 sm:p-8 shadow-2xs hover:shadow-sm transition-shadow">
              <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight font-heading">
                Review Class
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                Do you face difficulty when you review the previous concepts? To ensure the best learning outcome, we arrange review classes that help our students overcome any problem in their skill development process. You will be able to understand the topics that you find complex under the close supervision of our skilled mentors.
              </p>
            </div>

            {/* Class Videos */}
            <div className="bg-[#faf5ff] border border-purple-100/70 rounded-3xl p-6 sm:p-8 shadow-2xs hover:shadow-sm transition-shadow">
              <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight font-heading">
                Class Videos
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                No need to worry if you miss a topic in the class. We record most of our classes so that students who miss a session can still get the information they need. They can watch the videos again and again until they understand the topic thoroughly. Our motto is to provide you a flexible learning experience to gradually improve your competence.
              </p>
            </div>

          </div>

          {/* ============================================================
              Row 7: Prerequisite Course & Career Advancement Program
             ============================================================ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Prerequisite Course */}
            <div className="bg-[#f0fdfa] border border-teal-100/70 rounded-3xl p-6 sm:p-8 shadow-2xs hover:shadow-sm transition-shadow">
              <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight font-heading">
                Prerequisite Course
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                No need to worry if you have no prior knowledge on the field you want to work. We have launched prerequisite courses to help the newbies understand the basics of the main course. After course completion you will get a certificate. The prerequisite course will help you keep pace with the other students and understand the topics better.
              </p>
            </div>

            {/* Career Advancement Program */}
            <div className="bg-[#f0f9f4] border border-emerald-100/70 rounded-3xl p-6 sm:p-8 shadow-2xs hover:shadow-sm transition-shadow">
              <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight font-heading">
                Career Advancement Program
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                The aim of our career advancement program is to help you reach your goal after course completion. Under this 3 months program you will set career goals and make a project model to be prepared for the global job platform. Under the close supervision of our skilled mentors, you will solve 30+ practical projects and build a strong portfolio.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
