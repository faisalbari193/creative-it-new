import { COURSE_COMPARISONS, CourseComparisonProfile } from './courseComparisonData';

const COURSE_KEYWORDS: Record<string, string[]> = {
  'graphic-design': ['graphics design', 'graphic design', 'graphics', 'গ্রাফিক'],
  'ui-ux-design': ['ui/ux', 'ui ux', 'ux/ui', 'ux ui', 'ui design', 'ux design', 'ইউআই', 'ইউএক্স', 'ইন্টারফেস'],
  'motion-graphics': ['motion graphics', 'motion design', 'vfx', 'video animation', 'মোশন গ্রাফিক'],
  'python-ml': ['python', 'data analysis', 'data science', 'machine learning', 'মেশিন লার্নিং', 'ডেটা সায়েন্স'],
  'backend-ai': ['backend', 'back-end', 'node.js', 'express.js', 'backend development', 'ব্যাকএন্ড'],
  'ai-automation': ['ai automation', 'automation engineering', 'automation', 'n8n', 'make.com', 'zapier', 'ai agent', 'এআই অটোমেশন', 'অটোমেশন'],
  'seo-professional': ['seo', 'search engine optimization', 'সার্চ ইঞ্জিন', 'এসইও'],
  'social-media-marketing': ['social media marketing', 'smm', 'meta ads', 'facebook ads', 'সোশ্যাল মিডিয়া মার্কেটিং'],
  'diploma-digital-marketing': ['digital marketing', 'ডিজিটাল মার্কেটিং'],
};

const BENGALI = /[\u0980-\u09FF]/;

function includesKeyword(message: string, keyword: string): boolean {
  return message.includes(keyword);
}

function findCourses(message: string): CourseComparisonProfile[] {
  return COURSE_COMPARISONS.filter(course =>
    (COURSE_KEYWORDS[course.id] ?? []).some(keyword => includesKeyword(message, keyword)),
  );
}

function courseDetails(course: CourseComparisonProfile, bengali: boolean): string {
  if (bengali) {
    return `### ${course.title}\n\n${course.summaryBengali}\n\n- **ফি ও মেয়াদ:** ${course.fee}, ${course.duration}\n- **যা শিখবেন:** ${course.keyTopics.join(', ')}\n- **টুলস:** ${course.primaryTools.join(', ')}\n- **শুরুর প্রস্তুতি:** ${course.prerequisites}\n- **কাজের ক্ষেত্র:** ${course.jobMarket}\n- **সম্ভাব্য আয়:** ${course.averageSalary}\n\nআপনার লক্ষ্য বা বর্তমান দক্ষতা জানালে কোর্সটি আপনার জন্য উপযুক্ত কি না আরও নির্দিষ্ট করে বলতে পারি।`;
  }
  return `### ${course.title}\n\n${course.summaryBengali}\n\n- **Fee and duration:** ${course.fee}, ${course.duration}\n- **What you will learn:** ${course.keyTopics.join(', ')}\n- **Tools:** ${course.primaryTools.join(', ')}\n- **Prerequisites:** ${course.prerequisites}\n- **Career opportunities:** ${course.jobMarket}\n- **Indicative earnings:** ${course.averageSalary}\n\nTell me about your goals or current skills and I can help assess whether this course is a good fit.`;
}

