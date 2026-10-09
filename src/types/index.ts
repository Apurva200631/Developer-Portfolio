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
  featured: boolean;
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
