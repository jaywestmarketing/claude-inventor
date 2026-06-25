export const content = `
<div class="doc-lead">
  <p>
    PTOTracker is free PTO tracking software for small business that replaces the email
    threads, shared spreadsheets, and guesswork that HR managers and small business owners
    rely on to manage employee leave. Tools like BambooHR ($6-9/seat/month) and Rippling
    ($8/seat/month) package PTO tracking inside larger HR suites that charge for features
    most small businesses never use; Gusto ($40+/month base) builds leave management as an
    add-on to payroll. PTOTracker gives you a standalone leave management tool: configurable
    PTO policies with accrual rules, an employee request and manager approval workflow, a
    shared team calendar, carryover settings, and a CSV export for payroll handoff — all
    without a per-seat fee or a payroll subscription requirement. This documentation covers
    policy setup, accrual configuration, the request workflow, carryover rules, the team
    calendar, balance reporting, and payroll export.
  </p>
</div>

<h2>Getting Started with PTOTracker</h2>
<ol class="doc-steps">
  <li>
    <strong>Create your leave policies.</strong> Go to Settings → Leave Policies and click
    Add Policy. Name each policy (Vacation, Sick, Personal, Bereavement), set the accrual
    method (annual lump sum, monthly, or per pay period), and enter the annual entitlement
    in hours or days. You can create as many policies as your company needs and assign
    different policies to different employee groups or departments.
  </li>
  <li>
    <strong>Add employees and assign policies.</strong> Go to Employees → Add Employee
    and enter each person's name, email, department, hire date, and the leave policies that
    apply to them. PTOTracker uses the hire date to calculate prorated accruals for employees
    who joined mid-year, so accurate hire dates matter. You can import a CSV of existing
    employees to set up the roster in bulk.
  </li>
  <li>
    <strong>Set your holiday calendar.</strong> Go to Settings → Holidays and add the
    company-observed holidays for the year. Holidays are excluded automatically from leave
    requests that span those dates, preventing employees from accidentally spending PTO on
    days they would not work anyway. You can add custom holidays for regional or company-specific
    observances beyond standard federal holidays.
  </li>
  <li>
    <strong>Configure carryover rules.</strong> Under each leave policy, set the carryover
    limit at year end: a maximum number of hours that roll into the new year, or use-it-or-lose-it
    with a zero carryover cap. PTOTracker applies carryover rules automatically at the rollover
    date you specify and logs any forfeited balances for audit purposes.
  </li>
  <li>
    <strong>Share the employee request link.</strong> Each employee receives a personal
    dashboard link where they can view their current balance, submit a time-off request, and
    see past approved and denied requests. Managers receive notifications for each new request
    and approve or deny with a single click from the notification email or the manager dashboard.
  </li>
</ol>

<h2>Core Features</h2>

<h3>PTO Policy Setup with Multiple Leave Types</h3>
<p>
  PTOTracker supports unlimited leave policy types so you can reflect your actual company
  policy rather than fitting it into a rigid two-policy structure. Create separate policies
  for vacation, sick leave, personal days, floating holidays, bereavement, jury duty, or
  parental leave, each with its own accrual rate, entitlement cap, and carryover rule.
</p>
<p>
  Policies are assigned per employee, not per role, so you can give tenured employees a
  higher vacation accrual rate while new hires follow a standard schedule. Policy changes
  apply prospectively from the date you save them, preserving historical accrual accuracy
  without requiring manual balance corrections. All policy configurations are logged with
  a timestamp for audit trail purposes.
</p>

<h3>Accrual Calculation per Employee</h3>
<p>
  PTOTracker calculates leave balances automatically based on each employee's hire date,
  assigned policy, and your chosen accrual frequency. Annual lump-sum policies grant the
  full entitlement on the policy anniversary or January 1st. Monthly accrual distributes
  hours evenly across twelve calendar months. Per-pay-period accrual divides the annual
  entitlement by the number of pay periods in your payroll cycle.
</p>
<p>
  Prorated accruals apply automatically for employees hired mid-year or mid-pay-period,
  so new hires see accurate balances from their first day rather than an inflated or zero
  opening balance. The accrual ledger shows every credit entry with a date and calculation
  detail so employees and managers can verify the math without contacting HR for a
  manual audit.
</p>

<h3>Time-Off Request and Approval Workflow</h3>
<p>
  Employees submit time-off requests from their personal PTOTracker dashboard by selecting
  the leave type, start date, end date, and an optional note. The request form shows the
  employee's available balance for the selected leave type in real time so employees know
  before submitting whether they have sufficient balance. Partial-day requests are supported
  for sick leave or medical appointments that do not require a full day off.
</p>
<p>
  Managers receive an email notification immediately when a new request is submitted.
  The notification email includes the employee name, leave type, dates, and current balance
  with a one-click Approve and a one-click Deny link that resolves the request without
  requiring a login. Employees receive an email confirmation the moment their request is
  approved or denied, with the manager's optional note explaining a denial. Approved requests
  immediately deduct from the employee's available balance.
</p>

<h3>Shared Team Leave Calendar</h3>
<p>
  The Team Calendar view shows all approved leave for every employee on a monthly grid.
  Each leave entry is color-coded by leave type and labeled with the employee's name.
  Managers can filter the calendar by department to see coverage for a specific team before
  approving a new request that would leave the department short-staffed.
</p>
<p>
  The calendar view is read-only for employees (they see their own leave and approved leave
  for their department), and editable for managers (who can add, modify, or cancel leave
  entries directly). Company holidays appear on the calendar as shaded days distinct from
  employee leave entries. The calendar exports to iCal format for teams that want to sync
  approved leave into Google Calendar or Outlook.
</p>

<h3>Carryover Rules and Year-End Processing</h3>
<p>
  PTOTracker enforces carryover limits at the rollover date you configure for each policy.
  Carryover rules can be set independently per leave type: vacation may carry over up to
  forty hours while sick leave carries over in full, for example. The system applies
  carryover limits automatically at midnight on the rollover date and logs each employee's
  opening balance for the new year.
</p>
<p>
  Before the rollover date, PTOTracker sends a configurable reminder email to employees
  with expiring balances — you choose the lead time, typically fourteen or thirty days.
  The reminder shows each employee exactly how many hours they will lose if they do not use
  them before the deadline. Forfeited hours are logged as a debit entry in the accrual
  ledger and are visible to HR managers in the leave balance report for record-keeping.
</p>

<h3>Holiday Calendar Configuration</h3>
<p>
  PTOTracker ships with a pre-populated US federal holiday calendar that you can adopt,
  modify, or replace entirely. Add company-specific holidays — a founders day, a summer
  Friday program, or regional observances for offices in different states — with a name,
  date, and whether the day applies to all employees or a specific department.
</p>
<p>
  Holiday calendar entries are deducted automatically from multi-day leave requests that
  span them, so an employee requesting a week off that includes a holiday is charged for
  four days of PTO rather than five. This calculation happens at request submission time
  and is shown to the employee before they confirm the request so there are no surprises
  in their balance after approval.
</p>

<h3>Leave Balance Report per Employee</h3>
<p>
  The Leave Balance Report provides a single-page summary for every employee showing
  opening balance, total accrued to date, total used, pending (approved but not yet taken),
  and current available balance for each leave type. HR managers can pull this report on
  demand at any point in the year for all employees at once or for an individual employee.
</p>
<p>
  The report is the primary input for payroll teams that need to verify PTO payout amounts
  at termination, calculate accrued vacation liability for financial statements, or audit
  balances against a prior system during a migration. All figures in the report link back
  to the accrual and usage ledger so any discrepancy can be traced to its source transaction.
  For more on <a href='/blog/employee-onboarding-software-small-business-2026'>HR automation
  for small business teams</a>, including integrating leave management with your broader HR
  workflow, see our onboarding guide.
</p>

<h3>CSV Export for Payroll Handoff</h3>
<p>
  PTOTracker exports leave balances and usage data as a CSV file compatible with the import
  format used by most payroll platforms. The export includes employee name, employee ID,
  leave type, opening balance, accrued hours, used hours, and current balance for the
  selected date range. You can export the full roster or filter to a specific department,
  policy, or date range before exporting.
</p>
<p>
  The payroll export is designed to be dropped directly into your payroll software's PTO
  import without reformatting. Column headers follow a standard naming convention (Employee_ID,
  Leave_Type, Balance_Hours) that most payroll platforms recognize. If your payroll system
  uses different column names, the export settings panel lets you rename column headers
  before downloading so the file is import-ready without manual editing.
</p>

<h2>Common Use Cases</h2>

<h3>Replacing a Leave-Tracking Spreadsheet</h3>
<p>
  Most small businesses start managing PTO in a shared Google Sheet with columns for employee
  name, days taken, days remaining, and a list of approved dates. This breaks down when
  multiple managers edit it simultaneously, when an employee questions their balance, or
  when payroll needs a reliable number at year end. PTOTracker is a direct replacement:
  import your existing employee roster via CSV, enter opening balances for each person to
  match what the spreadsheet shows, and switch to the approval workflow going forward.
  Employees see their own live balance, managers approve requests without hunting through
  an inbox, and the balance report replaces the manual year-end spreadsheet audit. The
  transition typically takes less than two hours for a team of up to thirty employees.
</p>

<h3>Managing Leave Across Multiple Employee Types</h3>
<p>
  Companies with a mix of full-time employees, part-time staff, and contractors often have
  different leave entitlements for each group but no clean way to enforce the differences
  in a single spreadsheet. PTOTracker handles this through policy assignment: create a
  Full-Time Vacation policy with a higher annual entitlement, a Part-Time Vacation policy
  with a prorated entitlement, and assign each employee the appropriate policy at setup.
  Changes to one policy do not affect employees assigned to the other. When a part-time
  employee moves to full-time, updating their policy assignment in PTOTracker recalculates
  their accruals prospectively from the change date.
</p>

<h3>Year-End Carryover and PTO Liability Reporting</h3>
<p>
  Finance teams at small businesses need to know the value of accrued but unused PTO at
  fiscal year end for liability reporting on the balance sheet. PTOTracker's leave balance
  report provides the hours-per-employee figure that the finance team multiplies by hourly
  rate to calculate total PTO liability. The carryover rules engine runs automatically at
  the configured rollover date, producing a clean opening balance for the new year without
  manual adjustment. If your auditor needs to trace a specific employee's balance, the
  accrual ledger provides a complete transaction-level history of every credit and debit
  entry from hire date to present.
</p>

<div class="doc-tip">
  <strong>Tip:</strong> Set up your holiday calendar before adding employees. PTOTracker
  uses the holiday calendar when calculating leave request deductions, so requests submitted
  before holidays are configured may show an incorrect day count. Adding holidays first
  ensures every request from day one is calculated accurately, saving you from manual
  balance corrections later.
</div>

<h2>Frequently Asked Questions</h2>

<div class="article-faq">
  <div class="faq-item">
    <h3>How do I set up a PTO accrual policy in PTOTracker?</h3>
    <p>
      Go to Settings → Leave Policies and click Add Policy. Give the policy a name that
      matches the leave type (Vacation, Sick, Personal Days). Choose your accrual method:
      Annual Lump Sum grants the full entitlement at the start of the policy year; Monthly
      credits one-twelfth of the annual entitlement at the start of each calendar month;
      Per Pay Period divides the annual entitlement by the number of pay periods you run in
      a year (26 for bi-weekly payroll, 24 for semi-monthly). Enter the annual entitlement
      in hours. Set the maximum accrual cap if you want to prevent balances from growing
      beyond a certain threshold mid-year. Save the policy, then assign it to employees
      under Employees → select employee → Leave Policies tab. Employees assigned to the
      policy will see their accrual credits appear on schedule automatically from the first
      accrual date following their hire date.
    </p>
  </div>

  <div class="faq-item">
    <h3>How does the time-off request and approval workflow work?</h3>
    <p>
      Employees submit requests from their personal PTOTracker dashboard. They select the
      leave type, enter a start date and end date (or check the half-day box for partial
      days), and optionally add a note for the manager. PTOTracker shows the number of
      working days the request covers — excluding weekends and company holidays — and the
      balance remaining if the request is approved, before the employee submits. On submission,
      the assigned manager receives an email notification with Approve and Deny buttons that
      work directly from the email without requiring a login to PTOTracker. If a manager
      denies the request, they can include a short note explaining why — for example, a
      coverage conflict during a busy period. The employee receives an email with the
      decision and any note immediately. Approved requests are reflected in the employee's
      balance and appear on the team calendar within seconds of the manager clicking Approve.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do carryover rules work at year end?</h3>
    <p>
      Carryover rules are configured per leave policy under Settings → Leave Policies →
      select policy → Carryover. You have two options: a maximum carryover cap (employees
      carry forward up to N hours and any excess is forfeited) or use-it-or-lose-it (zero
      carryover, full balance forfeits at rollover). Set the rollover date — typically
      December 31 or the last day of your fiscal year. PTOTracker runs the carryover
      calculation automatically at midnight on the rollover date. Before the rollover,
      PTOTracker sends reminder emails to employees whose balances will be partially or
      fully forfeited — you configure the reminder lead time (7, 14, or 30 days) under
      Settings → Notifications. The day after rollover, every employee's balance reflects
      their new opening figure. Forfeited hours appear as a line item in the accrual ledger
      labeled "Year-End Forfeiture" with the exact date, so the record is auditable and
      employees can verify the calculation.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I view the team leave calendar?</h3>
    <p>
      Click Team Calendar in the main navigation. The calendar defaults to the current month
      and shows a color-coded grid with one row per employee. Each approved leave block is
      labeled with the employee name and leave type. Use the department filter in the top
      toolbar to narrow the view to a single team when checking coverage before approving a
      new request. Click any leave block to see the full request detail: leave type, dates,
      hours, approval date, and approving manager. Navigate forward and backward by month
      using the arrow controls or jump to a specific month using the date picker. The calendar
      can be exported to iCal format (compatible with Google Calendar and Outlook) under
      Calendar → Export so managers can overlay approved team leave on their own calendar.
      Company holidays are shown as shaded days on the calendar grid and are labeled with
      the holiday name on hover.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I export leave balances for payroll?</h3>
    <p>
      Go to Reports → Leave Balance Report and set the reporting date to the last day of your
      pay period. Apply any department or policy filters if you need a subset of employees.
      Click Export CSV. The downloaded file includes one row per employee per leave type with
      columns for Employee_ID, Employee_Name, Department, Leave_Type, Opening_Balance,
      Accrued_Hours, Used_Hours, Pending_Hours, and Current_Balance. Most payroll platforms
      accept this format directly for PTO balance imports. If your payroll software uses
      different column names, go to Reports → Export Settings and rename columns before
      downloading — the renamed headers are saved for future exports so you only configure
      this once. For termination payouts, filter the report to the terminated employee and
      export their final balance. The CSV figure is the authoritative balance for payout
      calculation and can be traced back to every accrual and usage transaction in the
      ledger. Learn more at <a href='/tools/pto-tracker'>PTOTracker</a>.
    </p>
  </div>
</div>
`;
