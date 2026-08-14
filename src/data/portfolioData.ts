import { ExperienceChapter, ProjectItem, SkillCategory, CertificationItem, RiskScenario } from '../types';

export const MANSI_PROFILE = {
  name: "Mansi Kulkarni",
  role: "Technology Consultant | ServiceNow GRC & IRM",
  company: "Valerian Risk Solutions",
  location: "Hyderabad, Telangana, India",
  email: "mansiikulkarnii@gmail.com",
  phone: "+91-9618001250",
  github: "https://github.com/Mansi-Kulkarni12",
  linkedin: "https://www.linkedin.com/in/mansiikulkarnii/",
  bio: "Technology Consultant specializing in ServiceNow GRC & IRM at Valerian Risk Solutions. Experienced in governance, risk, and compliance operations — including risk and control assessment support, policy compliance review, and hands-on exposure to the Driskify AI platform for data mapping, control mapping, and compliance validation.",
  tagline: "Bridging Enterprise Governance, Autonomous AI Risk Mapping, and Modern Data Intelligence.",
  liveLocationTime: "Hyderabad (UTC+5:30)",
  availability: "Active in Consulting & GRC Strategy",
};

export const DOMAIN_PILLARS = [
  {
    id: "grc",
    word: "GRC",
    title: "Governance, Risk & Compliance",
    short: "Enterprise Risk Architecture",
    description: "Designing structured frameworks to identify, assess, and mitigate enterprise technology vulnerabilities, ensuring adherence to SOC, ISO, and NIST standards.",
    metrics: "Policy Reviews & Control Assessments",
    tag: "Core Focus",
  },
  {
    id: "servicenow",
    word: "SERVICENOW",
    title: "ServiceNow IRM & GRC",
    short: "Integrated Risk Management",
    description: "Configuring ServiceNow modules to automate policy compliance, streamline audit lifecycles, and unify vendor risk across distributed enterprise infrastructures.",
    metrics: "CSA & CIS Specialization",
    tag: "Platform Expert",
  },
  {
    id: "driskify",
    word: "DRISKIFY AI",
    title: "Autonomous Compliance & Mapping",
    short: "AI-Powered Risk Agents",
    description: "Ingesting complex client datasets, executing automated schema mapping, and running targeted AI agents to validate control compliance and surface predictive risk insights.",
    metrics: "Autonomous Control Validation",
    tag: "Applied AI",
  },
  {
    id: "data",
    word: "DATA & SQL",
    title: "Data Analytics & Engineering",
    short: "PostgreSQL & Power BI DAX",
    description: "Transforming raw business telemetry and transaction logs into high-impact interactive intelligence dashboards with sub-second query performance and custom DAX measures.",
    metrics: "25% Faster Report Generation",
    tag: "Analytics",
  },
  {
    id: "consulting",
    word: "CONSULTING",
    title: "Strategic Advisory & Stakeholders",
    short: "Client Requirements & Reporting",
    description: "Translating executive risk appetites into operational technical requirements, facilitating cross-functional coordination, and delivering actionable compliance presentations.",
    metrics: "Multi-stakeholder Leadership",
    tag: "Business Impact",
  },
];

