import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  MapPin,
  CheckCircle2,
  Clock,
  User,
  Phone,
  Mail,
  Video,
  ChevronRight,
  Sparkles,
  Users,
  Building2,
  AlertCircle
} from 'lucide-react';
import { SEMINAR_SCHEDULES, SeminarSchedule } from '../data/seminarsData';

interface SeminarModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const SeminarModal: React.FC<SeminarModalProps> = ({
  isOpen,
  onClose,
  initialTopic,
}) => {
  const [activeTab, setActiveTab] = useState<'register' | 'schedules'>('register');
  const [selectedSeminar, setSelectedSeminar] = useState<SeminarSchedule>(SEMINAR_SCHEDULES[0]);
  const [mode, setMode] = useState<'offline' | 'online'>('offline');
  const [campusVenue, setCampusVenue] = useState('ধানমন্ডি ক্যাম্পাস (মমতা প্লাজা, রোড-৪)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [registered, setRegistered] = useState(false);
  const [filterMode, setFilterMode] = useState<'all' | 'online' | 'hybrid'>('all');

  // Match initial topic when modal opens or initialTopic changes
  useEffect(() => {
    if (!isOpen) return;

    if (typeof initialTopic !== 'string' || !initialTopic.trim()) {
      // If opened with no topic (e.g., clicked "সকল শিডিউল"), default to schedule tab or first seminar
      setSelectedSeminar(SEMINAR_SCHEDULES[0]);
      return;
    }

    // Try to find matching seminar by id, bengali title, or english title
    const search = initialTopic.toLowerCase().trim();
    const matched = SEMINAR_SCHEDULES.find((sem) => {
      return (
        sem.id.toLowerCase() === search ||
        sem.topic.toLowerCase().includes(search) ||
        search.includes(sem.topic.toLowerCase()) ||
        sem.topicEn.toLowerCase().includes(search) ||
        search.includes(sem.topicEn.toLowerCase())
      );
    });

    if (matched) {
      setSelectedSeminar(matched);
      if (matched.mode === 'online') {
        setMode('online');
      } else {
        setMode('offline');
      }
    } else {
      setSelectedSeminar(SEMINAR_SCHEDULES[0]);
    }
    setActiveTab('register');
  }, [isOpen, initialTopic]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleResetAndClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelectSeminarFromList = (sem: SeminarSchedule) => {
    setSelectedSeminar(sem);
    if (sem.mode === 'online') {
      setMode('online');
    } else {
      setMode('offline');
    }
    setActiveTab('register');
  };

  const validatePhone = (value: string) => {
    const clean = value.replace(/[\s-]/g, '');
    const bdPhoneRegex = /^(?:\+?8801|01)[3-9]\d{8}$/;
    if (!clean) {
      return 'অনুগ্রহ করে মোবাইল নম্বর প্রদান করুন';
    }
    if (!bdPhoneRegex.test(clean)) {
      return 'সঠিক ১১ ডিজিটের ফোন নম্বর দিন (যেমন: 017XXXXXXXX)';
    }
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validatePhone(phone);
    if (err) {
      setPhoneError(err);
      return;
    }
    setPhoneError('');
    setRegistered(true);
  };

  const handleResetAndClose = () => {
    setRegistered(false);
    setName('');
    setPhone('');
    setEmail('');
    setPhoneError('');
    setActiveTab('register');
    onClose();
  };

  const filteredSchedules = SEMINAR_SCHEDULES.filter((sem) => {
    if (filterMode === 'all') return true;
    return sem.mode === filterMode;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl relative border border-neutral-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-800 text-white px-5 sm:px-6 py-4 flex items-center justify-between border-b border-neutral-700/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d92228] text-white flex items-center justify-center shadow-md shadow-red-600/30">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-[#d92228] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider">
                  ১০০% ফ্রি সেমিনার
                </span>
                <span className="text-amber-400 text-xs font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  সীমিত আসন
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-neutral-100 mt-0.5">
                ক্যারিয়ার গাইডলাইন ও ফ্রি সেমিনার
              </h3>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="text-neutral-400 hover:text-white p-1.5 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!registered && (
          <div className="flex border-b border-neutral-200 bg-neutral-50 px-5 sm:px-6 shrink-0">
            <button
              onClick={() => setActiveTab('register')}
              className={`py-3 px-4 font-bold text-xs sm:text-sm border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'register'
                  ? 'border-[#d92228] text-[#d92228] bg-white rounded-t-lg'
                  : 'border-transparent text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>ফ্রি রেজিস্ট্রেশন ফরম</span>
            </button>
            <button
              onClick={() => setActiveTab('schedules')}
              className={`py-3 px-4 font-bold text-xs sm:text-sm border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'schedules'
                  ? 'border-[#d92228] text-[#d92228] bg-white rounded-t-lg'
                  : 'border-transparent text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>সকল সেমিনার শিডিউল ({SEMINAR_SCHEDULES.length})</span>
            </button>
          </div>
        )}

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {!registered ? (
            activeTab === 'register' ? (
              <div>
                {/* Highlighted Selected Seminar Card */}
                <div className="bg-red-50/50 border border-red-200/80 rounded-xl p-4 mb-5 relative">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        {selectedSeminar.mode === 'online' ? (
                          <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Video className="w-3 h-3" /> অনলাইন জুম
                          </span>
                        ) : (
                          <span className="text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> ক্যাম্পাস + অনলাইন
                          </span>
                        )}
                        <span className="text-[11px] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded-full">
                          {selectedSeminar.seatsLeft} টি সিট বাকি
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                        {selectedSeminar.topic}
                      </h4>
                      <p className="text-xs text-neutral-500 font-medium">
                        {selectedSeminar.topicEn}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveTab('schedules')}
                      className="shrink-0 text-xs font-bold text-[#d92228] hover:underline cursor-pointer bg-white px-2.5 py-1 rounded-md border border-red-200 shadow-2xs"
                    >
                      পরিবর্তন করুন
                    </button>
                  </div>

                  {/* Date, Time & Venue Details */}
                  <div className="mt-3 pt-3 border-t border-red-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#d92228] shrink-0" />
                      <span>
                        <strong>সময়:</strong> {selectedSeminar.day}, {selectedSeminar.dateStr} ({selectedSeminar.time})
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#d92228] shrink-0" />
                      <span>
                        <strong>ভেন্যু:</strong> {selectedSeminar.campus}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Select or Change Seminar Topic Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      সেমিনারের বিষয় নির্বাচন করুন <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={selectedSeminar.id}
                      onChange={(e) => {
                        const sem = SEMINAR_SCHEDULES.find((s) => s.id === e.target.value);
                        if (sem) {
                          setSelectedSeminar(sem);
                          if (sem.mode === 'online') setMode('online');
                        }
                      }}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#d92228] focus:ring-1 focus:ring-[#d92228] bg-white font-medium"
                    >
                      {SEMINAR_SCHEDULES.map((sem) => (
                        <option key={sem.id} value={sem.id}>
                          {sem.topic} — {sem.day} ({sem.time})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Attendance Mode */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5">
                      অংশগ্রহণের মাধ্যম নির্বাচন করুন
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setMode('offline')}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          mode === 'offline'
                            ? 'border-[#d92228] bg-red-50/70 text-[#d92228] ring-1 ring-[#d92228]'
                            : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                        <span>ক্যাম্পাসে এসে সরাসরি</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setMode('online')}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          mode === 'online'
                            ? 'border-[#d92228] bg-red-50/70 text-[#d92228] ring-1 ring-[#d92228]'
                            : 'border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                        }`}
                      >
                        <Video className="w-4 h-4" />
                        <span>অনলাইন লাইভ জুম সেশন</span>
                      </button>
                    </div>
                  </div>

                  {/* Campus Venue (if offline) */}
                  {mode === 'offline' && (
                    <div>
                      <label className="block text-xs font-bold text-neutral-700 mb-1">
                        ক্যাম্পাস নির্বাচন করুন
                      </label>
                      <select
                        value={campusVenue}
                        onChange={(e) => setCampusVenue(e.target.value)}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#d92228] focus:ring-1 focus:ring-[#d92228] bg-white font-medium"
                      >
                        <option value="ধানমন্ডি ক্যাম্পাস (মমতা প্লাজা, রোড-৪)">
                          ধানমন্ডি ক্যাম্পাস (মমতা প্লাজা, রোড-৪, ঢাকা)
                        </option>
                        <option value="উত্তরা ক্যাম্পাস (রাজলক্ষ্মী কমপ্লেক্স, সেক্টর-৩)">
                          উত্তরা ক্যাম্পাস (রাজলক্ষ্মী কমপ্লেক্স, সেক্টর-৩, ঢাকা)
                        </option>
                        <option value="মিরপুর ক্যাম্পাস (মিরপুর-১০ গোলচত্বর)">
                          মিরপুর ক্যাম্পাস (মিরপুর-১০ গোলচত্বর, ঢাকা)
                        </option>
                        <option value="চট্টগ্রাম ক্যাম্পাস (জিইসি মোড়, চট্টগ্রাম)">
                          চট্টগ্রাম ক্যাম্পাস (জিইসি মোড়, চট্টগ্রাম)
                        </option>
                      </select>
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      আপনার পুরো নাম <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="যেমন: সাকিব আল হাসান"
                        className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#d92228] focus:ring-1 focus:ring-[#d92228]"
                      />
                    </div>
                  </div>

                  {/* Phone Input with validation message */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      মোবাইল নম্বর (SMS এন্ট্রি পাস পাঠানো হবে) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (phoneError) setPhoneError('');
                        }}
                        placeholder="01XXXXXXXXX"
                        className={`w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 rounded-lg border focus:outline-none focus:ring-1 ${
                          phoneError
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50/20'
                            : 'border-neutral-300 focus:border-[#d92228] focus:ring-[#d92228]'
                        }`}
                      />
                    </div>
                    {phoneError && (
                      <p className="text-red-600 text-xs mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {phoneError}
                      </p>
                    )}
                  </div>

                  {/* Email Input (Optional) */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1">
                      ইমেইল অ্যাড্রেস <span className="text-neutral-400 font-normal">(ঐচ্ছিক)</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@mail.com"
                        className="w-full text-xs sm:text-sm pl-10 pr-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#d92228] focus:ring-1 focus:ring-[#d92228]"
                      />
                    </div>
                  </div>

                  <p className="text-[11px] text-neutral-500 leading-normal">
                    * সেমিনারে অংশগ্রহণের লিংক ও ক্যাম্পাস রুম নম্বর রেজিস্ট্রেশনের পর আপনার মোবাইলে ফ্রি SMS-এর মাধ্যমে পাঠানো হবে।
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-[#d92228] hover:bg-[#b8181e] text-white font-bold py-3 px-4 rounded-xl text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 mt-2 group"
                  >
                    <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>ফ্রি সিট নিশ্চিত করুন</span>
                  </button>
                </form>
              </div>
            ) : (
              /* All Schedules List Tab */
              <div className="space-y-4">
                {/* Filter Pills */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-neutral-100">
                  <span className="text-xs font-bold text-neutral-600">
                    আসন্ন সেশনের সময়সূচি:
                  </span>
                  <div className="flex items-center gap-1.5 text-xs">
                    <button
                      onClick={() => setFilterMode('all')}
                      className={`px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                        filterMode === 'all'
                          ? 'bg-[#d92228] text-white'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                      }`}
                    >
                      সবগুলো
                    </button>
                    <button
                      onClick={() => setFilterMode('online')}
                      className={`px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                        filterMode === 'online'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                      }`}
                    >
                      অনলাইন
                    </button>
                    <button
                      onClick={() => setFilterMode('hybrid')}
                      className={`px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                        filterMode === 'hybrid'
                          ? 'bg-amber-600 text-white'
                          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                      }`}
                    >
                      ক্যাম্পাস
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  {filteredSchedules.map((sem) => (
                    <div
                      key={sem.id}
                      className={`p-4 rounded-xl border transition-all ${
                        selectedSeminar.id === sem.id
                          ? 'border-[#d92228] bg-red-50/40 ring-1 ring-[#d92228]/40'
                          : 'border-neutral-200 hover:border-neutral-300 bg-white'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            {sem.mode === 'online' ? (
                              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                                <Video className="w-2.5 h-2.5" /> অনলাইন
                              </span>
                            ) : (
                              <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                                <MapPin className="w-2.5 h-2.5" /> ক্যাম্পাস + অনলাইন
                              </span>
                            )}
                            <span className="text-[10px] font-bold bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded-full">
                              আসন বাকি: {sem.seatsLeft}
                            </span>
                          </div>

                          <h4 className="font-bold text-sm sm:text-base text-neutral-900">
                            {sem.topic}
                          </h4>

                          <p className="text-xs text-neutral-500 font-medium">
                            {sem.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-neutral-600 font-medium">
                            <span className="flex items-center gap-1 text-red-700 font-semibold">
                              <Clock className="w-3.5 h-3.5 text-[#d92228]" />
                              {sem.day}, {sem.dateStr} ({sem.time})
                            </span>
                            <span className="text-neutral-400">•</span>
                            <span className="text-neutral-600">
                              {sem.campus}
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleSelectSeminarFromList(sem)}
                          className="shrink-0 bg-[#d92228] hover:bg-[#b8181e] text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-xs flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <span>সিট বুক করুন</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ) : (
            /* Registration Success Screen */
            <div className="text-center py-4 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  রেজিস্ট্রেশন নিশ্চিত হয়েছে
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-neutral-900 mt-2">
                  ধন্যবাদ, {name}!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
                  আপনার আসন সফলভাবে সংরক্ষিত হয়েছে। ফ্রি সেমিনারের বিস্তারিত নিচে দেওয়া হলো:
                </p>
              </div>

              {/* Confirmation Details Card */}
              <div className="p-4 sm:p-5 bg-neutral-50 border border-neutral-200 rounded-2xl text-left space-y-2.5 text-xs sm:text-sm text-neutral-800 max-w-md mx-auto shadow-2xs">
                <div className="pb-2 border-b border-neutral-200">
                  <span className="text-xs text-neutral-500 font-semibold block">সেমিনারের বিষয়:</span>
                  <span className="font-bold text-neutral-900 text-sm">{selectedSeminar.topic}</span>
                </div>
                <div>
                  <span className="text-xs text-neutral-500 font-semibold block">তারিখ ও সময়:</span>
                  <span className="font-bold text-[#d92228]">
                    {selectedSeminar.day}, {selectedSeminar.dateStr} — {selectedSeminar.time}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-neutral-500 font-semibold block">অংশগ্রহণের মাধ্যম:</span>
                  <span className="font-medium text-neutral-800">
                    {mode === 'offline' ? campusVenue : 'অনলাইন লাইভ (Zoom Link SMS এ পাঠানো হবে)'}
                  </span>
                </div>
                <div className="pt-2 border-t border-neutral-200 text-xs text-neutral-600">
                  <span className="font-bold text-neutral-900">মোবাইল নম্বর:</span> {phone}
                  <p className="text-emerald-700 font-medium mt-1">
                    ✓ SMS নোটিফিকেশন পাঠানো হয়েছে।
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
                <button
                  onClick={() => {
                    setRegistered(false);
                    setActiveTab('schedules');
                  }}
                  className="w-full sm:w-1/2 border border-neutral-300 hover:bg-neutral-50 text-neutral-700 font-bold py-2.5 rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  আরেকটি সেমিনার দেখুন
                </button>
                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-1/2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-2.5 rounded-xl text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  বন্ধ করুন
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