function compareCourses(courses: CourseComparisonProfile[], bengali: boolean, query: string): string {
  const rows = courses.map(course =>
    `| **${course.title}** | ${course.duration} | ${course.fee} | ${course.difficulty} | ${bengali ? course.summaryBengali : course.bestSuitedFor} | ${course.jobMarket} |`,
  );
  const heading = bengali ? '### কোর্সগুলোর তুলনা' : '### Course comparison';
  const tableHead = bengali
    ? '| কোর্স | মেয়াদ | ফি | লেভেল | কাদের জন্য | কাজের ক্ষেত্র |\n| --- | --- | --- | --- | --- | --- |'
    : '| Course | Duration | Fee | Level | Best suited for | Career opportunities |\n| --- | --- | --- | --- | --- | --- |';
  const recommendation = bengali
    ? '\n\n**কোনটি বেছে নেবেন?** আপনার আগ্রহ, পূর্ব অভিজ্ঞতা, সময় ও লক্ষ্য অনুযায়ী পছন্দ করুন।'
    : '\n\n**Which should you choose?** Decide based on your interests, prior experience, available time, and career goal.';
  const incomeGuidance = /income|earn|ইনকাম|আয়/.test(query)
    ? bengali
      ? '\n\n**দ্রুত আয় শুরু করার দিক থেকে:** SEO কোর্সটি ৩–৪ মাসের, তাই শেখা শেষ করে keyword research, on-page optimization ও local SEO-এর ছোট client project দিয়ে শুরু করা যায়। Paid social campaign-এ ফল দ্রুত দেখা যেতে পারে, তবে বিজ্ঞাপনের budget ও client-এর campaign access দরকার। শেখা শেষ করলেই আয় নিশ্চিত নয়—practice ও portfolio জরুরি।'
      : '\n\n**For starting income sooner:** The 3–4 month SEO course is shorter, and you can begin with small keyword research, on-page optimization, or local SEO projects after building a portfolio. Paid social campaigns can show results sooner, but require an ad budget and client campaign access. Income is not guaranteed just by completing a course.'
    : '';
  return `${heading}\n\n${tableHead}\n${rows.join('\n')}${recommendation}${incomeGuidance}`;
}

function courseFeeOverview(bengali: boolean): string {
  const rows = COURSE_COMPARISONS.map(course =>
    `| ${course.title} | ${course.fee} | ${course.duration} |`,
  );
  const intro = bengali
    ? '### কোর্স ফি ও মেয়াদ\n\nনিচে কোর্সভিত্তিক ফি ও মেয়াদ দেওয়া হলো:'
    : '### Course fees and duration\n\nHere are the course fees and durations:';
  const installment = bengali
    ? '\n\nকিস্তি বা চলতি discount-এর শর্ত batch ও সময়ভেদে বদলাতে পারে—নিশ্চিত তথ্যের জন্য ভর্তি কাউন্সেলরের সঙ্গে যোগাযোগ করুন। কোন নির্দিষ্ট কোর্সের কিস্তির তথ্য চান?'
    : '\n\nInstallment and discount terms may vary by batch and date. Please confirm current terms with an admission counselor. Which course are you asking about?';
  return `${intro}\n\n| কোর্স | ফি | মেয়াদ |\n| --- | --- | --- |\n${rows.join('\n')}${installment}`;
}

function beginnerRecommendation(message: string, bengali: boolean): string {
  const creative = /creative|design|গ্রাফিক|ডিজাইন/.test(message);
  const marketing = /marketing|seo|income|earn|ইনকাম|মার্কেটিং|আয়/.test(message);
  const noCode = /no.?code|coding|কোডিং|নন.?কোড/.test(message);
  const recommendations = creative
    ? ['graphic-design', 'ui-ux-design']
    : marketing
      ? ['seo-professional', 'social-media-marketing']
      : noCode
        ? ['ai-automation', 'graphic-design']
        : ['graphic-design', 'seo-professional', 'ai-automation'];
  const courses = recommendations
    .map(id => COURSE_COMPARISONS.find(course => course.id === id))
    .filter((course): course is CourseComparisonProfile => Boolean(course));

  if (bengali) {
    return `### নতুনদের জন্য কোর্স বাছাই\n\nআপনার প্রশ্নে নির্দিষ্ট আগ্রহ উল্লেখ নেই, তাই লক্ষ্যভেদে কয়েকটি ভালো শুরুর পথ:\n\n${courses.map(course => `- **${course.title}:** ${course.summaryBengali} (ফি ${course.fee}, মেয়াদ ${course.duration})`).join('\n')}\n\nসবচেয়ে উপযুক্তটি ঠিক করতে আপনার আগ্রহ—ডিজাইন, মার্কেটিং, নাকি টেক—এবং সপ্তাহে কত সময় দিতে পারবেন তা জানান।`;
  }
  return `### Choosing a course as a beginner\n\nYou have not mentioned a specific interest, so here are a few different starting paths:\n\n${courses.map(course => `- **${course.title}:** ${course.bestSuitedFor} (Fee: ${course.fee}; duration: ${course.duration})`).join('\n')}\n\nTell me whether you are more interested in design, marketing, or technology and how much time you can study each week, and I can narrow this down.`;
}

