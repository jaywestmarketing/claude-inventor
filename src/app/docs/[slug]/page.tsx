import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { docs, getDocBySlug, getRelatedDocs } from '@/data/docs/index';
import { docCategoryLabels, docCategoryBadgeClass } from '@/data/docs/types';
import { posts } from '@/data/blog/index';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) return { title: 'Not Found' };

  return {
    title: doc.metaTitle,
    description: doc.metaDescription,
    keywords: doc.keywords.join(', '),
    alternates: {
      canonical: `https://automatestack.com/docs/${doc.slug}`,
    },
    openGraph: {
      title: doc.metaTitle,
      description: doc.metaDescription,
      type: 'article',
      url: `https://automatestack.com/docs/${doc.slug}`,
      modifiedTime: doc.updatedAt,
    },
  };
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) notFound();

  const relatedDocs = getRelatedDocs(doc);
  const relatedPosts = doc.relatedPostSlugs
    .map((s) => posts.find((p) => p.slug === s))
    .filter(Boolean);

  const techArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: doc.metaTitle,
    description: doc.metaDescription,
    dateModified: doc.updatedAt,
    datePublished: doc.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'AutomateStack',
      url: 'https://automatestack.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AutomateStack',
      url: 'https://automatestack.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://automatestack.com/docs/${doc.slug}`,
    },
    keywords: doc.keywords.join(', '),
    articleSection: docCategoryLabels[doc.category],
    proficiencyLevel: 'Beginner',
    inLanguage: 'en-US',
  };

  const faqSchema = doc.faqItems.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: doc.faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techArticleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main className="docs-post-page">
        <nav className="blog-breadcrumb">
          <Link href="/">Dashboard</Link>
          <span> › </span>
          <Link href="/docs">Documentation</Link>
          <span> › </span>
          <span>{docCategoryLabels[doc.category]}</span>
          <span> › </span>
          <span>{doc.toolName}</span>
        </nav>

        <div className="docs-page-layout">
          <aside className="docs-sidebar">
            <div className="docs-sidebar-inner">
              <div className="docs-sidebar-tool">
                <span className={`badge ${docCategoryBadgeClass[doc.category]}`}>
                  {docCategoryLabels[doc.category]}
                </span>
                <h2>{doc.toolName}</h2>
                <p>{doc.tagline}</p>
                <Link href={`/tools/${doc.toolSlug}`} className="btn-primary docs-try-btn">
                  Try {doc.toolName} Free →
                </Link>
              </div>

              {relatedDocs.length > 0 && (
                <div className="docs-sidebar-related">
                  <h3>Related Tools</h3>
                  <ul>
                    {relatedDocs.map((rd) => (
                      <li key={rd.slug}>
                        <Link href={`/docs/${rd.slug}`}>{rd.toolName} docs</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedPosts.length > 0 && (
                <div className="docs-sidebar-related">
                  <h3>Related Guides</h3>
                  <ul>
                    {relatedPosts.map((post) => post && (
                      <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="docs-sidebar-related">
                <h3>All Docs</h3>
                <Link href="/docs">← Back to documentation</Link>
              </div>
            </div>
          </aside>

          <article className="docs-article">
            <header className="docs-article-header">
              <div className="blog-article-meta">
                <span className={`badge ${docCategoryBadgeClass[doc.category]}`}>
                  {docCategoryLabels[doc.category]}
                </span>
                <span className="blog-card-read-time">{doc.readingTimeMinutes} min read</span>
                <span className="blog-card-date">Updated {new Date(doc.updatedAt + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <h1 className="docs-article-title">{doc.toolName} Documentation</h1>
              <p className="docs-article-subtitle">{doc.tagline}</p>
            </header>

            <div
              className="blog-article-body"
              dangerouslySetInnerHTML={{ __html: doc.content }}
            />

            <div className="docs-article-cta">
              <Link href={`/tools/${doc.toolSlug}`} className="btn-primary">
                Try {doc.toolName} Free →
              </Link>
              <Link href="/docs" className="btn-secondary">
                All documentation
              </Link>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
