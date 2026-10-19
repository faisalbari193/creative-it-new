import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react';

interface BranchContactInfo {
  id: string;
  type: 'head' | 'branch';
  tagLabel: string;
  title: string;
  addressLines: string[];
  phoneNumbers: string[];
  officeVisitDays: string;
  officeVisitTime: string;
  email: string;
  mapQuery: string;
  lat: number;
  lng: number;
  zoom: number;
}

export const ContactUsPage: React.FC = () => {
  // Branches list matching contact us.png exactly
  const branches: BranchContactInfo[] = [
    {
      id: 'head-office-main',
      type: 'head',
      tagLabel: 'Head Office',
      title: 'Head Office [Main Campus, Dhaka]',
      addressLines: [
        'Momtaz Plaza (4th Floor)',
        'Opposite of Labaid Hospital',
        'House#7, Road#4, Dhanmondi,',
        'Dhaka 1205, Bangladesh',
      ],
      phoneNumbers: [
        '+880 1777308777',
        '+880 1624666000',
        '+880 1624888444',
        '+880 1966177177',
        '+880 1625555444',
      ],
      officeVisitDays: 'Saturday - Friday',
      officeVisitTime: '9:00 am to 8:00 pm',
      email: 'info@creativeitinstitute.com',
      mapQuery: 'Momtaz Plaza Dhanmondi Dhaka 1205 Bangladesh Creative IT Institute',
      lat: 23.7461,
      lng: 90.3802,
      zoom: 16,
    },
    {
      id: 'head-office-dhanmondi',
      type: 'head',
      tagLabel: 'Head Office',
      title: 'Head Office [Dhanmondi, Dhaka]',
      addressLines: [
        'Meher Plaza (3rd, 4th floor)',
        'House#13/A, Road#5 Dhanmondi,',
        'Dhaka - 1205, Bangladesh',
      ],
      phoneNumbers: [
        '+880 1625555444',
        '+880 1966177177',
        '+880 1990779900',
      ],
      officeVisitDays: 'Saturday - Friday',
      officeVisitTime: '9:00 am to 8:00 pm',
      email: 'info@creativeitinstitute.com',
      mapQuery: 'Meher Plaza Road 5 Dhanmondi Dhaka 1205 Bangladesh',
      lat: 23.7435,
      lng: 90.382,
      zoom: 16,
    },
    {
      id: 'branch-chattogram',
      type: 'branch',
      tagLabel: 'Branch office',
      title: 'Branch Office [Chattogram Branch]',
      addressLines: [
        '9 No, Kapasgola Road (4th Floor),',
        'Chawk Bazar, Telpotti More,',
        'Chattogram 4203, Bangladesh',
      ],
      phoneNumbers: [
        '+880 1847422965',
        '+880 1847422968',
        '+880 1847422966',
      ],
      officeVisitDays: 'Saturday - Friday',
      officeVisitTime: '9:00 am to 8:00 pm',
      email: 'ctg@creativeitinstitute.com',
      mapQuery: '9 Kapasgola Road Chawk Bazar Chattogram 4203 Bangladesh',
      lat: 22.3587,
      lng: 91.8385,
      zoom: 16,
    },
    {
      id: 'branch-uttara',
      type: 'branch',
      tagLabel: 'Branch office',
      title: 'Branch Office [Uttara Branch]',
      addressLines: [
        'RAJUK Razib Cosmo Shopping Complex',
        '7th Floor, H#71, R#5, Sector#7, Azampur Bus Stand,',
        'Uttara, Dhaka-1230',
      ],
      phoneNumbers: [
        '+880 1990779827',
        '+880 1400399399',
        '+880 1332507409',
      ],
      officeVisitDays: 'Saturday - Friday',
      officeVisitTime: '9:00 am to 8:00 pm',
      email: 'info@creativeitinstitute.com',
      mapQuery: 'Rajuk Razib Cosmo Shopping Complex Sector 7 Uttara Dhaka Bangladesh',
      lat: 23.8682,
      lng: 90.4005,
      zoom: 16,
    },
    {
      id: 'branch-mirpur',
      type: 'branch',
      tagLabel: 'Branch office',
      title: 'Branch Office [Mirpur Branch]',
      addressLines: [
        'El Mercado, Lift # 4,',
        '114 Begum Rokeya Ave, Dhaka 1216',
        '(Opposite of Metro Rail Pillar P256)',
      ],
      phoneNumbers: [
        '+88013 100 100 27',
        '+880 1924 222 999',
      ],
      officeVisitDays: 'Saturday - Friday',
      officeVisitTime: '9:00 am to 8:00 pm',
      email: 'info@creativeitinstitute.com',
      mapQuery: '114 Begum Rokeya Avenue Mirpur Dhaka 1216 Bangladesh',
      lat: 23.8055,
      lng: 90.3695,
      zoom: 16,
    },
    {
      id: 'branch-canada',
      type: 'branch',
      tagLabel: 'Branch office',
      title: 'Branch Office [Canada Branch]',
      addressLines: [
        '61 Lakewood Ave,',
        'Saint John, New Brunswick E2J 3N9,',
        'Canada',
      ],
      phoneNumbers: [
        '+1 672-377-9977',
      ],
      officeVisitDays: 'Saturday - Friday',
      officeVisitTime: '9:00 am to 8:00 pm',
      email: 'info@creativeitinstitute.com',
      mapQuery: '61 Lakewood Ave Saint John NB E2J 3N9 Canada',
      lat: 45.2733,
      lng: -66.0633,
      zoom: 15,
    },
    {
      id: 'branch-panchagarh',
      type: 'branch',
      tagLabel: 'Branch office',
      title: 'Branch Office [Panchagarh Branch]',
      addressLines: [
        'Abdul Aziz Super Market,',
        'Nurjahan Hotel (2nd Floor) Cinema Hall Road,',
        'Panchagarh Bazar, Panchagarh Sadar,',
        'Panchagarh 5000, Bangladesh',
      ],
      phoneNumbers: [
        '01704048383',
      ],
      officeVisitDays: 'Saturday - Friday',
      officeVisitTime: '9:00 am to 8:00 pm',
      email: 'info@creativeitinstitute.com',
      mapQuery: 'Cinema Hall Road Panchagarh Bazar Panchagarh Bangladesh',
      lat: 26.3354,
      lng: 88.5517,
      zoom: 16,
    },
  ];

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'Professional Graphics Design',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: 'Professional Graphics Design',
        details: '',
      });
    }, 4000);
  };

  return (
    <div className="w-full bg-white text-neutral-800">
      {/* 1. Page Header matching contact us.png */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#d92228] mb-3">
          Contact Us
        </h1>
        <p className="text-neutral-600 text-sm sm:text-base max-w-4xl leading-relaxed">
          You are welcome to visit our office for any information related to course and training.
          You can also reach us through the hotline number or messenger.
        </p>
      </section>

      {/* 2. Branches List with Live Interactive Maps matching contact us.png */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-12 sm:space-y-16">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start pb-8 border-b border-neutral-100 last:border-b-0"
          >
            {/* Map Column (with green ribbon tag) */}
            <div className="lg:col-span-5 relative w-full">
              {/* Green Folded Ribbon Tag on Top Left */}
              <div className="absolute top-2.5 -left-2 z-20 flex items-center">
                <div className="relative bg-[#16a34a] text-white text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-r-md shadow-md">
                  {branch.tagLabel}
                  {/* Ribbon left triangle fold */}
                  <div className="absolute -bottom-1.5 left-0 w-0 h-0 border-t-6 border-t-[#15803d] border-l-6 border-l-transparent"></div>
                </div>
              </div>

              {/* Map Container */}
              <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm bg-neutral-100 relative">
                <iframe
                  title={`Map of ${branch.title}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    branch.mapQuery
                  )}&t=&z=${branch.zoom}&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Direct Google Maps Link Overlay button on bottom right */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    branch.mapQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2 right-2 bg-white/95 hover:bg-white text-neutral-700 text-[10px] font-semibold px-2 py-1 rounded shadow border border-neutral-200 transition-colors flex items-center gap-1"
                >
                  <MapPin className="w-3 h-3 text-[#d92228]" />
                  <span>Open in Maps</span>
                </a>
              </div>
            </div>

            {/* Branch Details Column */}
            <div className="lg:col-span-7 space-y-4">
              {/* Branch Title in Bold Red */}
              <h2 className="text-xl sm:text-2xl font-bold text-[#d92228]">
                {branch.title}
              </h2>

              {/* Address */}
              <div className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                {branch.addressLines.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>

              {/* Two Column Grid: Phone Number vs Office Visit Time & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {/* Left: Phone Number */}
                <div className="space-y-1.5">
                  <h3 className="font-bold text-neutral-900 text-sm sm:text-base">
                    Phone Number
                  </h3>
                  <div className="space-y-1 text-xs sm:text-sm text-neutral-600">
                    {branch.phoneNumbers.map((phone, idx) => (
                      <p key={idx}>
                        <a
                          href={`tel:${phone.replace(/\s+/g, '')}`}
                          className="hover:text-[#d92228] transition-colors"
                        >
                          {phone}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Right: Office Visit Time & E-Mail */}
                <div className="space-y-4">
                  {/* Office Visit Time */}
                  <div className="space-y-1">
                    <h3 className="font-bold text-neutral-900 text-sm sm:text-base">
                      Office Visit Time
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600">
                      {branch.officeVisitDays}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600">
                      {branch.officeVisitTime}
                    </p>
                  </div>

                  {/* E-Mail */}
                  <div className="space-y-1">
                    <h3 className="font-bold text-neutral-900 text-sm sm:text-base">
                      E-Mail
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600">
                      <a
                        href={`mailto:${branch.email}`}
                        className="hover:text-[#d92228] transition-colors"
                      >
                        {branch.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Inbox your queries Form Section matching contact us.png */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 text-center mb-8">
          Inbox your queries
        </h2>

        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="text-lg font-bold text-emerald-900">
              Query Submitted Successfully!
            </h3>
            <p className="text-sm text-emerald-700 max-w-md mx-auto">
              Thank you for getting in touch. One of our course advisors will reach out to you
              shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Your name */}
            <div>
              <input
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-[#d92228] focus:ring-1 focus:ring-[#d92228] outline-none text-sm text-neutral-800 placeholder-neutral-400 bg-white transition-all"
              />
            </div>

            {/* Write Your E-mail & Write Your Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  required
                  placeholder="Write Your E-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-[#d92228] focus:ring-1 focus:ring-[#d92228] outline-none text-sm text-neutral-800 placeholder-neutral-400 bg-white transition-all"
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  placeholder="Write Your Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-[#d92228] focus:ring-1 focus:ring-[#d92228] outline-none text-sm text-neutral-800 placeholder-neutral-400 bg-white transition-all"
                />
              </div>
            </div>

            {/* Department Select Dropdown */}
            <div>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-[#d92228] focus:ring-1 focus:ring-[#d92228] outline-none text-sm text-neutral-700 bg-white transition-all cursor-pointer"
              >
                <option value="Professional Graphics Design">Professional Graphics Design</option>
                <option value="Web Development (MERN Stack)">Web Development (MERN Stack)</option>
                <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                <option value="3D Animation & VFX">3D Animation & VFX</option>
                <option value="Motion Graphics">Motion Graphics</option>
                <option value="Cyber Security & Ethical Hacking">Cyber Security & Ethical Hacking</option>
                <option value="App Development with Flutter">App Development with Flutter</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
            </div>

            {/* Write Details textarea */}
            <div>
              <textarea
                rows={5}
                placeholder="Write Details"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-[#d92228] focus:ring-1 focus:ring-[#d92228] outline-none text-sm text-neutral-800 placeholder-neutral-400 bg-white transition-all resize-y"
              />
            </div>

            {/* Red Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-[#ea3840] hover:bg-[#d92228] text-white px-8 py-2.5 rounded-md font-semibold text-sm shadow-sm transition-all cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
};
