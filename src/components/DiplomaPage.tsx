import React, { useState } from 'react';
import { Star, Clock, Calendar, BookOpen, Award, CheckCircle, ArrowRight, X } from 'lucide-react';
import { Course } from '../types';

export interface DiplomaProgram {
  id: string;
  title: string;
  slug: string;
  category: string;
  tag: string;
  students: string;
  reviews: string;
  rating: number;
  fee: string;
  badgeTitle: string;
  badgeSubtitle?: string;
  learnPoints: string[];
  bannerGradient: string;
  accentColor: string;
  instructorName?: string;
  semesters: {
    number: number;
    title: string;
    duration: string;
    topics: string[];
  }[];
}

interface DiplomaPageProps {
  onOpenDiscount: (course: Course) => void;
  onEnrollCourse: (course: Course) => void;
}

export const DiplomaPage: React.FC<DiplomaPageProps> = ({
  onOpenDiscount,
  onEnrollCourse,
}) => {
  const [selectedProgramForDetails, setSelectedProgramForDetails] = useState<DiplomaProgram | null>(null);

  const diplomaPrograms: DiplomaProgram[] = [
    {
      id: 'diploma-motion-graphics',
      title: 'Diploma in Motion Graphics & Visual FX',
      slug: 'diploma-motion-graphics-vfx',
      category: 'Graphic & Multimedia',
      tag: 'Diploma Program',
      students: '5000+ Students',
      reviews: '2560+ Reviews',
      rating: 5,
      fee: '90,000 BDT',
      badgeTitle: 'MOTION GRAPHICS & VISUAL FX',
      badgeSubtitle: 'What You Will Learn',
      learnPoints: [
        'Professional Motion Graphics & VFX',
        'Advanced Motion Graphics & VFX',
      ],
      bannerGradient: 'from-[#2e0854] via-[#1a0533] to-[#0d021a]',
      accentColor: '#a855f7',
      instructorName: 'Senior VFX & 3D Artist',
      semesters: [
        {
          number: 1,
          title: 'Foundations of Motion Design & Vector Animation',
          duration: 'Month 1 - 4',
          topics: ['Principles of Animation & Storyboarding', 'Adobe After Effects Fundamentals', 'Typography & 2D Vector Motion', 'Audio Design & Keyframe Dynamics'],
        },
        {
          number: 2,
          title: 'Advanced Visual FX, Compositing & Green Screen',
          duration: 'Month 5 - 8',
          topics: ['Rotoscoping & Motion Tracking (Mocha)', 'Chroma Key & Multi-pass Compositing', 'Cinema 4D / Blender 3D Camera Integration', 'Particle Systems & Dynamics (Trapcode)'],
        },
        {
          number: 3,
          title: 'Broadcast Packaging, Commercial Reel & Industry Capstone',
          duration: 'Month 9 - 12',
          topics: ['Broadcast Graphics & Promo Creation', 'Virtual Production Pipeline', 'Color Grading & Rendering Pipelines', 'Professional Showreel & Client Case Study'],
        },
      ],
    },
    {
      id: 'diploma-digital-marketing',
      title: 'Diploma in Digital Marketing & Analytics',
      slug: 'diploma-digital-marketing-analytics',
      category: 'Digital Marketing',
      tag: 'Diploma Program',
      students: '4000+ Students',
      reviews: '1850+ Reviews',
      rating: 5,
      fee: '90,000 BDT',
      badgeTitle: 'DIGITAL MARKETING & ANALYTICS',
      badgeSubtitle: 'What You Will Learn',
      learnPoints: [
        'Search Engine Optimization',
        'Social Media Marketing',
        'Google Ads & Shopify SEO',
      ],
      bannerGradient: 'from-[#3b0764] via-[#4a044e] to-[#1f0326]',
      accentColor: '#ec4899',
      instructorName: 'Lead Digital Strategist',
      semesters: [
        {
          number: 1,
          title: 'SEO Mastery, Keyword Strategy & Organic Growth',
          duration: 'Month 1 - 4',
          topics: ['On-Page & Technical SEO Auditing', 'Keyword Research & Competitor Analysis', 'Content Marketing & Copywriting Fundamentals', 'Local SEO & Google Business Profile'],
        },
        {
          number: 2,
          title: 'Performance Marketing & Paid Ads (Meta & Google)',
          duration: 'Month 5 - 8',
          topics: ['Meta Ads Manager, Pixel & CAPI', 'Google Search, Display & YouTube Ads', 'E-commerce & Shopify Funnel Optimization', 'TikTok & LinkedIn B2B Ad Strategies'],
        },
        {
          number: 3,
          title: 'Advanced Web Analytics, CRO & Agency Leadership',
          duration: 'Month 9 - 12',
          topics: ['Google Analytics 4 (GA4) & GTM Setup', 'Conversion Rate Optimization (CRO)', 'Marketing Automation & Email Sequences', 'International Client Acquisition & Agency Capstone'],
        },
      ],
    },
    {
      id: 'diploma-cybersecurity',
      title: 'Diploma in IT Infrastructure & Cybersecurity',
      slug: 'diploma-it-infrastructure-cybersecurity',
      category: 'Cyber Security',
      tag: 'Diploma Program',
      students: '1800+ Students',
      reviews: '445+ Reviews',
      rating: 5,
      fee: '90,000 BDT',
      badgeTitle: 'IT INFRASTRUCTURE & CYBERSECURITY',
      badgeSubtitle: 'Security Operations & Defense',
      learnPoints: [
        'Network Defense & Cisco Routing',
        'Ethical Hacking & Penetration Testing',
        'SOC Analyst Workflows',
      ],
      bannerGradient: 'from-[#032b43] via-[#021b2b] to-[#010e17]',
      accentColor: '#0ea5e9',
      instructorName: 'Certified Ethical Hacker (CEH)',
      semesters: [
        {
          number: 1,
          title: 'Enterprise Networking & Systems Administration',
          duration: 'Month 1 - 4',
          topics: ['TCP/IP, Subnetting & Cisco Routing/Switching', 'Linux & Windows Server Administration', 'Virtualization (VMware/Proxmox)', 'Network Security Fundamentals & Firewalls'],
        },
        {
          number: 2,
          title: 'Ethical Hacking & Web Application Pentesting',
          duration: 'Month 5 - 8',
          topics: ['Reconnaissance & Vulnerability Assessment', 'OWASP Top 10 Exploitation & Remediation', 'Wireless & Network Penetration Testing', 'Privilege Escalation & Metasploit Framework'],
        },
        {
          number: 3,
          title: 'Cloud Security, SOC Operations & Incident Response',
          duration: 'Month 9 - 12',
          topics: ['SIEM Tools (Splunk / Wazuh) & Log Analysis', 'Digital Forensics & Incident Response', 'AWS / Azure Cloud Security Hardening', 'Enterprise Compliance & Capstone Defense'],
        },
      ],
    },
    {
      id: 'diploma-ui-ux-design',
      title: 'Diploma in UX/UI & Product Design',
      slug: 'diploma-ux-ui-product-design',
      category: 'Graphic & Multimedia',
      tag: 'Diploma Program',
      students: '5000+ Students',
      reviews: '2560+ Reviews',
      rating: 5,
      fee: '90,000 BDT',
      badgeTitle: 'UX, UI & PRODUCT DESIGN',
      badgeSubtitle: 'What You Will Learn',
      learnPoints: [
        'Fundamentals of UX Research',
        'Mastery of Figma & Framer Prototype',
        'Fintech & SaaS Design Systems',
      ],
      bannerGradient: 'from-[#1e1b4b] via-[#172554] to-[#0f172a]',
      accentColor: '#38bdf8',
      instructorName: 'Lead Product Designer',
      semesters: [
        {
          number: 1,
          title: 'User Research, Information Architecture & Wireframing',
          duration: 'Month 1 - 4',
          topics: ['Design Thinking & User Empathy Mapping', 'User Interviews, Surveys & Persona Creation', 'Information Architecture & User Flow Mapping', 'Low-fidelity Wireframing in Figma'],
        },
        {
          number: 2,
          title: 'Visual UI Design, Advanced Figma & Design Systems',
          duration: 'Month 5 - 8',
          topics: ['Color Theory, Typography & Grid Systems', 'Component Libraries, Auto Layout & Variables', 'Micro-interactions & Interactive Prototyping', 'Building Scalable Enterprise Design Systems'],
        },
        {
          number: 3,
          title: 'SaaS Product Strategy, Usability Testing & Portfolio',
          duration: 'Month 9 - 12',
          topics: ['Fintech & E-commerce Product Case Studies', 'Framer Interactive Sites & Code Export', 'Remote Usability Testing & Metrics Tracking', 'Dribbble / Behance Portfolio & Case Study Presentation'],
        },
      ],
    },
    {
      id: 'diploma-interior-exterior',
      title: 'Diploma in Interior and Exterior Design',
      slug: 'diploma-interior-exterior-design',
      category: 'Graphic & Multimedia',
      tag: 'Diploma Program',
      students: '6,000+ Students',
      reviews: '2780+ Reviews',
      rating: 5,
      fee: '90,000 BDT',
      badgeTitle: 'INTERIOR & EXTERIOR DESIGN',
      badgeSubtitle: 'What You Will Learn',
      learnPoints: [
        'Professional Architectural Drafting',
        '3ds Max & V-Ray Photorealistic Render',
        'Lumion Exterior & Virtual Tour',
      ],
      bannerGradient: 'from-[#064e3b] via-[#022c22] to-[#011711]',
      accentColor: '#34d399',
      instructorName: 'Chief Architect & 3D Visualizer',
      semesters: [
        {
          number: 1,
          title: 'Architectural Drafting & 2D Space Planning (AutoCAD)',
          duration: 'Month 1 - 4',
          topics: ['AutoCAD 2D Drafting & Measurement Standards', 'Residential & Commercial Floor Plan Layouts', 'Section, Elevation & Working Detail Drawings', 'Lighting & Plumbing Schematics'],
        },
        {
          number: 2,
          title: '3D Interior Modeling & Photorealistic Rendering',
          duration: 'Month 5 - 8',
          topics: ['3ds Max Modeling for Furniture & Architecture', 'V-Ray & Corona Lighting, Camera & Materials', 'Interior Decor, Color Psychology & Texturing', 'High-res Ultra-realistic Still Renders'],
        },
        {
          number: 3,
          title: 'Exterior Architecture, Lumion Animation & Walkthroughs',
          duration: 'Month 9 - 12',
          topics: ['Landscape & Exterior Facade Modeling', 'Lumion Cinematic Video Walkthroughs', 'Virtual Reality (VR) 360 Panorama Tours', 'Commercial Client Project & BOQ Estimation'],
        },
      ],
    },
    {
      id: 'diploma-fullstack-ai',
      title: 'Diploma in Full Stack AI Development',
      slug: 'diploma-full-stack-ai-development',
      category: 'Web & Software',
      tag: 'Diploma Program',
      students: '1600+ Students',
      reviews: '746 Reviews',
      rating: 5,
      fee: '90,000 BDT',
      badgeTitle: 'Fullstack AI Development',
      badgeSubtitle: 'Next-Gen Intelligent Systems',
      learnPoints: [
        'Python, LangChain & LLM APIs',
        'React, Next.js & Fast API Web Apps',
        'RAG Pipelines & Agentic Systems',
      ],
      bannerGradient: 'from-[#0f172a] via-[#14532d] to-[#052e16]',
      accentColor: '#22c55e',
      instructorName: 'Principal AI Engineer',
      semesters: [
        {
          number: 1,
          title: 'Modern Web Engineering & Python Core for AI',
          duration: 'Month 1 - 4',
          topics: ['Advanced JavaScript / TypeScript & React.js', 'Python Data Structures, NumPy & Pandas', 'Building High-Performance APIs with FastAPI', 'SQL, NoSQL (PostgreSQL / MongoDB) Database Design'],
        },
        {
          number: 2,
          title: 'Generative AI, Large Language Models & RAG Systems',
          duration: 'Month 5 - 8',
          topics: ['Gemini, OpenAI & Anthropic API Architectures', 'LangChain & LlamaIndex Orchestration', 'Vector Embeddings, ChromaDB & Pinecone RAG', 'Prompt Engineering & Fine-tuning Strategies'],
        },
        {
          number: 3,
          title: 'Autonomous AI Agents, Production Deployment & Capstone',
          duration: 'Month 9 - 12',
          topics: ['Multi-Agent Systems with LangGraph & CrewAI', 'Docker Containerization & Cloud Deployment (GCP/AWS)', 'Real-time Streaming UI & Voice Integration', 'Production SaaS Capstone Project'],
        },
      ],
    },
    {
      id: 'diploma-fullstack-devops',
      title: 'Diploma in Full Stack Development & DevOps Engineering',
      slug: 'diploma-full-stack-devops',
      category: 'Web & Software',
      tag: 'Diploma Program',
      students: '1200+ Students',
      reviews: '775 Reviews',
      rating: 5,
      fee: '90,000 BDT',
      badgeTitle: 'Full Stack Development & DevOps Engineering',
      badgeSubtitle: 'End-to-End Cloud Application Pipeline',
      learnPoints: [
        'MERN Stack & Next.js Full Stack',
        'Docker, Kubernetes & Microservices',
        'CI/CD Pipelines & AWS Cloud',
      ],
      bannerGradient: 'from-[#1e3a8a] via-[#2563eb] to-[#172554]',
      accentColor: '#60a5fa',
      instructorName: 'Senior DevOps Architect',
      semesters: [
        {
          number: 1,
          title: 'Full Stack Web Mastery (React, Node.js & Databases)',
          duration: 'Month 1 - 4',
          topics: ['Modern React, State Management & Tailwind CSS', 'Node.js, Express & RESTful / GraphQL APIs', 'PostgreSQL, Prisma ORM & MongoDB', 'Authentication, JWT & Security Best Practices'],
        },
        {
          number: 2,
          title: 'Containerization, Microservices & CI/CD Automation',
          duration: 'Month 5 - 8',
          topics: ['Docker Multi-stage Builds & Docker Compose', 'GitHub Actions CI/CD Pipeline Automation', 'Microservices Architecture & Event Queues (Redis/RabbitMQ)', 'Automated Unit & Integration Testing'],
        },
        {
          number: 3,
          title: 'Kubernetes Orchestration, Cloud Infrastructure & DevOps',
          duration: 'Month 9 - 12',
          topics: ['Kubernetes Cluster Management (K8s)', 'Infrastructure as Code (Terraform)', 'AWS Cloud Architecture (EC2, S3, RDS, EKS)', 'Monitoring & Logging with Prometheus & Grafana'],
        },
      ],
    },
    {
      id: 'diploma-ai-devops-mastery',
      title: 'Diploma in Full Stack AI Development & DevOps Engineering',
      slug: 'diploma-ai-devops-mastery',
      category: 'Web & Software',
      tag: 'Diploma Program',
      students: '1300+ Students',
      reviews: '689 Reviews',
      rating: 5,
      fee: '120,000 BDT',
      badgeTitle: 'Full Stack AI Development & DevOps Engineering',
      badgeSubtitle: 'Dual Specialization Master Track',
      learnPoints: [
        'LLMOps & Production AI Infrastructure',
        'Kubernetes, Helm & GPU Cluster Scaling',
        'Full Stack Next.js + FastAPI + RAG',
      ],
      bannerGradient: 'from-[#042f2e] via-[#064e3b] to-[#022c22]',
      accentColor: '#2dd4bf',
      instructorName: 'Staff AI/Cloud Solutions Architect',
      semesters: [
        {
          number: 1,
          title: 'Advanced Full Stack Engineering & Scalable Backend',
          duration: 'Month 1 - 4',
          topics: ['Next.js 15 App Router, Server Actions & React Server Components', 'FastAPI & Async Python Backends for Machine Learning', 'Distributed Databases, Redis Caching & Vector DBs', 'Enterprise API Gateways & Security'],
        },
        {
          number: 2,
          title: 'Applied Generative AI, RAG & Autonomous Agent Pipelines',
          duration: 'Month 5 - 8',
          topics: ['State-of-the-Art LLM Integration & Hybrid Search RAG', 'Multi-agent Workflows & Function Calling Systems', 'Local Model Deployment with Ollama & vLLM', 'AI Guardrails, Observability & Evaluation'],
        },
        {
          number: 3,
          title: 'LLMOps, Cloud GPU Clusters & Production DevOps Mastery',
          duration: 'Month 9 - 12',
          topics: ['Kubernetes Deployment for AI Models & GPU Slicing', 'CI/CD Pipelines for Model Versioning & MLflow', 'Terraform Infrastructure on Google Cloud & AWS', 'Enterprise Scalable AI SaaS Capstone'],
        },
      ],
    },
  ];

  // Helper to convert diploma program to Course object for modal
  const toCourseObject = (diploma: DiplomaProgram): Course => ({
    id: diploma.id,
    title: diploma.title,
    category: diploma.category,
    rating: diploma.rating,
    reviewsCount: diploma.reviews,
    studentsCount: diploma.students,
    fee: diploma.fee,
    image: '',
    description: `Creative IT Institute 1-Year Professional Diploma Program. Total 12 months duration divided into 3 comprehensive 4-month semesters with international standard hands-on projects and career placement support.`,
  });

  return (
    <div className="w-full bg-white text-neutral-800 pb-16">
      {/* 1. Page Header Section matching diploma.png */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-neutral-900 tracking-tight mb-3.5">
          1 Year Diploma Programs
        </h1>
        <p className="text-neutral-600 text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
          Our Diploma Program is Divided into 3 Semesters. Each semester is 4 months long, making the total
          duration 12 months. The module and syllabus for each semester are given below.
        </p>
      </section>

      {/* 2. Diploma Programs Cards Grid matching diploma.png */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {diplomaPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-2xl border border-neutral-200/85 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col group"
            >
              {/* Top Banner Graphic matching screenshot style */}
              <div
                className={`w-full h-44 sm:h-48 bg-gradient-to-br ${program.bannerGradient} relative p-5 flex flex-col justify-between overflow-hidden`}
              >
                {/* Subtle cyber background grid / ambient glow */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(${program.accentColor} 1px, transparent 1px)`,
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Top Badge label */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-white/90 uppercase px-2.5 py-0.5 rounded bg-black/40 backdrop-blur-xs border border-white/10">
                    Diploma in
                  </span>
                  <span className="text-[10px] font-semibold text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded-full">
                    12 Months
                  </span>
                </div>

                {/* Graphic Center Content */}
                <div className="relative z-10 my-auto">
                  <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-wide drop-shadow-md leading-tight">
                    {program.badgeTitle}
                  </h3>
                  {program.learnPoints && program.learnPoints.length > 0 && (
                    <div className="mt-2 space-y-1">
                      <p className="text-[11px] font-bold text-amber-400">
                        {program.badgeSubtitle || 'What You Will Learn'}
                      </p>
                      <ul className="space-y-0.5 text-[10px] text-neutral-200">
                        {program.learnPoints.slice(0, 2).map((pt, i) => (
                          <li key={i} className="flex items-center gap-1.5 truncate">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: program.accentColor }}
                            />
                            <span className="truncate">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bottom subtle bar */}
                <div className="relative z-10 flex items-center justify-between text-[10px] text-neutral-300/80 pt-1 border-t border-white/10">
                  <span>Semester 1, 2 & 3 Modules</span>
                  <span className="font-semibold text-white/90">Creative IT</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                {/* Title & Tag */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block">
                    {program.tag}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug group-hover:text-[#d92228] transition-colors">
                    {program.title}
                  </h2>
                </div>

                {/* Meta: Students & Reviews with Stars */}
                <div className="flex items-center justify-between text-xs text-neutral-600 border-b border-neutral-100 pb-3">
                  <span className="font-medium text-neutral-600">{program.students}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-neutral-700">{program.reviews}</span>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing: Diploma Program Fee */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-neutral-500 font-medium">Diploma Program Fee:</span>
                  <span className="text-base sm:text-lg font-extrabold text-neutral-900">
                    {program.fee}
                  </span>
                </div>

                {/* Action Buttons: [View Details] and [Get Discount] */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    onClick={() => setSelectedProgramForDetails(program)}
                    className="w-full py-2 px-3 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-700 text-xs font-bold transition-colors cursor-pointer text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onOpenDiscount(toCourseObject(program))}
                    className="w-full py-2 px-3 rounded-lg border border-[#d92228] bg-white hover:bg-red-50 text-[#d92228] text-xs font-bold transition-colors cursor-pointer text-center"
                  >
                    Get Discount
                  </button>
                </div>

                {/* Full Width Red Button: [Get Admission] */}
                <button
                  onClick={() => onEnrollCourse(toCourseObject(program))}
                  className="w-full py-2.5 rounded-lg bg-[#ea3840] hover:bg-[#d92228] text-white text-sm font-bold shadow-xs transition-all cursor-pointer text-center"
                >
                  Get Admission
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Interactive Detailed Syllabus Modal for "View Details" */}
      {selectedProgramForDetails && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProgramForDetails(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-neutral-100 pb-4">
              <div>
                <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider">
                  1-Year Diploma Curriculum
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 mt-1">
                  {selectedProgramForDetails.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-neutral-600">
                  <span className="flex items-center gap-1 font-semibold text-neutral-700">
                    <Calendar className="w-3.5 h-3.5 text-[#d92228]" /> Total Duration: 12 Months
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-neutral-700">
                    <Award className="w-3.5 h-3.5 text-[#d92228]" /> Fee: {selectedProgramForDetails.fee}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedProgramForDetails(null)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 3 Semesters Modules Breakdown */}
            <div className="py-5 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                The diploma is structured into 3 intensive four-month phases, guiding you from industry fundamentals
                to advanced production-grade projects and career placement.
              </p>

              <div className="space-y-4">
                {selectedProgramForDetails.semesters.map((sem) => (
                  <div
                    key={sem.number}
                    className="border border-neutral-200 rounded-xl p-4 sm:p-5 bg-neutral-50/70 space-y-2.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-[#d92228] text-white text-xs font-bold flex items-center justify-center">
                          {sem.number}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-neutral-900">
                          Semester {sem.number}: {sem.title}
                        </h4>
                      </div>
                      <span className="text-[11px] font-semibold text-neutral-500 bg-white border border-neutral-200 px-2 py-0.5 rounded-full shrink-0">
                        {sem.duration}
                      </span>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-neutral-700">
                      {sem.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-[#16a34a] shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => {
                  setSelectedProgramForDetails(null);
                  onOpenDiscount(toCourseObject(selectedProgramForDetails));
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-[#d92228] text-[#d92228] hover:bg-red-50 text-xs font-bold transition-colors cursor-pointer"
              >
                Claim Special Scholarship
              </button>

              <button
                onClick={() => {
                  setSelectedProgramForDetails(null);
                  onEnrollCourse(toCourseObject(selectedProgramForDetails));
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#ea3840] hover:bg-[#d92228] text-white text-xs font-bold transition-colors cursor-pointer shadow-sm"
              >
                Apply for Admission
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
