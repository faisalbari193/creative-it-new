import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import { generateCourseAdvisorFallback } from "./src/data/courseAdvisorFallback";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// API: Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Creative IT Institute API" });
});

// System Prompt for Course Advisor & Comparison AI
const SYSTEM_INSTRUCTION = `You are "CIT Advisor", the official friendly, expert AI Course Counselor and Advisor for Creative IT Institute (ক্রিয়েটিভ আইটি ইনস্টিটিউট), Bangladesh's premier IT training institution with 17+ years of excellence, 90,000+ graduates, and 42,000+ job placements.

Your mission:
1. Explain every course in VERY EASY, crystal-clear, jargon-free language so any student, job seeker, or beginner can understand what they will learn, why it matters, and how they can build a career.
2. Provide in-depth, structured, unbiased COURSE COMPARISONS according to customer demands, background (e.g. non-tech vs tech, creative vs logical), learning curve, budget, duration, and job/freelancing opportunities.
3. Help customers choose the right course based on their personal goals (e.g. quick freelancing vs corporate high-paying jobs vs remote foreign contracts).
4. Reply in the same language as the user:
   - If user asks in Bengali (or Banglish), respond in warm, fluent, natural Bengali.
   - If user asks in English, respond in professional, friendly English.

Creative IT Institute Course Catalog & Details:
1. Professional Graphics Design (Course Fee: 30,000 BDT, Duration: 4-5 Months)
   - Focus: Adobe Photoshop, Illustrator, InDesign, Logo & Brand Identity, Print & Digital Media.
   - Suitable For: Beginners, non-coders, creative thinkers. No prior coding/tech background needed.
   - Career: Freelancing (Fiverr, Upwork, 99designs), Ad Agencies, Graphic Designer in local & MNC companies.

2. Professional UX/UI Design (Course Fee: 30,000 BDT, Duration: 4-5 Months)
   - Focus: Figma, User Research, Wireframing, UX psychology, Prototyping, Mobile App & Web Interface Design, Design Systems.
   - Suitable For: Logical thinkers with design appreciation. Very high demand in software companies, startups, and remote international tech firms.
   - Career: UI/UX Designer, Product Designer (high starting salary compared to basic graphics).

3. Professional Motion Graphics & VFX (Course Fee: 30,000 BDT, Duration: 4-5 Months)
   - Focus: Adobe After Effects, Premiere Pro, Cinema 4D, 2D/3D Animation, Video Editing, Commercial Promos, Visual Effects.
   - Suitable For: Video creators, animation enthusiasts, content creators.
   - Career: TV channels, YouTube production studios, marketing agencies, motion design freelancing.

4. Python for Data Analysis & Machine Learning (Course Fee: 50,000 BDT, Duration: 5-6 Months)
   - Focus: Python programming, NumPy, Pandas, Matplotlib, Data Wrangling, Machine Learning models, AI basics.
   - Suitable For: Math/CS/Engineering graduates, analytical thinkers, data enthusiasts.
   - Career: Data Analyst, Junior ML Engineer, BI Analyst in banking, telecommunications, corporate sectors.

5. AI-Powered Backend Development (Course Fee: 30,000 BDT, Duration: 5 Months)
   - Focus: Node.js, Express.js, TypeScript, PostgreSQL/MongoDB, RESTful APIs, Microservices architecture, integrating Gemini & LLM APIs.
   - Suitable For: People with basic JS/programming interest wanting to build scalable server apps and AI backends.
   - Career: Backend Developer, Node.js Engineer, Full Stack developer path.

6. AI Automation Engineering (No-Code + Low-Code + AI Agents) (Course Fee: 30,000 BDT, Duration: 4 Months)
   - Focus: Make.com, Zapier, n8n, Flowise, Custom AI Agents, Automated business workflows, CRM integrations.
   - Suitable For: Entrepreneurs, marketers, freelancers, non-programmers who want to build high-value automated systems without writing thousands of lines of code.
   - Career: AI Automation Consultant, Operations Specialist, high-ticket freelancing for international businesses.

7. Professional Search Engine Optimization (SEO) (Course Fee: 30,000 BDT, Duration: 3-4 Months)
   - Focus: Keyword Research, On-page SEO, Technical SEO, Link Building, Google Search Console, Rank Tracking, Local SEO.
   - Suitable For: Non-technical learners, marketers, bloggers, affiliate marketers.
   - Career: SEO Specialist, Affiliate Marketer, remote agency contractor.

8. Professional Social Media Marketing (SMM) (Course Fee: 30,000 BDT, Duration: 3-4 Months)
   - Focus: Meta Ads Manager (Facebook & Instagram ads), Audience Targeting, Content Strategy, Retargeting, Analytics.
   - Suitable For: Small business owners, beginners, social media enthusiasts.
   - Career: Social Media Manager, Media Buyer, Digital Marketing Strategist.

9. Diploma in Digital Marketing & Analytics (Course Fee: 90,000 BDT, Duration: 1 Year)
   - Focus: Complete 360-degree digital marketing including SEO, SEM, SMM, Content Marketing, Google Analytics 4, Email Marketing, Capstone project & internship.
   - Suitable For: Career-switchers, fresh graduates wanting an all-inclusive master diploma.
   - Career: Digital Marketing Manager, Chief Marketing Officer path.

Creative IT Key Advantages:
- 17 Years of Industry Leadership.
- Lifetime Support (24/7 dedicated support room even after graduation).
- Class Recordings of every session to review anytime.
- Job Placement Cell with 67% placement rate across 3000+ corporate partners.
- Both Online (live interactive classes) and Offline (Dhanmondi, Uttara campuses) batches available.
- Installment payment facilities & discount vouchers available.

Formatting Guidelines:
- Use clean Markdown with bold headings and bullet points.
- When comparing courses, clearly contrast: Prerequisites, Learning Curve, Market Demand, Average Earnings/Salary, and "Which one should you choose?".
- Keep responses concise, organized, and encouraging. Include an inviting closing line like asking if they'd like to book a free seminar or request a discount voucher.`;

