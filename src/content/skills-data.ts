import { SkillCategory } from '@/types';

/**
 * ============================================================================
 * TECHNICAL SKILLS DATA LAYER
 * ============================================================================
 * 
 * Instructions for Apurv:
 * To add, edit, or remove skills, simply modify the categories below.
 * Every item listed here is verified through your public GitHub repositories
 * (Apurva200631) or your confirmed B.Tech AIML studies at MIT Vishwaprayag University.
 * 
 * Rules:
 * - No arbitrary percentages, ratings, or star counts.
 * - Skills are organized into the 4 core domains requested.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'Foundations and applied model workflows confirmed through academic studies at MIT Vishwaprayag University and hands-on repository projects.',
    skills: [
      { name: 'Computer Vision Foundations', verifiedContext: 'face-api.js biometric detection in Attendance System' },
      { name: 'Generative AI API Integration', verifiedContext: '@google/genai & Gemini models in MIT VPU project' },
      { name: 'Data Preprocessing & Analysis', verifiedContext: 'AIML coursework with NumPy & Pandas' },
      { name: 'Machine Learning Principles', verifiedContext: 'B.Tech AIML curriculum at MIT VPU' },
      { name: 'Model Evaluation & Metrics', verifiedContext: 'Classification, precision, recall & loss diagnostics' },
      { name: 'Facial Landmark Detection', verifiedContext: 'Real-time client-side feature extraction' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    description:
      'Core programming languages verified across public codebases and algorithmic problem solving.',
    skills: [
      { name: 'TypeScript', verifiedContext: 'Strict types in Next.js & Attendance System' },
      { name: 'JavaScript (ES6+)', verifiedContext: 'Core language in 10+ public web repositories' },
      { name: 'Python', verifiedContext: 'AIML engineering and computational scripting' },
      { name: 'HTML5 Semantic Markup', verifiedContext: 'Accessible structure in tourism portals & apps' },
      { name: 'Modern CSS & CSS3', verifiedContext: 'APURV_CSS repository & responsive layouts' },
    ],
  },
  {
    id: 'web-dev',
    title: 'Web & Full-Stack Development',
    description:
      'Frontend frameworks, server runtimes, and database architectures deployed in real systems.',
    skills: [
      { name: 'React 19', verifiedContext: 'attendance system & modern component architectures' },
      { name: 'Next.js (App Router)', verifiedContext: 'Production portfolio & server-side components' },
      { name: 'Tailwind CSS', verifiedContext: 'Utility-first tokenized styling across modern projects' },
      { name: 'Node.js & Express', verifiedContext: 'server.ts backend routing in attendance system' },
      { name: 'Firebase & Cloud Firestore', verifiedContext: 'Persistent data store with firestore.rules' },
      { name: 'Vite', verifiedContext: 'Modern client tooling & build workflows' },
      { name: 'RESTful API Design', verifiedContext: 'Client-server communications and endpoints' },
    ],
  },
  {
    id: 'tools-platforms',
    title: 'Tools, Platforms & Deployment',
    description:
      'Engineering tooling, version control, hosting environments, and hardware integration interfaces.',
    skills: [
      { name: 'Git & GitHub', verifiedContext: 'Apurva200631 profile with 20 public repositories' },
      { name: 'GitHub Pages', verifiedContext: 'Live production hosting for Solapur & Tuljapur portals' },
      { name: 'Google AI Studio', verifiedContext: 'Gemini model prototyping and configuration' },
      { name: 'Webcam & MediaStream APIs', verifiedContext: 'Hardware video capture in browser' },
      { name: 'VS Code & Modern IDEs', verifiedContext: 'Primary development and debugging workspace' },
      { name: 'NPM & Turbopack', verifiedContext: 'Package management & high-speed bundling' },
    ],
  },
];
