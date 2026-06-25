'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { tools } from '@/data/tools';

interface WaitlistEntry {
  email: string;
  timestamp: string;
  city?: string;
  state?: string;
}

interface SignupData {
  tool: string;
  slug: string;
  count: number;
  latest: string | null;
  cities: string[];
}

const GA4_BASE = 'https://analytics.google.com/analytics/web/';

const GA4_LINKS = [
  { label: '📄 Pages & Screens', url: `${GA4_BASE}#/p_placeholder/reports/explorer?params=_u..nav%3Dmaui&r=all-pages-and-screens` },
  { label: '⚡ Real-time', url: `${GA4_BASE}#/p_placeholder/reports/realtime` },
  { label: '🌍 Traffic sources', url: `${GA4_BASE}#/p_placeholder/reports/acquisition/overview` },
  { label: '📍 Cities', url: `${GA4_BASE}#/p_placeholder/reports/user/user-demographics-detail?params=_u..nav%3Dmaui%26_u.dimension%3Dcity` },
  { label: '📱 Devices', url: `${GA4_BASE}#/p_placeholder/reports/user/tech-detail?params=_u..nav%3Dmaui%26_u.dimension%3DdeviceCategory` },
];

function StatCard({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #e2e8f0',
      borderRadius: '10px',
      padding: '18px 20px',
      boxShadow: '0 1px 3px rgba(0,0,0,.06)',
    }}>
      <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.07em', color: '#64748b', marginBottom: '6px' }}>
        {label}
      </div>
      <div style={{ fontSize: '28px', fontWeight: 800, color: '#0f3460', lineHeight: 1 }}>
        {value}
      </div>
      {sub && <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>{sub}</div>}
    </div>
  );
}