// POST: /api/chat
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Message is required." });
  }

  // Check for Gemini API key
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    // Generate intelligent fallback response if API key is not configured
    const fallbackResponse = generateCourseAdvisorFallback(message);
    return res.json({ reply: fallbackResponse, source: "local_advisor" });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    // Format chat history for context
    const contents: any[] = [];
    if (Array.isArray(history) && history.length > 0) {
      // Include last 6 turns for context
      const recentHistory = history.slice(-6);
      for (const turn of recentHistory) {
        contents.push({
          role: turn.role === "user" ? "user" : "model",
          parts: [{ text: turn.text }],
        });
      }
    }

    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I am here to help you learn about Creative IT courses and compare them. Please let me know what you would like to know!";
    res.json({ reply, source: "gemini" });
  } catch (error: any) {
    console.error("Gemini API error:", error?.message || error);
    // Graceful fallback to rich local knowledge base so user experience never fails
    const fallbackResponse = generateCourseAdvisorFallback(message);
    res.json({ reply: fallbackResponse, source: "local_advisor_fallback" });
  }
});

// Intelligent Local Knowledge Base Fallback
function generateLocalResponse(msg: string): string {
  const lower = msg.toLowerCase();

  if (lower.includes("compare") || lower.includes("তুলনা") || lower.includes("vs") || lower.includes("কোনটা ভালো") || lower.includes("bhalo")) {
    if (lower.includes("ui") || lower.includes("ux") || lower.includes("graphic")) {
      return `### 🎨 Graphics Design বনাম UX/UI Design - সহজ তুলনা:

| বিষয় | Professional Graphics Design | Professional UX/UI Design |
| :--- | :--- | :--- |
| **মূল কাজ** | লোগো, ব্যানার, পোস্টার, সোশ্যাল মিডিয়া গ্রাফিক্স তৈরি | অ্যাপ ও ওয়েবসাইটের ইউজার এক্সপেরিয়েন্স ও সুন্দর ইন্টারফেস ডিজাইন |
| **টুলস** | Photoshop, Illustrator, InDesign | Figma, Wireframing, Prototyping, Design Systems |
| **পূর্ব অভিজ্ঞতা** | কোনো কোডিং বা টেক ব্যাকগ্রাউন্ড লাগে না | কোনো কোডিং লাগে না, তবে লজিক্যাল চিন্তা ও রিসার্চের আগ্রহ থাকা ভালো |
| **কোর্স ফি & মেয়াদ**| ৩০,০০০ টাকা (৪-৫ মাস) | ৩০,০০০ টাকা (৪-৫ মাস) |
| **কাজের ক্ষেত্র** | ফ্রিল্যান্সিং মার্কেটপ্লেস (Fiverr, Upwork), লোকাল এজেন্সি | সফটওয়্যার কোম্পানি, টেক স্টার্টআপ, আন্তর্জাতিক রিমোট জব |
| **ডিমান্ড & ইনকাম**| প্রচুর কাজ রয়েছে, দ্রুত ফ্রিল্যান্সিং শুরু করা যায় | স্যালারি রেঞ্জ তুলনামূলক বেশি এবং ক্যারিয়ার গ্রোথ খুব দ্রুত |

**কোনটি বেছে নিবেন?**
- আপনি যদি ভিজ্যুয়াল আর্ট ও দ্রুত ফ্রিল্যান্সিং করতে চান: **Graphics Design** বেছে নিন।
- আপনি যদি অ্যাপ/ওয়েব প্রোডাক্ট ও হাই-স্যালারি কর্পোরেট বা রিমোট জবের দিকে যেতে চান: **UX/UI Design** সেরা।`;
    }

    if (lower.includes("python") || lower.includes("data") || lower.includes("web") || lower.includes("backend")) {
      return `### 💻 Python (Data & ML) বনাম AI Backend Development তুলনা:

| বিষয় | Python for Data & ML | AI-Powered Backend Development |
| :--- | :--- | :--- |
| **মূল কাজ** | ডেটা এনালাইসিস, প্রেডিক্টিভ মডেলিং ও মেশিন লার্নিং অ্যালগরিদম | ওয়েবসাইট/অ্যাপের সার্ভার, ডাটাবেস ও এআই এপিআই সংযোগ |
| **টুলস & টেক** | Python, Pandas, NumPy, Scikit-learn, Matplotlib | Node.js, Express, PostgreSQL, MongoDB, REST API, LLMs |
| **কোর্স ফি** | ৫০,০০০ টাকা (৫-৬ মাস) | ৩০,০০০ টাকা (৫ মাস) |
| **কার জন্য সেরা?** | যারা ম্যাথ, স্ট্যাটিস্টিক্স ও ডেটা নিয়ে গভীর অ্যানালাইসিস পছন্দ করেন | যারা সফটওয়্যার সিস্টেম, এপিআই ও ব্যাকএন্ড আর্কিটেকচার বানাতে চান |
| **ক্যারিয়ার সুযোগ**| Data Analyst, Junior ML Specialist, Research | Backend Engineer, Software Developer, Full-stack path |`;
    }

    if (lower.includes("seo") || lower.includes("marketing") || lower.includes("digital")) {
      return `### 📈 Digital Marketing বনাম SEO তুলনা:

1. **Professional SEO (Search Engine Optimization)**:
   - **ফি**: ৩০,০০০ টাকা (৩-৪ মাস)
   - **কাজ**: গুগল সার্চে ওয়েবসাইট র‍্যাঙ্ক করানো, কি-ওয়ার্ড রিসার্চ, ব্যাকলিংক তৈরি।
   - **সুবিধা**: প্যাসিভ ট্রাফিক এবং অ্যাফিলিয়েট মার্কেটিং বা ক্লায়েন্ট সাইট র‍্যাঙ্ক করে দীর্ঘদিন আয় করার দারুণ সুযোগ।

2. **Digital Marketing (SMM & Ads)**:
   - **ফি**: ৩০,০০০ টাকা (৩-৪ মাস)
   - **কাজ**: ফেসবুক/মেটা অ্যাডস, ইনস্টাগ্রাম মার্কেটিং, ব্র্যান্ডিং ও সেলস ক্যাম্পেইন পরিচালনা।
   - **সুবিধা**: খুব দ্রুত ফলাফল পাওয়া যায় এবং যেকোনো লোকাল ও ইন্টারন্যাশনাল বিজনেসের সরাসরি সেলস বাড়ানো যায়।`;
    }

    return `### ⚖️ কোর্স তুলনা সহায়িকা (Course Comparison):
আপনি Creative IT-এর যেকোনো ২টি বা ৩টি কোর্স তুলনা করতে পারেন। যেমন:
- **Graphics Design vs UI/UX Design**
- **Web Development vs AI Automation**
- **Digital Marketing vs SEO**
- **Python Data Science vs Backend Development**

দয়া করে আপনি কোন ২টি কোর্স তুলনা করতে চান এবং আপনার বর্তমান ব্যাকগ্রাউন্ড কি তা জানান, আমি বিস্তারিত তুলনামূলক চার্ট বানিয়ে দিচ্ছি!`;
  }

  if (lower.includes("graphic") || lower.includes("গ্রাফিক্স")) {
    return `### 🎨 Professional Graphics Design কোর্সটি সম্পর্কে সহজ ভাষায়:

- **কোর্সটি কি?** এটি সম্পূর্ণ ভিজ্যুয়াল আর্ট ও ডিজাইনিং শেখার কোর্স।
- **কি কি শেখানো হবে?** Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Logo & Brand Identity, Social Media Post Design, Banner & Print Media Design.
- **কার জন্য প্রযোজ্য?** সম্পূর্ণ নতুন বা যেকোনো ব্যাকগ্রাউন্ডের শিক্ষার্থী (কোনো কোডিং জ্ঞান দরকার নেই)।
- **কোর্স ফি:** ৩০,০০০ টাকা (ডিসকাউন্ট অফার চলমান)।
- **মেয়াদ:** ৪ থেকে ৫ মাস (সপ্তাহে ২-৩ দিন ক্লাস)।
- **ক্যারিয়ার সুবিধা:** কোর্স চলাকালীন সময়েই আপনি ফাইবার ও আপওয়ার্কের মতো মার্কেটপ্লেসে কাজ করার প্রস্তুতি পাবেন। সাথে ক্রিয়েটিভ আইটির লাইফটাইম সাপোর্ট!`;
  }

  if (lower.includes("ai automation") || lower.includes("automation") || lower.includes("অটোমেশন")) {
    return `### 🤖 AI Automation Engineering (No-Code + Low-Code + AI Agents):

- **কোর্সটি কি?** কোডিং ছাড়াই আর্টিফিশিয়াল ইন্টেলিজেন্স (AI) ব্যবহার করে বিভিন্ন বিজনেস ও ওয়ার্কফ্লো স্বয়ংক্রিয় করার আধুনিকতম কোর্স।
- **কি শেখানো হবে?** Zapier, Make.com, n8n, Flowise, Custom AI Chatbots, AI Agents, CRM Integration.
- **সুবিধা:** প্রচলিত সফটওয়্যার ডেভেলপমেন্টের মতো কঠিন কোডিং শিখতে হয় না, অথচ আন্তর্জাতিক ক্লায়েন্টদের জন্য হাই-টিকেটের অটোমেশন সার্ভিস দেওয়া যায়।
- **কোর্স ফি:** ৩০,০০০ টাকা | মেয়াদ: ৪ মাস।`;
  }

  if (lower.includes("free seminar") || lower.includes("সেমিনার") || lower.includes("seminar")) {
    return `### 🎓 ক্রিয়েটিভ আইটি ফ্রি সেমিনার:
আপনি সরাসরি আমাদের ইনস্টিটিউটের অভিজ্ঞ মেন্টরদের সাথে ফ্রি সেমিনারে অংশ নিতে পারেন।
- **সুবিধা:** প্রতিটি কোর্সের মার্কেট ডিমান্ড ও ক্যারিয়ার গাইডলাইন সরাসরি মেন্টরের থেকে জানা যায়।
- **ক্যাম্পাস:** ধানমন্ডি ও উত্তরা ক্যাম্পাস এবং অনলাইনেও আয়োজন করা হয়।
- আপনি হোমপেজের **"Join Free Seminar"** বাটনে ক্লিক করে আজই আপনার সিট বুক করতে পারেন!`;
  }

  return `### 👋 স্বাগতম ক্রিয়েটিভ আইটি ইনস্টিটিউট AI কোর্স অ্যাডভাইজরে!

আমি আপনাকে আপনার ক্যারিয়ার ও চাহিদানুযায়ী সঠিক কোর্স বেছে নিতে সাহায্য করব:

🌟 **আপনি আমাকে যা জিজ্ঞেস করতে পারেন:**
1. **কোর্স এক্সপ্লেনেশন**: "Graphics Design কোর্সে কি কি শেখানো হয়?" অথবা "AI Automation কি?"
2. **কোর্স তুলনা (Comparison)**: "Web Development vs UI/UX Design কোনটা আমার জন্য ভালো?"
3. **পরামর্শ (Recommendation)**: "আমি নন-সিএসই স্টুডেন্ট, আমার জন্য কোন কোর্স দিয়ে শুরু করা ভালো?"
4. **ফি ও সময়সীমা**: প্রতিটি কোর্সের ফি, অনলাইন/অফলাইন ব্যাচ এবং লাইফটাইম সাপোর্ট সম্পর্কে জানতে পারেন।

বলুন, আপনি কোন কোন বিষয়ে জানতে বা তুলনা করতে চাচ্ছেন?`;
}

// Start Server with Vite Middleware in dev or static in prod
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
