import { NavItem, ProjectItem, FocusArea, JourneyMilestone, ContactChannel } from '@/types';

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
  
  // Exact Verified Contacts
  email: 'apurvnimbarge800@gmail.com', // Personal Gmail
  personalGmail: 'apurvnimbarge800@gmail.com',
  yahooMail: 'apurvnimbarge.tech@yahoo.com',
  orbionEmail: 'apurv.orbion@gmail.com',
  
  github: 'https://github.com/Apurva200631',
  githubUsername: 'Apurva200631',
  publicReposCount: 20,
  
  linkedin: 'https://www.linkedin.com/in/apurva-nimbarge-a40310353',
  x: 'https://x.com/apurv2116',
  xHandle: '@apurv2116',
  
  location: 'Solapur, Maharashtra, India',
};

export const navigationItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Orbion', href: '#orbion' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Verified Contact Destinations
 * Every service has a recognizable brand logo and exact supplied destination URL.
 */
export const contactChannels: ContactChannel[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    label: 'Professional Network',
    value: 'linkedin.com/in/apurva-nimbarge-a40310353',
    href: 'https://www.linkedin.com/in/apurva-nimbarge-a40310353',
    type: 'social',
    service: 'linkedin',
    description: 'Connect for professional networking and leadership discussions.',
  },
  {
    id: 'github',
    name: 'GitHub',
    label: 'Code Repositories',
    value: 'github.com/Apurva200631',
    href: 'https://github.com/Apurva200631',
    type: 'social',
    service: 'github',
    description: 'Explore 20 public repositories, laboratory experiments, and web projects.',
  },
  {
    id: 'personal-gmail',
    name: 'Personal Gmail',
    label: 'Direct Correspondence',
    value: 'apurvnimbarge800@gmail.com',
    href: 'mailto:apurvnimbarge800@gmail.com',
    type: 'email',
    service: 'gmail',
    description: 'Personal inbox for developer inquiries and direct technical communication.',
  },
  {
    id: 'yahoo-mail',
    name: 'Yahoo Mail',
    label: 'Technical & Academic Mail',
    value: 'apurvnimbarge.tech@yahoo.com',
    href: 'mailto:apurvnimbarge.tech@yahoo.com',
    type: 'email',
    service: 'yahoo',
    description: 'Secondary technical address for academic and development exchange.',
  },
  {
    id: 'x',
    name: 'X',
    label: 'Social & Updates',
    value: 'x.com/apurv2116',
    href: 'https://x.com/apurv2116',
    type: 'social',
    service: 'x',
    description: 'Follow technology discussions, software building thoughts, and updates.',
  },
  {
    id: 'orbion-email',
    name: 'Orbion Company Email',
    label: 'Official Enterprise Inquiries',
    value: 'apurv.orbion@gmail.com',
    href: 'mailto:apurv.orbion@gmail.com',
    type: 'email',
    service: 'gmail',
    isCompany: true,
    description: 'Official channel for inquiries regarding Orbion Technologies and CTO office.',
  },
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

/**
 * Professional Journey Milestones (Strictly Confirmed Facts Only)
 * No fictional job positions, dates, milestones, awards, or employment history.
 */
export const journeyMilestones: JourneyMilestone[] = [
  {
    title: 'Chief Technology Officer (CTO)',
    organization: 'Orbion Technologies',
    description:
      'Leading technology direction, system architecture, and engineering standards for digital platforms. Fostering a product development ethos that turns technical curiosity into stable software.',
    type: 'leadership',
    period: 'Current Leadership',
  },
  {
    title: 'B.Tech in Artificial Intelligence & Machine Learning',
    organization: 'MIT Vishwaprayag University',
    description:
      'Pursuing an undergraduate degree in Artificial Intelligence and Machine Learning. Coursework emphasizes machine intelligence, data structures, algorithms, mathematical foundations, and intelligent systems design.',
    type: 'education',
    period: 'Undergraduate Program',
  },
  {
    title: 'Software Development & Applied AI/ML Practice',
    organization: 'Technical Engineering Practice',
    description:
      'Practical development spanning computer vision applications (face-api.js), generative AI model integrations (@google/genai), and responsive web platforms deployed to production.',
    type: 'engineering',
    period: 'Ongoing Focus',
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
];
