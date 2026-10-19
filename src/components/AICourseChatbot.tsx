import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Send, 
  X, 
  Sparkles, 
  Scale, 
  MessageSquare, 
  Maximize2, 
  Minimize2, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight,
  User,
  GraduationCap,
  Clock,
  Banknote,
  Wrench,
  Briefcase,
  ChevronDown
} from 'lucide-react';
import { COURSE_COMPARISONS, CourseComparisonProfile } from '../data/courseComparisonData';
import { generateCourseAdvisorFallback } from '../data/courseAdvisorFallback';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

interface AICourseChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry?: () => void;
  onOpenDiscount?: () => void;
}

export const AICourseChatbot: React.FC<AICourseChatbotProps> = ({
  isOpen,
  onClose,
  onOpenInquiry,
  onOpenDiscount
}) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'compare'>('chat');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Comparison state
  const [selectedCourseA, setSelectedCourseA] = useState<string>('graphic-design');
  const [selectedCourseB, setSelectedCourseB] = useState<string>('ui-ux-design');

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'model',
      text: `### 👋 স্বাগতম Creative IT AI Course Advisor-এ!
আমি ক্রিয়েটিভ আইটি ইনস্টিটিউটের অফিসিয়াল **এআই কোর্স অ্যাডভাইজর ও কাউন্সেলর**।

আমার কাছে আপনি যা যা জানতে পারেন:
- 💡 **যেকোনো কোর্স সহজ ভাষায় বুঝে নেওয়া**: "Graphics Design কোর্সে আসলে কি শেখানো হয়?"
- ⚖️ **কোর্স তুলনা (Course Comparison)**: "Web Development vs UI/UX Design এর মধ্যে পার্থক্য ও ভবিষ্যৎ কি?"
- 🎯 **আপনার চাহিদা অনুযায়ী পরামর্শ**: আপনার ব্যাকগ্রাউন্ড (নন-সিএসই / নতুন / চাকরিজীবী) জানালে সেরা কোর্স বেছে দেব।
- 💰 **ফি, সময়সীমা ও ফ্রিল্যান্সিং সম্ভাবনা**।

নিচের সাজেস্টেড প্রশ্নগুলোতে ক্লিক করতে পারেন অথবা আপনার প্রশ্নটি লিখুন!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, activeTab]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.map(m => ({ role: m.role, text: m.text }))
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: data.reply || 'দুঃখিত, এই মুহূর্তে উত্তর দেওয়া সম্ভব হচ্ছে না। অনুগ্রহ করে আবার চেষ্টা করুন।',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.warn('Chat API error, generating local assistance:', err);
      // Client-side instant fallback for uninterrupted UX
      const localReply = generateCourseAdvisorFallback(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: localReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickPrompt = (promptText: string) => {
    setActiveTab('chat');
    handleSendMessage(promptText);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        role: 'model',
        text: `কথোপকথন নতুন করে শুরু হয়েছে! আপনার কাঙ্ক্ষিত কোর্স বা যেকোনো ২টি কোর্সের তুলনামূলক তথ্য জানতে প্রশ্ন করুন।`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleTriggerCompareInChat = () => {
    const courseA = COURSE_COMPARISONS.find(c => c.id === selectedCourseA);
    const courseB = COURSE_COMPARISONS.find(c => c.id === selectedCourseB);
    if (!courseA || !courseB) return;

    setActiveTab('chat');
    handleSendMessage(`আমাকে "${courseA.title}" এবং "${courseB.title}" এর মধ্যে বিস্তারিত তুলনা এবং কোনটির ক্যারিয়ার ভবিষ্যৎ কেমন তা সহজ ভাষায় বুঝিয়ে দিন।`);
  };

  // Simple clean markdown parser for rendering formatted text & tables
  const renderFormattedMessage = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];

    const flushTable = () => {
      if (tableRows.length > 0) {
        const headers = tableRows[0];
        const bodyRows = tableRows.slice(1).filter(row => !row.every(cell => cell.includes('---')));
        elements.push(
          <div key={`table-${elements.length}`} className="my-3 overflow-x-auto rounded-lg border border-neutral-200">
            <table className="w-full text-xs text-left border-collapse">
              <thead className="bg-neutral-100 text-neutral-800 font-bold border-b border-neutral-200">
                <tr>
                  {headers.map((h, i) => (
                    <th key={i} className="px-3 py-2 border-r border-neutral-200 last:border-r-0 whitespace-nowrap">
                      {h.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-neutral-50/70'}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-3 py-2 border-r border-neutral-100 last:border-r-0 font-medium text-neutral-700">
                        {renderInlineFormatting(cell.trim())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
      }
      inTable = false;
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();

      // Table line detection: starts and ends with |
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        inTable = true;
        const cells = trimmed.split('|').slice(1, -1);
        tableRows.push(cells);
        return;
      } else if (inTable) {
        flushTable();
      }

      // Headings
      if (trimmed.startsWith('### ')) {
        elements.push(
          <h4 key={idx} className="font-bold text-neutral-900 text-sm sm:text-base mt-2 mb-1 flex items-center gap-1.5">
            {trimmed.replace('### ', '')}
          </h4>
        );
        return;
      }
      if (trimmed.startsWith('## ')) {
        elements.push(
          <h3 key={idx} className="font-extrabold text-neutral-900 text-base sm:text-lg mt-3 mb-1.5">
            {trimmed.replace('## ', '')}
          </h3>
        );
        return;
      }

      // Bullet points
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const bulletText = trimmed.substring(2);
        elements.push(
          <div key={idx} className="flex items-start gap-2 my-1 text-xs sm:text-sm text-neutral-700 pl-1">
            <span className="text-[#d92228] font-bold text-base leading-none">•</span>
            <div className="flex-1">{renderInlineFormatting(bulletText)}</div>
          </div>
        );
        return;
      }

      // Numbered lists (1. 2. etc.)
      const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
      if (numMatch) {
        elements.push(
          <div key={idx} className="flex items-start gap-2 my-1 text-xs sm:text-sm text-neutral-700 pl-1">
            <span className="font-bold text-[#d92228] text-xs px-1.5 py-0.5 rounded bg-red-50">{numMatch[1]}</span>
            <div className="flex-1">{renderInlineFormatting(numMatch[2])}</div>
          </div>
        );
        return;
      }

      // Empty line
      if (trimmed === '') {
        elements.push(<div key={idx} className="h-2" />);
        return;
      }

      // Regular paragraph
      elements.push(
        <p key={idx} className="text-xs sm:text-sm text-neutral-700 leading-relaxed my-1">
          {renderInlineFormatting(trimmed)}
        </p>
      );
    });

    if (inTable) {
      flushTable();
    }

    return elements;
  };

  // Inline bold **text** renderer
  const renderInlineFormatting = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-neutral-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const courseAProfile = COURSE_COMPARISONS.find(c => c.id === selectedCourseA);
  const courseBProfile = COURSE_COMPARISONS.find(c => c.id === selectedCourseB);

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed z-50 transition-all duration-300 shadow-2xl flex flex-col bg-white border border-neutral-200 overflow-hidden ${
        isExpanded
          ? 'inset-4 sm:inset-6 md:inset-10 lg:inset-16 rounded-2xl'
          : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-32px)] sm:w-[440px] md:w-[480px] h-[580px] max-h-[85vh] rounded-2xl'
      }`}
    >
      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#d92228] via-[#b8181e] to-[#991217] text-white p-3.5 sm:p-4 flex items-center justify-between shadow-sm select-none">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 shadow-inner">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm sm:text-base leading-tight">Creative IT AI Advisor</h3>
              <span className="flex items-center gap-1 text-[10px] bg-emerald-500/25 border border-emerald-300/40 text-emerald-100 font-medium px-1.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Active
              </span>
            </div>
            <p className="text-[11px] text-white/80 font-normal">
              Course Explanations & Comparison Assistant
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <button
            onClick={handleResetChat}
            title="Reset Chat"
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? "Restore size" : "Expand window"}
            className="hidden sm:block p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            title="Close"
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex border-b border-neutral-200 bg-neutral-50/80 px-3 pt-2 gap-2 text-xs font-semibold select-none">
        <button
          onClick={() => setActiveTab('chat')}
          className={`flex items-center gap-1.5 py-2 px-3 rounded-t-lg transition-all cursor-pointer ${
            activeTab === 'chat'
              ? 'bg-white text-[#d92228] border-t-2 border-t-[#d92228] shadow-sm font-bold'
              : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>AI Course Advisor</span>
        </button>

        <button
          onClick={() => setActiveTab('compare')}
          className={`flex items-center gap-1.5 py-2 px-3 rounded-t-lg transition-all cursor-pointer ${
            activeTab === 'compare'
              ? 'bg-white text-[#d92228] border-t-2 border-t-[#d92228] shadow-sm font-bold'
              : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
          }`}
        >
          <Scale className="w-3.5 h-3.5" />
          <span>Course Comparison Matrix</span>
          <span className="bg-red-100 text-red-700 text-[10px] px-1.5 py-0.2 rounded-full font-bold">New</span>
        </button>
      </div>

      {/* Body Content */}
      {activeTab === 'chat' ? (
        <div className="flex-1 flex flex-col overflow-hidden bg-neutral-50/40">
          
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3.5 text-sm">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="w-7 h-7 rounded-lg bg-red-100 text-[#d92228] flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-xs">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3.5 py-2.5 shadow-xs ${
                      isUser
                        ? 'bg-[#d92228] text-white rounded-tr-xs'
                        : 'bg-white text-neutral-800 border border-neutral-200/80 rounded-tl-xs'
                    }`}
                  >
                    <div className="text-xs sm:text-sm">
                      {isUser ? (
                        <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                      ) : (
                        renderFormattedMessage(msg.text)
                      )}
                    </div>
                    <div className={`text-[10px] mt-1.5 text-right font-medium ${isUser ? 'text-white/75' : 'text-neutral-400'}`}>
                      {msg.timestamp}
                    </div>
                  </div>

                  {isUser && (
                    <div className="w-7 h-7 rounded-lg bg-neutral-800 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex gap-2.5 justify-start items-center">
                <div className="w-7 h-7 rounded-lg bg-red-100 text-[#d92228] flex items-center justify-center shrink-0 shadow-xs">
                  <Sparkles className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-white border border-neutral-200 rounded-2xl rounded-tl-xs px-4 py-3 shadow-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-neutral-600">AI Counselor ভাবছে</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d92228] animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d92228] animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d92228] animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3 py-2 bg-white/90 border-t border-neutral-200/70">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#d92228]" />
                কুইক প্রশ্ন (Quick Queries)
              </span>
              <span className="text-[10px] text-neutral-400">ক্লিক করে উত্তর জানুন</span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
              <button
                onClick={() => handleQuickPrompt('Graphics Design vs UI/UX Design এর মধ্যে কোনটা বেছে নেওয়া ভালো?')}
                className="whitespace-nowrap px-2.5 py-1 text-xs bg-neutral-100 hover:bg-red-50 hover:text-[#d92228] border border-neutral-200 hover:border-red-200 rounded-lg text-neutral-700 transition-colors cursor-pointer"
              >
                ⚖️ Graphics vs UI/UX তুলনা
              </button>
              <button
                onClick={() => handleQuickPrompt('সম্পূর্ণ নতুন ও নন-কোডারদের জন্য কোন কোর্স সবচেয়ে সহজ ও লাভজনক?')}
                className="whitespace-nowrap px-2.5 py-1 text-xs bg-neutral-100 hover:bg-red-50 hover:text-[#d92228] border border-neutral-200 hover:border-red-200 rounded-lg text-neutral-700 transition-colors cursor-pointer"
              >
                🎯 নতুনদের জন্য সেরা কোর্স
              </button>
              <button
                onClick={() => handleQuickPrompt('AI Automation Engineering কোর্সে কি কি শেখানো হবে এবং মার্কেট ডিমান্ড কেমন?')}
                className="whitespace-nowrap px-2.5 py-1 text-xs bg-neutral-100 hover:bg-red-50 hover:text-[#d92228] border border-neutral-200 hover:border-red-200 rounded-lg text-neutral-700 transition-colors cursor-pointer"
              >
                🤖 AI Automation কোর্স
              </button>
              <button
                onClick={() => handleQuickPrompt('Digital Marketing vs SEO কোনটিতে দ্রুত ইনকাম শুরু করা যায়?')}
                className="whitespace-nowrap px-2.5 py-1 text-xs bg-neutral-100 hover:bg-red-50 hover:text-[#d92228] border border-neutral-200 hover:border-red-200 rounded-lg text-neutral-700 transition-colors cursor-pointer"
              >
                📈 Digital Marketing vs SEO
              </button>
              <button
                onClick={() => handleQuickPrompt('কোর্স ফি ও কিস্তি সুবিধা (Installment) সম্পর্কে জানান')}
                className="whitespace-nowrap px-2.5 py-1 text-xs bg-neutral-100 hover:bg-red-50 hover:text-[#d92228] border border-neutral-200 hover:border-red-200 rounded-lg text-neutral-700 transition-colors cursor-pointer"
              >
                💳 ফি ও কিস্তি সুবিধা
              </button>
            </div>
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-white border-t border-neutral-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="যেকোনো কোর্স সম্পর্কে বাংলায় বা ইংরেজিতে লিখুন..."
                disabled={isLoading}
                className="flex-1 bg-neutral-100 focus:bg-white text-neutral-800 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:border-[#d92228] focus:ring-2 focus:ring-red-100 outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="bg-[#d92228] hover:bg-[#b8181e] disabled:opacity-50 text-white p-2.5 rounded-xl transition-all cursor-pointer shadow-sm shrink-0 flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Direct human counselor fallback & seminar links */}
            <div className="flex items-center justify-between mt-2 pt-1.5 text-[11px] text-neutral-500 border-t border-neutral-100">
              <span className="truncate">কোর্স অ্যাডভাইজরে সাহায্য দরকার?</span>
              <div className="flex items-center gap-2 shrink-0">
                {onOpenDiscount && (
                  <button
                    onClick={onOpenDiscount}
                    className="text-[#d92228] font-bold hover:underline cursor-pointer"
                  >
                    ডিসকাউন্ট ভাউচার
                  </button>
                )}
                {onOpenInquiry && (
                  <button
                    onClick={onOpenInquiry}
                    className="text-neutral-700 font-semibold hover:text-[#d92228] hover:underline cursor-pointer"
                  >
                    কাউন্সেলর ফর্ম
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Course Comparison Matrix Tab */
        <div className="flex-1 flex flex-col overflow-y-auto p-4 bg-neutral-50/50 space-y-4">
          
          {/* Header Description */}
          <div className="bg-white p-3.5 rounded-xl border border-neutral-200 shadow-xs">
            <h4 className="font-bold text-neutral-900 text-sm flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-[#d92228]" />
              আপনার চাহিদামতো ২টি কোর্স সরাসরি পাশাপাশি তুলনা করুন
            </h4>
            <p className="text-xs text-neutral-600 mt-1">
              নিচের ড্রপডাউন থেকে যেকোনো ২টি কোর্স নির্বাচন করুন। তাদের যোগ্যতা, শেখানো টুলস, ফ্রিল্যান্সিং স্কোপ ও ফি তুলনামূলকভাবে দেখুন।
            </p>
          </div>

          {/* Selectors Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Course A Picker */}
            <div className="bg-white p-3 rounded-xl border border-neutral-200 shadow-xs">
              <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                কোর্স ১ (Course A):
              </label>
              <div className="relative">
                <select
                  value={selectedCourseA}
                  onChange={(e) => setSelectedCourseA(e.target.value)}
                  className="w-full bg-neutral-50 text-neutral-800 text-xs sm:text-sm font-semibold p-2.5 pr-8 rounded-lg border border-neutral-300 focus:border-[#d92228] outline-none cursor-pointer appearance-none"
                >
                  {COURSE_COMPARISONS.map((course) => (
                    <option key={course.id} value={course.id} disabled={course.id === selectedCourseB}>
                      {course.title} ({course.category})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-2.5 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Course B Picker */}
            <div className="bg-white p-3 rounded-xl border border-neutral-200 shadow-xs">
              <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                কোর্স ২ (Course B):
              </label>
              <div className="relative">
                <select
                  value={selectedCourseB}
                  onChange={(e) => setSelectedCourseB(e.target.value)}
                  className="w-full bg-neutral-50 text-neutral-800 text-xs sm:text-sm font-semibold p-2.5 pr-8 rounded-lg border border-neutral-300 focus:border-[#d92228] outline-none cursor-pointer appearance-none"
                >
                  {COURSE_COMPARISONS.map((course) => (
                    <option key={course.id} value={course.id} disabled={course.id === selectedCourseA}>
                      {course.title} ({course.category})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-2.5 top-3 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Side by Side Comparison Cards */}
          {courseAProfile && courseBProfile && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Card A */}
              <div className="bg-white rounded-xl border-2 border-red-200 p-4 shadow-sm space-y-3">
                <div className="border-b border-neutral-100 pb-2.5">
                  <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider block">
                    {courseAProfile.category}
                  </span>
                  <h4 className="font-extrabold text-neutral-900 text-base leading-tight mt-0.5">
                    {courseAProfile.title}
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed bg-red-50/60 p-2 rounded-lg border border-red-100">
                    💡 {courseAProfile.summaryBengali}
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-neutral-700">
                  <div className="flex items-center justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500 flex items-center gap-1.5">
                      <Banknote className="w-3.5 h-3.5 text-neutral-400" /> কোর্স ফি:
                    </span>
                    <span className="font-bold text-neutral-900">{courseAProfile.fee}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" /> সময়কাল:
                    </span>
                    <span className="font-semibold text-neutral-800">{courseAProfile.duration}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-neutral-400" /> কাঠিন্যের স্তর:
                    </span>
                    <span className="font-semibold text-neutral-800">{courseAProfile.difficulty}</span>
                  </div>

                  <div>
                    <span className="font-bold text-neutral-800 block mb-1 flex items-center gap-1">
                      <Wrench className="w-3.5 h-3.5 text-[#d92228]" /> প্রধান টুলস:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {courseAProfile.primaryTools.map((tool, idx) => (
                        <span key={idx} className="bg-neutral-100 text-neutral-800 text-[11px] font-medium px-2 py-0.5 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-neutral-800 block mb-0.5">পূর্বশর্ত (Prerequisites):</span>
                    <p className="text-neutral-600 text-[11px]">{courseAProfile.prerequisites}</p>
                  </div>

                  <div>
                    <span className="font-bold text-neutral-800 block mb-0.5 flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-emerald-600" /> মার্কেটপ্লেস ও ক্যারিয়ার:
                    </span>
                    <p className="text-neutral-600 text-[11px]">{courseAProfile.jobMarket}</p>
                    <p className="text-emerald-700 font-bold text-[11px] mt-0.5">গড় ইনকাম: {courseAProfile.averageSalary}</p>
                  </div>

                  <div className="bg-neutral-50 p-2 rounded-lg border border-neutral-200">
                    <span className="font-bold text-neutral-800 block text-[11px]">কার জন্য পারফেক্ট?</span>
                    <p className="text-neutral-600 text-[11px] mt-0.5">{courseAProfile.bestSuitedFor}</p>
                  </div>
                </div>
              </div>

              {/* Card B */}
              <div className="bg-white rounded-xl border-2 border-blue-200 p-4 shadow-sm space-y-3">
                <div className="border-b border-neutral-100 pb-2.5">
                  <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
                    {courseBProfile.category}
                  </span>
                  <h4 className="font-extrabold text-neutral-900 text-base leading-tight mt-0.5">
                    {courseBProfile.title}
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed bg-blue-50/60 p-2 rounded-lg border border-blue-100">
                    💡 {courseBProfile.summaryBengali}
                  </p>
                </div>

                <div className="space-y-2.5 text-xs text-neutral-700">
                  <div className="flex items-center justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500 flex items-center gap-1.5">
                      <Banknote className="w-3.5 h-3.5 text-neutral-400" /> কোর্স ফি:
                    </span>
                    <span className="font-bold text-neutral-900">{courseBProfile.fee}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" /> সময়কাল:
                    </span>
                    <span className="font-semibold text-neutral-800">{courseBProfile.duration}</span>
                  </div>

                  <div className="flex items-center justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-neutral-400" /> কাঠিন্যের স্তর:
                    </span>
                    <span className="font-semibold text-neutral-800">{courseBProfile.difficulty}</span>
                  </div>

                  <div>
                    <span className="font-bold text-neutral-800 block mb-1 flex items-center gap-1">
                      <Wrench className="w-3.5 h-3.5 text-blue-600" /> প্রধান টুলস:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {courseBProfile.primaryTools.map((tool, idx) => (
                        <span key={idx} className="bg-neutral-100 text-neutral-800 text-[11px] font-medium px-2 py-0.5 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-neutral-800 block mb-0.5">পূর্বশর্ত (Prerequisites):</span>
                    <p className="text-neutral-600 text-[11px]">{courseBProfile.prerequisites}</p>
                  </div>

                  <div>
                    <span className="font-bold text-neutral-800 block mb-0.5 flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-emerald-600" /> মার্কেটপ্লেস ও ক্যারিয়ার:
                    </span>
                    <p className="text-neutral-600 text-[11px]">{courseBProfile.jobMarket}</p>
                    <p className="text-emerald-700 font-bold text-[11px] mt-0.5">গড় ইনকাম: {courseBProfile.averageSalary}</p>
                  </div>

                  <div className="bg-neutral-50 p-2 rounded-lg border border-neutral-200">
                    <span className="font-bold text-neutral-800 block text-[11px]">কার জন্য পারফেক্ট?</span>
                    <p className="text-neutral-600 text-[11px] mt-0.5">{courseBProfile.bestSuitedFor}</p>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* Trigger AI in-depth comparison button */}
          <div className="bg-white p-4 rounded-xl border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
            <div>
              <h5 className="font-bold text-neutral-900 text-sm">আপনার ব্যাকগ্রাউন্ড অনুযায়ী বিস্তারিত গাইডলাইন চান?</h5>
              <p className="text-xs text-neutral-600">এআই অ্যাডভাইজরকে এই দুটি কোর্সের গভীর তুলনা করতে বলুন।</p>
            </div>
            <button
              onClick={handleTriggerCompareInChat}
              className="bg-[#d92228] hover:bg-[#b8181e] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer shadow-sm shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ask AI in Chat</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
};
