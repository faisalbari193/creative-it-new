export interface JobPosition {
  id: string;
  title: string;
  department: string;
  employmentType: 'On-Site' | 'Hybrid' | 'Remote';
  jobType: 'Full-Time' | 'Part-Time' | 'Contract' | 'Internship';
  roleDetails: string;
  area: string;
  city: string;
  experience: string;
  salary: string;
  deadline: string;
  vacancy: number;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}

export const JOB_POSITIONS: JobPosition[] = [
  {
    id: 'job-1',
    title: 'Jr. Executive/Executive',
    department: 'Student Relationship Management',
    employmentType: 'On-Site',
    jobType: 'Full-Time',
    roleDetails:
      'Creative IT Institute is a leading IT education provider, empowering individuals with practical and cutting-edge skills for professional success. We pride ourselves on creating a supportive learning environment and fostering strong relationships with our students.',
    area: 'Dhanmondi',
    city: 'Dhanmondi, Dhaka',
    experience: '1-2 Years',
    salary: 'Negotiable (Competitive)',
    deadline: '15 October 2026',
    vacancy: 3,
    responsibilities: [
      'Maintain strong, proactive relationships with prospective and enrolled students.',
      'Coordinate student queries, batch scheduling, and course onboarding procedures.',
      'Assist students in utilizing learning management systems and academic tools.',
      'Collect, summarize, and resolve student feedback to improve training quality.',
      'Collaborate with department mentors and academic coordinators for smooth batch operations.'
    ],
    requirements: [
      'Graduation/Post-Graduation in any discipline (BBA/English/Public Relations preferred).',
      'Strong interpersonal, communication, and empathetic problem-solving skills.',
      'Proficiency in Microsoft Office, Google Workspace, and CRM software.',
      'Patient, active listener with a student-first positive mindset.',
      'Prior experience in educational institutions or ed-tech is an added advantage.'
    ],
    benefits: [
      'Competitive salary with annual increment performance appraisal.',
      'Two festival bonuses each year.',
      'Subsidized daily lunch and evening refreshments.',
      'Free skill development courses at Creative IT Institute.',
      'Friendly, collaborative and growth-oriented work environment.'
    ]
  },
  {
    id: 'job-2',
    title: 'Content Planner',
    department: 'Brand & Marketing',
    employmentType: 'On-Site',
    jobType: 'Full-Time',
    roleDetails:
      'We are looking for a skilled Content Planner who can create meaningful, engaging, and brand-aligned content across digital and print platforms. The right candidate should have a strong command of both Bangla and English, understand storytelling, and be able to translate brand vision into consistent communication.',
    area: 'Dhanmondi',
    city: 'Dhanmondi, Dhaka',
    experience: '2-3 Years',
    salary: 'Negotiable (Based on Portfolio)',
    deadline: '18 October 2026',
    vacancy: 2,
    responsibilities: [
      'Develop monthly social media content calendars, video scripts, and campaigns.',
      'Write compelling copywriting for ads, landing pages, emailers, and brochures.',
      'Brainstorm creative storytelling concepts for student success stories and brand films.',
      'Collaborate with the graphics design, video production, and performance marketing teams.',
      'Monitor content engagement metrics and adapt creative strategies accordingly.'
    ],
    requirements: [
      'Bachelor’s degree in English, Journalism, Mass Communication, or Marketing.',
      'Proven portfolio of published content, ad copies, or creative storytelling.',
      'Flawless grammar and spelling in both Bangla and English.',
      'Deep understanding of digital marketing trends, SEO fundamentals, and audience psychology.',
      'Ability to meet strict deadlines while maintaining artistic and brand excellence.'
    ],
    benefits: [
      'Attractive compensation package matching market standards.',
      'Performance-based annual bonuses and incentives.',
      'State-of-the-art creative workstation and equipment support.',
      'Full sponsorship for international certifications and workshops.',
      'Dynamic creative culture with creative freedom and mentorship.'
    ]
  },
  {
    id: 'job-3',
    title: 'Sr. Executive/Executive',
    department: 'Tele Counselling & Admission',
    employmentType: 'On-Site',
    jobType: 'Full-Time',
    roleDetails:
      'Creative IT Institute, a concern of Creative Business Group, is hiring an experienced, customer-oriented Tele Counselling & Admission Executive to use inbound and outbound calls to meet sales targets.',
    area: 'Uttara',
    city: 'Dhaka',
    experience: '1-3 Years',
    salary: 'BDT 25,000 - 35,000 + Attractive Sales Incentive',
    deadline: '20 October 2026',
    vacancy: 5,
    responsibilities: [
      'Handle inbound calls, seminar queries, and student admissions warmly and professionally.',
      'Counsel students on selecting suitable IT career tracks based on their background and goals.',
      'Make outbound follow-ups with leads generated from seminars, social media, and walk-ins.',
      'Maintain accurate records of student interactions and lead pipelines in CRM.',
      'Achieve weekly and monthly admission targets collaboratively.'
    ],
    requirements: [
      'Graduate from any reputed university (Freshers with exceptional communications are welcome).',
      'Excellent verbal fluency, persuasive negotiation skills, and clear voice projection.',
      'Target-driven mindset with high emotional intelligence and resilience.',
      'Ability to work independently and as an enthusiastic team player.',
      'Previous experience in telemarketing, ed-tech, or call center operations is preferred.'
    ],
    benefits: [
      'Lucrative incentive structure on top of basic monthly salary.',
      'Two festival bonuses annually.',
      'Subsidized lunch facilities and snacks.',
      'Fast-track career advancement to Team Lead and Managerial roles.',
      'Comprehensive in-house training on IT sales and counseling.'
    ]
  },
  {
    id: 'job-4',
    title: 'Senior MERN Stack / Full-Stack Trainer',
    department: 'Web & Software Engineering',
    employmentType: 'On-Site',
    jobType: 'Full-Time',
    roleDetails:
      'Join our elite technical faculty to mentor passionate learners in mastering modern Web Technologies (React, Node.js, Express, MongoDB, Next.js, and TypeScript).',
    area: 'Dhanmondi',
    city: 'Dhanmondi, Dhaka',
    experience: '3+ Years',
    salary: 'Negotiable (High Package for Experienced Devs)',
    deadline: '25 October 2026',
    vacancy: 2,
    responsibilities: [
      'Conduct hands-on, project-based live classes and code reviews.',
      'Design industry-standard project curriculums and problem sets.',
      'Mentor students through portfolio building and mock technical interviews.'
    ],
    requirements: [
      'Strong production experience in JavaScript/TypeScript, React.js, Node.js, and Databases.',
      'Passion for teaching, explaining complex architectural concepts simply.',
      'GitHub repository demonstrating clean code and architecture.'
    ],
    benefits: [
      'Highly competitive tech salary with project completion bonuses.',
      'Flexible working culture and research time.',
      'Festival bonuses and subsidized amenities.'
    ]
  },
  {
    id: 'job-5',
    title: 'UI/UX & Product Designer',
    department: 'Design & Creative Media',
    employmentType: 'On-Site',
    jobType: 'Full-Time',
    roleDetails:
      'We are looking for a creative UI/UX Designer who can shape intuitive user interfaces for our software ecosystems, web portals, and learning products.',
    area: 'Dhanmondi',
    city: 'Dhanmondi, Dhaka',
    experience: '2+ Years',
    salary: 'Negotiable',
    deadline: '22 October 2026',
    vacancy: 2,
    responsibilities: [
      'Craft user flows, wireframes, high-fidelity UI mockups, and interactive Figma prototypes.',
      'Build and maintain design systems, typography standards, and responsive UI components.',
      'Collaborate closely with frontend engineers to ensure pixel-perfect delivery.'
    ],
    requirements: [
      'Proficiency in Figma, Adobe XD, Photoshop, and Illustrator.',
      'Strong portfolio demonstrating UX research, layout hierarchy, and micro-interactions.'
    ],
    benefits: [
      'Competitive compensation with creative project bonuses.',
      'Modern design workstation with high-end display peripherals.',
      'Festival bonuses and healthcare allowances.'
    ]
  }
];