export default function AdminClient() {
  const [signups, setSignups] = useState<SignupData[]>([]);
  const [lookerUrl, setLookerUrl] = useState('');
  const [lookerInput, setLookerInput] = useState('');
  const [gaId, setGaId] = useState('');
  const [activeTab, setActiveTab] = useState<'signups' | 'embed' | 'setup'>('signups');

  useEffect(() => {
    // Load waitlist data from localStorage
    try {
      const raw = JSON.parse(localStorage.getItem('waitlist') || '{}') as Record<string, WaitlistEntry[]>;
      const data: SignupData[] = tools.map(tool => {
        const entries: WaitlistEntry[] = [];
        // Collect all entries for this tool (by id prefix)
        for (const [key, val] of Object.entries(raw)) {
          if (key.startsWith(tool.id)) {
            entries.push(...(Array.isArray(val) ? val : []));
          }
        }
        const cities = [...new Set(
          entries
            .filter(e => e.city)
            .map(e => `${e.city}, ${e.state}`)
        )];
        const latest = entries.length > 0
          ? entries.sort((a, b) => b.timestamp.localeCompare(a.timestamp))[0].timestamp
          : null;
        return { tool: tool.name, slug: tool.slug, count: entries.length, latest, cities };
      }).filter(d => d.count > 0).sort((a, b) => b.count - a.count);
      setSignups(data);
    } catch {
      // localStorage unavailable
    }

    // Load saved Looker URL
    const saved = localStorage.getItem('as_looker_url') || '';
    setLookerUrl(saved);
    setLookerInput(saved);

    // Detect GA ID from gtag if loaded
    try {
      const gaKey = Object.keys(window).find(k => k.startsWith('ga-measurement'));
      if (gaKey) setGaId(gaKey);
    } catch {
      // not available server-side
    }
  }, []);

  const totalSignups = signups.reduce((s, d) => s + d.count, 0);
  const topTool = signups[0];

  const saveLooker = () => {
    localStorage.setItem('as_looker_url', lookerInput);
    setLookerUrl(lookerInput);
  };

  const tabStyle = (tab: typeof activeTab): React.CSSProperties => ({
    padding: '8px 18px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '13px',
    background: activeTab === tab ? '#0f3460' : 'transparent',
    color: activeTab === tab ? '#fff' : '#64748b',
    transition: 'all .15s',
  });

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{ background: '#0f3460', color: '#fff', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '18px', fontWeight: 800 }}>AutomateStack Admin</div>
          <div style={{ fontSize: '12px', opacity: .7, marginTop: '2px' }}>Traffic &amp; Signups Dashboard</div>
        </div>
        <Link href="/" style={{ color: '#e47911', fontWeight: 600, fontSize: '13px', textDecoration: 'none' }}>
          ← Back to site
        </Link>
      </div>

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '24px 16px' }}>

        {/* Summary cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px', marginBottom: '28px' }}>
          <StatCard label="Total Signups" value={totalSignups} sub="across all tools (this device)" />
          <StatCard label="Tools with Signups" value={signups.length} sub={`of ${tools.length} total tools`} />
          <StatCard
            label="Top Tool"
            value={topTool ? topTool.count : '—'}
            sub={topTool ? topTool.tool : 'No signups yet'}
          />
          <StatCard label="Total Tools" value={tools.length} sub="published on site" />
        </div>

        {/* GA4 quick links */}
        <div style={{
          background: '#fff',
          border: '1px solid #e2e8f0',
          borderRadius: '10px',
          padding: '16px 20px',
          marginBottom: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,.06)',
        }}>
          <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.07em', color: '#64748b', marginBottom: '12px' }}>
            Open in Google Analytics 4
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {GA4_LINKS.map((l, i) => (
              <a
                key={i}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#eff6ff',
                  border: '1px solid #bfdbfe',
                  color: '#1d4ed8',
                  borderRadius: '6px',
                  padding: '7px 14px',
                  fontSize: '13px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://analytics.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#e47911',
                border: 'none',
                color: '#fff',
                borderRadius: '6px',
                padding: '7px 14px',
                fontSize: '13px',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Open GA4 Home ↗
            </a>
          </div>
          <p style={{ margin: '10px 0 0', fontSize: '12px', color: '#94a3b8' }}>
            GA4 links open in a new tab. You must be logged into the Google account that owns the AutomateStack property.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '4px', marginBottom: '16px', background: '#f1f5f9', borderRadius: '8px', padding: '4px', width: 'fit-content' }}>
          <button style={tabStyle('signups')} onClick={() => setActiveTab('signups')}>Waitlist Signups</button>
          <button style={tabStyle('embed')} onClick={() => setActiveTab('embed')}>Looker Studio Embed</button>
          <button style={tabStyle('setup')} onClick={() => setActiveTab('setup')}>GA4 Setup Guide</button>
        </div>

        {/* Tab: Signups */}
        {activeTab === 'signups' && (
          <div style={{
            background: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,.06)',
          }}>
            {signups.length === 0 ? (
              <div style={{ padding: '48px', textAlign: 'center', color: '#94a3b8' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>📭</div>
                <div style={{ fontWeight: 600, marginBottom: '6px' }}>No waitlist signups yet on this device</div>
                <div style={{ fontSize: '13px' }}>Signups are stored per-browser. As visitors submit emails on tool pages, they&apos;ll appear here. To see total signups across all visitors, connect a backend (next step in roadmap).</div>
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <th style={thStyle}>Tool</th>
                    <th style={thStyle}>Signups</th>
                    <th style={thStyle}>Cities</th>
                    <th style={thStyle}>Latest</th>
                    <th style={thStyle}>Page</th>
                  </tr>
                </thead>
                <tbody>
                  {signups.map((d, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                      <td style={tdStyle}>
                        <strong style={{ color: '#0f3460' }}>{d.tool}</strong>
                      </td>
                      <td style={tdStyle}>
                        <span style={{
                          background: '#dbeafe',
                          color: '#1d4ed8',
                          borderRadius: '20px',
                          padding: '2px 10px',
                          fontWeight: 700,
                          fontSize: '13px',
                        }}>
                          {d.count}
                        </span>
                      </td>
                      <td style={{ ...tdStyle, fontSize: '12px', color: '#64748b' }}>
                        {d.cities.length > 0 ? d.cities.slice(0, 3).join(', ') : '—'}
                      </td>
                      <td style={{ ...tdStyle, fontSize: '12px', color: '#94a3b8' }}>
                        {d.latest ? new Date(d.latest).toLocaleDateString() : '—'}
                      </td>
                      <td style={tdStyle}>
                        <Link href={`/tools/${d.slug}`} style={{ color: '#e47911', fontWeight: 600, fontSize: '12px' }}>
                          View →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Tab: Looker Studio embed */}
        {activeTab === 'embed' && (
          <div>
            <div style={{
              background: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '20px',
              marginBottom: '16px',
              boxShadow: '0 1px 3px rgba(0,0,0,.06)',
            }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f3460', marginBottom: '10px' }}>
                Paste your Looker Studio embed URL
              </div>
              <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 12px' }}>
                Create a free report at <a href="https://lookerstudio.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1d4ed8' }}>lookerstudio.google.com</a> → connect Google Analytics 4 → Share → Embed → copy the iframe <code>src</code> URL.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="url"
                  value={lookerInput}
                  onChange={e => setLookerInput(e.target.value)}
                  placeholder="https://lookerstudio.google.com/embed/reporting/..."
                  style={{
                    flex: 1,
                    padding: '9px 12px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    fontSize: '13px',
                  }}
                />
                <button
                  onClick={saveLooker}
                  style={{
                    background: '#0f3460',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '9px 20px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer',
                  }}
                >
                  Save &amp; Load
                </button>
              </div>
            </div>

            {lookerUrl ? (
              <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,.06)' }}>
                <iframe
                  src={lookerUrl}
                  style={{ width: '100%', height: '680px', border: 'none', display: 'block' }}
                  title="Google Analytics Traffic Report"
                  allowFullScreen
                />
              </div>
            ) : (
              <div style={{
                background: '#f8fafc',
                border: '2px dashed #cbd5e1',
                borderRadius: '10px',
                padding: '60px 24px',
                textAlign: 'center',
                color: '#94a3b8',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>📊</div>
                <div style={{ fontWeight: 600, marginBottom: '8px', color: '#64748b' }}>No report embedded yet</div>
                <div style={{ fontSize: '13px' }}>Paste a Looker Studio embed URL above to see your live GA4 traffic dashboard here.</div>
              </div>
            )}
          </div>
        )}

        {/* Tab: Setup guide */}
        {activeTab === 'setup' && (
          <div style={{
            background: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '10px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,.06)',
          }}>
            <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0f3460', margin: '0 0 20px' }}>
              Full Setup Guide
            </h2>

            {[
              {
                step: '1',
                title: 'Create a GA4 Property',
                body: 'Go to analytics.google.com → Admin → Create Property. Choose "Web", enter https://realetools.netlify.app as the URL. Copy the Measurement ID (format: G-XXXXXXXXXX).',
              },
              {
                step: '2',
                title: 'Add the ID to Netlify',
                body: 'Netlify dashboard → your site → Site configuration → Environment variables → Add: NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX. Then trigger a redeploy (Deploys tab → Trigger deploy).',
              },
              {
                step: '3',
                title: 'Verify tracking is live',
                body: 'Visit automatestack.com in an incognito window, then open GA4 → Reports → Realtime. You should see 1 active user appear within 30 seconds.',
              },
              {
                step: '4',
                title: 'Create a Looker Studio report (optional)',
                body: 'Go to lookerstudio.google.com → Blank report → Add data → Google Analytics → select your AutomateStack property. Add a "Pages and screens" table. Click Share → Embed report → copy the iframe src URL. Paste it in the "Looker Studio Embed" tab above.',
              },
              {
                step: '5',
                title: 'Key reports to watch',
                body: 'Pages & Screens shows which tool pages and city pages get traffic. Acquisition shows whether traffic is from Google search (organic), direct, or social. User demographics → City validates your local SEO. Realtime shows what\'s happening right now.',
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: i < 4 ? '24px' : 0, paddingBottom: i < 4 ? '24px' : 0, borderBottom: i < 4 ? '1px solid #f1f5f9' : 'none' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#0f3460',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '14px',
                  flexShrink: 0,
                }}>
                  {item.step}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#0f3460', marginBottom: '6px' }}>{item.title}</div>
                  <div style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>{item.body}</div>
                </div>
              </div>
            ))}

            <div style={{ marginTop: '24px', padding: '14px 16px', background: '#eff6ff', borderRadius: '8px', border: '1px solid #bfdbfe', fontSize: '13px', color: '#1e40af' }}>
              <strong>Note:</strong> The waitlist signup counter on the Signups tab only shows data from <em>this browser</em> — signups are stored in localStorage. To see total signups from all visitors you&apos;ll need a database backend (planned in the roadmap).
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  padding: '10px 16px',
  textAlign: 'left',
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '.07em',
  color: '#64748b',
};

const tdStyle: React.CSSProperties = {
  padding: '12px 16px',
  fontSize: '14px',
};
