export const content = `
<div class="doc-lead">
  <p>CRMTracker is a free sales pipeline and CRM tracker built for small business teams. It gives you a visual Kanban deal board, a searchable contact database, activity logging, follow-up reminders, and win/loss reporting — without per-seat pricing that grows every time you hire. This documentation covers how to set up your pipeline, add and manage deals, track contacts, log activity, and read your close-rate reports.</p>
</div>

<h2>Getting Started with CRMTracker</h2>
<ol class="doc-steps">
  <li><strong>Set up your pipeline stages.</strong> CRMTracker ships with five default stages: Lead, Qualified, Proposal, Negotiation, and Closed. Rename or add stages in Settings → Pipeline to match your actual sales process.</li>
  <li><strong>Import or add your contacts.</strong> Use the CSV import to bring in existing leads from a spreadsheet, or add contacts manually via the Contacts tab. Each contact record stores company, role, email, phone, and all deal history.</li>
  <li><strong>Create your first deal.</strong> Click "New Deal" on any pipeline stage, attach a contact, set deal value and expected close date, and drag it into your pipeline. CRMTracker automatically timestamps the creation date and stage entry.</li>
  <li><strong>Log your first activity.</strong> Open a deal and click "Log Activity" to record a call, email, meeting, or note. Activities are timestamped and visible on the deal timeline and in the contact record simultaneously.</li>
  <li><strong>Set a follow-up reminder.</strong> From any deal or contact, click "Add Reminder" and set a date and note. Reminders surface in your daily task list — no deals fall through the cracks while you're working other opportunities.</li>
</ol>

<h2>Core Features</h2>

<h3>Visual Kanban Pipeline</h3>
<p>The pipeline board shows every active deal as a card in its current stage. Drag cards left or right to advance or regress deals. Each card shows deal name, contact, value, and days in stage. Deals that have been in a stage past their expected duration are flagged with a color indicator — your visual warning that a deal needs attention before it goes cold.</p>
<p>You can run multiple pipelines simultaneously. A software agency might maintain a separate pipeline for retainer clients versus project-based work, with different stages and close criteria for each.</p>

<h3>Contact and Company Records</h3>
<p>Every person and company in CRMTracker has a unified record showing all deals, activity history, notes, and reminders in one view. The contact search is instant — type three characters and results appear without a page reload. Contact records support custom fields for industry-specific data points your team tracks that don't fit standard fields.</p>
<p>Company records aggregate all contacts at that organization, giving you a full account view. If three people from the same company are in different deals at different stages, the company record shows all of them with their individual deal status.</p>

<h3>Activity Logging</h3>
<p>Log calls, emails, meetings, demos, and notes directly against deals or contacts. Activity types are configurable — if your team uses discovery calls, proposal walkthroughs, and follow-up cadences as distinct steps, you can name them exactly that. All logged activities appear in a chronological timeline on the deal record so any team member can pick up where another left off without a handoff conversation.</p>

<h3>Follow-Up Reminders</h3>
<p>Reminders are date-specific tasks tied to a deal or contact. Set them from the deal card, the contact record, or the activity log. Your reminder queue surfaces in the dashboard each morning, sorted by date. Overdue reminders are highlighted so nothing slips. Unlike calendar-based approaches, reminders in CRMTracker stay attached to the deal context — you click a reminder and open directly to the deal, not a calendar event with no context.</p>

<h3>Deal Value and Close Date Tracking</h3>
<p>Every deal carries a value (single amount or recurring MRR) and an expected close date. These two fields power the pipeline value summary at the top of the board, which shows total pipeline value by stage, weighted pipeline value (probability-adjusted), and forecast for the current and next quarter. Update close dates as the deal progresses — CRMTracker tracks changes over time so you can see how long your forecast has been slipping.</p>

<h3>Win/Loss Analysis and Reporting</h3>
<p>When you close a deal as Won or Lost, CRMTracker captures the reason (configurable: price, timeline, competitor, no decision, etc.). The Reports tab shows your win rate by stage, by deal source, by deal size range, and by close reason. For lost deals, the reason breakdown tells you whether you're losing on price (a positioning problem), timeline (a qualification problem), or competitor (a differentiation problem) — three completely different root causes requiring different fixes.</p>

<h3>Team Pipeline Visibility</h3>
<p>All team members share a single pipeline view. Deal ownership is assigned per deal. Managers can filter the board by rep to see individual performance, or view the combined pipeline for forecasting. Activity logs show who logged each action, creating natural accountability without requiring managers to ask for updates in meetings.</p>

<h3>CSV Export and Data Portability</h3>
<p>Export your full contact database, deal history, and activity log as CSV at any time from Settings → Export. CRMTracker does not lock your data. If you outgrow the tool or need to migrate to an enterprise CRM, your data is available in a standard format on every plan.</p>

<h2>Common Use Cases</h2>

<h3>B2B Services Team (5-15 Reps)</h3>
<p>For a consulting firm, agency, or professional services team, CRMTracker works best as the single source of truth for active pipeline. Set up stages matching your sales cycle (Discovery, Scoping, Proposal, Contract, Onboarding), log every client touchpoint, and use the weekly pipeline review to identify deals stalling in Scoping or Proposal. The win/loss report by deal size helps identify whether you're competitive at different price points.</p>

<h3>Solo Consultant or Freelancer</h3>
<p>A single-person operation benefits most from the reminder system. With no team to escalate to, follow-up discipline is entirely self-managed. Set reminders for every active proposal — three days after sending, seven days after, and two weeks if no response. The pipeline board gives you a weekly visual of where your revenue is coming from and which opportunities need the most attention.</p>

<h3>E-commerce or Wholesale Sales</h3>
<p>For businesses with repeat buyers, CRMTracker's company records and contact history make it easy to track account health. Log every inbound inquiry, quote sent, and order placed. Use the close date tracking to identify accounts that were buying quarterly but haven't in six months — the activity history shows when you last contacted them and what was discussed.</p>

<h2>How CRMTracker Compares to HubSpot and Salesforce</h2>
<p>HubSpot CRM's free tier caps marketing contacts at 1,000, limits calling to 500 minutes per month, and locks custom reports behind an $890/month tier. Salesforce requires a dedicated administrator and typically costs $3,000-$8,000 in setup consulting before the first deal is logged. CRMTracker delivers the core pipeline management features — visual board, contact database, activity log, reminders, win/loss reports — without per-seat pricing that compounds as your team grows. For small business teams under 25 people running a defined pipeline, CRMTracker covers 90% of daily CRM workflows. See the <a href="/blog/best-free-crm-small-business-2026">complete CRM comparison guide</a> for a detailed breakdown.</p>

<div class="doc-tip">
  <strong>Tip:</strong> The fastest way to get accurate pipeline data is to log activities immediately after they happen — not at the end of the day. Teams that log in real-time have 40-60% more complete activity records than teams that batch-log at end of week.
</div>

<h2>Frequently Asked Questions</h2>
<div class="article-faq">
  <div class="faq-item">
    <h3>How do I move a deal between pipeline stages?</h3>
    <p>Drag the deal card from its current column to the destination column on the Kanban board. CRMTracker automatically logs the stage change with a timestamp. You can also open the deal record and change the stage from the dropdown in the deal header — this is faster when you're already in the deal detail view reviewing activity.</p>
  </div>
  <div class="faq-item">
    <h3>Can multiple team members work in CRMTracker simultaneously?</h3>
    <p>Yes. CRMTracker is designed for shared team use. Deal ownership is assigned per deal, and all team members can view the full pipeline board. Activity logs show who performed each action. Managers can filter by rep to review individual pipelines during one-on-ones or weekly forecasting reviews.</p>
  </div>
  <div class="faq-item">
    <h3>How do I track deals in multiple currencies?</h3>
    <p>Set your base currency in Settings → Preferences. Individual deals can be denominated in any currency — CRMTracker stores the original currency and value, and converts to your base currency for pipeline totals using a fixed exchange rate you set. For live exchange rate conversion, export the data and apply rates in your accounting system.</p>
  </div>
  <div class="faq-item">
    <h3>What is the difference between a contact and a company in CRMTracker?</h3>
    <p>Contacts are individual people. Companies are organizations. A contact is always linked to a company record. Multiple contacts can belong to the same company, and all their deal history rolls up to the company record. When working enterprise accounts with multiple stakeholders, the company view shows you all the relationships in one place — who the champion is, who the budget holder is, and what conversations have happened across the full account.</p>
  </div>
  <div class="faq-item">
    <h3>How do I export my CRM data if I need to migrate to another platform?</h3>
    <p>Go to Settings → Export Data. You can export contacts, companies, deals, activity history, and reminders as separate CSV files or as a combined export. All exports are available immediately with no waiting period. CRMTracker does not charge for data export or restrict it to paid plans — your data belongs to you at every stage of use.</p>
  </div>
</div>
`;
