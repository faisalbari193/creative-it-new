import React, { useState } from 'react';
import { X, MapPin, Crosshair, Calendar, Users, Briefcase, CheckCircle2, Send, Upload, Award } from 'lucide-react';
import { JobPosition } from '../data/careerData';

interface CareerJobDetailsModalProps {
  job: JobPosition | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CareerJobDetailsModal: React.FC<CareerJobDetailsModalProps> = ({
  job,
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'apply'>('details');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [expectedSalary, setExpectedSalary] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [coverNote, setCoverNote] = useState('');
  const [fileName, setFileName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen || !job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setExperience('');
    setExpectedSalary('');
    setPortfolioUrl('');
    setCoverNote('');
    setFileName('');
    setActiveTab('details');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-neutral-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ea3840] text-white mb-2">
            {job.department}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-2">
            {job.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-300 mt-3">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#ea3840]" />
              {job.city}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="w-3.5 h-3.5 text-neutral-400" />
              {job.employmentType} ({job.jobType})
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-neutral-400" />
              Deadline: {job.deadline}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-neutral-400" />
              Vacancy: {job.vacancy}
            </span>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-2 mt-5 border-t border-neutral-800 pt-4">
            <button
              onClick={() => setActiveTab('details')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'details'
                  ? 'bg-white text-neutral-900 shadow-sm'
                  : 'text-neutral-400 hover:text-white bg-neutral-800'
              }`}
            >
              Job Specifications
            </button>
            <button
              onClick={() => setActiveTab('apply')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'apply'
                  ? 'bg-[#ea3840] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white bg-neutral-800'
              }`}
            >
              Apply Online
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 text-neutral-700 text-sm">
          {isSubmitted ? (
            <div className="py-12 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Application Submitted!</h3>
              <p className="text-neutral-600 max-w-md mx-auto mb-6 text-sm">
                Thank you, <span className="font-semibold text-neutral-900">{fullName || 'Applicant'}</span>. We have received your application for <span className="font-semibold text-neutral-900">{job.title}</span>. Our Talent Acquisition team will review your profile and contact you soon.
              </p>
              <button
                onClick={handleReset}
                className="bg-[#ea3840] hover:bg-[#d42d35] text-white px-6 py-2.5 rounded-xl font-bold text-sm cursor-pointer transition-colors"
              >
                Close & Done
              </button>
            </div>
          ) : activeTab === 'details' ? (
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-neutral-900 text-base mb-2">About The Role</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{job.roleDetails}</p>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-base mb-2">Key Responsibilities</h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-neutral-600 text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea3840] mt-2 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-base mb-2">Requirements & Qualifications</h4>
                <ul className="space-y-2">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-neutral-600 text-xs sm:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-neutral-900 text-base mb-2">Compensation & Benefits</h4>
                <ul className="space-y-2">
                  {job.benefits.map((ben, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-neutral-600 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-neutral-400 block">Salary</span>
                  <span className="font-bold text-neutral-800 text-sm">{job.salary}</span>
                </div>
                <button
                  onClick={() => setActiveTab('apply')}
                  className="bg-[#ea3840] hover:bg-[#d42d35] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  Apply for this Position
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Tanvir Ahmed"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:border-[#ea3840] focus:ring-1 focus:ring-[#ea3840] outline-hidden text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tanvir@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:border-[#ea3840] focus:ring-1 focus:ring-[#ea3840] outline-hidden text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="017XXXXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:border-[#ea3840] focus:ring-1 focus:ring-[#ea3840] outline-hidden text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Expected Salary (Monthly BDT)
                  </label>
                  <input
                    type="text"
                    value={expectedSalary}
                    onChange={(e) => setExpectedSalary(e.target.value)}
                    placeholder="e.g. 35,000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:border-[#ea3840] focus:ring-1 focus:ring-[#ea3840] outline-hidden text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Relevant Experience
                  </label>
                  <input
                    type="text"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    placeholder="e.g. 2 years at Tech Ltd"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:border-[#ea3840] focus:ring-1 focus:ring-[#ea3840] outline-hidden text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Portfolio / LinkedIn URL
                  </label>
                  <input
                    type="url"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://linkedin.com/in/..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:border-[#ea3840] focus:ring-1 focus:ring-[#ea3840] outline-hidden text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Upload Resume / CV (PDF, DOCX) *
                </label>
                <div className="relative border-2 border-dashed border-neutral-200 hover:border-[#ea3840] rounded-xl p-4 text-center cursor-pointer transition-colors bg-neutral-50/50">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setFileName(e.target.files[0].name);
                      }
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <Upload className="w-6 h-6 text-neutral-400 mx-auto mb-1" />
                  <span className="text-xs font-semibold text-neutral-700 block">
                    {fileName ? fileName : 'Click or drag resume file here (max 5MB)'}
                  </span>
                  <span className="text-[11px] text-neutral-400">PDF, DOC, DOCX formats supported</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Cover Note / Why Creative IT?
                </label>
                <textarea
                  rows={3}
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  placeholder="Share a brief introduction about your goals and how you can contribute..."
                  className="w-full px-3.5 py-2 rounded-xl border border-neutral-200 focus:border-[#ea3840] focus:ring-1 focus:ring-[#ea3840] outline-hidden text-sm"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('details')}
                  className="px-4 py-2.5 rounded-xl font-semibold text-neutral-600 hover:bg-neutral-100 text-sm cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-[#ea3840] hover:bg-[#d42d35] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Application
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
