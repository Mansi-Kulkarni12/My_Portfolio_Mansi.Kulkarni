import React, { useState } from 'react';
import { MANSI_PROFILE } from '../data/portfolioData';
import { 
  ShieldCheck, 
  Sparkles, 
  BarChart3, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  FileText, 
  ArrowRight,
  CheckCircle2,
  Award,
  Layers,
  GraduationCap,
  Building2
} from 'lucide-react';

interface HeroEditorialProps {
  onExploreClick: () => void;
  onOpenResume: () => void;
  onOpenRiskLens?: () => void;
}

export const HeroEditorial: React.FC<HeroEditorialProps> = ({
  onExploreClick,
  onOpenResume,
}) => {
  const [activeTab, setActiveTab] = useState<'compliance' | 'risk' | 'analytics'>('compliance');

  const tabContent = {
    compliance: {
      title: "Policy & Compliance Automation",
      description: "Configuring ServiceNow Policy & Compliance modules: policies, control objectives, citations, and automated indicators to streamline compliance reporting.",
      highlights: [
        "Policy Lifecycle Automation",
        "Control Objectives & Library",
        "Automated Control Indicators",
        "Compliance Reporting Dashboards"
      ],
      badge: "ServiceNow Core",
      color: "from-blue-600 to-indigo-600",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    },
    risk: {
      title: "Risk Management & Scoring",
      description: "Structuring risk registers, risk statements, and automated scoring matrices. Defining Key Risk Indicators (KRIs), risk responses, and remediation workflows.",
      highlights: [
        "Risk Register & Statements",
        "Inherent & Residual Scoring",
        "Key Risk Indicators (KRIs)",
        "Remediation Management"
      ],
      badge: "IRM Practice",
      color: "from-indigo-600 to-purple-600",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    },
    analytics: {
      title: "Data Analytics & Power BI",
      description: "Designing PostgreSQL databases, writing optimized SQL queries (30% faster reporting), and building interactive Power BI dashboards with DAX measures.",
      highlights: [
        "PostgreSQL Relational Modeling",
        "Power BI DAX Dashboards",
        "Query Speed Optimization",
        "Excel Modeling & XLOOKUP"
      ],
      badge: "Data & BI",
      color: "from-emerald-600 to-teal-600",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden gradient-mesh">
      {/* Decorative background glow orbs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-indigo-200/40 via-purple-200/30 to-pink-200/40 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Bio & Core Message */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Consulting Roles
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                Hyderabad, India
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Mansi Kulkarni</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-700">
                ServiceNow GRC &amp; IRM Consultant
              </p>
            </div>

            {/* Simple, Human Summary */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Technology Consultant at <strong className="text-slate-900 font-semibold">Valerian Risk Solutions</strong> specializing in ServiceNow Governance, Risk &amp; Compliance (GRC) and Integrated Risk Management (IRM). I help organizations automate policies, configure risk registers, and build insightful data dashboards with SQL and Power BI.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/25 hover:shadow-lg hover:shadow-indigo-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-white text-slate-800 border border-slate-300 hover:border-indigo-400 hover:bg-slate-50 shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>View Full Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-slate-100 transition-colors"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Quick Contact & Social Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3 text-xs text-slate-500 border-t border-slate-200/80">
              <a 
                href={`mailto:${MANSI_PROFILE.email}`}
                className="inline-flex items-center gap-1.5 hover:text-indigo-600 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-500" />
                <span>{MANSI_PROFILE.email}</span>
              </a>
              <span className="text-slate-300">|</span>
              <a 
                href={`tel:${MANSI_PROFILE.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-indigo-600 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>{MANSI_PROFILE.phone}</span>
              </a>
              <span className="text-slate-300">|</span>
              <a 
                href={MANSI_PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 font-semibold hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300">|</span>
              <a 
                href={MANSI_PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 font-semibold hover:text-slate-900 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Sleek Consultant Highlights & Interactive Practice Lens Card */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Top Identity Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-200/90 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-2xl -z-10 pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-indigo-600/20">
                    MK
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg leading-tight">
                      Mansi Kulkarni
                    </h3>
                    <p className="text-xs text-indigo-600 font-bold mt-0.5">
                      ServiceNow GRC &amp; IRM Consultant
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    <Award className="w-3.5 h-3.5" />
                    2x Certified
                  </span>
                </div>
              </div>

              {/* 3 Quick Pillar Badges */}
              <div className="grid grid-cols-3 gap-2.5 pt-4">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    ServiceNow
                  </span>
                  <span className="text-xs font-extrabold text-slate-900 mt-1 block">
                    CSA &amp; CIS-DF
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Education
                  </span>
                  <span className="text-xs font-extrabold text-slate-900 mt-1 block">
                    8.83 CGPA
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70 text-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Practice
                  </span>
                  <span className="text-xs font-extrabold text-slate-900 mt-1 block">
                    GRC / IRM
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Focus Switcher */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200/90 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-600" />
                  Practice Competencies
                </span>
                <span className="text-[11px] text-slate-400">Click to switch</span>
              </div>

              {/* Tab Selector Buttons */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl">
                <button
                  onClick={() => setActiveTab('compliance')}
                  className={`py-2 px-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'compliance'
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Compliance
                </button>
                <button
                  onClick={() => setActiveTab('risk')}
                  className={`py-2 px-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'risk'
                      ? 'bg-white text-purple-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Risk &amp; RCSAs
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`py-2 px-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'analytics'
                      ? 'bg-white text-emerald-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Data &amp; SQL
                </button>
              </div>

              {/* Dynamic Tab Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 transition-all duration-300">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {tabContent[activeTab].title}
                  </h4>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${tabContent[activeTab].badgeColor}`}>
                    {tabContent[activeTab].badge}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {tabContent[activeTab].description}
                </p>

                {/* Bullets */}
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-200/60">
                  {tabContent[activeTab].highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                      <CheckCircle2 className="w-3 h-3 text-indigo-500 shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
