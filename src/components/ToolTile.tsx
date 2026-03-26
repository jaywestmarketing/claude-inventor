'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Tool, categoryLabels, categoryBadgeClass } from '@/data/tools';

export default function ToolTile({ tool }: { tool: Tool }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    const waitlist = JSON.parse(localStorage.getItem('waitlist') || '{}');
    if (!waitlist[tool.id]) waitlist[tool.id] = [];
    waitlist[tool.id].push({ email, timestamp: new Date().toISOString() });
    localStorage.setItem('waitlist', JSON.stringify(waitlist));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <article className="tool-tile" itemScope itemType="https://schema.org/SoftwareApplication">
      <div style={{ padding: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '28px' }} role="img" aria-label={tool.name}>{tool.icon}</span>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }} itemProp="name">
                <Link href={`/tools/${tool.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  {tool.name}
                </Link>
              </h3>
              <span className={`category-badge ${categoryBadgeClass[tool.category]}`}>
                {categoryLabels[tool.category]}
              </span>
            </div>
          </div>
          <span className="status-demo">Demo</span>
        </div>

        <p itemProp="description" style={{
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          lineHeight: 1.6,
          marginBottom: '16px'
        }}>
          {tool.tagline}
        </p>

        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {tool.features.slice(0, 4).map((feature, i) => (
              <span key={i} className="feature-chip">{feature}</span>
            ))}
            {tool.features.length > 4 && (
              <Link href={`/tools/${tool.slug}`} style={{
                padding: '4px 10px',
                fontSize: '12px',
                color: 'var(--accent-secondary)',
                textDecoration: 'none',
              }}>
                +{tool.features.length - 4} more
              </Link>
            )}
          </div>
        </div>

        <div style={{
          padding: '14px',
          background: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-light)'
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '4px 0' }}>
              <p style={{ color: 'var(--accent-success)', fontWeight: 600, fontSize: '14px' }}>
                You&apos;re on the list!
              </p>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '12px', marginTop: '4px' }}>
                We&apos;ll notify you when {tool.name} is ready.
              </p>
            </div>
          ) : (
            <>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                Join the waitlist for early access
              </p>
              <form className="waitlist-form" onSubmit={handleWaitlist}>
                <input
                  type="email"
                  className="waitlist-input"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label={`Join waitlist for ${tool.name}`}
                />
                <button type="submit" className="waitlist-btn" disabled={loading}>
                  {loading ? '...' : 'Join'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <meta itemProp="applicationCategory" content="BusinessApplication" />
      <meta itemProp="operatingSystem" content="Web Browser" />
      <meta itemProp="offers" itemScope itemType="https://schema.org/Offer" />
    </article>
  );
}
