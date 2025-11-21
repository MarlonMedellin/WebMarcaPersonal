import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Tech' | 'Didactic' | 'Soft';
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}
