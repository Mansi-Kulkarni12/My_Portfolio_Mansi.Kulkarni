export interface ExperienceChapter {
  id: string;
  chapterNumber: string;
  role: string;
  company: string;
  location: string;
  period: string;
  tagline: string;
  description: string[];
  skillsUsed: string[];
  deliverables: {
    title: string;
    impact: string;
  }[];
  accentColor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'data' | 'sql' | 'grc';
  type: string;
  description: string;
  highlights: string[];
  tools: string[];
  link?: string;
  liveUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
  metrics?: { label: string; value: string }[];
  previewTheme?: {
    bg: string;
    badge: string;
    border: string;
  };
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
    relatedProjects?: string[];
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: 'Completed' | 'In Progress';
  description: string;
  credentialUrl?: string;
}

export interface RiskScenario {
  id: string;
  title: string;
  domain: string;
  likelihood: number; // 1-3
  impact: number;     // 1-3
  description: string;
  controlFramework: string;
  serviceNowControl: string;
  driskifyAiAction: string;
  riskScore: 'Low' | 'Medium' | 'High' | 'Critical';
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
}
