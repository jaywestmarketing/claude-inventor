'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Tool, categoryLabels, categoryBadgeClass } from '@/data/tools';

export default function ToolDetailClient({ tool }: { tool: Tool }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const waitlist = JSON.parse(localStorage.getItem('waitlist') || '{}');
    if (!waitlist[tool.id]) waitlist[tool.id] = [];
    waitlist[tool.id].push({ email, timestamp: new Date().toISOString() });
    localStorage.setItem('waitlist', JSON.stringify(waitlist));
    setSubmitted(true);
  };

  return (
    <>
      <div style={{ padding: '20px 24px', position: 'relative', zIndex: 1 }}>
        <Link href="/" style={{
          color: 'var(--text-secondary)',
          textDecoration: 'none',
          fontSize: '14px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          &larr; Back to all tools
        </Link>
      </div>

      <main className="container" style={{ maxWidth: '900px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
          <span style={{ fontSize: '40px' }}>{tool.icon}</span>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>{tool.name}</h1>
            <span className={`category-badge ${categoryBadgeClass[tool.category]}`}>
              {categoryLabels[tool.category]}
            </span>
            <span className="status-demo" style={{ marginLeft: '8px' }}>Demo</span>
          </div>
        </div>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          lineHeight: 1.7,
          margin: '24px 0 40px'
        }}>
          {tool.description}
        </p>

        {/* Waitlist CTA */}
        <div className="tool-tile" style={{ padding: '32px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Get Early Access</h2>
          {submitted ? (
            <div>
              <p style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>You&apos;re on the list!</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '6px' }}>
                We&apos;ll email you as soon as {tool.name} is ready for full access.
              </p>
            </div>
          ) : (
            <>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px' }}>
                {tool.name} is currently in demo mode. Join the waitlist to be first in line when we launch the full version.
              </p>
              <form className="waitlist-form" onSubmit={handleWaitlist} style={{ maxWidth: '480px' }}>
                <input
                  type="email"
                  className="waitlist-input"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label={`Join waitlist for ${tool.name}`}
                />
                <button type="submit" className="waitlist-btn">Join Waitlist</button>
              </form>
            </>
          )}
        </div>

        {/* Features */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '20px' }}>Features</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '12px'
          }}>
            {tool.features.map((feature, i) => (
              <div key={i} className="tool-tile" style={{
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{ color: 'var(--accent-teal)', fontSize: '16px' }}>&#10003;</span>
                <span style={{ fontSize: '14px' }}>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Competitor Comparison */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>
            Why Switch to {tool.name}?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '20px' }}>
            See how {tool.name} addresses the top complaints from users of leading alternatives.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {tool.competitors.map((comp, i) => (
              <div key={i} className="tool-tile" style={{ padding: '20px 24px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <strong style={{ fontSize: '15px' }}>{comp.name}</strong>
                  <span style={{
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    background: 'rgba(255,255,255,0.04)',
                    padding: '4px 10px',
                    borderRadius: '4px'
                  }}>
                    {comp.priceRange}
                  </span>
                </div>
                <p style={{ color: '#fb7185', fontSize: '13px' }}>
                  Common complaint: {comp.topComplaint}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '24px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '12px', color: 'var(--accent-teal)' }}>
              How {tool.name} is different:
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {tool.competitorFixes.map((fix, i) => (
                <li key={i} style={{
                  padding: '8px 0',
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  gap: '10px'
                }}>
                  <span style={{ color: 'var(--accent-teal)' }}>&#10003;</span>
                  {fix}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Service Areas - Local SEO */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>
            Serving Businesses Nationwide
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px' }}>
            {tool.name} is available to businesses everywhere, with optimized support for these growing markets:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {tool.targetCities.map((city, i) => (
              <Link
                key={i}
                href={`/tools/${tool.slug}/${city.city.toLowerCase().replace(/\s+/g, '-')}-${city.state.toLowerCase()}`}
                style={{
                  padding: '8px 14px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
              >
                {city.city}, {city.state}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>AutomateStack &mdash; Free business automation tools, added daily.</p>
      </footer>
    </>
  );
}
