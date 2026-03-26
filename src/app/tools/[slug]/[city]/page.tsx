import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { tools, categoryLabels } from '@/data/tools';
import CityDetailClient from './CityDetailClient';

interface Props {
  params: Promise<{ slug: string; city: string }>;
}

function citySlug(city: string, state: string): string {
  return `${city.toLowerCase().replace(/\s+/g, '-')}-${state.toLowerCase()}`;
}

function findToolAndCity(slug: string, cityParam: string) {
  const tool = tools.find(t => t.slug === slug);
  if (!tool) return null;
  const city = tool.targetCities.find(
    c => citySlug(c.city, c.state) === cityParam
  );
  if (!city) return null;
  return { tool, city };
}

export async function generateStaticParams() {
  const params: { slug: string; city: string }[] = [];
  for (const tool of tools) {
    for (const c of tool.targetCities) {
      params.push({ slug: tool.slug, city: citySlug(c.city, c.state) });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city: cityParam } = await params;
  const result = findToolAndCity(slug, cityParam);
  if (!result) return {};

  const { tool, city } = result;
  const title = `${tool.name} in ${city.city}, ${city.state} - Free ${categoryLabels[tool.category]} Tool | AutomateStack`;
  const description = `${tool.name} helps businesses in ${city.city}, ${city.state} automate ${categoryLabels[tool.category].toLowerCase()} workflows. ${tool.tagline}. Free demo available for ${city.city} businesses.`;

  return {
    title,
    description,
    keywords: [
      ...tool.keywords.slice(0, 10),
      `${categoryLabels[tool.category].toLowerCase()} software ${city.city}`,
      `${tool.name} ${city.city} ${city.state}`,
      `business automation ${city.city}`,
      `${categoryLabels[tool.category].toLowerCase()} tools ${city.city} ${city.state}`,
      `best business software ${city.city}`,
    ],
    openGraph: {
      title: `${tool.name} - ${tool.tagline} | ${city.city}, ${city.state}`,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} in ${city.city}, ${city.state}`,
      description,
    },
    alternates: {
      canonical: `/tools/${tool.slug}/${citySlug(city.city, city.state)}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { slug, city: cityParam } = await params;
  const result = findToolAndCity(slug, cityParam);
  if (!result) notFound();

  const { tool, city } = result;

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `AutomateStack - ${tool.name}`,
    description: `${tool.name} for businesses in ${city.city}, ${city.state}. ${tool.tagline}`,
    areaServed: {
      '@type': 'City',
      name: city.city,
      addressRegion: city.state,
      addressCountry: 'US',
    },
    priceRange: 'Free',
    url: `https://automatestack.com/tools/${tool.slug}/${citySlug(city.city, city.state)}`,
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: tool.name,
    description: tool.description,
    provider: {
      '@type': 'Organization',
      name: 'AutomateStack',
    },
    areaServed: {
      '@type': 'City',
      name: city.city,
      addressRegion: city.state,
    },
    serviceType: categoryLabels[tool.category],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Is ${tool.name} available for businesses in ${city.city}, ${city.state}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, ${tool.name} is a browser-based tool available to all businesses in ${city.city}, ${city.state}. No installation required — sign up for the waitlist to get early access.`,
        },
      },
      {
        '@type': 'Question',
        name: `How much does ${tool.name} cost in ${city.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `${tool.name} is currently free in demo mode. Join the waitlist to lock in early-access pricing when we launch the full version.`,
        },
      },
      {
        '@type': 'Question',
        name: `What are the best ${categoryLabels[tool.category].toLowerCase()} tools for ${city.city} businesses?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Popular options include ${tool.competitors.map(c => c.name).join(', ')}. ${tool.name} by AutomateStack is a free alternative that addresses common complaints like ${tool.competitorFixes.slice(0, 2).join(' and ').toLowerCase()}.`,
        },
      },
      {
        '@type': 'Question',
        name: `Does ${tool.name} require any software installation?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `No. ${tool.name} is a browser-based web application that works on any device — desktop, tablet, or mobile. No downloads, no IT setup required.`,
        },
      },
      {
        '@type': 'Question',
        name: `How does ${tool.name} compare to ${tool.competitors[0]?.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Unlike ${tool.competitors[0]?.name} (${tool.competitors[0]?.priceRange}), which users report issues with "${tool.competitors[0]?.topComplaint}", ${tool.name} offers a free demo with ${tool.competitorFixes[0]?.toLowerCase()}.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <CityDetailClient tool={tool} city={city} />
    </>
  );
}
