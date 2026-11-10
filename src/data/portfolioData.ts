import { ExperienceChapter, ProjectItem, CertificationItem } from '../types';

export const MANSI_PROFILE = {
  name: "Mansi Kulkarni",
  role: "ServiceNow GRC & IRM Consultant",
  company: "Valerian Risk Solutions",
  location: "Hyderabad, India",
  email: "mansiikulkarnii@gmail.com",
  phone: "+91-9618001250",
  github: "https://github.com/Mansi-Kulkarni12",
  linkedin: "https://www.linkedin.com/in/mansiikulkarnii/",
  bio: "Technology Consultant specializing in ServiceNow Governance, Risk & Compliance (GRC) and Integrated Risk Management (IRM), with hands-on delivery experience at Valerian Risk Solutions. Skilled in translating business and compliance requirements into policies, controls, risk assessments, and automated workflows across Policy & Compliance and Risk Management. Certified in ServiceNow (CSA, CIS-Data Foundations) and Google Analytics, with strong data analytics capabilities in SQL, Power BI, and Excel.",
  tagline: "Helping enterprises automate risk & compliance workflows on ServiceNow and delivering data-driven business insights.",
  liveLocationTime: "Hyderabad, India (IST)",
  availability: "Available for Consulting & Analytics Roles",
  specializations: [
    "ServiceNow GRC & IRM",
    "Policy & Compliance Management",
    "Risk Registers & Assessments",
    "SQL (PostgreSQL) & Power BI",
    "Data Modeling & Reporting",
  ],
};

export const SIMPLE_PILLARS = [
  {
    id: "policy-compliance",
    title: "Policy & Compliance Management",
    tagline: "Automated Compliance & Control Workflows",
    description: "Configuring ServiceNow modules to manage policy lifecycles, control objectives, citations, and automated control checks. Making compliance monitoring seamless with real-time dashboards.",
    highlights: ["Policy Lifecycle Automation", "Control Objectives & Library", "Automated Control Indicators", "Compliance Reporting Dashboards"],
    gradient: "from-blue-600 to-indigo-600",
    iconBg: "bg-blue-100 text-blue-700",
  },
  {
    id: "risk-management",
    title: "Risk Management & Assessment",
    tagline: "Risk Registers, Scoring & RCSAs",
    description: "Structuring risk registers, risk statements, and automated scoring matrices. Defining Key Risk Indicators (KRIs), risk responses, and remediation workflows for business leadership.",
    highlights: ["Risk Register & Statements", "Inherent & Residual Scoring", "Key Risk Indicators (KRIs)", "Remediation Management"],
    gradient: "from-indigo-600 to-purple-600",
    iconBg: "bg-purple-100 text-purple-700",
  },
  {
    id: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    tagline: "SQL Modeling & Interactive Dashboards",
    description: "Designing PostgreSQL databases and building interactive Power BI dashboards that turn raw numbers into clear, actionable business insights for stakeholders.",
    highlights: ["PostgreSQL & SQL Queries", "Power BI DAX Dashboards", "Excel Modeling & XLOOKUP", "Query Speed Optimization"],
    gradient: "from-emerald-600 to-teal-600",
    iconBg: "bg-emerald-100 text-emerald-700",
  },
];

