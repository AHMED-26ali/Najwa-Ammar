export interface ServiceItem {
  id: string;
  title: string;
  englishTitle: string;
  category: string;
  description: string;
  detailedScope: string[];
  features: string[];
  accentColor: string; // e.g. emerald, amber, blue
  icon: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'branding' | 'social' | 'advertising' | 'printing' | 'marketing' | 'motion' | 'digital';
  categoryLabel: string;
  image: string;
  metric: {
    label: string;
    value: string;
  };
  description: string;
  year: string;
  tags: string[];
  scope: string[];
  clientQuote?: string;
}

export interface StatItem {
  id: string;
  targetNumber: number;
  suffix: string;
  label: string;
  subtext: string;
  icon: string;
  accent: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  avatarBg: string;
  initials: string;
  quote: string;
  rating: number;
  projectType: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  icon: string;
  gradient: string;
}
