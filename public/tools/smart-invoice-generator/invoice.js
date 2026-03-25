/**
 * Smart Invoice Generator — Interactive Demo
 * Fully browser-based invoice creation tool
 */
(function() {
  'use strict';

  const CURRENCY_SYMBOLS = { USD: '$', EUR: '€', GBP: '£', CAD: 'C$', AUD: 'A$' };

  let lineItems = [
    { description: 'Website Design & Development', qty: 1, rate: 2500 },
    { description: 'Logo & Brand Identity Package', qty: 1, rate: 800 },
    { description: 'Monthly Hosting (12 months)', qty: 12, rate: 25 }
  ];

  // Set default dates
  function setDefaults() {
    const today = new Date();
    const due = new Date(today);
    due.setDate(due.getDate() + 30);
    document.getElementById('inv-date').value = formatDate(today);
    document.getElementById('inv-due').value = formatDate(due);
  }

  function formatDate(d) {
    return d.toISOString().split('T')[0];
  }

  function formatDisplayDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  function getCurrencySymbol() {
    const sel = document.getElementById('inv-currency');
    return CURRENCY_SYMBOLS[sel.value] || '$';
  }

  function formatMoney(amount) {
    return getCurrencySymbol() + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // ---- Line Items ----
  function renderLineItems() {
    const body = document.getElementById('line-items-body');
    body.innerHTML = lineItems.map((item, i) => `
      <div class="line-item-row" data-index="${i}">
        <input type="text" value="${escapeHtml(item.description)}" placeholder="Description" data-field="description">
        <input type="number" value="${item.qty}" min="0" step="1" data-field="qty">
        <input type="number" value="${item.rate}" min="0" step="0.01" data-field="rate">
        <span class="li-total-val">${formatMoney(item.qty * item.rate)}</span>
        <button type="button" class="btn-remove-line" title="Remove">&times;</button>
      </div>
    `).join('');

    // Attach events
    body.querySelectorAll('input').forEach(input => {
      input.addEventListener('input', function() {
        const row = this.closest('.line-item-row');
        const idx = parseInt(row.dataset.index);
        const field = this.dataset.field;
        if (field === 'description') {
          lineItems[idx].description = this.value;
        } else {
          lineItems[idx][field] = parseFloat(this.value) || 0;
        }
        // Update total in row
        const total = lineItems[idx].qty * lineItems[idx].rate;
        row.querySelector('.li-total-val').textContent = formatMoney(total);
      });
    });

    body.querySelectorAll('.btn-remove-line').forEach(btn => {
      btn.addEventListener('click', function() {
        const idx = parseInt(this.closest('.line-item-row').dataset.index);
        lineItems.splice(idx, 1);
        renderLineItems();
      });
    });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ---- Invoice Preview ----
  function generatePreview() {
    const bizName = document.getElementById('biz-name').value || 'Your Business';
    const bizEmail = document.getElementById('biz-email').value;
    const bizAddress = document.getElementById('biz-address').value;
    const clientName = document.getElementById('client-name').value || 'Client';
    const clientEmail = document.getElementById('client-email').value;
    const clientAddress = document.getElementById('client-address').value;
    const invNumber = document.getElementById('inv-number').value || 'INV-001';
    const invDate = document.getElementById('inv-date').value;
    const invDue = document.getElementById('inv-due').value;
    const taxRate = parseFloat(document.getElementById('inv-tax').value) || 0;
    const notes = document.getElementById('inv-notes').value;

    const subtotal = lineItems.reduce((sum, item) => sum + (item.qty * item.rate), 0);
    const tax = subtotal * (taxRate / 100);
    const total = subtotal + tax;

    const paper = document.getElementById('invoice-paper');
    paper.innerHTML = `
      <div class="inv-header">
        <div>
          <div class="inv-biz-name">${escapeHtml(bizName)}</div>
          <div class="inv-biz-details">
            ${bizEmail ? escapeHtml(bizEmail) + '<br>' : ''}
            ${bizAddress ? escapeHtml(bizAddress) : ''}
          </div>
        </div>
        <div class="inv-title">
          <h2>INVOICE</h2>
          <div class="inv-meta">
            <strong>${escapeHtml(invNumber)}</strong><br>
            Date: ${formatDisplayDate(invDate)}<br>
            Due: ${formatDisplayDate(invDue)}
          </div>
        </div>
      </div>

      <div class="inv-parties">
        <div class="inv-party">
          <label>From</label>
          <div class="inv-party-name">${escapeHtml(bizName)}</div>
          <div class="inv-party-details">
            ${bizEmail ? escapeHtml(bizEmail) + '<br>' : ''}
            ${bizAddress ? escapeHtml(bizAddress) : ''}
          </div>
        </div>
        <div class="inv-party">
          <label>Bill To</label>
          <div class="inv-party-name">${escapeHtml(clientName)}</div>
          <div class="inv-party-details">
            ${clientEmail ? escapeHtml(clientEmail) + '<br>' : ''}
            ${clientAddress ? escapeHtml(clientAddress) : ''}
          </div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          ${lineItems.map(item => `
            <tr>
              <td>${escapeHtml(item.description)}</td>
              <td style="text-align:right">${item.qty}</td>
              <td style="text-align:right">${formatMoney(item.rate)}</td>
              <td style="text-align:right">${formatMoney(item.qty * item.rate)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <div class="inv-totals">
        <div class="inv-totals-table">
          <div class="inv-totals-row">
            <span>Subtotal</span>
            <span>${formatMoney(subtotal)}</span>
          </div>
          <div class="inv-totals-row">
            <span>Tax (${taxRate}%)</span>
            <span>${formatMoney(tax)}</span>
          </div>
          <div class="inv-totals-row total">
            <span>Total Due</span>
            <span>${formatMoney(total)}</span>
          </div>
        </div>
      </div>

      ${notes ? `
        <div class="inv-notes">
          <strong>Notes</strong><br>
          ${escapeHtml(notes)}
        </div>
      ` : ''}
    `;

    // Show preview, hide form
    document.querySelector('.invoice-form-panel').style.display = 'none';
    document.getElementById('invoice-preview').style.display = 'block';
  }

  // ---- PDF Download (using print) ----
  function downloadPDF() {
    // Ensure preview is rendered
    if (document.getElementById('invoice-preview').style.display === 'none') {
      generatePreview();
    }

    const printContents = document.getElementById('invoice-paper').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Invoice</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: 'Inter', sans-serif; padding: 40px; color: #1a1a2e; line-height: 1.6; font-size: 14px; }
          .inv-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; padding-bottom: 24px; border-bottom: 2px solid #4f46e5; }
          .inv-biz-name { font-size: 22px; font-weight: 800; color: #4f46e5; }
          .inv-biz-details { font-size: 12px; color: #555; margin-top: 4px; }
          .inv-title { text-align: right; }
          .inv-title h2 { font-size: 28px; font-weight: 800; margin-bottom: 4px; }
          .inv-meta { font-size: 12px; color: #555; }
          .inv-parties { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-bottom: 36px; }
          .inv-party label { display: block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #888; margin-bottom: 6px; }
          .inv-party-name { font-weight: 700; font-size: 15px; }
          .inv-party-details { font-size: 12px; color: #555; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          thead th { padding: 10px 12px; text-align: left; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #888; border-bottom: 2px solid rgba(0,0,0,0.08); }
          thead th:last-child, thead th:nth-child(2), thead th:nth-child(3) { text-align: right; }
          tbody td { padding: 12px; border-bottom: 1px solid rgba(0,0,0,0.04); }
          tbody td:last-child, tbody td:nth-child(2), tbody td:nth-child(3) { text-align: right; }
          .inv-totals { display: flex; justify-content: flex-end; margin-bottom: 36px; }
          .inv-totals-table { width: 260px; }
          .inv-totals-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 13px; }
          .inv-totals-row.total { font-weight: 800; font-size: 16px; border-top: 2px solid #4f46e5; padding-top: 10px; margin-top: 4px; }
          .inv-notes { padding-top: 24px; border-top: 1px solid rgba(0,0,0,0.06); font-size: 12px; color: #555; }
          .inv-notes strong { color: #1a1a2e; }
          @media print { body { padding: 20px; } }
        </style>
      </head>
      <body>${printContents}</body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  }

  // ---- Save/Load Template ----
  function saveTemplate() {
    const template = {
      bizName: document.getElementById('biz-name').value,
      bizEmail: document.getElementById('biz-email').value,
      bizAddress: document.getElementById('biz-address').value,
      currency: document.getElementById('inv-currency').value,
      taxRate: document.getElementById('inv-tax').value,
      notes: document.getElementById('inv-notes').value,
      lineItems: lineItems
    };
    localStorage.setItem('automatehub_invoice_template', JSON.stringify(template));
    // Show toast
    if (window.showToast) {
      window.showToast('Template saved! It will be pre-filled next time.');
    } else {
      alert('Template saved!');
    }
  }

  function loadTemplate() {
    const saved = localStorage.getItem('automatehub_invoice_template');
    if (!saved) return;
    try {
      const t = JSON.parse(saved);
      if (t.bizName) document.getElementById('biz-name').value = t.bizName;
      if (t.bizEmail) document.getElementById('biz-email').value = t.bizEmail;
      if (t.bizAddress) document.getElementById('biz-address').value = t.bizAddress;
      if (t.currency) document.getElementById('inv-currency').value = t.currency;
      if (t.taxRate) document.getElementById('inv-tax').value = t.taxRate;
      if (t.notes) document.getElementById('inv-notes').value = t.notes;
      if (t.lineItems && t.lineItems.length) lineItems = t.lineItems;
    } catch (e) {
      // Ignore invalid saved data
    }
  }

  // Expose showToast globally for cross-script use
  window.showToast = window.showToast || function(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => toast.classList.remove('show'), 4000);
  };

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', function() {
    setDefaults();
    loadTemplate();
    renderLineItems();

    document.getElementById('btn-add-line').addEventListener('click', function() {
      lineItems.push({ description: '', qty: 1, rate: 0 });
      renderLineItems();
    });

    document.getElementById('btn-preview').addEventListener('click', generatePreview);
    document.getElementById('btn-download').addEventListener('click', downloadPDF);
    document.getElementById('btn-download-2').addEventListener('click', downloadPDF);
    document.getElementById('btn-save-template').addEventListener('click', saveTemplate);

    document.getElementById('btn-back-edit').addEventListener('click', function() {
      document.querySelector('.invoice-form-panel').style.display = 'block';
      document.getElementById('invoice-preview').style.display = 'none';
    });

    // Re-render line items when currency changes
    document.getElementById('inv-currency').addEventListener('change', renderLineItems);
  });
})();
