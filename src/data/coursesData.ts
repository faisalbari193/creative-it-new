import { CategoryItem, Course, SuccessStory, CompanyPartner } from '../types';

export const CATEGORIES: CategoryItem[] = [
  { id: 'graphic-multimedia', title: 'Graphic & Multimedia', iconName: 'Palette' },
  { id: 'web-software', title: 'Web & Software', iconName: 'Code' },
  { id: 'digital-marketing', title: 'Digital Marketing', iconName: 'TrendingUp' },
  { id: 'animation-3d', title: '3D Animation & Visualization', iconName: 'Box' },
  { id: 'film-media', title: 'Film & Media', iconName: 'Film' },
  { id: 'diploma', title: '1 Year Diploma Programs', iconName: 'GraduationCap' },
  { id: 'cyber-security', title: 'Network & Cyber Security', iconName: 'Shield' },
];

export const POPULAR_COURSES: Course[] = [
  {
    id: 'graphic-design-pop',
    title: 'Professional Graphics Design',
    category: 'Graphic & Multimedia',
    rating: 5,
    reviewsCount: '14,400 Review',
    studentsCount: '19,000 Student',
    fee: '30,000 BDT',
    originalFee: '45,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop',
    mentor: 'Engr. Kamrul Hasan',
    tags: ['Photoshop', 'Illustrator', 'Branding']
  },
  {
    id: 'diploma-fullstack-pop',
    title: 'Diploma in Full-Stack Software Engineering (1 Year)',
    category: '1 Year Diploma Programs',
    rating: 5,
    reviewsCount: '2,400 Review',
    studentsCount: '3,200 Student',
    fee: '90,000 BDT',
    originalFee: '120,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    mentor: 'Md. Al-Amin Hossain',
    tags: ['Full-Stack', 'React & Node', 'DevOps', 'App Dev']
  },
  {
    id: 'cyber-sec-ceh-pop',
    title: 'Certified Ethical Hacking & Cyber Security Professional',
    category: 'Network & Cyber Security',
    rating: 5,
    reviewsCount: '3,150 Review',
    studentsCount: '4,200 Student',
    fee: '40,000 BDT',
    originalFee: '60,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    mentor: 'Engr. Mahbubur Rahman (CEH)',
    tags: ['Ethical Hacking', 'Penetration Testing', 'Kali Linux']
  },
  {
    id: 'film-video-editing-pop',
    title: 'Professional Video Editing & Color Grading',
    category: 'Film & Media',
    rating: 5,
    reviewsCount: '3,200 Review',
    studentsCount: '4,500 Student',
    fee: '30,000 BDT',
    originalFee: '40,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
    mentor: 'Tariqul Islam (Filmmaker)',
    tags: ['Premiere Pro', 'DaVinci Resolve', 'Color Grading']
  },
  {
    id: 'animation-3d-pop',
    title: 'Professional 3D Animation & Modeling',
    category: '3D Animation & Visualization',
    rating: 5,
    reviewsCount: '2,100 Review',
    studentsCount: '3,000 Student',
    fee: '45,000 BDT',
    originalFee: '65,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    mentor: 'Fahim Ahmed',
    tags: ['Maya', 'Blender', 'Character Rigging']
  },
  {
    id: 'python-ai-pop',
    title: 'Python for Data Analysis & Machine Learning',
    category: 'Web & Software',
    rating: 5,
    reviewsCount: '896 Review',
    studentsCount: '1,120 Student',
    fee: '50,000 BDT',
    originalFee: '65,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    mentor: 'Dr. Tanvir Rahman',
    tags: ['Python', 'Machine Learning', 'Data Science']
  },
  {
    id: 'seo-pop',
    title: 'Professional Search Engine Optimization',
    category: 'Digital Marketing',
    rating: 5,
    reviewsCount: '6,800 Review',
    studentsCount: '8,500 Student',
    fee: '30,000 BDT',
    originalFee: '42,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=800&auto=format&fit=crop',
    mentor: 'Sabbir Ahmed',
    tags: ['SEO', 'Technical SEO', 'Keyword Research']
  },
  {
    id: 'ui-ux-design-pop',
    title: 'Professional UX/UI Design',
    category: 'Graphic & Multimedia',
    rating: 5,
    reviewsCount: '2,800 Review',
    studentsCount: '4,700+ Student',
    fee: '30,000 BDT',
    originalFee: '40,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?q=80&w=800&auto=format&fit=crop',
    mentor: 'Anika Tabassum',
    tags: ['Figma', 'User Research', 'Design System']
  },
];

