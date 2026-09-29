import crimeAnalysisScreen from '@/assets/images/project_screen_crime_analysis.jpg';
import deepguardScreen from '@/assets/images/project_screen_deepguard.jpg';
import eldeoGadgetsScreen from '@/assets/images/project_screen_eldeo_gadgets.jpg';
import movlyScreen from '@/assets/images/project_screen_movly.jpg';
import tubeflowImg from '@/assets/images/project_tubeflow_saas.jpg';
import ecommerceImg from '@/assets/images/project_preview_ecommerce.jpg';
import workflowImg from '@/assets/images/project_preview_workflow.jpg';

export interface FeaturedProject {
  id: string;
  slug: string;
  title: string;
  category: 'Full-Stack' | 'Frontend' | 'SaaS & Dashboard' | 'E-Commerce' | 'AI & Security';
  tagline: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: string;
  technologies: string[];
  keyFeatures: string[];
  metrics?: { label: string; value: string }[];
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-Time' | 'Contract' | 'Freelance';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; icon?: string }[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  idealFor: string;
}

export const profile = {
  name: 'Francis Anyaegbu',
  role: 'Full-Stack / Frontend Developer',
  tagline: 'Building considered, resilient digital products with modern web technologies.',
  github: 'https://github.com/francisanyaegbu',
  linkedin: 'https://www.linkedin.com/in/francis-anyaegbu-05aba329/',
  email: 'anyaegbufrancis34@gmail.com',
  location: 'Lagos, Nigeria · Available Worldwide (Remote)',
  timezone: 'WAT (UTC+1)',
  availability: 'Available for freelance projects & full-time roles',
  intro:
    'I turn thoughtful interface design into responsive, production-ready websites and web applications for businesses.',
  about:
    'I care about the quiet details that make a product feel obvious: a clear hierarchy, considered interaction, sub-second first loads, and an interface that still makes sense on the smallest screen. My work sits between frontend craft and full-stack architecture.',
  story:
    'With a deep focus on TypeScript, React, Next.js, Vue, Supabase, and Gemini AI integrations, I help startups and businesses translate complex operational workflows into intuitive, high-performance web applications. From precision design systems to resilient API backends, I build software designed to scale gracefully.',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
] as const;

