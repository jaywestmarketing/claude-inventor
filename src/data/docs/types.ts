export type DocCategory =
  | 'hr'
  | 'finance'
  | 'marketing'
  | 'sales'
  | 'operations'
  | 'productivity';

export interface DocFaqItem {
  question: string;
  answer: string;
}

export interface ToolDoc {
  slug: string;
  toolName: string;
  toolSlug: string;
  category: DocCategory;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  keywords: string[];
  relatedToolSlugs: string[];
  relatedDocSlugs: string[];
  relatedPostSlugs: string[];
  faqItems: DocFaqItem[];
  content: string;
}

export const docCategoryLabels: Record<DocCategory, string> = {
  hr: 'HR & People Ops',
  finance: 'Finance & Billing',
  marketing: 'Marketing',
  sales: 'Sales & CRM',
  operations: 'Operations',
  productivity: 'Productivity',
};

export const docCategoryBadgeClass: Record<DocCategory, string> = {
  hr: 'badge-hr',
  finance: 'badge-finance',
  marketing: 'badge-marketing',
  sales: 'badge-sales',
  operations: 'badge-operations',
  productivity: 'badge-productivity',
};
