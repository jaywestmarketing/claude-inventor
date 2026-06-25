import type { Metadata } from 'next';
import Link from 'next/link';
import { docs } from '@/data/docs/index';
import { docCategoryLabels, docCategoryBadgeClass, DocCategory } from '@/data/docs/types';
import { tools } from '@/data/tools';

export const metadata: Metadata = {
  title: 'Documentation | AutomateStack',
  description: 'Step-by-step documentation for all 34 AutomateStack business automation tools — getting started guides, feature walkthroughs, and use case tutorials for HR, finance, sales, marketing, and operations teams.',
  alternates: { canonical: 'https://realetools.netlify.app/docs' },
  openGraph: {
    title: 'Documentation | AutomateStack',
    description: 'Step-by-step documentation for all 34 AutomateStack business automation tools.',
    type: 'website',
    url: 'https://realetools.netlify.app/docs',
  },
};

const categoryOrder: DocCategory[] = ['hr', 'finance', 'sales', 'marketing', 'operations', 'productivity'];

export default function DocsIndexPage() {
  const toolsWithDocs = tools.filter((t) => docs.find((d) => d.slug === t.slug));
  const toolsWithoutDocs = tools.filter((t) => !docs.find((d) => d.slug === t.slug));

  const docsByCategory = categoryOrder.map((cat) => ({
    category: cat,
    label: docCategoryLabels[cat],
    docs: docs.filter((d) => d.category === cat),
    pendingTools: toolsWithoutDocs.filter((t) => t.category === cat),
  })).filter((g) => g.docs.length > 0 || g.pendingTools.length > 0);

  return (
    <main className="docs-main">
      <div className="docs-header">
        <h1>AutomateStack Documentation</h1>
        <p className="docs-header-sub">
          Getting started guides, feature walkthroughs, and use case tutorials for every tool.
          {toolsWithDocs.length > 0 && ` ${toolsWithDocs.length} of ${tools.length} tools documented.`}
        </p>
      </div>

      {docsByCategory.map(({ category, label, docs: catDocs, pendingTools }) => (
        <section key={category} className="docs-category-section">
          <h2 className="docs-category-heading">
            <span className={`badge ${docCategoryBadgeClass[category]}`}>{label}</span>
          </h2>
          <div className="docs-grid">
            {catDocs.map((doc) => (
              <Link key={doc.slug} href={`/docs/${doc.slug}`} className="docs-card">
                <div className="docs-card-name">{doc.toolName}</div>
                <div className="docs-card-tagline">{doc.tagline}</div>
                <span className="docs-card-link">View docs →</span>
              </Link>
            ))}
            {pendingTools.map((tool) => (
              <div key={tool.slug} className="docs-card docs-card-pending">
                <div className="docs-card-name">{tool.name}</div>
                <div className="docs-card-tagline">{tool.tagline}</div>
                <span className="docs-card-coming">Documentation coming soon</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
