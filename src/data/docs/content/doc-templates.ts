export const content = `
<div class="doc-lead">
  <p>
    DocTemplates is a free business document template library for small businesses that need
    a structured, centralized way to create, store, and share standardized documents — proposals,
    HR letters, financial reports, memos, policy documents, and more. PandaDoc ($19-49/month)
    bundles a template library inside a full e-signature and payment platform that most small
    teams pay for but rarely use fully; Notion offers flexible document creation but no version
    control, access management, or export-ready formatting; Google Docs provides no template
    governance or usage tracking across a team. DocTemplates gives you a purpose-built document
    template library: a categorized template browser, an in-browser editor with brand styling,
    fill-in variable fields, access control per template, version history, PDF and DOCX export,
    expiring share links, and template usage analytics — in a single tool designed for teams
    without a document operations function. This documentation covers template creation, the
    document editor, variable fields, access control, versioning, export, sharing, and
    usage analytics.
  </p>
</div>

<h2>Getting Started with DocTemplates</h2>
<ol class="doc-steps">
  <li>
    <strong>Set up your brand styling.</strong> Go to Settings → Brand and upload your company
    logo, set your primary brand color, and choose your preferred fonts (header and body).
    DocTemplates applies these settings to all new templates automatically, so every document
    your team creates starts with consistent branding without manual formatting on each file.
    Brand settings can be updated at any time and the change applies to all future documents
    created from templates.
  </li>
  <li>
    <strong>Create or import your first template.</strong> Go to Templates → New Template.
    Choose a starting point: start from one of the built-in templates organized by category
    (HR, Finance, Legal, Operations, Sales), start from a blank document, or upload a DOCX
    file to convert it into a DocTemplates template. Give the template a name, assign it to
    a category, and open the editor.
  </li>
  <li>
    <strong>Add variable fields.</strong> In the editor, highlight any text that should
    change when someone creates a document from this template — a recipient's name, a date,
    a project name, a dollar amount — and click Insert Variable. Name the variable (e.g.,
    Employee_Name, Contract_Date, Project_Budget). These placeholders become editable fill-in
    fields when a team member uses the template to create a document.
  </li>
  <li>
    <strong>Set template access control.</strong> Under Template Settings → Access, choose
    who can view, edit, or use this template: all workspace members, specific teams or
    departments, or specific named individuals. Restricting edit access to senior staff
    while allowing all employees to use (but not modify) a template is the most common
    configuration for HR and legal document types.
  </li>
  <li>
    <strong>Publish and share the template library link.</strong> Click Publish to make the
    template available to the users you have granted access. Share the DocTemplates workspace
    link with your team so they can browse the library, create documents from templates, and
    access their saved documents from a central location.
  </li>
</ol>

<h2>Core Features</h2>

<h3>Template Library Organized by Category</h3>
<p>
  The DocTemplates library organizes templates into six categories: HR (offer letters,
  termination letters, performance improvement plans, leave policies), Finance (expense
  reports, budget request forms, invoice templates, financial summary memos), Legal (NDAs,
  contractor agreements, service agreements, liability waivers), Operations (SOPs, meeting
  agendas, project briefs, vendor evaluation forms), Sales (proposals, quotes, partnership
  agreements, case study templates), and General (company memos, announcements, org charts).
</p>
<p>
  Within each category, templates are sorted by most recently used first, so the documents
  your team reaches for regularly float to the top of the list without any manual pinning.
  A search bar across the full library lets users find any template by name or keyword
  without knowing which category it belongs to. New templates added by administrators appear
  in the library immediately for all users with access.
</p>

<h3>In-Browser Document Editor with Brand Styling</h3>
<p>
  The DocTemplates editor is a full rich-text editor that runs in the browser with no
  plugin or software installation. It supports headings (H1 through H4), body text,
  bold, italic, underline, numbered and bulleted lists, tables, horizontal rules, and
  inline images. Your brand logo appears in the header of every new document by default,
  and your brand color is applied to heading styles automatically.
</p>
<p>
  The editor auto-saves to the cloud every thirty seconds and on every manual save. There
  is no risk of losing a document draft to a browser crash or accidental tab close —
  the most recent auto-save is always recoverable under Document → Restore Draft. Documents
  created from a template are independent of the template: editing a document does not
  modify the source template, and updating a template does not alter documents already
  created from it.
</p>

<h3>Fill-In Variable Fields</h3>
<p>
  Variable fields are the core productivity feature of DocTemplates. When a template author
  marks a text segment as a variable, that segment becomes a highlighted fill-in field every
  time someone creates a document from the template. Variables are named descriptively
  (Employee_Name, Start_Date, Annual_Salary, Project_Name) so the person filling in the
  document knows exactly what information belongs in each field.
</p>
<p>
  When a user opens a template to create a document, DocTemplates presents a fill-in panel
  listing all variables in the template with a text field for each. The user completes the
  panel and clicks Generate Document — all instances of each variable across the full
  document are replaced simultaneously, including anywhere the same variable appears multiple
  times (a name that appears in the header, body, and signature line, for example). No manual
  find-and-replace is needed. Variable field data is not stored after document generation —
  it exists only in the finished document.
</p>

<h3>Template Access Control</h3>
<p>
  Access control is configured per template under Template Settings → Access. Three permission
  levels are available for each user group: View Only (see the template in the library but
  cannot use it to create documents), Use (create documents from the template but cannot edit
  the template itself), and Edit (modify the template, add variables, update sections, and
  change settings). Most templates follow a pattern of Edit access for one or two administrators
  and Use access for the full team.
</p>
<p>
  Access can be assigned to entire departments, specific teams, or individual named users
  from your workspace member list. A legal NDA template, for example, might have Edit access
  for the general counsel and Use access for the sales team only — no other department sees
  it in their library view. Access changes take effect immediately without requiring a page
  reload for active users. Audit logs under Settings → Access Log record every template edit,
  document creation, and access change with a timestamp and the name of the user who performed
  the action.
</p>

<h3>Version History per Template</h3>
<p>
  Every time a template is saved after an edit, DocTemplates creates a version entry in the
  template's version history. The version history panel (Template Settings → Version History)
  shows a chronological list of all versions with the date, time, and name of the editor who
  made the change. Click any version to preview it side by side with the current version,
  with added text highlighted in green and removed text highlighted in red.
</p>
<p>
  Any previous version can be restored as the current template with a single click. The
  restored version becomes the new current version and a new history entry is created logging
  the restore action. Version history is retained indefinitely — there is no cap on the number
  of versions stored. This is particularly important for HR and legal templates where
  compliance requires demonstrating that the version of a document in use at a specific date
  was reviewed and approved. For more on
  <a href='/blog/how-to-write-standard-operating-procedures'>standardizing business documentation</a>,
  including how to build a document governance process your team will actually follow, see
  our SOP writing guide.
</p>

<h3>Document Export as PDF or DOCX</h3>
<p>
  Any document created from a template can be exported as a PDF or a DOCX file from the
  document editor toolbar. PDF export renders the document with full brand styling, logo
  header, and layout exactly as it appears in the editor — appropriate for final documents
  sent to clients, employees, or external parties. DOCX export produces a Word-compatible
  file that recipients can open, edit, and track changes on in Microsoft Word or Google Docs.
</p>
<p>
  Bulk export is available from the Documents library: select multiple documents using the
  checkbox column, click Export Selected, and choose PDF or DOCX. All selected files are
  packaged into a zip file and downloaded in a single action. Bulk export is useful for
  archiving a quarter's worth of signed documents, delivering multiple contract drafts to
  a client simultaneously, or migrating a document library to another system.
</p>

<h3>Document Sharing with Expiring Link</h3>
<p>
  Completed documents can be shared via a read-only link that does not require the recipient
  to have a DocTemplates account. Click Share in the document editor, choose the link expiry
  (no expiry, 7 days, 30 days, or a custom date), and copy the URL. The recipient opens the
  link in any browser and sees a formatted, read-only view of the document with your brand
  header intact.
</p>
<p>
  Expiring links are particularly useful for confidential documents — a termination letter
  shared with an HR reviewer or a contract draft shared with an outside counsel — where you
  want to control how long the document remains accessible outside your organization. Once a
  link expires, the URL displays an expiry message and the document is no longer viewable
  externally, even if the recipient bookmarked the URL. You can revoke a link before its
  expiry date from Document → Share → Revoke Link.
</p>

<h3>Template Usage Analytics</h3>
<p>
  The Analytics dashboard (accessible to workspace administrators under Settings → Analytics)
  shows how often each template is used, by whom, and when. The key metrics per template
  are: total documents created from this template, unique users who have used it, documents
  created this month versus the prior month, and the average time from template open to
  document export (a proxy for how easy the template is to fill in).
</p>
<p>
  Usage analytics identify which templates are driving the most value and which were added
  but never used — a signal to either promote an underused template to your team or archive
  it to keep the library clean. High-use templates with long fill-in times may benefit from
  additional variables that automate more of the repetitive content, which the analytics panel
  flags with a recommendation. Administrators can export the full analytics table as a CSV
  for inclusion in operational reporting.
</p>

<h2>Common Use Cases</h2>

<h3>Standardizing HR Documentation Across a Growing Team</h3>
<p>
  HR managers at companies growing from ten to fifty employees frequently encounter the
  problem of inconsistent documentation: offer letters drafted differently by each hiring
  manager, performance improvement plans that omit required legal language, and onboarding
  checklists that vary by department. DocTemplates solves this by centralizing all HR
  documents in a governed library where only HR can edit the master templates while all
  managers can use them. Every offer letter generated from the template includes the correct
  compensation disclosure language, benefits summary, and at-will employment clause, regardless
  of which manager creates it. Version history ensures that if employment law changes, the
  template can be updated once and all subsequent documents reflect the new language automatically.
</p>

<h3>Sales Proposal and Quote Standardization</h3>
<p>
  Sales teams using DocTemplates for proposals report faster document turnaround and more
  consistent brand presentation. The sales proposal template includes variable fields for
  client name, company, proposed solution, pricing, and timeline. A sales rep creating a
  proposal fills in the variable panel (typically ten to fifteen fields), clicks Generate
  Document, and has a fully branded, accurate proposal in under two minutes — compared to
  copying and editing a previous proposal manually, which averages fifteen to twenty minutes
  and introduces errors. The sharing link lets the rep send the proposal directly from
  DocTemplates without exporting, and the expiring link feature creates a soft urgency for
  the prospect to review before the link expires.
</p>

<h3>Cross-Departmental Document Governance</h3>
<p>
  Operations managers use DocTemplates to enforce document standards across multiple
  departments without a heavy approval workflow. Templates are the governance mechanism:
  finance uses the budget request template, operations uses the vendor evaluation template,
  and legal uses the NDA template — each with its own access settings ensuring only the
  right people can modify the master. The usage analytics dashboard gives the operations
  manager visibility into which documents are being created and whether the team is using
  the approved templates or working around them. When a regulatory change requires updating
  a legal template, the version history documents the change with a clear before-and-after
  for compliance audit purposes.
</p>

<div class="doc-tip">
  <strong>Tip:</strong> When creating a template with many variable fields, organize them
  into logical groups in the fill-in panel by naming them with a shared prefix — for example,
  Client_Name, Client_Company, Client_Email for client information fields, and Project_Name,
  Project_Start, Project_Budget for project fields. Grouped naming makes the fill-in step
  faster because users can complete related fields together rather than jumping between
  unrelated prompts.
</div>

<h2>Frequently Asked Questions</h2>

<div class="article-faq">
  <div class="faq-item">
    <h3>How do I create a new document template?</h3>
    <p>
      Go to Templates → New Template. On the creation screen, choose your starting point:
      select a built-in template from the category browser to start from a pre-formatted
      document relevant to your use case, click Blank Template to start from an empty editor,
      or click Import DOCX to upload an existing Word document and convert it into a DocTemplates
      template. Give the template a name and assign it to a category, then click Open Editor.
      In the editor, write or paste your document content and apply any formatting using the
      toolbar. Mark variable fields by highlighting the text you want to make editable and
      clicking Insert Variable in the toolbar, then giving the variable a descriptive name.
      When the template content is complete, go to Template Settings to configure access control
      and then click Publish to make it available to your team. Published templates appear in
      the library for all users with access immediately.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I use a template to create a document?</h3>
    <p>
      Open the DocTemplates library and browse or search for the template you want to use.
      Click Use Template on the template card. DocTemplates opens a fill-in panel listing all
      variable fields defined in the template — for example, Employee_Name, Start_Date, and
      Role_Title for an offer letter template. Complete each field with the specific information
      for this document. You can navigate between fields using Tab or by clicking directly.
      Once all required fields are filled in, click Generate Document. DocTemplates creates a
      new document with all variable placeholders replaced by the values you entered, applies
      your brand styling, and opens it in the editor for review. You can edit any part of the
      generated document before exporting or sharing — the document is fully editable and changes
      do not affect the source template. When the document is finalized, use the Export button
      to download as PDF or DOCX, or click Share to generate a shareable link.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I control who can access a template?</h3>
    <p>
      Open the template and go to Template Settings → Access. The Access panel shows three
      sections: Edit Access (users who can modify the template content, variables, and settings),
      Use Access (users who can create documents from the template but cannot edit it), and
      View Access (users who can see the template in the library but cannot use it to create
      documents). For each section, you can add individual workspace members by name or add
      entire departments or teams by group name. You can also set a default access level for
      all workspace members (Use Access is the most common default, meaning anyone in the
      workspace can use templates but not edit them unless specifically granted Edit Access).
      Changes to access take effect immediately — users gain or lose access to the template
      in the library within seconds of you saving the access settings. The audit log under
      Settings → Access Log records every access change with the administrator's name and
      timestamp for compliance documentation.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I export a completed document?</h3>
    <p>
      With the document open in the editor, click the Export button in the top toolbar. Choose
      your format: PDF produces a print-ready, formatted document with your brand logo header,
      consistent fonts and colors, and page numbering — appropriate for final documents sent
      outside the company. DOCX produces a Microsoft Word-compatible file that recipients can
      open and edit in Word or Google Docs — appropriate for documents that need further review
      and track-changes markup by a recipient. After selecting a format, the file downloads to
      your browser immediately. For bulk export, return to the Documents library, select multiple
      documents using the checkboxes on the left of each row, click Actions → Export Selected,
      and choose your format. The system packages all selected documents into a zip file and
      triggers a download. Bulk export is available for up to 100 documents per batch. Exported
      files use the document title as the filename, so keeping document titles descriptive
      (2026-05-Offer-Letter-Jane-Smith, for example) makes exported files easier to organize.
      See <a href='/tools/doc-templates'>DocTemplates</a> for the full library.
    </p>
  </div>

  <div class="faq-item">
    <h3>How does template versioning work?</h3>
    <p>
      Every time you save a template after making an edit, DocTemplates automatically creates
      a new version entry in the template's version history. No manual versioning action is
      required. To view the version history, open the template and go to Template Settings →
      Version History. The history list shows every version with its save date, save time, and
      the name of the editor who saved it. Click any version entry to open a side-by-side
      comparison of that version and the current version — added content appears with a green
      background, removed content appears with a red strikethrough, and unchanged content
      appears normally. If you need to revert to a previous version, click Restore This Version
      on the version you want to reinstate. The restored version becomes the new current template
      and a new version entry labeled "Restored from [date]" is added to the history so the
      restoration action is recorded. Documents already created from older template versions
      are not affected by restoring a template — they remain exactly as generated. Version
      history is retained permanently with no storage cap.
    </p>
  </div>
</div>
`;
