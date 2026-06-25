import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About AutomateStack | Business Automation Tools for Small Business',
  description: 'AutomateStack builds free business automation tools for small business — from HR onboarding and cash flow forecasting to CRM tracking and SOP management. Learn about our methodology and editorial standards.',
  alternates: {
    canonical: 'https://realetools.netlify.app/about',
  },
  openGraph: {
    title: 'About AutomateStack | Business Automation Tools for Small Business',
    description: 'AutomateStack builds free business automation tools for small business — from HR onboarding and cash flow forecasting to CRM tracking and SOP management. Learn about our methodology and editorial standards.',
    type: 'website',
    url: 'https://realetools.netlify.app/about',
  },
};

export default function AboutPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'AutomateStack',
    url: 'https://realetools.netlify.app',
    description: 'AutomateStack builds free business automation tools for small business owners, operations managers, and HR teams.',
    foundingDate: '2026',
    areaServed: 'United States',
    sameAs: [
      'https://twitter.com/automatestack',
      'https://linkedin.com/company/automatestack',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hello@automatestack.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <main className="about-page">
        <div className="about-container">
          <nav className="blog-breadcrumb">
            <Link href="/">Dashboard</Link>
            <span> › </span>
            <span>About</span>
          </nav>

          <h1>About AutomateStack</h1>

          <section className="about-section">
            <h2>What We Build</h2>
            <p>
              AutomateStack builds free business automation tools for small business owners, operations managers, HR teams, and sales leads. Every tool we build targets a documented, expensive problem that businesses currently solve with enterprise software costing $5,000–$50,000 per year — and makes the core functionality available at no cost.
            </p>
            <p>
              Our tools cover HR onboarding automation, payroll calculation, cash flow forecasting, CRM and sales pipeline tracking, SOP documentation, inventory management, and more. As of May 2026, we operate 34 tools with approximately 680 city-specific pages serving local business search queries across the United States.
            </p>
          </section>

          <section className="about-section">
            <h2>Editorial Standards</h2>
            <p>
              Every article on AutomateStack is written against a documented editorial standard:
            </p>
            <ul>
              <li><strong>Primary sources over aggregators.</strong> When we cite research, we cite the named study, report, or survey — not a blog that cited a blog that cited a report. We name the source organization, the year, and the specific finding.</li>
              <li><strong>Specificity over generality.</strong> "Many businesses use CRM software" is not a useful data point. "According to Capterra's 2025 Small Business Software Survey, 67% of companies with under 25 employees cite price as the primary barrier to CRM adoption" is. We write the second type of sentence.</li>
              <li><strong>Direct answers first.</strong> Every article answers its primary question in the first 150 words. We do not make readers scroll through 500 words of background context to find the answer they searched for.</li>
              <li><strong>No sponsored content.</strong> We do not accept payment for positive coverage, rankings, or placement. Tool comparisons are based on documented feature sets, pricing (verified at time of publication), and user-reported complaints from G2, Capterra, TrustRadius, and Reddit.</li>
              <li><strong>Quarterly updates.</strong> Articles are reviewed and updated at minimum every 90 days. Software pricing changes frequently; competitor features change; regulatory requirements change. Outdated information that remains published causes confident mistakes — we take update schedules seriously.</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Our Research Methodology</h2>
            <p>
              Before publishing any article, our editorial process requires:
            </p>
            <ol>
              <li><strong>Competitor pricing verification</strong> — direct review of pricing pages for all software discussed, cross-referenced with G2 and Capterra listings</li>
              <li><strong>User complaint aggregation</strong> — minimum 10 verified user reviews across G2, Capterra, TrustRadius, and Reddit threads for any software comparison</li>
              <li><strong>Primary source citation</strong> — all statistics linked to or attributed to named, verifiable sources (academic papers, industry surveys, analyst reports)</li>
              <li><strong>Technical accuracy review</strong> — schema markup claims, API behavior, and software feature descriptions verified against official documentation</li>
            </ol>
          </section>

          <section className="about-section">
            <h2>Coverage Areas</h2>
            <div className="about-categories">
              <div className="about-category-card">
                <h3>SEO &amp; AI Search</h3>
                <p>AEO, GEO, Google AI Overviews, schema markup, content structure optimization for AI citation</p>
              </div>
              <div className="about-category-card">
                <h3>Finance &amp; Billing</h3>
                <p>Cash flow forecasting, invoicing, expense management, payroll, financial planning for small business</p>
              </div>
              <div className="about-category-card">
                <h3>HR &amp; People Ops</h3>
                <p>Onboarding automation, performance reviews, applicant tracking, training management, PTO tracking</p>
              </div>
              <div className="about-category-card">
                <h3>Sales &amp; CRM</h3>
                <p>CRM selection, sales pipeline management, proposal generation, commission tracking, contract management</p>
              </div>
              <div className="about-category-card">
                <h3>Operations</h3>
                <p>SOP writing, inventory management, workflow automation, vendor management, KPI tracking</p>
              </div>
              <div className="about-category-card">
                <h3>Marketing</h3>
                <p>Lead generation, email campaigns, social media scheduling, landing pages, form building</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Contact</h2>
            <p>
              For editorial corrections, data disputes, or partnership inquiries, contact us at{' '}
              <a href="mailto:hello@automatestack.com">hello@automatestack.com</a>.
            </p>
            <p>
              For tool feedback and feature requests, use the waitlist forms on individual tool pages — these responses are read and prioritized for product development.
            </p>
          </section>

          <div className="about-back">
            <Link href="/" className="btn-secondary">← Back to Dashboard</Link>
            <Link href="/blog" className="btn-secondary">View all articles →</Link>
          </div>
        </div>
      </main>
    </>
  );
}
