import { LucideIcon } from 'lucide-react';

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
  price: string;
  category: string;
  icon: LucideIcon;
  color: string;
  hoverColor: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  content: string;
  description: string;
  href: string;
  color?: string;
}

export interface Stat {
  icon: LucideIcon;
  number: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
  bgColor: string;
}

export interface Achievement {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  position: string;
  experience: string;
  image: string;
}

export interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface MenuItem {
  name: string;
  href: string;
}

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  time: string;
}
