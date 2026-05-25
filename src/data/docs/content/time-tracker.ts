export const content = `
<div class="doc-lead">
  <p>
    TimeTracker is free time tracking software for small business teams, freelancers, and
    agencies that need accurate billable hours records without paying $10 to $20 per seat per
    month for tools like Toggl Track, Harvest, or Clockify. Accurate time tracking is the
    foundation of profitable client billing: every unlogged hour is revenue left on the table,
    and every project that runs over budget without a warning signal erodes your margins
    silently. TimeTracker gives you a one-click timer, manual time entry for past work, project
    budget tracking, and client-ready timesheet exports in PDF and CSV format — all from the
    browser, with no app installation required. This documentation covers how to start tracking
    time, log manual entries, set project budgets, generate client timesheets, and review team
    time logs as a manager.
  </p>
</div>

<h2>Getting Started with TimeTracker</h2>
<ol class="doc-steps">
  <li>
    <strong>Create a project and client.</strong> Click New Project from the TimeTracker
    dashboard. Enter the project name, assign it to a client (or create a new client record
    inline), and set the billing type — hourly, fixed-fee, or non-billable. If the project
    has a defined hour budget, enter it now. All time entries logged against this project will
    draw down the budget and trigger a warning when you approach the limit.
  </li>
  <li>
    <strong>Start your first timer.</strong> Select a project from the dropdown in the timer
    bar at the top of the screen, optionally add a task tag, and click the play button. The
    timer starts counting immediately. You can add a description at any point while the timer
    is running. When the work session ends, click stop. The elapsed time is saved as a time
    entry on the selected project automatically.
  </li>
  <li>
    <strong>Tag entries as billable or non-billable.</strong> Each time entry has a billable
    toggle. Entries marked billable appear on client-facing timesheets and are included in
    revenue calculations. Non-billable entries — internal meetings, admin work, scope changes
    absorbed by the agency — are tracked for your own records but excluded from client
    exports. You can set a project-level default so every new entry on that project starts
    with the correct billable status.
  </li>
  <li>
    <strong>Review and edit your time log.</strong> Open the Time Log view to see all entries
    for the current week, grouped by project. Click any entry to edit the description,
    adjust the start and end time, or switch the billable toggle. Entries can be moved to a
    different project if logged to the wrong one by mistake. The running total for each
    project and the week overall updates as you make changes.
  </li>
  <li>
    <strong>Export a client timesheet.</strong> Navigate to Reports → Client Timesheet, select
    the client and date range, and click Export. TimeTracker generates a formatted PDF
    timesheet listing all billable entries by date, with task descriptions, hours, hourly
    rate, and a total amount due at the bottom. CSV export is also available for clients who
    prefer to import time data into their own systems or for uploading to an invoicing tool.
  </li>
</ol>

<h2>Core Features</h2>

<h3>One-Click Timer with Project and Task Tagging</h3>
<p>
  The timer bar is always visible at the top of the TimeTracker interface. Select a project,
  optionally add a task tag from your predefined tag list (Design, Development, Client Call,
  Review, Admin), type a brief description, and click play. The timer starts immediately —
  there is no confirmation dialog or loading delay. Switching projects mid-session stops the
  current entry and starts a new one automatically, so you never lose time when context
  switches happen.
</p>
<p>
  Task tags serve as a secondary classification layer beneath the project. They let you analyze
  where time goes within a project: how many hours went to design reviews versus active
  development versus client communication. This breakdown is visible in the project detail
  report and is particularly useful for agencies that want to improve their scoping accuracy
  by comparing estimated versus actual hours by task type across multiple similar projects.
</p>

<h3>Manual Time Entry for Past Work</h3>
<p>
  Not every hour gets logged in real time. TimeTracker's manual entry panel lets you add
  any past time entry by selecting the date, entering the start and end time or a total
  duration, choosing the project and task tag, writing a description, and saving. Manual
  entries carry the same fields as timer-generated entries and appear identically in reports
  and timesheets. There is no flag or indicator distinguishing manual from timer entries on
  client-facing exports.
</p>
<p>
  Manual entry is also the right tool for logging time tracked in a different system before
  migrating to TimeTracker, or for recording time spent on tasks that do not lend themselves
  to a running timer — creative work done on paper, in-person client visits, or phone calls
  taken while away from a computer. You can log multiple entries for the same day in a single
  session by clicking Add Another Entry after saving each one.
</p>

<h3>Project Budget Tracking</h3>
<p>
  Set an hour budget on any project and TimeTracker will track how many hours have been logged
  against it in real time. The project detail view shows a progress bar with hours used,
  hours remaining, and percentage consumed. When logged hours cross 80 percent of the budget,
  TimeTracker sends an email alert to the project owner so you have time to discuss a scope
  change with the client before the budget is exhausted rather than after.
</p>
<p>
  Budget tracking works for both hourly and fixed-fee projects. On hourly projects, the hour
  budget translates directly to a revenue cap. On fixed-fee projects, the hour budget is your
  internal profitability guardrail: if a fixed-fee project is budgeted at forty hours and
  sixty hours have been logged, you know the project is operating at a loss and need to
  adjust your estimate on the next similar engagement. Budget data is visible to all team
  members assigned to the project so everyone can see the constraint they are working within.
  See our guide on <a href='/blog/13-week-cash-flow-forecast-guide'>connecting billable hours
  to cash flow planning</a> for how to use project budget data in your financial forecasting.
</p>

<h3>Client-Ready Timesheet Export</h3>
<p>
  TimeTracker generates two export formats for client billing. The PDF timesheet is a
  formatted document with your company name and logo at the top, the client name and billing
  period below it, and a table of all billable entries with date, description, hours, and
  hourly rate. The total hours and total amount due appear at the bottom, calculated
  automatically from your project rate settings. The PDF is ready to attach to an invoice
  or send directly to the client without any manual formatting.
</p>
<p>
  The CSV export contains the same data in a flat file format suitable for importing into
  invoicing software, accounting platforms, or client procurement systems that require
  structured time data rather than a PDF document. Both export formats respect the date
  range and client filter you select in the Reports screen, so you can generate a timesheet
  for a single project, a full month across all projects for one client, or any other
  combination you need.
</p>

<h3>Billable vs. Non-Billable Hour Distinction</h3>
<p>
  Every time entry in TimeTracker carries a billable flag that you set when logging the
  entry. Billable hours are included in client timesheet exports, revenue calculations, and
  billable utilization reports. Non-billable hours are tracked separately: they appear in
  internal reports and project budgets but are excluded from anything a client sees. This
  distinction lets you measure how much of your team capacity is generating revenue versus
  being absorbed by overhead, meetings, or goodwill work.
</p>
<p>
  The billable utilization report, found under Reports → Utilization, shows each team member's
  billable hours as a percentage of their total logged hours for any date range. Agencies
  typically target 70 to 80 percent billable utilization for production staff. Tracking this
  metric over time surfaces whether a team member is being under-scheduled on client work,
  spending excessive time on internal overhead, or being misassigned to non-billable projects
  that limit revenue throughput.
</p>

<h3>Team Time View for Managers</h3>
<p>
  Managers with team access can view a consolidated time log showing all active timers and
  recent time entries across the full team. The team view is organized by person and by
  project, letting you answer two questions at a glance: what is each person working on right
  now, and how many hours has the team logged to each project this week. No one needs to send
  a status update if the manager can see the time log directly.
</p>
<p>
  The team view also flags team members who have not logged any time for more than four hours
  during business hours, which serves as a passive check-in signal for remote teams. Managers
  cannot edit team member entries from the team view, preserving individual accountability for
  the accuracy of each person's own time log. Editing rights remain with the individual who
  created the entry, with an override option available to account administrators for correction
  of errors after the fact.
</p>

<h3>Idle Time Detection</h3>
<p>
  If a timer has been running for more than fifteen minutes without any keyboard or mouse
  activity detected in the browser, TimeTracker displays a prompt asking whether you are
  still working. You can dismiss the prompt and continue the timer, stop the timer at the
  last active moment, or set an exact end time manually. Idle time detection prevents
  inflated time entries caused by forgetting to stop a timer at the end of a work session.
</p>
<p>
  The idle threshold is configurable in Account Settings between five minutes and sixty
  minutes, depending on the nature of your work. Writers and analysts who spend long
  stretches reading without typing may prefer a longer threshold. The idle detection operates
  entirely within the browser tab — no desktop agent or background application is installed.
  Idle discards are logged in the entry history so you can see that a correction was made
  if you review a past time entry and the duration looks shorter than expected.
</p>

<h3>Weekly Summary Email</h3>
<p>
  TimeTracker sends a weekly summary email every Monday morning covering the prior week's
  time log. The email lists total hours logged, a breakdown by project showing hours and
  billable amount, and a comparison to the same week in the previous period if data is
  available. Team members see only their own summary. Managers receive a team-level summary
  showing total hours by person and by project across the whole team.
</p>
<p>
  The weekly email is enabled by default and can be disabled in Notification Settings for
  users who prefer not to receive it. It is not a replacement for the full Reports view but
  serves as a lightweight prompt to review the prior week before the new one begins. Many
  freelancers find the weekly email sufficient for their own internal tracking and only open
  the full Reports view when generating a client invoice at the end of a billing cycle.
</p>

<h2>Common Use Cases</h2>

<h3>Freelance Client Billing</h3>
<p>
  Freelancers working across multiple clients simultaneously use TimeTracker to maintain
  clean, accurate records for each client relationship. Starting a timer with the correct
  client project selected takes three seconds, and switching projects when context changes
  keeps each client's hours separate without manual sorting at invoice time. At the end of
  the month, the freelancer opens Reports, selects each client in turn, exports a PDF
  timesheet, attaches it to an invoice generated in their accounting tool, and sends it.
  The entire billing process for a month of work across five clients takes under thirty
  minutes. Non-billable admin hours — proposal writing, bookkeeping, professional
  development — are tracked separately and visible in the utilization report for the
  freelancer's own business planning.
</p>

<h3>Agency Project Profitability Tracking</h3>
<p>
  Digital agencies running multiple client projects simultaneously face the risk of scope
  creep eroding fixed-fee project margins invisibly. TimeTracker's project budget tracking
  makes this visible. Project managers configure a budget in hours for each fixed-fee
  engagement and monitor the progress bar as the team logs time. When a project hits 80
  percent of its hour budget with deliverables still outstanding, the project manager gets
  an email alert and opens a scope conversation with the client before the project goes over
  budget. Over multiple projects, the team uses the actual hours data to improve future
  scoping accuracy: if social media campaigns consistently run 20 percent over estimate,
  the agency adjusts its pricing model for that service line accordingly.
</p>

<h3>Professional Services Payroll Support</h3>
<p>
  Small consulting firms, law offices, and accounting practices that bill clients by the hour
  need accurate time records for both client invoicing and internal payroll calculations.
  TimeTracker captures billable hours by client matter, case, or engagement and exports
  timesheets in the format required by each client. For salaried employees, the non-billable
  utilization report shows how much bench time exists across the team, informing hiring and
  business development decisions. For hourly employees, total logged hours feed directly into
  payroll calculations at period close. The team view lets operations managers confirm that
  all staff have submitted complete time logs before payroll runs, eliminating the last-minute
  scramble to collect missing timesheet approvals.
</p>

<div class="doc-tip">
  <strong>Tip:</strong> Create your full project and client list before inviting team members
  to TimeTracker. When team members log their first entries against properly named projects,
  reports are clean from day one. Retroactively reassigning entries from a generic placeholder
  project to the correct client project is tedious and prone to error — a few minutes of setup
  upfront saves significant cleanup later.
</div>

<h2>Frequently Asked Questions</h2>

<div class="article-faq">
  <div class="faq-item">
    <h3>How do I start tracking time on a project?</h3>
    <p>
      Open <a href='/tools/time-tracker'>TimeTracker</a> and locate the timer bar at the top
      of the screen. Click the Project dropdown and select the project you want to log time
      against. If the project does not exist yet, click New Project in the dropdown to create
      it inline without leaving the timer. Optionally select a task tag from the Tag dropdown
      and type a brief description in the text field — for example, "Homepage redesign — mobile
      layout" or "Client discovery call." Click the play button to start the timer. A running
      counter appears showing elapsed time in hours, minutes, and seconds. Work normally. When
      you finish the session, click the stop button. TimeTracker saves the entry with the
      elapsed duration, project, tag, description, date, and billable status automatically.
      You do not need to confirm or submit the entry — it is stored the moment you click stop.
      If you forget to stop the timer, idle time detection will prompt you after your configured
      idle threshold expires.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I log time manually for past work?</h3>
    <p>
      Click Add Manual Entry from the Time Log view, or use the keyboard shortcut M from any
      screen. The manual entry panel opens with fields for date, start time, end time (or
      duration), project, task tag, description, and billable toggle. Select the date from
      the calendar picker — you can log entries up to 90 days in the past. Enter either a
      start and end time or a total duration in hours and minutes; TimeTracker calculates the
      other field automatically. Select the project from the dropdown, assign a task tag if
      applicable, and write a description. Toggle the billable switch to match whether this
      time should appear on a client invoice. Click Save Entry. The entry appears in your time
      log for the selected date and is immediately included in project budget calculations and
      reports. If you need to log multiple entries for the same day, click Save and Add Another
      to keep the panel open with the date pre-filled. Manual entries can be edited or deleted
      at any time from the Time Log view by clicking on the entry row.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I set a project hour budget?</h3>
    <p>
      Open the project by clicking its name in the Projects list, then click Project Settings
      in the top right of the project detail view. Under Budget, toggle Enable Hour Budget to
      on and enter the total hours allocated for the project — for example, 40 hours for a
      website redesign. Click Save. From this point forward, the project detail view displays
      a budget progress bar showing hours logged versus hours budgeted. A percentage consumed
      figure appears next to the bar. When logged hours cross 80 percent of the budget,
      TimeTracker sends an email alert to the project owner — the team member assigned as the
      project manager — with a link to the project detail view and the current hours logged and
      remaining. You can adjust the budget at any time by returning to Project Settings and
      changing the hour total. Adjustments take effect immediately and the progress bar recalculates.
      Budget alerts can be disabled per project in Project Settings → Notifications if you
      prefer to monitor budget consumption manually.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I generate a client timesheet?</h3>
    <p>
      Navigate to Reports → Client Timesheet from the left sidebar. Select the client from
      the Client dropdown — the list shows all clients with at least one billable time entry
      in the system. Set the date range using the From and To date pickers; common presets
      (Last Month, This Month, Last Week, Custom Range) are available from the range selector.
      Optionally filter by a specific project if the client has multiple engagements and you
      want to generate a per-project timesheet rather than a full-client export. Click Preview
      to see a formatted view of the timesheet in the browser before exporting. The preview
      shows every billable entry with date, description, hours, and rate, plus the totals
      at the bottom. Click Export PDF to download a formatted PDF ready to send to the client,
      or Export CSV to download a flat file. Both files use the client name and date range in
      the filename — for example, "Acme Corp Timesheet May 2026.pdf" — so they sort cleanly
      in your file system and email attachments.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I view team time logs as a manager?</h3>
    <p>
      Managers with team access see a Team view option in the left sidebar below the standard
      Time Log view. Click Team to open the consolidated team time log. By default the view
      shows the current week. Use the date range picker at the top to switch to a different
      week or select a custom date range. The team log is organized in two tabs: By Person
      and By Project. The By Person tab shows each team member's name, their active timer
      status (Running or No Active Timer), and their logged hours for the selected period
      broken down by day. Clicking a team member's name expands their individual entries for
      the period. The By Project tab shows total hours logged to each project across the whole
      team, with a breakdown by team member within each project. Managers cannot edit team
      member entries from the team view — changes must be made by the individual or by an
      account administrator. To prompt a team member to complete a missing time log, click
      the Send Reminder button next to their name, which sends an automated email nudge
      asking them to review and complete their log for the selected period.
    </p>
  </div>
</div>
`;
