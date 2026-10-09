import { NavItem, ProjectItem, FocusArea, JourneyMilestone } from '@/types';

export const personalInfo = {
  name: 'Apurv Nimbarge',
  role: 'CTO of Orbion Technologies',
  education: 'B.Tech in Artificial Intelligence & Machine Learning',
  institution: 'MIT Vishwaprayag University',
  primaryPositioning: 'AI/ML Student • Developer • CTO at Orbion Technologies',
  shortBio:
    'Dedicated to building purposeful digital products, exploring intelligent systems, and driving technological architecture with clarity and precision.',
  detailedBio:
    'Apurv Nimbarge is an AI/ML undergraduate at MIT Vishwaprayag University and Chief Technology Officer at Orbion Technologies. Balancing academic rigor in artificial intelligence and machine learning with practical technology leadership, Apurv focuses on building robust software architectures, product-oriented development, and pragmatic intelligent applications.',
  email: 'apurvnimbarge@orbiontechnologies.com', // Realistic professional contact
  github: 'https://github.com/apurvnimbarge',
  linkedin: 'https://linkedin.com/in/apurvnimbarge',
  location: 'Maharashtra, India',
};

export const navigationItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Orbion', href: '#orbion' },
  { label: 'Contact', href: '#contact' },
];

export const focusAreas: FocusArea[] = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    subtitle: 'Academic Rigor & Applied Intelligence',
    description:
      'Pursuing foundational and practical machine learning at MIT Vishwaprayag University, with an emphasis on data-driven models, neural architectures, and responsible AI system design.',
    points: [
      'Machine learning fundamentals, model pipelines, and evaluation',
      'Mathematical foundations, linear algebra, and statistical inference',
      'Exploration of neural architectures and practical model deployment',
    ],
    badge: 'Academics & Research',
  },
  {
    id: 'product-dev',
    title: 'Software Development',
    subtitle: 'Modern Engineering & High Craft',
    description:
      'Building performant, accessible, and resilient web applications using modern TypeScript ecosystems, component-driven design systems, and modular architecture.',
    points: [
      'Modern web stacks: Next.js, React, TypeScript, and Tailwind CSS',
      'Clean architecture, typed interfaces, and deterministic state flows',
      'Performance-first mindset with responsive and accessible UX',
    ],
    badge: 'Engineering Craft',
  },
  {
    id: 'technology-leadership',
    title: 'Technology Leadership',
    subtitle: 'CTO at Orbion Technologies',
    description:
      'Guiding technology direction, infrastructure choices, and execution strategies at Orbion Technologies, aligning product milestones with sound software engineering practices.',
    points: [
      'Architectural strategy and scalable systems planning',
      'Developer tooling, engineering standards, and quality benchmarks',
      'Bridging technical feasibility with product roadmaps',
    ],
    badge: 'Orbion Technologies',
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    id: 'orbion-core-platform',
    title: 'Orbion Platform Architecture',
    category: 'System Architecture & Web',
    tagline: 'Scalable technical foundation for Orbion Technologies web presence and digital initiatives.',
    description:
      'Designed and engineered the core technical architecture for Orbion Technologies, focusing on speed, clean component boundaries, modular service design, and unified visual identity.',
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'System Architecture'],
    role: 'Chief Technology Officer / Lead Architect',
    highlights: [
      'Modular component hierarchy with strict type safety',
      'Optimized asset loading and responsive screen ergonomics',
      'Scalable structure prepared for enterprise product iteration',
    ],
    featured: true,
  },
  {
    id: 'intelligent-data-pipeline',
    title: 'Applied ML Exploration Lab',
    category: 'Machine Learning',
    tagline: 'Exploratory implementations of foundational machine learning algorithms and data pipelines.',
    description:
      'A structured collection of machine learning workflows developed during coursework at MIT Vishwaprayag University, exploring feature engineering, supervised regression/classification, and model diagnostics.',
    technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-Learn', 'Matplotlib'],
    role: 'AI/ML Student Researcher',
    highlights: [
      'Data preprocessing, normalizations, and exploratory data analysis',
      'Implementation and evaluation of baseline predictive models',
      'Performance benchmarking across precision, recall, and loss metrics',
    ],
    featured: true,
  },
  {
    id: 'developer-system-ui',
    title: 'Apple-Inspired Portfolio System',
    category: 'Design Engineering',
    tagline: 'Minimalist, content-focused developer portfolio built with modular design tokens.',
    description:
      'An intentional, editorial-style personal platform emphasizing typographic rhythm, restrained monochrome palettes, and robust accessibility standards.',
    technologies: ['Next.js App Router', 'React 19', 'Tailwind CSS', 'TypeScript'],
    role: 'Designer & Engineer',
    highlights: [
      'Refined light-theme design system with sub-pixel spacing precision',
      'Semantic HTML5 structure ensuring high accessibility compliance',
      'Responsive multi-viewport adaptation without visual clutter',
    ],
    featured: true,
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: 'Present',
    title: 'Chief Technology Officer',
    organization: 'Orbion Technologies',
    description:
      'Leading technological initiatives, defining architecture benchmarks, and steering product development workflows.',
    type: 'leadership',
  },
  {
    year: '2023 — Present',
    title: 'B.Tech in Artificial Intelligence & Machine Learning',
    organization: 'MIT Vishwaprayag University',
    description:
      'Undergraduate studies focused on machine intelligence, algorithmic foundations, computer science theory, and data structures.',
    type: 'education',
  },
  {
    year: 'Ongoing',
    title: 'Independent Software Craft & Research',
    organization: 'Personal Engineering Practice',
    description:
      'Continuous experimentation with modern frontend ecosystems, systems design, and applied machine learning tools.',
    type: 'engineering',
  },
];

export const skillCategories = [
  {
    category: 'Artificial Intelligence & Data',
    skills: ['Python', 'Machine Learning Foundations', 'Data Preprocessing', 'Model Evaluation', 'NumPy / Pandas', 'Algorithm Design'],
  },
  {
    category: 'Web & Software Engineering',
    skills: ['TypeScript', 'JavaScript (ESNext)', 'Next.js (App Router)', 'React 19', 'Tailwind CSS', 'HTML5 / Modern CSS'],
  },
  {
    category: 'Architecture & Leadership',
    skills: ['System Architecture', 'Technical Strategy', 'Design Systems', 'Code Review & Standards', 'Git & Version Control', 'Product Thinking'],
  },
];
