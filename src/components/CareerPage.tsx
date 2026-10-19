import React, { useState, useMemo } from 'react';
import {
  Phone,
  Mail,
  Search,
  ArrowRight,
  MapPin,
  Crosshair,
  ChevronDown,
  RotateCcw
} from 'lucide-react';
import { JOB_POSITIONS, JobPosition } from '../data/careerData';
import { CareerJobDetailsModal } from './CareerJobDetailsModal';

interface CareerPageProps {
  onJoinSeminar?: () => void;
  onBrowseCourse?: () => void;
}

export const CareerPage: React.FC<CareerPageProps> = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [employeeType, setEmployeeType] = useState('all');
  const [jobType, setJobType] = useState('all');
  const [locationQuery, setLocationQuery] = useState('');
  const [appliedFilters, setAppliedFilters] = useState({
    title: '',
    employeeType: 'all',
    jobType: 'all',
    location: ''
  });

  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Apply search button click
  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setAppliedFilters({
      title: searchTitle.trim().toLowerCase(),
      employeeType,
      jobType,
      location: locationQuery.trim().toLowerCase()
    });
  };

  const handleResetFilters = () => {
    setSearchTitle('');
    setEmployeeType('all');
    setJobType('all');
    setLocationQuery('');
    setAppliedFilters({
      title: '',
      employeeType: 'all',
      jobType: 'all',
      location: ''
    });
  };

  // Filtered jobs list
  const filteredJobs = useMemo(() => {
    return JOB_POSITIONS.filter((job) => {
      // Title filter
      if (appliedFilters.title) {
        const matchesTitle =
          job.title.toLowerCase().includes(appliedFilters.title) ||
          job.department.toLowerCase().includes(appliedFilters.title) ||
          job.roleDetails.toLowerCase().includes(appliedFilters.title);
        if (!matchesTitle) return false;
      }
      // Employee Type filter
      if (appliedFilters.employeeType !== 'all') {
        if (job.employmentType.toLowerCase() !== appliedFilters.employeeType.toLowerCase()) {
          return false;
        }
      }
      // Job Type filter
      if (appliedFilters.jobType !== 'all') {
        if (job.jobType.toLowerCase() !== appliedFilters.jobType.toLowerCase()) {
          return false;
        }
      }
      // Location filter
      if (appliedFilters.location) {
        const matchesLoc =
          job.area.toLowerCase().includes(appliedFilters.location) ||
          job.city.toLowerCase().includes(appliedFilters.location);
        if (!matchesLoc) return false;
      }
      return true;
    });
  }, [appliedFilters]);

  const handleOpenJobDetails = (job: JobPosition) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full bg-white text-neutral-800 min-h-screen">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        
        {/* Hero Section: Join, Learn, Grow */}
        <section id="career-hero" className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-heading mb-4">
            Join, Learn, Grow
          </h1>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-10">
            Join a culture where innovation meets purpose. We empower individuals to take ownership, think
            boldly, and contribute to something bigger than themselves.
          </p>

          {/* Hero Office Image with Red/Coral Glowing Border Frame matching screenshot */}
          <div className="relative mx-auto max-w-4xl rounded-2xl sm:rounded-3xl border-2 border-[#ea3840] shadow-xl overflow-hidden p-1 bg-white">
            <div className="w-full h-64 sm:h-96 md:h-[420px] rounded-xl sm:rounded-2xl overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                alt="Creative IT Institute Workspace & Team Culture"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-left text-white drop-shadow-md">
                <span className="text-xs sm:text-sm font-bold bg-[#ea3840]/90 px-3 py-1 rounded-full uppercase tracking-wider">
                  Creative IT Campus Life
                </span>
                <p className="text-xs sm:text-sm text-neutral-100 font-medium mt-1">
                  Empowering 100,000+ students through dedicated mentors & innovators
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Explore Open Positions */}
        <section id="open-positions" className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 font-heading mb-3">
              Explore Open Positions
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
              Your next big opportunity starts here. Explore open roles across our teams and find where your ideas,
              creativity, and ambition can make a real impact.
            </p>
          </div>

          {/* Filter Job Container matching the screenshot */}
          <div className="bg-[#edf2f7] rounded-2xl p-4 sm:p-6 mb-8 sm:mb-10 border border-neutral-200/70 shadow-xs">
            <form onSubmit={handleSearch} className="flex flex-col lg:flex-row items-center gap-3 sm:gap-4">
              {/* Label */}
              <div className="w-full lg:w-auto flex-shrink-0 text-left">
                <span className="text-neutral-900 font-bold text-sm sm:text-base whitespace-nowrap">
                  Filter Job
                </span>
              </div>

              {/* Grid of Inputs */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 flex-1">
                {/* Job Title Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Job Title"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                    className="w-full bg-[#f8fafc] border border-neutral-200/90 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:bg-white focus:border-[#ea3840] focus:ring-1 focus:ring-[#ea3840] outline-hidden transition-colors"
                  />
                </div>

                {/* Select Employee Type */}
                <div className="relative">
                  <select
                    value={employeeType}
                    onChange={(e) => setEmployeeType(e.target.value)}
                    className="w-full appearance-none bg-[#f8fafc] border border-neutral-200/90 rounded-lg px-3.5 py-2 pr-8 text-xs sm:text-sm text-neutral-700 focus:bg-white focus:border-[#ea3840] focus:ring-1 focus:ring-[#ea3840] outline-hidden transition-colors cursor-pointer"
                  >
                    <option value="all">Select Employee Type</option>
                    <option value="On-Site">On-Site</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Select Job Type */}
                <div className="relative">
                  <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="w-full appearance-none bg-[#f8fafc] border border-neutral-200/90 rounded-lg px-3.5 py-2 pr-8 text-xs sm:text-sm text-neutral-700 focus:bg-white focus:border-[#ea3840] focus:ring-1 focus:ring-[#ea3840] outline-hidden transition-colors cursor-pointer"
                  >
                    <option value="all">Select Job Type</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Location */}
                <div>
                  <input
                    type="text"
                    placeholder="Location"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    className="w-full bg-[#f8fafc] border border-neutral-200/90 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 focus:bg-white focus:border-[#ea3840] focus:ring-1 focus:ring-[#ea3840] outline-hidden transition-colors"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="w-full lg:w-auto flex items-center justify-end gap-2">
                {(appliedFilters.title || appliedFilters.employeeType !== 'all' || appliedFilters.jobType !== 'all' || appliedFilters.location) && (
                  <button
                    type="button"
                    onClick={handleResetFilters}
                    className="p-2 rounded-lg bg-neutral-200 hover:bg-neutral-300 text-neutral-700 text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
                    title="Reset filters"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Reset</span>
                  </button>
                )}
                <button
                  type="submit"
                  className="w-full lg:w-auto bg-[#ea3840] hover:bg-[#d42d35] text-white px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 shadow-sm shadow-red-500/20 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Search</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

          {/* Jobs Grid matching the screenshot */}
          {filteredJobs.length === 0 ? (
            <div className="bg-neutral-50 rounded-2xl p-12 text-center border border-neutral-200 max-w-lg mx-auto">
              <Search className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-neutral-800 mb-1">No Openings Found</h3>
              <p className="text-neutral-500 text-xs mb-4">
                We couldn't find any positions matching your search filters. Try adjusting your search or reset the filters.
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-[#ea3840] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#d42d35] transition-colors cursor-pointer"
              >
                Show All Openings
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  id={`job-card-${job.id}`}
                  className="bg-white rounded-2xl border border-neutral-200 p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-neutral-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Job Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-heading mb-3">
                      {job.title}
                    </h3>
                    
                    {/* Subtle divider */}
                    <div className="border-b border-neutral-100 mb-4" />

                    {/* Metadata details matching screenshot */}
                    <div className="space-y-1.5 text-xs text-neutral-600 mb-3">
                      <p>
                        <span className="font-semibold text-neutral-800">Department:</span> {job.department}
                      </p>
                      <p>
                        <span className="font-semibold text-neutral-800">Employment Type:</span> {job.employmentType}
                      </p>
                      <p>
                        <span className="font-semibold text-neutral-800">Job Type:</span> {job.jobType}
                      </p>
                    </div>

                    {/* Role Details */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-neutral-800 mb-1">Role Details:</h4>
                      <p className="text-xs text-neutral-600 leading-relaxed line-clamp-4">
                        {job.roleDetails}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Bar matching screenshot */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-2">
                    {/* Location Badges */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{job.area}</span>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Crosshair className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{job.city}</span>
                      </span>
                    </div>

                    {/* View Details Button */}
                    <button
                      onClick={() => handleOpenJobDetails(job)}
                      className="bg-[#ea3840] hover:bg-[#d42d35] text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-2xs"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>

      {/* Career Job Details & Application Modal */}
      <CareerJobDetailsModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
