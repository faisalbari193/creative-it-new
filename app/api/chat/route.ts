import {GoogleGenAI} from '@google/genai';
import {NextResponse} from 'next/server';
import {COURSE_COMPARISONS} from '../../../src/data/courseComparisonData';
import {generateCourseAdvisorFallback} from '../../../src/data/courseAdvisorFallback';

const COURSE_CATALOG = COURSE_COMPARISONS.map(course =>
  `${course.title}: fee ${course.fee}; duration ${course.duration}; prerequisites ${course.prerequisites}; tools ${course.primaryTools.join(', ')}; topics ${course.keyTopics.join(', ')}; job market ${course.jobMarket}; typical earnings ${course.averageSalary}; suitable for ${course.bestSuitedFor}.`,
).join('\n');

const SYSTEM_INSTRUCTION = `You are CIT Advisor, the friendly official AI course counselor for Creative IT Institute, Bangladesh. Answer the user's actual question directly and specifically; do not reuse a generic answer across different questions. Reply in the same language as the user, including natural Bengali for Bengali or Banglish questions. Use the course information below, distinguish courses accurately, and never invent installment or discount terms or guarantee earnings. When a question is ambiguous, ask one focused follow-up. For comparisons, address fit, prerequisites, curriculum, duration, fee, career opportunities and the user's stated goal. Keep answers concise, structured with Markdown.\n\nCourse catalog:\n${COURSE_CATALOG}`;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const message = body?.message;
  const history = body?.history;

  if (typeof message !== 'string' || !message.trim()) {
    return NextResponse.json({error: 'Message is required.'}, {status: 400});
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({reply: generateCourseAdvisorFallback(message), source: 'local_advisor'});
  }

  try {
    const ai = new GoogleGenAI({apiKey});
    const contents = Array.isArray(history)
      ? history.slice(-6).map((turn: {role?: string; text?: string}) => ({
          role: turn.role === 'user' ? 'user' : 'model',
          parts: [{text: turn.text || ''}],
        }))
      : [];
    contents.push({role: 'user', parts: [{text: message}]});
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents,
      config: {systemInstruction: SYSTEM_INSTRUCTION, temperature: 0.7},
    });
    return NextResponse.json({
      reply: response.text || generateCourseAdvisorFallback(message),
      source: 'gemini',
    });
  } catch (error) {
    console.error('Gemini API error:', error);
    return NextResponse.json({
      reply: generateCourseAdvisorFallback(message),
      source: 'local_advisor_fallback',
    });
  }
}
