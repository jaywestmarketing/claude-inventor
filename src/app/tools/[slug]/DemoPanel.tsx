'use client';

import { useState, useEffect, useRef } from 'react';

interface DemoPanelProps {
  slug: string;
  toolName: string;
}

/* ─── Payroll Calculator ─── */
function PayrollDemo() {
  const [rate, setRate] = useState('25');
  const [hours, setHours] = useState('40');
  const [frequency, setFrequency] = useState('biweekly');

  const hourly = parseFloat(rate) || 0;
  const weeklyHrs = parseFloat(hours) || 0;

  const weeksMap: Record<string, number> = {
    weekly: 1,
    biweekly: 2,
    semimonthly: 2.167,
    monthly: 4.333,
  };
  const gross = hourly * weeklyHrs * (weeksMap[frequency] ?? 2);
  const fica = gross * 0.0765;
  // Simplified federal withholding estimate (not tax advice)
  const federal = gross > 0 ? Math.max(0, (gross - 500) * 0.12) : 0;
  const net = Math.max(0, gross - fica - federal);

  const fmt = (n: number) =>
    n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const results = [
    { label: 'Gross Pay', value: `$${fmt(gross)}`, color: 'var(--navy)' },
    { label: 'FICA (7.65%)', value: `-$${fmt(fica)}`, color: '#c0392b' },
    { label: 'Est. Federal Tax', value: `-$${fmt(federal)}`, color: '#c0392b' },
    { label: 'Est. Net Pay', value: `$${fmt(net)}`, color: 'var(--green)' },
  ];

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
          gap: '12px',
          marginBottom: '20px',
        }}
      >
        <div>
          <label style={labelStyle}>Hourly Rate ($)</label>
          <input
            type="number"
            value={rate}
            min="0"
            onChange={e => setRate(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Hours per Week</label>
          <input
            type="number"
            value={hours}
            min="0"
            max="80"
            onChange={e => setHours(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Pay Frequency</label>
          <select
            value={frequency}
            onChange={e => setFrequency(e.target.value)}
            style={{ ...inputStyle, background: '#fff' }}
          >
            <option value="weekly">Weekly</option>
            <option value="biweekly">Bi-weekly</option>
            <option value="semimonthly">Semi-monthly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '10px',
          marginBottom: '12px',
        }}
      >
        {results.map((r, i) => (
          <div key={i} style={resultCard}>
            <div style={resultLabel}>{r.label}</div>
            <div style={{ ...resultValue, color: r.color }}>{r.value}</div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: '11px', color: 'var(--text-secondary)', margin: 0 }}>
        * Estimates only. Federal tax uses a simplified withholding model. State taxes not
        included. Not financial or tax advice.
      </p>
    </div>
  );
}

/* ─── Commission Calculator ─── */
function CommissionDemo() {
  const [dealSize, setDealSize] = useState('10000');
  const [quota, setQuota] = useState('50000');
  const [rate1, setRate1] = useState('5');
  const [rate2, setRate2] = useState('8');
  const [rate3, setRate3] = useState('12');

  const deal = parseFloat(dealSize) || 0;
  const q = Math.max(parseFloat(quota) || 1, 1);
  const attainment = (deal / q) * 100;

  const r1 = parseFloat(rate1) / 100 || 0;
  const r2 = parseFloat(rate2) / 100 || 0;
  const r3 = parseFloat(rate3) / 100 || 0;

  let effectiveRate: number;
  if (attainment < 50) effectiveRate = r1;
  else if (attainment < 100) effectiveRate = r2;
  else effectiveRate = r3;

  const commission = deal * effectiveRate;

  const fmt = (n: number) =>
    n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const tiers = [
    { label: '0–49% quota (%)', val: rate1, set: setRate1 },
    { label: '50–99% quota (%)', val: rate2, set: setRate2 },
    { label: '100%+ quota (%)', val: rate3, set: setRate3 },
  ];

  const results = [
    {
      label: 'Quota Attainment',
      value: `${attainment.toFixed(1)}%`,
      color: attainment >= 100 ? 'var(--green)' : 'var(--orange)',
    },
    { label: 'Effective Rate', value: `${(effectiveRate * 100).toFixed(1)}%`, color: 'var(--navy)' },
    { label: 'Commission Earned', value: `$${fmt(commission)}`, color: 'var(--green)' },
  ];

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: '12px',
          marginBottom: '14px',
        }}
      >
        <div>
          <label style={labelStyle}>Deal Size ($)</label>
          <input
            type="number"
            value={dealSize}
            min="0"
            onChange={e => setDealSize(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Quarterly Quota ($)</label>
          <input
            type="number"
            value={quota}
            min="1"
            onChange={e => setQuota(e.target.value)}
            style={inputStyle}
          />
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          marginBottom: '18px',
        }}
      >
        {tiers.map((t, i) => (
          <div key={i}>
            <label style={labelStyle}>{t.label}</label>
            <input
              type="number"
              value={t.val}
              min="0"
              max="100"
              step="0.5"
              onChange={e => t.set(e.target.value)}
              style={inputStyle}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '10px',
        }}
      >
        {results.map((r, i) => (
          <div key={i} style={resultCard}>
            <div style={resultLabel}>{r.label}</div>
            <div style={{ ...resultValue, color: r.color }}>{r.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Email Signature Generator ─── */
function EmailSigDemo() {
  const [name, setName] = useState('Alex Johnson');
  const [title, setTitle] = useState('Senior Account Manager');
  const [company, setCompany] = useState('Acme Corp');
  const [phone, setPhone] = useState('+1 (555) 234-5678');
  const [emailAddr, setEmailAddr] = useState('alex@acmecorp.com');
  const [website, setWebsite] = useState('acmecorp.com');
  const [copied, setCopied] = useState(false);

  const escape = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const sigHtml = `<table cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;font-size:13px;color:#222;border-collapse:collapse"><tr><td style="padding-right:16px;border-right:3px solid #003087;vertical-align:top;white-space:nowrap"><strong style="font-size:15px;color:#003087;display:block">${escape(name) || 'Your Name'}</strong><span style="color:#555;display:block">${escape(title) || 'Your Title'}</span><strong style="color:#003087;display:block">${escape(company) || 'Your Company'}</strong></td><td style="padding-left:16px;vertical-align:top;color:#555;font-size:12px;line-height:1.8">${phone ? `📞 ${escape(phone)}<br>` : ''}${emailAddr ? `✉ ${escape(emailAddr)}<br>` : ''}${website ? `🌐 ${escape(website)}` : ''}</td></tr></table>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(sigHtml).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const fields = [
    { label: 'Full Name', val: name, set: setName, ph: 'Alex Johnson' },
    { label: 'Job Title', val: title, set: setTitle, ph: 'Senior Manager' },
    { label: 'Company', val: company, set: setCompany, ph: 'Acme Corp' },
    { label: 'Phone', val: phone, set: setPhone, ph: '+1 (555) 000-0000' },
    { label: 'Email', val: emailAddr, set: setEmailAddr, ph: 'you@company.com' },
    { label: 'Website', val: website, set: setWebsite, ph: 'company.com' },
  ];

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
          gap: '10px',
          marginBottom: '20px',
        }}
      >
        {fields.map((f, i) => (
          <div key={i}>
            <label style={labelStyle}>{f.label}</label>
            <input
              type="text"
              value={f.val}
              placeholder={f.ph}
              onChange={e => f.set(e.target.value)}
              style={{ ...inputStyle, boxSizing: 'border-box' as const }}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          background: '#f8f9fa',
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '14px',
        }}
      >
        <div style={{ ...labelStyle, marginBottom: '12px', display: 'block' }}>Live Preview</div>
        <div dangerouslySetInnerHTML={{ __html: sigHtml }} />
      </div>

      <button
        onClick={handleCopy}
        style={{
          background: 'linear-gradient(to bottom, #f5c26b, #e47911)',
          border: '1px solid #c07600',
          color: '#111',
          fontWeight: 700,
          padding: '10px 22px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        {copied ? '✓ Copied to clipboard!' : 'Copy HTML Signature'}
      </button>
      <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '10px' }}>
        Paste the copied HTML directly into Gmail → Settings → Signature.
      </p>
    </div>
  );
}

/* ─── Time Tracker ─── */
const PROJECTS = [
  'Acme Corp – Website Redesign',
  'Q2 Marketing Report',
  'Beta Launch Planning',
  'Admin / Internal',
];

interface TimeEntry {
  project: string;
  duration: number;
  start: string;
  end: string;
  billable: boolean;
}

const INITIAL_ENTRIES: TimeEntry[] = [
  { project: 'Acme Corp – Website Redesign', duration: 83, start: '9:15 AM', end: '10:38 AM', billable: true },
  { project: 'Q2 Marketing Report', duration: 45, start: '11:05 AM', end: '11:50 AM', billable: true },
  { project: 'Admin / Internal', duration: 30, start: '2:00 PM', end: '2:30 PM', billable: false },
];

const WEEKLY_BASE: Record<string, number> = {
  'Acme Corp – Website Redesign': 8.5,
  'Q2 Marketing Report': 4.2,
  'Beta Launch Planning': 6.0,
  'Admin / Internal': 1.8,
};

function TimeTrackerDemo() {
  const [project, setProject] = useState(PROJECTS[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [entries, setEntries] = useState<TimeEntry[]>(INITIAL_ENTRIES);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => setSeconds(s => s + 1), 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isRunning]);

  const fmtTimer = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  const fmtDur = (mins: number) => {
    if (mins < 60) return `${mins}m`;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  };

  const fmtTime = (d: Date) =>
    d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  const handleLog = () => {
    if (seconds < 5) return;
    const mins = Math.max(1, Math.round(seconds / 60));
    const now = new Date();
    const start = new Date(now.getTime() - seconds * 1000);
    setEntries(prev => [
      ...prev,
      { project, duration: mins, start: fmtTime(start), end: fmtTime(now), billable: project !== 'Admin / Internal' },
    ]);
    setSeconds(0);
    setIsRunning(false);
  };

  const todayBillable = entries.filter(e => e.billable).reduce((s, e) => s + e.duration, 0);
  const todayTotal = entries.reduce((s, e) => s + e.duration, 0);

  const weeklyExtra: Record<string, number> = {};
  entries.slice(INITIAL_ENTRIES.length).forEach(e => {
    weeklyExtra[e.project] = (weeklyExtra[e.project] || 0) + e.duration / 60;
  });
  const weeklyDisplay = PROJECTS.map(p => ({
    project: p,
    hours: (WEEKLY_BASE[p] || 0) + (weeklyExtra[p] || 0),
  }));
  const maxHours = Math.max(...weeklyDisplay.map(w => w.hours));

  return (
    <div>
      {/* Timer panel */}
      <div style={{ background: '#f0f4f8', borderRadius: '12px', padding: '24px', marginBottom: '16px', textAlign: 'center' }}>
        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>Active Project</label>
          <select
            value={project}
            onChange={e => setProject(e.target.value)}
            style={{ ...inputStyle, width: 'auto', minWidth: '240px', background: '#fff' }}
          >
            {PROJECTS.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>

        <div style={{
          fontSize: '54px',
          fontWeight: 800,
          fontFamily: 'monospace',
          color: isRunning ? '#16a34a' : 'var(--navy)',
          letterSpacing: '3px',
          lineHeight: 1,
          marginBottom: '20px',
          transition: 'color 0.2s',
        }}>
          {fmtTimer(seconds)}
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => setIsRunning(r => !r)}
            style={{
              background: isRunning
                ? 'linear-gradient(to bottom,#e84040,#b91c1c)'
                : 'linear-gradient(to bottom,#f5c26b,#e47911)',
              border: isRunning ? '1px solid #991b1b' : '1px solid #c07600',
              color: isRunning ? '#fff' : '#111',
              fontWeight: 700,
              padding: '10px 26px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            {isRunning ? '⏸ Pause' : '▶ Start Timer'}
          </button>
          <button
            onClick={handleLog}
            disabled={seconds < 5}
            style={{
              background: seconds >= 5 ? 'var(--navy)' : '#ccc',
              border: 'none',
              color: '#fff',
              fontWeight: 700,
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: seconds >= 5 ? 'pointer' : 'not-allowed',
              fontSize: '14px',
            }}
          >
            ✓ Log Entry
          </button>
          <button
            onClick={() => { setSeconds(0); setIsRunning(false); }}
            style={{
              background: '#fff',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
              padding: '10px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            ↺ Reset
          </button>
        </div>
      </div>

      {/* Today's log */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ ...labelStyle, display: 'block', marginBottom: '10px' }}>Today&apos;s Time Log</div>
        <div style={{ border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
          {entries.map((entry, i) => (
            <div
              key={i}
              style={{
                padding: '12px 16px',
                borderBottom: i < entries.length - 1 ? '1px solid var(--border)' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: i % 2 === 0 ? '#fff' : '#fafafa',
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--navy)' }}>{entry.project}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {entry.start} – {entry.end}
                  {entry.billable && (
                    <span style={{ marginLeft: '8px', color: '#16a34a', fontWeight: 700 }}>● Billable</span>
                  )}
                </div>
              </div>
              <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--navy)', flexShrink: 0 }}>
                {fmtDur(entry.duration)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '20px', marginTop: '10px', fontSize: '13px', fontWeight: 600 }}>
          <span style={{ color: 'var(--text-secondary)' }}>
            Total: <span style={{ color: 'var(--navy)' }}>{fmtDur(todayTotal)}</span>
          </span>
          <span style={{ color: 'var(--text-secondary)' }}>
            Billable: <span style={{ color: '#16a34a' }}>{fmtDur(todayBillable)}</span>
          </span>
        </div>
      </div>

      {/* Weekly chart */}
      <div>
        <div style={{ ...labelStyle, display: 'block', marginBottom: '10px' }}>This Week by Project</div>
        <div style={{ border: '1px solid var(--border)', borderRadius: '8px', padding: '16px', background: '#fff' }}>
          {weeklyDisplay.map((w, i) => (
            <div key={i} style={{ marginBottom: i < weeklyDisplay.length - 1 ? '14px' : 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '13px' }}>
                <span style={{ color: 'var(--navy)', fontWeight: 500 }}>{w.project}</span>
                <span style={{ fontWeight: 700 }}>{w.hours.toFixed(1)}h</span>
              </div>
              <div style={{ background: '#f0f0f0', borderRadius: '4px', height: '7px' }}>
                <div style={{
                  background: 'var(--orange)',
                  borderRadius: '4px',
                  height: '7px',
                  width: `${Math.min(100, (w.hours / maxHours) * 100)}%`,
                  transition: 'width 0.4s ease',
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Shared styles ─── */
const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '12px',
  fontWeight: 600,
  marginBottom: '4px',
  color: 'var(--text-secondary)',
  textTransform: 'uppercase',
  letterSpacing: '.04em',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px 10px',
  border: '1px solid var(--border)',
  borderRadius: '6px',
  fontSize: '14px',
};

const resultCard: React.CSSProperties = {
  background: 'var(--bg-white)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  padding: '14px 16px',
  textAlign: 'center',
  boxShadow: '0 1px 3px rgba(15,17,17,.08)',
};

const resultLabel: React.CSSProperties = {
  fontSize: '10px',
  color: 'var(--text-secondary)',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '.06em',
  marginBottom: '6px',
};

const resultValue: React.CSSProperties = {
  fontSize: '20px',
  fontWeight: 800,
};

/* ─── Main export ─── */
const demoMap: Record<string, React.ReactNode> = {
  'payroll-calc': <PayrollDemo />,
  'commission-calc': <CommissionDemo />,
  'email-sig-gen': <EmailSigDemo />,
  'time-tracker': <TimeTrackerDemo />,
};

export default function DemoPanel({ slug, toolName }: DemoPanelProps) {
  const demo = demoMap[slug];
  if (!demo) return null;

  return (
    <section style={{ marginBottom: '40px' }}>
      <h2
        style={{
          fontSize: '1.2rem',
          fontWeight: 700,
          marginBottom: '8px',
          borderBottom: '2px solid var(--orange)',
          paddingBottom: '10px',
          display: 'inline-block',
        }}
      >
        Try {toolName} — Free Demo
      </h2>
      <p
        style={{
          color: 'var(--text-secondary)',
          fontSize: '13.5px',
          marginBottom: '22px',
          marginTop: '8px',
        }}
      >
        Fully interactive, browser-only demo. No sign-up required.
      </p>
      {demo}
    </section>
  );
}
