import React, { useState } from 'react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2, ChevronRight } from 'lucide-react';

export const ExperienceChapters: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<string>('valerian');

  const current = EXPERIENCE_ITEMS.find((item) => item.id === selectedExp) || EXPERIENCE_ITEMS[0];

  return (
    <section id="experience" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
            <span>Work Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Consulting & Analytics Experience
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Hands-on enterprise delivery spanning ServiceNow GRC/IRM workflow configuration, policy lifecycle automation, and industrial data analytics at Deloitte.
          </p>
        </div>

        {/* Experience Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Organization Selector Cards */}
          <div className="lg:col-span-5 space-y-4">
            {EXPERIENCE_ITEMS.map((item) => {
              const isActive = item.id === selectedExp;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedExp(item.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-indigo-500 shadow-lg ring-2 ring-indigo-500/20'
                      : 'bg-white/60 hover:bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-xs ${
                        item.id === 'valerian' ? 'bg-indigo-600' : 'bg-emerald-600'
                      }`}>
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-slate-900 text-base">
                          {item.company}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">
                          {item.role}
                        </p>
                      </div>
                    </div>
                    
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                      isActive ? 'bg-indigo-50 text-indigo-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                    {item.tagline}
                  </p>

                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-xs">
                    <span className="text-slate-400 font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                    <span className={`font-bold flex items-center gap-0.5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Experience Breakdown */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-xl space-y-6">
            
            {/* Header of Active Role */}
            <div className="border-b border-slate-100 pb-5 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Featured Role Breakdown
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  <Calendar className="w-3 h-3" />
                  {current.period}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900">
                {current.role}
              </h3>
              <p className="text-sm font-semibold text-slate-600">
                {current.company} · <span className="text-slate-500 font-normal">{current.location}</span>
              </p>
            </div>

            {/* What Mansi Did (Bullet points in simple, clear language) */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Key Responsibilities & Deliverables
              </h4>
              <div className="space-y-3">
                {current.description.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Highlights */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Key Outcomes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                    <p className="font-bold text-xs text-slate-900">{deliv.title}</p>
                    <p className="text-xs text-slate-600 leading-normal">{deliv.impact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Tools Used */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Tools & Technologies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {current.skillsUsed.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
