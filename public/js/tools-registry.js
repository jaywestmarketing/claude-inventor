/**
 * AutomateHub Tools Registry
 * Central registry of all automation tools.
 * New tools are added here daily by Claude.
 *
 * Each tool entry contains:
 * - id: unique slug
 * - name: display name
 * - icon: emoji icon
 * - description: short description
 * - tags: audience/category tags
 * - status: 'demo' | 'coming-soon' | 'live'
 * - path: URL path to tool page
 * - dateAdded: ISO date string
 * - keywords: SEO keywords
 * - targetCities: local SEO cities
 * - competitors: competitor analysis data
 * - research: market research notes
 */

const TOOLS_REGISTRY = [
  {
    id: 'smart-invoice-generator',
    name: 'Smart Invoice Generator',
    icon: '🧾',
    description: 'Generate professional invoices in seconds. Auto-calculate taxes, add your branding, and export to PDF — all in your browser. No signup required.',
    tags: ['Small Business', 'Freelancers', 'Accounting'],
    status: 'demo',
    path: '/tools/smart-invoice-generator/',
    dateAdded: '2026-03-25',
    keywords: [
      'free invoice generator',
      'online invoice maker',
      'invoice template free',
      'small business invoice software',
      'freelance invoice generator',
      'auto invoice creator',
      'professional invoice template',
      'invoice generator no signup',
      'browser invoice maker',
      'tax invoice generator',
      'simple invoice tool',
      'invoice pdf generator',
      'business invoice creator',
      'free invoicing software',
      'invoice automation tool',
      'receipt generator online',
      'billing software free',
      'self employed invoice',
      'contractor invoice maker',
      'quick invoice generator'
    ],
    targetCities: [
      'Boise, ID',
      'Greenville, SC',
      'Huntsville, AL',
      'Provo, UT',
      'Fayetteville, AR'
    ],
    competitors: {
      topCompetitors: [
        {
          name: 'Invoice Ninja',
          estimatedRevenue: '$150k+/mo',
          negativeReviews: [
            'Complex UI — too many options for simple invoicing',
            'Self-hosted version requires technical knowledge',
            'Mobile app is buggy and slow'
          ],
          ourFix: [
            'Clean, minimal UI with smart defaults',
            'Zero setup — runs entirely in browser',
            'Mobile-first responsive design'
          ]
        },
        {
          name: 'Wave',
          estimatedRevenue: '$200k+/mo',
          negativeReviews: [
            'Forced to create account before using',
            'Limited customization for invoice templates',
            'Slow customer support'
          ],
          ourFix: [
            'No account required — use instantly',
            'Full branding customization with live preview',
            'Self-service tool — no support needed'
          ]
        },
        {
          name: 'Zoho Invoice',
          estimatedRevenue: '$500k+/mo',
          negativeReviews: [
            'Free tier is very limited',
            'Part of bloated Zoho ecosystem',
            'Confusing pricing tiers'
          ],
          ourFix: [
            'Core features always free',
            'Standalone tool — no ecosystem lock-in',
            'Simple free/premium model'
          ]
        }
      ],
      similarServices: [
        'FreshBooks', 'QuickBooks', 'PayPal Invoicing',
        'Square Invoices', 'Hiveage', 'Invoice Generator (invoicegenerator.com)',
        'Billdu', 'Invoice Home'
      ]
    },
    research: {
      marketSize: 'Global invoicing software market valued at $12.3B (2025)',
      growthRate: '14.2% CAGR through 2030',
      painPoints: [
        'Most tools require account creation before use',
        'Over-complicated for simple invoicing needs',
        'Data privacy concerns with cloud-hosted invoices',
        'Templates look generic and unprofessional'
      ],
      keyFeatures: [
        'Instant invoice creation with no signup',
        'Custom branding (logo, colors, fonts)',
        'Auto tax calculation by state/country',
        'PDF export with professional formatting',
        'Line item management with subtotals',
        'Save/load invoice templates locally',
        'Multi-currency support',
        'Due date tracking and payment terms'
      ]
    }
  },
  {
    id: 'ai-meeting-notes',
    name: 'AI Meeting Notes Summarizer',
    icon: '📝',
    description: 'Paste your meeting transcript and get AI-structured summaries with action items, key decisions, and follow-ups. No bot joins your calls. 100% private and browser-based.',
    tags: ['Office Managers', 'Executives', 'Sales', 'HR'],
    status: 'demo',
    path: '/tools/ai-meeting-notes/',
    dateAdded: '2026-03-25',
    keywords: [
      'ai meeting notes',
      'meeting summarizer',
      'ai meeting summary',
      'ai notetaker',
      'meeting notes generator',
      'ai meeting assistant',
      'free meeting notes tool',
      'meeting minutes generator',
      'meeting action items generator',
      'automated meeting notes',
      'meeting recap tool',
      'ai meeting notes free',
      'meeting summary tool online',
      'business meeting summarizer',
      'meeting minutes ai generator',
      'free meeting summarizer no signup',
      'private meeting notes tool',
      'meeting notes summarizer browser',
      'no bot meeting notes',
      'meeting transcript summarizer'
    ],
    targetCities: [
      'Boise, ID',
      'Huntsville, AL',
      'Wilmington, NC',
      'Provo, UT',
      'Lakeland, FL'
    ],
    competitors: {
      topCompetitors: [
        {
          name: 'Otter.ai',
          estimatedRevenue: '$100M+ ARR',
          negativeReviews: [
            'Transcription accuracy issues with accents and multiple speakers',
            'Billing dark patterns — users charged $210 without receipts',
            'Bot joins uninvited meetings, auto-emails transcripts to all participants'
          ],
          ourFix: [
            'No transcription needed — users paste their own text for 100% accuracy',
            'Completely free, no billing, no accounts',
            'No bot at all — tool works after the meeting with user-supplied text'
          ]
        },
        {
          name: 'Fireflies.ai',
          estimatedRevenue: '$10.9M+ ARR ($1B valuation)',
          negativeReviews: [
            'Surprise billing — users charged $228 after clicking "free trial"',
            'Bot joins meetings unannounced, difficult to disable',
            'Poor speaker identification with technical jargon'
          ],
          ourFix: [
            'No billing, no accounts, no subscriptions',
            'No bot — works post-meeting on user-supplied text',
            'User labels speakers themselves — 100% accurate attribution'
          ]
        },
        {
          name: 'Fathom AI',
          estimatedRevenue: '$18.8M ARR',
          negativeReviews: [
            'Visible "Fathom Notetaker" bot appears as participant',
            'No mobile app (no iOS, Android, Chromebook, or Linux)',
            'Hidden AI caps — summaries limited to 5/month on free plan'
          ],
          ourFix: [
            'No bot presence at all — invisible to meeting participants',
            'Browser-based — works on any device',
            'No artificial caps on free tier'
          ]
        }
      ],
      similarServices: [
        'Otter.ai', 'Fireflies.ai', 'Fathom AI', 'Read.ai', 'tl;dv',
        'Granola AI', 'Notion AI Meeting Notes', 'Jamie (meetjamie.ai)',
        'Sembly AI', 'MeetGeek'
      ]
    },
    research: {
      marketSize: 'AI meeting assistant market — Otter alone at $100M ARR, 75% of knowledge workers use AI note-takers',
      growthRate: 'Rapid growth — Fireflies hit $1B valuation in 2025',
      painPoints: [
        'Bots join meetings uninvited — major privacy violation',
        'Surprise billing and dark pattern subscriptions',
        'Poor accuracy with accents and overlapping speakers',
        'Read.ai banned by universities for virus-like data harvesting',
        'Visible bot participants embarrass users'
      ],
      keyFeatures: [
        'No signup required — instant use in browser',
        'Paste-in transcript support',
        'AI-powered structured summary with decisions and action items',
        'Speaker attribution',
        'Multiple meeting templates (standup, 1-on-1, board, sales call)',
        'Export to PDF, Markdown, plain text',
        '100% browser-based privacy',
        'Save/load locally'
      ]
    }
  }
];

// Make registry available globally
window.TOOLS_REGISTRY = TOOLS_REGISTRY;
