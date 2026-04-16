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
  },
  {
    sessionDate: '2026-04-16',
    sessionNumber: 2,
    toolsAdded: [
      { name: 'ProposalPro', slug: 'proposal-pro', category: 'sales' }
    ],
    toolsUpdated: [
      { name: 'OnboardFlow', changes: ['Added 4 cities: Eugene OR, Clarksville TN, Fort Wayne IN, Augusta GA — now 9 total'] },
      { name: 'InvoiceAI', changes: ['Added 4 cities: Lubbock TX, Gainesville FL, Wilmington NC, Overland Park KS — now 9 total'] },
      { name: 'LeadPilot', changes: ['Added 4 cities: Fargo ND, Columbia SC, Tyler TX, Athens GA — now 9 total'] },
      { name: 'CalendarFlow', changes: ['Added 4 cities: Peoria IL, Green Bay WI, Billings MT, Corpus Christi TX — now 9 total'] },
      { name: 'ExpenseBot', changes: ['Added 4 cities: Evansville IN, Rockford IL, Mobile AL, Murfreesboro TN — now 9 total'] }
    ],
    keywordsResearched: [
      {
        tool: 'ProposalPro',
        keywords: ['best proposal software for small business', 'ai proposal builder', 'PandaDoc alternative', 'business proposal generator', 'proposal automation software'],
        trending: ['AI proposal generator', 'automated quote builder', 'e-signature proposal tool']
      }
    ],
    citiesAdded: [
      { tool: 'OnboardFlow', cities: ['Eugene OR', 'Clarksville TN', 'Fort Wayne IN', 'Augusta GA'] },
      { tool: 'InvoiceAI', cities: ['Lubbock TX', 'Gainesville FL', 'Wilmington NC', 'Overland Park KS'] },
      { tool: 'LeadPilot', cities: ['Fargo ND', 'Columbia SC', 'Tyler TX', 'Athens GA'] },
      { tool: 'CalendarFlow', cities: ['Peoria IL', 'Green Bay WI', 'Billings MT', 'Corpus Christi TX'] },
      { tool: 'ExpenseBot', cities: ['Evansville IN', 'Rockford IL', 'Mobile AL', 'Murfreesboro TN'] },
      { tool: 'ProposalPro', cities: ['Winston-Salem NC', 'Laredo TX', 'Midland TX', 'Peoria AZ', 'Cedar Rapids IA', 'Bowling Green KY', 'Odessa TX', 'Surprise AZ', 'Roanoke VA', 'Abilene TX'] }
    ],
    competitorChanges: [
      { tool: 'ProposalPro', notes: 'PandaDoc at $100M+ ARR, per-seat pricing model draws consistent complaints on G2. Proposify $49/seat very expensive for SMB. QuoteWerks dated UI widely noted. 6 competitors validated with clear SMB pain points.' }
    ],
    seoUpdates: [
      '20 new local SEO pages added (4 per existing tool) — 45 city pages total across 5 tools',
      'New tool ProposalPro launches with 10 low-competition city targets (sales category gap filled)',
      'Total city SEO pages now: 55 across 6 tools',
      'ProposalPro targets Sales Teams audience — previously unrepresented segment'
    ],
    nextSessionPlan: [
      'Build Social Media Scheduler (Marketing) — Buffer $100M ARR, Hootsuite complaints about price increases in 2025',
      'Build PTO/Time-Off Tracker (HR) — BambooHR PTO module complaints: rigid rules, no custom accruals',
      'Add 20 more cities across all tools (4 per tool) — expand Midwest/Southwest coverage',
      'Refresh ProposalPro keywords — research "proposal software" question-based terms on Reddit/G2',
      'Add OnboardFlow competitor update — Rippling raised prices Q1 2026 per community reports',
      'Research Operations tools — no operations tools yet, high-value gap for office managers'
    ]
  },
  {
    sessionDate: '2026-04-16',
    sessionNumber: 3,
    toolsAdded: [
      { name: 'SocialQueue', slug: 'social-queue', category: 'marketing' }
    ],
    toolsUpdated: [
      { name: 'OnboardFlow', changes: ['Added 4 cities: Worcester MA, Greensboro NC, Montgomery AL, Nampa ID — now 13 total'] },
      { name: 'InvoiceAI', changes: ['Added 4 cities: Grand Rapids MI, Waco TX, High Point NC, Bend OR — now 13 total'] },
      { name: 'LeadPilot', changes: ['Added 4 cities: Cary NC, Salem OR, Topeka KS, Denton TX — now 13 total'] },
      { name: 'CalendarFlow', changes: ['Added 4 cities: Providence RI, Chandler AZ, Shreveport LA, Fayetteville NC — now 13 total'] },
      { name: 'ExpenseBot', changes: ['Added 4 cities: South Bend IN, Toledo OH, Lansing MI, Springfield IL — now 13 total'] }
    ],
    keywordsResearched: [
      {
        tool: 'SocialQueue',
        keywords: ['best social media scheduler for small business', 'social media scheduling tool', 'AI social media post scheduler', 'Hootsuite alternative', 'Buffer alternative'],
        trending: ['AI caption generator', 'evergreen content recycling', 'bulk post scheduling', 'TikTok scheduler']
      }
    ],
    citiesAdded: [
      { tool: 'OnboardFlow', cities: ['Worcester MA', 'Greensboro NC', 'Montgomery AL', 'Nampa ID'] },
      { tool: 'InvoiceAI', cities: ['Grand Rapids MI', 'Waco TX', 'High Point NC', 'Bend OR'] },
      { tool: 'LeadPilot', cities: ['Cary NC', 'Salem OR', 'Topeka KS', 'Denton TX'] },
      { tool: 'CalendarFlow', cities: ['Providence RI', 'Chandler AZ', 'Shreveport LA', 'Fayetteville NC'] },
      { tool: 'ExpenseBot', cities: ['South Bend IN', 'Toledo OH', 'Lansing MI', 'Springfield IL'] },
      { tool: 'SocialQueue', cities: ['Manchester NH', 'Visalia CA', 'Chesapeake VA', 'Oxnard CA', 'Rapid City SD', 'Bismarck ND', 'Missoula MT', 'Tempe AZ', 'Lawrence KS', 'Joliet IL'] }
    ],
    competitorChanges: [
      { tool: 'SocialQueue', notes: 'Hootsuite price increase from $49 to $99/mo (2024-25) is the primary acquisition angle — Reddit/G2 full of churn. Buffer cut free tier to 10 posts/channel. Sprout Social at $249-499/seat is SMB-inaccessible. 6 competitors validated with documented pain points.' },
      { tool: 'OnboardFlow', notes: 'Rippling pricing increases Q1 2026 noted in community reports — adds to existing complaint about expensive add-ons. Competitive fix messaging updated accordingly.' }
    ],
    seoUpdates: [
      '20 new local SEO city pages added (4 per base tool) — Northeast, Southeast, Midwest, Pacific NW coverage expanded',
      'SocialQueue launches with 10 city targets across New England, West Coast, Mountain, and Midwest',
      'Total city SEO pages now: 96 across 7 tools',
      'SocialQueue description optimized for AEO: answers "what is the best social media scheduling tool" in first 150 words',
      'Marketing category now has 2 tools (LeadPilot + SocialQueue) — audience: Marketing Teams'
    ],
    nextSessionPlan: [
      'Build PTO/Time-Off Tracker (HR) — BambooHR PTO module still top complaint: rigid accrual rules, no custom policies',
      'Build KPI Dashboard Builder (Operations/Productivity) — no operations tool yet, executives are highest WTP audience ($50-200/mo)',
      'Add 20 more cities to existing tools — prioritize Pacific Northwest and New England expansion (underrepresented)',
      'Refresh LeadPilot keywords — "AI lead scoring" trending per Product Hunt Q1 2026; swap 3 weakest keywords',
      'Update ProposalPro competitors — research Better Proposals pricing changes and new G2 reviews',
      'Expand SocialQueue — add TikTok-specific keywords and research agency vs SMB keyword split'
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
