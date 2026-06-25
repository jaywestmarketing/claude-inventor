import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts, getPostBySlug, getRelatedPosts } from '@/data/blog/index';
import { blogCategoryLabels, blogCategoryBadgeClass, formatPostDate } from '@/data/blog/types';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Not Found' };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords.join(', '),
    alternates: {
      canonical: `https://realetools.netlify.app/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      url: `https://realetools.netlify.app/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post);

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: 'AutomateStack Editorial Team',
      url: 'https://realetools.netlify.app/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AutomateStack',
      url: 'https://realetools.netlify.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://realetools.netlify.app/favicon.ico',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://realetools.netlify.app/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
    articleSection: blogCategoryLabels[post.category],
    inLanguage: 'en-US',
  };

  const faqSchema = post.faqItems.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main className="blog-post-page">
        <nav className="blog-breadcrumb">
          <Link href="/">Dashboard</Link>
          <span> › </span>
          <Link href="/blog">Blog</Link>
          <span> › </span>
          <span>{blogCategoryLabels[post.category]}</span>
        </nav>

        <article className="blog-article">
          <header className="blog-article-header">
            <div className="blog-article-meta">
              <span className={`badge ${blogCategoryBadgeClass[post.category]}`}>
                {blogCategoryLabels[post.category]}
              </span>
              <span className="blog-card-date">{formatPostDate(post.publishedAt)}</span>
              {post.updatedAt !== post.publishedAt && (
                <span className="blog-card-date">Updated {formatPostDate(post.updatedAt)}</span>
              )}
              <span className="blog-card-read-time">{post.readingTimeMinutes} min read</span>
            </div>
            <h1 className="blog-article-title">{post.title}</h1>
            <p className="blog-article-byline">
              By <Link href="/about">AutomateStack Editorial Team</Link>
            </p>
          </header>

          <div
            className="blog-article-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="blog-article-footer">
            <div className="blog-article-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
            </div>
          </footer>
        </article>

        {relatedPosts.length > 0 && (
          <section className="blog-related">
            <h2>Related Articles</h2>
            <div className="blog-related-grid">
              {relatedPosts.map((related) => (
                <div key={related.slug} className="blog-related-card">
                  <span className={`badge ${blogCategoryBadgeClass[related.category]}`}>
                    {blogCategoryLabels[related.category]}
                  </span>
                  <h3>
                    <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                  </h3>
                  <p>{related.excerpt.slice(0, 140)}…</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {post.relatedToolSlugs.length > 0 && (
          <section className="blog-related-tools">
            <h2>Free Tools Mentioned in This Article</h2>
            <div className="blog-related-tools-list">
              {post.relatedToolSlugs.map((toolSlug) => (
                <Link key={toolSlug} href={`/tools/${toolSlug}`} className="btn-primary blog-tool-link">
                  Try {toolSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())} →
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="blog-back-link">
          <Link href="/blog">← Back to all articles</Link>
        </div>
      </main>
    </>
  );
}
