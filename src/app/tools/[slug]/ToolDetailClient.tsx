'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Tool, categoryLabels, categoryBadgeClass } from '@/data/tools';
import DemoPanel from './DemoPanel';

const WEB3FORMS_KEY = '7d643d3d-d3b6-4d77-8935-e7f138b84270';

export default function ToolDetailClient({ tool }: { tool: Tool }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;
    setStatus('loading');

    try {
      const stored = JSON.parse(localStorage.getItem('waitlist') || '{}');
      if (!stored[tool.id]) stored[tool.id] = [];
      stored[tool.id].push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('waitlist', JSON.stringify(stored));
    } catch { /* ok */ }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `🔔 Waitlist: ${tool.name} [Tool Page]`,
          from_name: 'AutomateStack Waitlist',
          replyto: email,
          email,
          tool_name: tool.name,
          tool_slug: tool.slug,
          tool_tagline: tool.tagline,
          tool_category: tool.category,
          source: 'tool-page',
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">All Tools</Link>
        {' › '}
        <span style={{ color: 'var(--text-secondary)' }}>{categoryLabels[tool.category]}</span>
        {' › '}
        <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{tool.name}</span>
      </nav>

      <main className="container" style={{ maxWidth: '960px', paddingTop: '32px' }}>

        {/* Hero row */}
        <div className="animate-fade-in-up" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
          <span style={{ fontSize: '44px', lineHeight: 1, flexShrink: 0 }}>{tool.icon}</span>
          <div style={{ flex: 1 }}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1.2, marginBottom: '8px' }}>
              {tool.name}
            </h1>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span className={`category-badge ${categoryBadgeClass[tool.category]}`}>
                {categoryLabels[tool.category]}
              </span>
              <span className="status-demo">Free Demo</span>
            </div>
          </div>
        </div>

        <p className="animate-fade-in" style={{
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          lineHeight: 1.7,
          marginBottom: '32px',
          maxWidth: '760px',
        }}>
          {tool.description}
        </p>

        {/* Interactive Demo (slug-specific) */}
        <DemoPanel slug={tool.slug} toolName={tool.name} />

        {/* Waitlist CTA */}
        <div className="animate-fade-in-up" style={{
          background: 'var(--bg-white)',
          border: '2px solid var(--orange)',
          borderRadius: '10px',
          padding: '28px 28px 24px',
          marginBottom: '40px',
          boxShadow: '0 2px 8px rgba(228,121,17,.12)',
        }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>
            Get Early Access to {tool.name}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', marginBottom: '16px' }}>
            {tool.name} is in demo mode. Join the waitlist — we&apos;ll email you the moment the full version launches.
          </p>
          {status === 'success' ? (
            <p style={{ fontWeight: 700, color: 'var(--green)', fontSize: '15px' }}>
              ✓ You&apos;re on the list! We&apos;ll notify you when {tool.name} is ready.
            </p>
          ) : (
            <form className="waitlist-form" onSubmit={handleWaitlist} style={{ maxWidth: '480px' }}>
              <input
                type="email"
                className="waitlist-input"
                placeholder="you@company.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
                aria-label={`Join waitlist for ${tool.name}`}
              />
              <button type="submit" className="waitlist-btn" disabled={status === 'loading'}>
                {status === 'loading' ? '…' : 'Join Waitlist'}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p style={{ color: 'var(--red)', fontSize: '12px', marginTop: '8px' }}>
              Something went wrong — please try again.
            </p>
          )}
        </div>

        {/* Features */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', borderBottom: '2px solid var(--orange)', paddingBottom: '10px', display: 'inline-block' }}>
            Features
          </h2>
          <div className="stagger-children" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '10px',
            marginTop: '16px',
          }}>
            {tool.features.map((feature, i) => (
              <div key={i} style={{
                background: 'var(--bg-white)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                fontSize: '14px',
                boxShadow: '0 1px 3px rgba(15,17,17,.08)',
              }}>
                <span style={{ color: 'var(--green)', fontWeight: 800, flexShrink: 0, marginTop: '1px' }}>✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Competitor comparison */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', borderBottom: '2px solid var(--orange)', paddingBottom: '10px', display: 'inline-block' }}>
            Why Switch to {tool.name}?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', marginBottom: '20px', marginTop: '8px' }}>
            {tool.name} directly addresses the top complaints from users of these alternatives.
          </p>

          <div className="stagger-children" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
            {tool.competitors.map((comp, i) => (
              <div key={i} className="competitor-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <strong style={{ fontSize: '15px' }}>{comp.name}</strong>
                  <span className="competitor-price">{comp.priceRange}</span>
                </div>
                <p className="competitor-complaint">&ldquo;{comp.topComplaint}&rdquo;</p>
              </div>
            ))}
          </div>

          <div style={{
            background: '#e8f5e9',
            border: '1px solid #c8e6c9',
            borderRadius: '10px',
            padding: '20px 22px',
          }}>
            <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--green)', marginBottom: '12px' }}>
              How {tool.name} fixes these problems:
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {tool.competitorFixes.map((fix, i) => (
                <li key={i} style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'flex-start',
                  fontSize: '13.5px',
                  color: '#1b5e20',
                  padding: '5px 0',
                }}>
                  <span style={{ fontWeight: 800, flexShrink: 0 }}>✓</span>
                  {fix}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Local SEO city links */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', borderBottom: '2px solid var(--orange)', paddingBottom: '10px', display: 'inline-block' }}>
            Serving Businesses Nationwide
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', marginBottom: '16px', marginTop: '8px' }}>
            {tool.name} is available everywhere, with locally optimized pages for these growing markets:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {tool.targetCities.map((city, i) => (
              <Link
                key={i}
                href={`/tools/${tool.slug}/${city.city.toLowerCase().replace(/\s+/g, '-')}-${city.state.toLowerCase()}`}
                className="city-link"
              >
                {city.city}, {city.state}
              </Link>
            ))}
          </div>
        </section>

        {/* Related tools */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '6px', borderBottom: '2px solid var(--orange)', paddingBottom: '10px', display: 'inline-block' }}>
            Related Tools
          </h2>
          <p style={{ marginTop: '8px' }}>
            <Link href="/" style={{ fontSize: '14px' }}>← Browse all {19} free tools on AutomateStack</Link>
          </p>
        </section>
      </main>
    </>
  );
}
