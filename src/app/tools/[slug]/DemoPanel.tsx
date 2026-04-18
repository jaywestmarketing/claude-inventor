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

/* ─── ContractGen ─── */
type ContractTemplate = 'nda' | 'service' | 'freelance';
type SignStep = 'idle' | 'review' | 'signing' | 'signed';

const CONTRACT_TEMPLATES: Record<ContractTemplate, { label: string; icon: string; title: string }> = {
  nda: { label: 'Non-Disclosure Agreement', icon: '🔒', title: 'Mutual Non-Disclosure Agreement' },
  service: { label: 'Service Agreement', icon: '🤝', title: 'Professional Services Agreement' },
  freelance: { label: 'Freelance Contract', icon: '💼', title: 'Independent Contractor Agreement' },
};

function buildContractBody(
  template: ContractTemplate,
  party1: string,
  party2: string,
  startDate: string,
  state: string,
  description: string
): string {
  const p1 = party1 || '[Your Company]';
  const p2 = party2 || '[Client Name]';
  const d = startDate || '[Date]';
  const st = state || '[State]';
  const desc = description || '[Description of services / confidential information]';

  if (template === 'nda') {
    return `This Mutual Non-Disclosure Agreement ("Agreement") is entered into as of ${d}, by and between ${p1} ("Disclosing Party A") and ${p2} ("Disclosing Party B"), collectively referred to as the "Parties."

1. PURPOSE. The Parties wish to explore a potential business relationship and may disclose to each other certain confidential and proprietary information for the purpose of: ${desc}.

2. CONFIDENTIAL INFORMATION. "Confidential Information" means any non-public information disclosed by either Party, including but not limited to business plans, technical data, trade secrets, customer lists, financial information, and any other information designated as confidential.

3. OBLIGATIONS. Each Party agrees to: (a) hold all Confidential Information in strict confidence; (b) not disclose Confidential Information to any third party without prior written consent; (c) use Confidential Information solely for the Purpose stated above.

4. TERM. This Agreement shall remain in effect for two (2) years from the date first written above.

5. GOVERNING LAW. This Agreement shall be governed by the laws of the State of ${st}.

IN WITNESS WHEREOF, the Parties have executed this Agreement as of the date first written above.`;
  }

  if (template === 'service') {
    return `This Professional Services Agreement ("Agreement") is entered into as of ${d}, by and between ${p1} ("Service Provider") and ${p2} ("Client").

1. SERVICES. Service Provider agrees to perform the following services for Client: ${desc}.

2. COMPENSATION. Client agrees to pay Service Provider as agreed in the attached Statement of Work or invoice schedule. Payment is due within 30 days of invoice.

3. TERM. This Agreement begins on ${d} and continues until the services described herein are completed or either Party provides 30 days written notice of termination.

4. INTELLECTUAL PROPERTY. All work product created by Service Provider under this Agreement shall become the property of Client upon full payment.

5. INDEPENDENT CONTRACTOR. Service Provider is an independent contractor and not an employee of Client. Service Provider is responsible for all taxes on compensation received hereunder.

6. CONFIDENTIALITY. Each Party agrees to keep confidential all non-public information received from the other Party during the term of this Agreement.

7. GOVERNING LAW. This Agreement is governed by the laws of the State of ${st}.

IN WITNESS WHEREOF, the Parties have executed this Agreement as of the date set forth above.`;
  }

  return `This Independent Contractor Agreement ("Agreement") is entered into as of ${d}, between ${p1} ("Client") and ${p2} ("Contractor").

1. ENGAGEMENT. Client hereby engages Contractor to perform the following services: ${desc}.

2. COMPENSATION. Client agrees to pay Contractor the rate set forth in the attached invoice or project brief. Invoices are due within 14 days of delivery.

3. INDEPENDENT CONTRACTOR STATUS. Contractor is an independent contractor, not an employee. Contractor is responsible for all taxes, insurance, and business expenses unless otherwise agreed in writing.

4. INTELLECTUAL PROPERTY. Upon full payment, all deliverables become the exclusive property of Client. Contractor retains rights to pre-existing tools, frameworks, and methodologies.

5. CONFIDENTIALITY. Contractor agrees to keep all Client information, business strategies, and project details strictly confidential for the duration of this Agreement and two (2) years thereafter.

6. TERM & TERMINATION. This Agreement begins on ${d}. Either Party may terminate with 14 days written notice. Client is responsible for payment of all work completed to the termination date.

7. GOVERNING LAW. This Agreement shall be governed by the laws of the State of ${st}.

IN WITNESS WHEREOF, the Parties agree to the terms of this Agreement as of the date first written above.`;
}