export const GRAPHIC_MULTIMEDIA_COURSES: Course[] = [
  {
    id: 'gm-1',
    title: 'Professional Graphics Design',
    category: 'Graphic & Multimedia',
    rating: 5,
    reviewsCount: '14,400 Review',
    studentsCount: '19,000 Student',
    fee: '30,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'gm-2',
    title: 'Professional Motion Graphics & VFX',
    category: 'Graphic & Multimedia',
    rating: 5,
    reviewsCount: '4,160 Review',
    studentsCount: '6000+ Student',
    fee: '30,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'gm-3',
    title: 'Professional UX/UI Design',
    category: 'Graphic & Multimedia',
    rating: 5,
    reviewsCount: '2,800 Review',
    studentsCount: '4,700+ Student',
    fee: '30,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932edcf?q=80&w=800&auto=format&fit=crop',
  },
];

export const WEB_SOFTWARE_COURSES: Course[] = [
  {
    id: 'ws-1',
    title: 'Python for Data Analysis & Machine Learning',
    category: 'Web & Software',
    rating: 5,
    reviewsCount: '896 Review',
    studentsCount: '1,120 Student',
    fee: '50,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ws-2',
    title: 'AI-Powered Backend Development',
    category: 'Web & Software',
    rating: 5,
    reviewsCount: '875 Review',
    studentsCount: '850 Student',
    fee: '30,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ws-3',
    title: 'AI Automation Engineering (No-Code + Low-Code + AI Agents)',
    category: 'Web & Software',
    rating: 5,
    reviewsCount: '372 Review',
    studentsCount: '500+ Student',
    fee: '30,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
  },
];

export const DIGITAL_MARKETING_COURSES: Course[] = [
  {
    id: 'dm-1',
    title: 'Professional Search Engine Optimization',
    category: 'Digital Marketing',
    rating: 5,
    reviewsCount: '6,800 Review',
    studentsCount: '8,500 Student',
    fee: '30,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'dm-2',
    title: 'Professional Social Media Marketing',
    category: 'Digital Marketing',
    rating: 5,
    reviewsCount: '4,150 Review',
    studentsCount: '5,500 Student',
    fee: '30,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'dm-3',
    title: 'Diploma in Digital Marketing & Analytics',
    category: 'Digital Marketing',
    rating: 5,
    reviewsCount: '1850+ Review',
    studentsCount: '4000+ Student',
    fee: '90,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
  },
];

export const ANIMATION_3D_COURSES: Course[] = [
  {
    id: 'an-1',
    title: 'Professional 3D Animation & Modeling',
    category: '3D Animation & Visualization',
    rating: 5,
    reviewsCount: '2,100 Review',
    studentsCount: '3,000 Student',
    fee: '45,000 BDT',
    originalFee: '65,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    mentor: 'Fahim Ahmed',
    tags: ['Maya', 'Blender', 'Character Rigging']
  },
  {
    id: 'an-2',
    title: 'Architectural Visualization & Interior 3D',
    category: '3D Animation & Visualization',
    rating: 5,
    reviewsCount: '1,750 Review',
    studentsCount: '2,200 Student',
    fee: '35,000 BDT',
    originalFee: '50,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    mentor: 'Golam Rabbi Chowdhury',
    tags: ['3ds Max', 'V-Ray', 'Lumion']
  },
  {
    id: 'an-3',
    title: 'Game Asset Creation & Unreal Engine 5',
    category: '3D Animation & Visualization',
    rating: 5,
    reviewsCount: '1,320 Review',
    studentsCount: '1,650 Student',
    fee: '50,000 BDT',
    originalFee: '70,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    mentor: 'Samiul Bashar',
    tags: ['Unreal Engine', 'ZBrush', 'Environment Art']
  }
];

