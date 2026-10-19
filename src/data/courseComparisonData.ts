export interface CourseComparisonProfile {
  id: string;
  title: string;
  category: string;
  duration: string;
  fee: string;
  difficulty: string;
  prerequisites: string;
  primaryTools: string[];
  keyTopics: string[];
  freelancePotential: string;
  jobMarket: string;
  averageSalary: string;
  bestSuitedFor: string;
  summaryBengali: string;
}

export const COURSE_COMPARISONS: CourseComparisonProfile[] = [
  {
    id: 'graphic-design',
    title: 'Professional Graphics Design',
    category: 'Graphic & Multimedia',
    duration: '4-5 Months',
    fee: '30,000 BDT',
    difficulty: 'Beginner',
    prerequisites: 'Basic computer & mouse skills only (No coding needed)',
    primaryTools: ['Adobe Photoshop', 'Adobe Illustrator', 'InDesign'],
    keyTopics: ['Logo & Branding', 'Print Media', 'Social Media Graphics', 'Packaging Design', 'Photo Manipulation'],
    freelancePotential: 'Very High (Fiverr, Upwork, Freelancer.com, 99designs)',
    jobMarket: 'Advertising agencies, e-commerce, in-house design teams',
    averageSalary: '25,000 - 55,000+ BDT (Local) / $300-$1500+ (Freelancing)',
    bestSuitedFor: 'Creative learners, non-programmers, and those wanting fast freelancing income.',
    summaryBengali: 'সম্পূর্ণ কোডিং ছাড়া ক্রিয়েটিভ ডিজাইন শেখার জন্য সেরা কোর্স। লোগো, ব্যানার ও ব্র্যান্ডিং শিখে দ্রুত ফ্রিল্যান্সিং শুরু করার সহজতম পথ।'
  },
  {
    id: 'ui-ux-design',
    title: 'Professional UX/UI Design',
    category: 'Graphic & Multimedia',
    duration: '4-5 Months',
    fee: '30,000 BDT',
    difficulty: 'Beginner to Intermediate',
    prerequisites: 'Basic computer operation; logical & analytical thinking',
    primaryTools: ['Figma', 'FigJam', 'Miro', 'Zeplin'],
    keyTopics: ['User Research', 'Wireframing', 'Interactive Prototyping', 'Design Systems', 'Mobile App & Web UI', 'Usability Testing'],
    freelancePotential: 'High (High-ticket contracts, ongoing product design)',
    jobMarket: 'Software companies, tech startups, fintech, international remote teams',
    averageSalary: '40,000 - 90,000+ BDT (Local) / $800-$2500+ (Remote)',
    bestSuitedFor: 'Learners who love problem-solving, digital product interfaces, and high corporate salaries.',
    summaryBengali: 'অ্যাপ ও ওয়েবসাইটের ইউজার এক্সপেরিয়েন্স ও ইন্টারফেস ডিজাইন। টেক ইন্ডাস্ট্রিতে বর্তমানে অন্যতম হাই-স্যালারি ও সম্মানজনক ক্যারিয়ার।'
  },
  {
    id: 'motion-graphics',
    title: 'Professional Motion Graphics & VFX',
    category: 'Graphic & Multimedia',
    duration: '4-5 Months',
    fee: '30,000 BDT',
    difficulty: 'Intermediate',
    prerequisites: 'Basic sense of visual design or video pacing',
    primaryTools: ['Adobe After Effects', 'Adobe Premiere Pro', 'Cinema 4D', 'Audition'],
    keyTopics: ['Kinetic Typography', 'Logo Animation', 'Commercial Explainer Videos', 'VFX Compositing', 'Color Grading'],
    freelancePotential: 'Very High (Video content creation is booming globally)',
    jobMarket: 'TV broadcasting, production houses, YouTube agencies, digital marketing agencies',
    averageSalary: '35,000 - 70,000+ BDT (Local) / $500-$2000+ (Freelance)',
    bestSuitedFor: 'Visual storytellers, video editors, and animation enthusiasts.',
    summaryBengali: 'ভিডিও ও অ্যানিমেশনের যুগ এখন তুঙ্গে। কমার্শিয়াল অ্যাড ও মোশন গ্রাফিক্স শিখে টেলিভিশন বা ইউটিউব প্রোডাকশনে দারুণ ক্যারিয়ার গড়ার সুযোগ।'
  },
  {
    id: 'python-ml',
    title: 'Python for Data Analysis & Machine Learning',
    category: 'Web & Software',
    duration: '5-6 Months',
    fee: '50,000 BDT',
    difficulty: 'Intermediate to Advanced',
    prerequisites: 'Basic math/statistics foundation & logical problem-solving',
    primaryTools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Jupyter Notebook'],
    keyTopics: ['Data Wrangling & Cleaning', 'Exploratory Data Analysis (EDA)', 'Statistical Modeling', 'Machine Learning Algorithms', 'Data Visualization'],
    freelancePotential: 'Moderate to High (Specialized high-rate consultation & data modeling)',
    jobMarket: 'Banks, telecom, research institutions, healthcare, fintech, international data teams',
    averageSalary: '50,000 - 120,000+ BDT (Local) / $1500-$4000+ (Remote/Abroad)',
    bestSuitedFor: 'Analytical minds, STEM students, and career-switchers wanting future-proof tech roles.',
    summaryBengali: 'ডেটা সায়েন্স ও এআই এর যুগে বিশ্বব্যাপী সবচেয়ে ডিমান্ডিং স্কিল। ডেটা এনালাইসিস ও প্রেডিক্টিভ মডেলিং শিখে ডেটা অ্যানালিস্ট বা জুনিয়র এমএল ইঞ্জিনিয়ার হওয়া যায়।'
  },
  {
    id: 'backend-ai',
    title: 'AI-Powered Backend Development',
    category: 'Web & Software',
    duration: '5 Months',
    fee: '30,000 BDT',
    difficulty: 'Intermediate',
    prerequisites: 'Basic JavaScript/programming knowledge recommended',
    primaryTools: ['Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Gemini & OpenAI APIs'],
    keyTopics: ['REST & GraphQL APIs', 'Database Architecture & ORM', 'Authentication & JWT', 'Microservices', 'LLM Integration', 'Docker Basics'],
    freelancePotential: 'High (Backend API integration, custom web app backends)',
    jobMarket: 'Software firms, SaaS startups, tech consultancies',
    averageSalary: '45,000 - 95,000+ BDT (Local) / $1200-$3000+ (Remote)',
    bestSuitedFor: 'Developers who want to specialize in robust servers, databases, and AI-enabled web systems.',
    summaryBengali: 'ওয়েবসাইট ও সফটওয়্যারের ব্যাকএন্ড ইঞ্জিন তৈরি এবং আধুনিক এআই মডেল ইন্টিগ্রেশন শেখার সম্পূর্ণ কোর্স।'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Engineering (No-Code + AI Agents)',
    category: 'Web & Software',
    duration: '4 Months',
    fee: '30,000 BDT',
    difficulty: 'Beginner to Intermediate',
    prerequisites: 'Basic business logic understanding; zero heavy coding needed',
    primaryTools: ['Make.com', 'Zapier', 'n8n', 'Flowise', 'OpenAI/Gemini API', 'Airtable'],
    keyTopics: ['Workflow Automation', 'Autonomous AI Agents', 'Webhook Integrations', 'Lead Automation Pipelines', 'Customer Support Bots'],
    freelancePotential: 'Extremely High (Highest-ticket freelancing niche right now)',
    jobMarket: 'Modern digital agencies, operations consulting, global remote automation teams',
    averageSalary: '40,000 - 90,000+ BDT (Local) / $1000-$3500+ (Freelancing / Client Retainers)',
    bestSuitedFor: 'Freelancers, marketers, entrepreneurs wanting fast high-ticket results without complex coding.',
    summaryBengali: 'কোডিং ছাড়া এআই দিয়ে বিজনেস অটোমেশন ও এআই এজেন্ট বানানোর লেটেস্ট কোর্স। বর্তমানে আন্তর্জাতিক মার্কেটপ্লেসে প্রচুর ডিমান্ড।'
  },
  {
    id: 'seo-professional',
    title: 'Professional Search Engine Optimization (SEO)',
    category: 'Digital Marketing',
    duration: '3-4 Months',
    fee: '30,000 BDT',
    difficulty: 'Beginner',
    prerequisites: 'Basic computer & internet browsing skills',
    primaryTools: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Google Analytics 4'],
    keyTopics: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'High Authority Link Building', 'Local SEO & Google Maps', 'E-commerce SEO'],
    freelancePotential: 'Very High (Monthly SEO client retainers, affiliate niche sites)',
    jobMarket: 'Digital marketing agencies, e-commerce stores, affiliate publishers',
    averageSalary: '30,000 - 65,000+ BDT (Local) / $400-$1800+ (Monthly retainer clients)',
    bestSuitedFor: 'Writers, non-technical students, and affiliate marketers seeking sustainable online income.',
    summaryBengali: 'গুগল সার্চে ওয়েবসাইট ও ব্যবসা র‍্যাঙ্ক করানোর বৈজ্ঞানিক কৌশল। একবার শিখলে ফ্রিল্যান্সিং ছাড়াও নিজের অ্যাফিলিয়েট সাইট থেকে প্যাসিভ ইনকাম করা যায়।'
  },
  {
    id: 'social-media-marketing',
    title: 'Professional Social Media Marketing (SMM)',
    category: 'Digital Marketing',
    duration: '3-4 Months',
    fee: '30,000 BDT',
    difficulty: 'Beginner',
    prerequisites: 'Familiarity with Facebook, Instagram, and social platforms',
    primaryTools: ['Meta Ads Manager', 'Canva', 'Pixel Tracker', 'Google Ads', 'Buffer/Hootsuite'],
    keyTopics: ['Target Audience Research', 'Meta Paid Campaigns', 'Retargeting & Lookalikes', 'Content Calendars', 'Budgeting & ROAS Optimization'],
    freelancePotential: 'High (E-commerce store owners, social media management)',
    jobMarket: 'Local retail brands, agencies, fashion brands, startup marketing departments',
    averageSalary: '25,000 - 55,000+ BDT (Local) / $300-$1500+ (Freelance)',
    bestSuitedFor: 'Business owners, influencers, beginners wanting immediate marketing execution skills.',
    summaryBengali: 'ফেসবুক ও ইনস্টাগ্রামে টার্গেটেড বিজ্ঞাপন চালিয়ে সেলস ও ব্র্যান্ডিং বাড়ানোর প্র্যাকটিক্যাল কোর্স।'
  },
  {
    id: 'diploma-digital-marketing',
    title: 'Diploma in Digital Marketing & Analytics',
    category: 'Digital Marketing',
    duration: '1 Year',
    fee: '90,000 BDT',
    difficulty: 'Comprehensive (Beginner to Professional)',
    prerequisites: 'HSC / Degree / University running or completed',
    primaryTools: ['Meta Ads', 'Google Ads', 'GA4', 'Ahrefs', 'HubSpot CRM', 'Mailchimp'],
    keyTopics: ['Complete 360 Degree Digital Strategy', 'SEO & Content', 'Performance Paid Ads', 'Data Analytics & CRO', 'Internship & Capstone Project'],
    freelancePotential: 'High (Can handle complete agency accounts)',
    jobMarket: 'Corporate marketing departments, senior media buyer, agency account head',
    averageSalary: '50,000 - 110,000+ BDT (Corporate Career Track)',
    bestSuitedFor: 'Graduates aiming for full corporate digital marketing management and leadership roles.',
    summaryBengali: '১ বছরের সম্পূর্ণ ডিপ্লোমা কোর্স যেখানে ডিজিটাল মার্কেটিংয়ের সকল শাখা বিস্তারিত শেখানো হয় সাথে সরাসরি ইন্টার্নশিপ সুবিধা।'
  }
];
