/**
 * Session History Tracker
 *
 * This file tracks all changes made by Claude across sessions.
 * Each session adds new tools, updates existing ones, and tracks SEO changes.
 * Claude reads this file at the start of each session to understand context.
 */

export interface SessionEntry {
  sessionDate: string;
  sessionNumber: number;
  toolsAdded: { name: string; slug: string; category: string }[];
  toolsUpdated: { name: string; changes: string[] }[];
  keywordsResearched: { tool: string; keywords: string[]; trending: string[] }[];
  citiesAdded: { tool: string; cities: string[] }[];
  competitorChanges: { tool: string; notes: string }[];
  seoUpdates: string[];
  nextSessionPlan: string[];
}

export const sessionHistory: SessionEntry[] = [
  {
    sessionDate: '2026-03-25',
    sessionNumber: 1,
    toolsAdded: [
      { name: 'OnboardFlow', slug: 'onboard-flow', category: 'hr' },
      { name: 'InvoiceAI', slug: 'invoice-ai', category: 'finance' },
      { name: 'LeadPilot', slug: 'lead-pilot', category: 'marketing' },
      { name: 'CalendarFlow', slug: 'calendar-flow', category: 'productivity' },
      { name: 'ExpenseBot', slug: 'expense-bot', category: 'finance' },
    ],
    toolsUpdated: [],
    keywordsResearched: [
      {
        tool: 'OnboardFlow',
        keywords: ['employee onboarding software', 'onboarding automation tool', 'new hire onboarding checklist'],
        trending: ['remote onboarding software', 'AI onboarding assistant']
      },
      {
        tool: 'InvoiceAI',
        keywords: ['free invoice generator', 'invoice software for small business', 'AI invoice creator'],
        trending: ['AI invoice generator', 'automated billing system']
      },
      {
        tool: 'LeadPilot',
        keywords: ['lead capture software', 'lead generation tool', 'lead scoring software'],
        trending: ['AI lead scoring', 'automated lead nurturing']
      },
      {
        tool: 'CalendarFlow',
        keywords: ['meeting scheduler software', 'appointment scheduling tool', 'Calendly alternative'],
        trending: ['AI scheduling assistant', 'smart calendar app']
      },
      {
        tool: 'ExpenseBot',
        keywords: ['expense report software', 'receipt scanning app', 'Expensify alternative'],
        trending: ['AI receipt scanner', 'automated expense categorization']
      }
    ],
    citiesAdded: [
      { tool: 'OnboardFlow', cities: ['Boise ID', 'Chattanooga TN', 'Fayetteville AR', 'Huntsville AL', 'Spokane WA'] },
      { tool: 'InvoiceAI', cities: ['Provo UT', 'Asheville NC', 'Sioux Falls SD', 'Springfield MO', 'Tallahassee FL'] },
      { tool: 'LeadPilot', cities: ['Durham NC', 'Gilbert AZ', 'Knoxville TN', 'Lexington KY', 'Reno NV'] },
      { tool: 'CalendarFlow', cities: ['Madison WI', 'Fort Collins CO', 'Savannah GA', 'Greenville SC', 'Boca Raton FL'] },
      { tool: 'ExpenseBot', cities: ['Baton Rouge LA', 'Des Moines IA', 'Little Rock AR', 'Akron OH', 'Dayton OH'] }
    ],
    competitorChanges: [
      { tool: 'OnboardFlow', notes: 'BambooHR ($6-9/emp/mo), Gusto, Rippling, Sapling, Workday all validated >$5K/mo revenue. Top complaints: expensive, complex setup, limited customization.' },
      { tool: 'InvoiceAI', notes: 'FreshBooks ($17-55/mo), QuickBooks ($30-200/mo), Wave (free), Zoho Invoice, Invoice Ninja. Top complaints: bloated features, steep learning curves, unreliable support.' },
      { tool: 'LeadPilot', notes: 'HubSpot ($20-800+/mo), Leadpages, OptinMonster, ActiveCampaign, Drift. Top complaints: expensive at scale, fragmented tools, complex setup.' },
      { tool: 'CalendarFlow', notes: 'Calendly ($0-16/seat/mo), Cal.com, Acuity, SavvyCal, YouCanBookMe. Top complaints: limited free tiers, per-seat pricing, basic customization.' },
      { tool: 'ExpenseBot', notes: 'Expensify ($5-18/user/mo), SAP Concur, Brex, Ramp, Abacus. Top complaints: unreliable OCR, card requirements, outdated UIs.' }
    ],
    seoUpdates: [
      'Initial site setup with Next.js App Router for optimal Core Web Vitals',
      'Added Schema.org structured data: WebApplication, Organization, FAQPage, SoftwareApplication',
      'Created dynamic sitemap.xml with all tool pages',
      'Configured robots.txt to allow all AI crawlers (GPTBot, PerplexityBot, Anthropic, Google-Extended)',
      'Added OpenGraph and Twitter Card meta tags for social sharing',
      'Implemented semantic HTML with proper heading hierarchy',
      'Added FAQ section for AEO/GEO featured snippet targeting',
      'Local SEO: 25 low-competition cities across 5 tools (5 per tool)',
      'Keyword targeting: 100 keywords across 5 tools (20 per tool)'
    ],
    nextSessionPlan: [
      'Add 5 new tools: PTO/Time-Off Tracker, Proposal Generator, Social Media Scheduler, Payroll Calculator, Helpdesk Ticketing',
      'Research trending keywords for all 10 tools',
      'Add 5 new cities per existing tool (expanding to 10 cities each)',
      'Check competitor pricing changes and new features',
      'Add blog/content section for long-tail keyword targeting',
      'Implement BingSiteAuth and IndexNow for faster Bing indexing',
      'Add city-specific landing pages for top-performing tools'
    ]
  }
];

/**
 * INSTRUCTIONS FOR NEXT SESSION:
 *
 * 1. Read this file to understand all previous work
 * 2. Check tools.ts for current tool inventory
 * 3. Research new trending tools in the pipeline
 * 4. Update existing tools with new keywords/cities/competitor data
 * 5. Add new tools based on nextSessionPlan
 * 6. Update this file with new session entry
 * 7. Check GitHub for any external updates made between sessions
 */
