import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { MANSI_PROFILE } from '../data/portfolioData';
import { Sticker } from './Stickers';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#382629]/70 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        className="bg-[#FFFFFF] text-[#382629] rounded-3xl p-6 sm:p-12 border-2 border-[#EFAFC2] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        {/* Top Control Bar */}
        <div className="sticky -top-6 -mx-6 sm:-top-12 sm:-mx-12 px-6 sm:px-12 py-4 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#F7CDD9] flex items-center justify-between z-20 mb-8">
          <div className="flex items-center gap-2">
            <Sticker variant="washi-pink" rotate={-1}>
              <span>OFFICIAL RESUME RECORD</span>
            </Sticker>
            <span className="text-xs font-mono-tech text-[#9E7D84] hidden sm:inline">
              Mansi Kulkarni · 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-full bg-[#FFF8F5] hover:bg-[#FCE4EC] border border-[#EFAFC2] text-xs font-mono-tech font-bold text-[#9F3D5C] flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#FCE4EC] hover:bg-[#F7CDD9] text-[#9F3D5C] cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Paper */}
        <div className="space-y-8">
          
          {/* Header */}
          <div className="border-b border-[#F7CDD9] pb-6">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#382629]">
              Mansi Kulkarni
            </h1>
            <p className="text-sm font-serif-luxury italic text-[#9F3D5C] font-semibold mt-1">
              Technology Consultant | ServiceNow GRC & IRM
            </p>

            <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono-tech text-[#6B4E54]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#9F3D5C]" />
                <span>Hyderabad, Telangana, India</span>
              </span>
              <span>•</span>
              <a href={`mailto:${MANSI_PROFILE.email}`} className="text-[#9F3D5C] hover:underline">
                {MANSI_PROFILE.email}
              </a>
              <span>•</span>
              <span>{MANSI_PROFILE.phone}</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-mono-tech font-bold text-[#9F3D5C] uppercase tracking-wider mb-3 border-b border-[#F7CDD9] pb-1">
              EDUCATION
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-mono-tech">
                  <span className="font-bold text-[#382629]">
                    Auroras Technological and Research Institute — Hyderabad
                  </span>
                  <span className="text-[#9F3D5C] font-bold">CGPA: 8.83</span>
                </div>
                <div className="text-xs text-[#6B4E54]">
                  Bachelor of Technology (B.Tech) in Computer Science & Engineering (2022 — 2026)
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono-tech">
                  <span className="font-bold text-[#382629]">
                    Sri Chaitanya Junior College — Hyderabad
                  </span>
                  <span className="text-[#9F3D5C] font-bold">CGPA: 9.83</span>
                </div>
                <div className="text-xs text-[#6B4E54]">
                  Intermediate (Class XII) — MPC (2020 — 2022)
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-mono-tech font-bold text-[#9F3D5C] uppercase tracking-wider mb-3 border-b border-[#F7CDD9] pb-1">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-mono-tech">
                  <span className="font-bold text-[#382629]">
                    Valerian Risk Solutions — Technology Consultant
                  </span>
                  <span className="text-[#9F3D5C] font-bold">Jun 2026 — Present</span>
                </div>
                <div className="text-xs font-serif-luxury italic text-[#9F3D5C] mb-2">
                  ServiceNow GRC & IRM · Hyderabad (Hybrid)
                </div>
                <ul className="list-disc list-inside text-xs text-[#5C1D2E] space-y-1">
                  <li>Support risk and compliance solution implementation for client organizations.</li>
                  <li>Categorize client data on Driskify AI, mapping columns and running AI agents for control compliance and risk insights.</li>
                  <li>Conduct policy compliance reviews and collaborate with stakeholders on business requirements.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono-tech">
                  <span className="font-bold text-[#382629]">
                    Deloitte — Data Analytics Job Simulation (Forage)
                  </span>
                  <span className="text-[#9F3D5C] font-bold">March 2026</span>
                </div>
                <ul className="list-disc list-inside text-xs text-[#5C1D2E] space-y-1 mt-2">
                  <li>Analyzed telemetry data across 4 factories and 9 machine types to diagnose downtime.</li>
                  <li>Created an interactive analytics dashboard highlighting highest-downtime locations with a 10-minute "Unhealthy" metric.</li>
                  <li>Classified employee equality scores (-100 to +100) into 3 categories using Excel for pay equity analysis.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-mono-tech font-bold text-[#9F3D5C] uppercase tracking-wider mb-3 border-b border-[#F7CDD9] pb-1">
              TECHNICAL & CONSULTING SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5C1D2E]">
              <div><strong>GRC Platforms:</strong> ServiceNow GRC, ServiceNow IRM, Driskify AI, Archer (RSA)</div>
              <div><strong>Databases & SQL:</strong> PostgreSQL, SQL Optimization, Relational Schemas</div>
              <div><strong>Analytics & BI:</strong> Power BI Desktop, DAX Measures, Microsoft Excel Modeling, Power Query</div>
              <div><strong>Core Competencies:</strong> Data Analysis, Risk Assessment, Policy Review, Metric Engineering</div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-sm font-mono-tech font-bold text-[#9F3D5C] uppercase tracking-wider mb-3 border-b border-[#F7CDD9] pb-1">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside text-xs text-[#5C1D2E] space-y-2">
              <li className="flex items-center justify-between gap-2 flex-wrap">
                <span>
                  <strong>Certified Implementation Specialist – Data Foundations (CMDB and CSDM) (CIS-DF)</strong> — ServiceNow (Aug 2026)
                </span>
                <a
                  href="https://drive.google.com/file/d/1Q2kd2RCnzVADGClcQ7xKH_2IhEEMOh6Q/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono-tech text-[#9F3D5C] hover:underline font-bold"
                >
                  [View Certificate ↗]
                </a>
              </li>
              <li className="flex items-center justify-between gap-2 flex-wrap">
                <span>
                  <strong>ServiceNow Certified System Administrator (CSA)</strong> — ServiceNow (Sep 2026)
                </span>
                <a
                  href="https://drive.google.com/file/d/1ctYrKDoIZQ19p-hB00a_VRvnViy-AjvW/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono-tech text-[#9F3D5C] hover:underline font-bold"
                >
                  [View Certificate ↗]
                </a>
              </li>
              <li className="flex items-center justify-between gap-2 flex-wrap">
                <span>
                  <strong>Deloitte Data Analytics Job Simulation</strong> — Forage (March 2026)
                </span>
                <a
                  href="https://drive.google.com/file/d/17w_ypvoCeYiEXvMnmbpkl6FGBEX9L-et/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono-tech text-[#9F3D5C] hover:underline font-bold"
                >
                  [View Certificate ↗]
                </a>
              </li>
              <li className="flex items-center justify-between gap-2 flex-wrap">
                <span>
                  <strong>Excel Data Analysis for Professionals and Analysts</strong> — Udemy (Feb 2026)
                </span>
                <a
                  href="https://drive.google.com/file/d/1joNn-FRxbgiJbRml3-K_jKpyF0CZDlH3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono-tech text-[#9F3D5C] hover:underline font-bold"
                >
                  [View Certificate ↗]
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-6 border-t border-[#F7CDD9] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#382629] hover:bg-[#5C1D2E] text-[#FFF8F5] text-xs font-mono-tech font-bold transition-colors cursor-pointer"
          >
            Close Resume Record
          </button>
        </div>
      </motion.div>
    </div>
  );
};
