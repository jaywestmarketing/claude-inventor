import { ToolDoc } from './types';
import { content as crmTrackerContent } from './content/crm-tracker';

export const docs: ToolDoc[] = [
  {
    slug: 'crm-tracker',
    toolName: 'CRMTracker',
    toolSlug: 'crm-tracker',
    category: 'sales',
    tagline: 'Free sales pipeline and CRM tracker for small business teams',
    metaTitle: 'CRMTracker Documentation | How to Use CRMTracker | AutomateStack',
    metaDescription: 'Step-by-step guide to CRMTracker: set up your sales pipeline, manage contacts, log activities, set follow-up reminders, and analyze win/loss data. Free CRM for small business teams.',
    publishedAt: '2026-05-25',
    updatedAt: '2026-05-25',
    readingTimeMinutes: 8,
    keywords: [
      'how to use CRMTracker',
      'CRMTracker documentation',
      'free CRM for small business setup guide',
      'sales pipeline tracker tutorial',
      'CRM setup small business',
      'how to track sales pipeline',
      'free sales CRM tutorial',
      'Kanban sales pipeline guide',
      'contact management small business',
      'CRM activity logging',
      'follow-up reminders CRM',
      'win loss analysis CRM',
      'HubSpot alternative free',
      'Salesforce alternative small business',
      'Pipedrive alternative',
      'CRMTracker getting started',
      'sales pipeline setup guide',
      'free CRM without per seat pricing',
      'small business CRM tutorial 2026',
      'how to manage sales deals',
    ],
    relatedToolSlugs: ['commission-calc', 'proposal-pro', 'contract-gen'],
    relatedDocSlugs: [],
    relatedPostSlugs: ['best-free-crm-small-business-2026'],
    faqItems: [
      {
        question: 'How do I move a deal between pipeline stages?',
        answer: 'Drag the deal card from its current column to the destination column on the Kanban board. CRMTracker automatically logs the stage change with a timestamp. You can also open the deal record and change the stage from the dropdown in the deal header.',
      },
      {
        question: 'Can multiple team members work in CRMTracker simultaneously?',
        answer: 'Yes. CRMTracker is designed for shared team use. Deal ownership is assigned per deal, and all team members can view the full pipeline board. Activity logs show who performed each action. Managers can filter by rep to review individual pipelines.',
      },
      {
        question: 'How do I track deals in multiple currencies?',
        answer: 'Set your base currency in Settings → Preferences. Individual deals can be denominated in any currency — CRMTracker stores the original currency and value, and converts to your base currency for pipeline totals using a fixed exchange rate you set.',
      },
      {
        question: 'What is the difference between a contact and a company in CRMTracker?',
        answer: 'Contacts are individual people. Companies are organizations. A contact is always linked to a company record. Multiple contacts can belong to the same company, and all their deal history rolls up to the company record.',
      },
      {
        question: 'How do I export my CRM data if I need to migrate to another platform?',
        answer: 'Go to Settings → Export Data. You can export contacts, companies, deals, activity history, and reminders as separate CSV files or as a combined export. All exports are available immediately on every plan — your data belongs to you.',
      },
    ],
    content: crmTrackerContent,
  },
];

export function getDocBySlug(slug: string): ToolDoc | undefined {
  return docs.find((d) => d.slug === slug);
}

export function getDocsByCategory(category: string): ToolDoc[] {
  return docs.filter((d) => d.category === category);
}

export function getRelatedDocs(doc: ToolDoc, limit = 3): ToolDoc[] {
  return doc.relatedDocSlugs
    .map((slug) => docs.find((d) => d.slug === slug))
    .filter((d): d is ToolDoc => !!d)
    .slice(0, limit);
}