export const FILM_MEDIA_COURSES: Course[] = [
  {
    id: 'fm-1',
    title: 'Professional Video Editing & Color Grading',
    category: 'Film & Media',
    rating: 5,
    reviewsCount: '3,200 Review',
    studentsCount: '4,500 Student',
    fee: '30,000 BDT',
    originalFee: '40,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
    mentor: 'Tariqul Islam (Filmmaker)',
    tags: ['Premiere Pro', 'DaVinci Resolve', 'Color Grading']
  },
  {
    id: 'fm-2',
    title: 'Cinematography & Documentary Filmmaking',
    category: 'Film & Media',
    rating: 5,
    reviewsCount: '1,890 Review',
    studentsCount: '2,400 Student',
    fee: '35,000 BDT',
    originalFee: '50,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop',
    mentor: 'Nahid Hasan',
    tags: ['Camera Angles', 'Lighting', 'Sound Design']
  },
  {
    id: 'fm-3',
    title: 'Sound Engineering & Music Production',
    category: 'Film & Media',
    rating: 5,
    reviewsCount: '1,420 Review',
    studentsCount: '1,800 Student',
    fee: '28,000 BDT',
    originalFee: '38,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop',
    mentor: 'Arifuzzaman',
    tags: ['FL Studio', 'Pro Tools', 'Mixing & Mastering']
  }
];

export const DIPLOMA_COURSES: Course[] = [
  {
    id: 'dip-1',
    title: 'Diploma in Full-Stack Software Engineering (1 Year)',
    category: '1 Year Diploma Programs',
    rating: 5,
    reviewsCount: '2,400 Review',
    studentsCount: '3,200 Student',
    fee: '90,000 BDT',
    originalFee: '120,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    mentor: 'Md. Al-Amin Hossain',
    tags: ['Full-Stack', 'React & Node', 'DevOps', 'App Dev']
  },
  {
    id: 'dip-2',
    title: 'Diploma in Graphics & Interactive Multimedia (1 Year)',
    category: '1 Year Diploma Programs',
    rating: 5,
    reviewsCount: '3,800 Review',
    studentsCount: '5,100 Student',
    fee: '80,000 BDT',
    originalFee: '110,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=800&auto=format&fit=crop',
    mentor: 'Engr. Kamrul Hasan',
    tags: ['Advanced Branding', 'UI/UX', '3D Modeling', 'Motion']
  },
  {
    id: 'dip-3',
    title: 'Diploma in Digital Marketing & Global E-Commerce (1 Year)',
    category: '1 Year Diploma Programs',
    rating: 5,
    reviewsCount: '2,100 Review',
    studentsCount: '2,900 Student',
    fee: '85,000 BDT',
    originalFee: '115,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    mentor: 'Farhan Kabir',
    tags: ['Global E-Com', 'SEO Masterclass', 'Analytics', 'Media Buying']
  }
];

export const CYBER_SECURITY_COURSES: Course[] = [
  {
    id: 'cs-1',
    title: 'Certified Ethical Hacking & Cyber Security Professional',
    category: 'Network & Cyber Security',
    rating: 5,
    reviewsCount: '3,150 Review',
    studentsCount: '4,200 Student',
    fee: '40,000 BDT',
    originalFee: '60,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    mentor: 'Engr. Mahbubur Rahman (CEH)',
    tags: ['Ethical Hacking', 'Penetration Testing', 'Kali Linux']
  },
  {
    id: 'cs-2',
    title: 'Cisco Certified Network Associate (CCNA 200-301)',
    category: 'Network & Cyber Security',
    rating: 5,
    reviewsCount: '2,890 Review',
    studentsCount: '3,600 Student',
    fee: '30,000 BDT',
    originalFee: '45,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop',
    mentor: 'Sabbir Ahmed (CCIE)',
    tags: ['Routing & Switching', 'IP Services', 'Network Security']
  },
  {
    id: 'cs-3',
    title: 'Linux System Administration & Cloud Infrastructure Security',
    category: 'Network & Cyber Security',
    rating: 5,
    reviewsCount: '1,950 Review',
    studentsCount: '2,400 Student',
    fee: '35,000 BDT',
    originalFee: '48,000 BDT',
    badge: 'All Course',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop',
    mentor: 'Zubair Hossain',
    tags: ['RedHat / Ubuntu', 'Docker', 'Firewall & Hardening']
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'story-1',
    title: 'Interior Design এর শিক্ষার্থীর ১ম মাসেই আয় $450',
    subtitle: 'Interior Design শিক্ষার্থী গোলাম রাব্বী চৌধুরী',
    studentName: 'Golam Rabbi Chowdhury',
    earning: '$450',
    tag: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'story-2',
    title: 'বিলিয়ন ডলারের 3D Animation উত্তরা শাখার শিক্ষার্থী ফাহিম',
    subtitle: '3D Animation ইনস্টিটিউটে সফল শিক্ষার্থী ফাহিম',
    studentName: 'Fahim Ahmed',
    earning: 'Top Rated Freelancer',
    tag: '3D Animation',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'story-3',
    title: 'নন-সিএসই ব্যাকগ্রাউন্ড থেকে ফুল-স্ট্যাক ডেভেলপার হয়ে রিমোট জব',
    subtitle: 'MERN Stack ব্যাচের সফল শিক্ষার্থী নুসরাত জাহান',
    studentName: 'Nusrat Jahan',
    earning: '$1,200/month',
    tag: 'Web Development',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'story-4',
    title: 'গ্রাফিক ডিজাইনার থেকে আন্তর্জাতিক প্রোডাক্ট UI/UX ডিজাইনার',
    subtitle: 'UI/UX Design ব্যাচের শিক্ষার্থী তানভীর রহমান',
    studentName: 'Tanveer Rahman',
    earning: 'Design Lead (Figma Pro)',
    tag: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'story-5',
    title: 'ডিজিটাল মার্কেটিং দিয়ে সফল এজেন্সি ও দেশি-বিদেশি ক্লায়েন্ট ম্যানেজমেন্ট',
    subtitle: 'Digital Marketing শিক্ষার্থী সাকিব হাসান',
    studentName: 'Sakib Hasan',
    earning: '$2,500/month',
    tag: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    youtubeId: 'dQw4w9WgXcQ'
  },
  {
    id: 'story-6',
    title: 'মোশন গ্রাফিক্স ও ভিডিও এডিটিং দিয়ে আপওয়ার্কে টপ রেটেড প্লাস ব্যাজ',
    subtitle: 'Motion Graphics ব্যাচের সফল শিক্ষার্থী রাফাত ইসলাম',
    studentName: 'Rafat Islam',
    earning: 'Top Rated Plus Upwork',
    tag: 'Motion Graphics',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    youtubeId: 'dQw4w9WgXcQ'
  }
];

