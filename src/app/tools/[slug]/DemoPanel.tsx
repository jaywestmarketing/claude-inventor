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

/* ─── Main export ─── */
const demoMap: Record<string, React.ReactNode> = {
  'payroll-calc': <PayrollDemo />,
  'commission-calc': <CommissionDemo />,
  'email-sig-gen': <EmailSigDemo />,
  'time-tracker': <TimeTrackerDemo />,
  'contract-gen': <ContractGenDemo />,
  'form-builder': <FormBuilderDemo />,
  'job-description-gen': <JobDescriptionGenDemo />,
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
