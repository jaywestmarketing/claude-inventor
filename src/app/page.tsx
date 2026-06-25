import type { Metadata } from 'next';
import Link from 'next/link';
import ToolsGrid from '@/components/ToolsGrid';
import { tools } from '@/data/tools';

export const metadata: Metadata = {
  title: 'Free Business Automation Tools — HR, Finance, Marketing, Sales | AutomateStack',
  description:
    'Discover 23 free AI-powered business automation tools. Replace Mailchimp, Zendesk, BambooHR, HubSpot, and ADP with affordable alternatives built for small business. Free demos, no credit card.',
  alternates: { canonical: '/' },
};

const categoryCount = (cat: string) => tools.filter(t => t.category === cat).length;

export default function Home() {
  const totalCities = tools.reduce((sum, t) => sum + t.targetCities.length, 0);

  return (
    <>
      {/* ── Hero ── */}
      <header className="hero">
        <p className="hero-eyebrow">{tools.length} Free Tools &nbsp;·&nbsp; No Credit Card Required</p>
        <h1>
          Business Automation Tools<br />
          <span>Built to Replace $100/mo Software</span>
        </h1>
        <p>
          Every tool researched against top competitors — Mailchimp, Zendesk, BambooHR, HubSpot,
          ADP — and built to fix their most common complaints. Free demos available now.
        </p>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">{tools.length}</div>
            <div className="hero-stat-label">Tools Live</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">{totalCities}+</div>
            <div className="hero-stat-label">City Pages</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">Free</div>
            <div className="hero-stat-label">Demo Access</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">Daily</div>
            <div className="hero-stat-label">New Additions</div>
          </div>
        </div>
      </header>

      <main className="container" style={{ paddingTop: '32px' }}>

        {/* ── Category quick-stats ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '10px',
          marginBottom: '32px',
        }}>
          {([
            ['hr',          '👤', 'HR',          '#1a56db'],
            ['finance',     '💰', 'Finance',      '#1b5e20'],
            ['marketing',   '🎯', 'Marketing',    '#880e4f'],
            ['sales',       '📋', 'Sales',        '#e65100'],
            ['operations',  '📊', 'Operations',   '#4527a0'],
            ['productivity','📅', 'Productivity', '#006064'],
          ] as [string, string, string, string][]).map(([cat, icon, label, color]) => (
            <div key={cat} style={{
              background: '#fff',
              border: '1px solid #d5d9d9',
              borderRadius: '8px',
              padding: '14px 12px',
              textAlign: 'center',
              boxShadow: '0 2px 5px rgba(15,17,17,.1)',
            }}>
              <div style={{ fontSize: '22px', marginBottom: '4px' }}>{icon}</div>
              <div style={{ fontSize: '18px', fontWeight: 800, color }}>{categoryCount(cat)}</div>
              <div style={{ fontSize: '11px', color: '#565959', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.4px' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* ── Tool grid ── */}
        <section className="animate-fade-in">
          <div className="section-header">
            <h2>Browse All Tools</h2>
            <p>
              Each tool is validated against competitors earning $5,000+/month and built to fix
              their top complaints. Filter by category or scroll to explore.
            </p>
          </div>
          <ToolsGrid />
        </section>

        {/* ── Why AutomateStack ── */}
        <section style={{ marginTop: '56px' }} className="animate-fade-in">
          <div className="section-header">
            <h2>Why AutomateStack?</h2>
          </div>
          <div className="tools-grid stagger-children">
            <ValueCard
              icon="🔍"
              title="Built From Real Complaints"
              description="Every tool is designed by analyzing thousands of negative reviews on G2, Capterra, and Reddit. We fix what competitors ignore — rigid pricing, complex setup, missing features."
            />
            <ValueCard
              icon="⚡"
              title="Works in Your Browser"
              description="No downloads, no IT ticket, no consultant. Every tool runs in your browser and sets up in minutes. Test any demo right now, no account required."
            />
            <ValueCard
              icon="💲"
              title="Transparent, Fair Pricing"
              description="Generous free tiers with no per-seat traps, no surprise price hikes, no features locked behind enterprise plans. Built for real businesses, not Fortune 500 budgets."
            />
          </div>
        </section>

        {/* ── Competitor savings callout ── */}
        <section style={{ marginTop: '56px' }} className="animate-fade-in">
          <div style={{
            background: '#003087',
            borderRadius: '12px',
            padding: '36px 32px',
            color: '#fff',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '24px',
          }}>
            <div style={{ gridColumn: '1/-1', marginBottom: '8px' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', borderBottom: 'none', marginBottom: '6px' }}>
                What You&apos;re Replacing
              </h2>
              <p style={{ color: 'rgba(255,255,255,.75)', fontSize: '.9rem' }}>
                AutomateStack tools directly address price hikes and complaints from these platforms.
              </p>
            </div>
            {[
              ['Mailchimp', '$100+/mo', 'Free tier cut to 500 contacts'],
              ['Zendesk', '$115/agent/mo', 'Pricing jumped in 2024'],
              ['Hootsuite', '$99+/mo', 'Doubled price with no new features'],
              ['BambooHR', '$9/emp/mo', 'Rigid PTO rules, expensive add-ons'],
              ['HubSpot', '$800+/mo', 'Enterprise pricing, complex setup'],
              ['ADP', '$100+/mo', 'Overkill for basic payroll needs'],
            ].map(([name, price, note]) => (
              <div key={name} style={{
                background: 'rgba(255,255,255,.08)',
                borderRadius: '8px',
                padding: '14px 16px',
                border: '1px solid rgba(255,255,255,.12)',
              }}>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '2px' }}>{name}</div>
                <div style={{ color: '#f5c26b', fontWeight: 700, fontSize: '.875rem', marginBottom: '4px' }}>{price}</div>
                <div style={{ color: 'rgba(255,255,255,.65)', fontSize: '12px' }}>{note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ marginTop: '56px' }} id="faq" className="animate-fade-in">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: '740px' }}>
            {[
              ['What is AutomateStack?',
               'AutomateStack is a collection of 23 free AI-powered business automation tools covering HR, finance, marketing, sales, operations, and productivity. New tools are added daily based on market research and waitlist demand.'],
              ['Are these tools really free?',
               'Yes — every tool has a free demo you can use right now with no account required. Join the waitlist to be first in line when the full version launches. We believe in transparent, affordable pricing with no per-seat traps.'],
              ['How are tools selected and validated?',
               'We research competitors earning $5,000+/month, analyze their negative reviews on G2, Capterra, and Reddit, then build alternatives that fix the top 6+ complaints. Every tool must have verified revenue, documented pain points, and feasible browser-only implementation.'],
              ['Who are these tools built for?',
               'HR managers, office managers, small business owners, marketing teams, sales professionals, consultants, and operations leads — anyone paying $50-500/month for bloated enterprise software that solves simple problems.'],
              ['Can I suggest a tool?',
               'Yes — join the waitlist on any tool page. The more waitlist signups a tool collects, the faster it gets built and launched with full features.'],
            ].map(([q, a]) => (
              <details key={q as string}>
                <summary>{q}<span className="faq-icon">+</span></summary>
                <p className="faq-answer">{a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function ValueCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="value-card">
      <div style={{ fontSize: '28px', marginBottom: '12px' }}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