function seminarInformation(bengali: boolean): string {
  return bengali
    ? '### ফ্রি সেমিনার\n\nফ্রি সেমিনারে কোর্স, ক্যারিয়ার ও মার্কেট ডিমান্ড সম্পর্কে মেন্টরের কাছ থেকে জানতে পারবেন। অনলাইন বা ক্যাম্পাসের সেমিনারের তারিখ ও আসন জানতে ওয়েবসাইটের **Join Free Seminar** বাটনে গিয়ে নিবন্ধন করুন।'
    : '### Free seminar\n\nA free seminar is a chance to ask a mentor about courses, careers, and market demand. For current dates and seats, register through the **Join Free Seminar** button on the website.';
}

export function generateCourseAdvisorFallback(query: string): string {
  const message = query.trim().toLowerCase();
  const bengali = BENGALI.test(query);
  let courses = findCourses(message);
  const wantsComparison = /compare|comparison|versus|\bvs\b|তুলনা|পার্থক্য|কোনটা ভালো|কোনটি ভালো|bhalo/.test(message);
  const wantsFees = /fee|fees|cost|price|installment|কিস্তি|ফি|খরচ|টাকা|discount/.test(message);
  const wantsRecommendation = /beginner|newbie|new to|non.?coder|easiest|কোন কোর্স|কোর্স.*সহজ|নতুন|নন.?কোডার|শুরু কর/.test(message);
  const wantsSeminar = /free seminar|seminar|সেমিনার/.test(message);

  if (wantsSeminar) {
    return seminarInformation(bengali);
  }
  if (wantsComparison && courses.some(course => course.id === 'seo-professional') && /digital marketing|ডিজিটাল মার্কেটিং/.test(message) && !/diploma|ডিপ্লোমা/.test(message)) {
    courses = courses.filter(course => course.id !== 'diploma-digital-marketing');
    const socialMediaCourse = COURSE_COMPARISONS.find(course => course.id === 'social-media-marketing');
    if (socialMediaCourse && !courses.some(course => course.id === socialMediaCourse.id)) {
      courses.push(socialMediaCourse);
    }
    return compareCourses(courses, bengali, message);
  }
  if (wantsComparison && courses.length >= 2) {
    return compareCourses(courses, bengali, message);
  }
  if (wantsRecommendation && courses.length === 0) {
    return beginnerRecommendation(message, bengali);
  }
  if (wantsFees && courses.length === 0) {
    return courseFeeOverview(bengali);
  }
  if (courses.length > 0) {
    if (wantsComparison && courses.length === 1) {
      return bengali
        ? `${courseDetails(courses[0], true)}\n\nতুলনার জন্য অন্য কোর্সটির নামও লিখুন।`
        : `${courseDetails(courses[0], false)}\n\nName the other course you would like to compare it with.`;
    }
    return courses.map(course => courseDetails(course, bengali)).join('\n\n---\n\n');
  }

  return bengali
    ? 'আপনার প্রশ্নটি বুঝতে আরেকটু তথ্য দরকার। Creative IT-এর কোনো কোর্সের নাম বা বিষয়টি—যেমন ফি, কী শেখানো হয়, কিস্তি, ক্যারিয়ার, অথবা দুটি কোর্সের তুলনা—একটু নির্দিষ্ট করে লিখুন।'
    : 'I need a little more detail to answer accurately. Please name a Creative IT course or specify whether you are asking about fees, curriculum, installments, career options, or a comparison.';
}
