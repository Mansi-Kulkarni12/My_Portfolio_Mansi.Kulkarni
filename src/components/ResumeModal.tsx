import React from 'react';
import { motion } from 'motion/react';
import { X, Printer, Mail, Phone, MapPin, ExternalLink, Download } from 'lucide-react';
import { MANSI_PROFILE } from '../data/portfolioData';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 max-w-4xl w-full max-h-[92vh] overflow-y-auto relative shadow-2xl space-y-6 border border-slate-200"
      >
        {/* Top Action Bar */}
        <div className="sticky -top-6 -mx-6 sm:-top-10 sm:-mx-10 px-6 sm:px-10 py-3.5 bg-white/95 backdrop-blur-md border-b border-slate-200 flex items-center justify-between z-20">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Official Resume Record · Mansi Kulkarni
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-1.5 cursor-pointer transition-colors shadow-xs"
            >
              <Printer className="w-3.5 h-3.5 text-indigo-600" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="space-y-6 text-sm">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-5 space-y-1.5 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              MANSI KULKARNI
            </h1>
            <p className="text-base font-bold text-indigo-600">
              ServiceNow GRC &amp; IRM Consultant
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-slate-600 pt-1">
              <span>+91-9618001250</span>
              <span>•</span>
              <a href="mailto:mansiikulkarnii@gmail.com" className="text-indigo-600 hover:underline">
                mansiikulkarnii@gmail.com
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/mansiikulkarnii/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                LinkedIn Profile
              </a>
              <span>•</span>
              <span>Hyderabad, Telangana, India</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Technology Consultant specializing in ServiceNow Governance, Risk &amp; Compliance (GRC) and Integrated Risk Management (IRM), with hands-on delivery experience at Valerian Risk Solutions. Skilled in translating regulatory and business requirements into policies, controls, risk assessments and compliance workflows across Policy &amp; Compliance and Risk Management. ServiceNow Certified (CSA, CIS-Data Foundations) and Google Analytics certified, with strong stakeholder management, reporting, and data analytics capabilities in SQL, Power BI, and Excel.
            </p>
          </div>

          {/* Core Skills: ServiceNow GRC / IRM */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              CORE SKILLS: SERVICENOW GRC / IRM
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
              <div>
                <strong className="block text-slate-900">Policy &amp; Compliance Management:</strong>
                <span>Policy lifecycle, standards, control objectives, control library, citations, control mapping, control testing, attestations, compliance scoping &amp; reporting.</span>
              </div>
              <div>
                <strong className="block text-slate-900">Risk Management:</strong>
                <span>Risk register, risk statements, risk assessments &amp; scoring, risk response &amp; mitigation, Key Risk Indicators (KRIs), RCSA, control-to-risk mapping.</span>
              </div>
              <div>
                <strong className="block text-slate-900">Continuous Monitoring:</strong>
                <span>Indicators &amp; automated control checks, issue and remediation management, evidence collection, audit readiness, compliance dashboards.</span>
              </div>
              <div>
                <strong className="block text-slate-900">ServiceNow Platform:</strong>
                <span>Tables &amp; forms, CMDB / data foundations, Flow Designer, Notifications, ACLs &amp; roles, Reports, Performance Analytics dashboards, Update Sets, UAT support.</span>
              </div>
            </div>
            <div className="pt-1 text-xs text-slate-600">
              <strong className="text-slate-900">Secondary Skills:</strong> SQL (PostgreSQL), Power BI (DAX), Excel (Pivot Tables, XLOOKUP, Power Query), Tableau, Python (basics), requirements gathering, stakeholder management, client communication.
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              CERTIFICATIONS
            </h2>
            <ul className="text-xs text-slate-700 space-y-1.5">
              <li className="flex items-baseline justify-between gap-2">
                <span>• <strong>ServiceNow Certified System Administrator (CSA)</strong> — ServiceNow</span>
                <a href="https://drive.google.com/file/d/1ctYrKDoIZQ19p-hB00a_VRvnViy-AjvW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">[Google Drive ↗]</a>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>• <strong>ServiceNow Certified Implementation Specialist – Data Foundations (CIS-DF)</strong> — ServiceNow</span>
                <a href="https://drive.google.com/file/d/1Q2kd2RCnzVADGClcQ7xKH_2IhEEMOh6Q/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">[Google Drive ↗]</a>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>• <strong>Google Analytics Certification</strong> — Google | Issued Mar 2026</span>
                <a href="https://drive.google.com/file/d/1IegH_EEtC7s94NbX03qhsmN_eyqA9JTV/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">[Google Drive ↗]</a>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>• <strong>Deloitte Data Analytics Job Simulation</strong> — Forage | Mar 2026</span>
                <a href="https://drive.google.com/file/d/17w_ypvoCeYiEXvMnmbpkl6FGBEX9L-et/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">[Google Drive ↗]</a>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span>• <strong>Excel Data Analysis for Professionals and Analysts</strong> — Udemy | Feb 2026</span>
                <a href="https://drive.google.com/file/d/1joNn-FRxbgiJbRml3-K_jKpyF0CZDlH3/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-semibold">[Google Drive ↗]</a>
              </li>
            </ul>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              PROFESSIONAL EXPERIENCE
            </h2>

            {/* Valerian */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline text-xs">
                <span className="font-extrabold text-slate-900">
                  Technology Consultant — Valerian Risk Solutions
                </span>
                <span className="text-indigo-600 font-semibold">Jul 2026 – Present | Remote</span>
              </div>

              {/* ServiceNow */}
              <div className="pl-3 border-l-2 border-indigo-200 space-y-1 pt-1">
                <div className="text-xs font-bold text-slate-900">
                  ServiceNow GRC / IRM Implementation
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                  <li>Support configuration of ServiceNow Policy &amp; Compliance and Risk Management: policies, control objectives, controls, citations, risk statements, assessments, and indicators.</li>
                  <li>Gather and analyse business requirements with client stakeholders and translate them into GRC workflows, control test cycles, and compliance reporting dashboards.</li>
                  <li>Coordinate cross-functionally on user acceptance testing and delivery documentation for risk and compliance solutions.</li>
                </ul>
              </div>
            </div>

            {/* Deloitte */}
            <div className="space-y-1 pt-2">
              <div className="flex justify-between items-baseline text-xs">
                <span className="font-extrabold text-slate-900">
                  Data Analytics Intern — Deloitte (Virtual Programme, Forage)
                </span>
                <span className="text-slate-500 font-semibold">Mar 2026</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                <li>Analysed JSON telemetry from 4 factories and 9 machine types; defined a 10-minute "Unhealthy" downtime metric and built a Tableau dashboard identifying peak-downtime locations and device failure frequency.</li>
                <li>Classified employee equality scores (-100 to +100) into 3 categories in Excel to support pay-equity analysis.</li>
              </ul>
            </div>
          </div>

          {/* Academic Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              ACADEMIC PROJECTS
            </h2>

            <div className="space-y-2 text-xs">
              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Credit Card Portfolio &amp; Customer Performance Analytics</span>
                  <span className="text-slate-500 font-normal">PostgreSQL | SQL | Power BI | DAX</span>
                </div>
                <p className="text-slate-600 mt-0.5">Designed a PostgreSQL data model and integrated it with Power BI, delivering 2 interactive dashboards with 3+ KPIs and dynamic filters for performance monitoring and reporting.</p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Hospital Patient Visit Analytics</span>
                  <span className="text-slate-500 font-normal">SQL | Excel</span>
                </div>
                <p className="text-slate-600 mt-0.5">Analysed patient visit data to uncover actionable insights for resource planning; optimised queries to reduce errors by 20% and report generation time by 30%.</p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Online Bookstore Sales &amp; Inventory Analytics</span>
                  <span className="text-slate-500 font-normal">SQL | Excel</span>
                </div>
                <p className="text-slate-600 mt-0.5">Analysed sales patterns for inventory planning and restructured the database schema, making report generation 25% faster; delivered 15+ insights across both SQL projects.</p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>HR Workforce &amp; Attrition Analytics Dashboard</span>
                  <span className="text-slate-500 font-normal">Power BI | Excel</span>
                </div>
                <p className="text-slate-600 mt-0.5">Modelled and cleansed an HR dataset and built 1 interactive dashboard with 4 core KPIs covering workforce distribution and attrition analysis for faster reporting.</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1">
              EDUCATION
            </h2>
            <div className="flex justify-between items-baseline text-xs">
              <div>
                <strong className="text-slate-900 block">Bachelor of Technology in Computer Science and Engineering (Cyber Security)</strong>
                <span className="text-slate-600">Auroras Technological and Research Institute</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-indigo-600">CGPA: 8.83</span>
                <span className="text-slate-400 block">2022 – 2026</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
