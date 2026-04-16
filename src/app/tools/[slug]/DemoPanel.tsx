'use client';

import { useState } from 'react';

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

/* ─── Inventory Tracker ─── */
function InventoryDemo() {
  const initialItems = [
    { id: 1, sku: 'SKU-001', name: 'Blue Widget', qty: 45, reorderPoint: 20, unitCost: 12.5, location: 'Warehouse A' },
    { id: 2, sku: 'SKU-002', name: 'Red Gadget', qty: 8, reorderPoint: 15, unitCost: 24.99, location: 'Warehouse A' },
    { id: 3, sku: 'SKU-003', name: 'Green Doohickey', qty: 2, reorderPoint: 10, unitCost: 8.75, location: 'Warehouse B' },
    { id: 4, sku: 'SKU-004', name: 'Yellow Widget', qty: 120, reorderPoint: 30, unitCost: 6.25, location: 'Warehouse B' },
    { id: 5, sku: 'SKU-005', name: 'Purple Component', qty: 15, reorderPoint: 25, unitCost: 18.0, location: 'Warehouse A' },
  ];

  const [items, setItems] = useState(initialItems);
  const [newName, setNewName] = useState('');
  const [newQty, setNewQty] = useState('0');
  const [newCost, setNewCost] = useState('0');
  const [added, setAdded] = useState(false);

  const lowStock = items.filter(i => i.qty <= i.reorderPoint);
  const totalValue = items.reduce((sum, i) => sum + i.qty * i.unitCost, 0);
  const totalUnits = items.reduce((sum, i) => sum + i.qty, 0);

  const fmt = (n: number) =>
    n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const handleAdd = () => {
    if (!newName.trim()) return;
    const next = items.length + 1;
    setItems([
      ...items,
      {
        id: next,
        sku: `SKU-00${next}`,
        name: newName,
        qty: parseInt(newQty) || 0,
        reorderPoint: 10,
        unitCost: parseFloat(newCost) || 0,
        location: 'Warehouse A',
      },
    ]);
    setNewName('');
    setNewQty('0');
    setNewCost('0');
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      {/* Summary stats */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '10px',
          marginBottom: '18px',
        }}
      >
        {[
          { label: 'Total SKUs', value: String(items.length), color: 'var(--navy)' },
          { label: 'Total Units', value: totalUnits.toLocaleString(), color: 'var(--navy)' },
          { label: 'Inventory Value', value: `$${fmt(totalValue)}`, color: 'var(--green)' },
          { label: 'Low-Stock Alerts', value: String(lowStock.length), color: lowStock.length > 0 ? '#c0392b' : 'var(--green)' },
        ].map((s, i) => (
          <div key={i} style={resultCard}>
            <div style={resultLabel}>{s.label}</div>
            <div style={{ ...resultValue, color: s.color, fontSize: '18px' }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Low stock alerts banner */}
      {lowStock.length > 0 && (
        <div
          style={{
            background: '#fff3cd',
            border: '1px solid #f0c040',
            borderRadius: '8px',
            padding: '10px 16px',
            marginBottom: '16px',
            fontSize: '13px',
          }}
        >
          <strong style={{ color: '#856404' }}>⚠ Low-stock alert — reorder needed:</strong>{' '}
          {lowStock.map((i, idx) => (
            <span key={i.id}>
              <span
                style={{
                  background: '#fff8dc',
                  borderRadius: '4px',
                  padding: '1px 8px',
                  marginLeft: '4px',
                }}
              >
                {i.name} ({i.qty} left)
              </span>
              {idx < lowStock.length - 1 ? '' : ''}
            </span>
          ))}
        </div>
      )}

      {/* Inventory table */}
      <div style={{ overflowX: 'auto', marginBottom: '20px', borderRadius: '8px', border: '1px solid var(--border)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
          <thead>
            <tr style={{ background: 'var(--navy)', color: '#fff' }}>
              {['SKU', 'Item', 'Qty', 'Reorder At', 'Unit Cost', 'Value', 'Status'].map(h => (
                <th
                  key={h}
                  style={{ padding: '9px 12px', textAlign: 'left', fontWeight: 700, whiteSpace: 'nowrap' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => {
              const isLow = item.qty <= item.reorderPoint;
              return (
                <tr
                  key={item.id}
                  style={{
                    background: idx % 2 === 0 ? '#fff' : '#f8f9fa',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', fontSize: '11px', color: 'var(--text-secondary)' }}>
                    {item.sku}
                  </td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>{item.name}</td>
                  <td
                    style={{
                      padding: '8px 12px',
                      color: isLow ? '#c0392b' : 'var(--text-primary)',
                      fontWeight: isLow ? 700 : 400,
                    }}
                  >
                    {item.qty}
                  </td>
                  <td style={{ padding: '8px 12px', color: 'var(--text-secondary)' }}>{item.reorderPoint}</td>
                  <td style={{ padding: '8px 12px' }}>${fmt(item.unitCost)}</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>${fmt(item.qty * item.unitCost)}</td>
                  <td style={{ padding: '8px 12px' }}>
                    <span
                      style={{
                        background: isLow ? '#fee2e2' : '#dcfce7',
                        color: isLow ? '#dc2626' : '#16a34a',
                        borderRadius: '12px',
                        padding: '2px 10px',
                        fontSize: '11px',
                        fontWeight: 700,
                      }}
                    >
                      {isLow ? 'LOW STOCK' : 'OK'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Add item form */}
      <div style={{ border: '1px solid var(--border)', borderRadius: '8px', padding: '16px' }}>
        <div style={{ ...labelStyle, display: 'block', fontSize: '13px', marginBottom: '12px' }}>
          Add New Item
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '10px',
            marginBottom: '12px',
          }}
        >
          <div>
            <label style={labelStyle}>Item Name</label>
            <input
              type="text"
              value={newName}
              onChange={e => setNewName(e.target.value)}
              placeholder="My Product"
              style={{ ...inputStyle, boxSizing: 'border-box' as const }}
            />
          </div>
          <div>
            <label style={labelStyle}>Qty on Hand</label>
            <input
              type="number"
              value={newQty}
              min="0"
              onChange={e => setNewQty(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Unit Cost ($)</label>
            <input
              type="number"
              value={newCost}
              min="0"
              step="0.01"
              onChange={e => setNewCost(e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>
        <button
          onClick={handleAdd}
          style={{
            background: 'linear-gradient(to bottom, #f5c26b, #e47911)',
            border: '1px solid #c07600',
            color: '#111',
            fontWeight: 700,
            padding: '9px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          {added ? '✓ Item Added!' : '+ Add to Inventory'}
        </button>
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
  'inventory-tracker': <InventoryDemo />,
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
