'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Tool, categoryLabels, categoryBadgeClass } from '@/data/tools';

const WEB3FORMS_KEY = '7d643d3d-d3b6-4d77-8935-e7f138b84270';

export default function ToolTile({ tool }: { tool: Tool }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === 'loading') return;
    setStatus('loading');

    // Persist locally
    try {
      const stored = JSON.parse(localStorage.getItem('waitlist') || '{}');
      if (!stored[tool.id]) stored[tool.id] = [];
      stored[tool.id].push({ email, timestamp: new Date().toISOString() });
      localStorage.setItem('waitlist', JSON.stringify(stored));
    } catch { /* localStorage unavailable */ }

    // Submit to Web3Forms
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `🔔 Waitlist: ${tool.name} [Dashboard]`,
          from_name: 'AutomateStack Waitlist',
          replyto: email,
          email,
          tool_name: tool.name,
          tool_slug: tool.slug,
          tool_tagline: tool.tagline,
          tool_category: tool.category,
          source: 'dashboard-grid',
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <article
      className="tool-tile"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <div className="tool-tile-top">
        {/* Header row */}
        <div className="tool-tile-header">
          <span className="tool-icon" role="img" aria-label={tool.name}>{tool.icon}</span>
          <div className="tool-meta" style={{ flex: 1 }}>
            <h3>
              <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
            </h3>
            <div className="tool-badges">
              <span className={`category-badge ${categoryBadgeClass[tool.category]}`}>
                {categoryLabels[tool.category]}
              </span>
              <span className="status-demo">Demo</span>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="tool-tagline" itemProp="description">{tool.tagline}</p>

        {/* Top 4 features */}
        <ul className="feature-list">
          {tool.features.slice(0, 4).map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        {tool.features.length > 4 && (
          <Link
            href={`/tools/${tool.slug}`}
            style={{ fontSize: '12px', color: 'var(--text-link)', display: 'block', marginBottom: '10px' }}
          >
            + {tool.features.length - 4} more features →
          </Link>
        )}

        {/* Competitor savings pill */}
        {tool.competitors.length > 0 && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '12px',
            fontSize: '12px',
            color: '#007600',
            fontWeight: 600,
          }}>
            <span>vs.</span>
            {tool.competitors.slice(0, 3).map((c, i) => (
              <span key={i} style={{
                background: '#e8f5e9',
                border: '1px solid #c8e6c9',
                borderRadius: '12px',
                padding: '2px 8px',
              }}>
                {c.name}
              </span>
            ))}
            {tool.competitors.length > 3 && (
              <span style={{ color: '#565959' }}>+{tool.competitors.length - 3} more</span>
            )}
          </div>
        )}
      </div>

      {/* Waitlist */}
      <div className="tool-tile-bottom">
        {status === 'success' ? (
          <p className="waitlist-success">
            ✓ You&apos;re on the list! We&apos;ll email you the moment {tool.name} early access opens.
          </p>
        ) : (
          <>
            <p className="waitlist-label">Get early access — join the waitlist</p>
            <form className="waitlist-form" onSubmit={handleWaitlist}>
              <input
                type="email"
                className="waitlist-input"
                placeholder="you@company.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                aria-label={`Join waitlist for ${tool.name}`}
                disabled={status === 'loading'}
              />
              <button type="submit" className="waitlist-btn" disabled={status === 'loading'}>
                {status === 'loading' ? '…' : 'Join'}
              </button>
            </form>
            {status === 'error' && (
              <p style={{ fontSize: '12px', color: '#c40000', marginTop: '6px' }}>
                Something went wrong — please try again.
              </p>
            )}
          </>
        )}
      </div>

      {/* Schema microdata */}
      <meta itemProp="name" content={tool.name} />
      <meta itemProp="applicationCategory" content="BusinessApplication" />
      <meta itemProp="operatingSystem" content="Web Browser" />
    </article>
  );
}