export const EXPERIENCE_CHAPTERS: ExperienceChapter[] = [
  {
    id: "valerian",
    chapterNumber: "01",
    role: "Technology Consultant — ServiceNow GRC & IRM",
    company: "Valerian Risk Solutions",
    location: "Remote / Hyderabad",
    period: "Jul 2026 — Present",
    tagline: "Architecting enterprise GRC solutions and orchestrating Driskify AI agents for automated risk governance.",
    description: [
      "Support risk and compliance solution implementation for client organizations, collaborating directly with executive stakeholders to translate regulatory demands into automated workflows.",
      "Categorize client enterprise data on the Driskify AI platform, orchestrating column mapping and deploying specialized AI agents to evaluate control compliance.",
      "Synthesize real-time compliance findings into actionable risk insights, enabling proactive mitigation before external audits.",
      "Bridge technical ServiceNow IRM configurations with executive business requirements, establishing robust audit trails and automated evidence collection."
    ],
    skillsUsed: ["ServiceNow GRC", "ServiceNow IRM", "Driskify AI", "Risk Assessment", "Control Mapping", "Policy Review", "Stakeholder Management"],
    deliverables: [
      {
        title: "Driskify AI Data Mapping Pipeline",
        impact: "Automated schema categorization and AI agent assessment across multi-tiered client datasets."
      },
      {
        title: "Enterprise Compliance Architecture",
        impact: "Accelerated compliance verification cycles with structured control mapping."
      },
      {
        title: "Stakeholder Advisory",
        impact: "Delivered executive compliance scorecards and risk remediation roadmaps."
      }
    ],
    accentColor: "#BE2952",
  },
  {
    id: "deloitte",
    chapterNumber: "02",
    role: "Data Analytics Simulation Consultant",
    company: "Deloitte (Forage Virtual Internship)",
    location: "Virtual",
    period: "March 2026",
    tagline: "Industrial telemetry analytics, failure frequency modeling, and enterprise pay equity classification.",
    description: [
      "Evaluated May 2021 JSON telemetry data sourced from 4 manufacturing factories and 9 machine types to diagnose systemic operational bottlenecks.",
      "Engineered an authoritative 10-minute 'Unhealthy' downtime threshold metric and built an interactive Tableau dashboard to pinpoint highest downtime facilities and device failure frequencies.",
      "Classified employee equality scores across a range of (-100 to +100) into 3 strategic analytical tiers using Microsoft Excel to power organization-wide pay equity and diversity initiatives."
    ],
    skillsUsed: ["Tableau", "JSON Telemetry Analysis", "Downtime Modeling", "Microsoft Excel", "Pay Equity Analysis", "Data Modeling"],
    deliverables: [
      {
        title: "Factory Telemetry Failure Dashboard",
        impact: "Identified high-risk failure patterns across 9 machine types with 10-min downtime KPI."
      },
      {
        title: "Workforce Equity Classification Matrix",
        impact: "Tiered equality metrics (-100 to +100) for strategic HR compensation review."
      }
    ],
    accentColor: "#8E2B47",
  },
];

