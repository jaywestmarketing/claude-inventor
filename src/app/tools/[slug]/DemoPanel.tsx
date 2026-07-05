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

/* ─── Contract Generator ─── */
type ContractStep = 'details' | 'preview' | 'sign' | 'done';

const CONTRACT_TEMPLATES = [
  { id: 'nda', label: 'Non-Disclosure Agreement (NDA)' },
  { id: 'service', label: 'Service Agreement' },
  { id: 'consulting', label: 'Consulting Contract' },
];

function ContractGenDemo() {
  const [step, setStep] = useState<ContractStep>('details');
  const [template, setTemplate] = useState('nda');
  const [partyA, setPartyA] = useState('Acme Solutions LLC');
  const [partyB, setPartyB] = useState('Bright Ideas Consulting Inc.');
  const [effectiveDate, setEffectiveDate] = useState('May 1, 2026');
  const [jurisdiction, setJurisdiction] = useState('State of Delaware');
  const [duration, setDuration] = useState('2 years');
  const [sigName, setSigName] = useState('');
  const [sigDrawn, setSigDrawn] = useState(false);
  const [signing, setSigning] = useState(false);

  const tpl = CONTRACT_TEMPLATES.find(t => t.id === template)!;

  const ndaBody = `NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement ("Agreement") is entered into as of ${effectiveDate || '[Date]'} between ${partyA || '[Party A]'} ("Disclosing Party") and ${partyB || '[Party B]'} ("Receiving Party").

1. CONFIDENTIAL INFORMATION
"Confidential Information" means any non-public information disclosed by the Disclosing Party to the Receiving Party in connection with a potential business relationship, whether disclosed orally, in writing, or by inspection of tangible objects.

2. OBLIGATIONS
The Receiving Party agrees to: (a) hold Confidential Information in strict confidence; (b) not disclose Confidential Information to any third party without prior written consent; (c) use Confidential Information solely to evaluate the potential business relationship.

3. EXCLUSIONS
Obligations do not apply to information that: (a) is or becomes publicly known through no breach of this Agreement; (b) was rightfully known before disclosure; (c) is required to be disclosed by applicable law or court order.

4. TERM
This Agreement shall remain in effect for a period of ${duration || '[Duration]'} from the Effective Date, unless earlier terminated by mutual written consent.

5. GOVERNING LAW
This Agreement shall be governed by the laws of the ${jurisdiction || '[Jurisdiction]'}, without regard to conflict of law principles.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first written above.`;

  const serviceBody = `SERVICE AGREEMENT

This Service Agreement ("Agreement") is entered into as of ${effectiveDate || '[Date]'} between ${partyA || '[Party A]'} ("Client") and ${partyB || '[Party B]'} ("Service Provider").

1. SERVICES
Service Provider agrees to perform the services described in any Statement of Work ("SOW") mutually agreed upon in writing by both parties.

2. PAYMENT
Client agrees to pay Service Provider according to the rates specified in each SOW. Invoices are due within 30 days of receipt.

3. INTELLECTUAL PROPERTY
All work product created by Service Provider for Client under this Agreement shall be considered work-for-hire and shall be owned exclusively by Client upon full payment.

4. TERM
This Agreement shall remain in effect for ${duration || '[Duration]'} from the Effective Date unless terminated by either party with 30 days written notice.

5. GOVERNING LAW
This Agreement shall be governed by the laws of the ${jurisdiction || '[Jurisdiction]'}.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first written above.`;

  const consultingBody = `CONSULTING AGREEMENT

This Consulting Agreement ("Agreement") is entered into as of ${effectiveDate || '[Date]'} between ${partyA || '[Party A]'} ("Company") and ${partyB || '[Party B]'} ("Consultant").

1. CONSULTING SERVICES
Consultant agrees to provide consulting services as mutually agreed in writing. Consultant is an independent contractor and not an employee of Company.

2. COMPENSATION
Company agrees to pay Consultant at the rates specified in writing. Consultant is responsible for all taxes on compensation received.

3. CONFIDENTIALITY
Consultant agrees to maintain confidentiality of all proprietary Company information for ${duration || '[Duration]'} following termination of this Agreement.

4. NON-SOLICITATION
During the term and for one year thereafter, Consultant shall not solicit Company's employees or clients.

5. GOVERNING LAW
This Agreement is governed by the laws of the ${jurisdiction || '[Jurisdiction]'}.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first written above.`;

  const bodyMap: Record<string, string> = { nda: ndaBody, service: serviceBody, consulting: consultingBody };
  const contractText = bodyMap[template] || ndaBody;

  const handleSign = () => {
    if (!sigName.trim()) return;
    setSigning(true);
    setTimeout(() => { setSigning(false); setSigDrawn(true); }, 1200);
  };

  const handleComplete = () => setStep('done');

  const stepLabels: ContractStep[] = ['details', 'preview', 'sign', 'done'];
  const stepNames = ['Fill Details', 'Preview', 'Sign', 'Complete'];

  const pill = (s: ContractStep, label: string) => {
    const idx = stepLabels.indexOf(s);
    const cur = stepLabels.indexOf(step);
    const done = idx < cur;
    const active = idx === cur;
    return (
      <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <div style={{
          width: '22px', height: '22px', borderRadius: '50%',
          background: done ? '#16a34a' : active ? 'var(--navy)' : '#e5e7eb',
          color: done || active ? '#fff' : '#9ca3af',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '11px', fontWeight: 700, flexShrink: 0,
        }}>
          {done ? '✓' : idx + 1}
        </div>
        <span style={{ fontSize: '12px', fontWeight: active ? 700 : 400, color: active ? 'var(--navy)' : done ? '#16a34a' : '#9ca3af' }}>
          {label}
        </span>
      </div>
    );
  };

  return (
    <div>
      {/* Step indicator */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
        {stepLabels.map((s, i) => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {pill(s, stepNames[i])}
            {i < stepLabels.length - 1 && (
              <div style={{ width: '24px', height: '2px', background: '#e5e7eb', marginLeft: '2px' }} />
            )}
          </div>
        ))}
      </div>

      {/* ── Step 1: Details ── */}
      {step === 'details' && (
        <div>
          <div style={{ marginBottom: '18px' }}>
            <label style={labelStyle}>Contract Template</label>
            <select value={template} onChange={e => setTemplate(e.target.value)} style={{ ...inputStyle, background: '#fff' }}>
              {CONTRACT_TEMPLATES.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
            </select>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px', marginBottom: '20px' }}>
            <div>
              <label style={labelStyle}>Party A (Your Company)</label>
              <input type="text" value={partyA} onChange={e => setPartyA(e.target.value)} style={inputStyle} placeholder="Your Company LLC" />
            </div>
            <div>
              <label style={labelStyle}>Party B (Other Party)</label>
              <input type="text" value={partyB} onChange={e => setPartyB(e.target.value)} style={inputStyle} placeholder="Recipient Name or Company" />
            </div>
            <div>
              <label style={labelStyle}>Effective Date</label>
              <input type="text" value={effectiveDate} onChange={e => setEffectiveDate(e.target.value)} style={inputStyle} placeholder="May 1, 2026" />
            </div>
            <div>
              <label style={labelStyle}>Governing Jurisdiction</label>
              <input type="text" value={jurisdiction} onChange={e => setJurisdiction(e.target.value)} style={inputStyle} placeholder="State of Delaware" />
            </div>
            <div>
              <label style={labelStyle}>Term / Duration</label>
              <input type="text" value={duration} onChange={e => setDuration(e.target.value)} style={inputStyle} placeholder="2 years" />
            </div>
          </div>
          <button
            onClick={() => setStep('preview')}
            style={{ background: 'linear-gradient(to bottom,#f5c26b,#e47911)', border: '1px solid #c07600', color: '#111', fontWeight: 700, padding: '10px 26px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
          >
            Preview Contract →
          </button>
        </div>
      )}

      {/* ── Step 2: Preview ── */}
      {step === 'preview' && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
            <div>
              <span style={{ background: '#dbeafe', color: '#1d4ed8', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px', letterSpacing: '.04em' }}>DRAFT</span>
              <span style={{ marginLeft: '10px', fontSize: '13px', color: 'var(--text-secondary)' }}>{tpl.label}</span>
            </div>
            <button onClick={() => setStep('details')} style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--text-secondary)', padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}>← Edit Details</button>
          </div>
          <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: '8px', padding: '28px', fontFamily: 'Georgia, serif', fontSize: '13px', lineHeight: '1.8', color: '#1a1a1a', maxHeight: '340px', overflowY: 'auto', whiteSpace: 'pre-wrap', marginBottom: '16px', boxShadow: '0 2px 8px rgba(0,0,0,.07)' }}>
            {contractText}
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setStep('sign')}
              style={{ background: 'linear-gradient(to bottom,#f5c26b,#e47911)', border: '1px solid #c07600', color: '#111', fontWeight: 700, padding: '10px 26px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
            >
              Proceed to Sign →
            </button>
          </div>
        </div>
      )}

      {/* ── Step 3: Sign ── */}
      {step === 'sign' && (
        <div>
          <div style={{ background: '#f0f7ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
            <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)', marginBottom: '6px' }}>📋 {tpl.label}</div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{partyA} ↔ {partyB} · Effective {effectiveDate} · {jurisdiction}</div>
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label style={labelStyle}>Your Full Legal Name (to sign)</label>
            <input
              type="text"
              value={sigName}
              onChange={e => { setSigName(e.target.value); setSigDrawn(false); }}
              style={inputStyle}
              placeholder="Enter your full name"
            />
          </div>

          {/* Signature area */}
          <div style={{ border: '2px dashed var(--border)', borderRadius: '8px', padding: '24px', textAlign: 'center', background: sigDrawn ? '#f0fdf4' : '#fafafa', borderColor: sigDrawn ? '#16a34a' : 'var(--border)', transition: 'all .3s', marginBottom: '18px', minHeight: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {sigDrawn ? (
              <div>
                <div style={{ fontFamily: "'Segoe Script', 'Brush Script MT', cursive", fontSize: '32px', color: '#1a1a1a', marginBottom: '6px' }}>{sigName}</div>
                <div style={{ fontSize: '11px', color: '#16a34a', fontWeight: 700 }}>✓ Signature captured · {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
              </div>
            ) : signing ? (
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Capturing signature…</div>
            ) : (
              <div style={{ fontSize: '13px', color: '#9ca3af' }}>Signature will appear here</div>
            )}
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={handleSign}
              disabled={!sigName.trim() || signing}
              style={{ background: sigName.trim() && !signing ? 'var(--navy)' : '#ccc', border: 'none', color: '#fff', fontWeight: 700, padding: '10px 22px', borderRadius: '6px', cursor: sigName.trim() && !signing ? 'pointer' : 'not-allowed', fontSize: '14px', transition: 'background .2s' }}
            >
              {signing ? 'Signing…' : '✍ Apply Signature'}
            </button>
            {sigDrawn && (
              <button
                onClick={handleComplete}
                style={{ background: 'linear-gradient(to bottom,#4ade80,#16a34a)', border: '1px solid #15803d', color: '#fff', fontWeight: 700, padding: '10px 22px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
              >
                ✓ Finalize & Download
              </button>
            )}
            <button onClick={() => setStep('preview')} style={{ background: 'none', border: '1px solid var(--border)', color: 'var(--text-secondary)', padding: '10px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}>← Back</button>
          </div>
        </div>
      )}

      {/* ── Step 4: Done ── */}
      {step === 'done' && (
        <div style={{ textAlign: 'center', padding: '32px 20px' }}>
          <div style={{ fontSize: '52px', marginBottom: '16px' }}>✅</div>
          <div style={{ fontWeight: 800, fontSize: '20px', color: 'var(--navy)', marginBottom: '8px' }}>Contract Signed & Sealed</div>
          <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '380px', margin: '0 auto 24px' }}>
            <strong>{tpl.label}</strong> between <strong>{partyA}</strong> and <strong>{partyB}</strong> has been executed. Signed by <em>{sigName}</em> on {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.
          </div>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '12px 20px', fontSize: '13px', color: '#15803d', fontWeight: 600 }}>📄 PDF ready for download</div>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '12px 20px', fontSize: '13px', color: '#15803d', fontWeight: 600 }}>📧 Sent to both parties</div>
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '12px 20px', fontSize: '13px', color: '#15803d', fontWeight: 600 }}>🔒 Audit trail logged</div>
          </div>
          <button
            onClick={() => { setStep('details'); setSigName(''); setSigDrawn(false); }}
            style={{ background: 'linear-gradient(to bottom,#f5c26b,#e47911)', border: '1px solid #c07600', color: '#111', fontWeight: 700, padding: '10px 22px', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' }}
          >
            ↺ Create New Contract
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── Form Builder ─── */

const FB_FIELD_TYPES = [
  { type: 'text', icon: '✏️', label: 'Short Text' },
  { type: 'textarea', icon: '📄', label: 'Long Text' },
  { type: 'dropdown', icon: '🔽', label: 'Dropdown' },
  { type: 'checkbox', icon: '☑️', label: 'Checkboxes' },
  { type: 'rating', icon: '⭐', label: 'Rating' },
  { type: 'file', icon: '📎', label: 'File Upload' },
];

interface BField {
  id: string;
  type: string;
  label: string;
  required: boolean;
  conditional: boolean;
}

const INIT_BUILDER_FIELDS: BField[] = [
  { id: 'bf1', type: 'text', label: 'Full Name', required: true, conditional: false },
  { id: 'bf2', type: 'text', label: 'Work Email', required: true, conditional: false },
  { id: 'bf3', type: 'dropdown', label: 'Company Size', required: true, conditional: false },
  { id: 'bf4', type: 'rating', label: 'Rate your current process (1–5)', required: false, conditional: true },
  { id: 'bf5', type: 'textarea', label: 'Additional Comments', required: false, conditional: false },
];

const FB_DROPDOWN_OPTS = ['1–10 employees', '11–50 employees', '51–200 employees', '201–500 employees', '500+ employees'];

const FB_MOCK_ANALYTICS = {
  submissions: 47,
  completionRate: 74,
  avgTime: '2m 34s',
  topDropoff: 'Rating field',
  fields: [
    { label: 'Full Name', fillRate: 99 },
    { label: 'Work Email', fillRate: 97 },
    { label: 'Company Size', fillRate: 94, opts: [{ v: '1–10', p: 28 }, { v: '11–50', p: 35 }, { v: '51–200', p: 22 }, { v: '201–500', p: 11 }, { v: '500+', p: 4 }] },
    { label: 'Rate your current process', fillRate: 79, avgRating: 3.8 },
    { label: 'Additional Comments', fillRate: 41 },
  ] as Array<{ label: string; fillRate: number; opts?: { v: string; p: number }[]; avgRating?: number }>,
};

function FormBuilderDemo() {
  const [tab, setTab] = useState<'build' | 'preview' | 'results'>('build');
  const [fields, setFields] = useState<BField[]>(INIT_BUILDER_FIELDS.map(f => ({ ...f })));
  const [editId, setEditId] = useState<string | null>(null);
  const [draft, setDraft] = useState('');
  const [pvValues, setPvValues] = useState<Record<string, string>>({});
  const [pvRating, setPvRating] = useState(0);
  const [pvStarHover, setPvStarHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [extraSubs, setExtraSubs] = useState(0);
  const nextId = useRef(200);

  const addField = (type: string) => {
    const labels: Record<string, string> = {
      text: 'New Short Text', textarea: 'New Long Text', dropdown: 'New Dropdown',
      checkbox: 'New Checkboxes', rating: 'New Rating', file: 'File Upload',
    };
    setFields(f => [...f, { id: `bf${nextId.current++}`, type, label: labels[type] ?? 'New Field', required: false, conditional: false }]);
  };

  const remove = (id: string) => setFields(f => f.filter(x => x.id !== id));

  const move = (id: string, d: -1 | 1) => setFields(prev => {
    const i = prev.findIndex(x => x.id === id);
    const j = i + d;
    if (j < 0 || j >= prev.length) return prev;
    const a = [...prev];
    [a[i], a[j]] = [a[j], a[i]];
    return a;
  });

  const toggleReq = (id: string) => setFields(f => f.map(x => x.id === id ? { ...x, required: !x.required } : x));

  const startEdit = (f: BField) => { setEditId(f.id); setDraft(f.label); };
  const endEdit = () => {
    if (editId) setFields(f => f.map(x => x.id === editId ? { ...x, label: draft.trim() || x.label } : x));
    setEditId(null); setDraft('');
  };

  const handleSubmit = () => { setSubmitted(true); setExtraSubs(c => c + 1); };
  const resetPreview = () => { setSubmitted(false); setPvValues({}); setPvRating(0); };

  const dropdownField = fields.find(f => f.type === 'dropdown');
  const dropdownValue = dropdownField ? (pvValues[dropdownField.id] ?? '') : '';
  const showConditional = dropdownValue !== '' && dropdownValue !== '1–10 employees';

  const totalSubs = FB_MOCK_ANALYTICS.submissions + extraSubs;

  const tabBtn = (t: 'build' | 'preview' | 'results', label: string) => (
    <button
      key={t}
      onClick={() => { setTab(t); if (t !== 'preview') resetPreview(); }}
      style={{
        padding: '8px 16px',
        background: tab === t ? 'var(--navy)' : '#f0f4f8',
        color: tab === t ? '#fff' : 'var(--text-secondary)',
        border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, fontSize: '13px',
      }}
    >
      {label}
    </button>
  );

  const typeIcon = (type: string) => FB_FIELD_TYPES.find(t => t.type === type)?.icon ?? '📄';

  return (
    <div>
      <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {tabBtn('build', '🔨 Builder')}
        {tabBtn('preview', '👁 Preview')}
        {tabBtn('results', `📊 Results (${totalSubs})`)}
      </div>

      {/* ── Build Tab ── */}
      {tab === 'build' && (
        <div>
          <div style={{ background: '#f0f4f8', borderRadius: '10px', padding: '12px 16px', marginBottom: '16px' }}>
            <div style={{ ...labelStyle, marginBottom: '8px', display: 'block' }}>Add Field</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {FB_FIELD_TYPES.map(t => (
                <button
                  key={t.type}
                  onClick={() => addField(t.type)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '5px',
                    padding: '6px 12px', background: '#fff',
                    border: '1px solid var(--border)', borderRadius: '6px',
                    cursor: 'pointer', fontSize: '12px', fontWeight: 600, color: 'var(--navy)',
                  }}
                >
                  <span>{t.icon}</span> {t.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden', marginBottom: '12px' }}>
            {fields.map((f, i) => (
              <div
                key={f.id}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '12px 16px',
                  borderBottom: i < fields.length - 1 ? '1px solid var(--border)' : 'none',
                  background: editId === f.id ? '#f0f7ff' : i % 2 === 0 ? '#fff' : '#fafafa',
                }}
              >
                <span style={{ fontSize: '18px', flexShrink: 0 }}>{typeIcon(f.type)}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  {editId === f.id ? (
                    <input
                      autoFocus
                      value={draft}
                      onChange={e => setDraft(e.target.value)}
                      onBlur={endEdit}
                      onKeyDown={e => e.key === 'Enter' && endEdit()}
                      style={{ ...inputStyle, width: '100%', boxSizing: 'border-box' as const }}
                    />
                  ) : (
                    <div
                      onClick={() => startEdit(f)}
                      title="Click to edit label"
                      style={{ fontWeight: 600, fontSize: '14px', color: 'var(--navy)', cursor: 'text', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                    >
                      {f.label}
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: '6px', marginTop: '4px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '11px', color: '#6b7280', textTransform: 'uppercase' as const, fontWeight: 600 }}>
                      {FB_FIELD_TYPES.find(t => t.type === f.type)?.label ?? f.type}
                    </span>
                    {f.required && (
                      <span style={{ fontSize: '11px', background: '#fef3c7', color: '#92400e', borderRadius: '4px', padding: '1px 6px', fontWeight: 700 }}>Required</span>
                    )}
                    {f.conditional && (
                      <span style={{ fontSize: '11px', background: '#dbeafe', color: '#1d4ed8', borderRadius: '4px', padding: '1px 6px', fontWeight: 700 }}>⚡ Conditional</span>
                    )}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                  <button onClick={() => toggleReq(f.id)} title={f.required ? 'Mark optional' : 'Mark required'} style={iconBtnStyle}>{f.required ? '★' : '☆'}</button>
                  <button onClick={() => move(f.id, -1)} disabled={i === 0} style={{ ...iconBtnStyle, opacity: i === 0 ? 0.3 : 1 }}>↑</button>
                  <button onClick={() => move(f.id, 1)} disabled={i === fields.length - 1} style={{ ...iconBtnStyle, opacity: i === fields.length - 1 ? 0.3 : 1 }}>↓</button>
                  <button onClick={() => remove(f.id)} style={{ ...iconBtnStyle, color: '#c0392b' }}>✕</button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
            {fields.length} fields · {fields.filter(f => f.required).length} required
            {fields.some(f => f.conditional) && ' · conditional logic active'}
          </div>
        </div>
      )}

      {/* ── Preview Tab ── */}
      {tab === 'preview' && (
        <div>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '48px 20px' }}>
              <div style={{ fontSize: '52px', marginBottom: '12px' }}>🎉</div>
              <div style={{ fontWeight: 800, fontSize: '20px', color: 'var(--navy)', marginBottom: '8px' }}>Response Submitted!</div>
              <div style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>You are response #{totalSubs}. Thank you!</div>
              <button onClick={resetPreview} style={{ background: 'linear-gradient(to bottom,#f5c26b,#e47911)', border: '1px solid #c07600', color: '#111', fontWeight: 700, padding: '10px 22px', borderRadius: '6px', cursor: 'pointer' }}>
                ↺ Submit Another Response
              </button>
            </div>
          ) : (
            <div>
              <div style={{ background: '#f8f9fa', borderRadius: '10px', padding: '24px', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy)', marginBottom: '4px' }}>Lead Interest Survey</div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>Built with FormBuilder · Unlimited responses · No response caps</div>
                {fields.map(f => {
                  if (f.conditional && !showConditional) return null;
                  return (
                    <div key={f.id} style={{ marginBottom: '18px' }}>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '6px', color: 'var(--navy)' }}>
                        {f.label}{f.required && <span style={{ color: '#c0392b', marginLeft: '3px' }}>*</span>}
                      </label>
                      {f.type === 'text' && (
                        <input type="text" value={pvValues[f.id] ?? ''} onChange={e => setPvValues(v => ({ ...v, [f.id]: e.target.value }))} placeholder={f.label} style={inputStyle} />
                      )}
                      {f.type === 'textarea' && (
                        <textarea value={pvValues[f.id] ?? ''} onChange={e => setPvValues(v => ({ ...v, [f.id]: e.target.value }))} placeholder="Type your response…" rows={3} style={{ ...inputStyle, resize: 'vertical' as const }} />
                      )}
                      {f.type === 'dropdown' && (
                        <select value={pvValues[f.id] ?? ''} onChange={e => setPvValues(v => ({ ...v, [f.id]: e.target.value }))} style={{ ...inputStyle, background: '#fff' }}>
                          <option value="">Select an option…</option>
                          {FB_DROPDOWN_OPTS.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      )}
                      {f.type === 'checkbox' && (
                        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '8px' }}>
                          {['Option A', 'Option B', 'Option C'].map(o => (
                            <label key={o} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 400, fontSize: '14px', color: 'var(--text-secondary)' }}>
                              <input type="checkbox" style={{ width: '16px', height: '16px' }} /> {o}
                            </label>
                          ))}
                        </div>
                      )}
                      {f.type === 'rating' && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          {[1, 2, 3, 4, 5].map(n => (
                            <span
                              key={n}
                              onClick={() => setPvRating(n)}
                              onMouseEnter={() => setPvStarHover(n)}
                              onMouseLeave={() => setPvStarHover(0)}
                              style={{ fontSize: '28px', cursor: 'pointer', transition: 'transform .1s', transform: (pvStarHover || pvRating) >= n ? 'scale(1.15)' : 'scale(1)' }}
                            >
                              {(pvStarHover || pvRating) >= n ? '⭐' : '☆'}
                            </span>
                          ))}
                          {pvRating > 0 && <span style={{ fontSize: '13px', color: 'var(--text-secondary)', marginLeft: '6px' }}>{pvRating}/5</span>}
                        </div>
                      )}
                      {f.type === 'file' && (
                        <div style={{ border: '2px dashed var(--border)', borderRadius: '8px', padding: '20px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '13px' }}>
                          📎 Drag & drop or <span style={{ color: 'var(--navy)', fontWeight: 700, cursor: 'pointer' }}>browse files</span>
                        </div>
                      )}
                      {f.conditional && showConditional && (
                        <div style={{ marginTop: '4px', fontSize: '11px', color: '#6b7280' }}>⚡ Shown because you selected 11+ employees — conditional logic active</div>
                      )}
                    </div>
                  );
                })}
                <button
                  onClick={handleSubmit}
                  style={{ background: 'linear-gradient(to bottom,#f5c26b,#e47911)', border: '1px solid #c07600', color: '#111', fontWeight: 700, padding: '12px 32px', borderRadius: '6px', cursor: 'pointer', fontSize: '15px', marginTop: '8px' }}
                >
                  Submit Response →
                </button>
              </div>
              <div style={{ marginTop: '10px', fontSize: '12px', color: 'var(--text-secondary)', textAlign: 'center' }}>
                🔒 Responses secured · No response caps · Unlimited submissions
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Results Tab ── */}
      {tab === 'results' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '10px', marginBottom: '20px' }}>
            {[
              { label: 'Total Submissions', value: String(totalSubs), color: 'var(--navy)' },
              { label: 'Completion Rate', value: `${FB_MOCK_ANALYTICS.completionRate}%`, color: '#16a34a' },
              { label: 'Avg. Time', value: FB_MOCK_ANALYTICS.avgTime, color: 'var(--orange)' },
              { label: 'Top Drop-off', value: FB_MOCK_ANALYTICS.topDropoff, color: '#c0392b' },
            ].map((s, i) => (
              <div key={i} style={resultCard}>
                <div style={resultLabel}>{s.label}</div>
                <div style={{ fontSize: i === 3 ? '11px' : '22px', fontWeight: 800, color: s.color, marginTop: '4px' }}>{s.value}</div>
              </div>
            ))}
          </div>
          <div style={{ ...labelStyle, display: 'block', marginBottom: '10px' }}>Field Response Rates</div>
          <div style={{ border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
            {FB_MOCK_ANALYTICS.fields.map((f, i) => (
              <div key={i} style={{ padding: '14px 16px', borderBottom: i < FB_MOCK_ANALYTICS.fields.length - 1 ? '1px solid var(--border)' : 'none', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 600, fontSize: '13px', color: 'var(--navy)' }}>{f.label}</span>
                  <span style={{ fontWeight: 700, fontSize: '13px', color: f.fillRate >= 90 ? '#16a34a' : f.fillRate >= 70 ? 'var(--orange)' : '#c0392b' }}>{f.fillRate}% filled</span>
                </div>
                <div style={{ background: '#f0f0f0', borderRadius: '4px', height: '6px', marginBottom: '6px' }}>
                  <div style={{ background: 'var(--orange)', borderRadius: '4px', height: '6px', width: `${f.fillRate}%` }} />
                </div>
                {f.opts && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                    {f.opts.map((o, j) => (
                      <span key={j} style={{ fontSize: '11px', background: '#f0f4f8', color: 'var(--navy)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>{o.v}: {o.p}%</span>
                    ))}
                  </div>
                )}
                {f.avgRating !== undefined && (
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>Avg rating: ⭐ {f.avgRating.toFixed(1)} / 5</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Job Description Generator ─── */

const JD_ROLES = [
  { title: 'Marketing Manager', dept: 'Marketing', salary: '$75,000 – $95,000', responsibilities: ['Lead all digital and content marketing initiatives', 'Manage a team of 3 content creators and one analyst', 'Own campaign strategy across email, social, and paid channels', 'Report weekly KPIs to executive leadership'] },
  { title: 'Software Engineer', dept: 'Engineering', salary: '$110,000 – $140,000', responsibilities: ['Design and build scalable backend services', 'Participate in sprint planning and daily standups', 'Review pull requests and mentor junior engineers', 'Collaborate with product and design on feature specs'] },
  { title: 'Sales Account Executive', dept: 'Sales', salary: '$65,000 – $85,000 + commission', responsibilities: ['Prospect and close new enterprise accounts', 'Manage a pipeline of 40+ active opportunities', 'Conduct product demos and handle objections', 'Collaborate with customer success on handoffs'] },
  { title: 'HR Coordinator', dept: 'Human Resources', salary: '$50,000 – $65,000', responsibilities: ['Support full-cycle recruiting for 5+ open roles', 'Coordinate onboarding for all new hires', 'Maintain HRIS data accuracy and compliance', 'Administer benefits enrollment and answer employee questions'] },
  { title: 'Operations Manager', dept: 'Operations', salary: '$80,000 – $100,000', responsibilities: ['Oversee daily workflow across 3 operational departments', 'Identify inefficiencies and implement process improvements', 'Manage vendor relationships and negotiate contracts', 'Report operational metrics to the executive team'] },
  { title: 'Customer Support Specialist', dept: 'Customer Success', salary: '$42,000 – $55,000', responsibilities: ['Resolve customer tickets within 24-hour SLA', 'Maintain customer satisfaction score above 90%', 'Document common issues for knowledge base articles', 'Escalate complex cases to engineering with full context'] },
];

const BIAS_WORDS: Record<string, string> = {
  'rockstar': 'high performer',
  'ninja': 'expert',
  'guru': 'specialist',
  'aggressive': 'results-driven',
  'dominant': 'highly effective',
  'killer instinct': 'competitive drive',
  'crushing it': 'exceeding targets',
};

function buildJD(role: typeof JD_ROLES[0]) {
  return `${role.title.toUpperCase()}
${role.dept} Department · Full-Time · In-Office / Hybrid

ABOUT THE ROLE
We are seeking a talented and motivated ${role.title} to join our growing team. In this role, you will be a key contributor to our ${role.dept.toLowerCase()} strategy, driving meaningful outcomes and working closely with cross-functional stakeholders.

KEY RESPONSIBILITIES
${role.responsibilities.map(r => `• ${r}`).join('\n')}

REQUIREMENTS
• 3+ years of experience in a similar role
• Proven track record of delivering measurable results
• Strong communication and collaborative working style
• Familiarity with industry-standard tools and best practices
• Bachelor's degree or equivalent practical experience

COMPENSATION & BENEFITS
${role.salary} annually, based on experience
• Comprehensive health, dental, and vision insurance
• 401(k) with 4% employer match
• 18 days PTO + 10 company holidays
• Remote work flexibility after 90 days

EQUAL OPPORTUNITY EMPLOYER
We are an equal opportunity employer and value diversity at our company. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.`;
}

function JobDescriptionGenDemo() {
  const [selectedRole, setSelectedRole] = useState(0);
  const [customBullets, setCustomBullets] = useState('');
  const [step, setStep] = useState<'input' | 'generating' | 'jd' | 'ats'>('input');
  const [progress, setProgress] = useState(0);
  const [showBias, setShowBias] = useState(true);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const role = JD_ROLES[selectedRole];
  const jdText = buildJD(role);

  const startGenerate = () => {
    setStep('generating');
    setProgress(0);
    let p = 0;
    timerRef.current = setInterval(() => {
      p += Math.random() * 18 + 8;
      if (p >= 100) {
        p = 100;
        if (timerRef.current) clearInterval(timerRef.current);
        setTimeout(() => setStep('jd'), 300);
      }
      setProgress(Math.min(100, p));
    }, 120);
  };

  const reset = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setStep('input');
    setProgress(0);
    setShowBias(true);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jdText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const renderJDWithBias = (text: string) => {
    if (!showBias) return <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', margin: 0 }}>{text}</pre>;
    const biasLower = Object.keys(BIAS_WORDS);
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;
    while (remaining.length > 0) {
      let earliest = -1;
      let earliestWord = '';
      for (const bw of biasLower) {
        const idx = remaining.toLowerCase().indexOf(bw);
        if (idx !== -1 && (earliest === -1 || idx < earliest)) {
          earliest = idx;
          earliestWord = bw;
        }
      }
      if (earliest === -1) {
        parts.push(<span key={key++}>{remaining}</span>);
        break;
      }
      if (earliest > 0) parts.push(<span key={key++}>{remaining.slice(0, earliest)}</span>);
      const matched = remaining.slice(earliest, earliest + earliestWord.length);
      parts.push(
        <span key={key++} style={{ background: '#fef08a', borderRadius: '3px', padding: '0 2px', cursor: 'help' }} title={`Bias detected → try: "${BIAS_WORDS[earliestWord]}"`}>
          {matched}
          <sup style={{ fontSize: '9px', color: '#b45309', marginLeft: '2px', fontWeight: 800 }}>bias</sup>
        </span>
      );
      remaining = remaining.slice(earliest + earliestWord.length);
    }
    return <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', margin: 0, lineHeight: 1.7 }}>{parts}</pre>;
  };

  const hasBiasWords = jdText.split(' ').some(w => Object.keys(BIAS_WORDS).includes(w.toLowerCase().replace(/[^a-z ]/g, '')));

  return (
    <div>
      {/* ── Step: Input ── */}
      {step === 'input' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px', marginBottom: '20px' }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Select a Role Template</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '8px' }}>
                {JD_ROLES.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedRole(i)}
                    style={{
                      padding: '10px 14px',
                      background: selectedRole === i ? 'var(--navy)' : '#f0f4f8',
                      color: selectedRole === i ? '#fff' : 'var(--navy)',
                      border: selectedRole === i ? 'none' : '1px solid var(--border)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: 700,
                      fontSize: '13px',
                      textAlign: 'left' as const,
                    }}
                  >
                    <div>{r.title}</div>
                    <div style={{ fontSize: '11px', opacity: 0.7, fontWeight: 400, marginTop: '2px' }}>{r.dept}</div>
                  </button>
                ))}
              </div>
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Additional Responsibilities (optional)</label>
              <textarea
                value={customBullets}
                onChange={e => setCustomBullets(e.target.value)}
                placeholder="Add any extra responsibilities, one per line…"
                rows={3}
                style={{ ...inputStyle, resize: 'vertical' as const, fontFamily: 'inherit' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
            <button
              onClick={startGenerate}
              style={{
                background: 'linear-gradient(to bottom,#f5c26b,#e47911)',
                border: '1px solid #c07600',
                color: '#111',
                fontWeight: 700,
                padding: '11px 28px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
              }}
            >
              ✨ Generate Job Description
            </button>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px' }}>✓ Bias detection</span>
              <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px' }}>✓ EEOC compliant</span>
              <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px' }}>✓ ATS-ready</span>
            </div>
          </div>

          <div style={{ background: '#f0f4f8', borderRadius: '8px', padding: '14px 18px' }}>
            <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--navy)', marginBottom: '4px' }}>Selected: {role.title}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              {role.dept} · {role.salary} · {role.responsibilities.length} responsibilities pre-loaded
            </div>
          </div>
        </div>
      )}

      {/* ── Step: Generating ── */}
      {step === 'generating' && (
        <div style={{ textAlign: 'center', padding: '48px 20px' }}>
          <div style={{ fontSize: '44px', marginBottom: '20px' }}>🤖</div>
          <div style={{ fontWeight: 800, fontSize: '18px', color: 'var(--navy)', marginBottom: '8px' }}>
            Generating {role.title} JD…
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Writing responsibilities, requirements, EEOC language, and compensation section
          </div>
          <div style={{ background: '#f0f0f0', borderRadius: '8px', height: '10px', maxWidth: '320px', margin: '0 auto 12px', overflow: 'hidden' }}>
            <div style={{
              background: 'linear-gradient(to right, var(--navy), var(--orange))',
              borderRadius: '8px',
              height: '10px',
              width: `${progress}%`,
              transition: 'width 0.15s ease',
            }} />
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            {progress < 40 ? 'Drafting responsibilities…' : progress < 70 ? 'Checking for bias words…' : progress < 90 ? 'Adding EEOC boilerplate…' : 'Formatting for ATS…'}
          </div>
        </div>
      )}

      {/* ── Step: JD Output ── */}
      {step === 'jd' && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1 }}>
              <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px' }}>✓ EEOC Compliant</span>
              <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px' }}>✓ ATS-Formatted</span>
              <span style={{ background: '#dbeafe', color: '#1d4ed8', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px' }}>
                🔍 Bias Check: {hasBiasWords ? 'Issues Found' : 'All Clear'}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '6px', flexShrink: 0, flexWrap: 'wrap' }}>
              <button
                onClick={() => setShowBias(b => !b)}
                style={{
                  padding: '6px 12px',
                  background: showBias ? '#fef3c7' : '#f0f4f8',
                  border: `1px solid ${showBias ? '#fcd34d' : 'var(--border)'}`,
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: showBias ? '#92400e' : 'var(--text-secondary)',
                }}
              >
                {showBias ? '🔍 Bias ON' : '🔍 Bias OFF'}
              </button>
              <button
                onClick={() => setStep('ats')}
                style={{ padding: '6px 12px', background: '#f0f4f8', border: '1px solid var(--border)', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 700, color: 'var(--navy)' }}
              >
                ATS Preview →
              </button>
            </div>
          </div>

          {showBias && hasBiasWords && (
            <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: '8px', padding: '12px 16px', marginBottom: '14px' }}>
              <div style={{ fontWeight: 700, fontSize: '13px', color: '#92400e', marginBottom: '6px' }}>⚠️ Bias Words Detected</div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {Object.entries(BIAS_WORDS).filter(([w]) => jdText.toLowerCase().includes(w)).map(([word, fix]) => (
                  <span key={word} style={{ fontSize: '12px', background: '#fef08a', color: '#78350f', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
                    &quot;{word}&quot; → &quot;{fix}&quot;
                  </span>
                ))}
              </div>
            </div>
          )}

          <div style={{
            background: '#fff',
            border: '1px solid var(--border)',
            borderRadius: '8px',
            padding: '24px 28px',
            fontFamily: 'Georgia, serif',
            fontSize: '13px',
            lineHeight: '1.75',
            color: '#1a1a1a',
            maxHeight: '360px',
            overflowY: 'auto',
            marginBottom: '14px',
            boxShadow: '0 2px 8px rgba(0,0,0,.06)',
          }}>
            {renderJDWithBias(jdText)}
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={handleCopy}
              style={{ background: 'linear-gradient(to bottom,#f5c26b,#e47911)', border: '1px solid #c07600', color: '#111', fontWeight: 700, padding: '9px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}
            >
              {copied ? '✓ Copied!' : '📋 Copy JD'}
            </button>
            <button
              onClick={reset}
              style={{ background: '#fff', border: '1px solid var(--border)', color: 'var(--text-secondary)', padding: '9px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}
            >
              ↺ New JD
            </button>
          </div>
          <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '10px' }}>
            Hover over highlighted words to see bias-free replacements. Toggle bias detection on/off above.
          </p>
        </div>
      )}

      {/* ── Step: ATS Preview ── */}
      {step === 'ats' && (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)' }}>ATS Field Mapping Preview</div>
            <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>✓ Greenhouse Compatible</span>
            <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px' }}>✓ Lever Compatible</span>
            <button
              onClick={() => setStep('jd')}
              style={{ marginLeft: 'auto', background: 'none', border: '1px solid var(--border)', color: 'var(--text-secondary)', padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '12px' }}
            >
              ← Back to JD
            </button>
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden', marginBottom: '14px' }}>
            {[
              { field: 'Job Title', value: role.title },
              { field: 'Department', value: role.dept },
              { field: 'Employment Type', value: 'Full-Time' },
              { field: 'Location', value: 'On-site / Hybrid' },
              { field: 'Salary Range', value: role.salary },
              { field: 'EEOC Statement', value: '✓ Auto-included — "We are an equal opportunity employer…"' },
              { field: 'ADA Accommodation', value: '✓ Auto-included — "Reasonable accommodations may be made…"' },
            ].map((row, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '160px 1fr',
                padding: '12px 16px',
                borderBottom: i < 6 ? '1px solid var(--border)' : 'none',
                background: i % 2 === 0 ? '#fff' : '#fafafa',
                gap: '16px',
                alignItems: 'start',
              }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' as const, letterSpacing: '.04em', paddingTop: '2px' }}>{row.field}</div>
                <div style={{ fontSize: '13px', color: row.value.startsWith('✓') ? '#15803d' : 'var(--navy)', fontWeight: row.value.startsWith('✓') ? 700 : 500 }}>{row.value}</div>
              </div>
            ))}
          </div>

          <div style={{ background: '#f0f7ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '14px 18px', marginBottom: '14px' }}>
            <div style={{ fontWeight: 700, fontSize: '13px', color: '#1d4ed8', marginBottom: '6px' }}>📊 Optimization Score: 94 / 100</div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {[
                { label: 'Keyword Density', score: '96%' },
                { label: 'Readability', score: 'Grade 10' },
                { label: 'Inclusive Language', score: '✓ Pass' },
                { label: 'Sections Complete', score: '7 / 7' },
              ].map((s, i) => (
                <div key={i} style={{ fontSize: '12px', color: '#1d4ed8' }}>
                  <span style={{ fontWeight: 600 }}>{s.label}:</span> {s.score}
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={handleCopy}
              style={{ background: 'linear-gradient(to bottom,#f5c26b,#e47911)', border: '1px solid #c07600', color: '#111', fontWeight: 700, padding: '9px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}
            >
              {copied ? '✓ Copied!' : '📋 Copy Full JD'}
            </button>
            <button
              onClick={reset}
              style={{ background: '#fff', border: '1px solid var(--border)', color: 'var(--text-secondary)', padding: '9px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}
            >
              ↺ Generate New JD
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Vendor Portal ─── */

interface VendorRow {
  id: string;
  name: string;
  type: string;
  status: 'active' | 'pending' | 'onboarding';
  lastInvoice: string;
  contractExp: string;
}

interface InvoiceRow {
  id: string;
  vendor: string;
  amount: string;
  submitted: string;
  status: 'pending' | 'approved' | 'paid';
  approvers: string[];
  approvedCount: number;
}

interface ContractRow {
  id: string;
  vendor: string;
  value: string;
  expDate: string;
  daysLeft: number;
}

const INIT_VENDORS: VendorRow[] = [
  { id: 'v1', name: 'Apex Cleaning Services', type: 'Facilities', status: 'active', lastInvoice: 'May 1, 2026', contractExp: 'Dec 31, 2026' },
  { id: 'v2', name: 'TechSupply Co.', type: 'IT Hardware', status: 'active', lastInvoice: 'Apr 28, 2026', contractExp: 'Mar 15, 2027' },
  { id: 'v3', name: 'Riverside Catering', type: 'Food & Beverage', status: 'pending', lastInvoice: '—', contractExp: '—' },
  { id: 'v4', name: 'ProStaff Solutions', type: 'Staffing', status: 'active', lastInvoice: 'May 5, 2026', contractExp: 'Jun 30, 2026' },
  { id: 'v5', name: 'CloudGuard Security', type: 'IT Services', status: 'onboarding', lastInvoice: '—', contractExp: '—' },
];

const INIT_INVOICES: InvoiceRow[] = [
  { id: 'INV-2847', vendor: 'Apex Cleaning Services', amount: '$3,400.00', submitted: 'May 8, 2026', status: 'pending', approvers: ['Dept Manager', 'Finance Lead', 'CFO'], approvedCount: 0 },
  { id: 'INV-2839', vendor: 'TechSupply Co.', amount: '$12,750.00', submitted: 'May 6, 2026', status: 'pending', approvers: ['Dept Manager', 'Finance Lead', 'CFO'], approvedCount: 1 },
  { id: 'INV-2831', vendor: 'ProStaff Solutions', amount: '$8,100.00', submitted: 'May 2, 2026', status: 'approved', approvers: ['Dept Manager', 'Finance Lead', 'CFO'], approvedCount: 3 },
  { id: 'INV-2820', vendor: 'TechSupply Co.', amount: '$4,290.00', submitted: 'Apr 25, 2026', status: 'paid', approvers: ['Dept Manager', 'Finance Lead', 'CFO'], approvedCount: 3 },
];

const INIT_CONTRACTS: ContractRow[] = [
  { id: 'c1', vendor: 'ProStaff Solutions', value: '$96,000/yr', expDate: 'Jun 30, 2026', daysLeft: 39 },
  { id: 'c2', vendor: 'Apex Cleaning Services', value: '$40,800/yr', expDate: 'Dec 31, 2026', daysLeft: 223 },
  { id: 'c3', vendor: 'TechSupply Co.', value: '$85,000/yr', expDate: 'Mar 15, 2027', daysLeft: 297 },
  { id: 'c4', vendor: 'DataVault Backup', value: '$18,000/yr', expDate: 'May 29, 2026', daysLeft: 7 },
];

function VendorPortalDemo() {
  const [tab, setTab] = useState<'vendors' | 'invoices' | 'contracts'>('vendors');
  const [vendors, setVendors] = useState<VendorRow[]>(INIT_VENDORS.map(v => ({ ...v })));
  const [invoices, setInvoices] = useState<InvoiceRow[]>(INIT_INVOICES.map(i => ({ ...i })));
  const [contracts, setContracts] = useState<ContractRow[]>(INIT_CONTRACTS.map(c => ({ ...c })));
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteStep, setInviteStep] = useState<'idle' | 'form' | 'sending' | 'done'>('idle');
  const [approvingId, setApprovingId] = useState<string | null>(null);
  const [renewingId, setRenewingId] = useState<string | null>(null);

  const statusBadge = (s: VendorRow['status']) => {
    const map = { active: ['#dcfce7', '#15803d', 'Active'], pending: ['#fef3c7', '#92400e', 'Pending'], onboarding: ['#dbeafe', '#1d4ed8', 'Onboarding'] };
    const [bg, color, label] = map[s];
    return <span style={{ background: bg, color, fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '20px' }}>{label}</span>;
  };

  const invoiceStatusBadge = (s: InvoiceRow['status']) => {
    const map = { pending: ['#fef3c7', '#92400e', '⏳ Pending'], approved: ['#dcfce7', '#15803d', '✓ Approved'], paid: ['#e0f2fe', '#0369a1', '💳 Paid'] };
    const [bg, color, label] = map[s];
    return <span style={{ background: bg, color, fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '20px' }}>{label}</span>;
  };

  const alertColor = (days: number) => {
    if (days <= 7) return { bg: '#fee2e2', color: '#991b1b', icon: '🔴' };
    if (days <= 30) return { bg: '#fef3c7', color: '#92400e', icon: '🟡' };
    return { bg: '#dcfce7', color: '#15803d', icon: '🟢' };
  };

  const handleInvite = () => {
    if (!inviteEmail.trim()) return;
    setInviteStep('sending');
    setTimeout(() => {
      setVendors(prev => [...prev, {
        id: `v${Date.now()}`,
        name: inviteEmail.includes('@') ? inviteEmail.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : inviteEmail,
        type: 'New Vendor',
        status: 'pending',
        lastInvoice: '—',
        contractExp: '—',
      }]);
      setInviteStep('done');
    }, 1400);
  };

  const handleApprove = (id: string) => {
    setApprovingId(id);
    setTimeout(() => {
      setInvoices(prev => prev.map(inv => {
        if (inv.id !== id) return inv;
        const next = inv.approvedCount + 1;
        return { ...inv, approvedCount: next, status: next >= inv.approvers.length ? 'approved' : 'pending' };
      }));
      setApprovingId(null);
    }, 900);
  };

  const handleRenew = (id: string) => {
    setRenewingId(id);
    setTimeout(() => {
      setContracts(prev => prev.map(c => c.id !== id ? c : { ...c, daysLeft: 365, expDate: 'May 22, 2027' }));
      setRenewingId(null);
    }, 1200);
  };

  const tabBtn = (t: typeof tab, label: string, count?: number) => (
    <button
      key={t}
      onClick={() => { setTab(t); setInviteStep('idle'); setInviteEmail(''); }}
      style={{
        padding: '8px 16px',
        background: tab === t ? 'var(--navy)' : '#f0f4f8',
        color: tab === t ? '#fff' : 'var(--text-secondary)',
        border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, fontSize: '13px',
        display: 'flex', alignItems: 'center', gap: '6px',
      }}
    >
      {label}
      {count !== undefined && (
        <span style={{ background: tab === t ? 'rgba(255,255,255,.25)' : 'var(--border)', color: tab === t ? '#fff' : 'var(--text-secondary)', borderRadius: '20px', padding: '1px 7px', fontSize: '11px' }}>
          {count}
        </span>
      )}
    </button>
  );

  const pendingInvoices = invoices.filter(i => i.status === 'pending').length;
  const expiringContracts = contracts.filter(c => c.daysLeft <= 30).length;

  return (
    <div>
      <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {tabBtn('vendors', '🏢 Vendors', vendors.length)}
        {tabBtn('invoices', '📄 Invoices', pendingInvoices > 0 ? pendingInvoices : undefined)}
        {tabBtn('contracts', '📋 Contracts', expiringContracts > 0 ? expiringContracts : undefined)}
      </div>

      {/* ── Vendors Tab ── */}
      {tab === 'vendors' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              {vendors.filter(v => v.status === 'active').length} active · {vendors.filter(v => v.status !== 'active').length} pending / onboarding
            </div>
            {inviteStep === 'idle' && (
              <button
                onClick={() => setInviteStep('form')}
                style={{ background: 'linear-gradient(to bottom,#f5c26b,#e47911)', border: '1px solid #c07600', color: '#111', fontWeight: 700, padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}
              >
                + Invite Vendor
              </button>
            )}
          </div>

          {inviteStep === 'form' && (
            <div style={{ background: '#f0f7ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '16px', marginBottom: '14px' }}>
              <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--navy)', marginBottom: '10px' }}>Send Vendor Onboarding Invite</div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  value={inviteEmail}
                  onChange={e => setInviteEmail(e.target.value)}
                  placeholder="vendor@company.com"
                  style={{ ...inputStyle, flex: 1, minWidth: '200px' }}
                  onKeyDown={e => e.key === 'Enter' && handleInvite()}
                />
                <button
                  onClick={handleInvite}
                  disabled={!inviteEmail.trim()}
                  style={{ background: inviteEmail.trim() ? 'var(--navy)' : '#ccc', border: 'none', color: '#fff', fontWeight: 700, padding: '8px 18px', borderRadius: '6px', cursor: inviteEmail.trim() ? 'pointer' : 'not-allowed', fontSize: '13px' }}
                >
                  Send Invite
                </button>
                <button onClick={() => { setInviteStep('idle'); setInviteEmail(''); }} style={{ background: '#fff', border: '1px solid var(--border)', color: 'var(--text-secondary)', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}>Cancel</button>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px' }}>Vendor receives a self-service link to upload W-9, insurance cert, and banking info.</div>
            </div>
          )}

          {inviteStep === 'sending' && (
            <div style={{ background: '#f0f7ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '16px', marginBottom: '14px', textAlign: 'center', color: 'var(--navy)', fontWeight: 600, fontSize: '13px' }}>
              Sending onboarding link to {inviteEmail}…
            </div>
          )}

          {inviteStep === 'done' && (
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '14px 16px', marginBottom: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ color: '#15803d', fontWeight: 700, fontSize: '13px' }}>✓ Invite sent — vendor added with Pending status</div>
              <button onClick={() => { setInviteStep('idle'); setInviteEmail(''); }} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '12px' }}>Dismiss</button>
            </div>
          )}

          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '10px 16px', background: '#f8f9fa', borderBottom: '1px solid var(--border)', gap: '8px' }}>
              {['Vendor', 'Type', 'Status', 'Last Invoice', 'Contract Exp'].map((h, i) => (
                <div key={i} style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' as const, letterSpacing: '.04em' }}>{h}</div>
              ))}
            </div>
            {vendors.map((v, i) => (
              <div key={v.id} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '12px 16px', borderBottom: i < vendors.length - 1 ? '1px solid var(--border)' : 'none', background: i % 2 === 0 ? '#fff' : '#fafafa', gap: '8px', alignItems: 'center' }}>
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--navy)' }}>{v.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{v.type}</div>
                <div>{statusBadge(v.status)}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{v.lastInvoice}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{v.contractExp}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Invoices Tab ── */}
      {tab === 'invoices' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '10px', marginBottom: '18px' }}>
            {[
              { label: 'Pending Approval', value: String(invoices.filter(i => i.status === 'pending').length), color: '#92400e' },
              { label: 'Approved', value: String(invoices.filter(i => i.status === 'approved').length), color: '#15803d' },
              { label: 'Paid', value: String(invoices.filter(i => i.status === 'paid').length), color: '#0369a1' },
              { label: 'Total This Month', value: '$28,540', color: 'var(--navy)' },
            ].map((s, i) => (
              <div key={i} style={resultCard}>
                <div style={resultLabel}>{s.label}</div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: s.color, marginTop: '4px' }}>{s.value}</div>
              </div>
            ))}
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
            {invoices.map((inv, i) => (
              <div key={inv.id} style={{ padding: '14px 16px', borderBottom: i < invoices.length - 1 ? '1px solid var(--border)' : 'none', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)' }}>{inv.id}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>{inv.vendor} · Submitted {inv.submitted}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 800, fontSize: '15px', color: 'var(--navy)' }}>{inv.amount}</span>
                    {invoiceStatusBadge(inv.status)}
                  </div>
                </div>

                {/* Approval chain */}
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
                  {inv.approvers.map((ap, j) => {
                    const done = j < inv.approvedCount;
                    const current = j === inv.approvedCount && inv.status === 'pending';
                    return (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <div style={{
                          display: 'flex', alignItems: 'center', gap: '4px',
                          padding: '4px 10px',
                          background: done ? '#dcfce7' : current ? '#fef3c7' : '#f0f0f0',
                          borderRadius: '20px',
                          fontSize: '11px',
                          fontWeight: 600,
                          color: done ? '#15803d' : current ? '#92400e' : '#9ca3af',
                        }}>
                          {done ? '✓' : current ? '⏳' : '○'} {ap}
                        </div>
                        {j < inv.approvers.length - 1 && <span style={{ color: '#d1d5db', fontSize: '12px' }}>→</span>}
                      </div>
                    );
                  })}
                </div>

                {inv.status === 'pending' && (
                  <div style={{ marginTop: '10px' }}>
                    <button
                      onClick={() => handleApprove(inv.id)}
                      disabled={approvingId === inv.id}
                      style={{
                        background: approvingId === inv.id ? '#ccc' : 'linear-gradient(to bottom,#4ade80,#16a34a)',
                        border: '1px solid #15803d',
                        color: '#fff',
                        fontWeight: 700,
                        padding: '7px 16px',
                        borderRadius: '6px',
                        cursor: approvingId === inv.id ? 'not-allowed' : 'pointer',
                        fontSize: '13px',
                      }}
                    >
                      {approvingId === inv.id ? 'Approving…' : `✓ Approve — ${inv.approvers[inv.approvedCount]}`}
                    </button>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)', marginLeft: '10px' }}>
                      {inv.approvedCount}/{inv.approvers.length} approvals complete
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Contracts Tab ── */}
      {tab === 'contracts' && (
        <div>
          <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '18px' }}>⚠️</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: '13px', color: '#92400e' }}>{expiringContracts} contract{expiringContracts !== 1 ? 's' : ''} expiring within 30 days</div>
              <div style={{ fontSize: '12px', color: '#78350f' }}>Renew now to avoid service interruptions and emergency pricing.</div>
            </div>
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden' }}>
            {contracts.map((c, i) => {
              const alert = alertColor(c.daysLeft);
              return (
                <div key={c.id} style={{ padding: '16px', borderBottom: i < contracts.length - 1 ? '1px solid var(--border)' : 'none', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--navy)' }}>{c.vendor}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>{c.value} · Expires {c.expDate}</div>
                      <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ background: alert.bg, color: alert.color, fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '20px' }}>
                          {alert.icon} {c.daysLeft} days remaining
                        </span>
                      </div>
                      <div style={{ marginTop: '8px', background: '#f0f0f0', borderRadius: '4px', height: '6px', width: '240px', maxWidth: '100%' }}>
                        <div style={{
                          background: c.daysLeft <= 7 ? '#dc2626' : c.daysLeft <= 30 ? '#f59e0b' : '#16a34a',
                          borderRadius: '4px', height: '6px',
                          width: `${Math.min(100, (c.daysLeft / 365) * 100)}%`,
                        }} />
                      </div>
                    </div>
                    <div>
                      {c.daysLeft <= 90 && c.daysLeft > 0 && (
                        <button
                          onClick={() => handleRenew(c.id)}
                          disabled={renewingId === c.id}
                          style={{
                            background: renewingId === c.id ? '#ccc' : c.daysLeft <= 30 ? 'linear-gradient(to bottom,#f5c26b,#e47911)' : '#fff',
                            border: c.daysLeft <= 30 ? '1px solid #c07600' : '1px solid var(--border)',
                            color: renewingId === c.id ? '#fff' : c.daysLeft <= 30 ? '#111' : 'var(--navy)',
                            fontWeight: 700,
                            padding: '8px 16px',
                            borderRadius: '6px',
                            cursor: renewingId === c.id ? 'not-allowed' : 'pointer',
                            fontSize: '13px',
                          }}
                        >
                          {renewingId === c.id ? 'Renewing…' : '↺ Renew Contract'}
                        </button>
                      )}
                      {(c.daysLeft === 365 || c.daysLeft > 90) && (
                        <span style={{ fontSize: '12px', color: '#15803d', fontWeight: 600 }}>✓ Active</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: '10px', fontSize: '12px', color: 'var(--text-secondary)' }}>
            🔔 Automatic alerts sent at 90, 30, and 7 days before expiration. All vendors notified simultaneously.
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Lead Magnet Builder ─── */

const LM_TEMPLATES = [
  { id: 'pdf', icon: '📄', label: 'PDF Guide', cta: 'Download Free Guide', preview: '#dbeafe' },
  { id: 'checklist', icon: '✅', label: 'Checklist', cta: 'Get the Checklist', preview: '#dcfce7' },
  { id: 'webinar', icon: '🎥', label: 'Webinar Signup', cta: 'Reserve My Seat', preview: '#fef3c7' },
  { id: 'trial', icon: '🚀', label: 'Free Trial', cta: 'Start Free Trial', preview: '#f3e8ff' },
];

function LeadMagnetDemo() {
  const [tab, setTab] = useState<'builder' | 'preview' | 'analytics'>('builder');
  const [template, setTemplate] = useState('pdf');
  const [headline, setHeadline] = useState('Free Guide: 10 Ways to Automate Your Business in 2026');
  const [subheadline, setSubheadline] = useState('Download the free PDF used by 3,200+ small business owners to save 10+ hours per week.');
  const [ctaText, setCtaText] = useState('Download Free Guide');
  const [submitted, setSubmitted] = useState(false);
  const [previewEmail, setPreviewEmail] = useState('');
  const [signups, setSignups] = useState(127);
  const [published, setPublished] = useState(false);
  const [publishing, setPublishing] = useState(false);

  const tpl = LM_TEMPLATES.find(t => t.id === template)!;

  const handlePreviewSubmit = () => {
    if (!previewEmail.trim()) return;
    setSubmitted(true);
    setSignups(s => s + 1);
  };

  const handlePublish = () => {
    setPublishing(true);
    setTimeout(() => { setPublishing(false); setPublished(true); }, 1500);
  };

  const convRate = ((signups / 1843) * 100).toFixed(1);

  const tabBtn = (t: typeof tab, label: string) => (
    <button
      key={t}
      onClick={() => { setTab(t); setSubmitted(false); setPreviewEmail(''); }}
      style={{
        padding: '8px 16px',
        background: tab === t ? 'var(--navy)' : '#f0f4f8',
        color: tab === t ? '#fff' : 'var(--text-secondary)',
        border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, fontSize: '13px',
      }}
    >
      {label}
    </button>
  );

  return (
    <div>
      <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {tabBtn('builder', '🔨 Builder')}
        {tabBtn('preview', '📱 Live Preview')}
        {tabBtn('analytics', `📊 Analytics (${signups})`)}
      </div>

      {/* ── Builder Tab ── */}
      {tab === 'builder' && (
        <div>
          <div style={{ marginBottom: '16px' }}>
            <div style={{ ...labelStyle, marginBottom: '8px', display: 'block' }}>Lead Magnet Type</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '8px' }}>
              {LM_TEMPLATES.map(t => (
                <button
                  key={t.id}
                  onClick={() => { setTemplate(t.id); setCtaText(t.cta); }}
                  style={{
                    padding: '12px',
                    background: template === t.id ? 'var(--navy)' : '#f0f4f8',
                    color: template === t.id ? '#fff' : 'var(--navy)',
                    border: template === t.id ? 'none' : '1px solid var(--border)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 700,
                    fontSize: '13px',
                    textAlign: 'center' as const,
                  }}
                >
                  <div style={{ fontSize: '22px', marginBottom: '4px' }}>{t.icon}</div>
                  <div>{t.label}</div>
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gap: '12px', marginBottom: '18px' }}>
            <div>
              <label style={labelStyle}>Headline</label>
              <input type="text" value={headline} onChange={e => setHeadline(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Sub-headline / Description</label>
              <textarea value={subheadline} onChange={e => setSubheadline(e.target.value)} rows={2} style={{ ...inputStyle, resize: 'vertical' as const, fontFamily: 'inherit' }} />
            </div>
            <div>
              <label style={labelStyle}>Button CTA Text</label>
              <input type="text" value={ctaText} onChange={e => setCtaText(e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            {!published ? (
              <button
                onClick={handlePublish}
                disabled={publishing}
                style={{
                  background: publishing ? '#ccc' : 'linear-gradient(to bottom,#f5c26b,#e47911)',
                  border: publishing ? 'none' : '1px solid #c07600',
                  color: publishing ? '#fff' : '#111',
                  fontWeight: 700,
                  padding: '10px 24px',
                  borderRadius: '6px',
                  cursor: publishing ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                }}
              >
                {publishing ? '⚡ Publishing…' : '🚀 Publish Page'}
              </button>
            ) : (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ background: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '8px 16px', fontWeight: 700, fontSize: '13px', color: '#15803d' }}>
                  ✓ Live at yourdomain.com/free-guide
                </div>
                <button onClick={() => { setTab('preview'); }} style={{ background: '#fff', border: '1px solid var(--border)', color: 'var(--navy)', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}>
                  View Live →
                </button>
              </div>
            )}
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px' }}>✓ SSL included</span>
              <span style={{ background: '#dcfce7', color: '#15803d', fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px' }}>✓ Auto file delivery</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Preview Tab ── */}
      {tab === 'preview' && (
        <div>
          <div style={{ background: '#1a1a1a', borderRadius: '10px', padding: '4px', marginBottom: '12px' }}>
            <div style={{ background: '#2d2d2d', borderRadius: '8px 8px 0 0', padding: '8px 16px', display: 'flex', gap: '6px', alignItems: 'center' }}>
              {['#ff5f57', '#ffbd2e', '#28c840'].map((c, i) => <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />)}
              <div style={{ background: '#3d3d3d', borderRadius: '4px', padding: '3px 20px', fontSize: '11px', color: '#9ca3af', marginLeft: '10px', flex: 1, maxWidth: '240px' }}>yourdomain.com/free-guide</div>
            </div>
            <div style={{ background: tpl.preview, borderRadius: '0 0 8px 8px', padding: '40px 24px', textAlign: 'center', minHeight: '280px', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>{tpl.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1a1a1a', marginBottom: '10px', lineHeight: 1.3, maxWidth: '400px' }}>{headline || 'Your Headline Here'}</h3>
              <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '24px', maxWidth: '360px', lineHeight: 1.6 }}>{subheadline}</p>
              {!submitted ? (
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '10px', width: '100%', maxWidth: '300px' }}>
                  <input
                    type="email"
                    value={previewEmail}
                    onChange={e => setPreviewEmail(e.target.value)}
                    placeholder="Enter your email"
                    style={{ ...inputStyle, textAlign: 'center', fontSize: '14px', padding: '12px', border: '2px solid #d1d5db' }}
                    onKeyDown={e => e.key === 'Enter' && handlePreviewSubmit()}
                  />
                  <button
                    onClick={handlePreviewSubmit}
                    style={{ background: 'var(--navy)', border: 'none', color: '#fff', fontWeight: 800, padding: '14px', borderRadius: '6px', cursor: 'pointer', fontSize: '15px' }}
                  >
                    {ctaText || 'Get Access'}
                  </button>
                  <div style={{ fontSize: '11px', color: '#9ca3af' }}>🔒 No spam. Unsubscribe anytime.</div>
                </div>
              ) : (
                <div style={{ background: '#fff', border: '2px solid #16a34a', borderRadius: '12px', padding: '24px 32px', textAlign: 'center' }}>
                  <div style={{ fontSize: '36px', marginBottom: '8px' }}>🎉</div>
                  <div style={{ fontWeight: 800, fontSize: '16px', color: '#15803d', marginBottom: '4px' }}>Check your inbox!</div>
                  <div style={{ fontSize: '13px', color: '#4b5563' }}>We sent your {tpl.label} to {previewEmail}</div>
                  <button onClick={() => { setSubmitted(false); setPreviewEmail(''); }} style={{ background: 'none', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: '12px', marginTop: '8px', textDecoration: 'underline' }}>Test again →</button>
                </div>
              )}
            </div>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', textAlign: 'center' }}>
            📱 Mobile-first · ⚡ Page loads in &lt;1s · 📧 File delivered automatically on signup
          </div>
        </div>
      )}

      {/* ── Analytics Tab ── */}
      {tab === 'analytics' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '10px', marginBottom: '20px' }}>
            {[
              { label: 'Total Signups', value: String(signups), color: 'var(--navy)' },
              { label: 'Page Visitors', value: '1,843', color: 'var(--text-secondary)' },
              { label: 'Opt-in Rate', value: `${convRate}%`, color: '#16a34a' },
              { label: 'Avg. Mobile', value: '83%', color: 'var(--orange)' },
            ].map((s, i) => (
              <div key={i} style={resultCard}>
                <div style={resultLabel}>{s.label}</div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: s.color, marginTop: '4px' }}>{s.value}</div>
              </div>
            ))}
          </div>

          <div style={{ ...labelStyle, display: 'block', marginBottom: '10px' }}>Traffic Sources</div>
          <div style={{ border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden', marginBottom: '18px' }}>
            {[
              { source: 'Organic Search', visits: 742, pct: 40 },
              { source: 'Social Media', visits: 461, pct: 25 },
              { source: 'Direct', visits: 368, pct: 20 },
              { source: 'Email / Referral', visits: 276, pct: 15 },
            ].map((s, i) => (
              <div key={i} style={{ padding: '12px 16px', borderBottom: i < 3 ? '1px solid var(--border)' : 'none', background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '13px' }}>
                  <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{s.source}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{s.visits} visits · <strong style={{ color: 'var(--navy)' }}>{s.pct}%</strong></span>
                </div>
                <div style={{ background: '#f0f0f0', borderRadius: '4px', height: '5px' }}>
                  <div style={{ background: 'var(--orange)', borderRadius: '4px', height: '5px', width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#f0f7ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '14px 18px' }}>
            <div style={{ fontWeight: 700, fontSize: '13px', color: '#1d4ed8', marginBottom: '6px' }}>💡 AI Optimization Tip</div>
            <div style={{ fontSize: '13px', color: '#1d4ed8' }}>
              Your mobile opt-in rate (83%) is above the benchmark. Try adding social proof (e.g. &ldquo;Join 3,200+ subscribers&rdquo;) to push conversion above 10%.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Workflow Automation ─── */

const WF_TRIGGER_TYPES = [
  { id: 'form', icon: '📝', label: 'Form Submitted' },
  { id: 'schedule', icon: '⏰', label: 'Scheduled (Cron)' },
  { id: 'webhook', icon: '🔗', label: 'Webhook Received' },
  { id: 'email', icon: '📧', label: 'Email Received' },
  { id: 'record', icon: '🗄️', label: 'Record Updated' },
];

const WF_ACTION_TYPES = [
  { id: 'email', icon: '📧', label: 'Send Email' },
  { id: 'record', icon: '🗄️', label: 'Update Record' },
  { id: 'approval', icon: '✅', label: 'Request Approval' },
  { id: 'slack', icon: '💬', label: 'Post to Slack' },
  { id: 'task', icon: '📋', label: 'Create Task' },
  { id: 'wait', icon: '⏳', label: 'Wait / Delay' },
];

interface WFStep {
  id: string;
  type: string;
  label: string;
  detail: string;
  enabled: boolean;
}

const INIT_WF_STEPS: WFStep[] = [
  { id: 'wf1', type: 'email', label: 'Send Email', detail: 'Send confirmation to submitter', enabled: true },
  { id: 'wf2', type: 'record', label: 'Update Record', detail: 'Set status = "Received" in CRM', enabled: true },
  { id: 'wf3', type: 'approval', label: 'Request Approval', detail: 'Notify Manager for review', enabled: true },
  { id: 'wf4', type: 'slack', label: 'Post to Slack', detail: 'Alert #sales-leads channel', enabled: false },
];

const WF_MOCK_HISTORY = [
  { id: 'run-0041', trigger: 'Form Submitted', timestamp: 'Today 2:14 PM', duration: '1.2s', status: 'success' as const, steps: 3 },
  { id: 'run-0040', trigger: 'Form Submitted', timestamp: 'Today 11:47 AM', duration: '0.9s', status: 'success' as const, steps: 3 },
  { id: 'run-0039', trigger: 'Scheduled', timestamp: 'Yesterday 9:00 AM', duration: '2.1s', status: 'success' as const, steps: 3 },
  { id: 'run-0038', trigger: 'Webhook Received', timestamp: 'Yesterday 3:32 PM', duration: '0.8s', status: 'failed' as const, steps: 2 },
  { id: 'run-0037', trigger: 'Form Submitted', timestamp: '2 days ago 4:18 PM', duration: '1.1s', status: 'success' as const, steps: 3 },
];

function WorkflowAutomationDemo() {
  const [tab, setTab] = useState<'builder' | 'run' | 'history'>('builder');
  const [triggerType, setTriggerType] = useState('form');
  const [triggerSource, setTriggerSource] = useState('Contact Us Form');
  const [steps, setSteps] = useState<WFStep[]>(INIT_WF_STEPS.map(s => ({ ...s })));
  const [runState, setRunState] = useState<'idle' | 'running' | 'complete'>('idle');
  const [stepStatuses, setStepStatuses] = useState<Record<string, 'pending' | 'running' | 'success' | 'error'>>({});
  const [extraRuns, setExtraRuns] = useState(0);
  const runTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enabledSteps = steps.filter(s => s.enabled);
  const totalRuns = WF_MOCK_HISTORY.length + extraRuns;
  const successRate = Math.round(((WF_MOCK_HISTORY.filter(r => r.status === 'success').length + extraRuns) / Math.max(totalRuns, 1)) * 100);
  const triggerInfo = WF_TRIGGER_TYPES.find(t => t.id === triggerType)!;

  const moveStep = (id: string, dir: -1 | 1) => {
    setSteps(prev => {
      const i = prev.findIndex(s => s.id === id);
      const j = i + dir;
      if (j < 0 || j >= prev.length) return prev;
      const next = [...prev];
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  };

  const toggleStep = (id: string) => {
    setSteps(prev => prev.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s));
  };

  const addStep = (type: string) => {
    const t = WF_ACTION_TYPES.find(a => a.id === type)!;
    const details: Record<string, string> = {
      email: 'Send notification email', record: 'Update record field', approval: 'Request team approval',
      slack: 'Post update to channel', task: 'Create follow-up task', wait: 'Wait 24 hours',
    };
    setSteps(prev => [...prev, { id: `wf${prev.length + 10}`, type, label: t.label, detail: details[type] ?? t.label, enabled: true }]);
  };

  const startRun = () => {
    if (enabledSteps.length === 0) return;
    setRunState('running');
    const initStatuses: Record<string, 'pending' | 'running' | 'success' | 'error'> = {};
    enabledSteps.forEach(s => { initStatuses[s.id] = 'pending'; });
    setStepStatuses(initStatuses);

    let stepIdx = 0;
    const runNext = () => {
      if (stepIdx >= enabledSteps.length) {
        setRunState('complete');
        setExtraRuns(c => c + 1);
        return;
      }
      const step = enabledSteps[stepIdx];
      setStepStatuses(prev => ({ ...prev, [step.id]: 'running' }));
      runTimerRef.current = setTimeout(() => {
        const result: 'success' | 'error' = Math.random() > 0.1 ? 'success' : 'error';
        setStepStatuses(prev => ({ ...prev, [step.id]: result }));
        stepIdx++;
        if (result === 'error') { setRunState('complete'); return; }
        setTimeout(runNext, 200);
      }, 700 + Math.random() * 600);
    };
    setTimeout(runNext, 400);
  };

  const resetRun = () => {
    if (runTimerRef.current) clearTimeout(runTimerRef.current);
    setRunState('idle');
    setStepStatuses({});
  };

  const tabBtn = (t: 'builder' | 'run' | 'history', label: string) => (
    <button
      key={t}
      onClick={() => { setTab(t); if (t === 'run') resetRun(); }}
      style={{ padding: '8px 16px', background: tab === t ? 'var(--navy)' : '#f0f4f8', color: tab === t ? '#fff' : 'var(--text-secondary)', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 700, fontSize: '13px' }}
    >
      {label}
    </button>
  );

  const stepIcon = (type: string) => WF_ACTION_TYPES.find(a => a.id === type)?.icon ?? '⚙️';

  const statusBadge = (status: 'pending' | 'running' | 'success' | 'error') => {
    const cfg = {
      pending: { bg: '#f0f4f8', color: '#6b7280', text: '◯ Pending' },
      running: { bg: '#fef3c7', color: '#92400e', text: '▶ Running…' },
      success: { bg: '#dcfce7', color: '#15803d', text: '✓ Done' },
      error: { bg: '#fee2e2', color: '#dc2626', text: '✕ Error' },
    }[status];
    return <span style={{ background: cfg.bg, color: cfg.color, borderRadius: '20px', fontSize: '11px', fontWeight: 700, padding: '2px 10px', whiteSpace: 'nowrap' as const }}>{cfg.text}</span>;
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '6px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {tabBtn('builder', '🔧 Builder')}
        {tabBtn('run', '▶ Test Run')}
        {tabBtn('history', `📋 History (${totalRuns})`)}
      </div>

      {/* ── Builder Tab ── */}
      {tab === 'builder' && (
        <div>
          <div style={{ background: '#f0f7ff', border: '2px solid #bfdbfe', borderRadius: '10px', padding: '16px 20px', marginBottom: '16px' }}>
            <div style={{ ...labelStyle, color: '#1d4ed8', marginBottom: '10px', display: 'block' }}>⚡ Trigger</div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
              {WF_TRIGGER_TYPES.map(t => (
                <button
                  key={t.id}
                  onClick={() => setTriggerType(t.id)}
                  style={{ padding: '7px 12px', background: triggerType === t.id ? '#1d4ed8' : '#fff', color: triggerType === t.id ? '#fff' : 'var(--navy)', border: triggerType === t.id ? 'none' : '1px solid var(--border)', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, fontSize: '12px' }}
                >
                  {t.icon} {t.label}
                </button>
              ))}
            </div>
            <div>
              <label style={labelStyle}>Trigger Source / Name</label>
              <input type="text" value={triggerSource} onChange={e => setTriggerSource(e.target.value)} style={{ ...inputStyle, boxSizing: 'border-box' as const }} placeholder="e.g., Contact Us Form" />
            </div>
          </div>

          <div style={{ textAlign: 'center', fontSize: '20px', color: '#9ca3af', margin: '-4px 0 8px' }}>↓</div>

          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden', marginBottom: '14px' }}>
            <div style={{ padding: '12px 16px', background: '#f8f9fa', borderBottom: '1px solid var(--border)', fontWeight: 700, fontSize: '13px', color: 'var(--navy)' }}>
              ⚙️ Actions ({enabledSteps.length} active)
            </div>
            {steps.map((step, i) => (
              <div
                key={step.id}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderBottom: i < steps.length - 1 ? '1px solid var(--border)' : 'none', background: !step.enabled ? '#fafafa' : i % 2 === 0 ? '#fff' : '#fafafa', opacity: step.enabled ? 1 : 0.5 }}
              >
                <span style={{ fontSize: '20px', flexShrink: 0 }}>{stepIcon(step.type)}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Step {i + 1}: {step.label}
                    {!step.enabled && <span style={{ fontSize: '10px', background: '#f0f0f0', color: '#9ca3af', padding: '1px 6px', borderRadius: '4px', fontWeight: 600 }}>OFF</span>}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>{step.detail}</div>
                </div>
                <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                  <button onClick={() => toggleStep(step.id)} title={step.enabled ? 'Disable' : 'Enable'} style={{ ...iconBtnStyle, color: step.enabled ? '#16a34a' : '#9ca3af', fontSize: '16px' }}>{step.enabled ? '●' : '○'}</button>
                  <button onClick={() => moveStep(step.id, -1)} disabled={i === 0} style={{ ...iconBtnStyle, opacity: i === 0 ? 0.3 : 1 }}>↑</button>
                  <button onClick={() => moveStep(step.id, 1)} disabled={i === steps.length - 1} style={{ ...iconBtnStyle, opacity: i === steps.length - 1 ? 0.3 : 1 }}>↓</button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#f8f9fa', borderRadius: '8px', padding: '12px 16px' }}>
            <div style={{ ...labelStyle, display: 'block', marginBottom: '8px' }}>+ Add Action Step</div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {WF_ACTION_TYPES.map(a => (
                <button key={a.id} onClick={() => addStep(a.id)} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '5px 10px', background: '#fff', border: '1px solid var(--border)', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 600, color: 'var(--navy)' }}>
                  {a.icon} {a.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Test Run Tab ── */}
      {tab === 'run' && (
        <div>
          <div style={{ background: '#f0f7ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '14px 18px', marginBottom: '18px' }}>
            <div style={{ fontWeight: 700, fontSize: '13px', color: '#1d4ed8', marginBottom: '4px' }}>
              {triggerInfo.icon} {triggerInfo.label}{triggerSource ? ` — "${triggerSource}"` : ''}
            </div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>{enabledSteps.length} active action{enabledSteps.length !== 1 ? 's' : ''} in sequence</div>
          </div>

          <div style={{ border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden', marginBottom: '16px' }}>
            {enabledSteps.length === 0 ? (
              <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '14px' }}>Enable at least one step in the Builder to run a test.</div>
            ) : enabledSteps.map((step, i) => {
              const status = stepStatuses[step.id] ?? 'pending';
              const statusBg = { pending: '#fff', running: '#fefce8', success: '#f0fdf4', error: '#fef2f2' }[status];
              const circBg = { pending: '#e5e7eb', running: '#f59e0b', success: '#16a34a', error: '#dc2626' }[status];
              const circColor = status === 'pending' ? '#6b7280' : '#fff';
              return (
                <div key={step.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 18px', borderBottom: i < enabledSteps.length - 1 ? '1px solid var(--border)' : 'none', background: statusBg, transition: 'background 0.3s' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: circBg, color: circColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800, flexShrink: 0, transition: 'all 0.3s' }}>
                    {status === 'success' ? '✓' : status === 'error' ? '✕' : status === 'running' ? '▶' : String(i + 1)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--navy)' }}>{stepIcon(step.type)} {step.label}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>{step.detail}</div>
                  </div>
                  {statusBadge(status)}
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
            {runState === 'idle' && (
              <button onClick={startRun} disabled={enabledSteps.length === 0} style={{ background: enabledSteps.length > 0 ? 'linear-gradient(to bottom,#f5c26b,#e47911)' : '#ccc', border: enabledSteps.length > 0 ? '1px solid #c07600' : 'none', color: enabledSteps.length > 0 ? '#111' : '#fff', fontWeight: 700, padding: '10px 26px', borderRadius: '6px', cursor: enabledSteps.length > 0 ? 'pointer' : 'not-allowed', fontSize: '14px' }}>
                ▶ Run Test Workflow
              </button>
            )}
            {runState === 'running' && (
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 600 }}>⟳ Executing workflow…</div>
            )}
            {runState === 'complete' && (
              <>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: Object.values(stepStatuses).includes('error') ? '#fee2e2' : '#dcfce7', color: Object.values(stepStatuses).includes('error') ? '#dc2626' : '#15803d', borderRadius: '8px', padding: '10px 16px', fontWeight: 700, fontSize: '13px' }}>
                  {Object.values(stepStatuses).includes('error') ? '✕ Workflow stopped — check step error' : '✓ Workflow completed successfully'}
                </div>
                <button onClick={resetRun} style={{ background: '#fff', border: '1px solid var(--border)', color: 'var(--text-secondary)', padding: '10px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}>↺ Run Again</button>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── History Tab ── */}
      {tab === 'history' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '10px', marginBottom: '18px' }}>
            {[
              { label: 'Total Runs', value: String(totalRuns), color: 'var(--navy)' },
              { label: 'Success Rate', value: `${successRate}%`, color: '#16a34a' },
              { label: 'Avg Duration', value: '1.1s', color: 'var(--orange)' },
              { label: 'Active Steps', value: String(enabledSteps.length), color: 'var(--navy)' },
            ].map((s, i) => (
              <div key={i} style={resultCard}>
                <div style={resultLabel}>{s.label}</div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: s.color, marginTop: '4px' }}>{s.value}</div>
              </div>
            ))}
          </div>

          <div style={{ ...labelStyle, display: 'block', marginBottom: '10px' }}>Recent Workflow Runs</div>
          <div style={{ border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden' }}>
            {[
              ...(extraRuns > 0 ? [{ id: `run-${String(42 + extraRuns).padStart(4, '0')}`, trigger: triggerInfo.label, timestamp: 'Just now', duration: '1.0s', status: 'success' as const, steps: enabledSteps.length }] : []),
              ...WF_MOCK_HISTORY,
            ].slice(0, 6).map((run, i, arr) => (
              <div key={run.id} style={{ padding: '13px 18px', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none', background: i % 2 === 0 ? '#fff' : '#fafafa', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <code style={{ fontSize: '11px', color: '#9ca3af', fontFamily: 'monospace', flexShrink: 0 }}>{run.id}</code>
                <div style={{ flex: 1, minWidth: '120px' }}>
                  <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--navy)' }}>{run.trigger}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '1px' }}>{run.timestamp} · {run.steps} step{run.steps !== 1 ? 's' : ''} · {run.duration}</div>
                </div>
                <span style={{ background: run.status === 'success' ? '#dcfce7' : '#fee2e2', color: run.status === 'success' ? '#15803d' : '#dc2626', borderRadius: '20px', fontSize: '11px', fontWeight: 700, padding: '3px 10px', flexShrink: 0 }}>
                  {run.status === 'success' ? '✓ Success' : '✕ Failed'}
                </span>
              </div>
            ))}
          </div>
        </div>
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

const iconBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '4px 6px',
  borderRadius: '4px',
  fontSize: '14px',
  color: 'var(--text-secondary)',
};

/* ─── Asset Tracker Demo ─── */
const AT_TODAY = '2026-07-05';

interface ATAsset {
  id: string; name: string; category: string;
  assignee: string; status: 'available' | 'assigned' | 'maintenance';
  checkoutDate: string; dueDate: string; warrantyExpiry: string; purchasePrice: number;
}

const AT_INIT: ATAsset[] = [
  { id:'AS-001', name:'MacBook Pro 14"', category:'Laptop', assignee:'Sarah Chen', status:'assigned', checkoutDate:'2026-06-25', dueDate:'2026-07-20', warrantyExpiry:'2028-06-25', purchasePrice:2499 },
  { id:'AS-002', name:'iPhone 14 Pro', category:'Phone', assignee:'', status:'available', checkoutDate:'', dueDate:'', warrantyExpiry:'2026-09-15', purchasePrice:999 },
  { id:'AS-003', name:'Dell U2722D Monitor', category:'Display', assignee:'Marcus Thompson', status:'assigned', checkoutDate:'2026-06-10', dueDate:'2026-07-01', warrantyExpiry:'2029-01-10', purchasePrice:649 },
  { id:'AS-004', name:'HP LaserJet Pro M428', category:'Printer', assignee:'', status:'maintenance', checkoutDate:'', dueDate:'', warrantyExpiry:'2026-08-01', purchasePrice:449 },
  { id:'AS-005', name:'MacBook Air M2', category:'Laptop', assignee:'Elena Rodriguez', status:'assigned', checkoutDate:'2026-07-01', dueDate:'2026-08-01', warrantyExpiry:'2027-12-15', purchasePrice:1299 },
  { id:'AS-006', name:'iPad Pro 12.9"', category:'Tablet', assignee:'', status:'available', checkoutDate:'', dueDate:'', warrantyExpiry:'2027-03-20', purchasePrice:1099 },
  { id:'AS-007', name:'Lenovo ThinkPad X1', category:'Laptop', assignee:'James Kim', status:'assigned', checkoutDate:'2026-06-28', dueDate:'2026-07-28', warrantyExpiry:'2027-06-28', purchasePrice:1449 },
  { id:'AS-008', name:'Cisco 8841 IP Phone', category:'Phone', assignee:'', status:'available', checkoutDate:'', dueDate:'', warrantyExpiry:'2026-07-25', purchasePrice:299 },
  { id:'AS-009', name:'Dell XPS 15 9510', category:'Laptop', assignee:'Priya Patel', status:'assigned', checkoutDate:'2026-07-02', dueDate:'2026-08-15', warrantyExpiry:'2028-07-02', purchasePrice:1899 },
  { id:'AS-010', name:'APC Smart-UPS 1500VA', category:'UPS', assignee:'', status:'maintenance', checkoutDate:'', dueDate:'', warrantyExpiry:'2026-08-10', purchasePrice:899 },
];

function atDaysUntil(dateStr: string): number {
  if (!dateStr) return 9999;
  return Math.floor((new Date(dateStr).getTime() - new Date(AT_TODAY).getTime()) / 86400000);
}

function ATQRCode({ value }: { value: string }) {
  const SIZE = 21, CELL = 5;
  let s = value.split('').reduce((h, c) => ((h * 33) ^ c.charCodeAt(0)) >>> 0, 5381);
  const rng = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 0xFFFFFFFF; };
  const cells: boolean[][] = Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => rng() > 0.4)
  );
  const fp = (tr: number, tc: number) => {
    for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++)
      if (tr+r < SIZE && tc+c < SIZE)
        cells[tr+r][tc+c] = r===0||r===6||c===0||c===6||(r>=2&&r<=4&&c>=2&&c<=4);
  };
  fp(0,0); fp(0,SIZE-7); fp(SIZE-7,0);
  for (let i=8;i<SIZE-8;i++) { cells[6][i]=i%2===0; cells[i][6]=i%2===0; }
  const W = SIZE*CELL;
  return (
    <svg width={W} height={W} viewBox={`0 0 ${W} ${W}`} style={{ display:'block', border:'1px solid #e8e8e8', borderRadius:4 }}>
      <rect width={W} height={W} fill="white"/>
      {cells.flatMap((row,r) => row.map((on,c) =>
        on ? <rect key={`${r}-${c}`} x={c*CELL} y={r*CELL} width={CELL} height={CELL} fill="#1a1a1a"/> : null
      ))}
    </svg>
  );
}

const AT_STATUS_COLOR: Record<string,string> = { available:'#27ae60', assigned:'#2563eb', maintenance:'#e67e22' };
const AT_STATUS_BG: Record<string,string>    = { available:'#e9f7ef', assigned:'#eff6ff', maintenance:'#fef3e2' };

function AssetTrackerDemo() {
  const [tab, setTab] = useState<'assets'|'qr'|'dash'>('assets');
  const [assets, setAssets] = useState<ATAsset[]>(AT_INIT.map(a => ({ ...a })));
  const [coId, setCoId] = useState<string|null>(null);
  const [coName, setCoName] = useState('');
  const [coDue, setCoDue] = useState('2026-08-05');
  const [qrId, setQrId] = useState('AS-001');

  const checkOut = (id: string) => { setCoId(id); setCoName(''); setCoDue('2026-08-05'); };
  const confirmCheckOut = () => {
    if (!coName.trim() || !coId) return;
    setAssets(prev => prev.map(a =>
      a.id === coId ? { ...a, status:'assigned' as const, assignee:coName.trim(), checkoutDate:AT_TODAY, dueDate:coDue } : a
    ));
    setCoId(null);
  };
  const returnAsset = (id: string) => {
    setAssets(prev => prev.map(a =>
      a.id === id ? { ...a, status:'available' as const, assignee:'', checkoutDate:'', dueDate:'' } : a
    ));
  };

  const overdue = assets.filter(a => a.status==='assigned' && a.dueDate && a.dueDate < AT_TODAY);
  const expiring = assets
    .filter(a => { const d = atDaysUntil(a.warrantyExpiry); return d >= 0 && d <= 60; })
    .sort((a,b) => atDaysUntil(a.warrantyExpiry) - atDaysUntil(b.warrantyExpiry));
  const assigned = assets.filter(a => a.status==='assigned').length;
  const available = assets.filter(a => a.status==='available').length;
  const maintenance = assets.filter(a => a.status==='maintenance').length;
  const totalValue = assets.reduce((s,a) => s + a.purchasePrice, 0);
  const selectedAsset = assets.find(a => a.id === qrId);

  const atTabBar = (
    <div style={{ display:'flex', gap:0, marginBottom:20, borderBottom:'2px solid #e8e8e8' }}>
      {([['assets','🗂️ Inventory'],['qr','🏷️ QR Labels'],['dash','📊 Dashboard']] as [typeof tab,string][]).map(([t,label]) => (
        <button key={t} onClick={()=>setTab(t)} style={{ border:'none', background:'none', cursor:'pointer', padding:'8px 16px', fontWeight:tab===t?700:400, color:tab===t?'var(--orange)':'var(--text-secondary)', borderBottom:tab===t?'2px solid var(--orange)':'2px solid transparent', marginBottom:'-2px', fontSize:'13.5px', transition:'all .15s' }}>
          {label}
        </button>
      ))}
    </div>
  );

  if (tab === 'assets') return (
    <div>
      {atTabBar}
      <div style={{ fontSize:12, color:'var(--text-secondary)', marginBottom:12 }}>
        {assets.length} total assets &nbsp;·&nbsp; {assigned} assigned &nbsp;·&nbsp; {available} available &nbsp;·&nbsp; {maintenance} in maintenance
        {overdue.length > 0 && <span style={{ color:'#c0392b', fontWeight:600 }}> &nbsp;·&nbsp; ⚠️ {overdue.length} overdue</span>}
      </div>

      {coId && (
        <div style={{ background:'#f0f7ff', border:'1px solid #2563eb', borderRadius:8, padding:'14px 16px', marginBottom:16 }}>
          <div style={{ fontWeight:600, marginBottom:10, fontSize:13.5 }}>📤 Checking Out: {assets.find(a=>a.id===coId)?.name}</div>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap', alignItems:'flex-end' }}>
            <div>
              <label style={labelStyle}>Employee Name</label>
              <input value={coName} onChange={e=>setCoName(e.target.value)} placeholder="e.g. Alex Johnson" style={{ ...inputStyle, width:170 }} autoFocus />
            </div>
            <div>
              <label style={labelStyle}>Due Back</label>
              <input type="date" value={coDue} onChange={e=>setCoDue(e.target.value)} style={{ ...inputStyle, width:140 }} />
            </div>
            <div style={{ display:'flex', gap:8 }}>
              <button onClick={confirmCheckOut} disabled={!coName.trim()} style={{ background:'var(--navy)', color:'#fff', border:'none', borderRadius:6, padding:'7px 14px', cursor:coName.trim()?'pointer':'not-allowed', opacity:coName.trim()?1:0.5, fontWeight:600, fontSize:13 }}>
                Confirm Check-Out
              </button>
              <button onClick={()=>setCoId(null)} style={{ background:'none', border:'1px solid #ccc', borderRadius:6, padding:'7px 12px', cursor:'pointer', fontSize:13 }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div style={{ overflowX:'auto' }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
          <thead>
            <tr style={{ background:'#f8f9fa', borderBottom:'2px solid #e8e8e8' }}>
              {['Asset ID','Name','Category','Status','Assigned To','Due Date','Action'].map(h => (
                <th key={h} style={{ padding:'8px 12px', textAlign:'left', fontWeight:600, color:'var(--text-secondary)', whiteSpace:'nowrap', fontSize:12 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {assets.map(a => {
              const over = a.status==='assigned' && a.dueDate && a.dueDate < AT_TODAY;
              return (
                <tr key={a.id} style={{ borderBottom:'1px solid #f0f0f0', background:over?'#fff8f7':'white' }}>
                  <td style={{ padding:'8px 12px', fontFamily:'monospace', fontSize:12, color:'#555' }}>{a.id}</td>
                  <td style={{ padding:'8px 12px', fontWeight:500 }}>{a.name}</td>
                  <td style={{ padding:'8px 12px', color:'var(--text-secondary)', fontSize:12 }}>{a.category}</td>
                  <td style={{ padding:'8px 12px' }}>
                    <span style={{ background:AT_STATUS_BG[a.status], color:AT_STATUS_COLOR[a.status], borderRadius:12, padding:'2px 10px', fontSize:12, fontWeight:600 }}>
                      {a.status.charAt(0).toUpperCase()+a.status.slice(1)}
                    </span>
                    {over && <span style={{ marginLeft:4, fontSize:11, color:'#c0392b', fontWeight:700 }}>⚠️ Overdue</span>}
                  </td>
                  <td style={{ padding:'8px 12px', color:a.assignee?'#333':'#aaa', fontSize:12 }}>{a.assignee || '—'}</td>
                  <td style={{ padding:'8px 12px', fontSize:12, color:over?'#c0392b':a.dueDate?'#333':'#aaa', fontWeight:over?700:400 }}>{a.dueDate || '—'}</td>
                  <td style={{ padding:'8px 12px' }}>
                    {a.status==='available' && (
                      <button onClick={()=>checkOut(a.id)} style={{ background:'var(--navy)', color:'#fff', border:'none', borderRadius:6, padding:'4px 10px', cursor:'pointer', fontSize:12, whiteSpace:'nowrap' }}>
                        📤 Check Out
                      </button>
                    )}
                    {a.status==='assigned' && (
                      <button onClick={()=>returnAsset(a.id)} style={{ background:'#27ae60', color:'#fff', border:'none', borderRadius:6, padding:'4px 10px', cursor:'pointer', fontSize:12, whiteSpace:'nowrap' }}>
                        📥 Return
                      </button>
                    )}
                    {a.status==='maintenance' && (
                      <span style={{ fontSize:11, color:'var(--text-secondary)' }}>In Service</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  if (tab === 'qr') return (
    <div>
      {atTabBar}
      <div style={{ display:'flex', gap:24, flexWrap:'wrap' }}>
        <div style={{ flex:'0 0 180px' }}>
          <div style={{ fontWeight:600, fontSize:13, marginBottom:10, color:'var(--text-secondary)' }}>Select Asset</div>
          <div style={{ display:'flex', flexDirection:'column', gap:6, maxHeight:300, overflowY:'auto' }}>
            {assets.map(a => (
              <button key={a.id} onClick={()=>setQrId(a.id)} style={{ background:qrId===a.id?'#eff6ff':'none', border:qrId===a.id?'1px solid #2563eb':'1px solid #e8e8e8', borderRadius:6, padding:'6px 10px', cursor:'pointer', textAlign:'left', fontSize:12 }}>
                <div style={{ fontFamily:'monospace', color:'#888', fontSize:11 }}>{a.id}</div>
                <div style={{ fontWeight:qrId===a.id?600:400, color:'#333' }}>{a.name}</div>
              </button>
            ))}
          </div>
        </div>

        {selectedAsset && (
          <div style={{ flex:1, minWidth:260 }}>
            <div style={{ fontWeight:600, fontSize:13, marginBottom:12, color:'var(--text-secondary)' }}>QR Asset Label Preview</div>
            <div style={{ background:'white', border:'1px solid #e8e8e8', borderRadius:8, padding:'20px', display:'inline-flex', gap:16, alignItems:'flex-start', boxShadow:'0 2px 8px rgba(0,0,0,.06)' }}>
              <ATQRCode value={selectedAsset.id + selectedAsset.name} />
              <div>
                <div style={{ fontWeight:800, fontSize:16, marginBottom:4 }}>{selectedAsset.name}</div>
                <div style={{ fontFamily:'monospace', fontSize:13, color:'#666', marginBottom:8 }}>{selectedAsset.id}</div>
                <div style={{ fontSize:12, color:'var(--text-secondary)' }}>Category: {selectedAsset.category}</div>
                <div style={{ fontSize:12, color:'var(--text-secondary)' }}>
                  Status: <span style={{ color:AT_STATUS_COLOR[selectedAsset.status], fontWeight:600 }}>
                    {selectedAsset.status.charAt(0).toUpperCase()+selectedAsset.status.slice(1)}
                  </span>
                </div>
                {selectedAsset.assignee && <div style={{ fontSize:12, color:'var(--text-secondary)' }}>Assigned: {selectedAsset.assignee}</div>}
                <div style={{ fontSize:12, color:'var(--text-secondary)', marginBottom:12 }}>Warranty: {selectedAsset.warrantyExpiry}</div>
                <button style={{ background:'var(--navy)', color:'#fff', border:'none', borderRadius:6, padding:'6px 14px', cursor:'pointer', fontSize:12, fontWeight:600 }}>
                  🖨️ Print Label
                </button>
              </div>
            </div>
            <div style={{ fontSize:11, color:'var(--text-secondary)', marginTop:10 }}>Scan to report issues, request service, or check in/out from a mobile device.</div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div>
      {atTabBar}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(140px, 1fr))', gap:12, marginBottom:24 }}>
        {[
          { label:'Total Assets', value:assets.length, icon:'🖥️', color:'var(--navy)' },
          { label:'Assigned', value:assigned, icon:'👤', color:'#2563eb' },
          { label:'Available', value:available, icon:'✅', color:'#27ae60' },
          { label:'Maintenance', value:maintenance, icon:'🔧', color:'#e67e22' },
          { label:'Overdue Returns', value:overdue.length, icon:'⚠️', color:overdue.length>0?'#c0392b':'#27ae60' },
          { label:'Asset Value', value:`$${totalValue.toLocaleString()}`, icon:'💰', color:'var(--text-secondary)' },
        ].map(card => (
          <div key={card.label} style={{ background:'#f8f9fa', borderRadius:8, padding:'12px 14px', border:'1px solid #e8e8e8' }}>
            <div style={{ fontSize:20, marginBottom:4 }}>{card.icon}</div>
            <div style={{ fontSize:22, fontWeight:800, color:card.color }}>{card.value}</div>
            <div style={{ fontSize:11, color:'var(--text-secondary)', fontWeight:500 }}>{card.label}</div>
          </div>
        ))}
      </div>

      {overdue.length > 0 && (
        <div style={{ marginBottom:20 }}>
          <div style={{ fontWeight:700, fontSize:13.5, marginBottom:8, color:'#c0392b' }}>⚠️ Overdue Returns</div>
          {overdue.map(a => (
            <div key={a.id} style={{ background:'#fff8f7', border:'1px solid #f5c6c2', borderRadius:6, padding:'10px 14px', marginBottom:6, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8 }}>
              <div>
                <span style={{ fontWeight:600, fontSize:13 }}>{a.name}</span>
                <span style={{ color:'var(--text-secondary)', fontSize:12, marginLeft:8 }}>({a.id})</span>
                <div style={{ fontSize:12, color:'#c0392b' }}>Assigned to {a.assignee} · Due {a.dueDate} ({Math.abs(atDaysUntil(a.dueDate))} days overdue)</div>
              </div>
              <button onClick={()=>returnAsset(a.id)} style={{ background:'#c0392b', color:'#fff', border:'none', borderRadius:6, padding:'5px 12px', cursor:'pointer', fontSize:12, fontWeight:600 }}>
                Mark Returned
              </button>
            </div>
          ))}
        </div>
      )}

      {expiring.length > 0 && (
        <div>
          <div style={{ fontWeight:700, fontSize:13.5, marginBottom:8, color:'#e67e22' }}>🔔 Warranties Expiring Within 60 Days</div>
          {expiring.map(a => {
            const days = atDaysUntil(a.warrantyExpiry);
            const pct = Math.max(0, Math.min(100, (days/60)*100));
            return (
              <div key={a.id} style={{ background:'#fef9f0', border:'1px solid #fde5b4', borderRadius:6, padding:'10px 14px', marginBottom:6 }}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6, flexWrap:'wrap' }}>
                  <span style={{ fontWeight:600, fontSize:13 }}>{a.name} <span style={{ fontFamily:'monospace', color:'#888', fontSize:11 }}>({a.id})</span></span>
                  <span style={{ fontSize:12, color:days<=21?'#c0392b':'#e67e22', fontWeight:600 }}>{days} days · Expires {a.warrantyExpiry}</span>
                </div>
                <div style={{ height:6, background:'#f0f0f0', borderRadius:3, overflow:'hidden' }}>
                  <div style={{ height:'100%', background:days<=21?'#e74c3c':'#e67e22', borderRadius:3, width:`${pct}%`, transition:'width .3s' }} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ─── Split Test Demo ─── */
const ST_HISTORY = [
  { name:'Homepage CTA Button Color', winner:'Variant B (Orange)', lift:'+23%', conf:'97%', date:'2026-06-15' },
  { name:'Pricing Page Hero Headline', winner:'Variant A (Control)', lift:'0% (no significant lift)', conf:'91%', date:'2026-06-02' },
  { name:'Email Subject Line: "Free" vs "Save Time"', winner:'Variant B ("Free Tool")', lift:'+31%', conf:'99%', date:'2026-05-22' },
  { name:'Lead Form: 3 Fields vs 5 Fields', winner:'Variant A (3 fields)', lift:'+18%', conf:'96%', date:'2026-05-08' },
];

function stGetData(step: number) {
  let s = 42;
  const r = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 0xFFFFFFFF; };
  let va = 0, vb = 0, ca = 0, cb = 0;
  for (let i = 0; i < step; i++) {
    va += Math.floor(r() * 8) + 4;
    vb += Math.floor(r() * 8) + 4;
    ca += r() < 0.18 ? 1 : 0;
    cb += r() < 0.28 ? 1 : 0;
  }
  return { va, vb, ca, cb };
}

const ST_MAX = 28;

function SplitTestDemo() {
  const [tab, setTab] = useState<'create'|'results'|'history'>('create');
  const [testName, setTestName] = useState('Homepage Hero Headline Test');
  const [varA, setVarA] = useState('Get Your Free Account Today');
  const [varB, setVarB] = useState('Start Saving 10 Hours a Week — Free');
  const [ctaA, setCtaA] = useState('Sign Up Free');
  const [ctaB, setCtaB] = useState('Try It Free →');
  const [launched, setLaunched] = useState(false);
  const [simStep, setSimStep] = useState(0);
  const [simRunning, setSimRunning] = useState(false);
  const [concluded, setConcluded] = useState(false);

  useEffect(() => {
    if (!simRunning) return;
    if (simStep >= ST_MAX) { setSimRunning(false); return; }
    const t = setTimeout(() => setSimStep(s => s + 1), 140);
    return () => clearTimeout(t);
  }, [simRunning, simStep]);

  const { va, vb, ca, cb } = stGetData(simStep);
  const rateA = va > 0 ? (ca / va) * 100 : 0;
  const rateB = vb > 0 ? (cb / vb) * 100 : 0;
  const lift = rateA > 0 ? ((rateB - rateA) / rateA) * 100 : 0;
  const totalConv = ca + cb;
  const confidence = totalConv > 3 ? Math.min(99, 50 + totalConv * 2.8 + Math.abs(lift) * 0.45) : 0;
  const isSignificant = confidence >= 95;
  const winner = rateB >= rateA ? 'B' : 'A';

  const launch = () => {
    setLaunched(true); setSimStep(0); setSimRunning(true); setConcluded(false); setTab('results');
  };

  const stTabBar = (
    <div style={{ display:'flex', gap:0, marginBottom:20, borderBottom:'2px solid #e8e8e8' }}>
      {([['create','⚗️ Create Test'],['results','📈 Results'],['history','📋 History']] as [typeof tab,string][]).map(([t,label]) => (
        <button key={t} onClick={()=>setTab(t)} style={{ border:'none', background:'none', cursor:'pointer', padding:'8px 16px', fontWeight:tab===t?700:400, color:tab===t?'var(--orange)':'var(--text-secondary)', borderBottom:tab===t?'2px solid var(--orange)':'2px solid transparent', marginBottom:'-2px', fontSize:'13.5px', transition:'all .15s' }}>
          {label}
        </button>
      ))}
    </div>
  );

  if (tab === 'create') return (
    <div>
      {stTabBar}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, marginBottom:20 }}>
        <div style={{ gridColumn:'1/-1' }}>
          <label style={labelStyle}>Test Name</label>
          <input value={testName} onChange={e=>setTestName(e.target.value)} style={inputStyle} />
        </div>

        <div style={{ background:'#f8faff', border:'1px solid #d0e4ff', borderRadius:8, padding:16 }}>
          <div style={{ fontWeight:700, fontSize:13, color:'var(--navy)', marginBottom:12 }}>🅐 Variant A — Control</div>
          <label style={labelStyle}>Headline</label>
          <input value={varA} onChange={e=>setVarA(e.target.value)} style={{ ...inputStyle, marginBottom:10 }} />
          <label style={labelStyle}>CTA Button Text</label>
          <input value={ctaA} onChange={e=>setCtaA(e.target.value)} style={inputStyle} />
          <div style={{ marginTop:12, padding:12, background:'white', borderRadius:6, border:'1px solid #e8e8e8', textAlign:'center' }}>
            <div style={{ fontWeight:700, fontSize:15, marginBottom:8, color:'#333' }}>{varA||'(Headline A)'}</div>
            <button style={{ background:'var(--navy)', color:'#fff', border:'none', borderRadius:6, padding:'8px 20px', fontWeight:600, fontSize:13, cursor:'default' }}>{ctaA||'CTA A'}</button>
          </div>
          <div style={{ fontSize:11, color:'var(--text-secondary)', marginTop:8, textAlign:'center' }}>50% of traffic</div>
        </div>

        <div style={{ background:'#fff8f3', border:'1px solid #fde5c5', borderRadius:8, padding:16 }}>
          <div style={{ fontWeight:700, fontSize:13, color:'var(--orange)', marginBottom:12 }}>🅑 Variant B — Challenger</div>
          <label style={labelStyle}>Headline</label>
          <input value={varB} onChange={e=>setVarB(e.target.value)} style={{ ...inputStyle, marginBottom:10 }} />
          <label style={labelStyle}>CTA Button Text</label>
          <input value={ctaB} onChange={e=>setCtaB(e.target.value)} style={inputStyle} />
          <div style={{ marginTop:12, padding:12, background:'white', borderRadius:6, border:'1px solid #e8e8e8', textAlign:'center' }}>
            <div style={{ fontWeight:700, fontSize:15, marginBottom:8, color:'#333' }}>{varB||'(Headline B)'}</div>
            <button style={{ background:'var(--orange)', color:'#fff', border:'none', borderRadius:6, padding:'8px 20px', fontWeight:600, fontSize:13, cursor:'default' }}>{ctaB||'CTA B'}</button>
          </div>
          <div style={{ fontSize:11, color:'var(--text-secondary)', marginTop:8, textAlign:'center' }}>50% of traffic</div>
        </div>
      </div>

      <div style={{ textAlign:'center' }}>
        <button onClick={launch} style={{ background:'var(--orange)', color:'#fff', border:'none', borderRadius:8, padding:'12px 32px', fontWeight:700, fontSize:15, cursor:'pointer' }}>
          🚀 Launch A/B Test
        </button>
        <div style={{ fontSize:12, color:'var(--text-secondary)', marginTop:8 }}>Real-time Bayesian statistical analysis starts immediately</div>
      </div>
    </div>
  );

  if (tab === 'results') return (
    <div>
      {stTabBar}
      {!launched ? (
        <div style={{ textAlign:'center', padding:'40px 0', color:'var(--text-secondary)' }}>
          <div style={{ fontSize:40, marginBottom:12 }}>📊</div>
          <div>No active test. <button onClick={()=>setTab('create')} style={{ background:'none', border:'none', color:'var(--orange)', cursor:'pointer', fontWeight:600, textDecoration:'underline' }}>Create one first.</button></div>
        </div>
      ) : (
        <>
          <div style={{ fontWeight:700, fontSize:14, marginBottom:4 }}>{testName}</div>
          <div style={{ fontSize:12, color:'var(--text-secondary)', marginBottom:16 }}>
            {simRunning ? '🔴 Live — collecting traffic...' : '⏸️ Simulation complete'}
            &nbsp;·&nbsp; Total visitors: {(va+vb).toLocaleString()}
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginBottom:20 }}>
            {[
              { label:'Variant A (Control)', visitors:va, conversions:ca, rate:rateA, col:'var(--navy)', bg:'#f8faff', bd:'#d0e4ff', hl:varA, cta:ctaA, win:winner==='A'&&isSignificant },
              { label:'Variant B (Challenger)', visitors:vb, conversions:cb, rate:rateB, col:'var(--orange)', bg:'#fff8f3', bd:'#fde5c5', hl:varB, cta:ctaB, win:winner==='B'&&isSignificant },
            ].map(v => (
              <div key={v.label} style={{ background:v.bg, border:`1px solid ${v.bd}`, borderRadius:8, padding:16, position:'relative' }}>
                {v.win && <div style={{ position:'absolute', top:-10, right:12, background:'#27ae60', color:'#fff', borderRadius:12, padding:'2px 10px', fontSize:11, fontWeight:700 }}>🏆 WINNER</div>}
                <div style={{ fontWeight:700, fontSize:13, color:v.col, marginBottom:8 }}>{v.label}</div>
                <div style={{ fontSize:12, color:'var(--text-secondary)', marginBottom:10, fontStyle:'italic', lineHeight:1.4 }}>"{v.hl}"</div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:10 }}>
                  <div style={{ background:'white', borderRadius:6, padding:'8px', textAlign:'center' }}>
                    <div style={{ fontSize:20, fontWeight:800, color:v.col }}>{v.visitors.toLocaleString()}</div>
                    <div style={{ fontSize:10, color:'var(--text-secondary)' }}>Visitors</div>
                  </div>
                  <div style={{ background:'white', borderRadius:6, padding:'8px', textAlign:'center' }}>
                    <div style={{ fontSize:20, fontWeight:800, color:v.col }}>{v.conversions}</div>
                    <div style={{ fontSize:10, color:'var(--text-secondary)' }}>Conversions</div>
                  </div>
                </div>
                <div style={{ textAlign:'center' }}>
                  <span style={{ fontSize:28, fontWeight:800, color:v.col }}>{v.rate.toFixed(1)}%</span>
                  <span style={{ fontSize:12, color:'var(--text-secondary)', marginLeft:4 }}>conv. rate</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background:'#f8f9fa', borderRadius:8, padding:16, marginBottom:16 }}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8, flexWrap:'wrap', gap:8 }}>
              <div style={{ fontWeight:600, fontSize:13 }}>Statistical Confidence</div>
              <div style={{ fontWeight:700, fontSize:13, color:isSignificant?'#27ae60':confidence>80?'#e67e22':'var(--text-secondary)' }}>
                {confidence.toFixed(0)}% {isSignificant && '✓ Significant'}
              </div>
            </div>
            <div style={{ height:10, background:'#e8e8e8', borderRadius:5, overflow:'hidden', marginBottom:8 }}>
              <div style={{ height:'100%', background:isSignificant?'#27ae60':confidence>80?'#e67e22':'var(--navy)', borderRadius:5, width:`${confidence}%`, transition:'width .3s' }} />
            </div>
            <div style={{ fontSize:12, color:'var(--text-secondary)' }}>
              {isSignificant
                ? `Variant ${winner} wins with ${lift>0?'+':''}${lift.toFixed(0)}% lift — safe to deploy.`
                : confidence>50 ? 'Collecting more data for higher confidence...'
                : 'Gathering initial traffic...'}
            </div>
            <div style={{ fontSize:11, color:'#aaa', marginTop:4 }}>Threshold: 95% Bayesian confidence for winner declaration</div>
          </div>

          {isSignificant && !concluded && (
            <div style={{ textAlign:'center' }}>
              <button onClick={()=>{ setConcluded(true); setSimRunning(false); }} style={{ background:'#27ae60', color:'#fff', border:'none', borderRadius:8, padding:'10px 24px', fontWeight:700, fontSize:14, cursor:'pointer' }}>
                🏁 Declare Winner & Archive Test
              </button>
            </div>
          )}
          {concluded && (
            <div style={{ background:'#e9f7ef', border:'1px solid #a9dfbf', borderRadius:8, padding:'14px 18px', textAlign:'center' }}>
              <div style={{ fontWeight:700, color:'#27ae60', fontSize:15, marginBottom:4 }}>✅ Test Concluded — Variant {winner} deployed</div>
              <div style={{ fontSize:12, color:'#555' }}>Results archived. <button onClick={()=>setTab('history')} style={{ background:'none', border:'none', color:'var(--orange)', cursor:'pointer', fontWeight:600, textDecoration:'underline' }}>View in history →</button></div>
            </div>
          )}
        </>
      )}
    </div>
  );

  return (
    <div>
      {stTabBar}
      <div style={{ marginBottom:14, display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ fontSize:13, color:'var(--text-secondary)' }}>{ST_HISTORY.length} concluded tests</div>
        <button onClick={()=>{ setLaunched(false); setSimStep(0); setConcluded(false); setTab('create'); }} style={{ background:'var(--navy)', color:'#fff', border:'none', borderRadius:6, padding:'6px 14px', cursor:'pointer', fontSize:13, fontWeight:600 }}>
          + New Test
        </button>
      </div>
      <div style={{ overflowX:'auto' }}>
        <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13 }}>
          <thead>
            <tr style={{ background:'#f8f9fa', borderBottom:'2px solid #e8e8e8' }}>
              {['Test Name','Winner','Lift','Confidence','Date'].map(h => (
                <th key={h} style={{ padding:'8px 12px', textAlign:'left', fontWeight:600, color:'var(--text-secondary)', fontSize:12 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ST_HISTORY.map((r,i) => (
              <tr key={i} style={{ borderBottom:'1px solid #f0f0f0' }}>
                <td style={{ padding:'8px 12px', fontWeight:500 }}>{r.name}</td>
                <td style={{ padding:'8px 12px', fontSize:12 }}>{r.winner}</td>
                <td style={{ padding:'8px 12px', fontWeight:700, color:r.lift.startsWith('+')?'#27ae60':'var(--text-secondary)' }}>{r.lift}</td>
                <td style={{ padding:'8px 12px', fontSize:12, fontWeight:600, color:'#27ae60' }}>{r.conf}</td>
                <td style={{ padding:'8px 12px', fontSize:12, color:'var(--text-secondary)' }}>{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ─── Main export ─── */
const demoMap: Record<string, React.ReactNode> = {
  'payroll-calc': <PayrollDemo />,
  'commission-calc': <CommissionDemo />,
  'email-sig-gen': <EmailSigDemo />,
  'time-tracker': <TimeTrackerDemo />,
  'contract-gen': <ContractGenDemo />,
  'form-builder': <FormBuilderDemo />,
  'job-description-gen': <JobDescriptionGenDemo />,
  'vendor-portal': <VendorPortalDemo />,
  'lead-magnet': <LeadMagnetDemo />,
  'workflow-automation': <WorkflowAutomationDemo />,
  'asset-tracker': <AssetTrackerDemo />,
  'split-test': <SplitTestDemo />,
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
