import React from 'react';
import { EDUCATION_DATA, CERTIFICATIONS_LIST } from '../data/portfolioData';
import { GraduationCap, Award, ExternalLink, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-white relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ================= Part 1: Education ================= */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Education
            </h2>
          </div>

          <div className="bg-slate-50 rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-indigo-300 transition-colors">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white shadow-xs">
                  {EDUCATION_DATA.period}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700 border border-purple-200">
                  CGPA: {EDUCATION_DATA.score}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {EDUCATION_DATA.location}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900">
                {EDUCATION_DATA.degree}
              </h3>

              <p className="text-base font-semibold text-slate-700">
                {EDUCATION_DATA.institution}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                {EDUCATION_DATA.description}
              </p>
            </div>

            <div className="shrink-0 p-5 rounded-2xl bg-white border border-slate-200 text-center shadow-xs">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Academic Score
              </span>
              <span className="text-4xl font-extrabold text-indigo-600 tracking-tight block mt-1">
                8.83
              </span>
              <span className="text-[11px] font-semibold text-slate-500 block mt-0.5">
                Cumulative CGPA
              </span>
            </div>
          </div>
        </div>

        {/* ================= Part 2: Certifications ================= */}
        <div className="space-y-6 pt-6 border-t border-slate-200/80">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Certifications & Accreditations
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Official certifications from ServiceNow, Google, Deloitte, and professional data analytics academies. Click any certificate to view the verified credential.
            </p>
          </div>

          {/* Certifications Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS_LIST.map((cert) => {
              const isDrive = cert.driveUrl && cert.driveUrl.includes('drive.google.com');
              const linkUrl = cert.driveUrl || cert.credentialUrl;

              return (
                <div
                  key={cert.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-indigo-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Issuer & Date Badge */}
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                        {cert.issuer}
                      </span>
                      <span className="text-xs font-medium text-slate-400">
                        {cert.date}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-slate-900 text-lg leading-snug">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="pt-5 mt-4 border-t border-slate-100">
                    <a
                      href={linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-900 hover:bg-indigo-600 text-white shadow-xs hover:shadow-md transition-all cursor-pointer"
                    >
                      <span>{isDrive ? 'View Certificate (Google Drive)' : 'View Credential Record'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