export const CONNECTED_COMPANIES: CompanyPartner[] = [
  { name: 'Grameenphone', category: 'working-with', logoText: 'gp', subText: 'Grameenphone' },
  { name: 'Robi Axiata', category: 'working-with', logoText: 'robi', subText: 'Axiata' },
  { name: 'Banglalink', category: 'working-with', logoText: 'BL', subText: 'Digital' },
  { name: 'Brain Station 23', category: 'working-with', logoText: 'BS23', subText: 'Enterprise IT' },
  { name: 'Walton Hi-Tech', category: 'working-with', logoText: 'WALTON', subText: 'Electronics' },
  { name: 'Daraz', category: 'working-with', logoText: 'daraz', subText: 'Alibaba Group' },
  { name: 'Pathao', category: 'working-with', logoText: 'PATHAO', subText: 'Moving Forward' },
  { name: 'Chaldal', category: 'working-with', logoText: 'chaldal', subText: 'Online Grocery' },
  { name: 'BRAC IT', category: 'working-with', logoText: 'brac', subText: 'Services Ltd' },
  { name: 'Shwapno', category: 'working-with', logoText: 'SHWAPNO', subText: 'Superstore' },
  
  // Members of
  { name: 'BASIS', category: 'members-of', logoText: 'BASIS', subText: 'Software Association' },
  { name: 'BACCO', category: 'members-of', logoText: 'BACCO', subText: 'Contact Center Outsourcing' },
  { name: 'BCS', category: 'members-of', logoText: 'BCS', subText: 'Computer Samity' },
  { name: 'DCCI', category: 'members-of', logoText: 'DCCI', subText: 'Chamber of Commerce' },
  { name: 'EC-Council', category: 'members-of', logoText: 'EC-Council', subText: 'Accredited Partner' },
  { name: 'Certiport', category: 'members-of', logoText: 'Certiport', subText: 'Authorized Center' },

  // Our Concerns
  { name: 'Creative e-School', category: 'our-concerns', logoText: 'e-School', subText: 'Online Learning' },
  { name: 'Creative Junior', category: 'our-concerns', logoText: 'Junior', subText: 'Coding for Kids' },
  { name: 'Creative Skill BD', category: 'our-concerns', logoText: 'SkillBD', subText: 'Workforce Portal' },
  { name: 'Creative Software', category: 'our-concerns', logoText: 'CIT Soft', subText: 'Software Solutions' },
];
