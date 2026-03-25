export interface Tool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'hr' | 'finance' | 'marketing' | 'sales' | 'operations' | 'productivity';
  status: 'demo' | 'waitlist' | 'live';
  icon: string;
  features: string[];
  keywords: string[];
  competitors: Competitor[];
  competitorFixes: string[];
  targetCities: CityTarget[];
  dateAdded: string;
  waitlistCount: number;
  slug: string;
}

export interface Competitor {
  name: string;
  priceRange: string;
  topComplaint: string;
}

export interface CityTarget {
  city: string;
  state: string;
  population: string;
  competitionLevel: 'low' | 'medium';
}

export interface SessionLog {
  date: string;
  toolsAdded: string[];
  toolsUpdated: string[];
  keywordChanges: { tool: string; added: string[]; removed: string[] }[];
  citiesTargeted: { tool: string; cities: string[] }[];
  researchNotes: string;
}

export const tools: Tool[] = [
  {
    id: 'employee-onboarding-tracker',
    name: 'OnboardFlow',
    tagline: 'Automate employee onboarding from offer to first day',
    description: 'Streamline your entire employee onboarding process with automated task assignments, document collection, IT provisioning checklists, and new hire portals. Replace spreadsheets and email chains with a centralized onboarding workflow that ensures nothing falls through the cracks.',
    category: 'hr',
    status: 'demo',
    icon: '👤',
    features: [
      'Automated onboarding task sequences',
      'Digital document collection & e-signatures',
      'IT provisioning checklist automation',
      'New hire self-service portal',
      'Manager notification workflows',
      'Compliance tracking & audit trails',
      'Custom onboarding templates by role',
      'Integration-ready API'
    ],
    keywords: [
      'employee onboarding software',
      'onboarding automation tool',
      'new hire onboarding checklist',
      'HR onboarding platform',
      'automated employee onboarding',
      'onboarding workflow software',
      'digital onboarding solution',
      'employee onboarding tracker',
      'onboarding task management',
      'new employee setup automation',
      'HR workflow automation',
      'onboarding compliance tool',
      'small business onboarding software',
      'free onboarding tool',
      'onboarding software for startups',
      'employee onboarding app',
      'remote onboarding software',
      'paperless onboarding',
      'onboarding checklist generator',
      'best onboarding software 2026'
    ],
    competitors: [
      { name: 'BambooHR', priceRange: '$6-$9/employee/mo', topComplaint: 'Limited customization, expensive for small teams, clunky reporting' },
      { name: 'Gusto', priceRange: '$6-$12/employee/mo', topComplaint: 'Slow customer support, limited onboarding workflows, payroll-focused' },
      { name: 'Rippling', priceRange: '$8-$14/employee/mo', topComplaint: 'Complex setup, expensive add-ons, overwhelming UI for simple needs' },
      { name: 'Sapling (Kallidus)', priceRange: '$5-$8/employee/mo', topComplaint: 'Limited integrations, dated UI, slow feature updates' },
      { name: 'Workday', priceRange: 'Enterprise pricing', topComplaint: 'Extremely expensive, requires consultants, overkill for SMBs' }
    ],
    competitorFixes: [
      'Fully customizable workflows without code - drag and drop builder',
      'Instant setup in under 10 minutes, no consultants needed',
      'Transparent flat pricing - no hidden add-on fees',
      'Modern, clean UI designed for non-technical HR managers',
      'Built-in integrations with Slack, Teams, Google Workspace',
      'Responsive support with average <2 hour response time'
    ],
    targetCities: [
      { city: 'Boise', state: 'ID', population: '235,000', competitionLevel: 'low' },
      { city: 'Chattanooga', state: 'TN', population: '182,000', competitionLevel: 'low' },
      { city: 'Fayetteville', state: 'AR', population: '93,000', competitionLevel: 'low' },
      { city: 'Huntsville', state: 'AL', population: '215,000', competitionLevel: 'low' },
      { city: 'Spokane', state: 'WA', population: '228,000', competitionLevel: 'low' }
    ],
    dateAdded: '2026-03-25',
    waitlistCount: 0,
    slug: 'onboard-flow'
  },
  {
    id: 'smart-invoice-generator',
    name: 'InvoiceAI',
    tagline: 'Generate, send, and track invoices with AI-powered automation',
    description: 'Create professional invoices in seconds with smart templates, automated payment reminders, expense categorization, and real-time payment tracking. Built for freelancers, small businesses, and growing teams who need invoicing that just works.',
    category: 'finance',
    status: 'demo',
    icon: '📄',
    features: [
      'AI-powered invoice generation from descriptions',
      'Automated payment reminder sequences',
      'Multi-currency support',
      'Expense categorization & tax prep',
      'Client payment portal',
      'Recurring invoice automation',
      'Late fee calculation',
      'Financial reporting dashboard'
    ],
    keywords: [
      'free invoice generator',
      'invoice software for small business',
      'automated invoicing tool',
      'AI invoice creator',
      'online invoice maker',
      'invoice tracking software',
      'payment reminder automation',
      'freelancer invoice tool',
      'recurring invoice software',
      'invoice management system',
      'best invoicing app 2026',
      'send invoices online free',
      'invoice template generator',
      'small business billing software',
      'automated billing system',
      'invoice and payment tracking',
      'professional invoice creator',
      'cloud invoicing software',
      'invoice automation tool',
      'simple invoice software'
    ],
    competitors: [
      { name: 'FreshBooks', priceRange: '$17-$55/mo', topComplaint: 'Expensive for basic invoicing, limited clients on lower tiers, slow mobile app' },
      { name: 'QuickBooks', priceRange: '$30-$200/mo', topComplaint: 'Bloated with accounting features, steep learning curve, frequent price increases' },
      { name: 'Wave', priceRange: 'Free (paid payments)', topComplaint: 'Limited support, basic features, unreliable payment processing' },
      { name: 'Zoho Invoice', priceRange: 'Free-$29/mo', topComplaint: 'Clunky interface, too many Zoho upsells, limited customization' },
      { name: 'Invoice Ninja', priceRange: 'Free-$14/mo', topComplaint: 'Complex setup, developer-focused, limited template options' }
    ],
    competitorFixes: [
      'Free tier with unlimited clients and invoices',
      'One-click invoice creation from natural language descriptions',
      'Clean, focused UI - invoicing without the accounting bloat',
      'Reliable built-in payment processing with transparent fees',
      'Beautiful, customizable templates without design skills',
      'Instant setup - no accounting knowledge required'
    ],
    targetCities: [
      { city: 'Provo', state: 'UT', population: '115,000', competitionLevel: 'low' },
      { city: 'Asheville', state: 'NC', population: '94,000', competitionLevel: 'low' },
      { city: 'Sioux Falls', state: 'SD', population: '195,000', competitionLevel: 'low' },
      { city: 'Springfield', state: 'MO', population: '169,000', competitionLevel: 'low' },
      { city: 'Tallahassee', state: 'FL', population: '196,000', competitionLevel: 'low' }
    ],
    dateAdded: '2026-03-25',
    waitlistCount: 0,
    slug: 'invoice-ai'
  },
  {
    id: 'lead-capture-automator',
    name: 'LeadPilot',
    tagline: 'Capture, score, and nurture leads on autopilot',
    description: 'Turn website visitors into qualified leads with smart capture forms, AI-powered lead scoring, automated email sequences, and CRM-ready exports. Built for marketing teams and sales professionals who want to stop losing leads.',
    category: 'marketing',
    status: 'demo',
    icon: '🎯',
    features: [
      'Smart lead capture forms & popups',
      'AI-powered lead scoring',
      'Automated email nurture sequences',
      'Website visitor identification',
      'CRM integration & data sync',
      'A/B testing for capture forms',
      'Lead source attribution',
      'Real-time lead notifications'
    ],
    keywords: [
      'lead capture software',
      'lead generation tool',
      'automated lead nurturing',
      'lead scoring software',
      'email lead capture',
      'website lead generation',
      'lead management system',
      'B2B lead generation tool',
      'lead capture form builder',
      'sales lead automation',
      'best lead gen software 2026',
      'free lead capture tool',
      'lead nurturing automation',
      'lead tracking software',
      'small business lead generation',
      'landing page lead capture',
      'lead magnet software',
      'inbound lead management',
      'lead qualification tool',
      'automated lead follow up'
    ],
    competitors: [
      { name: 'HubSpot', priceRange: '$20-$800+/mo', topComplaint: 'Extremely expensive at scale, complex setup, long contracts' },
      { name: 'Leadpages', priceRange: '$37-$74/mo', topComplaint: 'Limited to landing pages, no lead scoring, basic automation' },
      { name: 'OptinMonster', priceRange: '$9-$49/mo', topComplaint: 'Popups only, no nurturing, aggressive upsells, dated templates' },
      { name: 'ActiveCampaign', priceRange: '$29-$149/mo', topComplaint: 'Steep learning curve, email-focused, limited capture forms' },
      { name: 'Drift', priceRange: '$2,500+/mo', topComplaint: 'Enterprise-only pricing, chatbot-focused, overkill for SMBs' }
    ],
    competitorFixes: [
      'All-in-one capture + scoring + nurturing at affordable pricing',
      'Drag-and-drop form builder with modern templates',
      'AI lead scoring that works out of the box - no manual rules',
      'Simple setup in minutes, not days or weeks',
      'Transparent pricing that scales linearly, no enterprise lock-in',
      'Built-in email sequences without needing a separate ESP'
    ],
    targetCities: [
      { city: 'Durham', state: 'NC', population: '283,000', competitionLevel: 'low' },
      { city: 'Gilbert', state: 'AZ', population: '267,000', competitionLevel: 'low' },
      { city: 'Knoxville', state: 'TN', population: '190,000', competitionLevel: 'low' },
      { city: 'Lexington', state: 'KY', population: '322,000', competitionLevel: 'low' },
      { city: 'Reno', state: 'NV', population: '264,000', competitionLevel: 'low' }
    ],
    dateAdded: '2026-03-25',
    waitlistCount: 0,
    slug: 'lead-pilot'
  },
  {
    id: 'meeting-scheduler-pro',
    name: 'CalendarFlow',
    tagline: 'Smart scheduling that eliminates the back-and-forth',
    description: 'Stop wasting time on scheduling emails. CalendarFlow uses AI to find optimal meeting times, handles timezone conversions, sends automated reminders, and integrates with your existing calendar. Perfect for sales teams, recruiters, and busy professionals.',
    category: 'productivity',
    status: 'demo',
    icon: '📅',
    features: [
      'AI-powered optimal time suggestions',
      'Automatic timezone detection',
      'Custom booking page builder',
      'Automated reminder sequences',
      'Round-robin team scheduling',
      'Buffer time management',
      'Calendar conflict prevention',
      'Meeting analytics dashboard'
    ],
    keywords: [
      'meeting scheduler software',
      'appointment scheduling tool',
      'online booking system',
      'calendar scheduling app',
      'automated meeting scheduler',
      'free scheduling tool',
      'team scheduling software',
      'appointment booking software',
      'scheduling link generator',
      'meeting booking page',
      'best scheduling app 2026',
      'Calendly alternative',
      'scheduling automation',
      'client booking system',
      'sales meeting scheduler',
      'recruiter scheduling tool',
      'group scheduling software',
      'timezone scheduling tool',
      'booking page builder',
      'smart calendar assistant'
    ],
    competitors: [
      { name: 'Calendly', priceRange: '$0-$16/seat/mo', topComplaint: 'Limited free tier, expensive for teams, basic customization' },
      { name: 'Cal.com', priceRange: '$0-$15/seat/mo', topComplaint: 'Complex self-hosting, limited support, developer-focused' },
      { name: 'Acuity (Squarespace)', priceRange: '$16-$49/mo', topComplaint: 'Squarespace lock-in, dated UI, limited team features' },
      { name: 'SavvyCal', priceRange: '$12-$20/seat/mo', topComplaint: 'Small team, limited integrations, newer product' },
      { name: 'YouCanBookMe', priceRange: '$10/calendar/mo', topComplaint: 'Per-calendar pricing, basic features, outdated interface' }
    ],
    competitorFixes: [
      'Generous free tier with team scheduling included',
      'AI-powered scheduling that learns preferences over time',
      'Modern, fully customizable booking pages',
      'No per-seat pricing traps - flat team pricing',
      'Works in browser - no app installation required',
      'Built-in video meeting creation (Zoom, Meet, Teams)'
    ],
    targetCities: [
      { city: 'Madison', state: 'WI', population: '269,000', competitionLevel: 'low' },
      { city: 'Fort Collins', state: 'CO', population: '169,000', competitionLevel: 'low' },
      { city: 'Savannah', state: 'GA', population: '147,000', competitionLevel: 'low' },
      { city: 'Greenville', state: 'SC', population: '72,000', competitionLevel: 'low' },
      { city: 'Boca Raton', state: 'FL', population: '99,000', competitionLevel: 'low' }
    ],
    dateAdded: '2026-03-25',
    waitlistCount: 0,
    slug: 'calendar-flow'
  },
  {
    id: 'expense-report-automator',
    name: 'ExpenseBot',
    tagline: 'Snap receipts, auto-categorize, and submit expense reports instantly',
    description: 'Eliminate manual expense reporting with AI receipt scanning, automatic categorization, policy compliance checks, and one-click approvals. Built for office managers, finance teams, and employees who hate expense reports.',
    category: 'finance',
    status: 'demo',
    icon: '🧾',
    features: [
      'AI receipt scanning & data extraction',
      'Automatic expense categorization',
      'Policy compliance auto-checks',
      'One-click approval workflows',
      'Corporate card reconciliation',
      'Mileage tracking',
      'Per diem calculator',
      'Export to accounting software'
    ],
    keywords: [
      'expense report software',
      'receipt scanning app',
      'expense management tool',
      'automated expense reporting',
      'expense tracker for business',
      'corporate expense management',
      'receipt capture software',
      'expense approval workflow',
      'employee expense tool',
      'expense reimbursement software',
      'best expense app 2026',
      'free expense tracker',
      'AI receipt scanner',
      'business expense automation',
      'expense report generator',
      'travel expense software',
      'Expensify alternative',
      'simple expense management',
      'expense policy compliance tool',
      'mileage tracking software'
    ],
    competitors: [
      { name: 'Expensify', priceRange: '$5-$18/user/mo', topComplaint: 'Unreliable OCR scanning, complex pricing, poor customer support' },
      { name: 'SAP Concur', priceRange: '$8-$25+/user/mo', topComplaint: 'Outdated UI, extremely slow, enterprise-only complexity' },
      { name: 'Brex', priceRange: 'Free (card required)', topComplaint: 'Requires Brex card, limited standalone use, startup-focused' },
      { name: 'Ramp', priceRange: 'Free (card required)', topComplaint: 'Card-dependent, limited international support, US-only' },
      { name: 'Abacus', priceRange: '$5-$9/user/mo', topComplaint: 'Limited features, basic reporting, small company' }
    ],
    competitorFixes: [
      'Superior AI receipt scanning with 99%+ accuracy',
      'Works standalone - no corporate card required',
      'Modern, fast interface that loads in under 2 seconds',
      'Instant setup with no IT department needed',
      'Works globally with multi-currency support',
      'Transparent per-user pricing, no hidden fees'
    ],
    targetCities: [
      { city: 'Baton Rouge', state: 'LA', population: '227,000', competitionLevel: 'low' },
      { city: 'Des Moines', state: 'IA', population: '214,000', competitionLevel: 'low' },
      { city: 'Little Rock', state: 'AR', population: '202,000', competitionLevel: 'low' },
      { city: 'Akron', state: 'OH', population: '190,000', competitionLevel: 'low' },
      { city: 'Dayton', state: 'OH', population: '137,000', competitionLevel: 'low' }
    ],
    dateAdded: '2026-03-25',
    waitlistCount: 0,
    slug: 'expense-bot'
  }
];

