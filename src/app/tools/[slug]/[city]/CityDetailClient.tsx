'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Tool, CityTarget, categoryLabels, categoryBadgeClass } from '@/data/tools';

function citySlug(city: string, state: string): string {
  return `${city.toLowerCase().replace(/\s+/g, '-')}-${state.toLowerCase()}`;
}

export default function CityDetailClient({ tool, city }: { tool: Tool; city: CityTarget }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const waitlist = JSON.parse(localStorage.getItem('waitlist') || '{}');
    const key = `${tool.id}-${citySlug(city.city, city.state)}`;
    if (!waitlist[key]) waitlist[key] = [];
    waitlist[key].push({ email, timestamp: new Date().toISOString(), city: city.city, state: city.state });
    localStorage.setItem('waitlist', JSON.stringify(waitlist));
    setSubmitted(true);
  };

  const otherCities = tool.targetCities.filter(
    c => !(c.city === city.city && c.state === city.state)
  );

  return (
    <>
      <div style={{ padding: '20px 24px', position: 'relative', zIndex: 1 }}>
        <nav style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '14px' }}>
          <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
            Home
          </Link>
          <span style={{ color: 'var(--text-secondary)' }}>/</span>
          <Link href={`/tools/${tool.slug}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
            {tool.name}
          </Link>
          <span style={{ color: 'var(--text-secondary)' }}>/</span>
          <span style={{ color: 'var(--text-primary)' }}>{city.city}, {city.state}</span>
        </nav>
      </div>

      <main className="container" style={{ maxWidth: '900px' }}>
        {/* Hero */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <span style={{ fontSize: '40px' }}>{tool.icon}</span>
            <div>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1.2 }}>
                {tool.name} in {city.city}, {city.state}
              </h1>
              <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
                <span className={`category-badge ${categoryBadgeClass[tool.category]}`}>
                  {categoryLabels[tool.category]}
                </span>
                <span className="status-demo">Demo</span>
                <span style={{
                  padding: '4px 10px',
                  background: 'rgba(59, 130, 246, 0.15)',
                  color: '#60a5fa',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 600,
                }}>
                  {city.city}, {city.state}
                </span>
              </div>
            </div>
          </div>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            lineHeight: 1.7,
            margin: '24px 0 0',
          }}>
            {tool.name} helps businesses in {city.city}, {city.state} (pop. {city.population}) streamline their {categoryLabels[tool.category].toLowerCase()} workflows. {tool.description}
          </p>
        </div>

        {/* Waitlist CTA */}
        <div className="tool-tile" style={{ padding: '32px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>
            Get Early Access in {city.city}
          </h2>
          {submitted ? (
            <div>
              <p style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>You&apos;re on the list!</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '6px' }}>
                We&apos;ll email you as soon as {tool.name} is ready for businesses in {city.city}.
              </p>
            </div>
          ) : (
            <>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px' }}>
                {tool.name} is currently in demo mode. Join the waitlist to be the first in {city.city} to get full access when we launch.
              </p>
              <form className="waitlist-form" onSubmit={handleWaitlist} style={{ maxWidth: '480px' }}>
                <input
                  type="email"
                  className="waitlist-input"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label={`Join ${tool.name} waitlist for ${city.city}, ${city.state}`}
                />
                <button type="submit" className="waitlist-btn">Join Waitlist</button>
              </form>
            </>
          )}
        </div>

        {/* Why this tool for this city */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>
            Why {city.city} Businesses Choose {tool.name}
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '12px',
          }}>
            {tool.features.map((feature, i) => (
              <div key={i} className="tool-tile" style={{
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <span style={{ color: 'var(--accent-teal)', fontSize: '16px' }}>&#10003;</span>
                <span style={{ fontSize: '14px' }}>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Competitor comparison for this city */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>
            {tool.name} vs Alternatives in {city.city}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '20px' }}>
            {city.city} businesses often compare {tool.name} to these alternatives. See why professionals are switching.
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
                  gap: '8px',
                }}>
                  <strong style={{ fontSize: '15px' }}>{comp.name}</strong>
                  <span style={{
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    background: 'rgba(255,255,255,0.04)',
                    padding: '4px 10px',
                    borderRadius: '4px',
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
                  gap: '10px',
                }}>
                  <span style={{ color: 'var(--accent-teal)' }}>&#10003;</span>
                  {fix}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ for local SEO */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '20px' }}>
            Frequently Asked Questions — {tool.name} in {city.city}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="tool-tile" style={{ padding: '20px 24px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>
                Is {tool.name} available for businesses in {city.city}, {city.state}?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                Yes. {tool.name} is a browser-based tool available to all businesses in {city.city}, {city.state}. No installation required — just sign up for the waitlist to get early access.
              </p>
            </div>
            <div className="tool-tile" style={{ padding: '20px 24px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>
                How much does {tool.name} cost in {city.city}?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                {tool.name} is currently free in demo mode. Join the waitlist to lock in early-access pricing when we launch the full version.
              </p>
            </div>
            <div className="tool-tile" style={{ padding: '20px 24px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>
                What are the best {categoryLabels[tool.category].toLowerCase()} tools for {city.city} businesses?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                Popular options include {tool.competitors.map(c => c.name).join(', ')}. {tool.name} by AutomateStack is a free alternative that addresses common complaints like {tool.competitorFixes.slice(0, 2).join(' and ').toLowerCase()}.
              </p>
            </div>
            <div className="tool-tile" style={{ padding: '20px 24px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>
                Does {tool.name} require any software installation?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                No. {tool.name} is a browser-based web application that works on any device — desktop, tablet, or mobile. No downloads, no IT setup required.
              </p>
            </div>
            <div className="tool-tile" style={{ padding: '20px 24px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>
                How does {tool.name} compare to {tool.competitors[0]?.name}?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                Unlike {tool.competitors[0]?.name} ({tool.competitors[0]?.priceRange}), which users report issues with &quot;{tool.competitors[0]?.topComplaint}&quot;, {tool.name} offers a free demo with {tool.competitorFixes[0]?.toLowerCase()}.
              </p>
            </div>
          </div>
        </section>

        {/* Other cities served */}
        {otherCities.length > 0 && (
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>
              {tool.name} in Other Cities
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px' }}>
              {tool.name} also serves businesses in these growing markets:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {otherCities.map((c, i) => (
                <Link
                  key={i}
                  href={`/tools/${tool.slug}/${citySlug(c.city, c.state)}`}
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
                  {c.city}, {c.state}
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>AutomateStack &mdash; Free business automation tools, added daily.</p>
      </footer>
    </>
  );
}
