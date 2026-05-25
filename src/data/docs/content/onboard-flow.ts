export const content = `
<div class="doc-lead">
  <p>OnboardFlow is a free employee onboarding software tool built for small businesses that need to turn a chaotic first week into a repeatable, professional process. It automates the entire new hire onboarding workflow — from document collection and e-signatures to IT provisioning checklists and manager alerts — so your HR team spends less time chasing paperwork and more time supporting people. OnboardFlow covers every stage of the onboarding lifecycle: role-based templates, compliance tracking, digital document handling, and a self-service new hire portal. This free onboarding automation platform is designed to replace the spreadsheet-and-email approach that breaks down the moment you hire faster than one person per month. This documentation walks you through setup, core features, common use cases, and answers the questions HR managers ask most.</p>
</div>

<h2>Getting Started with OnboardFlow</h2>
<ol class="doc-steps">
  <li><strong>Create a role template.</strong> Navigate to Templates and click "New Template." Name the template after the role (e.g., Sales Representative, Software Engineer, Office Admin). Templates are reusable — every future hire in that role automatically inherits the same task sequence, document requirements, and timeline.</li>
  <li><strong>Add tasks and required documents.</strong> Inside the template, add each onboarding task as a step. Assign due dates relative to the hire date (e.g., Day 1, Day 3, Day 7). Attach required documents — W-4, I-9, NDA, employee handbook acknowledgment — directly to the relevant steps so new hires know exactly what to sign and when.</li>
  <li><strong>Configure triggers and notifications.</strong> Set the template to activate automatically when a hire date is entered, or trigger it manually. Configure manager notification rules: choose which task completions or overdue milestones send an alert, and to whom.</li>
  <li><strong>Activate the template for a new hire.</strong> Open the New Hires tab, add the employee name, role, hire date, and email address. Select the appropriate role template and click Activate. OnboardFlow immediately creates the task sequence, sends the new hire portal link, and begins the notification schedule.</li>
  <li><strong>Review the completion dashboard.</strong> Monitor progress from the Onboarding Dashboard. Each new hire card shows percentage complete, overdue tasks highlighted in red, and documents with pending signatures. Use the dashboard during the first week to catch blockers before they delay Day 1 access.</li>
</ol>

<h2>Core Features</h2>

<h3>Automated Onboarding Task Sequences Triggered by Hire Date</h3>
<p>OnboardFlow builds a structured task sequence the moment a hire date is entered. Tasks cascade in order — Day 1 tasks unlock first, followed by Day 3, Day 7, and Day 30 milestones — so the new hire is never overwhelmed with everything at once. Each task in the sequence is timestamped, assigned, and tracked independently. If a task is completed early, the next one unlocks automatically. If a deadline passes without completion, the system flags it for manager review without requiring anyone to manually check a spreadsheet.</p>

<h3>Digital Document Collection and E-Signatures</h3>
<p>New hire documents — W-4, I-9, NDA, and employee handbook acknowledgment — are collected entirely online. The new hire receives a secure portal link and completes each form in the browser. E-signatures are timestamped and stored with the document record. OnboardFlow maintains a complete audit trail for every signed document, including when it was opened, when it was signed, and the IP address at signing. No printing, scanning, faxing, or filing cabinets required.</p>

<h3>IT Provisioning Checklist Automation</h3>
<p>The IT provisioning checklist ensures that software access and equipment assignment happen before Day 1, not after. Add a provisioning checklist to any role template — laptop model, software licenses needed, system access levels, badge assignment — and assign it to your IT team or office manager. Each item on the checklist is checked off independently, giving you real-time visibility into whether a new hire will have a working setup when they walk in the door. Equipment assignment records are stored per hire for future reference and offboarding.</p>

<h3>New Hire Self-Service Portal</h3>
<p>Every activated onboarding sequence generates a personal portal link for the new hire. From this portal, the new hire can see their full task list, complete documents, upload required files, and check off their own items — all before their first day if they choose. The portal is mobile-friendly, requires no login account, and is accessible from any device. Reducing back-and-forth email between HR and new hires during the pre-boarding window is one of the highest-leverage improvements small HR teams can make.</p>

<h3>Manager Notification Workflows</h3>
<p>Managers receive automated email alerts at configurable milestones: when a new hire completes their document bundle, when a task goes overdue, and when the full onboarding sequence reaches 100% completion. Notification rules are set per template, so the engineering manager gets engineering-specific alerts while the sales manager gets sales alerts. Overdue notifications include the specific task name and days overdue — managers get actionable information, not generic reminders.</p>

<h3>Compliance Tracking and Audit Trails</h3>
<p>OnboardFlow maintains a timestamped audit trail for every I-9 verification step, W-4 submission, and handbook acknowledgment. The compliance dashboard shows which employees have completed each required document and flags any overdue I-9 verifications by expiration date. Audit exports are available in CSV format for HR audits, state labor board requests, or internal compliance reviews. For businesses in regulated industries — healthcare, financial services, staffing — this audit infrastructure replaces manual binders and reduces audit prep time from hours to minutes.</p>

<h3>Custom Onboarding Templates by Role</h3>
<p>Different roles have different onboarding requirements. A sales representative needs CRM access, product training, and quota documentation. An engineer needs repository access, development environment setup, and architecture walkthroughs. An admin needs facility orientation, vendor contacts, and office system training. OnboardFlow lets you build a distinct template for each role, with its own task list, document requirements, and timeline. Templates are version-controlled — update a template once and it applies to all future hires in that role without affecting past records.</p>

<h3>Integration-Ready API for HR System Data Sync</h3>
<p>OnboardFlow exposes a webhook and REST API endpoint for triggering onboarding sequences from external HR systems. When a hire is marked active in your HRIS, payroll platform, or ATS, the API call activates the matching OnboardFlow template automatically. Outbound webhooks push task completion events back to your HR system, keeping employee records in sync without manual updates. The API uses standard JSON payloads and requires no proprietary SDK — any developer familiar with REST can complete an integration in under a day.</p>

<h2>Common Use Cases</h2>

<h3>Multi-Location Business with Consistent Onboarding</h3>
<p>Retail chains, restaurant groups, and regional service businesses struggle to deliver a consistent onboarding experience across locations when each manager runs their own process. OnboardFlow centralizes the template library so every location follows the same sequence, uses the same documents, and meets the same compliance requirements. Location managers still get their notification alerts and can add location-specific tasks, but the core sequence is uniform. District managers can view completion dashboards across all locations from one screen.</p>

<h3>Compliance-Heavy Industry: Healthcare and Financial Services</h3>
<p>Healthcare clinics, insurance agencies, and financial advisory firms face strict onboarding compliance requirements — background check acknowledgments, HIPAA training certifications, Series 65 disclosures, and state licensing paperwork. OnboardFlow's compliance tracking and audit trail features are built for exactly this context. Required documents are flagged as mandatory and cannot be marked complete without a valid e-signature. The audit export covers every document interaction, making regulatory reviews straightforward.</p>

<div class="doc-tip">
  <strong>Tip:</strong> For compliance-heavy roles, add a "compliance hold" task as the final step in your template. This task is assigned to HR and can only be checked off after a human reviews the complete document bundle. It acts as a quality gate before the new hire is marked fully onboarded — preventing oversights on mandatory certifications or background check clearances.
</div>

<h3>Fast-Growth Startup Hiring Five or More Per Month</h3>
<p>When a startup scales from 10 to 50 employees in a single year, the ad-hoc onboarding process that worked for individual hires breaks down completely. HR becomes a full-time email coordinator. OnboardFlow eliminates the coordination overhead by making the new hire self-sufficient from the moment the portal link lands in their inbox. With templates in place, adding a new hire takes under three minutes. The completion dashboard replaces daily status check-in emails. The IT checklist ensures engineering is not blocking sales on equipment delays.</p>

<p>For more context on choosing the right tool for your team size and compliance needs, see our <a href="/blog/employee-onboarding-software-small-business-2026">employee onboarding software comparison guide</a>.</p>

<h2>Frequently Asked Questions</h2>

<div class="faq-item">
  <h3>How do I create an onboarding template for a new role?</h3>
  <p>Go to Templates and click "New Template." Enter the role name, then use the task editor to add each onboarding step. For each task, set a due date relative to hire date (Day 1, Day 3, etc.), write a brief description, and optionally assign the task to a specific team (HR, IT, hiring manager). Attach required documents to the relevant steps using the document picker. Save the template and it is immediately available when activating onboarding for any new hire in that role. You can duplicate an existing template and modify it to create a variation — useful when a new role is 80% similar to one you already have.</p>
</div>

<div class="faq-item">
  <h3>How does electronic document collection work for I-9 and W-4 forms?</h3>
  <p>When a new hire's onboarding is activated, they receive a portal link containing their full document list. Each required document — I-9, W-4, NDA, handbook — appears as a task in their portal. The new hire fills out each form directly in the browser and applies an e-signature with a typed name and date. OnboardFlow stores the signed document with a full audit trail: timestamp, IP address, and signature image. For I-9 specifically, the employer verification section appears as a separate task assigned to HR, maintaining the two-part completion flow required by law. All documents are exportable as PDFs for your records.</p>
</div>

<div class="faq-item">
  <h3>Can I assign different onboarding sequences to different departments?</h3>
  <p>Yes. OnboardFlow supports unlimited role templates, and each template is fully independent. You can build one template for engineering, another for sales, another for customer support, and another for part-time staff — each with a completely different task list, document set, and timeline. When activating onboarding for a new hire, you select the appropriate template from a dropdown. If someone moves between departments or was hired into an ambiguous role, you can assign a secondary template and run both sequences simultaneously. There is no limit on how many templates you maintain.</p>
</div>

<div class="faq-item">
  <h3>How do I track which new hires have completed their onboarding tasks?</h3>
  <p>The Onboarding Dashboard shows every active new hire as a card with a completion percentage, a list of remaining tasks, and any overdue items flagged in red. Clicking a hire card opens the full task timeline: every task with its due date, completion date (if done), and current assignee. Documents show signing status per form. The dashboard updates in real time as tasks are completed — no manual refresh needed. You can filter the dashboard by department, hire date range, or completion status to focus on the hires that need attention. Completed onboarding records are archived and searchable by name or hire date.</p>
</div>

<div class="faq-item">
  <h3>What happens if a new hire misses a required task deadline?</h3>
  <p>When a task passes its due date without being completed, OnboardFlow marks it overdue and triggers an alert to the assigned manager or HR contact. The alert email includes the task name, the new hire's name, the original due date, and a direct link to the onboarding dashboard for that hire. The task remains in the new hire's portal so they can still complete it — it does not drop off or get locked. Managers can manually extend a due date from the dashboard if circumstances warrant. For compliance-critical tasks like I-9 completion, the system sends a second escalation alert at 72 hours overdue, and a final alert at the legal deadline.</p>
</div>
`;
