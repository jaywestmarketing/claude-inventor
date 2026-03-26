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
      <div className="breadcrumb">
        <nav style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href={`/tools/${tool.slug}`}>{tool.name}</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-primary)' }}>{city.city}, {city.state}</span>
        </nav>
      </div>

      <main className="container" style={{ maxWidth: '900px' }}>
        {/* Hero */}
        <div className="animate-fade-in-up" style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <span style={{ fontSize: '40px' }}>{tool.icon}</span>
            <div>
              <h1 style={{ fontSize: '1.8rem', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                {tool.name} in {city.city}, {city.state}
              </h1>
              <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
                <span className={`category-badge ${categoryBadgeClass[tool.category]}`}>
                  {categoryLabels[tool.category]}
                </span>
                <span className="status-demo">Demo</span>
                <span style={{
                  padding: '3px 10px',
                  background: '#dbeafe',
                  color: '#1e40af',
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
            fontSize: '1.05rem',
            lineHeight: 1.7,
            margin: '24px 0 0',
          }}>
            {tool.name} helps businesses in {city.city}, {city.state} (pop. {city.population}) streamline their {categoryLabels[tool.category].toLowerCase()} workflows. {tool.description}
          </p>
        </div>

        {/* Waitlist CTA */}
        <div className="tool-tile animate-fade-in-up" style={{ padding: '32px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>
            Get Early Access in {city.city}
          </h2>
          {submitted ? (
            <div>
              <p className="text-success" style={{ fontWeight: 600 }}>You&apos;re on the list!</p>
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

        {/* Features */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '16px' }}>
            Why {city.city} Businesses Choose {tool.name}
          </h2>
          <div className="stagger-children" style={{
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
                <span style={{ color: 'var(--accent-success)', fontSize: '16px', flexShrink: 0 }}>&#10003;</span>
                <span style={{ fontSize: '14px' }}>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Competitor comparison */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>
            {tool.name} vs Alternatives in {city.city}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '20px' }}>
            {city.city} businesses often compare {tool.name} to these alternatives. See why professionals are switching.
          </p>

          <div className="stagger-children" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {tool.competitors.map((comp, i) => (
              <div key={i} className="competitor-card">
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}>
                  <strong style={{ fontSize: '15px' }}>{comp.name}</strong>
                  <span className="competitor-price">{comp.priceRange}</span>
                </div>
                <p className="competitor-complaint">Common complaint: {comp.topComplaint}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '24px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '12px', color: 'var(--accent-success)' }}>
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
                  <span style={{ color: 'var(--accent-success)', flexShrink: 0 }}>&#10003;</span>
                  {fix}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '20px' }}>
            Frequently Asked Questions — {tool.name} in {city.city}
          </h2>
          <div>
            <details>
              <summary>
                Is {tool.name} available for businesses in {city.city}, {city.state}?
                <span className="faq-icon">+</span>
              </summary>
              <p className="faq-answer">
                Yes. {tool.name} is a browser-based tool available to all businesses in {city.city}, {city.state}. No installation required — just sign up for the waitlist to get early access.
              </p>
            </details>
            <details>
              <summary>
                How much does {tool.name} cost in {city.city}?
                <span className="faq-icon">+</span>
              </summary>
              <p className="faq-answer">
                {tool.name} is currently free in demo mode. Join the waitlist to lock in early-access pricing when we launch the full version.
              </p>
            </details>
            <details>
              <summary>
                What are the best {categoryLabels[tool.category].toLowerCase()} tools for {city.city} businesses?
                <span className="faq-icon">+</span>
              </summary>
              <p className="faq-answer">
                Popular options include {tool.competitors.map(c => c.name).join(', ')}. {tool.name} by AutomateStack is a free alternative that addresses common complaints like {tool.competitorFixes.slice(0, 2).join(' and ').toLowerCase()}.
              </p>
            </details>
            <details>
              <summary>
                Does {tool.name} require any software installation?
                <span className="faq-icon">+</span>
              </summary>
              <p className="faq-answer">
                No. {tool.name} is a browser-based web application that works on any device — desktop, tablet, or mobile. No downloads, no IT setup required.
              </p>
            </details>
            <details>
              <summary>
                How does {tool.name} compare to {tool.competitors[0]?.name}?
                <span className="faq-icon">+</span>
              </summary>
              <p className="faq-answer">
                Unlike {tool.competitors[0]?.name} ({tool.competitors[0]?.priceRange}), which users report issues with &quot;{tool.competitors[0]?.topComplaint}&quot;, {tool.name} offers a free demo with {tool.competitorFixes[0]?.toLowerCase()}.
              </p>
            </details>
          </div>
        </section>

        {/* Other cities */}
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
                  className="city-link"
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
