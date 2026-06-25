import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import './globals.css';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const SITE_URL = 'https://realetools.netlify.app';
const SITE_NAME = 'AutomateStack';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AutomateStack — Free Business Automation Tools | HR, Finance, Marketing, Sales',
    template: '%s | AutomateStack',
  },
  description:
    'Free AI-powered business automation tools for HR, invoicing, lead generation, scheduling, expense management, and more. Built for small business owners, office managers, and growing teams. Try demos free.',
  keywords: [
    'business automation tools',
    'free HR software',
    'free invoice generator',
    'lead generation tool',
    'meeting scheduler',
    'expense report software',
    'small business automation',
    'workflow automation',
    'AI business tools',
    'employee onboarding software',
    'payroll calculator',
    'helpdesk software',
    'email marketing tool',
    'client portal software',
    'commission calculator',
    'KPI dashboard',
    'social media scheduler',
    'email signature generator',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'AutomateStack — Free Business Automation Tools',
    description:
      'Free AI-powered tools for HR, invoicing, lead generation, scheduling & expenses. 34 tools. Try any demo free.',
    // og-image.png: add a 1200x630 PNG to /public/og-image.png to enable social previews
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutomateStack — Free Business Automation Tools',
    description:
      'Free AI-powered tools for HR, invoicing, lead generation, scheduling & expenses. 34 tools. Try any demo free.',
  },
  // Add google: 'PASTE_YOUR_GSC_VERIFICATION_CODE_HERE' once verified in Google Search Console
  // verification: { google: 'xxxx', other: { 'msvalidate.01': 'xxxx' } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description:
          'AutomateStack builds free AI-powered business automation tools for HR managers, office managers, small business owners, and growing teams.',
        sameAs: [
          'https://twitter.com/automatestack',
          'https://linkedin.com/company/automatestack',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { '@id': `${SITE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/tools/{search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/#collection`,
        url: SITE_URL,
        name: 'Free Business Automation Tools — AutomateStack',
        description:
          'A growing collection of 34 free AI-powered business automation tools covering HR, finance, marketing, sales, operations, and productivity.',
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is AutomateStack?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AutomateStack is a growing collection of 34 free AI-powered business automation tools for HR managers, small business owners, office managers, and professionals. Tools cover employee onboarding, invoicing, lead generation, scheduling, expense management, payroll, helpdesk, email marketing, social media scheduling, and more.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are AutomateStack tools free to use?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. All AutomateStack tools offer free demo access with no credit card required. Join the waitlist for early access to the full version of any tool.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do AutomateStack tools compare to Mailchimp, Zendesk, BambooHR, and HubSpot?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AutomateStack tools are designed by analyzing thousands of negative reviews for leading competitors on G2, Capterra, and Reddit. Each tool directly addresses the top complaints: high prices, complex setup, poor customer support, and features locked behind expensive tiers.',
            },
          },
          {
            '@type': 'Question',
            name: 'What types of businesses use AutomateStack?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AutomateStack is built for small and mid-size businesses, marketing agencies, consultants, HR departments, sales teams, and office managers who need professional automation tools without enterprise pricing.',
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* ── Google Analytics 4 ── */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: true
                });
              `}
            </Script>
          </>
        )}
        {/* ── Top nav ── */}
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/" className="site-nav-logo" aria-label="AutomateStack home">
            Automate<span>Stack</span>
          </Link>
          <span className="site-nav-tagline">Free Business Automation Tools</span>
          <div className="site-nav-spacer" />
          <Link href="/blog" className="site-nav-link">Blog</Link>
          <Link href="/docs" className="site-nav-link">Docs</Link>
          <Link href="/about" className="site-nav-link">About</Link>
          <Link href="/#faq" className="site-nav-link">FAQ</Link>
        </nav>

        {children}

        {/* ── Footer ── */}
        <footer className="footer" role="contentinfo">
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/">All Tools</Link>
            <Link href="/tools/onboard-flow">Onboarding</Link>
            <Link href="/tools/invoice-ai">Invoicing</Link>
            <Link href="/tools/payroll-calc">Payroll</Link>
            <Link href="/tools/lead-pilot">Lead Gen</Link>
            <Link href="/tools/email-campaigns">Email Marketing</Link>
            <Link href="/tools/help-desk-ai">Helpdesk</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/about">About</Link>
            <Link href="/#faq">FAQ</Link>
          </nav>
          <p>
            &copy; {new Date().getFullYear()} AutomateStack &mdash; Free business automation tools,
            added daily. Serving small businesses nationwide.
          </p>
          <p style={{ marginTop: '6px', fontSize: '0.75rem', color: '#777' }}>
            Tools for HR, finance, marketing, sales, operations &amp; productivity.
          </p>
        </footer>
      </body>
    </html>
  );
}
