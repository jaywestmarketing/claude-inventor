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
  }
];

// Make registry available globally
window.TOOLS_REGISTRY = TOOLS_REGISTRY;
