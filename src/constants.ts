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
  'Aspiring Generative AI engineer with practical experience in voice assistants, retrieval systems, and workflow automation tools. I enjoy turning ideas into simple, reliable solutions using Python, APIs, and modern development tools. I learn quickly, work well with real-world problems, and like building products that are genuinely useful.'

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
    category: 'Languages',
    items: ['Python', 'SQL', 'C++'],
  },
  {
    category: 'Libraries & Frameworks',
    items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'FastAPI', 'LangChain'],
  },
  {
    category: 'AI / GenAI Tools',
    items: ['OpenAI API', 'Groq API', 'n8n', 'ElevenLabs', 'Whisper', 'Claude', 'ChatGPT', 'Prompt Engineering', 'RAG', 'NLP'],
  },
  {
    category: 'Platforms',
    items: ['Jupyter Notebook', 'VS Code', 'Google Colab'],
  },
  {
    category: 'Infrastructure & Tools',
    items: ['Git', 'Docker', 'Google Cloud', 'Firebase', 'REST API', 'Microservices', 'CI/CD', 'Vector DB (FAISS)'],
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
    name: 'Prompt Engineering',
    issuer: 'Tayana Solutions',
    issued: 'Jan 2026',
    credentialId: 'ORN20266K0CVVRPDR',
    url: '/certificates/prompt-engineering.pdf',
    imageUrl: 'https://image.pitchbook.com/Yhl1q5nDmLxPFyIIHccfTrG2DgX1613482347775_200x200',
  },
  {
    name: 'RAG System Architecture – Implementation',
    issuer: 'Tayana Solutions',
    issued: 'March 24, 2026',
    credentialId: 'ORN2026GXQNOATEBU',
    url: '/certificates/rag-system-architecture.pdf',
    imageUrl: 'https://image.pitchbook.com/Yhl1q5nDmLxPFyIIHccfTrG2DgX1613482347775_200x200',
  },
  {
    name: 'AWS - Solutions Architecture Job Simulation',
    issuer: 'Amazon',
    issued: 'Oct 2025',
    credentialId: 'taMzACPyDeD7H9D34',
    url: 'https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_icGdd86zKheeZvNjk_1759406898865_completion_certificate.pdf',
    imageUrl: 'https://www.pngplay.com/wp-content/uploads/3/Amazon-Web-Services-AWS-Logo-Transparent-PNG.png',
  },
  {
    name: 'Walmart USA - Advanced Software Engineering Job Simulation',
    issuer: 'Walmart',
    issued: 'Oct 2025',
    credentialId: 'bwJRXQTWCTEmunkER',
    url: 'https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_icGdd86zKheeZvNjk_1759406547933_completion_certificate.pdf',
    imageUrl: 'https://1000logos.net/wp-content/uploads/2017/05/Walmart-Logo.png',
  },
  {
    name: 'Introduction to Transformer-Based Natural Language Processing',
    issuer: 'NVIDIA',
    issued: 'Jan 2025',
    credentialId: 'He2KfYSaRj28w6FgPx1',
    url: 'https://learn.nvidia.com/certificates?id=ol3oo-CARPKTv7BNuSkCuA',
    imageUrl: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/KF4I2HVIS5OOJJSWS5G2D6PFXQ.jpg',
  },
  {
    name: 'Skyscanner - Software Engineering Job Simulation',
    issuer: 'Forage',
    issued: 'Jul 2025',
    credentialId: 'gga4TGon9tdMr4QMz',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/skoQmxqhtgWmKv2pm/p3xGFkpdot5H8NBih_skoQmxqhtgWmKv2pm_EL5bfFiNJwWP3buTP_1751882707092_completion_certificate.pdf',
    imageUrl: 'http://iconwerk.com/images/bildschirmfoto%202022-10-30%20um%20153028_2x.png?crc=396208396',
  },
  {
    name: 'Quantium - Data Analytics Job Simulation',
    issuer: 'Quantium',
    issued: 'May 2025',
    credentialId: 'LycrH2mDykBzvbbeT',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/32A6DqtsbF7LbKdcq/NkaC7knWtjSbi6aYv_32A6DqtsbF7LbKdcq_icGdd86zKheeZvNjk_1746956229658_completion_certificate.pdf',
    imageUrl: 'https://quantium.com/wp-content/uploads/2021/06/Quantium-Stacked-150ppi.png',
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
    title: 'JARVIS — Multi-Modal AI Support Agent',
    subtitle: 'Voice + RAG + LLM',
    tags: ['Groq API', 'ElevenLabs', 'FAISS', 'LangChain'],
    bullets: [
      'Built a real-time voice AI chatbot using Groq API for ultra-low-latency LLM responses and ElevenLabs for natural-sounding TTS output, achieving sub-second end-to-end response latency.',
      'Built a RAG pipeline using FAISS + LangChain over a 500-document knowledge base, reducing hallucination rate by ~60% and cutting irrelevant responses from 35% to under 8%.',
      'Engineered a modular Python architecture supporting multi-turn dialogue with CI/CD-ready structure, enabling rapid iteration and production-grade reliability.',
    ],
    href: '#',
  },
  {
    id: 'p2',
    title: 'Voice Agentic AI System',
    subtitle: 'Production voice AI platform',
    tags: ['Gemini', 'ChatGPT', 'REST API', 'Microservices'],
    bullets: [
      'Developed a production-grade voice AI agent with Gemini/ChatGPT as the reasoning engine, dynamically resolving 200+ user query types from a structured knowledge base via REST API.',
      'Implemented full STT/TTS integration and multi-turn dialogue handling, suitable for real-world customer-facing deployment with microservices architecture.',
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
    role: 'AI Engineer Intern',
    company: 'Amrera Great Solution Pvt. Ltd., Indore',
    period: 'February 2026 – Present',
    summary: 'Designed and deployed AI-powered employee onboarding, knowledge retrieval, and conversational automation systems.',
    bullets: [
      'Designed and deployed an AI-powered employee onboarding module using LLM chatbots and voice agents, enabling self-serve knowledge retrieval and reducing manual HR dependency by ~35%.',
      'Built a Firebase-backed company knowledge base integrated with a voice agentic AI system, allowing customers to query structured business data in real time via natural language REST API endpoints.',
      'Deployed 3 microservices on Google Cloud Run handling 500+ daily API requests, achieving 99.8% uptime and reducing average response latency by 40% vs. prior monolithic architecture.',
      'Engineered end-to-end STT → LLM → TTS pipelines (Whisper + Gemini/ChatGPT + ElevenLabs), delivering a fully functional, human-like conversational AI product ready for production deployment.',
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
    period: 'August 2024 – Present',
  },
  {
    degree: 'Higher Secondary Certificate (HSC) — Class XII, Commerce | Score: 79.6%',
    field: 'Commerce',
    institution: 'Kendriya Vidyalaya (KV)',
    location: 'CBSE',
    period: 'March 2022 – April 2024',
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