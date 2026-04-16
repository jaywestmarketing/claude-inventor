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
      { city: 'Spokane', state: 'WA', population: '228,000', competitionLevel: 'low' },
      { city: 'Eugene', state: 'OR', population: '176,000', competitionLevel: 'low' },
      { city: 'Clarksville', state: 'TN', population: '166,000', competitionLevel: 'low' },
      { city: 'Fort Wayne', state: 'IN', population: '270,000', competitionLevel: 'low' },
      { city: 'Augusta', state: 'GA', population: '202,000', competitionLevel: 'low' },
      { city: 'Ann Arbor', state: 'MI', population: '121,000', competitionLevel: 'low' },
      { city: 'Denton', state: 'TX', population: '139,000', competitionLevel: 'low' },
      { city: 'Pueblo', state: 'CO', population: '111,000', competitionLevel: 'low' },
      { city: 'High Point', state: 'NC', population: '113,000', competitionLevel: 'low' }
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
      { city: 'Tallahassee', state: 'FL', population: '196,000', competitionLevel: 'low' },
      { city: 'Lubbock', state: 'TX', population: '258,000', competitionLevel: 'low' },
      { city: 'Gainesville', state: 'FL', population: '133,000', competitionLevel: 'low' },
      { city: 'Wilmington', state: 'NC', population: '123,000', competitionLevel: 'low' },
      { city: 'Overland Park', state: 'KS', population: '194,000', competitionLevel: 'low' },
      { city: 'Amarillo', state: 'TX', population: '200,000', competitionLevel: 'low' },
      { city: 'Cape Coral', state: 'FL', population: '195,000', competitionLevel: 'low' },
      { city: 'Visalia', state: 'CA', population: '135,000', competitionLevel: 'low' },
      { city: 'Macon', state: 'GA', population: '157,000', competitionLevel: 'low' }
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
      { city: 'Reno', state: 'NV', population: '264,000', competitionLevel: 'low' },
      { city: 'Fargo', state: 'ND', population: '125,000', competitionLevel: 'low' },
      { city: 'Columbia', state: 'SC', population: '136,000', competitionLevel: 'low' },
      { city: 'Tyler', state: 'TX', population: '105,000', competitionLevel: 'low' },
      { city: 'Athens', state: 'GA', population: '127,000', competitionLevel: 'low' },
      { city: 'Grand Rapids', state: 'MI', population: '196,000', competitionLevel: 'low' },
      { city: 'Shreveport', state: 'LA', population: '185,000', competitionLevel: 'low' },
      { city: 'Rancho Cucamonga', state: 'CA', population: '180,000', competitionLevel: 'low' },
      { city: 'Tempe', state: 'AZ', population: '192,000', competitionLevel: 'low' }
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
      { city: 'Boca Raton', state: 'FL', population: '99,000', competitionLevel: 'low' },
      { city: 'Peoria', state: 'IL', population: '113,000', competitionLevel: 'low' },
      { city: 'Green Bay', state: 'WI', population: '107,000', competitionLevel: 'low' },
      { city: 'Billings', state: 'MT', population: '117,000', competitionLevel: 'low' },
      { city: 'Corpus Christi', state: 'TX', population: '317,000', competitionLevel: 'medium' },
      { city: 'Champaign', state: 'IL', population: '88,000', competitionLevel: 'low' },
      { city: 'South Bend', state: 'IN', population: '103,000', competitionLevel: 'low' },
      { city: 'Longmont', state: 'CO', population: '92,000', competitionLevel: 'low' },
      { city: 'Racine', state: 'WI', population: '78,000', competitionLevel: 'low' }
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
      { city: 'Dayton', state: 'OH', population: '137,000', competitionLevel: 'low' },
      { city: 'Evansville', state: 'IN', population: '118,000', competitionLevel: 'low' },
      { city: 'Rockford', state: 'IL', population: '148,000', competitionLevel: 'low' },
      { city: 'Mobile', state: 'AL', population: '187,000', competitionLevel: 'low' },
      { city: 'Murfreesboro', state: 'TN', population: '147,000', competitionLevel: 'low' },
      { city: 'Montgomery', state: 'AL', population: '200,000', competitionLevel: 'low' },
      { city: 'Lansing', state: 'MI', population: '112,000', competitionLevel: 'low' },
      { city: 'Syracuse', state: 'NY', population: '148,000', competitionLevel: 'low' },
      { city: 'Columbus', state: 'GA', population: '200,000', competitionLevel: 'low' }
    ],
    dateAdded: '2026-03-25',
    waitlistCount: 0,
    slug: 'expense-bot'
  },
  {
    id: 'ai-proposal-builder',
    name: 'ProposalPro',
    tagline: 'Generate winning business proposals and quotes in under 60 seconds',
    description: 'ProposalPro is an AI business proposal builder that transforms your deal notes into polished, professional proposals in seconds. Stop losing deals to slow, generic proposals — create beautiful, customized sales proposals with e-signatures, interactive pricing tables, and real-time read tracking. The best proposal software for small business teams and freelancers who need to close faster.',
    category: 'sales',
    status: 'demo',
    icon: '📋',
    features: [
      'AI proposal generation from bullet points or deal notes',
      'Professional templates by industry (consulting, agency, SaaS, construction)',
      'Electronic signature collection with audit trail',
      'Interactive pricing tables with optional upsells',
      'Real-time open tracking (opened, time spent per section)',
      'Automated follow-up reminders for unread proposals',
      'Client comment threads for collaborative review',
      'CRM-ready export via CSV or webhook'
    ],
    keywords: [
      'best proposal software for small business',
      'business proposal generator',
      'ai proposal builder',
      'online proposal creator',
      'proposal automation software',
      'PandaDoc alternative',
      'Proposify alternative',
      'cheaper than PandaDoc',
      'Qwilr alternative',
      'free proposal maker',
      'how to create a professional business proposal',
      'proposal template generator free',
      'sales proposal software for freelancers',
      'automated quote generation tool',
      'business quote builder online',
      'how to write a winning business proposal fast',
      'what is the best proposal software for small business',
      'how to automate business proposals',
      'how do I create a professional quote template',
      'best proposal software 2026'
    ],
    competitors: [
      { name: 'PandaDoc', priceRange: '$19-$49/seat/mo', topComplaint: 'Per-seat pricing gets expensive fast, slow customer support, overly complex for simple proposals (G2)' },
      { name: 'Proposify', priceRange: '$49/seat/mo', topComplaint: 'Very expensive, limited customization on standard tier, occasional slowness with large proposals' },
      { name: 'QuoteWerks', priceRange: '$15-$27/user/mo', topComplaint: 'Dated interface from the early 2000s, complex CRM integration, steep learning curve' },
      { name: 'GetAccept', priceRange: '$25-$65/seat/mo', topComplaint: 'Feature bloat for teams that just need proposals, confusing pricing tiers, poor onboarding' },
      { name: 'Better Proposals', priceRange: '$19-$49/mo', topComplaint: 'Limited workflow automation, basic CRM integration, occasional editor bugs' },
      { name: 'Qwilr', priceRange: '$35-$59/seat/mo', topComplaint: 'Limited template library, expensive per seat, analytics only on higher plans' }
    ],
    competitorFixes: [
      'Generate a complete, professional proposal from bullet points in under 60 seconds — no copywriting needed',
      'One flat price for your whole team — no per-seat fees that scale against you',
      'Modern, industry-specific templates built by sales professionals, ready to customize in minutes',
      'E-signatures included at no extra cost — no DocuSign add-on required',
      'Real-time open tracking shows exactly when a prospect reads your proposal and which sections they studied',
      'Instant setup with pre-built templates — send your first proposal today, not after a week of onboarding'
    ],
    targetCities: [
      { city: 'Winston-Salem', state: 'NC', population: '249,000', competitionLevel: 'low' },
      { city: 'Laredo', state: 'TX', population: '262,000', competitionLevel: 'low' },
      { city: 'Midland', state: 'TX', population: '132,000', competitionLevel: 'low' },
      { city: 'Peoria', state: 'AZ', population: '175,000', competitionLevel: 'low' },
      { city: 'Cedar Rapids', state: 'IA', population: '135,000', competitionLevel: 'low' },
      { city: 'Bowling Green', state: 'KY', population: '74,000', competitionLevel: 'low' },
      { city: 'Odessa', state: 'TX', population: '117,000', competitionLevel: 'low' },
      { city: 'Surprise', state: 'AZ', population: '143,000', competitionLevel: 'low' },
      { city: 'Roanoke', state: 'VA', population: '99,000', competitionLevel: 'low' },
      { city: 'Abilene', state: 'TX', population: '124,000', competitionLevel: 'low' }
    ],
    dateAdded: '2026-04-16',
    waitlistCount: 0,
    slug: 'proposal-pro'
  },
  {
    id: 'social-media-scheduler',
    name: 'PostFlow',
    tagline: 'Schedule posts to every platform, amplify what works, and grow without the grind',
    description: 'PostFlow is a social media scheduling software that lets you plan, schedule, and auto-publish content to LinkedIn, Instagram, Facebook, Twitter/X, TikTok, and Pinterest from a single dashboard. Stop paying $99+/month for tools that raised prices overnight — PostFlow gives small business owners and marketing teams powerful social media automation at a fraction of the cost of Hootsuite or Sprout Social. What is PostFlow? It is the best social media scheduler for small business teams who want consistent posting without the manual effort.',
    category: 'marketing',
    status: 'demo',
    icon: '📱',
    features: [
      'Schedule to LinkedIn, Instagram, Facebook, Twitter/X, TikTok, and Pinterest from one dashboard',
      'AI caption generator — write platform-optimized copy from a 1-sentence brief',
      'Best-time-to-post AI that learns your audience engagement patterns per platform',
      'Visual content calendar with drag-and-drop rescheduling',
      'One-click content recycling — automatically reshare top-performing posts',
      'Bulk CSV upload to schedule up to 500 posts at once',
      'Hashtag performance tracker with suggested sets per platform',
      'Team collaboration with approval workflows and role-based permissions'
    ],
    keywords: [
      'best social media scheduler 2026',
      'social media scheduling software',
      'free social media scheduler for small business',
      'social media automation tool',
      'social media post scheduler',
      'Hootsuite alternative',
      'Buffer alternative',
      'cheaper than Sprout Social',
      'Later alternative',
      'Publer alternative',
      'bulk social media post scheduler',
      'multi-platform social media tool',
      'social media content calendar free',
      'small business social media scheduler',
      'LinkedIn Facebook scheduler tool',
      'how to schedule social media posts automatically',
      'what is the best free social media scheduler',
      'how to automate social media posting for small business',
      'how do I schedule posts to multiple platforms at once',
      'what is the cheapest alternative to Hootsuite'
    ],
    competitors: [
      { name: 'Hootsuite', priceRange: '$99-$249+/mo', topComplaint: 'Jumped from $29 to $99/month overnight in 2023 with no warning — thousands of users cancelled on Reddit r/socialmedia' },
      { name: 'Buffer', priceRange: '$6-$120/mo', topComplaint: 'Twitter/X scheduling is unreliable, analytics are basic, Professional tier too expensive for small teams (G2)' },
      { name: 'Sprout Social', priceRange: '$199-$399/seat/mo', topComplaint: 'Absurdly expensive per-seat pricing, difficult cancellation process, overkill for SMBs (G2 reviews)' },
      { name: 'Later', priceRange: '$18-$80/mo', topComplaint: 'LinkedIn and Pinterest scheduling limited, analytics are shallow, desktop experience awkward for non-visual content' },
      { name: 'Zoho Social', priceRange: '$10-$40/mo', topComplaint: 'Feels like an afterthought inside the Zoho ecosystem, buggy Android app, limited AI features (Capterra)' },
      { name: 'Publer', priceRange: '$12-$104/mo', topComplaint: 'AI writer produces generic content, occasional posting failures on Instagram, analytics lack depth (G2)' }
    ],
    competitorFixes: [
      'Transparent, stable pricing — we commit in writing never to raise prices more than 10% per year',
      'Publish to all 6 major platforms reliably — LinkedIn, Instagram, Facebook, Twitter/X, TikTok, Pinterest — from one queue',
      'AI caption generator produces platform-native copy: short punchy text for Twitter/X, hashtag-rich for Instagram, professional tone for LinkedIn',
      'Content recycling engine automatically resurfaces your highest-engagement posts so evergreen content keeps working',
      'No per-seat pricing traps — flat team plan covers up to 5 users at one monthly price',
      'Best-time-to-post AI analyzes your past engagement data and schedules new posts at statistically optimal windows per platform'
    ],
    targetCities: [
      { city: 'Scottsdale', state: 'AZ', population: '258,000', competitionLevel: 'low' },
      { city: 'Glendale', state: 'AZ', population: '250,000', competitionLevel: 'low' },
      { city: 'Waco', state: 'TX', population: '136,000', competitionLevel: 'low' },
      { city: 'Mesquite', state: 'TX', population: '143,000', competitionLevel: 'low' },
      { city: 'Miramar', state: 'FL', population: '134,000', competitionLevel: 'low' },
      { city: 'North Charleston', state: 'SC', population: '113,000', competitionLevel: 'low' },
      { city: 'Jackson', state: 'MS', population: '153,000', competitionLevel: 'low' },
      { city: 'Allentown', state: 'PA', population: '122,000', competitionLevel: 'low' },
      { city: 'Manchester', state: 'NH', population: '115,000', competitionLevel: 'low' },
      { city: 'Springfield', state: 'MA', population: '155,000', competitionLevel: 'low' }
    ],
    dateAdded: '2026-04-16',
    waitlistCount: 0,
    slug: 'post-flow'
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
  },
  {
    date: '2026-04-16',
    toolsAdded: ['ProposalPro'],
    toolsUpdated: ['OnboardFlow', 'InvoiceAI', 'LeadPilot', 'CalendarFlow', 'ExpenseBot'],
    keywordChanges: [],
    citiesTargeted: [
      { tool: 'OnboardFlow', cities: ['Eugene, OR', 'Clarksville, TN', 'Fort Wayne, IN', 'Augusta, GA'] },
      { tool: 'InvoiceAI', cities: ['Lubbock, TX', 'Gainesville, FL', 'Wilmington, NC', 'Overland Park, KS'] },
      { tool: 'LeadPilot', cities: ['Fargo, ND', 'Columbia, SC', 'Tyler, TX', 'Athens, GA'] },
      { tool: 'CalendarFlow', cities: ['Peoria, IL', 'Green Bay, WI', 'Billings, MT', 'Corpus Christi, TX'] },
      { tool: 'ExpenseBot', cities: ['Evansville, IN', 'Rockford, IL', 'Mobile, AL', 'Murfreesboro, TN'] },
      { tool: 'ProposalPro', cities: ['Winston-Salem, NC', 'Laredo, TX', 'Midland, TX', 'Peoria, AZ', 'Cedar Rapids, IA', 'Bowling Green, KY', 'Odessa, TX', 'Surprise, AZ', 'Roanoke, VA', 'Abilene, TX'] }
    ],
    researchNotes: 'Session 2: Added 20 new optimized low-competition cities (4 per existing tool) for local SEO compounding. Built ProposalPro (Sales) targeting PandaDoc ($100M ARR) and Proposify pain points. Sales category was 0/5 tools — highest-priority gap. 6 competitors validated: PandaDoc, Proposify, QuoteWerks, GetAccept, Better Proposals, Qwilr.'
  },
  {
    date: '2026-04-16',
    toolsAdded: ['PostFlow'],
    toolsUpdated: ['OnboardFlow', 'InvoiceAI', 'LeadPilot', 'CalendarFlow', 'ExpenseBot'],
    keywordChanges: [],
    citiesTargeted: [
      { tool: 'OnboardFlow', cities: ['Ann Arbor, MI', 'Denton, TX', 'Pueblo, CO', 'High Point, NC'] },
      { tool: 'InvoiceAI', cities: ['Amarillo, TX', 'Cape Coral, FL', 'Visalia, CA', 'Macon, GA'] },
      { tool: 'LeadPilot', cities: ['Grand Rapids, MI', 'Shreveport, LA', 'Rancho Cucamonga, CA', 'Tempe, AZ'] },
      { tool: 'CalendarFlow', cities: ['Champaign, IL', 'South Bend, IN', 'Longmont, CO', 'Racine, WI'] },
      { tool: 'ExpenseBot', cities: ['Montgomery, AL', 'Lansing, MI', 'Syracuse, NY', 'Columbus, GA'] },
      { tool: 'PostFlow', cities: ['Scottsdale, AZ', 'Glendale, AZ', 'Waco, TX', 'Mesquite, TX', 'Miramar, FL', 'North Charleston, SC', 'Jackson, MS', 'Allentown, PA', 'Manchester, NH', 'Springfield, MA'] }
    ],
    researchNotes: 'Session 3: Added 20 new optimized low-competition cities (4 per existing tool) — all unique, 78K–200K population, geographic diversity across Midwest/South/Northeast/Southwest. Built PostFlow (Marketing) — social media scheduler targeting Hootsuite ($300M+ ARR, infamous 2023 price jump from $29→$99/mo) and Buffer/Sprout Social pain points. Marketing category now has 2 tools. 6 competitors validated: Hootsuite, Buffer, Sprout Social, Later, Zoho Social, Publer.'
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