export const sessionLogs: SessionLog[] = [
  {
    date: '2026-03-25',
    toolsAdded: ['OnboardFlow', 'InvoiceAI', 'LeadPilot', 'CalendarFlow', 'ExpenseBot'],
    toolsUpdated: [],
    keywordChanges: [],
    citiesTargeted: [
      { tool: 'OnboardFlow', cities: ['Boise, ID', 'Chattanooga, TN', 'Fayetteville, AR', 'Huntsville, AL', 'Spokane, WA'] },
      { tool: 'InvoiceAI', cities: ['Provo, UT', 'Asheville, NC', 'Sioux Falls, SD', 'Springfield, MO', 'Tallahassee, FL'] },
      { tool: 'LeadPilot', cities: ['Durham, NC', 'Gilbert, AZ', 'Knoxville, TN', 'Lexington, KY', 'Reno, NV'] },
      { tool: 'CalendarFlow', cities: ['Madison, WI', 'Fort Collins, CO', 'Savannah, GA', 'Greenville, SC', 'Boca Raton, FL'] },
      { tool: 'ExpenseBot', cities: ['Baton Rouge, LA', 'Des Moines, IA', 'Little Rock, AR', 'Akron, OH', 'Dayton, OH'] }
    ],
    researchNotes: 'Session 1: Initial launch with 5 tools targeting high-demand, high-revenue categories. All competitors validated at $5K+/mo revenue. Focused on SMB pain points from negative reviews on G2, Capterra, and Reddit. Selected 25 low-competition cities across different states for local SEO.'
  }
];

export const categoryLabels: Record<Tool['category'], string> = {
  hr: 'Human Resources',
  finance: 'Finance & Billing',
  marketing: 'Marketing',
  sales: 'Sales',
  operations: 'Operations',
  productivity: 'Productivity'
};

export const categoryBadgeClass: Record<Tool['category'], string> = {
  hr: 'badge-hr',
  finance: 'badge-finance',
  marketing: 'badge-marketing',
  sales: 'badge-sales',
  operations: 'badge-operations',
  productivity: 'badge-productivity'
};
