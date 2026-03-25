import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { tools, categoryLabels } from '@/data/tools';
import ToolDetailClient from './ToolDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find(t => t.slug === slug);
  if (!tool) return {};

  const cityNames = tool.targetCities.map(c => c.city).join(', ');

  return {
    title: `${tool.name} - Free ${categoryLabels[tool.category]} Automation Tool | AutomateStack`,
    description: `${tool.description} Compare to ${tool.competitors.map(c => c.name).join(', ')}. Free demo available. Serving businesses in ${cityNames} and nationwide.`,
    keywords: tool.keywords,
    openGraph: {
      title: `${tool.name} - ${tool.tagline}`,
      description: tool.description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} - ${tool.tagline}`,
      description: tool.description,
    },
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = tools.find(t => t.slug === slug);
  if (!tool) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/PreOrder',
    },
    featureList: tool.features.join(', '),
  };

  const comparisonJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${tool.name} vs ${tool.competitors.map(c => c.name).join(' vs ')}`,
    description: `Compare ${tool.name} with top alternatives: ${tool.competitors.map(c => c.name).join(', ')}. See why professionals are switching.`,
    articleSection: categoryLabels[tool.category],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonJsonLd) }}
      />
      <ToolDetailClient tool={tool} />
    </>
  );
}
