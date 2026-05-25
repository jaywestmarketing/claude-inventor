export const content = `
<div class="doc-lead">
  <p>
    CommissionCalc is a free commission calculator and sales commission tracker that
    eliminates the spreadsheet chaos of manual commission management. Sales teams spend
    significant time each month reconciling closed deals against commission plan rules,
    recalculating tier thresholds, and resolving disputes between reps and finance over
    payout amounts. CommissionCalc replaces that process with a purpose-built commission
    management software workflow: define your plan rules once, enter or sync your closed
    deals, and every rep's commission is calculated automatically in real time. Reps see
    their earnings and quota attainment on a personal dashboard. Managers see team-wide
    commission liability before it hits payroll. Finance exports a clean CSV for the
    payroll system with no manual math required. Whether your plan is a simple flat rate
    or a multi-tier structure with overrides and clawbacks, CommissionCalc handles it.
  </p>
</div>

<h2>Getting Started with CommissionCalc</h2>
<ol class="doc-steps">
  <li>
    <strong>Set up your commission plan.</strong> Define the structure — flat rate, tiered,
    split, or override — along with rate percentages, tier thresholds, and any accelerators
    that kick in above quota. You can create multiple plans for different rep roles (for
    example, Account Executives on a tiered plan, SDRs on a flat per-meeting rate).
  </li>
  <li>
    <strong>Add your sales reps.</strong> Invite reps by email and assign each one a
    commission plan, a quota amount, and a quota period (monthly, quarterly, or annual).
    Reps receive login access to their personal dashboard immediately upon being added.
  </li>
  <li>
    <strong>Connect or enter closed deals.</strong> Import closed deals from a CRM export
    CSV or enter them manually. Each deal record includes the rep name, deal value, close
    date, and product line. CommissionCalc applies the correct plan rules to each deal
    as soon as it is entered, updating running totals in real time.
  </li>
  <li>
    <strong>Review commission calculations.</strong> The manager view shows each rep's
    deals, calculated commissions, quota attainment percentage, and any clawback
    adjustments for the period. Drill into any deal to see exactly how the commission
    was calculated — which tier applied, whether an accelerator was triggered, and
    how any splits were allocated.
  </li>
  <li>
    <strong>Generate statements and export to payroll.</strong> At the end of the pay
    period, generate a commission statement PDF for each rep showing deal-level detail
    and a period total. Export the full team's payable commissions as a CSV for upload
    to your payroll system or accounting software.
  </li>
</ol>

<h2>Core Features</h2>

<h3>Commission Rule Builder</h3>
<p>
  The rule builder supports four commission structures. Flat rate applies a single
  percentage to every deal regardless of size. Tiered applies different rates at
  different revenue thresholds — for example, 8% on deals up to $10,000 and 12% on
  deal value above $10,000. Split commissions divide the payout between two or more
  reps based on configurable percentages, handling co-sell scenarios and SDR/AE splits
  cleanly. Override structures apply a different rate to the entire period's revenue
  once a rep crosses a threshold, replacing the base rate rather than adding to it.
  Rules are saved as named plans and assigned to reps individually, so different roles
  can run on different structures simultaneously.
</p>

<h3>Real-Time Commission Calculation</h3>
<p>
  Every deal entered into CommissionCalc is calculated against the assigned rep's
  commission plan immediately. Running period totals update the moment a new deal
  is saved. There is no end-of-month batch calculation step and no waiting for finance
  to run the numbers. Reps can check their current earnings at any point in the period,
  which reduces the volume of "how much have I made so far?" questions to managers and
  surfaces any data entry errors early enough to correct before payout.
</p>

<h3>Rep-Level Commission Dashboard</h3>
<p>
  Each sales rep has a personal dashboard showing their closed deals for the period,
  commission earned per deal, running period total, year-to-date earnings, and the
  current value of their open pipeline. The pipeline value column is informational —
  it shows potential commission from deals not yet closed — giving reps visibility into
  what they stand to earn if open opportunities close before the period ends. The
  dashboard is accessible on mobile so reps can check their numbers from anywhere.
</p>

<h3>Manager View with Team Leaderboard and Commission Liability</h3>
<p>
  The manager dashboard aggregates all rep data into a single view. The leaderboard
  ranks reps by period revenue, commission earned, and quota attainment percentage.
  The commission liability summary shows the total commission payable for the current
  period, broken down by rep, so managers and finance can anticipate the payroll impact
  before the period closes. Managers can drill into any rep's deal list directly from
  the team view without switching between screens.
</p>

<h3>Clawback and Adjustment Tracking</h3>
<p>
  When a deal is refunded, canceled, or partially credited after the commission has
  already been paid or accrued, enter the adjustment in CommissionCalc with the original
  deal reference and the clawback amount or percentage. The system records the adjustment
  against the rep's account and nets it against future period payouts or flags it for
  immediate recovery depending on your clawback policy setting. Every adjustment carries
  a reason code and notes field, creating an audit trail that resolves disputes quickly
  and documents your policy enforcement for compliance purposes.
</p>

<h3>Quota Attainment Tracking</h3>
<p>
  Each rep's quota is defined at setup and tracked against closed deal revenue in real
  time. The attainment display shows a percentage-to-plan figure alongside a progress
  bar so the current standing is immediately readable at a glance. When a rep crosses
  100% of quota, any accelerator tiers defined in their plan activate automatically
  and the higher rate applies to subsequent deals in the same period. Attainment resets
  at the start of each new quota period and historical attainment by period is retained
  for performance review conversations.
</p>

<h3>Commission Statement Generation</h3>
<p>
  At any point in or at the end of a period, generate a commission statement PDF for
  any rep. The statement lists every deal in the period with close date, deal name,
  deal value, commission rate applied, and commission earned per deal. A summary section
  shows period total, any clawback adjustments, net payable commission, and the plan
  name and tier structure that was in effect. Statements can be emailed to reps directly
  from CommissionCalc with one click. Providing reps with a transparent, deal-level
  breakdown before payroll runs eliminates the most common source of commission disputes.
</p>

<h3>Export to Payroll</h3>
<p>
  The payroll export produces a CSV with one row per rep showing rep name, employee ID
  (if configured), period dates, gross commission earned, clawback adjustments, and net
  payable amount. The column headers are configurable to match the import format required
  by your payroll provider. Export the file at the end of each pay period and upload it
  directly to your payroll system with no manual data entry. A separate detailed export
  includes deal-level line items for accounting system integration and audit support.
</p>

<h2>Common Use Cases</h2>

<h3>SaaS Sales Team with MRR-Based Commissions</h3>
<p>
  SaaS companies often commission on monthly recurring revenue, which introduces complexity
  because deal value varies by contract length, and multi-year deals may be commissionable
  on year-one MRR only. CommissionCalc handles MRR-based plans by letting you define the
  commissionable base — total contract value, year-one ACV, or MRR — per plan. When an
  AE closes a two-year deal at $2,000 per month, you configure whether the commission
  is calculated on $24,000 (year one) or $48,000 (full TCV). Tiered structures that
  accelerate above 100% of MRR quota are common in SaaS, and CommissionCalc applies
  accelerators automatically the moment the rep crosses their threshold mid-period.
</p>

<h3>Agency with Project-Based Commissions</h3>
<p>
  Creative and consulting agencies often pay account managers or business development
  reps a commission on new project revenue, which does not fit neatly into a pipeline
  CRM. CommissionCalc works as a standalone commission ledger: enter each signed project
  as a deal, assign it to the responsible rep, and apply the flat or split commission
  rate. Agencies with multiple service lines can create separate commission plans per
  service type — for example, a higher rate on strategy engagements than on production
  work — and assign the correct plan to each deal at entry. The monthly payroll export
  feeds directly into accounting without requiring the agency to maintain a separate
  tracking spreadsheet.
</p>

<h3>Sales Manager Forecasting Commission Liability</h3>
<p>
  Finance teams and sales managers need to forecast commission expense before the period
  closes so they can plan cash flow and flag budget variances early. CommissionCalc's
  manager dashboard shows total accrued commission liability for the current period in
  real time, updated with every new deal entry. The pipeline value column on each rep
  dashboard rolls up to a team-level projected commission figure based on open deal
  values, giving managers a best-case and conservative estimate of end-of-period liability.
  This forecast replaces the manual spreadsheet model that most sales managers rebuild
  from scratch each month and makes the finance team's expense accrual process faster
  and more accurate.
</p>

<div class="doc-tip">
  <strong>Tip:</strong> Build your commission plan in CommissionCalc before the period
  starts and run a few sample deals through it before any real closes are logged.
  Verify that the tier thresholds, accelerator triggers, and split allocations produce
  the numbers you expect on paper. Catching a plan configuration error at the start
  of a period is far less disruptive than discovering it on payout day when reps are
  comparing their statements to their own spreadsheets.
</div>

<h2>Frequently Asked Questions</h2>

<div class="faq-item">
  <h3>How do I set up a tiered commission structure?</h3>
  <p>
    Go to Plans → New Commission Plan and select Tiered as the structure type. Add
    tiers by clicking Add Tier and defining the revenue range and the commission rate
    that applies within that range. For example: Tier 1 applies 8% on deal value from
    $0 to $10,000; Tier 2 applies 12% on deal value from $10,001 to $25,000; Tier 3
    applies 15% on deal value above $25,000. You can configure tiers to be marginal
    (each rate applies only to the portion of the deal within that band) or cumulative
    (the highest applicable rate applies to the full deal value). Save the plan and assign
    it to the relevant reps. CommissionCalc applies tier logic automatically to every deal
    entered for reps on that plan.
  </p>
</div>

<div class="faq-item">
  <h3>How do clawbacks work when a deal is refunded?</h3>
  <p>
    Open the original deal record and click Add Adjustment. Enter the refund amount,
    select Clawback as the adjustment type, add a reason (customer refund, contract
    cancellation, partial credit, etc.), and save. CommissionCalc calculates the commission
    amount to be clawed back based on the original commission rate applied to the refunded
    portion. The adjustment is recorded against the rep's account and appears as a line
    item on their next commission statement. Depending on your clawback policy setting,
    the amount is either deducted from the current period's net payable commission or
    carried forward as a deduction in the following period. All clawback records are
    retained permanently in the audit log.
  </p>
</div>

<div class="faq-item">
  <h3>How does quota attainment tracking work?</h3>
  <p>
    When you add a rep or edit their profile, set their quota amount and quota period
    (monthly, quarterly, or annual). CommissionCalc sums all closed deal revenue assigned
    to that rep within the current quota period and divides it by their quota to produce
    an attainment percentage. This figure is displayed on the rep's dashboard and in the
    manager team view in real time. If you have configured accelerator tiers in the rep's
    commission plan, CommissionCalc automatically switches to the accelerated rate the
    moment attainment crosses 100%. Quota attainment history is stored by period and
    accessible from the rep's profile for performance review use.
  </p>
</div>

<div class="faq-item">
  <h3>How do I generate a commission statement for a rep?</h3>
  <p>
    From the manager dashboard, click on any rep's name to open their detail view, then
    click Generate Statement. Select the period — current period, prior period, or a
    custom date range — and click Generate PDF. The statement is rendered immediately
    in the browser and can be downloaded as a PDF or emailed to the rep directly from
    CommissionCalc using the Send to Rep button. The statement includes the rep's name,
    the commission plan name and period dates, a deal-by-deal breakdown with close dates
    and commission amounts, any clawback adjustments, and the net payable total. Reps
    with direct dashboard access can also generate their own statements from their
    personal view at any time.
  </p>
</div>

<div class="faq-item">
  <h3>Can I run multiple commission plans for different rep roles?</h3>
  <p>
    Yes. CommissionCalc supports an unlimited number of named commission plans, and each
    rep is assigned to exactly one active plan at a time. You might run a tiered plan
    for Account Executives, a flat per-meeting rate plan for SDRs, a split-commission
    plan for channel partners, and a manager override plan for sales leadership — all
    simultaneously. Plans are assigned at the rep level, not the team level, so individual
    exceptions (a senior AE on a custom accelerator structure, for example) are handled
    without creating a new plan for the entire team. Changing a rep's plan mid-period is
    supported; CommissionCalc applies the old plan to deals closed before the change date
    and the new plan to deals closed after it.
  </p>
</div>
`;
