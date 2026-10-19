import React, { useState } from 'react';
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  Compass,
  MapPin,
  Target,
  Eye,
  History,
  Users,
  Heart,
  Palette,
  Code2,
  Megaphone,
  Box,
  Film,
  GraduationCap,
  ShieldCheck,
  Building2,
  CheckCircle2,
} from 'lucide-react';

// Import high-resolution generated assets
import ceoAwardImg from '../assets/images/ceo_toyp_award_1789890313483.jpg';
import officeTourImg from '../assets/images/office_virtual_tour_1789890332911.jpg';
import isoCertImg from '../assets/images/iso_certificate_1789890348381.jpg';
import infrastructureLobbyImg from '../assets/images/infrastructure_lobby_1789890372466.jpg';
import trainingClassroomImg from '../assets/images/training_classroom_1789890389378.jpg';
import { CountUp } from './CountUp';

const imageSrc = (image: string | {src: string}) =>
  typeof image === 'string' ? image : image.src;

interface AboutUsPageProps {
  onBrowseCourse: () => void;
  onSelectDepartment?: (dept: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onBrowseCourse,
  onSelectDepartment,
}) => {
  // Milestone slider state
  const milestones = [
    {
      id: 1,
      image: ceoAwardImg,
      title: 'The Ten Outstanding Young Persons of Bangladesh [TOYP] 2021',
      description:
        'Our honorable CEO Mr. Monir Hosen received the TOYP 2021 award for his incredible contribution to the development of the IT sector. This award is given to the top 10 young entrepreneurs for outstanding performance.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
      title: 'National ICT Excellence Recognition',
      description:
        'Recognized nationally for pioneering accessible professional tech education and generating self-reliant freelancers across 64 districts in Bangladesh.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
      title: 'Global IT Talent Placement Landmark',
      description:
        'Over 90,000 successful alumni working remotely in leading tech multinationals and top marketplaces with 89% career success ratio.',
    },
  ];
  const [currentMilestone, setCurrentMilestone] = useState(0);

  // Virtual Tour state
  const [tourZoom, setTourZoom] = useState(1);
  const [tourFullscreen, setTourFullscreen] = useState(false);
  const [activeTourRoom, setActiveTourRoom] = useState('Main Lab');

  // Interactive Tabs state
  type TabKey = 'goal' | 'vision' | 'history' | 'culture' | 'values';
  const [activeTab, setActiveTab] = useState<TabKey>('goal');

  // Infrastructure Gallery state
  const infraItems = [
    {
      id: 1,
      title: 'Executive Reception & Lounge',
      img: infrastructureLobbyImg,
    },
    {
      id: 2,
      title: 'High-Tech Computer Lab 1',
      img: officeTourImg,
    },
    {
      id: 3,
      title: 'Modern Multimedia Classrooms',
      img: trainingClassroomImg,
    },
    {
      id: 4,
      title: 'Conference & Seminar Hall',
      img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Student Discussion Lounge',
      img: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 6,
      title: 'Robotics & IoT Lab',
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 7,
      title: 'Cafeteria & Rest Zone',
      img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
    },
  ];
  const [activeInfraIndex, setActiveInfraIndex] = useState(0);

  // Branch data matching screenshot
  const branches = [
    {
      id: 'head-office',
      name: 'Head Office',
      address:
        'Momtaz Plaza (4th Floor) Opposite of Labaid Hospital House#7, Road#4, Dhanmondi, Dhaka 1205, Bangladesh',
      bgType: 'peach', // Peach #fdf2f0
    },
    {
      id: 'dhanmondi',
      name: 'Dhanmondi',
      address:
        'Meher Plaza (3rd, 4th floor) House#13/A, Road#5 Dhanmondi, Dhaka - 1205, Bangladesh',
      bgType: 'blue', // Ice blue #f0f8fa
    },
    {
      id: 'chittagong',
      name: 'Chittagong Branch',
      address:
        '9 No, Kapasgola Road (4th Floor), Chawk Bazar, Telpotti More, Chattogram 4203, Bangladesh',
      bgType: 'peach',
    },
    {
      id: 'uttara',
      name: 'Uttara Branch',
      address:
        'RAJUK Razib Cosmo Shopping Complex (7th Floor) House # 71, Road # 5, Sector # 7 Azampur Bus Stand, Uttara Dhaka-1230',
      bgType: 'blue',
    },
    {
      id: 'mirpur',
      name: 'Mirpur Branch',
      address:
        'El Mercado, Lift # 4, 114 Begum Rokeya Ave, Dhaka 1216 (Opposite of Metro Rail Pillar P256)',
      bgType: 'peach',
    },
    {
      id: 'canada',
      name: 'Canada Branch',
      address:
        '61 Lakewood Ave, Saint John, New Brunswick E2J 3N9, Canada',
      bgType: 'blue',
    },
    {
      id: 'panchagarh',
      name: 'Panchagarh Branch',
      address:
        'Abdul Aziz Super Market, Nurjahan Hotel (2nd Floor) Cinema Hall Road, Panchagarh Bazar, Panchagarh Sadar, Panchagarh 5000, Bangladesh',
      bgType: 'peach',
    },
  ];

  // Training Departments
  const departments = [
    {
      id: 'graphic',
      name: 'Graphic & Multimedia',
      icon: Palette,
      color: 'text-rose-500 bg-rose-50',
    },
    {
      id: 'web',
      name: 'Web & Software',
      icon: Code2,
      color: 'text-purple-600 bg-purple-50',
    },
    {
      id: 'marketing',
      name: 'Digital Marketing',
      icon: Megaphone,
      color: 'text-fuchsia-600 bg-fuchsia-50',
    },
    {
      id: '3d',
      name: '3D Animation & Visualization',
      icon: Box,
      color: 'text-indigo-600 bg-indigo-50',
    },
    {
      id: 'film',
      name: 'Film & Media',
      icon: Film,
      color: 'text-slate-700 bg-slate-100',
    },
    {
      id: 'diploma',
      name: '1 Year Diploma Programs',
      icon: GraduationCap,
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      id: 'networking',
      name: 'Networking & Cyber Security',
      icon: ShieldCheck,
      color: 'text-sky-600 bg-sky-50',
    },
  ];

  return (
    <div className="w-full bg-white text-neutral-800">
      {/* 1. Header Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#d92228] mb-4">
          About Us
        </h1>
        <p className="text-neutral-600 leading-relaxed text-sm sm:text-base max-w-4xl">
          Creative IT is an institution where empowering the community with an excellent standard
          of learning is what we desire. We endeavor for the continuous improvement of our leaders
          who will work to construct a better future. We will continue to share our knowledge for
          contributing to the success of individuals and to serve society in the best interest.
        </p>
      </section>

      {/* 2. Our Milestone */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
          Our Milestone
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-5xl mb-8">
          Creative IT Institute is the harbor of thousands of successful freelancers in Bangladesh.
          We have trained and produced more than 100000 freelancers in the past 17 years. We nurture
          young talent by sharing knowledge and helping students find the desired jobs to become
          financially solvent.
        </p>

        {/* Milestone Carousel Card matching screenshot */}
        <div className="relative flex items-center">
          {/* Left Arrow Button */}
          <button
            onClick={() =>
              setCurrentMilestone((prev) =>
                prev === 0 ? milestones.length - 1 : prev - 1
              )
            }
            aria-label="Previous Milestone"
            className="absolute -left-3 sm:-left-5 z-20 w-9 h-9 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center text-neutral-500 hover:text-[#d92228] hover:border-red-200 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Golden Champagne Card */}
          <div className="w-full bg-[#fcf9ee] border border-[#f5ebcf] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-10 transition-all duration-300">
            <div className="w-full md:w-5/12 flex-shrink-0 flex justify-center">
              <div className="relative rounded-xl overflow-hidden shadow-sm border border-amber-200/50 max-w-sm">
                <img
                  src={imageSrc(milestones[currentMilestone].image)}
                  alt={milestones[currentMilestone].title}
                  className="w-full h-64 sm:h-72 object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-7/12">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 leading-snug">
                {milestones[currentMilestone].title}
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                {milestones[currentMilestone].description}
              </p>
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() =>
              setCurrentMilestone((prev) =>
                prev === milestones.length - 1 ? 0 : prev + 1
              )
            }
            aria-label="Next Milestone"
            className="absolute -right-3 sm:-right-5 z-20 w-9 h-9 rounded-full bg-white border border-neutral-200 shadow-md flex items-center justify-center text-neutral-500 hover:text-[#d92228] hover:border-red-200 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* 3. Virtual Tour */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div
          className={`relative w-full rounded-2xl overflow-hidden shadow-lg border border-neutral-200 transition-all ${
            tourFullscreen ? 'fixed inset-0 z-50 rounded-none h-screen bg-black' : 'h-[380px] sm:h-[480px]'
          }`}
        >
          {/* Panoramic Image with zoom */}
          <div
            className="w-full h-full overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing bg-neutral-950"
            style={{
              transform: `scale(${tourZoom})`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <img
              src={imageSrc(officeTourImg)}
              alt="Creative IT Office Virtual Tour"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </div>

          {/* Top Left Badge matching screenshot */}
          <div className="absolute top-4 left-4 z-20 bg-neutral-900/85 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-md flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            <div>
              <p className="text-xs font-bold text-red-400 uppercase tracking-wider">
                Virtual Tour
              </p>
              <p className="text-sm font-semibold text-white">
                Creative IT Office - {activeTourRoom}
              </p>
            </div>
          </div>

          {/* Top Right Fullscreen Toggle */}
          <button
            onClick={() => setTourFullscreen(!tourFullscreen)}
            className="absolute top-4 right-4 z-20 bg-neutral-900/80 hover:bg-neutral-900 text-white p-2 rounded-lg shadow-md transition-colors cursor-pointer"
            title="Toggle Fullscreen"
          >
            {tourFullscreen ? (
              <Minimize2 className="w-5 h-5" />
            ) : (
              <Maximize2 className="w-5 h-5" />
            )}
          </button>

          {/* Google Maps Style Bottom-Right Controls */}
          <div className="absolute bottom-4 right-4 z-20 flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-lg shadow-md border border-neutral-300 overflow-hidden">
            <button
              onClick={() => setTourZoom((z) => Math.min(z + 0.25, 2))}
              className="p-2 text-neutral-700 hover:bg-neutral-100 hover:text-[#d92228] transition-colors border-b border-neutral-200 cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTourZoom((z) => Math.max(z - 0.25, 0.75))}
              className="p-2 text-neutral-700 hover:bg-neutral-100 hover:text-[#d92228] transition-colors cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
          </div>

          {/* Bottom Bar: Room Switcher Pill Buttons */}
          <div className="absolute bottom-4 left-4 z-20 flex flex-wrap items-center gap-2">
            {['Main Lab', 'Executive Suite', 'Conference Hall', 'Lounge'].map(
              (room) => (
                <button
                  key={room}
                  onClick={() => setActiveTourRoom(room)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-sm transition-all cursor-pointer ${
                    activeTourRoom === room
                      ? 'bg-[#d92228] text-white shadow-sm'
                      : 'bg-black/60 text-white/90 hover:bg-black/80'
                  }`}
                >
                  {room}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* 4. 17 Years of Excellence / Shaping World-Class IT Experts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-[#ea3840] font-bold text-sm tracking-wide">
              17 Years of Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight">
              Shaping World-Class IT Experts
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Creative IT has been working with a vision to create IT experts for the past 17 years.
              In a fast pacing world, where every sector relies on technology, you need to develop IT
              skills to secure a better future. With the utmost dedication, we have been able to make
              more than 90,000 IT experts who are currently working in different sectors.
            </p>
            <div className="pt-2">
              <button
                onClick={onBrowseCourse}
                className="bg-[#d92228] hover:bg-[#b8181e] text-white px-7 py-3 rounded-lg font-bold text-sm sm:text-base shadow-sm transition-all cursor-pointer"
              >
                Browse Course
              </button>
            </div>
          </div>

          {/* Right Column Image with curved frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-xl rounded-3xl overflow-hidden shadow-md border border-neutral-200/80">
              <img
                src={imageSrc(trainingClassroomImg)}
                alt="Creative IT Training Classroom"
                className="w-full h-72 sm:h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Counter Statistics Row matching screenshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center border-y border-neutral-100 py-8">
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#d92228] mb-1">
              <CountUp value={90000} />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-neutral-700">
              Successful Students
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#d92228] mb-1">
              <CountUp value={34000} />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-neutral-700">
              Expert Freelancers
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#d92228] mb-1">
              <CountUp value={42000} />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-neutral-700">
              Skilled Job Holders
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#d92228] mb-1">
              <CountUp value={600} />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-neutral-700">
              Industry Expert
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#d92228] mb-1">
              <CountUp value={89} suffix="%" />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-neutral-700">
              Success Ratio
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#d92228] mb-1">
              <CountUp value={3000} />
            </div>
            <div className="text-xs sm:text-sm font-semibold text-neutral-700">
              Companies
            </div>
          </div>
        </div>
      </section>

      {/* 6. One of the ISO Certified IT Institutes in Bangladesh */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Certificate Image */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-md border border-neutral-200">
              <img
                src={imageSrc(isoCertImg)}
                alt="ISO 9001:2015 Certificate of Registration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Certificate Description */}
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-snug">
              One of the ISO Certified IT Institutes in Bangladesh
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              In 2015 we received the ISO certification for providing a quality training program
              which recognizes our position in the IT world. ISO ensures the quality of services
              based on efficacy, customer satisfaction and many other factors. This certification
              proves the standard of our service and courses.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Interactive Tabs: Our Goal, Vision, History, Culture, Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Vertical Tab List matching screenshot */}
          <div className="md:col-span-4 flex flex-col gap-1 border-r border-neutral-100 pr-0 md:pr-4">
            <button
              onClick={() => setActiveTab('goal')}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-lg text-left font-semibold text-sm transition-all cursor-pointer ${
                activeTab === 'goal'
                  ? 'text-[#d92228] bg-red-50/60 font-bold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              <Target className={`w-4 h-4 ${activeTab === 'goal' ? 'text-[#d92228]' : 'text-neutral-500'}`} />
              <span>Our Goal</span>
            </button>

            <button
              onClick={() => setActiveTab('vision')}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-lg text-left font-semibold text-sm transition-all cursor-pointer ${
                activeTab === 'vision'
                  ? 'text-[#d92228] bg-red-50/60 font-bold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              <Eye className={`w-4 h-4 ${activeTab === 'vision' ? 'text-[#d92228]' : 'text-neutral-500'}`} />
              <span>Our Vision</span>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-lg text-left font-semibold text-sm transition-all cursor-pointer ${
                activeTab === 'history'
                  ? 'text-[#d92228] bg-red-50/60 font-bold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              <History className={`w-4 h-4 ${activeTab === 'history' ? 'text-[#d92228]' : 'text-neutral-500'}`} />
              <span>HistoryHistory</span>
            </button>

            <button
              onClick={() => setActiveTab('culture')}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-lg text-left font-semibold text-sm transition-all cursor-pointer ${
                activeTab === 'culture'
                  ? 'text-[#d92228] bg-red-50/60 font-bold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              <Users className={`w-4 h-4 ${activeTab === 'culture' ? 'text-[#d92228]' : 'text-neutral-500'}`} />
              <span>Culture</span>
            </button>

            <button
              onClick={() => setActiveTab('values')}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-lg text-left font-semibold text-sm transition-all cursor-pointer ${
                activeTab === 'values'
                  ? 'text-[#d92228] bg-red-50/60 font-bold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              <Heart className={`w-4 h-4 ${activeTab === 'values' ? 'text-[#d92228]' : 'text-neutral-500'}`} />
              <span>Our Values</span>
            </button>
          </div>

          {/* Right Tab Content Container matching screenshot with Archery Vector */}
          <div className="md:col-span-8 bg-[#fdfaf8] border border-neutral-200/80 rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-neutral-900 mb-3 capitalize">
                {activeTab === 'goal' && 'Our Goal'}
                {activeTab === 'vision' && 'Our Vision'}
                {activeTab === 'history' && 'Our Journey & History'}
                {activeTab === 'culture' && 'Our Institute Culture'}
                {activeTab === 'values' && 'Our Core Values'}
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                {activeTab === 'goal' &&
                  'Our goal is to be one of the best IT training institutes in the world by providing quality training to learners.'}
                {activeTab === 'vision' &&
                  'To empower students and young professionals with industry-grade IT skills, building an economically self-reliant and technologically advanced global workforce.'}
                {activeTab === 'history' &&
                  'Founded in 2008 in Dhaka, Creative IT started with a humble ambition and has grown exponentially into Bangladesh’s most reputable technology training benchmark.'}
                {activeTab === 'culture' &&
                  'A learner-centric culture focused on practical projects, creative experimentation, constant mentor guidance, and professional workplace readiness.'}
                {activeTab === 'values' &&
                  'Excellence in teaching, transparency, student satisfaction, continuous technical innovation, and unwavering ethical dedication.'}
              </p>
            </div>

            {/* Graphic Illustration matching screenshot: Archer aiming at target */}
            <div className="w-48 h-36 flex-shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 200 140" className="w-full h-full" fill="none">
                {/* Target Board */}
                <circle cx="160" cy="70" r="30" fill="#fee2e2" stroke="#ef4444" strokeWidth="3" />
                <circle cx="160" cy="70" r="20" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
                <circle cx="160" cy="70" r="10" fill="#ef4444" />
                {/* Stand */}
                <path d="M160 100 L150 135 M160 100 L170 135" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                
                {/* Archer Person Stylized */}
                {/* Head */}
                <circle cx="50" cy="45" r="10" fill="#0284c7" />
                {/* Body */}
                <path d="M50 55 L50 95" stroke="#0284c7" strokeWidth="5" strokeLinecap="round" />
                {/* Legs */}
                <path d="M50 95 L38 130 M50 95 L65 130" stroke="#0369a1" strokeWidth="4" strokeLinecap="round" />
                {/* Arms with Bow */}
                <path d="M50 68 L75 60 L85 68" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />
                {/* Bow */}
                <path d="M85 40 Q75 68 85 96" stroke="#ea580c" strokeWidth="3" fill="none" strokeLinecap="round" />
                {/* String */}
                <path d="M85 40 L70 68 L85 96" stroke="#cbd5e1" strokeWidth="1.5" />
                {/* Arrow */}
                <line x1="65" y1="68" x2="135" y2="68" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
                <polygon points="135,65 142,68 135,71" fill="#dc2626" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Prominent Initiatives */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-6">
          Prominent Initiatives
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              value: 1000000,
              suffix: '+',
              label: 'Students received career counseling',
            },
            {
              value: 6000,
              suffix: '+',
              label: 'Women got IT training on full free scholarship',
            },
            {
              value: 5000,
              suffix: '+',
              label: 'Students get online internship facility',
            },
            {
              value: 200,
              suffix: '+',
              label: 'Physically challenged people received IT training',
            },
            {
              value: 12000,
              suffix: '+',
              label: 'Financially deprived got IT scholarship',
            },
            {
              value: 500,
              suffix: '+',
              label: 'Polytechnics are attached for training',
            },
            {
              value: 6000,
              suffix: '+',
              label: 'Senior citizens got scholarships in IT',
            },
            {
              value: 45,
              suffix: '+',
              label: 'Trendy courses for professional training',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#fbf7f7] hover:bg-red-50/70 border border-neutral-100 hover:border-red-200/60 rounded-xl p-5 sm:p-6 transition-all shadow-xs"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#d92228] mb-2">
                <CountUp value={item.value} suffix={item.suffix} />
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 font-medium leading-snug">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Our Infrastructure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-6">
          Our Infrastructure
        </h2>

        {/* Big Showcase Image */}
        <div className="relative w-full h-72 sm:h-96 md:h-[480px] rounded-2xl overflow-hidden shadow-md border border-neutral-200 mb-4 bg-neutral-900">
          <img
            src={imageSrc(infraItems[activeInfraIndex].img)}
            alt={infraItems[activeInfraIndex].title}
            className="w-full h-full object-cover transition-all duration-300"
          />
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-4 py-1.5 rounded-lg text-sm font-semibold">
            {infraItems[activeInfraIndex].title}
          </div>
        </div>

        {/* Thumbnails Row with arrows */}
        <div className="relative flex items-center">
          <button
            onClick={() =>
              setActiveInfraIndex((prev) =>
                prev === 0 ? infraItems.length - 1 : prev - 1
              )
            }
            aria-label="Previous image"
            className="absolute -left-3 z-10 w-8 h-8 rounded-full bg-white border border-neutral-200 shadow flex items-center justify-center text-neutral-600 hover:text-[#d92228] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="w-full flex items-center gap-3 overflow-x-auto py-2 px-6 scrollbar-none">
            {infraItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveInfraIndex(idx)}
                className={`flex-shrink-0 w-24 sm:w-28 h-16 sm:h-18 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  activeInfraIndex === idx
                    ? 'border-[#d92228] scale-105 shadow-sm'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={imageSrc(item.img)}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              setActiveInfraIndex((prev) =>
                prev === infraItems.length - 1 ? 0 : prev + 1
              )
            }
            aria-label="Next image"
            className="absolute -right-3 z-10 w-8 h-8 rounded-full bg-white border border-neutral-200 shadow flex items-center justify-center text-neutral-600 hover:text-[#d92228] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 10. Our Branches */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-6">
          Our Branches
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch) => {
            const isPeach = branch.bgType === 'peach';
            return (
              <div
                key={branch.id}
                className={`rounded-2xl p-6 sm:p-7 border transition-all ${
                  isPeach
                    ? 'bg-[#fdf3f2] border-[#fae2e0]'
                    : 'bg-[#f0f8fa] border-[#e2eff2]'
                }`}
              >
                <h3 className="text-lg font-bold text-neutral-900 mb-3">
                  {branch.name}
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  {branch.address}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 11. Training Departments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-6">
          Training Departments
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-5">
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.id}
                className="bg-white border border-neutral-200/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center hover:border-red-300 hover:shadow-md transition-all group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${dept.color}`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-neutral-800 leading-snug group-hover:text-[#d92228] transition-colors">
                  {dept.name}
                </h4>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