export const EXPERIENCE_ITEMS: ExperienceChapter[] = [
  {
    id: "valerian",
    chapterNumber: "01",
    role: "Technology Consultant — ServiceNow GRC & IRM",
    company: "Valerian Risk Solutions",
    location: "Remote / Hyderabad",
    period: "Jul 2026 — Present",
    tagline: "Enterprise ServiceNow GRC/IRM implementation, policy lifecycle automation, and risk assessment workflows.",
    description: [
      "ServiceNow GRC/IRM Configuration: Support configuration of ServiceNow Policy & Compliance and Risk Management modules: policies, control objectives, controls, citations, risk statements, assessments, and indicators.",
      "Requirements & Workflows: Gather and analyze business requirements with client stakeholders and translate them into automated GRC workflows, control test cycles, and compliance reporting dashboards.",
      "Risk Registers & Scoring: Configure enterprise risk registers, risk statements, and automated risk scoring matrices to track operational and technology risks.",
      "Client Collaboration & UAT: Coordinate cross-functionally on user acceptance testing (UAT) and delivery documentation for risk and compliance solutions."
    ],
    skillsUsed: [
      "ServiceNow GRC/IRM",
      "Policy & Compliance",
      "Risk Management",
      "Control Objectives",
      "CMDB Data Foundations",
      "Executive Dashboards",
      "Client Communication",
      "UAT Testing"
    ],
    deliverables: [
      {
        title: "ServiceNow Policy & Compliance",
        impact: "Configured automated control objectives, test cycles, and compliance dashboards."
      },
      {
        title: "Risk Assessment Workflows",
        impact: "Implemented structured risk registers, risk statements, and scoring matrices."
      },
      {
        title: "Client Delivery & UAT",
        impact: "Guided requirements gathering and UAT testing with client stakeholders."
      }
    ],
    accentColor: "#4F46E5",
  },
  {
    id: "deloitte",
    chapterNumber: "02",
    role: "Data Analytics Intern",
    company: "Deloitte (Virtual Programme, Forage)",
    location: "Virtual Internship",
    period: "Mar 2026",
    tagline: "Machine telemetry analysis, failure frequency modeling, and employee pay-equity categorization.",
    description: [
      "Factory Telemetry Analysis: Analyzed machine telemetry data from 4 factories and 9 machine types to uncover recurring equipment issues.",
      "Downtime Metric & Dashboard: Created a 10-minute 'Unhealthy' downtime rule and built a Tableau dashboard highlighting peak downtime locations and machine failure frequency.",
      "Pay-Equity Analysis: Grouped employee equality scores (-100 to +100) into 3 clear categories in Excel to support corporate fair pay analysis."
    ],
    skillsUsed: [
      "Tableau",
      "Telemetry Analysis",
      "Microsoft Excel",
      "Downtime Modeling",
      "Data Categorization"
    ],
    deliverables: [
      {
        title: "Factory Telemetry Dashboard",
        impact: "Visualized failure patterns across 9 machine types using a 10-min threshold rule."
      },
      {
        title: "Pay-Equity Classification",
        impact: "Grouped equality scores into 3 actionable tiers for compensation reviews."
      }
    ],
    accentColor: "#0D9488",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "credit-card-analytics",
    title: "Credit Card Performance & Customer Analytics",
    category: "data",
    type: "PostgreSQL Database & Power BI Dashboard",
    description: "Designed a clean PostgreSQL database model and connected it to Power BI, creating 2 interactive dashboards with 3+ core KPIs and dynamic filters for weekly revenue and customer credit monitoring.",
    highlights: [
      "Created an organized PostgreSQL relational database for customer and transaction data.",
      "Built 2 interactive Power BI dashboards tracking revenue, credit usage, and customer segments.",
      "Wrote custom DAX measures for week-over-week growth calculations and credit risk tracking."
    ],
    tools: ["PostgreSQL", "SQL", "Power BI", "DAX", "Data Modeling"],
    isFeatured: true,
    githubUrl: "https://github.com/Mansi-Kulkarni12/CreditCard_Analysis_Report",
    metrics: [
      { label: "Database", value: "PostgreSQL" },
      { label: "Dashboards", value: "2 Built" },
      { label: "Core KPIs", value: "3+ Tracked" }
    ],
  },
  {
    id: "hospital-visit-analytics",
    title: "Hospital Patient Visit Analytics",
    category: "sql",
    type: "Healthcare Data Analysis & Query Optimization",
    description: "Analyzed patient visit records to find actionable insights for hospital resource planning. Optimized SQL queries to reduce errors by 20% and speed up reporting by 30%.",
    highlights: [
      "Analyzed patient admissions and department visit patterns to help plan hospital staffing.",
      "Optimized complex SQL queries, cutting execution errors by 20%.",
      "Sped up regular management report generation time by 30% through query refactoring."
    ],
    tools: ["SQL", "Excel", "Query Optimization", "Healthcare Analytics"],
    isFeatured: true,
    githubUrl: "https://github.com/Mansi-Kulkarni12/SQL_Projects",
    metrics: [
      { label: "Error Reduction", value: "20% Down" },
      { label: "Report Speed", value: "30% Faster" },
      { label: "Focus", value: "Hospital Planning" }
    ],
  },
  {
    id: "bookstore-sales-analytics",
    title: "Online Bookstore Sales & Inventory Analytics",
    category: "sql",
    type: "Database Schema Restructuring & Inventory Planning",
    description: "Analyzed book sales trends to help with inventory planning and restructured the database schema, making reports 25% faster and delivering 15+ actionable commercial insights.",
    highlights: [
      "Analyzed customer buying habits to determine optimal book restocking levels.",
      "Restructured the database schema to make report generation 25% faster.",
      "Delivered 15+ actionable insights on bestselling categories and customer order trends."
    ],
    tools: ["SQL", "Excel", "Schema Restructuring", "Inventory Analytics"],
    isFeatured: true,
    githubUrl: "https://github.com/Mansi-Kulkarni12/SQL_Projects",
    metrics: [
      { label: "Report Generation", value: "25% Faster" },
      { label: "Actionable Insights", value: "15+ Delivered" },
      { label: "Focus", value: "Inventory Trends" }
    ],
  },
  {
    id: "hr-analytics-dashboard",
    title: "HR Workforce & Attrition Dashboard",
    category: "data",
    type: "Workforce Data Modeling & Interactive Dashboard",
    description: "Cleaned and structured an HR dataset to build 1 comprehensive interactive dashboard tracking 4 core KPIs on employee distribution and attrition factors.",
    highlights: [
      "Cleaned and validated an HR dataset to ensure 100% data integrity.",
      "Visualized employee headcount, department breakdown, and attrition trends.",
      "Built 1 comprehensive interactive dashboard with 4 core KPIs and dynamic department filters."
    ],
    tools: ["Power BI", "Excel", "DAX", "Data Cleansing"],
    isFeatured: true,
    githubUrl: "https://github.com/Mansi-Kulkarni12/HR-Analytics-Dashboard",
    metrics: [
      { label: "Interactive Dashboard", value: "1 Built" },
      { label: "Core KPIs", value: "4 Monitored" },
      { label: "Data Quality", value: "100% Cleansed" }
    ],
  },
  {
    id: "cafe-mico",
    title: "Café Mico — Artisanal Coffeehouse Website",
    category: "web",
    type: "Live Website & Production Deployment",
    description: "A clean, responsive website crafted for a specialty artisanal coffeehouse with smooth navigation, menu showcase, and fast mobile performance.",
    highlights: [
      "Designed and deployed a responsive web experience for a specialty coffeehouse.",
      "Engineered clean layouts, modern typography, and smooth navigation.",
      "Live and accessible on production hosting."
    ],
    tools: ["React", "Tailwind CSS", "Netlify Deployment", "Responsive Design"],
    liveUrl: "https://cafemico.netlify.app/",
    isFeatured: true,
  },
  {
    id: "coffee-crisps",
    title: "Coffee & Crisps Cafe — Storefront Website",
    category: "web",
    type: "Live Website & Menu Showcase",
    description: "A welcoming customer website showcasing handcrafted coffee selections, snacks menu, and clear cafe information.",
    highlights: [
      "Created an attractive web storefront emphasizing clear menu presentation.",
      "Optimized for smooth browsing on smartphones, tablets, and desktops.",
      "Deployed and verified live on Netlify."
    ],
    tools: ["HTML5", "Modern CSS", "JavaScript", "Netlify Deployment"],
    liveUrl: "https://coffeeandcrispscafe.netlify.app/",
    isFeatured: true,
  },
];

