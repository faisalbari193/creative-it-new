import React, { useState } from 'react';
import { X, CheckCircle2, Tag, Percent, Sparkles } from 'lucide-react';
import { Course } from '../types';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: Course | null;
}

export const DiscountModal: React.FC<DiscountModalProps> = ({
  isOpen,
  onClose,
  selectedCourse,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-neutral-100">
        
        {/* Close button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 p-1.5 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#d92228] flex items-center justify-center">
                <Percent className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#d92228] uppercase tracking-wider">
                  Exclusive Offer
                </span>
                <h3 className="text-xl font-extrabold text-neutral-900">
                  Claim Up to 35% Discount
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-600 mb-6 leading-relaxed">
              {selectedCourse
                ? `Get instant discount quota for ${selectedCourse.title}. Fill in your details below.`
                : 'Enroll in your dream IT course with special scholarship discount from Creative IT Institute.'}
            </p>

            {selectedCourse && (
              <div className="mb-5 p-3.5 bg-red-50/70 border border-red-100 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-neutral-800 block">{selectedCourse.title}</span>
                  <span className="text-neutral-500">Regular Fee: {selectedCourse.fee}</span>
                </div>
                <span className="bg-[#d92228] text-white text-[11px] font-black px-2 py-0.5 rounded">
                  UP TO 35% OFF
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tanvir Hasan"
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#d92228] focus:ring-1 focus:ring-[#d92228]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="01XXXXXXXXX"
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#d92228] focus:ring-1 focus:ring-[#d92228]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-[#d92228] focus:ring-1 focus:ring-[#d92228]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#d92228] hover:bg-[#b8181e] text-white font-bold py-3 rounded-lg text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                <Tag className="w-4 h-4" />
                <span>Get Discount Coupon</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-xl font-black text-neutral-900">
              Congratulations {name}!
            </h3>

            <p className="text-xs sm:text-sm text-neutral-600">
              Your discount voucher has been reserved. Our senior course counselor will call you at <span className="font-bold text-neutral-800">{phone}</span> within 15 minutes.
            </p>

            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-1">
              <div className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider">
                Your Promo Code
              </div>
              <div className="text-2xl font-black tracking-widest text-[#d92228]">
                CIT-DISCOUNT-35
              </div>
              <div className="text-[11px] text-amber-700">
                Valid for 48 hours for online & campus admissions
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-2.5 rounded-lg text-sm transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
