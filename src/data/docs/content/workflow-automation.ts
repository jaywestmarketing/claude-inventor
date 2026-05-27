export const content = `
<div class="doc-lead">
  <p>WorkflowAutomation is a free no-code workflow automation builder that lets small business teams connect triggers to actions without writing a single line of code. It gives you a visual drag-and-drop canvas, 50+ pre-built triggers, conditional branching logic, approval templates, and a full run history log — everything a free workflow builder needs to replace the manual handoffs and copy-paste tasks that slow your operations down every day. Business process automation at this level used to require Zapier, Make, or n8n subscriptions with per-task pricing that compounds as your volume grows. WorkflowAutomation runs entirely in the browser, with no per-task fees and no seat limits. This documentation covers how to build your first workflow, configure conditions and actions, test before you go live, and connect to the tools your team already uses.</p>
</div>

<h2>Getting Started with WorkflowAutomation</h2>
<ol class="doc-steps">
  <li><strong>Choose your trigger.</strong> Every workflow starts with a trigger — the event that kicks things off. Open the canvas and click "Add Trigger." Browse the trigger library by category: Form Submission, Date and Time, Webhook, Record Update, or Manual Run. Select the trigger that matches the event you want to automate and configure its settings (e.g., which form, which schedule, which record field to watch).</li>
  <li><strong>Add your first action.</strong> Click the "+" below your trigger to open the action menu. Actions include Send Email, Send Slack Notification, Create Record, Update Field, Assign to User, and more. Configure the action with the specific values or dynamic field references from your trigger. Each action node shows its configuration summary on the canvas card so you can read the whole workflow at a glance.</li>
  <li><strong>Configure conditions and branches.</strong> After any action, you can add a condition node that splits the workflow into two paths: one for when the condition is true, one for when it is false. Conditions evaluate fields from your trigger data — for example, "if expense amount is greater than $500, route to manager approval; otherwise, auto-approve." Branches can contain their own action sequences, and branches can be nested.</li>
  <li><strong>Test the workflow.</strong> Before activating, click "Test Run" to simulate the workflow with sample data. The canvas highlights each node as it executes in the test, and the run log below shows the outcome of every step. If a step fails, the log shows the error reason and the input data that caused it. Fix any issues in the canvas and re-test until every branch passes.</li>
  <li><strong>Activate and monitor.</strong> Click "Activate Workflow" to set it live. From this point, every qualifying trigger event starts a new run. Monitor activity from the Run History tab — each run shows start time, trigger data, step-by-step results, and final status (Success or Failed). You can deactivate a workflow at any time without deleting it.</li>
</ol>

<h2>Core Features</h2>

<h3>Visual Drag-and-Drop Workflow Canvas</h3>
<p>The workflow canvas is a connected node graph. Trigger nodes, action nodes, and condition nodes are placed on a freeform canvas and connected by lines that show execution order. Drag any node to reposition it. Click a connection line to add a node in the middle of the sequence. Select multiple nodes and move them as a group. The canvas auto-arranges when you add branches so the layout stays readable as complexity grows. Zoom in to edit individual node settings, zoom out to see the full workflow at once. Every canvas state is auto-saved — there is no "save" button to forget.</p>

<h3>50+ Pre-Built Triggers</h3>
<p>WorkflowAutomation ships with over 50 trigger types grouped into five categories. Form Submission triggers fire when any connected form receives a new response. Date and Time triggers fire on a schedule — daily, weekly, monthly, or on a specific date. Record Update triggers fire when a field in a connected database or CRM record changes value. Webhook triggers fire when an external system sends an HTTP POST to your workflow's unique webhook URL. Manual Run triggers let you test or kick off workflows on demand from the dashboard. Each trigger type has a configuration panel that constrains the trigger to exactly the events you want — no spurious runs.</p>

<h3>Multi-Step Action Chains with Conditional Branching Logic</h3>
<p>A workflow is not limited to one action per trigger. You can chain as many actions as the process requires — notify a manager, update a record, send a follow-up email three days later, check a condition, and then split into two separate resolution paths. Condition nodes evaluate any field from the trigger payload or from data returned by a previous action. True-branch and false-branch paths each support their own full action sequences. Branches can merge back into a shared continuation or run to independent endpoints. Complex approval chains, multi-stage review processes, and escalation sequences are all expressible without code.</p>

<h3>Email and Slack Notification Actions Built-In</h3>
<p>Send Email and Send Slack Message are first-class action types — no third-party connector or API key required for basic notifications. The email action supports a recipient field (static address or dynamic field from trigger data), a subject line with variable substitution, and a body with full formatting. The Slack action posts to any channel or direct message. Both actions support dynamic content insertion: reference any field from the trigger or upstream action using double-brace syntax (e.g., the applicant name, the invoice amount, the assigned reviewer). Notifications land in the right inbox or channel with the right context, not generic alerts that require follow-up clicks.</p>

<h3>Approval Workflow Templates</h3>
<p>WorkflowAutomation includes pre-built approval templates for the three most common approval chains in small businesses: expense approval, PTO request, and contract sign-off. Each template is a complete workflow — trigger, routing logic, approver notification, approval or rejection response, and requester confirmation — ready to activate in under five minutes. Load a template onto the canvas and it becomes fully editable. Change the approver, adjust the threshold amounts, swap the notification channel, or add a secondary approval level. Templates eliminate the blank-canvas problem for teams that are new to workflow automation.</p>

<h3>Workflow Run History Log</h3>
<p>Every workflow execution is logged in the Run History tab. Each log entry shows the workflow name, trigger timestamp, trigger data payload, and a step-by-step result for every action and condition node in the run. Successful steps are marked green; failed steps are marked red with an error message and the input values that caused the failure. You can filter run history by workflow, status, date range, or trigger type. Clicking any log entry opens a full trace view — useful for diagnosing intermittent failures and for demonstrating to stakeholders that automations ran correctly during audits.</p>

<h3>Template Library with 30+ Ready-to-Use Workflow Templates</h3>
<p>The template library contains over 30 pre-built workflow templates covering HR, finance, sales, marketing, and operations processes. Browse by category or search by keyword. Each template page shows a canvas preview, a plain-English description of what it automates, and the estimated setup time. Loaded templates are fully customizable — nothing is locked. Templates are updated periodically as new trigger types and action types are added to the platform. If you have built a workflow that others on your team would reuse, you can save it to your team's private template collection from the canvas "Save as Template" option.</p>

<h3>Webhook Support for Custom Integrations</h3>
<p>Every workflow with a Webhook trigger gets a unique HTTPS URL that accepts POST requests. Any external tool that can send an HTTP request — a payment processor, a CRM, a form platform, a custom internal app — can trigger a WorkflowAutomation workflow by posting JSON to that URL. The webhook payload fields are automatically detected on first run and become available as dynamic variables in every downstream action. Outbound webhooks are also available as an action type: post data to any external URL at any step in the workflow. This bidirectional webhook support makes WorkflowAutomation connectable to virtually any software that has an API, without requiring a pre-built integration.</p>

<h2>Common Use Cases</h2>

<h3>Employee Expense Approval Chain</h3>
<p>Without automation, expense approvals move at the speed of email — submitted, forgotten, chased, re-submitted, eventually approved days later. WorkflowAutomation replaces this with a structured approval chain: a form submission trigger captures the expense details, a condition node routes expenses under $200 to auto-approval and expenses over $200 to the relevant manager, the manager receives an email with an approve or reject link, and the submitting employee gets a confirmation either way. The entire sequence runs in minutes, not days. The run history log gives finance a complete record of every approval decision for month-end reconciliation.</p>

<h3>New Lead Assignment Automation</h3>
<p>When a lead comes in through a contact form, the first five minutes determine whether they convert or go cold. WorkflowAutomation triggers the moment a form is submitted: it creates a CRM record, assigns the lead to the next available sales rep using round-robin logic, sends the rep a Slack notification with the lead's details and a direct link to the record, and schedules a follow-up email to the lead within 15 minutes confirming their inquiry was received. No leads wait in a shared inbox. No assignments happen manually. The workflow runs 24 hours a day, including evenings and weekends when most inbound leads arrive.</p>

<div class="doc-tip">
  <strong>Tip:</strong> Before activating any production workflow, run it at least twice using the Test Run feature with different input scenarios — one that takes the true branch and one that takes the false branch of every condition node. A workflow that only passes one path in testing will eventually fail silently on the other. Five minutes of thorough testing prevents hours of diagnosing missed notifications or unprocessed records.
</div>

<h3>Invoice-to-Payment Follow-Up Sequence</h3>
<p>Collecting on outstanding invoices is one of the most time-consuming manual tasks for small business owners and operations managers. WorkflowAutomation automates the entire follow-up sequence: a Date and Time trigger checks daily for invoices past due, a condition node checks how many days overdue each invoice is, and the workflow sends a gentle first reminder at Day 3, a firmer second reminder at Day 10, and an escalation alert to the account manager at Day 21. Each email is personalized with the client name, invoice number, amount due, and a payment link. The sequence stops automatically when the invoice is marked paid, preventing awkward follow-ups to clients who have already paid.</p>

<p>For a detailed comparison of WorkflowAutomation against the major players in this space, see our <a href="/blog/zapier-vs-make-vs-n8n-workflow-automation-2026">Zapier vs Make vs n8n comparison guide</a>.</p>

<h2>Frequently Asked Questions</h2>

<div class="faq-item">
  <h3>What is a trigger and how do I choose the right one?</h3>
  <p>A trigger is the event that starts your workflow. Every workflow has exactly one trigger — it defines what has to happen in the world for your automation to begin. To choose the right trigger, start by finishing this sentence: "I want this workflow to run whenever ___." If the answer involves someone submitting a form, use a Form Submission trigger. If it should run on a schedule, use a Date and Time trigger. If it should react to a change in your data, use a Record Update trigger. If an external tool needs to kick it off, use a Webhook trigger. If you want to run it manually on demand, use a Manual Run trigger. When in doubt, start with a Manual Run trigger during development so you control exactly when the workflow fires while you are still configuring it.</p>
</div>

<div class="faq-item">
  <h3>What is the difference between a sequential workflow and a conditional workflow?</h3>
  <p>A sequential workflow runs the same actions every time, in the same order, regardless of the input data. Action A always runs, then Action B, then Action C. A conditional workflow evaluates a rule at one or more points and takes different actions based on what it finds. A condition node asks a yes/no question about the data — "Is the amount greater than $500?" or "Is the status equal to Approved?" — and then follows the true path or the false path accordingly. Most real business processes are conditional: small expenses are handled differently from large ones, new customers are treated differently from returning ones, approved requests flow differently from rejected ones. Start with sequential workflows to learn the canvas, then add condition nodes when you encounter a scenario that requires branching.</p>
</div>

<div class="faq-item">
  <h3>How do I test a workflow before activating it?</h3>
  <p>Click "Test Run" in the canvas toolbar. A panel opens where you can enter sample trigger data — fill in the fields that your trigger would normally receive from the real event. Click "Run Test" and watch the canvas highlight each node as the workflow executes step by step. When the run completes, the Run Log panel below the canvas shows the result of every action and condition: what input each node received, what decision was made, and whether it succeeded. If any step fails, the log shows the error message and the specific field value that caused the problem. Fix the configuration and run the test again. You can run tests as many times as needed before activating — test runs do not count against any limits and do not trigger real emails or notifications unless you specifically configure them to use live addresses.</p>
</div>

<div class="faq-item">
  <h3>How do I see if a workflow run failed and why?</h3>
  <p>Open the Run History tab and filter by the workflow name. Failed runs are shown with a red status badge. Click any failed run to open the trace view. The trace shows every node in execution order — successful steps are green, the failed step is red, and any steps that did not execute because of the failure are grey. The failed node entry shows the exact error message returned, the input data that was passed to the step, and a timestamp. Common failure reasons include a missing required field in the trigger payload, a malformed email address in a notification action, or a webhook endpoint that returned a non-200 response. The trace gives you everything you need to diagnose the issue, fix the workflow configuration, and re-run the failed instance manually without waiting for the next trigger event.</p>
</div>

<div class="faq-item">
  <h3>Can I connect WorkflowAutomation to external tools I already use?</h3>
  <p>Yes, through webhooks in both directions. For inbound connections — external tools triggering your workflows — use the Webhook trigger. Each workflow gets a unique HTTPS endpoint URL. Configure your external tool (a form platform, a CRM, a payment processor, a custom app) to POST a JSON payload to that URL whenever the relevant event occurs. WorkflowAutomation receives the payload, parses the fields automatically, and makes them available as dynamic variables throughout the workflow. For outbound connections — your workflow pushing data to an external tool — use the Webhook action and configure the target URL and payload. If the external tool requires specific authentication headers, you can add them in the action configuration. This covers the vast majority of integration scenarios without requiring a pre-built connector for every tool.</p>
</div>
`;
