import netflix1 from './assets/netflix1.jpg'
import netflix2 from './assets/netflix2.jpg'
import netflix3 from './assets/netflix3.jpg'
import netflix4 from './assets/netflix4.jpg'

export const BRAND_NAME = 'Krish Sharda'

export const CONTACT = {
  email: 'krishsharda18@gmail.com',
  phone: '+91 9982411178',
  location: 'Indore, Madhya Pradesh',
  linkedin: 'linkedin.com/in/krish-sharda',
  github: 'github.com/krishsharda',
}

export const DEFAULT_GITHUB_USERNAME = 'krishsharda'

const ENV_GITHUB_TOKEN = (import.meta as any)?.env?.VITE_GITHUB_TOKEN as string | undefined
export const GITHUB_TOKEN = ENV_GITHUB_TOKEN && ENV_GITHUB_TOKEN.trim() ? ENV_GITHUB_TOKEN : ''

export const GITHUB_REPOS_ENDPOINT = GITHUB_TOKEN && GITHUB_TOKEN.trim()
  ? 'https://api.github.com/user/repos?sort=updated&per_page=100&affiliation=owner'
  : `https://api.github.com/users/${encodeURIComponent(DEFAULT_GITHUB_USERNAME)}/repos?sort=updated&per_page=100`

export type QuickProfile = {
  label: string
  href: string
  desc?: string
  avatarUrl?: string
  themeColor?: string
}

export const PROFESSIONAL_SUMMARY =
  'AI Engineer building production-ready Generative AI applications, voice agents, LLM-powered systems, RAG pipelines, FastAPI services, and cloud-deployed AI solutions. Experienced in integrating modern LLM APIs, multimodal vision models, real-time speech and computer-vision pipelines, tool/function calling, vector databases, and scalable backend architectures deployed on Vercel and Google Cloud Run.'

export const QUICK_PROFILES: QuickProfile[] = [
  {
    label: 'Recruiter',
    href: '#',
    desc: 'Recruiter Profile',
    avatarUrl: netflix1,
    themeColor: '#E50914',
  },
  {
    label: 'Developer',
    href: '#',
    desc: 'Developer Profile',
    avatarUrl: netflix2,
    themeColor: '#0074D9',
  },
  {
    label: 'Agent',
    href: '#',
    desc: 'Agent Profile',
    avatarUrl: netflix3,
    themeColor: '#2ECC40',
  },
  {
    label: 'Adventure',
    href: '#',
    desc: 'Adventure Profile',
    avatarUrl: netflix4,
    themeColor: '#B10DC9',
  },
]

export type SkillGroup = {
  category: string
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'JavaScript', 'SQL', 'C++'],
  },
  {
    category: 'Generative AI & LLM APIs',
    items: ['OpenAI API (GPT-4o)', 'Google Gemini API', 'Anthropic Claude API', 'Groq API'],
  },
  {
    category: 'GenAI Tech Stack',
    items: ['Multimodal AI (Vision)', 'Image Generation', 'Upstash Vector', 'Streaming Responses', 'Web Speech API'],
  },
  {
    category: 'Voice AI',
    items: ['ElevenLabs Conversational AI', 'OpenAI Whisper', 'Real-time STT → LLM → TTS Pipelines', 'Streaming Audio'],
  },
  {
    category: 'Agents & Tool Use',
    items: ['Function Calling', 'Tool Calling', 'Agentic Workflows', 'Multi-turn Conversation', 'n8n Automation'],
  },
  {
    category: 'Retrieval',
    items: ['Retrieval-Augmented Generation (RAG)', 'LangChain', 'FAISS', 'Embeddings', 'Document Chunking'],
  },
  {
    category: 'Prompt Engineering',
    items: ['System Prompt Design', 'Few-shot Prompting', 'Structured JSON Outputs'],
  },
  {
    category: 'Cloud',
    items: ['Google Cloud Run', 'Vercel', 'Firebase', 'Firestore', 'Firebase Authentication', 'Firestore Security Rules', 'Docker'],
  },
  {
    category: 'Data & ML',
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib'],
  },
]

