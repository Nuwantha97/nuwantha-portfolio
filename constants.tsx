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
  summary: "Software Engineer specializing in full-stack web development and AI/ML applications, with hands-on experience in Angular, React, Node.js, Python, and machine learning model development.",
  aboutLong: `I am a Computer Engineering graduate from the University of Jaffna with a strong passion for building intelligent systems. 

During my internship at the Sri Lanka Ports Authority (MPMA), I honed my full-stack development skills by building robust management systems. My academic journey sparked a deep interest in Artificial Intelligence, specifically Natural Language Processing (NLP) and medical ML applications like TB diagnosis.

I thrive at the intersection of research and industry application bridging the gap between complex ML models and user-friendly software solutions. I am a fast learner, an analytical problem solver, and eager to contribute to cutting-edge tech teams.`,
  email: "nuwanthasiriwardhana@gmail.com",
  phone: "+94 71 617 2257",
  github: "https://github.com/Nuwantha97",
  linkedin: "https://www.linkedin.com/in/nuwantha-siriwardhana-1291131a4/"
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
    techStack: ["Python", "LangChain", "LangGraph", "Groq API"],
    image: "https://static.locofy.ai/assets/solutions/ai-app-builder/hero-image.png",
    github: "https://github.com/Nuwantha97/App-Builder"
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
    image: "data:image/png;base64,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",
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
    image: "data:image/png;base64,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",
    //link: "#"
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
    techStack: ["Python", "Transformers", "Hugging Face", "Tensorflow", "Keras"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTllPNSxqOeVB0MfYmZJM7M4h7g3L1wfUSBVQ&s",
    github: "https://github.com/Nuwantha97/Sinhala_spell_and_grammer_checker"
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
    image: "https://www.sonoff.in/web/image/product.image/930/image_1024/sonoffindianextionmeeting0585L2KK.jpg?unique=213b06e",
    github: "https://github.com/Nuwantha97/Comlab-Booking-System"
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVQEWpZ_1MYddtm-bwut0zMVhIcSFo0J2vww&s",
    github: "https://github.com/OpenUOM/capstone-project-assignment-Nuwantha97"
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