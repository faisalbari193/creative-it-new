import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, Phone, User, Mail, Send, Clock, BookOpen } from 'lucide-react';

interface ContactInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

const COURSE_OPTIONS = [
  'General Inquiry / Admissions',
  'Full Stack Web Development',
  'MERN Stack Development',
  'Professional Graphic Design',
  'Digital Marketing',
  'UI/UX Design',
  'Cyber Security',
  'App Development with Flutter',
  'Motion Graphics & Video Editing',
  'Python & Machine Learning',
  'Diploma in IT',
];

const QUICK_TAGS = [
  'Admission Schedule',
  'Course Fee & Discount',
  'Online / Offline Batches',
  'Job Placement Details',
];

export const ContactInquiryModal: React.FC<ContactInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultCourse = 'General Inquiry / Admissions',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState(defaultCourse);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setCourse(defaultCourse);
    onClose();
  };

  const handleSelectQuickTag = (tag: string) => {
    setMessage((prev) => {
      if (!prev) return `Hi, I would like to inquire about ${tag}.`;
      return `${prev} (Topic: ${tag})`;
    });
  };

  return (
    <div
      id="contact-inquiry-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose();
      }}
    >
      <div
        id="contact-inquiry-modal-container"
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-neutral-100 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-modal-title"
      >
        {/* Close Button */}
        <button
          id="btn-close-inquiry-modal"
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 p-2 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="flex items-start gap-3.5 mb-3">
              <div className="w-11 h-11 rounded-xl bg-red-50 text-[#d92228] flex items-center justify-center shrink-0 mt-0.5">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Counselors Online
                  </span>
                  <span className="text-xs text-neutral-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Reply ~15m
                  </span>
                </div>
                <h3 id="inquiry-modal-title" className="text-xl sm:text-2xl font-black text-neutral-900 font-heading">
                  Quick Student Inquiry
                </h3>
              </div>
            </div>

            <p className="text-sm text-neutral-600 mb-5 leading-relaxed font-normal">
              Have questions about our IT training, courses, fees, or upcoming batches? Leave your inquiry below and our expert career counselor will reach out to you immediately.
            </p>

            {/* Quick Topic Chips */}
            <div className="mb-4">
              <span className="text-xs font-semibold text-neutral-500 block mb-2">
                Quick Inquiries:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleSelectQuickTag(tag)}
                    className="text-xs font-medium bg-neutral-100 hover:bg-red-50 hover:text-[#d92228] text-neutral-700 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                  >
                    + {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Inquiry Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Your Full Name <span className="text-[#d92228]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="input-inquiry-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tanvir Hasan"
                    className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-[#d92228] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp <span className="text-[#d92228]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="input-inquiry-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01700-000000"
                      className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-[#d92228] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="input-inquiry-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tanvir@example.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-[#d92228] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Interested Course / Program
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    id="select-inquiry-course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full pl-10 pr-8 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-[#d92228] focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    {COURSE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Your Inquiry / Question <span className="text-[#d92228]">*</span>
                </label>
                <textarea
                  id="textarea-inquiry-message"
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your question here (e.g., When is the next batch starting for Web Development? Can I pay in installments?)..."
                  className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-[#d92228] focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  id="btn-submit-inquiry"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#d92228] hover:bg-[#b8181e] disabled:opacity-75 text-white py-3 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-red-500/25 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending inquiry...' : 'Send Inquiry'}</span>
                </button>
              </div>
            </form>

            {/* Direct Hotline / Alternative Contact */}
            <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span>Prefer immediate call?</span>
              <a
                href="tel:+8801700000000"
                className="text-[#d92228] font-bold hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+880 1700-000000</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-in zoom-in-75 duration-300">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-neutral-900 mb-2 font-heading">
              Inquiry Sent Successfully!
            </h3>

            <p className="text-neutral-600 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-neutral-900">{name}</span>! Our student admission counselor has received your inquiry regarding <span className="font-semibold text-neutral-900">{course}</span> and will reach you via <span className="font-semibold text-neutral-900">{phone}</span> shortly.
            </p>

            <div className="bg-neutral-50 border border-neutral-200/80 rounded-xl p-4 text-xs text-neutral-600 text-left mb-6 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-neutral-500">Inquiry Target:</span>
                <span className="font-bold text-neutral-800">{course}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Contact Number:</span>
                <span className="font-bold text-neutral-800">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Estimated Response:</span>
                <span className="font-bold text-emerald-600">Within 15 Minutes</span>
              </div>
            </div>

            <button
              id="btn-close-inquiry-success"
              onClick={handleResetAndClose}
              className="bg-neutral-900 hover:bg-black text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer shadow-md"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
