import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, ExternalLink, Sparkles, CheckCircle2, Star } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Sticker, PinkFlower, PinkHeart, PinkStar } from './Stickers';

export const EducationCertifications: React.FC = () => {
  const educationList = [
    {
      degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
      institution: 'Auroras Technological and Research Institute',
      period: '2022 — 2026',
      score: '8.83 CGPA',
      location: 'Hyderabad, India',
      highlights: 'Core Computer Science, Database Management Systems, Data Structures, Software Engineering.',
    },
    {
      degree: 'Intermediate (Class XII) — MPC (Maths, Physics, Chemistry)',
      institution: 'Sri Chaitanya Junior College',
      period: '2020 — 2022',
      score: '9.83 CGPA',
      location: 'Hyderabad, India',
      highlights: 'Advanced Mathematics, Analytical Reasoning, Computational Foundations.',
    },
  ];

  return (
    <section id="education" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-[#F7CDD9]">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Sticker variant="washi-rose" rotate={-2}>
              <span>✦ CHAPTER 05 // ACADEMICS & CREDENTIALS</span>
            </Sticker>
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-[#382629] tracking-tight">
            Education & <span className="font-serif-luxury italic font-light text-[#C85B7B]">Certifications</span>
          </h2>
        </div>
        <Sticker variant="stamp">HYD · ACADEMICS</Sticker>
      </div>

      {/* Stacked Layout: Education First, then Certifications */}
      <div className="space-y-16">
        
        {/* Block 1: Academic Foundation (2 items side-by-side in balanced grid) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono-tech font-bold text-[#9F3D5C] uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-[#9F3D5C]" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <span className="text-[11px] font-mono-tech text-[#9E7D84]">
              2 DEGREES RECORDED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border-2 border-[#F7CDD9] shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tech font-bold text-[#9F3D5C]">
                      {edu.period}
                    </span>
                    <Sticker variant="pink-badge">
                      <span>{edu.score}</span>
                    </Sticker>
                  </div>

                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#382629]">
                      {edu.degree}
                    </h3>
                    <p className="font-serif-luxury italic text-xs sm:text-sm text-[#9F3D5C] mt-1">
                      {edu.institution} · {edu.location}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#5C1D2E] leading-relaxed pt-2 border-t border-[#F7CDD9]/60">
                  {edu.highlights}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Block 2: Verified Certifications & Seals (4 items in balanced 2x2 grid) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono-tech font-bold text-[#9F3D5C] uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#9F3D5C]" />
              <span>VERIFIED CERTIFICATIONS & SEALS</span>
            </div>
            <span className="text-[11px] font-mono-tech text-[#9E7D84]">
              4 CREDENTIALS VERIFIED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert) => {
              const isCompleted = cert.status === 'Completed';
              const targetUrl = cert.driveUrl || cert.credentialUrl;

              return (
                <div
                  key={cert.id}
                  className="p-6 sm:p-7 rounded-3xl bg-[#FFFFFF] border-2 border-[#F7CDD9] hover:border-[#E38FA9] shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-xs font-mono-tech text-[#9E7D84] block">
                          {cert.issuer} · {cert.date}
                        </span>
                        <h4 className="font-display text-lg sm:text-xl font-bold text-[#382629] mt-1 leading-snug">
                          {cert.title}
                        </h4>
                      </div>

                      {/* Embossed Circular Seal Badge */}
                      <div className="shrink-0 flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#FFF8F5] to-[#FCE4EC] border-2 border-[#EFAFC2] text-center shadow-xs">
                        <Star className="w-3.5 h-3.5 text-[#9F3D5C]" />
                        <span className="text-[8px] font-mono-tech font-bold text-[#9F3D5C] uppercase mt-0.5">
                          {isCompleted ? 'VERIFIED' : 'IN PROGRESS'}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5C1D2E] leading-relaxed">
                      {cert.description}
                    </p>

                    {cert.verificationCode && (
                      <div className="pt-1">
                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono-tech bg-[#FFF8F5] text-[#9F3D5C] border border-[#F7CDD9] font-medium">
                          ✦ {cert.verificationCode}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-[#F7CDD9]/70 flex items-center justify-between gap-2">
                    {targetUrl ? (
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF8F5] hover:bg-[#FCE4EC] border border-[#EFAFC2] text-xs font-mono-tech text-[#9F3D5C] hover:text-[#5C1D2E] font-bold shadow-2xs transition-all hover:scale-102 cursor-pointer"
                      >
                        <span>View Verified Certificate</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono-tech text-[#9E7D84]">
                        Certificate on File
                      </span>
                    )}

                    <span className="text-[10px] font-mono-tech text-[#9E7D84] uppercase font-semibold">
                      VERIFIED ATTESTATION
                    </span>
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
