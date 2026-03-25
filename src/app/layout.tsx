import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AutomateStack - Free Business Automation Tools | HR, Finance, Marketing, Sales',
  description: 'Discover free AI-powered business automation tools for HR onboarding, invoicing, lead generation, scheduling, and expense management. Built for small business owners, office managers, and teams. Try demos and join the waitlist.',
  keywords: [
    'business automation tools',
    'HR automation software',
    'free invoice generator',
    'lead generation tool',
    'meeting scheduler',
    'expense report software',
    'small business automation',
    'office automation tools',
    'workflow automation',
    'AI business tools',
    'employee onboarding software',
    'automated invoicing',
    'lead capture software',
    'appointment scheduling',
    'expense management'
  ],
  authors: [{ name: 'AutomateStack' }],
  creator: 'AutomateStack',
  publisher: 'AutomateStack',
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
    title: 'AutomateStack - Free Business Automation Tools',
    description: 'AI-powered automation tools for HR, invoicing, lead gen, scheduling & expenses. Free demos available.',
    siteName: 'AutomateStack',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutomateStack - Free Business Automation Tools',
    description: 'AI-powered automation tools for HR, invoicing, lead gen, scheduling & expenses. Free demos available.',
  },
  alternates: {
    canonical: '/',
  },
  other: {
    'msvalidate.01': '',
    'yandex-verification': '',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AutomateStack',
    description: 'Free AI-powered business automation tools for HR, finance, marketing, sales, and productivity.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
  };

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AutomateStack',
    description: 'Building free AI-powered business automation tools for professionals.',
    sameAs: [],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is AutomateStack?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AutomateStack is a collection of free AI-powered business automation tools designed for HR managers, office managers, small business owners, and professionals. Our tools cover employee onboarding, invoicing, lead generation, scheduling, and expense management.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are AutomateStack tools free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, AutomateStack tools offer generous free tiers. You can try demos of all our tools immediately and join waitlists for early access to full features at no cost.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who are AutomateStack tools built for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our tools are built for HR managers, office managers, small business owners, corporate executives, desk clerks, lead generation specialists, marketing teams, sales professionals, and anyone in an office role where automation can save time.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do AutomateStack tools compare to competitors like BambooHR, FreshBooks, and HubSpot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AutomateStack tools are designed to address the top complaints from users of existing solutions. We focus on simpler setup, transparent pricing, modern interfaces, and features that work out of the box without requiring consultants or technical expertise.',
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
