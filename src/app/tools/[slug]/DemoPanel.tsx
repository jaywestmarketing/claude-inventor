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

/* ─── Time Tracker Live Timer ─── */
function TimeTrackerDemo() {
  const [project, setProject] = useState('Website Redesign');
  const [client, setClient] = useState('Acme Corp');
  const [rate, setRate] = useState('150');
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [entries, setEntries] = useState<{ project: string; client: string; seconds: number; billable: number }[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setElapsed(e => e + 1), 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running]);

  const fmt = (s: number) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return [h, m, sec].map(n => String(n).padStart(2, '0')).join(':');
  };

  const billable = (elapsed / 3600) * (parseFloat(rate) || 0);

  const stop = () => {
    if (elapsed > 0) {
      setEntries(prev => [
        { project: project || 'Untitled', client: client || '—', seconds: elapsed, billable },
        ...prev,
      ].slice(0, 5));
    }
    setRunning(false);
    setElapsed(0);
  };

  const totalBillable = entries.reduce((sum, e) => sum + e.billable, 0);

  return (
    <div>
      {/* Timer controls */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))', gap: '12px', marginBottom: '16px' }}>
        <div>
          <label style={labelStyle}>Project</label>
          <input type="text" value={project} onChange={e => setProject(e.target.value)} placeholder="Project name" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Client</label>
          <input type="text" value={client} onChange={e => setClient(e.target.value)} placeholder="Client name" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Hourly Rate ($)</label>
          <input type="number" value={rate} min="0" onChange={e => setRate(e.target.value)} style={inputStyle} />
        </div>
      </div>

      {/* Big clock */}
      <div style={{ textAlign: 'center', background: 'var(--bg-white)', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px 20px', marginBottom: '16px' }}>
        <div style={{ fontSize: '52px', fontWeight: 800, fontVariantNumeric: 'tabular-nums', letterSpacing: '.04em', color: running ? 'var(--green)' : 'var(--navy)', lineHeight: 1, marginBottom: '8px' }}>
          {fmt(elapsed)}
        </div>
        <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '18px' }}>
          {running ? `Billing at $${(parseFloat(rate) || 0).toFixed(2)}/hr · Est. $${billable.toFixed(2)} earned` : 'Timer stopped'}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {!running ? (
            <button onClick={() => setRunning(true)} style={{ background: 'linear-gradient(to bottom,#2ecc71,#27ae60)', border: 'none', color: '#fff', fontWeight: 700, padding: '10px 28px', borderRadius: '6px', cursor: 'pointer', fontSize: '15px' }}>
              ▶ Start Timer
            </button>
          ) : (
            <>
              <button onClick={() => setRunning(false)} style={{ background: 'linear-gradient(to bottom,#f39c12,#e67e22)', border: 'none', color: '#fff', fontWeight: 700, padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '15px' }}>
                ⏸ Pause
              </button>
              <button onClick={stop} style={{ background: 'linear-gradient(to bottom,#e74c3c,#c0392b)', border: 'none', color: '#fff', fontWeight: 700, padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '15px' }}>
                ⏹ Stop & Log
              </button>
            </>
          )}
          {!running && elapsed > 0 && (
            <button onClick={stop} style={{ background: 'linear-gradient(to bottom,#f5c26b,#e47911)', border: '1px solid #c07600', color: '#111', fontWeight: 700, padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '15px' }}>
              ⏹ Log Entry
            </button>
          )}
        </div>
      </div>

      {/* Log */}
      {entries.length > 0 && (
        <div>
          <div style={{ ...labelStyle, display: 'block', marginBottom: '8px' }}>Recent Entries</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
            {entries.map((e, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-white)', border: '1px solid var(--border)', borderRadius: '8px', padding: '10px 14px', fontSize: '13px' }}>
                <div>
                  <strong>{e.project}</strong>
                  <span style={{ color: 'var(--text-secondary)', marginLeft: '8px' }}>{e.client}</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{fmt(e.seconds)}</span>
                  <span style={{ fontWeight: 700, color: 'var(--green)' }}>${e.billable.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'right', fontWeight: 700, fontSize: '14px' }}>
            Session Total: <span style={{ color: 'var(--green)' }}>${totalBillable.toFixed(2)}</span>
          </div>
        </div>
      )}
      {entries.length === 0 && (
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>
          Start a timer above. Logged entries appear here — no sign-up, all in your browser.
        </p>
      )}
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
