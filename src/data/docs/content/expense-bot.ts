export const content = `
<div class="doc-lead">
  <p>
    ExpenseBot is free expense reporting software that automates the entire expense management
    workflow for small and mid-size businesses. Instead of chasing paper receipts and manually
    entering line items into spreadsheets, your team scans receipts with their phone and
    ExpenseBot handles the rest — extracting data, categorizing the expense, checking it against
    your policy, routing it for approval, and posting it to your accounting system. Automated
    expense reports eliminate the back-and-forth between employees and finance teams, cutting
    reimbursement cycles from weeks to days. ExpenseBot is built specifically for expense
    management for small business: no per-seat minimums, no implementation consultants, and no
    annual contracts. Whether you have a two-person team or a fifty-person field crew, you can
    be up and running in under ten minutes.
  </p>
</div>

<h2>Getting Started with ExpenseBot</h2>
<ol class="doc-steps">
  <li>
    <strong>Set up your expense policy.</strong> Define reimbursable categories, per diem
    limits, meal caps, and any category restrictions specific to your business. ExpenseBot
    will automatically flag submissions that fall outside these rules before they reach
    your manager queue.
  </li>
  <li>
    <strong>Add team members.</strong> Invite employees by email address and assign each
    person an approver. You can organize people by department so approval workflows route
    to the right manager automatically.
  </li>
  <li>
    <strong>Scan your first receipt.</strong> Open ExpenseBot on any device, tap Scan
    Receipt, and point your camera at a receipt. The AI extracts the merchant name, amount,
    date, and suggested category within seconds. Review the pre-filled fields, adjust if
    needed, and save.
  </li>
  <li>
    <strong>Submit for approval.</strong> Group one or more expenses into a report and
    submit. Your designated approver receives an email with a one-click approve or reject
    link — no login required on their end.
  </li>
  <li>
    <strong>Export to your accounting software.</strong> Once approved, export the report
    directly to QuickBooks, Xero, or a CSV file. All line items, categories, and receipt
    images transfer in a single action.
  </li>
</ol>

<h2>Core Features</h2>

<h3>AI Receipt Scanning and Data Extraction</h3>
<p>
  Point your phone camera at any receipt — paper, printed, or digital — and ExpenseBot's
  AI reads the merchant name, transaction amount, date, and payment method automatically.
  Handwritten receipts and low-quality images are handled with OCR fallback. The extracted
  data pre-fills the expense form so employees spend seconds, not minutes, logging each
  purchase. Receipts are stored as images attached to each line item, giving your auditor
  a complete paper trail without filing cabinets.
</p>

<h3>Automatic Expense Categorization</h3>
<p>
  Every expense is assigned a category — travel, meals, office supplies, software
  subscriptions, client entertainment, utilities, and more — based on the merchant type
  and purchase amount. Category assignments are editable, and the model learns from
  corrections over time. Consistent categorization means your Chart of Accounts stays
  clean and your month-end close requires far less manual reclassification.
</p>

<h3>Policy Compliance Auto-Checks</h3>
<p>
  Before an expense ever reaches a manager, ExpenseBot checks it against the rules you
  configured: per diem limits, category spending caps, weekend restrictions, and required
  receipt thresholds. Out-of-policy items are flagged in yellow with a plain-language
  explanation so the employee can correct the submission or attach a justification note.
  This removes the uncomfortable conversation between manager and employee and keeps your
  policy enforceable at scale.
</p>

<h3>One-Click Approval Workflows</h3>
<p>
  Submitted expense reports trigger an email to the assigned approver that includes a full
  line-item summary, attached receipt images, and policy flag callouts. Approvers click
  Approve or Request Changes directly from the email — no account login required. Approved
  reports automatically move to the export queue. Multi-level approval chains (employee →
  manager → finance) are supported for larger organizations.
</p>

<h3>Corporate Card Reconciliation</h3>
<p>
  Import your company credit card or bank statement as a CSV and ExpenseBot matches each
  transaction to the corresponding submitted expense. Unmatched transactions surface in a
  reconciliation queue so your finance team can chase missing receipts before month-end
  close rather than after. Matched items are marked reconciled and excluded from future
  review cycles, saving hours of manual matching work each month.
</p>

<h3>Mileage Tracking with IRS Rate Auto-Application</h3>
<p>
  Log a business drive by entering origin, destination, and purpose. ExpenseBot calculates
  the distance and multiplies it by the current IRS standard mileage rate, which is updated
  automatically each calendar year. The mileage log is stored separately from receipt-based
  expenses and exports in the format required by most accounting systems. Employees can also
  use the running odometer input if they prefer to record exact mileage from their vehicle.
</p>

<h3>Per Diem Calculator</h3>
<p>
  Enter a destination city and travel dates and ExpenseBot returns the applicable GSA per
  diem rate for meals and incidentals, prorated for departure and return days. International
  travel uses State Department DSSR rates. The calculator supports both company-set flat
  rates and government rate tables, and the result is pre-filled into a per diem expense
  line item with no manual lookup required.
</p>

<h3>Export to Accounting Software</h3>
<p>
  Approved expense reports export to QuickBooks Online, Xero, or a formatted CSV with a
  single click. Each line item carries the expense category, GL code mapping, employee
  name, receipt image link, approval date, and project code if assigned. The CSV format
  matches the import templates for the most common accounting platforms, so no custom
  field mapping is required on your first export.
</p>

<h2>Common Use Cases</h2>

<h3>Sales Team Travel Expenses</h3>
<p>
  Sales reps on the road accumulate hotel bills, client dinners, rideshare receipts, and
  airfare in rapid succession. With ExpenseBot, reps scan each receipt immediately after
  the transaction using their phone and the expense is logged in under thirty seconds.
  At the end of a trip, the report is already assembled — they simply review, attach any
  missing items, and submit. Managers approve the full trip report from a single email.
  Finance reconciles the corporate card statement against the submitted report and exports
  to QuickBooks before the card statement closes. Sales reps get reimbursed faster, and
  finance spends less time chasing documentation.
</p>

<h3>Construction and Field Services</h3>
<p>
  Field crews purchase lumber, hardware, fuel, and equipment parts throughout the day,
  often from cash registers that produce low-quality receipts. ExpenseBot's OCR handles
  faded thermal receipts and handwritten totals. Foremen assign each expense to a job
  code or project number so job costing reports reflect actual field spend. Mileage
  tracking covers the high volume of job-site-to-job-site driving that construction crews
  log daily. At billing time, the finance team pulls a per-project expense summary that
  feeds directly into client invoices and payroll.
</p>

<h3>Remote Team Reimbursements</h3>
<p>
  Remote employees purchase home office equipment, coworking memberships, and software
  subscriptions using personal cards and expect timely reimbursement. ExpenseBot gives
  remote workers a consistent submission process regardless of their location or time zone.
  Approvers review and approve from wherever they are. The finance team exports a batch
  reimbursement CSV at the end of each pay period, uploads it to their payroll provider,
  and employees receive reimbursement alongside their regular paycheck. No paper forms,
  no PDF attachments, no email threads.
</p>

<div class="doc-tip">
  <strong>Tip:</strong> Set your expense policy limits before inviting team members. Employees
  who submit their first expense against a configured policy learn the rules immediately
  through real-time flag feedback, which dramatically reduces policy-violation resubmissions
  in subsequent months. Spend ten minutes on policy setup upfront and save hours of
  back-and-forth later.
</div>

<h2>Frequently Asked Questions</h2>

<div class="faq-item">
  <h3>How accurate is the AI receipt scanning?</h3>
  <p>
    ExpenseBot's receipt scanner correctly extracts merchant name, amount, and date from
    the large majority of standard retail and restaurant receipts. Accuracy is highest on
    printed point-of-sale receipts and emailed PDF receipts. Handwritten receipts and
    heavily crumpled paper receipts may require a manual correction to one or two fields.
    Every extracted field is editable before submission, and the model improves from
    corrections made by your team over time. For any receipt where confidence is low,
    ExpenseBot highlights the uncertain field in orange so the employee knows to verify
    it before submitting.
  </p>
</div>

<div class="faq-item">
  <h3>How do I set expense policy rules and limits?</h3>
  <p>
    Go to Settings → Expense Policy. From there you can set per-transaction limits by
    category (for example, meals capped at $75 per person), daily per diem rates for
    domestic and international travel, required receipt thresholds (commonly set at $25),
    and blocked categories such as personal care or entertainment without prior approval.
    You can also configure weekend and holiday restrictions if your business does not
    reimburse non-business-day travel by default. Policy changes apply to new submissions
    immediately and do not affect already-approved reports.
  </p>
</div>

<div class="faq-item">
  <h3>How does corporate card reconciliation work?</h3>
  <p>
    Download a transaction export from your bank or card provider in CSV format and upload
    it to ExpenseBot under Finance → Reconciliation. ExpenseBot attempts to match each
    bank transaction to a submitted expense using amount, date, and merchant name. Exact
    matches are marked reconciled automatically. Near-matches (same amount, one-day date
    variance) are surfaced for manual confirmation. Transactions with no matching expense
    are flagged as unreconciled so you can request the missing submission from the employee
    directly within the app. The reconciliation report exports as a CSV or PDF for your
    auditor.
  </p>
</div>

<div class="faq-item">
  <h3>How does mileage tracking work?</h3>
  <p>
    To log a mileage expense, select New Expense → Mileage, then enter your starting
    address, destination address, and the business purpose of the trip. ExpenseBot
    calculates the round-trip or one-way distance and multiplies it by the current IRS
    standard mileage rate. The rate is updated at the start of each calendar year and
    mid-year if the IRS issues an adjustment. If your company uses a custom reimbursement
    rate instead of the IRS rate, you can override the default in Settings → Expense Policy
    → Mileage Rate. All mileage logs are exportable as a separate mileage report in
    addition to appearing in standard expense reports.
  </p>
</div>

<div class="faq-item">
  <h3>How do I export expense data to QuickBooks?</h3>
  <p>
    Open any approved expense report and click Export → QuickBooks Online. If you have
    connected your QuickBooks account under Settings → Integrations, the expenses are
    pushed directly as expense transactions with the GL account mapping you configured.
    If you have not connected QuickBooks, the export produces a formatted IIF or CSV file
    that you can import manually through QuickBooks Desktop or Online. Category-to-GL
    mappings are configured once in Settings and applied to all future exports automatically.
    Xero users follow the same flow under Export → Xero.
  </p>
</div>
`;
