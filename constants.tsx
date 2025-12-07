import { 
  Code2, 
  Database, 
  BrainCircuit, 
  Wrench, 
  Cpu,
  Globe
} from 'lucide-react';
import { Project, SkillCategory, EducationItem, Certification, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const PROFILE = {
  name: "Nuwantha Siriwardhana",
  title: "AI-driven Software Engineer | Full-Stack Developer | Machine Learning Researcher",
  summary: "Software Engineer specializing in full-stack web development and AI/ML applications, with hands-on experience in React, Node.js, Python, and machine learning model development.",
  aboutLong: `I am a Computer Engineering graduate from the University of Jaffna with a strong passion for building intelligent systems. 

During my internship at the Sri Lanka Ports Authority (MPMA), I honed my full-stack development skills by building robust management systems. My academic journey sparked a deep interest in Artificial Intelligence, specifically Natural Language Processing (NLP) and medical ML applications like TB diagnosis.

I thrive at the intersection of research and industry application—bridging the gap between complex ML models and user-friendly software solutions. I am a fast learner, an analytical problem solver, and eager to contribute to cutting-edge tech teams.`,
  email: "nuwanthasiriwardhana@gmail.com",
  phone: "+94 71 617 2257",
  github: "https://github.com",
  linkedin: "https://linkedin.com"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "C", "C++"],
    icon: Code2
  },
  {
    title: "Web Development",
    skills: ["React", "Next.js", "Angular", "Node.js", "HTML/CSS", "Tailwind CSS"],
    icon: Globe
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    icon: Database
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "LangChain", "Groq Cloud", "NLP"],
    icon: BrainCircuit
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Postman", "Jira", "Figma", "VS Code"],
    icon: Wrench
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI Agent App Builder",
    role: "Sole Developer",
    description: "An advanced multi-agent workflow system capable of generating working codebases from natural language prompts.",
    features: [
      "Multi-agent workflow: Planner → Architect → Coder",
      "Integration with Groq-hosted LLMs",
      "LangChain & LangGraph orchestration"
    ],
    techStack: ["Python", "LangChain", "Groq API", "React", "Node.js"],
    image: "https://picsum.photos/seed/aiagent/600/400",
    github: "#"
  },
  {
    id: "2",
    title: "TB Diagnosis ML Research",
    role: "Researcher & Developer",
    description: "A 3-level hierarchical Machine Learning system for Tuberculosis diagnosis using gene expression data.",
    features: [
      "Hierarchical classification (XGBoost, SVM)",
      "Processed 8 GEO datasets (2,745 samples)",
      "Feature selection: 18,018 genes → 231 key features",
      "Real-time diagnostic tool"
    ],
    techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    image: "https://picsum.photos/seed/tbsearch/600/400",
    github: "#"
  },
  {
    id: "3",
    title: "Trainee Portal System (MPMA)",
    role: "Full-Stack Developer",
    description: "A comprehensive management system for the Sri Lanka Ports Authority to handle trainee lifecycles.",
    features: [
      "Trainee management & attendance tracking",
      "Automated payment calculations",
      "Interview scheduling & email automation (Microsoft Graph)",
      "Performance optimized batch processing"
    ],
    techStack: ["React", "Node.js", "Sequelize", "MySQL"],
    image: "https://picsum.photos/seed/mpma/600/400",
    link: "#"
  },
  {
    id: "4",
    title: "Sinhala Spell & Grammar Checker",
    role: "ML Engineer",
    description: "A hybrid NLP tool combining dictionary-based methods with deep learning for low-resource language processing.",
    features: [
      "XLM-RoBERTa fine-tuning",
      "Custom dataset creation & preprocessing",
      "Hugging Face Trainer API implementation"
    ],
    techStack: ["Python", "Transformers", "Hugging Face", "PyTorch"],
    image: "https://picsum.photos/seed/nlp/600/400",
    github: "#"
  },
  {
    id: "5",
    title: "Computer Lab Booking System",
    role: "Frontend & Backend Developer",
    description: "A resource management system designed to streamline computer lab scheduling and access.",
    features: [
      "Real-time availability checking",
      "Admin dashboard for resource allocation",
      "Custom UI/UX designed in Figma"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Figma"],
    image: "https://picsum.photos/seed/lab/600/400",
    github: "#"
  },
  {
    id: "6",
    title: "School Info Management System",
    role: "Full-Stack Developer",
    description: "An end-to-end information system for managing student records, grades, and teacher schedules.",
    features: [
      "Role-based access control",
      "Report generation",
      "Lightweight database implementation"
    ],
    techStack: ["Angular", "Node.js", "SQLite"],
    image: "https://picsum.photos/seed/school/600/400",
    github: "#"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "University of Jaffna",
    degree: "B.Sc. in Computer Engineering",
    year: "Graduated 2024",
    description: "specializing in Machine Learning and Software Engineering.",
  },
  {
    institution: "Advanced Level Exams",
    degree: "Physical Science Stream",
    description: "Results: B, B, C (Combined Mathematics)",
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Professional Practice in Software Development", issuer: "University of Moratuwa" },
  { name: "Server-Side Web Programming", issuer: "University of Moratuwa" },
  { name: "Front End Web Development", issuer: "University of Moratuwa" },
  { name: "Python Programming", issuer: "University of Moratuwa" },
  { name: "Web Design for Beginners", issuer: "University of Moratuwa" }
];