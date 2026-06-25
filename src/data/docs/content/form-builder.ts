export const content = `
<div class="doc-lead">
  <p>FormBuilder is a free online form builder with conditional logic for small businesses that need to collect leads, run surveys, manage registrations, and gather internal data without paying Typeform ($25-83/mo) or Jotform ($34-99/mo). It delivers the branching logic and multi-page flow of paid platforms at zero cost, with no account required to publish. FormBuilder supports drag-and-drop field editing, automatic email notifications on submission, a real-time response dashboard, and one-click embed code for any website or landing page. Unlike Google Forms, which offers no conditional branching and no spam protection, FormBuilder lets you build smart forms that adapt to each respondent's answers in real time. This documentation covers setup, all eight core features, common use cases across sales, HR, and marketing teams, and answers the most frequent questions about embedding, exports, and conditional logic.</p>
</div>

<h2>Getting Started with FormBuilder</h2>
<ol class="doc-steps">
  <li><strong>Open the drag-and-drop editor.</strong> Click "Build a Form" from the FormBuilder dashboard. The editor opens with a blank canvas and a field panel on the left. Drag any field type — text input, dropdown, checkbox group, date picker, file upload, or signature — onto the canvas. Fields stack in the order you drop them and can be reordered by dragging the handle on the left side of each field row.</li>
  <li><strong>Configure each field's settings.</strong> Click any field to open its settings panel on the right. Set the field label, placeholder text, whether the field is required, and any validation rules (minimum length, accepted file types, date range). For dropdown and checkbox fields, type each answer option directly in the settings panel. Add a help text line beneath a field to guide respondents without cluttering the label.</li>
  <li><strong>Add conditional logic rules.</strong> Select a field and click the "Logic" tab in its settings panel. Set a rule: "Show this field when [Field Name] [equals / contains / is not] [value]." You can chain multiple conditions with AND or OR. Fields with active logic rules display a branching icon on the canvas so you can see at a glance which fields are conditional. Test the logic in Preview mode before publishing.</li>
  <li><strong>Set up notifications and the thank-you page.</strong> Go to Form Settings and enter the email address where submission alerts should be sent. Optionally add a subject line and a custom body that includes field merge tags (e.g., "New lead from {{First Name}}"). In the Confirmation tab, choose between a thank-you message displayed on-screen or a redirect URL that sends the respondent to your booking page, pricing page, or a downloadable resource.</li>
  <li><strong>Publish and embed the form.</strong> Click "Publish" to generate the form URL and embed code. Share the direct link in email campaigns, social posts, or QR codes. Paste the iframe embed snippet into any website HTML — WordPress, Webflow, Squarespace, or a raw HTML page. The form is mobile-responsive by default and renders correctly on screens from 320px wide upward. No JavaScript dependencies need to be loaded separately.</li>
</ol>

<h2>Core Features</h2>

<h3>Drag-and-Drop Field Editor</h3>
<p>The field editor supports eight field types: single-line text, paragraph text, dropdown select, checkbox group, radio button group, date picker, file upload (PDF, image, or document), and signature capture. Fields are added by dragging from the left panel or clicking the plus icon between existing fields.</p>
<p>Each field has a full settings panel covering label, placeholder, required toggle, validation rules, and conditional visibility. Reordering fields takes one drag. Duplicating a field with its settings intact takes one click. The editor autosaves every 30 seconds so partial work is never lost if the browser closes unexpectedly.</p>

<h3>Conditional Logic (Show/Hide Fields Based on Answers)</h3>
<p>Conditional logic lets the form adapt to each respondent in real time. Set rules on any field so it appears only when a previous answer matches a condition — for example, show a "Company Size" dropdown only when "Are you a business?" is answered "Yes," or reveal an address block only when a specific service type is selected.</p>
<p>Rules support equals, does not equal, contains, and is empty operators. Multiple conditions on one field can be combined with AND (all must match) or OR (any must match). Logic chains can span multiple dependent fields, so a single answer early in the form can cascade to show or hide three separate sections later. Preview mode runs the live logic so you can walk through every branch before publishing.</p>

<h3>Multi-Page Forms with Progress Bar</h3>
<p>Long forms — intake questionnaires, job applications, event registrations — convert better when split across pages. The page break control divides the form into numbered pages, and a progress bar at the top of the form shows respondents how far they have advanced. Page transitions are instant with no full-page reload.</p>
<p>Validation runs page by page: required fields on the current page must be completed before the "Next" button activates, preventing respondents from submitting incomplete data. You can set a custom label for each page (e.g., "About You," "Project Details," "Review") that appears in the progress bar. Respondents can navigate back to previous pages to edit their answers before final submission.</p>

<h3>Email Notifications on Submission</h3>
<p>Every form submission triggers an immediate email alert to the address configured in Form Settings. The notification email includes all submitted field values formatted as a readable list, the submission timestamp, and a direct link to view the full response in the dashboard. Merge tags let you personalize the subject line with the respondent's name or company.</p>
<p>Multiple notification recipients are supported — useful when a lead form submission should alert both the sales rep and the marketing manager simultaneously. You can also configure a separate auto-reply email sent to the respondent upon submission, confirming receipt and setting expectations for next steps. Auto-reply content supports the same merge tags as admin notifications.</p>

<h3>Response Dashboard with CSV Export</h3>
<p>All form submissions appear in the Response Dashboard in real time. Each response row shows the submission timestamp, a preview of key fields, and an expand button to view the full response. Responses can be filtered by date range, searched by keyword, or sorted by any field column.</p>
<p>Click "Export CSV" to download all responses as a spreadsheet-ready file with one column per field and one row per submission. File upload fields export as links to the stored files. The export includes a submission ID column for deduplication and a timestamp column in ISO 8601 format for easy date parsing in Excel or Google Sheets. Exports can be scoped to a date range or the full response history.</p>

<h3>Custom Thank-You Page and Redirect</h3>
<p>After submission, respondents see either an on-screen confirmation message or are redirected to a URL of your choice. The on-screen message supports rich text: headers, bullet points, bold text, and hyperlinks. Use it to confirm receipt, set timeline expectations, and link to a next step such as scheduling a call or downloading a resource.</p>
<p>The redirect option sends respondents to any URL — your booking page, a gated download, a paid product page, or a "thank you" page built in your CMS. Redirect URLs support query string appending so you can pass the respondent's email or form submission ID to the destination page for tracking. This is especially useful for connecting FormBuilder submissions to Google Analytics conversion goals without a server-side integration.</p>

<h3>Embed Code for Any Website</h3>
<p>FormBuilder generates a standard iframe embed snippet that works on any website that allows HTML editing. The snippet is a single self-contained iframe tag — no external JavaScript, no CSS conflicts, no third-party cookies. Paste it into a WordPress page using the HTML block, into a Webflow embed element, into a Squarespace code block, or directly into any raw HTML file.</p>
<p>The iframe auto-resizes vertically to fit the form content as conditional fields appear and disappear. A fixed-height option is also available for layouts where the container size cannot flex. For landing page use, a full-width option removes the iframe border and background so the form blends seamlessly into the surrounding page design. Popup embed is available for lead capture overlays triggered by a button click.</p>

<h3>Spam Protection with Honeypot Field</h3>
<p>FormBuilder includes a honeypot spam filter enabled by default on every published form. A hidden field invisible to human visitors is added to the form HTML. Automated bots that fill all fields will populate the honeypot, and FormBuilder silently discards those submissions without returning an error — preventing bots from detecting the filter and adapting.</p>
<p>For higher-volume forms exposed in public locations, an optional time-based submission check flags responses submitted in under three seconds, which indicates bot activity rather than human completion. Both filters run server-side and require no CAPTCHA image puzzle that frustrates legitimate respondents. Blocked submissions are logged separately in the dashboard so you can review them without cluttering your real response data.</p>

<h2>Common Use Cases</h2>

<h3>Lead Capture Forms for Marketing Campaigns</h3>
<p>Marketing teams use FormBuilder to build lead capture forms for ad campaigns, content downloads, webinar registrations, and landing pages. Conditional logic qualifies leads in the form itself: show a "Budget" dropdown only when "Are you ready to buy in the next 90 days?" is answered "Yes," and route budget-qualified leads to a calendar embed on the thank-you page. Form responses feed directly into a CRM via CSV export or through <a href="/blog/zapier-vs-make-vs-n8n-workflow-automation-2026">connecting forms to automation workflows</a>. This approach replaces Typeform at a fraction of the cost for teams running fewer than 10,000 submissions per month.</p>

<h3>Internal HR and Operations Data Collection</h3>
<p>HR and operations teams use FormBuilder for internal data collection: equipment request forms, PTO exception requests, incident reports, vendor evaluation surveys, and new hire information collection before Day 1. Multi-page layout keeps long internal forms organized. File upload fields let employees attach supporting documents — receipts, photos, signed PDFs — directly in the form rather than in a separate email. Responses land in the shared dashboard where the relevant team member can action them, with email notification ensuring nothing sits unreviewed. Visit <a href="/tools/form-builder">FormBuilder</a> to see the full interactive demo.</p>

<h3>Customer Surveys and Feedback Collection</h3>
<p>Small businesses use FormBuilder to run post-purchase surveys, NPS follow-ups, event feedback forms, and client satisfaction questionnaires. Conditional logic makes surveys feel conversational: a low satisfaction rating reveals follow-up questions about what went wrong, while a high rating reveals a referral ask. The progress bar reduces abandonment on longer surveys by showing respondents how close they are to finishing. CSV export makes it simple to analyze response trends in Excel or to share results with leadership without requiring a dedicated survey analytics platform.</p>

<div class="doc-tip">
  <strong>Tip:</strong> For lead capture forms, place your most qualifying question on page one and keep the email field on page two. Respondents who answer the first question are significantly more likely to complete the second page — this technique alone can lift form completion rates by 20-35% compared to showing all fields on one page.
</div>

<h2>Frequently Asked Questions</h2>

<div class="article-faq">

<div class="faq-item">
  <h3>How do I add conditional logic to a form field?</h3>
  <p>Select the field you want to show or hide conditionally and click the "Logic" tab in its right-side settings panel. Click "Add Rule" and set three values: the source field whose answer will trigger the rule, the condition operator (equals, does not equal, contains, is empty), and the value to match. Once saved, the field will only appear when the condition is met during form completion. You can add multiple rules to one field and combine them with AND (all conditions must be true) or OR (any condition is sufficient). To test your logic, click "Preview" in the top bar and work through the form as a respondent would. The Preview mode runs the live conditional logic so every branch is visible before you publish. Fields with active logic rules show a small branch icon in the canvas editor so you can identify conditional fields at a glance without opening each one.</p>
</div>

<div class="faq-item">
  <h3>How do I embed a form on my website?</h3>
  <p>After publishing your form, go to the "Share" tab and click "Embed Code." You will see a standard iframe snippet — copy the entire snippet including the opening and closing iframe tags. In WordPress, add an HTML block to your page and paste the snippet. In Webflow, use an Embed element in the Designer. In Squarespace, use a Code block in any page section. In any raw HTML file, paste the snippet directly inside the body. The iframe is self-contained: it loads the form styles and logic internally and does not require you to add any separate script or stylesheet to your page. The embed auto-resizes vertically as conditional fields appear and disappear, so the surrounding page layout adjusts naturally. If your site uses a content security policy that restricts iframes, you may need to add the FormBuilder domain to your frame-src allowlist in your CSP header.</p>
</div>

<div class="faq-item">
  <h3>How do I view and export form responses?</h3>
  <p>All submissions appear in the Response Dashboard, accessible from the main FormBuilder menu. Each row in the dashboard shows the submission timestamp and a preview of the first three fields. Click any row to expand the full response with all field values displayed as a labeled list. To export, click the "Export CSV" button in the top-right corner of the Response Dashboard. The CSV includes one column per form field, one row per submission, plus a submission ID column and a timestamp column. Use the date-range filter before exporting to scope the export to a specific period — useful for monthly reporting or for pulling leads generated during a specific campaign. File upload fields export as direct URLs to the uploaded files rather than embedding the files in the CSV. The export file opens cleanly in Excel, Google Sheets, or any CSV-compatible tool.</p>
</div>

<div class="faq-item">
  <h3>How do I set up email notifications when someone submits the form?</h3>
  <p>Go to Form Settings and open the "Notifications" tab. Enter the recipient email address in the "Notify" field — you can add multiple addresses separated by commas to alert several team members simultaneously. Set a custom subject line using merge tags to include submission data: for example, "New lead from {{First Name}} at {{Company}}" will personalize each alert automatically. The notification body defaults to a full list of all submitted field values, but you can customize it to highlight only the fields most relevant to your workflow. To send a confirmation email back to the respondent, enable "Auto-reply," enter the respondent's email field as the reply-to address, and write a custom confirmation message. Both the admin notification and the auto-reply fire immediately on submission with no delay. Test both by submitting the form yourself before directing live traffic to it.</p>
</div>

<div class="faq-item">
  <h3>How do I create a multi-page form with a progress bar?</h3>
  <p>In the form editor, drag the "Page Break" element from the field panel onto the canvas between the fields where you want the page to split. Each page break creates a new page in the form flow. The progress bar appears automatically at the top of the form once at least one page break is added — you do not need to enable it separately. To label each page (for example, "Step 1: Contact Info" or "Step 2: Project Details"), click the page break divider on the canvas and enter a page title in the settings panel. The title appears in the progress bar so respondents know what each section covers. Required field validation runs page by page: respondents cannot advance to the next page until all required fields on the current page are completed. You can reorder pages by dragging the page break dividers up or down in the canvas, which moves all fields between the dividers as a group.</p>
</div>

</div>
`;