function ContractGenDemo() {
  const [template, setTemplate] = useState<ContractTemplate>('nda');
  const [party1, setParty1] = useState('Acme Solutions LLC');
  const [party2, setParty2] = useState('Bright Ideas Agency');
  const [startDate, setStartDate] = useState('April 17, 2026');
  const [govState, setGovState] = useState('Delaware');
  const [description, setDescription] = useState('evaluating a potential technology partnership and product development collaboration');
  const [signStep, setSignStep] = useState<SignStep>('idle');
  const [signerName, setSignerName] = useState('');
  const [signatureDrawn, setSignatureDrawn] = useState(false);
  const [signedAt, setSignedAt] = useState('');

  const contractBody = buildContractBody(template, party1, party2, startDate, govState, description);
  const tmpl = CONTRACT_TEMPLATES[template];

  const handleSendForSignature = () => setSignStep('review');

  const handleSign = () => {
    if (!signerName.trim()) return;
    setSignStep('signing');
    setTimeout(() => {
      setSignedAt(new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }));
      setSignStep('signed');
    }, 1800);
  };

  const handleReset = () => {
    setSignStep('idle');
    setSignerName('');
    setSignatureDrawn(false);
    setSignedAt('');
  };

  const US_STATES = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];

  if (signStep === 'signed') {
    return (
      <div>
        <div style={{ background: '#f0fdf4', border: '2px solid #16a34a', borderRadius: '12px', padding: '24px', marginBottom: '20px', textAlign: 'center' }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>✅</div>
          <div style={{ fontSize: '18px', fontWeight: 800, color: '#15803d', marginBottom: '6px' }}>Contract Signed Successfully</div>
          <div style={{ fontSize: '13px', color: '#166534' }}>Signed by <strong>{signerName}</strong> on {signedAt}</div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #16a34a', borderRadius: '8px', padding: '20px', marginBottom: '16px', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '15px', color: 'var(--navy)' }}>{tmpl.icon} {tmpl.title}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>Between {party1 || '[Your Company]'} and {party2 || '[Client Name]'}</div>
            </div>
            <div style={{ background: '#dcfce7', color: '#15803d', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 700 }}>EXECUTED</div>
          </div>

          <div style={{ fontSize: '13px', color: '#374151', lineHeight: 1.65, whiteSpace: 'pre-wrap', maxHeight: '200px', overflow: 'auto', background: '#fafafa', padding: '14px', borderRadius: '6px', marginBottom: '16px' }}>
            {contractBody}
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.04em', marginBottom: '6px' }}>{party1 || '[Your Company]'} — Authorized Signatory</div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '22px', color: 'var(--navy)', borderBottom: '1px solid var(--navy)', paddingBottom: '4px', fontStyle: 'italic' }}>{signerName}</div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>Signed: {signedAt}</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.04em', marginBottom: '6px' }}>{party2 || '[Client Name]'} — Countersignature Pending</div>
              <div style={{ height: '32px', borderBottom: '1px dashed #ccc', marginBottom: '4px' }} />
              <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>Awaiting countersignature…</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button style={{ background: 'var(--navy)', color: '#fff', border: 'none', padding: '10px 22px', borderRadius: '6px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
            ⬇ Download PDF
          </button>
          <button style={{ background: '#fff', color: 'var(--navy)', border: '1px solid var(--border)', padding: '10px 22px', borderRadius: '6px', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
            ✉ Send Copy via Email
          </button>
          <button onClick={handleReset} style={{ background: '#fff', color: 'var(--text-secondary)', border: '1px solid var(--border)', padding: '10px 16px', borderRadius: '6px', fontSize: '14px', cursor: 'pointer' }}>
            ↺ New Contract
          </button>
        </div>
        <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '10px' }}>Demo only — no real document stored. Upgrade to save, send, and collect legally binding signatures.</p>
      </div>
    );
  }

  if (signStep === 'signing') {
    return (
      <div style={{ textAlign: 'center', padding: '48px 24px' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px', animation: 'pulse 1s infinite' }}>✍️</div>
        <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', marginBottom: '8px' }}>Applying your signature…</div>
        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>Creating audit trail and timestamp</div>
        <div style={{ height: '6px', background: '#e5e7eb', borderRadius: '3px', overflow: 'hidden', maxWidth: '240px', margin: '0 auto' }}>
          <div style={{ height: '6px', background: 'linear-gradient(90deg, var(--navy), var(--orange))', borderRadius: '3px', width: '100%', animation: 'slideIn 1.6s ease-out' }} />
        </div>
        <style>{`@keyframes slideIn { from { width: 0% } to { width: 100% } }`}</style>
      </div>
    );
  }

  if (signStep === 'review') {
    return (
      <div>
        <div style={{ background: '#fffbeb', border: '1px solid #f59e0b', borderRadius: '8px', padding: '14px 18px', marginBottom: '20px', fontSize: '13px', color: '#92400e' }}>
          <strong>Review before signing:</strong> Read the contract carefully. By signing, you agree to all terms above.
        </div>

        <div style={{ background: '#fafafa', border: '1px solid var(--border)', borderRadius: '8px', padding: '14px', marginBottom: '20px', maxHeight: '220px', overflow: 'auto', fontSize: '13px', color: '#374151', lineHeight: 1.65, whiteSpace: 'pre-wrap' }}>
          {contractBody}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={labelStyle}>Your Full Name (as it will appear on the contract)</label>
          <input
            type="text"
            value={signerName}
            placeholder="e.g. Jordan Smith"
            onChange={e => setSignerName(e.target.value)}
            style={{ ...inputStyle, maxWidth: '300px' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={labelStyle}>Signature</label>
          <div
            onClick={() => setSignatureDrawn(true)}
            style={{
              width: '280px',
              height: '70px',
              border: `2px dashed ${signatureDrawn ? 'var(--navy)' : '#ccc'}`,
              borderRadius: '8px',
              background: signatureDrawn ? '#f0f4ff' : '#fafafa',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: signatureDrawn ? '26px' : '13px',
              color: signatureDrawn ? 'var(--navy)' : '#9ca3af',
              fontFamily: signatureDrawn ? 'Georgia, serif' : 'inherit',
              fontStyle: signatureDrawn ? 'italic' : 'normal',
              fontWeight: signatureDrawn ? 400 : 400,
              userSelect: 'none',
              transition: 'all 0.2s',
            }}
          >
            {signatureDrawn ? (signerName || 'Your Signature') : 'Click to sign here'}
          </div>
          {!signatureDrawn && <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px' }}>Click the box above to add your signature</div>}
        </div>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={handleSign}
            disabled={!signerName.trim() || !signatureDrawn}
            style={{
              background: signerName.trim() && signatureDrawn ? 'linear-gradient(to bottom, #f5c26b, #e47911)' : '#e5e7eb',
              border: signerName.trim() && signatureDrawn ? '1px solid #c07600' : '1px solid #d1d5db',
              color: signerName.trim() && signatureDrawn ? '#111' : '#9ca3af',
              fontWeight: 700,
              padding: '11px 28px',
              borderRadius: '6px',
              cursor: signerName.trim() && signatureDrawn ? 'pointer' : 'not-allowed',
              fontSize: '14px',
            }}
          >
            ✍ Sign Contract
          </button>
          <button onClick={() => setSignStep('idle')} style={{ background: '#fff', border: '1px solid var(--border)', color: 'var(--text-secondary)', padding: '10px 18px', borderRadius: '6px', fontSize: '14px', cursor: 'pointer' }}>
            ← Edit Details
          </button>
        </div>
      </div>
    );
  }

  // Default: template selection + form
  return (
    <div>
      {/* Template selector */}
      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>Contract Template</label>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {(Object.keys(CONTRACT_TEMPLATES) as ContractTemplate[]).map(key => (
            <button
              key={key}
              onClick={() => setTemplate(key)}
              style={{
                padding: '10px 18px',
                border: `2px solid ${template === key ? 'var(--navy)' : 'var(--border)'}`,
                borderRadius: '8px',
                background: template === key ? 'var(--navy)' : '#fff',
                color: template === key ? '#fff' : 'var(--navy)',
                fontWeight: 600,
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {CONTRACT_TEMPLATES[key].icon} {CONTRACT_TEMPLATES[key].label}
            </button>
          ))}
        </div>
      </div>

      {/* Party details */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px', marginBottom: '14px' }}>
        <div>
          <label style={labelStyle}>Your Company / Name</label>
          <input type="text" value={party1} onChange={e => setParty1(e.target.value)} placeholder="Acme Solutions LLC" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Other Party / Client</label>
          <input type="text" value={party2} onChange={e => setParty2(e.target.value)} placeholder="Bright Ideas Agency" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Effective Date</label>
          <input type="text" value={startDate} onChange={e => setStartDate(e.target.value)} placeholder="April 17, 2026" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Governing State</label>
          <select value={govState} onChange={e => setGovState(e.target.value)} style={{ ...inputStyle, background: '#fff' }}>
            {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label style={labelStyle}>
          {template === 'nda' ? 'Purpose / Scope of Disclosure' : 'Scope of Services'}
        </label>
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder={template === 'nda' ? 'evaluating a potential technology partnership' : 'website redesign and SEO optimization services'}
          style={{ ...inputStyle, width: '100%', boxSizing: 'border-box' as const }}
        />
      </div>

      {/* Live contract preview */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ ...labelStyle, display: 'block', marginBottom: '10px' }}>Live Contract Preview</label>
        <div style={{ border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden', background: '#fff' }}>
          <div style={{ background: 'var(--navy)', color: '#fff', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '14px' }}>{tmpl.icon} {tmpl.title}</div>
              <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '2px' }}>{party1 || '[Your Company]'} ↔ {party2 || '[Client Name]'}</div>
            </div>
            <div style={{ background: '#f59e0b', color: '#111', padding: '3px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 700 }}>DRAFT</div>
          </div>
          <div style={{ padding: '18px', fontSize: '13px', color: '#374151', lineHeight: 1.7, whiteSpace: 'pre-wrap', maxHeight: '240px', overflowY: 'auto' }}>
            {contractBody}
          </div>
        </div>
      </div>

      <button
        onClick={handleSendForSignature}
        style={{
          background: 'linear-gradient(to bottom, #f5c26b, #e47911)',
          border: '1px solid #c07600',
          color: '#111',
          fontWeight: 700,
          padding: '11px 28px',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        ✍ Review &amp; Sign →
      </button>
      <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '10px' }}>
        Demo only. In the full product, send contracts for countersignature and track open/signed status in real time.
      </p>
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
  'contract-gen': <ContractGenDemo />,
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