export type Certification = {
  name: string
  issuer: string
  year?: string
  issued?: string
  credentialId?: string
  url?: string
  imageUrl?: string
}

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'RAG System Architecture – Implementation',
    issuer: 'Tayana Solutions',
    issued: 'March 2026',
    url: '/certificates/rag-system-architecture.pdf',
    imageUrl: 'https://image.pitchbook.com/Yhl1q5nDmLxPFyIIHccfTrG2DgX1613482347775_200x200',
  },
  {
    name: 'Prompt Engineering',
    issuer: 'Tayana Solutions',
    issued: 'February 2026',
    url: '/certificates/prompt-engineering.pdf',
    imageUrl: 'https://image.pitchbook.com/Yhl1q5nDmLxPFyIIHccfTrG2DgX1613482347775_200x200',
  },
  {
    name: 'Software Engineering Job Simulation',
    issuer: 'Skyscanner',
    issued: 'July 2025',
    imageUrl: 'https://www.pngplay.com/wp-content/uploads/3/Amazon-Web-Services-AWS-Logo-Transparent-PNG.png',
  },
  {
    name: 'Intro to Natural Language Processing',
    issuer: 'NVIDIA',
    issued: 'January 2025',
    imageUrl: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/KF4I2HVIS5OOJJSWS5G2D6PFXQ.jpg',
  },
]

export type Project = {
  id: string
  title: string
  subtitle?: string
  tags?: string[]
  href?: string
  bullets?: string[]
}

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'NEO — Agentic Voice AI Assistant',
    subtitle: 'Voice + RAG + Tool Calling',
    tags: ['OpenAI GPT-4o', 'ElevenLabs', 'Upstash Vector', 'React'],
    bullets: [
      'Built a voice-enabled agentic AI assistant in React using the OpenAI API (GPT-4o) with tool/function calling, streaming responses, and vision support; deployed on Vercel with Node.js serverless functions.',
      'Engineered a RAG pipeline where uploaded documents are chunked, embedded, and indexed in Upstash Vector, then retrieved at answer time through a dedicated knowledge-base search tool.',
      'Integrated agentic tools for web search, live news, URL reading, and image generation, plus a real-time voice loop combining Web Speech API (STT) with ElevenLabs TTS.',
    ],
    href: '#',
  },
  {
    id: 'p2',
    title: 'Hand Gesture Calculator',
    subtitle: 'Real-time computer vision',
    tags: ['MediaPipe Hands', 'JavaScript', 'Browser-only', 'Vercel'],
    bullets: [
      'Built a browser-based calculator that performs arithmetic from hand gestures, using MediaPipe Hands for real-time, fully client-side hand tracking with the camera feed processed on-device for privacy.',
      'Engineered a gesture-to-calculator state machine (finger counting for operands, distinct poses for operators, hold-to-confirm) and split the pure counting/computation logic into a DOM-free, unit-tested module; deployed as a static site on Vercel.',
    ],
    href: '#',
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  summary: string
  bullets?: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    role: 'AI Engineer',
    company: 'Amrera Great Solution Pvt. Ltd., Indore',
    period: 'February 2026 – Present',
    summary: 'Designed and deployed LLM-powered employee onboarding, knowledge retrieval, and streaming voice AI systems on Google Cloud Run.',
    bullets: [
      'Designed and deployed an LLM-powered employee onboarding assistant integrating text and voice interaction over an internal company knowledge base, enabling self-serve information retrieval for HR workflows.',
      'Built a Firestore-backed knowledge system exposed through REST APIs and connected it to the voice agent via LLM tool/function calling for structured business-data retrieval in natural language.',
      'Built and deployed Dockerized FastAPI microservices on Google Cloud Run to serve AI backend services.',
      'Implemented an end-to-end streaming voice pipeline (Whisper STT → Gemini/GPT-4o → ElevenLabs TTS) with multi-turn conversational context handling.',
      'Secured external AI APIs behind a backend proxy architecture and protected application data with Firebase Security Rules.',
    ],
  },
]

export type Education = {
  degree: string
  field: string
  institution: string
  location: string
  period: string
}

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA) — CGPA: 7.9/10',
    field: 'AI & Feature Engineering',
    institution: 'Prestige Institute of Management and Research, Indore',
    location: 'Indore, Madhya Pradesh',
    period: 'August 2024 – 2027',
  },
]

export const SKILLS: string[] = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'LLM/NLP',
  'Google Cloud',
  'TailwindCSS',
  'MongoDB',
  'Scikit-Learn',
  'Git',
  'ML/DL',
]