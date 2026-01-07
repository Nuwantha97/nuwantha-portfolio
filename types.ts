import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  features: string[];
  techStack: string[];
  link?: string;
  github?: string;
  image: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface EducationItem {
  institution: string;
  degree: string;
  year?: string;
  description?: string;
  logo?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface NavItem {
  label: string;
  href: string;
}