export const SKILL_GROUPS = [
  {
    title: "ServiceNow Platform",
    color: "from-blue-600 to-indigo-600",
    bgBadge: "bg-blue-50 text-blue-700 border-blue-200",
    skills: [
      "ServiceNow GRC / IRM",
      "Policy & Compliance Management",
      "Risk Management & Scoring",
      "CMDB & Data Foundations (CIS-DF)",
      "Flow Designer & Automated Alerts",
      "Reports & Executive Dashboards",
      "User Acceptance Testing (UAT)",
    ],
  },
  {
    title: "Data Analytics & SQL",
    color: "from-emerald-600 to-teal-600",
    bgBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    skills: [
      "SQL (PostgreSQL)",
      "Query Optimization & Indexing",
      "Database Schema Restructuring",
      "Relational Data Modeling",
      "Tableau Telemetry Dashboards",
      "Python (Basics)",
    ],
  },
  {
    title: "Business Intelligence & BI Tools",
    color: "from-purple-600 to-pink-600",
    bgBadge: "bg-purple-50 text-purple-700 border-purple-200",
    skills: [
      "Power BI Desktop",
      "DAX Formulas & Measures",
      "Microsoft Excel (Pivot Tables, XLOOKUP)",
      "Power Query Data Modeling",
      "Interactive KPI Dashboards",
      "Google Analytics Certified",
    ],
  },
  {
    title: "Consulting & Delivery",
    color: "from-amber-600 to-orange-600",
    bgBadge: "bg-amber-50 text-amber-700 border-amber-200",
    skills: [
      "Business Requirements Gathering",
      "Client Stakeholder Communication",
      "Workflow Process Mapping",
      "Cross-Functional Coordination",
      "Delivery Documentation",
      "Presentation of Insights",
    ],
  },
];

