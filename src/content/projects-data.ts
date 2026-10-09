import { VerifiedProject, VerifiedRepository } from '@/types';

/**
 * ============================================================================
 * VERIFIED PROJECTS DATA LAYER
 * ============================================================================
 * 
 * Instructions for Apurv:
 * To add, edit, or remove projects, simply update this array.
 * Every repository and live demo URL here is grounded in real, verified records
 * from GitHub account: https://github.com/Apurva200631
 * 
 * Rules:
 * - Do not invent features or false metrics.
 * - Only set `liveUrl` if the project is actually deployed and verified live.
 * - Always keep `githubUrl` pointing to your confirmed repository.
 */
export const verifiedProjects: VerifiedProject[] = [
  {
    id: 'autonomous-attendance-system',
    title: 'Autonomous Attendance System',
    repoName: 'autnomous-attendence-system',
    category: 'Computer Vision & AI',
    tagline: 'MIT VPU AI 4 All curriculum project featuring biometric facial detection and Google GenAI verification.',
    description:
      'An intelligent attendance platform developed for the MIT Vishwaprayag University (MIT VPU) AI 4 All curriculum. Integrates real-time webcam video stream capture with face-api.js for client-side biometric landmark detection, Google Gemini API for validation intelligence, and Firebase Firestore for persistent cloud records.',
    technologies: [
      'TypeScript',
      'React 19',
      'face-api.js',
      '@google/genai',
      'Firebase Firestore',
      'Vite',
      'Express',
      'Tailwind CSS',
    ],
    role: 'AI/ML Student Developer (MIT VPU)',
    highlights: [
      'Real-time webcam video capture and biometric facial landmark detection using face-api.js',
      'Integration with Google Gemini API (@google/genai) for intelligent validation and anomaly checks',
      'Persistent cloud attendance records with Firebase and declarative Firestore security rules',
      'Exportable reporting pipeline with spreadsheet generation and timestamped audit logs',
    ],
    githubUrl: 'https://github.com/Apurva200631/autnomous-attendence-system',
    liveUrl: undefined, // Confirmed: Runs locally / in AI Studio environment
    visualType: 'ai-vision',
    isProminent: true,
  },
  {
    id: 'solapur-tourism-portal',
    title: 'Solapur Tourism Web Portal',
    repoName: 'Apurva200631.github.io',
    category: 'Web Application & Cultural Guide',
    tagline: 'Comprehensive digital guide portal for the heritage, culture, and pilgrimage landmarks of Solapur.',
    description:
      'A multi-page regional tourism portal providing structured guidance for pilgrims and visitors to Solapur. Covers Siddeshwar Temple, Pandharpur pilgrimage routes, cultural events, travel planning, weather forecasts, and regional gastronomy.',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Responsive Design',
      'GitHub Pages',
    ],
    role: 'Frontend Developer & Content Designer',
    highlights: [
      'Multi-page architecture covering places, culture, events, food, and weather forecasting',
      'Live production deployment hosted directly on GitHub Pages',
      'Optimized navigation ergonomics designed for pilgrims and first-time travelers',
    ],
    githubUrl: 'https://github.com/Apurva200631/Apurva200631.github.io',
    liveUrl: 'https://apurva200631.github.io/',
    visualType: 'tourism-portal',
  },
  {
    id: 'visit-tuljapur-portal',
    title: 'Visit Tuljapur Pilgrim Portal',
    repoName: 'visittulajpur.github.io',
    category: 'Pilgrimage Portal & Interactive Maps',
    tagline: 'Specialized information and booking portal for visitors and devotees travelling to Tuljapur.',
    description:
      'A dedicated public information portal designed for devotees visiting the historic temple city of Tuljapur. Features darshan status guidance, temple grounds mapping, accommodation directories, transport enquiry forms, and virtual tours.',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Interactive Maps',
      'GitHub Pages',
    ],
    role: 'Web Developer',
    highlights: [
      'Specialized workflows for darshan status tracking, accommodation, and food directories',
      'Interactive temple map and temple area routing layouts',
      'Live deployment active on GitHub Pages with sub-route navigation',
    ],
    githubUrl: 'https://github.com/Apurva200631/visittulajpur.github.io',
    liveUrl: 'https://apurva200631.github.io/visittulajpur.github.io/',
    visualType: 'pilgrim-portal',
  },
  {
    id: 'orbion-platform-architecture',
    title: 'Orbion Technologies Platform Architecture',
    repoName: 'Orbion-Technologies-Core',
    category: 'System Architecture & Web Engineering',
    tagline: 'Scalable technical framework and component system for Orbion Technologies web initiatives.',
    description:
      'Directing the technology architecture and frontend standards for Orbion Technologies. Emphasizes deterministic type safety, sub-second visual rendering, modular layout primitives, and Apple-grade minimalist user experience.',
    technologies: [
      'TypeScript',
      'Next.js (App Router)',
      'React 19',
      'Tailwind CSS',
      'System Architecture',
    ],
    role: 'Chief Technology Officer (CTO)',
    highlights: [
      'Enterprise component hierarchy with strict TypeScript interface enforcement',
      'Clean architectural separation between content, state, and visual presentation',
      'Built to scale across upcoming Orbion Technologies digital product initiatives',
    ],
    githubUrl: 'https://github.com/Apurva200631',
    liveUrl: undefined,
    visualType: 'architecture',
  },
];

/**
 * Verified public repositories from Apurv's GitHub account (Apurva200631)
 */
export const verifiedRepositories: VerifiedRepository[] = [
  {
    name: 'autnomous-attendence-system',
    description: 'MIT VPU AI 4 ALL project with Face-API, Gemini AI & Firebase',
    language: 'TypeScript',
    githubUrl: 'https://github.com/Apurva200631/autnomous-attendence-system',
    topics: ['computer-vision', 'face-api', 'gemini-ai', 'firebase'],
  },
  {
    name: 'Apurva200631.github.io',
    description: 'Solapur Tourism guide web portal covering pilgrimage, culture, and travel',
    language: 'HTML',
    githubUrl: 'https://github.com/Apurva200631/Apurva200631.github.io',
    liveUrl: 'https://apurva200631.github.io/',
    topics: ['tourism', 'solapur', 'github-pages'],
  },
  {
    name: 'visittulajpur.github.io',
    description: 'Visit Tuljapur pilgrimage information portal with darshan guides & maps',
    language: 'HTML',
    githubUrl: 'https://github.com/Apurva200631/visittulajpur.github.io',
    liveUrl: 'https://apurva200631.github.io/visittulajpur.github.io/',
    topics: ['pilgrimage', 'tuljapur', 'web-portal'],
  },
  {
    name: 'APURV_CSS',
    description: 'Explorations in CSS layout architecture and modern web styling',
    language: 'CSS / HTML',
    githubUrl: 'https://github.com/Apurva200631/APURV_CSS',
    topics: ['css', 'styling', 'frontend'],
  },
  {
    name: 'FSDLABEXP2',
    description: 'Full Stack Development lab experiments and coursework implementations at MIT VPU',
    language: 'Web Stack',
    githubUrl: 'https://github.com/Apurva200631/FSDLABEXP2',
    topics: ['full-stack', 'mit-vpu', 'lab-work'],
  },
  {
    name: 'THE-WISE-NBERGS-ACE.github.io',
    description: 'Web development project repository deployed on GitHub Pages',
    language: 'HTML / JS',
    githubUrl: 'https://github.com/Apurva200631/THE-WISE-NBERGS-ACE.github.io',
    topics: ['web', 'frontend'],
  },
];
