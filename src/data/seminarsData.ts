export interface SeminarSchedule {
  id: string;
  topic: string;
  topicEn: string;
  category: string;
  day: string;
  time: string;
  dateStr: string;
  mode: 'hybrid' | 'online' | 'offline';
  campus: string;
  mentor: string;
  seatsLeft: number;
  totalSeats: number;
  description: string;
}

export const SEMINAR_SCHEDULES: SeminarSchedule[] = [
  {
    id: 'sem-1',
    topic: 'গ্রাফিক্স ডিজাইন অ্যান্ড ফ্রিল্যান্সিং ক্যারিয়ার গাইডলাইন',
    topicEn: 'Graphic Design & Freelancing Career Guideline',
    category: 'graphic-multimedia',
    day: 'শুক্রবার',
    dateStr: '২০ সেপ্টেম্বর ২০২৬',
    time: 'বিকাল ৪:০০ টা (4:00 PM)',
    mode: 'hybrid',
    campus: 'ধানমন্ডি ক্যাম্পাস ও জুম লাইভ',
    mentor: 'সিনিয়র গ্রাফিক্স মেন্টর ও টপ-রেটেড ফ্রিল্যান্সার',
    seatsLeft: 8,
    totalSeats: 35,
    description: 'আন্তর্জাতিক মার্কেটপ্লেসে লোগো, ব্র্যান্ড আইডেন্টিটি এবং প্যাকেজিং ডিজাইনে ক্যারিয়ারের বর্তমান সুযোগ ও প্র্যাক্টিক্যাল দিকনির্দেশনা।'
  },
  {
    id: 'sem-2',
    topic: 'ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট ক্যারিয়ার রোডম্যাপ',
    topicEn: 'Full-Stack Web Development Career Roadmap',
    category: 'web-software',
    day: 'শনিবার',
    dateStr: '২১ সেপ্টেম্বর ২০২৬',
    time: 'সন্ধ্যা ৭:০০ টা (7:00 PM)',
    mode: 'online',
    campus: 'অনলাইন লাইভ জুম সেশন',
    mentor: 'লিড সফটওয়্যার ইঞ্জিনিয়ার ও ফুল-স্ট্যাক ট্রেইনার',
    seatsLeft: 12,
    totalSeats: 50,
    description: 'রিয়্যাক্ট, নেক্সট.জেএস, নোড.জেএস এবং মডার্ন ক্লাউড আর্কিটেকচারে ক্যারিয়ার গড়ে দেশি-বিদেশি হাই-পেইং রিমোট জবের প্রস্তুতি।'
  },
  {
    id: 'sem-3',
    topic: 'এআই অটোমেশন, পাইথন অ্যান্ড ডাটা সায়েন্স সল্যুশনস',
    topicEn: 'AI Automation, Python & Data Science Solutions',
    category: 'web-software',
    day: 'রবিবার',
    dateStr: '২২ সেপ্টেম্বর ২০২৬',
    time: 'বিকাল ৫:০০ টা (5:00 PM)',
    mode: 'hybrid',
    campus: 'ধানমন্ডি ক্যাম্পাস ও জুম লাইভ',
    mentor: 'মেশিন লার্নিং ও এআই সল্যুশনস স্পেশালিস্ট',
    seatsLeft: 5,
    totalSeats: 30,
    description: 'বিজনেস প্রসেস অটোমেশন, জেনারেটিভ এআই অ্যাপ্লিকেশন ও পাইথন ডাটা সায়েন্সের ভবিষ্যত ফ্রন্টিয়ার নিয়ে বিশদ আলোচনা।'
  },
  {
    id: 'sem-4',
    topic: 'ডিজিটাল মার্কেটিং অ্যান্ড গ্লোবাল ই-কমার্স স্ট্র্যাটেজি',
    topicEn: 'Digital Marketing & Global E-Commerce Strategy',
    category: 'digital-marketing',
    day: 'সোমবার',
    dateStr: '২৩ সেপ্টেম্বর ২০২৬',
    time: 'বিকাল ৪:০০ টা (4:00 PM)',
    mode: 'online',
    campus: 'অনলাইন লাইভ জুম সেশন',
    mentor: 'সার্টিফাইড ডিজিটাল মার্কেটিং ট্রেইনার ও পারফরম্যান্স মার্কেটার',
    seatsLeft: 14,
    totalSeats: 45,
    description: 'ফেসবুক/মেটা অ্যাডস, গুগল পারফরম্যান্স ম্যাক্স, এসইও এবং আন্তর্জাতিক ড্রপশিপিং ব্র্যান্ডিংয়ের প্রমাণিত কৌশল।'
  },
  {
    id: 'sem-5',
    topic: 'ইউআই/ইউএক্স (UI/UX) ডিজাইন স্পেশাল মাস্টারক্লাস',
    topicEn: 'UI/UX Design Special Masterclass',
    category: 'graphic-multimedia',
    day: 'মঙ্গলবার',
    dateStr: '২৪ সেপ্টেম্বর ২০২৬',
    time: 'রাত ৮:০০ টা (8:00 PM)',
    mode: 'online',
    campus: 'অনলাইন লাইভ জুম সেশন',
    mentor: 'প্রিন্সিপাল প্রোডাক্ট ডিজাইনার',
    seatsLeft: 9,
    totalSeats: 40,
    description: 'ইউজার রিসার্চ, ওয়্যারফ্রেম, ফিগমা প্রোটোটাইপিং এবং সফটওয়্যার ডিজাইন সিস্টেমের ক্যারিয়ার গাইডলাইন।'
  },
  {
    id: 'sem-6',
    topic: 'থ্রিডি অ্যানিমেশন অ্যান্ড ভিএফএক্স (VFX) ক্যারিয়ার গাইড',
    topicEn: '3D Animation & VFX Career Guide',
    category: 'graphic-multimedia',
    day: 'বুধবার',
    dateStr: '২৫ সেপ্টেম্বর ২০২৬',
    time: 'বিকাল ৪:৩০ টা (4:30 PM)',
    mode: 'hybrid',
    campus: 'ধানমন্ডি ক্যাম্পাস ও জুম লাইভ',
    mentor: 'সিনিয়র ৩ডি অ্যানিমেটর ও ভিএফএক্স সুপারভাইজার',
    seatsLeft: 6,
    totalSeats: 25,
    description: 'মায়া, ব্লেন্ডার ও আফটার ইফেক্টস দিয়ে ফিল্ম, গেমিং এবং অ্যাডভার্টাইজিং ইন্ডাস্ট্রির রিমোট কাজের সুযোগ।'
  },
  {
    id: 'sem-7',
    topic: 'সাইবার সিকিউরিটি অ্যান্ড এথিক্যাল হ্যাকিং ফান্ডামেন্টালস',
    topicEn: 'Cyber Security & Ethical Hacking Fundamentals',
    category: 'cyber-security',
    day: 'বৃহস্পতিবার',
    dateStr: '২৬ সেপ্টেম্বর ২০২৬',
    time: 'সন্ধ্যা ৬:০০ টা (6:00 PM)',
    mode: 'hybrid',
    campus: 'ধানমন্ডি ক্যাম্পাস ও জুম লাইভ',
    mentor: 'সার্টিফাইড ইনফরমেশন সিকিউরিটি এক্সপার্ট',
    seatsLeft: 7,
    totalSeats: 30,
    description: 'নেটওয়ার্ক পেনিট্রেশন টেস্টিং, বাগ বাউন্টি এবং সাইবার স্পেসে কর্পোরেট সিকিউরিটি প্রফেশনাল হওয়ার গাইডলাইন।'
  }
];