export const featuredProjects: FeaturedProject[] = [
  {
    id: '1',
    slug: 'crime-analysis-system',
    title: 'Crime Analysis & Geospatial Prediction System',
    category: 'Full-Stack',
    tagline: 'AI-driven incident pattern recognition, predictive risk modeling, and geospatial mapping.',
    description:
      'A comprehensive crime prediction and security data intelligence platform featuring interactive geospatial heatmaps, trend analytics, and real-time safety telemetry powered by Google Gemini AI and Supabase.',
    longDescription:
      'The Crime Analysis System delivers real-time spatial intelligence for security teams and civic stakeholders. Built with React, TypeScript, Express, Supabase, and Google Gemini AI, it analyzes historical incident clusters, predicts localized risk probabilities, and renders interactive map layers with zero latency.',
    problem:
      'Security agencies and civic planners lacked unified, modern digital platforms to correlate spatial crime reports and predict localized risk vectors before escalation.',
    solution:
      'Architected a full-stack platform integrating Supabase geospatial queries, Gemini AI automated risk summaries, interactive vector charts, and responsive map clustering.',
    image: crimeAnalysisScreen,
    liveUrl: 'https://crime-analysis-system-cyan.vercel.app',
    githubUrl: 'https://github.com/francisanyaegbu/Crime-Analysis-System',
    featured: true,
    year: '2026',
    technologies: ['React', 'TypeScript', 'Express', 'Supabase', 'Gemini AI', 'Tailwind CSS', 'Vite', 'Motion'],
    keyFeatures: [
      'Interactive geospatial incident mapping with predictive risk heatmap overlays',
      'AI-powered pattern detection and automated incident summary generator',
      'Real-time incident dispatch telemetry and status management with Supabase',
      'High-contrast dark UI with responsive analytics charts and filtering',
    ],
    metrics: [
      { label: 'Architecture', value: 'Full-Stack' },
      { label: 'AI Model', value: 'Gemini AI' },
      { label: 'Live Hosting', value: 'Vercel' },
    ],
    highlights: [
      'Engineered server-side proxy routes for Gemini AI prompt grounding and crime pattern classification',
      'Implemented real-time reactive subscriptions with Supabase for instant report updates',
    ],
  },
  {
    id: '2',
    slug: 'deepguard-ai-security',
    title: 'DeepGuard AI Security & Threat Intelligence',
    category: 'AI & Security',
    tagline: 'Automated vulnerability scanning, threat intelligence, and security audit engine.',
    description:
      'An enterprise security assessment platform providing automated code vulnerability scanning, threat intelligence telemetry, incident logging, and AI-assisted remediation suggestions.',
    longDescription:
      'DeepGuard is engineered to empower developers and organizations to secure their software supply chain. Leveraging Next.js App Router, TypeScript, Supabase SSR, and Gemini Generative AI, it delivers real-time vulnerability scoring, deep dependency audits, and actionable patch recommendations.',
    problem:
      'Traditional security scanners generate noisy, incomprehensible reports without providing contextual guidance on how to fix identified vulnerabilities.',
    solution:
      'Created a clean, developer-first dashboard that scans application targets and leverages generative AI to generate verified code fix suggestions and severity prioritizations.',
    image: deepguardScreen,
    liveUrl: 'https://deepguard-xi.vercel.app',
    githubUrl: 'https://github.com/francisanyaegbu/deepguard',
    featured: true,
    year: '2026',
    technologies: ['Next.js', 'TypeScript', 'Supabase SSR', 'Gemini AI', 'Lucide React', 'Tailwind CSS'],
    keyFeatures: [
      'Automated codebase vulnerability scanner with contextual severity scoring',
      'AI-assisted remediation generator providing drop-in security code fixes',
      'Real-time security telemetry dashboard with historical trend graphs',
      'Secure authentication and multi-tenant audit logs with Supabase SSR',
    ],
    metrics: [
      { label: 'Framework', value: 'Next.js 15' },
      { label: 'Auth & DB', value: 'Supabase' },
      { label: 'Deployment', value: 'Vercel' },
    ],
    highlights: [
      'Utilized Next.js Server Components for sub-second first loads and strict server-side API secret isolation',
      'Designed a high-contrast dark cybersecurity aesthetic with accessible focus rings and zero UI slop',
    ],
  },
  {
    id: '3',
    slug: 'el-deo-gadgets',
    title: 'El-Deo Gadgets Consumer Tech Storefront',
    category: 'E-Commerce',
    tagline: 'Modern tech and electronics commerce platform with real-time inventory.',
    description:
      'A sleek, high-conversion e-commerce platform for consumer electronics, featuring faceted category navigation, instant cart drawer, live stock sync, and seamless checkout.',
    longDescription:
      'El-Deo Gadgets delivers a consumer electronics shopping experience built on Next.js, React, TypeScript, and Supabase. It features lightning-fast product filtering, responsive image optimization, persistent cart state, and order tracking.',
    problem:
      'Tech retail customers need instant filtering by specs, crystal-clear pricing, and a zero-friction mobile purchasing process.',
    solution:
      'Built a headless catalog with client-side attribute filtering, real-time inventory status, and fluid cart animations.',
    image: eldeoGadgetsScreen,
    liveUrl: 'https://el-deo-gadgets.vercel.app',
    githubUrl: 'https://github.com/francisanyaegbu/el-deo-gadgets',
    featured: true,
    year: '2026',
    technologies: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Phosphor Icons', 'Tailwind CSS'],
    keyFeatures: [
      'Dynamic multi-attribute product filtering (category, brand, price, specs)',
      'Slide-out interactive cart drawer with real-time total and discount calculations',
      'Mobile-first responsive buy flows with sticky checkout actions',
      'Persistent shopping state and customer order history tracking',
    ],
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'First Paint', value: '0.4s' },
      { label: 'Live Hosting', value: 'Vercel' },
    ],
    highlights: [
      'Implemented optimistic UI mutations with Supabase for instant add-to-cart feedback',
      'Customized Phosphor Icons for a clean, consistent modern hardware retail visual language',
    ],
  },
  {
    id: '4',
    slug: 'movly-movie-directory',
    title: 'Movly Cinematic Discovery & Directory',
    category: 'Frontend',
    tagline: 'Movie and entertainment exploration platform with trending lists and watchlist curation.',
    description:
      'A Vue 3 & Pinia movie discovery platform featuring real-time TMDb trending lists, watchlist bookmarking, trailer previews, and multi-genre search.',
    longDescription:
      'Movly provides a cinema discovery experience built on Vue 3, TypeScript, Pinia, and Tailwind CSS. It connects to movie databases for trending releases, ratings, cast filmographies, and trailer playback.',
    problem:
      'Film enthusiasts want a fast, ad-free movie discovery platform with instant watchlist management and trailer viewing.',
    solution:
      'Engineered a reactive Vue 3 SPA with Pinia store persistence, dynamic genre filtering, and fluid route transitions.',
    image: movlyScreen,
    liveUrl: 'https://movly.vercel.app',
    githubUrl: 'https://github.com/francisanyaegbu/Vue-Test',
    featured: true,
    year: '2026',
    technologies: ['Vue 3', 'TypeScript', 'Pinia', 'Vue Router', 'Phosphor Icons', 'Tailwind CSS'],
    keyFeatures: [
      'Real-time trending and top-rated film lists with rating scores',
      'Dynamic search and faceted genre/year filtering',
      'Personal watchlist curation saved across sessions via Pinia state',
      'Integrated trailer media modal with cast filmography details',
    ],
    metrics: [
      { label: 'Framework', value: 'Vue 3 + Pinia' },
      { label: 'Live Hosting', value: 'Vercel' },
      { label: 'API', value: 'TMDb API' },
    ],
    highlights: [
      'Demonstrates advanced Vue 3 Composition API architecture and custom composables',
      'Achieved zero-delay client search with debounced input handlers',
    ],
  },
  {
    id: '5',
    slug: 'tubeflow-youtube-saas',
    title: 'TubeFlow AI YouTube Studio & Channel Automation',
    category: 'SaaS & Dashboard',
    tagline: 'AI-assisted video metadata optimizer, title scoring, and channel growth workflow.',
    description:
      'A creator automation SaaS suite empowering video producers with AI topic research, viral title generation, tag optimization, and release scheduling.',
    longDescription:
      'TubeFlow streamlines the YouTube creator workflow by combining algorithmic content analysis with generative title and description tools. Built with TypeScript, React, and Supabase, it helps creators plan, optimize, and schedule content efficiently.',
    problem:
      'Content creators waste hours testing titles, tags, and descriptions across disjointed browser extensions and notes apps.',
    solution:
      'Created an all-in-one studio workspace that generates high-CTR title variations, optimized tags, and structured timestamps in seconds.',
    image: tubeflowImg,
    liveUrl: 'https://replit.com/@onlineuseror/TubeFlow-YouTube-Automation-SaaS',
    githubUrl: 'https://github.com/francisanyaegbu/TubeFlow',
    featured: false,
    year: '2026',
    technologies: ['TypeScript', 'React', 'AI Engine', 'Supabase', 'Tailwind CSS', 'Express'],
    keyFeatures: [
      'AI video title generator with estimated click-through potential scoring',
      'Automated SEO tag generation and description formatter with timestamp builder',
      'Content production Kanban pipeline from script ideation to publishing',
      'Channel analytics telemetry and release calendar',
    ],
    metrics: [
      { label: 'Category', value: 'Creator SaaS' },
      { label: 'Stack', value: 'TypeScript' },
      { label: 'Status', value: 'Live' },
    ],
    highlights: [
      'Built a distraction-free split workspace allowing simultaneous script drafting and AI metadata generation',
      'Engineered one-click copy and export for direct YouTube Studio pasting',
    ],
  },
  {
    id: '6',
    slug: 'dirace-fashion-store',
    title: 'DIRACE Fashion & Streetwear Store',
    category: 'E-Commerce',
    tagline: 'Curated fashion apparel storefront with lookbook and automated dispatch.',
    description:
      'An aesthetic online clothing store featuring lookbook collections, size/color variant selectors, customer cart drawer, and automated order confirmation emails via Resend & Nodemailer.',
    longDescription:
      'DIRACE Fashion Store provides a modern shopping destination for contemporary apparel. Built with TypeScript, React, Supabase, and Resend, it offers an editorial lookbook presentation, seamless product browsing, and transactional order confirmation dispatches.',
    problem:
      'Boutique fashion brands need editorial-grade aesthetics combined with dependable order processing and instant customer email confirmation.',
    solution:
      'Delivered a minimalist, typography-forward storefront with dynamic collection galleries and reliable transactional email integration.',
    image: ecommerceImg,
    liveUrl: 'https://replit.com/@unknowntk43/DIRACE-Fashion-Store',
    githubUrl: 'https://github.com/francisanyaegbu/DIRACE-Fashion-Store',
    featured: false,
    year: '2026',
    technologies: ['TypeScript', 'React', 'Supabase', 'Resend', 'Nodemailer', 'Tailwind CSS'],
    keyFeatures: [
      'High-contrast fashion lookbook gallery with editorial photography presentation',
      'Dynamic size and color variant picker with real-time stock status',
      'Automated email dispatch engine for receipts and shipment tracking',
      'Mobile-optimized touch cart drawer with instant quantity updates',
    ],
    metrics: [
      { label: 'Transactions', value: 'Resend API' },
      { label: 'Database', value: 'Supabase' },
      { label: 'Type', value: 'Retail Store' },
    ],
    highlights: [
      'Integrated Resend API for custom HTML transactional receipt templates',
      'Optimized media delivery for high-resolution garment detail zooms',
    ],
  },
  {
    id: '7',
    slug: 'weather-telemetry-app',
    title: 'Meteorological Weather & Atmospheric Telemetry',
    category: 'Frontend',
    tagline: 'Interactive 7-day weather projections, atmospheric radar, and multi-city telemetry.',
    description:
      'A clean meteorological dashboard built with Next.js and TypeScript, offering 7-day forecasts, wind velocity tracking, humidity gauges, and instant city search.',
    longDescription:
      'Weather App provides meteorological data in an uncluttered interface. Built with Next.js, React, TypeScript, and OpenWeather APIs, it delivers temperature trends, precipitation probability, and wind metrics.',
    problem:
      'Standard weather websites are overloaded with intrusive advertisements, slow loading times, and poor mobile layouts.',
    solution:
      'Designed a focused, high-contrast dashboard with instant location search, atmospheric telemetry cards, and smooth mobile responsiveness.',
    image: workflowImg,
    liveUrl: 'https://weather-app-navy-ten-12.vercel.app',
    githubUrl: 'https://github.com/francisanyaegbu/weather-app',
    featured: false,
    year: '2026',
    technologies: ['Next.js', 'React', 'TypeScript', 'OpenWeather API', 'Phosphor Icons', 'Tailwind CSS'],
    keyFeatures: [
      'Real-time temperature, humidity, wind velocity, and UV index cards',
      '7-day forward weather outlook with hourly temperature charts',
      'Global multi-city search with instantaneous weather retrieval',
      'Dynamic weather condition status indicators and temperature unit toggling',
    ],
    metrics: [
      { label: 'Framework', value: 'Next.js' },
      { label: 'Live Hosting', value: 'Vercel' },
      { label: 'API', value: 'OpenWeather' },
    ],
    highlights: [
      'Clean tabular numerical displays for precision meteorological figures',
      'Dark mode interface with contextual weather state graphics',
    ],
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Architecture',
    description: 'Creating accessible, resilient, and performant user interfaces.',
    skills: [
      { name: 'React & React 19', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Next.js (App Router)', level: 'Advanced' },
      { name: 'Tailwind CSS & PostCSS', level: 'Expert' },
      { name: 'Vue.js 3 & Pinia', level: 'Advanced' },
      { name: 'HTML5 & Semantic Web', level: 'Expert' },
      { name: 'CSS3 / Modern CSS Grid & Flexbox', level: 'Expert' },
      { name: 'State Management (Zustand, React Query)', level: 'Advanced' },
    ],
  },
  {
    title: 'Backend & Data Layer',
    description: 'Designing clean API endpoints and resilient database models.',
    skills: [
      { name: 'Node.js Runtime', level: 'Advanced' },
      { name: 'Express.js', level: 'Advanced' },
      { name: 'Supabase & PostgreSQL', level: 'Advanced' },
      { name: 'RESTful API Architecture', level: 'Advanced' },
      { name: 'Drizzle ORM & Prisma', level: 'Advanced' },
      { name: 'Authentication (Supabase Auth / JWT)', level: 'Advanced' },
    ],
  },
  {
    title: 'AI & Full-Stack Integrations',
    description: 'Integrating modern AI models and cloud services into production apps.',
    skills: [
      { name: 'Google Gemini AI SDK (@google/genai)', level: 'Advanced' },
      { name: 'Prompt Engineering & Grounding', level: 'Advanced' },
      { name: 'Resend & Nodemailer Email APIs', level: 'Advanced' },
      { name: 'Vercel & Cloud Deployments', level: 'Expert' },
      { name: 'Git & GitHub Workflows', level: 'Expert' },
    ],
  },
  {
    title: 'Design Systems & UI Engineering',
    description: 'Bridging design intent and production-grade engineering.',
    skills: [
      { name: 'Component System Design', level: 'Expert' },
      { name: 'WCAG 2.1 AA Accessibility', level: 'Advanced' },
      { name: 'Radix UI & Headless Primitives', level: 'Advanced' },
      { name: 'Framer Motion & CSS Transitions', level: 'Advanced' },
      { name: 'Responsive Mobile-First Layouts', level: 'Expert' },
      { name: 'Typography & Visual Hierarchy', level: 'Expert' },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Full-Stack / Frontend Developer',
    company: 'Independent Engineering & Client Solutions',
    location: 'Remote',
    period: '2023 — Present',
    type: 'Freelance',
    description:
      'Partnering with founders, startups, and clients to architect, build, and deploy production-grade web applications, e-commerce platforms, AI tools, and custom UI systems.',
    achievements: [
      'Architected and deployed full-stack web platforms including Crime Analysis System, DeepGuard AI, and El-Deo Gadgets on Vercel and Supabase',
      'Integrated Google Gemini AI for automated pattern recognition, threat intelligence, and creator workflow generation',
      'Engineered headless e-commerce storefronts with sub-second page loads, real-time inventory management, and automated email dispatches',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Vue 3', 'Supabase', 'Gemini AI', 'Tailwind CSS', 'Vercel'],
  },
  {
    id: 'exp-2',
    role: 'Frontend Developer',
    company: 'Web Application Development',
    location: 'Lagos, Nigeria',
    period: '2022 — 2023',
    type: 'Full-Time',
    description:
      'Focused on translating complex product workflows and UI specifications into responsive, accessible web interfaces across React, Next.js, and modern styling architectures.',
    achievements: [
      'Established modular component primitives and design token systems that accelerated feature turnaround times',
      'Implemented robust client-side validation, caching layers, and responsive mobile-first layouts',
      'Maintained consistent 95+ Google Lighthouse scores across performance and accessibility audits',
    ],
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'REST APIs', 'Git'],
  },
];

export const services: ServiceItem[] = [
  {
    id: 'srv-1',
    number: '01',
    title: 'Custom Web & AI Applications',
    tagline: 'End-to-end full-stack web products built for reliability, intelligence, and speed.',
    description:
      'Tailored web applications designed to solve real business challenges. From interactive analytics dashboards to AI-powered intelligence tools with Supabase and Gemini AI.',
    deliverables: [
      'Full TypeScript architecture (Frontend + Backend)',
      'Supabase / PostgreSQL database modeling and authentication',
      'Google Gemini AI API integrations & prompt pipelines',
      'Automated error handling, loading states & offline resilience',
      'Production deployment to Vercel with CI/CD',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Supabase', 'Gemini AI', 'Tailwind CSS'],
    idealFor: 'Startups, businesses, and founders building modern SaaS or AI-enabled tools.',
  },
  {
    id: 'srv-2',
    number: '02',
    title: 'High-Impact Business Websites',
    tagline: 'Fast, responsive marketing sites that convert visitors into clients.',
    description:
      'Bespoke marketing websites that communicate your brand with clarity, precision typography, and flawless responsiveness across phones, tablets, and desktop displays.',
    deliverables: [
      'Custom responsive layout & typography scale',
      'Sub-second initial page load & 95+ Lighthouse score',
      'Search engine optimization (SEO) & Open Graph meta',
      'Interactive contact and lead capture mechanisms',
      'Clean documentation and zero-downtime Vercel deployment',
    ],
    technologies: ['React / Next.js', 'Tailwind CSS', 'TypeScript'],
    idealFor: 'Businesses, consultancies, agencies, and founders launching new initiatives.',
  },
  {
    id: 'srv-3',
    number: '03',
    title: 'Design System & UI Component Engineering',
    tagline: 'Bridging the gap between Figma designs and maintainable code.',
    description:
      'Translating design languages into modular, accessible, reusable React/Next.js component systems that your engineering team can rely on.',
    deliverables: [
      'Atomic component library (Buttons, Modals, Tables, Forms)',
      'Full keyboard accessibility (WCAG AA compliant)',
      'Consistent spacing, color token, and radius scales',
      'Dark/Light mode theme switching infrastructure',
      'Component documentation & prop typing',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI Primitives'],
    idealFor: 'Growing tech teams needing consistent, high-velocity UI building blocks.',
  },
  {
    id: 'srv-4',
    number: '04',
    title: 'E-Commerce & Retail Storefronts',
    tagline: 'Bespoke online shopping experiences optimized for conversion.',
    description:
      'Custom storefronts with seamless product catalogs, instant cart interactions, inventory synchronization, and automated transactional emails.',
    deliverables: [
      'Interactive product catalog & faceted filtering',
      'Instant slide-out cart & checkout flow',
      'Supabase inventory database and order management',
      'Resend / transactional email integration',
    ],
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Resend', 'Tailwind CSS'],
    idealFor: 'Direct-to-consumer brands and specialized retail businesses.',
  },
];

export const process = [
  {
    number: '01',
    title: 'Discover & Align',
    text: 'We clarify your core objectives, audience expectations, key workflows, and technical constraints to establish a clear roadmap before writing a single line of code.',
  },
  {
    number: '02',
    title: 'Structure & Design System',
    text: 'We establish the information architecture, typography hierarchy, component primitives, and data contracts to ensure a cohesive, accessible experience.',
  },
  {
    number: '03',
    title: 'Build & Iterate',
    text: 'I develop in visible, testable increments with clean TypeScript, robust error boundaries, responsive testing on real devices, and continuous communication.',
  },
  {
    number: '04',
    title: 'Refine, Launch & Support',
    text: 'Thorough QA across Lighthouse audits, cross-browser compatibility, SEO metadata, and production deployment on Vercel, followed by smooth handoff.',
  },
] as const;

export type GitHubRepository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  pushed_at: string | null;
  fork: boolean;
  archived: boolean;
  topics?: string[];
  homepage?: string | null;
};

export type GitHubProfile = {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
};
