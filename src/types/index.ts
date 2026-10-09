export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  role: string;
  highlights: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface VerifiedProject {
  id: string;
  title: string;
  repoName: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  role: string;
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  visualType: 'ai-vision' | 'tourism-portal' | 'pilgrim-portal' | 'css-system' | 'architecture';
  isProminent?: boolean;
}

export interface VerifiedRepository {
  name: string;
  description: string;
  language: string;
  githubUrl: string;
  liveUrl?: string;
  topics?: string[];
}

export interface SkillItem {
  name: string;
  verifiedContext?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface FocusArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  badge: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'leadership' | 'engineering';
}