export const DRISKIFY_PIPELINE_STAGES = [
  {
    step: "01",
    title: "Data Mapping & Ingestion",
    short: "Schema Categorization",
    description: "Ingesting raw client databases and spreadsheets. Automatically classifying data attributes, identifying sensitive schemas, and mapping fields to compliance frameworks.",
    tag: "Ingestion",
    icon: "database",
  },
  {
    step: "02",
    title: "Autonomous AI Agents",
    short: "Agentic Audit Engine",
    description: "Deploying purpose-built AI agents that analyze mapped columns against regulatory baselines (ISO 27001, SOC 2, NIST CSF) to detect control gaps in real time.",
    tag: "AI Reasoning",
    icon: "cpu",
  },
  {
    step: "03",
    title: "Control Compliance Validation",
    short: "Automated Verification",
    description: "Validating operational controls, evidence trails, and policy enforcement rules. Flagging policy discrepancies and non-compliant access patterns immediately.",
    tag: "Validation",
    icon: "shield-check",
  },
  {
    step: "04",
    title: "Risk Insights & Executive Reporting",
    short: "Predictive Intelligence",
    description: "Generating dynamic risk posture heatmaps, prioritized remediation workbooks, and executive-ready governance summaries for stakeholder decision-making.",
    tag: "Insights",
    icon: "trending-up",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "cafe-mico",
    title: "Café Mico — Artisanal Coffee Experience",
    category: "web",
    type: "Live Web Architecture & Experience Design",
    description: "A digital coffeehouse web experience crafted with responsive layouts, visual menu curation, and smooth user flow for specialty coffee lovers.",
    highlights: [
      "Crafted an interactive responsive web presence for an artisanal café concept.",
      "Optimized fluid performance, typography hierarchy, and visual storytelling.",
      "Published and hosted on Netlify with live production availability."
    ],
    tools: ["React", "Tailwind CSS", "Netlify", "UI/UX Design", "Responsive Layouts"],
    liveUrl: "https://cafemico.netlify.app/",
    isFeatured: true,
    previewTheme: {
      bg: "from-[#FDE8E9] to-[#FAD4D8]",
      badge: "#BE2952",
      border: "#F6B8C2",
    },
  },
  {
    id: "coffee-crisps",
    title: "Coffee & Crisps Cafe — Digital Destination",
    category: "web",
    type: "Live Web Experience & Menu Showcase",
    description: "An engaging digital storefront featuring gourmet coffee selections, crisp accompaniments, and an intuitive customer-facing menu interface.",
    highlights: [
      "Built an inviting, modern café website emphasizing visual menu aesthetics.",
      "Designed seamless mobile-friendly navigation and clear call-to-actions.",
      "Live deployment providing real-world web delivery proof to clients and teams."
    ],
    tools: ["HTML5", "CSS3 / Modern Styling", "JavaScript", "Netlify Deployment"],
    liveUrl: "https://coffeeandcrispscafe.netlify.app/",
    isFeatured: true,
    previewTheme: {
      bg: "from-[#FFF2F4] to-[#FDE8E9]",
      badge: "#8E2B47",
      border: "#FAD4D8",
    },
  },
  {
    id: "credit-card-analytics",
    title: "Credit Card Performance & Customer Intelligence",
    category: "data",
    type: "Financial Data Engineering & BI Architecture",
    description: "End-to-end financial analytics system integrating a custom PostgreSQL relational database with Power BI dashboards utilizing advanced DAX measures.",
    highlights: [
      "Architected a PostgreSQL database with 2 relational tables and integrated with Power BI using optimized SQL extraction.",
      "Developed 2 comprehensive interactive executive dashboards featuring 3+ core KPIs and dynamic slicing filters.",
      "Collaborated with analytics teams to deliver customer segmentation, churn signals, and revenue growth insights."
    ],
    tools: ["PostgreSQL", "Power BI Desktop", "SQL", "DAX", "Data Modeling", "CSV Ingestion"],
    isFeatured: true,
    metrics: [
      { label: "Relational Tables", value: "2" },
      { label: "Executive Dashboards", value: "2" },
      { label: "Core KPIs Built", value: "3+" }
    ],
  },
  {
    id: "sql-hospital-bookstore",
    title: "SQL Enterprise Optimization (Hospital & Bookstore)",
    category: "sql",
    type: "Database Query Tuning & Performance Engineering",
    description: "Advanced SQL optimization across dual datasets (Healthcare Patient Records & High-Volume Online Bookstore Transactions) achieving measurable speedups.",
    highlights: [
      "Optimized complex relational SQL queries, cutting execution errors by 20% and reducing report turnaround time by 30%.",
      "Analyzed patient hospital visits and bookstore purchasing trends, uncovering 15+ actionable operational insights for inventory and staffing.",
      "Enhanced relational schema indexing and table architecture, making scheduled management reports 25% faster to generate."
    ],
    tools: ["SQL", "PostgreSQL", "Relational Database Design", "Query Optimization", "Performance Indexing"],
    isFeatured: true,
    metrics: [
      { label: "Query Error Reduction", value: "20%" },
      { label: "Report Time Speedup", value: "30%" },
      { label: "Actionable Insights", value: "15+" }
    ],
  },
  {
    id: "hr-analytics-dashboard",
    title: "HR Workforce Dynamics & Attrition Intelligence",
    category: "data",
    type: "People Analytics & Workforce Modeling",
    description: "Comprehensive workforce analytics dashboard modeling headcount demographics, attrition risk factors, and department performance metrics.",
    highlights: [
      "Processed, cleaned, and modeled a multi-variable HR dataset to ensure 100% data integrity and eliminate reporting anomalies.",
      "Visualized 3 critical strategic pillars: workforce distribution, attrition probability analysis, and retention KPIs.",
      "Constructed 3 interactive dashboards featuring 4 executive KPIs and granular department/tenure filters for faster leadership reporting."
    ],
    tools: ["Power BI Desktop", "Microsoft Excel", "DAX", "Data Cleaning", "Data Modeling"],
    isFeatured: true,
    metrics: [
      { label: "Core Dashboards", value: "3" },
      { label: "Executive KPIs", value: "4" },
      { label: "Key Strategic Areas", value: "3" }
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "GRC & Compliance Governance",
    subtitle: "Enterprise risk mitigation and policy frameworks",
    skills: [
      { name: "Risk Assessment", featured: true },
      { name: "Control Mapping", featured: true },
      { name: "Policy Review", featured: true },
      { name: "Compliance Documentation", featured: true },
      { name: "Audit Trail Analysis" },
      { name: "Regulatory Frameworks (ISO/SOC)" },
    ],
  },
  {
    title: "Platforms & AI Tools",
    subtitle: "Enterprise platforms & modern AI systems",
    skills: [
      { name: "ServiceNow GRC / IRM", featured: true },
      { name: "ServiceNow (CSA in Progress, CIS)", featured: true },
      { name: "Driskify AI Platform", featured: true },
      { name: "Autonomous AI Risk Agents", featured: true },
      { name: "Schema Categorization" },
    ],
  },
  {
    title: "Data, SQL & Business Intelligence",
    subtitle: "Relational engineering, query tuning, and dashboards",
    skills: [
      { name: "SQL (PostgreSQL)", featured: true },
      { name: "Power BI (DAX, Modeling)", featured: true },
      { name: "Microsoft Excel (Pivot, XLOOKUP)", featured: true },
      { name: "Python (Basics, EDA)" },
      { name: "Power Query" },
      { name: "Data Cleaning & Optimization" },
    ],
  },
  {
    title: "Business, Advisory & Client Leadership",
    subtitle: "Translating risk needs into high-impact execution",
    skills: [
      { name: "Stakeholder Management", featured: true },
      { name: "Client Communication", featured: true },
      { name: "Requirement Gathering & Analysis", featured: true },
      { name: "Stakeholder Reporting", featured: true },
      { name: "Cross-Functional Coordination" },
      { name: "Business Insights Presentation" },
    ],
  },
];

export const EDUCATION_RECORDS = [
  {
    degree: "Bachelor of Technology — Computer Science & Engineering",
    institution: "Auroras Technological and Research Institute",
    period: "2022 — 2026",
    score: "CGPA: 8.83 / 10",
    badge: "Computer Science & Engineering",
    details: "Foundational mastery in computing systems, relational databases, data structures, algorithms, and enterprise software engineering.",
  },
  {
    degree: "Intermediate — MPC (Mathematics, Physics, Chemistry)",
    institution: "Telangana State Board of Intermediate Education",
    period: "2020 — 2022",
    score: "CGPA: 9.83 / 10",
    badge: "Distinction Honors",
    details: "Exceptional quantitative, mathematical logic, and analytical problem-solving foundation.",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "deloitte-da",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    date: "March 2026",
    status: "Completed",
    description: "Evaluated industrial telemetry JSON datasets, created 10-min machine downtime KPIs, and categorized pay equity metrics.",
    credentialUrl: "https://www.theforage.com/",
  },
  {
    id: "udemy-excel",
    title: "Excel Data Analysis & Advanced Modeling",
    issuer: "Udemy",
    date: "2025",
    status: "Completed",
    description: "Advanced data manipulation, dynamic XLOOKUP formulas, pivot data structuring, and statistical modeling.",
    credentialUrl: "https://www.udemy.com/",
  },
  {
    id: "servicenow-csa",
    title: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    date: "2026",
    status: "In Progress",
    description: "Deep hands-on configuration of ServiceNow core architecture, user administration, table schemas, workflow rules, and IRM modules.",
    credentialUrl: "https://www.servicenow.com/",
  },
];

export const RISK_SCENARIOS: RiskScenario[] = [
  {
    id: "risk-01",
    title: "Cloud Infrastructure Drift & Unauthorized Access",
    domain: "Access Governance",
    likelihood: 3,
    impact: 3,
    description: "Critical database port exposed externally with unmanaged administrative credentials lacking MFA validation.",
    controlFramework: "ISO/IEC 27001 — A.9.4.2 & SOC 2 CC6.1",
    serviceNowControl: "SN-CTRL-ACCESS-099: Automated Privileged Credential Rotation & Session Auditing",
    driskifyAiAction: "Driskify AI Agent flagged 4 non-compliant schemas; triggered ServiceNow IRM Incident #IRM-2026-8812.",
    riskScore: "Critical",
  },
  {
    id: "risk-02",
    title: "Third-Party Vendor Telemetry Inconsistency",
    domain: "Vendor Risk",
    likelihood: 2,
    impact: 3,
    description: "SaaS vendor telemetry feed delayed past the 10-minute SLA threshold, obscuring machine health metrics.",
    controlFramework: "NIST CSF — ID.SC-3 & SOC 2 CC9.2",
    serviceNowControl: "SN-CTRL-VND-042: Third-Party Telemetry Continuous Monitoring & Escrow Assessment",
    driskifyAiAction: "Driskify AI Agent isolated ingestion pipe; dispatched automated compliance notification to vendor lead.",
    riskScore: "High",
  },
  {
    id: "risk-03",
    title: "Unclassified PII Column in Financial Pipeline",
    domain: "Data Privacy & Governance",
    likelihood: 2,
    impact: 2,
    description: "Customer financial dataset ingested with unmasked credit card identifier columns in staging schema.",
    controlFramework: "PCI-DSS 4.0 Req 3.4 & ISO 27701",
    serviceNowControl: "SN-CTRL-DATA-017: Mandatory Tokenization & Data Masking Enforcement",
    driskifyAiAction: "Driskify AI Schema Engine automatically applied dynamic column masking before ETL processing.",
    riskScore: "Medium",
  },
  {
    id: "risk-04",
    title: "Outdated Internal Policy Exception Renewal",
    domain: "Policy Governance",
    likelihood: 1,
    impact: 2,
    description: "Annual security policy review cycle pending approval for remote workstation endpoint encryption.",
    controlFramework: "ISO 27001 A.5.1 & SOC 2 CC5.2",
    serviceNowControl: "SN-CTRL-POL-003: Automated Policy Exception Expiration & Re-attestation Workflow",
    driskifyAiAction: "Scheduled Driskify AI policy parser notified Compliance Officer with auto-drafted renewal brief.",
    riskScore: "Low",
  },
];
