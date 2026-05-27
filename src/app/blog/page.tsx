import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '@/data/blog/index';
import { blogCategoryLabels, blogCategoryBadgeClass, formatPostDate } from '@/data/blog/types';

export const metadata: Metadata = {
  title: 'Business Automation Blog | AutomateStack',
  description: 'Practical guides on AI search optimization, cash flow forecasting, CRM selection, SOP writing, and business automation — written for small business owners and operations teams.',
  alternates: {
    canonical: 'https://automatestack.com/blog',
  },
  openGraph: {
    title: 'Business Automation Blog | AutomateStack',
    description: 'Practical guides on AI search optimization, cash flow forecasting, CRM selection, SOP writing, and business automation.',
    type: 'website',
    url: 'https://automatestack.com/blog',
  },
};

export default function BlogIndexPage() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <main className="blog-main">
      <div className="blog-header">
        <h1>Business Automation Blog</h1>
        <p className="blog-header-sub">
          Practical guides on automation, AI search, cash flow, CRM, and operations — written for small business teams.
        </p>
      </div>

      <div className="blog-grid">
        {sortedPosts.map((post) => (
          <article key={post.slug} className="blog-card">
            <div className="blog-card-meta">
              <span className={`badge ${blogCategoryBadgeClass[post.category]}`}>
                {blogCategoryLabels[post.category]}
              </span>
              <span className="blog-card-date">{formatPostDate(post.publishedAt)}</span>
              <span className="blog-card-read-time">{post.readingTimeMinutes} min read</span>
            </div>
            <h2 className="blog-card-title">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="blog-card-excerpt">{post.excerpt}</p>
            <div className="blog-card-tags">
              {post.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`} className="blog-card-link">
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