export const EDUCATION_DATA = {
  degree: "Bachelor of Technology in Computer Science and Engineering (Cyber Security)",
  institution: "Auroras Technological and Research Institute",
  period: "2022 — 2026",
  score: "8.83 CGPA",
  location: "Hyderabad, India",
  description: "Comprehensive coursework covering Cyber Security, Relational Database Management Systems (SQL), Operating Systems, Computer Networks, and Software Engineering.",
};

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    id: "servicenow-csa",
    title: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    date: "September 2026",
    status: "Completed",
    description: "Official ServiceNow certification validating expertise in core platform configuration, user administration, table schemas, Flow Designer, and instance management.",
    credentialUrl: "https://nowlearning.servicenow.com/",
    driveUrl: "https://drive.google.com/file/d/1ctYrKDoIZQ19p-hB00a_VRvnViy-AjvW/view?usp=sharing",
    verificationCode: "CSA-Certified",
  },
  {
    id: "servicenow-cis-df",
    title: "ServiceNow Certified Implementation Specialist – Data Foundations (CIS-DF)",
    issuer: "ServiceNow",
    date: "August 2026",
    status: "Completed",
    description: "Official ServiceNow specialist certification in Data Foundations (CMDB and Common Service Data Model - CSDM), ensuring accurate configuration management architecture.",
    credentialUrl: "https://nowlearning.servicenow.com/",
    driveUrl: "https://drive.google.com/file/d/1Q2kd2RCnzVADGClcQ7xKH_2IhEEMOh6Q/view?usp=sharing",
    verificationCode: "CIS-DF (CMDB & CSDM)",
  },
  {
    id: "google-analytics",
    title: "Google Analytics Certification",
    issuer: "Google",
    date: "March 2026",
    status: "Completed",
    description: "Official Google certification in digital measurement, data collection, telemetry analysis, and user behavior reporting.",
    credentialUrl: "https://skillshop.credential.net/",
    driveUrl: "https://drive.google.com/file/d/1IegH_EEtC7s94NbX03qhsmN_eyqA9JTV/view?usp=sharing",
    verificationCode: "Google-Certified",
  },
  {
    id: "deloitte-da",
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    date: "March 2026",
    status: "Completed",
    description: "Hands-on simulation analyzing factory telemetry data in Tableau, modeling a 10-minute downtime rule, and categorizing employee equality scores in Excel.",
    credentialUrl: "https://www.theforage.com/simulations/deloitte-au/data-analytics-1",
    driveUrl: "https://drive.google.com/file/d/17w_ypvoCeYiEXvMnmbpkl6FGBEX9L-et/view?usp=sharing",
    verificationCode: "Enrolment: zQdBuGeDQXLTbTy2H",
  },
  {
    id: "udemy-excel",
    title: "Excel Data Analysis for Professionals and Analysts",
    issuer: "Udemy",
    date: "February 2026",
    status: "Completed",
    description: "Comprehensive training in Excel data modeling, dynamic XLOOKUP, advanced Pivot Tables, and business data analysis.",
    credentialUrl: "https://ude.my/UC-90f5e518-042e-4617-99f8-a1f0ffa6cada",
    driveUrl: "https://drive.google.com/file/d/1joNn-FRxbgiJbRml3-K_jKpyF0CZDlH3/view?usp=sharing",
    verificationCode: "UC-90f5e518-042e-4617-99f8-a1f0ffa6cada",
  },
];
