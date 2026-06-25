export type BlogCategory =
  | 'seo-aeo'
  | 'hr-automation'
  | 'finance-automation'
  | 'sales-crm'
  | 'operations'
  | 'marketing'
  | 'productivity';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  keywords: string[];
  relatedToolSlugs: string[];
  relatedPostSlugs: string[];
  faqItems: FaqItem[];
  content: string;
}

export const blogCategoryLabels: Record<BlogCategory, string> = {
  'seo-aeo': 'SEO & AI Search',
  'hr-automation': 'HR & People Ops',
  'finance-automation': 'Finance & Billing',
  'sales-crm': 'Sales & CRM',
  'operations': 'Operations',
  'marketing': 'Marketing',
  'productivity': 'Productivity',
};

export const blogCategoryBadgeClass: Record<BlogCategory, string> = {
  'seo-aeo': 'badge-marketing',
  'hr-automation': 'badge-hr',
  'finance-automation': 'badge-finance',
  'sales-crm': 'badge-sales',
  'operations': 'badge-operations',
  'marketing': 'badge-marketing',
  'productivity': 'badge-productivity',
};

export function formatPostDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
