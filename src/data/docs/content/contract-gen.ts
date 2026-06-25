export const content = `
<div class='doc-lead'>
  <p>
    ContractGen is a free contract generation software and e-signature tool for small businesses,
    freelancers, and agencies that eliminates the cost and delay of paid platforms like DocuSign
    ($10-45/month) and PandaDoc ($19-49/month). Most small business owners draft contracts in Word,
    email them as attachments, chase clients for wet signatures, and manually file the returned PDFs
    in a shared drive. ContractGen replaces that workflow with a purpose-built contract management
    system: select a vetted template, customize it with a drag-and-drop clause builder, send a secure
    signing link to your client, and receive a countersigned PDF with a full audit trail — all in one
    place. This documentation covers everything from setting up your first template to managing a
    multi-user team library, sending contracts for signature, and tracking unsigned agreements through
    automatic reminders.
  </p>
</div>

<h2>Getting Started with ContractGen</h2>
<ol class='doc-steps'>
  <li>
    <strong>Choose a template from the library.</strong> ContractGen includes ready-to-use templates
    for the most common small business agreements: NDA (mutual and one-way), service agreement,
    statement of work, independent contractor agreement, and client retainer. Open the template that
    matches your use case and review the pre-filled standard clauses. Each template was drafted with
    common business scenarios in mind, though you should have an attorney review any agreement before
    relying on it for high-value engagements.
  </li>
  <li>
    <strong>Customize clauses with the drag-drop builder.</strong> Add, remove, reorder, or rewrite
    individual clauses without touching the entire document. The clause library includes optional
    blocks for intellectual property ownership, payment terms, late fee provisions, non-compete
    language, and dispute resolution. Drag the clauses you need into the document, drop the ones
    that do not apply, and edit the text directly in the inline editor. Formatting is preserved
    automatically.
  </li>
  <li>
    <strong>Fill in the contract variables.</strong> Variable fields — client name, project scope,
    payment amount, start date, and governing state — are highlighted in the template. Fill them
    in through the sidebar form and the values populate throughout the document instantly. For
    recurring client types, save a filled template as a preset to speed up future contracts.
  </li>
  <li>
    <strong>Send the contract for signature.</strong> Enter the client's email address and an
    optional personal message, then click Send for Signature. The client receives an email with
    a branded signing link. They open the contract in their browser, review all pages, and sign
    using a typed, drawn, or uploaded signature — no account creation required. You receive an
    email notification when the client signs.
  </li>
  <li>
    <strong>Download and file the countersigned PDF.</strong> After both parties have signed,
    ContractGen generates a finalized PDF with embedded e-signature certificates and a full
    audit trail (IP addresses, timestamps, email verifications). Download the PDF for your
    records, share it with your client, or let ContractGen store it in the contract history
    panel for future retrieval.
  </li>
</ol>

<h2>Core Features</h2>

<h3>Template Library</h3>
<p>
  The template library covers the agreements small businesses use most frequently: NDA (both
  mutual and one-way variants), master service agreement, project-based statement of work,
  independent contractor agreement, and monthly retainer contract. Each template is structured
  with clearly labeled sections so you can navigate directly to the clause you need to edit
  rather than reading from top to bottom.
</p>
<p>
  Templates include jurisdiction-aware language for common governing-law clauses. Select your
  state from the contract settings and ContractGen inserts the appropriate arbitration and
  dispute resolution language for that jurisdiction. You can override the default language
  with your own text at any time.
</p>

<h3>Drag-Drop Clause Builder</h3>
<p>
  The clause builder treats a contract as a structured collection of modular blocks rather
  than a single locked document. Each clause is a draggable card you can reposition within
  the document, expand to edit, duplicate for parallel provisions, or delete entirely. The
  clause library includes over 40 pre-written optional blocks covering intellectual property,
  confidentiality, indemnification, warranties, force majeure, and termination scenarios.
</p>
<p>
  Custom clauses you write are saved to your personal clause library and available for reuse
  across all future contracts. Teams on shared accounts see the full team clause library, so
  institutional knowledge about contract language is captured once and reused consistently
  rather than rewritten differently by each team member each time.
</p>

<h3>E-Signature with Audit Trail</h3>
<p>
  ContractGen's e-signature meets the requirements of the U.S. Electronic Signatures in Global
  and National Commerce Act (ESIGN) and the Uniform Electronic Transactions Act (UETA). Each
  signature event captures the signer's name, email address, IP address, browser user agent,
  and a precise timestamp. Signers can apply their signature by typing their name in a
  signature font, drawing with a trackpad or touchscreen, or uploading an image of their
  handwritten signature.
</p>
<p>
  The completed PDF embeds a certificate of completion page at the end of the document showing
  all signature events in chronological order. This audit trail is the evidentiary record that
  makes the agreement enforceable. Store the signed PDF — ContractGen retains a copy in your
  account history, but downloading your own backup is recommended for contracts above $5,000
  in value.
</p>

<h3>Client Signing Portal (No Account Required)</h3>
<p>
  When you send a contract for signature, the client receives a unique, time-limited link
  that opens the complete contract in a clean, mobile-friendly signing interface. Clients
  do not need to create a ContractGen account, download an app, or install any software.
  They review the document, click the signature fields on each required page, apply their
  signature, and submit. The entire process typically takes under five minutes.
</p>
<p>
  The signing portal is branded with your business name and logo so clients see a professional
  experience consistent with your other client-facing communications. You can configure the
  portal header color and add a short message that appears above the contract before the client
  begins reviewing.
</p>

<h3>Automatic Reminders for Unsigned Contracts</h3>
<p>
  When a contract has been sent but not signed, ContractGen automatically sends reminder emails
  to the client at configurable intervals. The default schedule sends a reminder 3 days after
  the initial send, a second reminder at 7 days, and a final reminder at 14 days. Each reminder
  includes the original signing link so the client does not need to search for the first email.
</p>
<p>
  You can customize the reminder timing, the email subject line, and the reminder message body
  per contract. From the contract list, the Pending Signature status badge shows how many days
  each contract has been awaiting signature so you can identify the highest-priority follow-ups
  at a glance. Disable reminders for any individual contract if you prefer to follow up manually.
</p>

<h3>Version Tracking</h3>
<p>
  Every time you edit a contract draft, ContractGen saves the previous version automatically.
  The version history panel shows each saved version with the date, time, and the name of the
  team member who made the change. Click any version to preview it side by side with the current
  draft and identify what changed. Restore a prior version at any time before the contract is
  sent for signature.
</p>
<p>
  For contracts that go through multiple negotiation rounds, version tracking lets you maintain
  a clean record of what each party proposed and accepted at each stage. If a client requests
  a change to a clause, make the edit, save a new version, and resend the updated contract
  for signature — the version history preserves the full negotiation record.
</p>

<h3>PDF Export</h3>
<p>
  Export any contract draft or signed contract as a PDF at any point in the workflow. Draft
  PDF exports include a visible watermark indicating the document has not yet been executed.
  Signed PDF exports include the embedded audit trail and are watermark-free. PDF output
  preserves all formatting, heading hierarchy, numbered lists, and signature blocks exactly
  as they appear in the editor.
</p>
<p>
  Use draft PDF export to share a contract for review before sending the official signing
  link — some clients prefer to review a PDF before committing to the signing portal. Once
  feedback is incorporated, send the official link from ContractGen. Do not use a draft PDF
  for the actual execution step, as exported drafts do not carry the audit trail required
  for enforceability.
</p>

<h3>Team Template Sharing</h3>
<p>
  When multiple team members handle contracts — sales reps sending service agreements, account
  managers sending retainer renewals, legal reviewing NDAs — consistency across the team's
  documents matters. ContractGen's team library makes every saved template, clause, and preset
  available to all team members in the account. A change made to a shared template propagates
  to all future contracts created from that template.
</p>
<p>
  Permissions control who can edit shared templates versus who can only use them. Assign
  Editor access to the team members responsible for maintaining contract language, and
  Viewer/Use access to team members who should apply templates without modifying the
  underlying clauses. See also the <a href='/blog/how-to-write-standard-operating-procedures'>writing
  business process documentation guide</a> for structuring the internal workflow around who
  reviews contracts before they are sent.
</p>

<h2>Common Use Cases</h2>

<h3>Freelancer Sending a Project Contract</h3>
<p>
  A freelance web designer working with a new client starts with the project-based statement
  of work template. They fill in the project scope, deliverables, milestone payment schedule,
  and revision limit in the variable fields. They add a custom intellectual property clause
  from their personal clause library specifying that full IP transfers upon final payment.
  They send the contract to the client with a 7-day signing deadline. When the client signs,
  the designer receives an email confirmation, downloads the countersigned PDF, and invoices
  for the first milestone. The whole setup takes under 15 minutes for a new client and under
  5 minutes for a returning client using the saved preset.
</p>

<h3>Agency Managing NDAs for New Business Pitches</h3>
<p>
  A marketing agency requires a mutual NDA before sharing proprietary strategy work with
  prospective clients during new business pitches. ContractGen's mutual NDA template is
  configured once with the agency's standard confidentiality period, governing state, and
  permitted disclosure carve-outs. Each time a new business pitch begins, the account manager
  fills in the prospect's legal entity name and contact, sends the NDA, and the prospect signs
  within the portal without creating an account. Signed NDAs are stored in the contract history
  panel organized by client name, eliminating the shared-drive filing problem that causes
  agreements to be lost. Learn more about managing the full client relationship at
  <a href='/tools/contract-gen'>ContractGen</a>.
</p>

<h3>Small Business Formalizing Contractor Relationships</h3>
<p>
  A small e-commerce business works with four independent contractors — a photographer,
  a copywriter, a developer, and a bookkeeper — but has been operating on verbal agreements
  and informal email threads. The owner uses ContractGen's independent contractor agreement
  template, customizes it with a work-for-hire IP clause and a non-solicitation provision,
  and sends it to each contractor. Automatic reminders surface the two contractors who have
  not signed after five days. Within two weeks, all four contractors are under formal
  agreements, and the documents are stored with timestamps for any future dispute reference.
</p>

<div class='doc-tip'>
  <strong>Tip:</strong> Save your most-used contract configurations as named presets before
  sending your first live contract. A preset stores the template selection, your standard
  clauses, your variable defaults, and your reminder schedule so future contracts for similar
  engagements take under two minutes to prepare and send, not fifteen.
</div>

<h2>Frequently Asked Questions</h2>

<div class='article-faq'>
  <div class='faq-item'>
    <h3>How do I create a contract from a template?</h3>
    <p>
      Navigate to the Templates tab and click the template that matches your contract type —
      NDA, service agreement, statement of work, contractor agreement, or retainer. Click
      'Use This Template' to open it in the contract editor. The template loads with standard
      clause blocks already arranged in the correct order. Work through the variable sidebar
      on the right: fill in the client name, your business name, project details, payment
      terms, start and end dates, and governing state. Variable values populate throughout
      the document automatically. Use the clause builder to add, remove, or reorder blocks
      until the contract reflects your specific engagement. Save a draft, preview it, and
      when you are satisfied with the content, proceed to the Send for Signature step. The
      entire process from template selection to sending typically takes 10-15 minutes for
      a new contract type and under 5 minutes once you have a saved preset.
    </p>
  </div>

  <div class='faq-item'>
    <h3>How do e-signature audit trails work?</h3>
    <p>
      When a signer opens the contract portal link and completes their signature, ContractGen
      records a signature event containing the signer's full name as entered, their email address,
      the IP address of the device used to sign, the browser and operating system, and a precise
      UTC timestamp. The same data is recorded for every signing party, including your own
      countersignature if required. When the contract is fully executed, these events are
      embedded into the completed PDF as a certificate of completion page appended to the end
      of the document. The certificate is cryptographically linked to the document content —
      any post-signing modification to the document body breaks the certificate, providing
      tamper evidence. Store signed PDFs in a secure location. ContractGen retains copies
      in your account history, but maintaining an independent backup is recommended for
      agreements above $5,000 in value or with multi-year terms.
    </p>
  </div>

  <div class='faq-item'>
    <h3>Can clients sign without creating an account?</h3>
    <p>
      Yes. Clients never need to create a ContractGen account, download an app, or install
      any browser extension to sign. When you send a contract, the client receives an email
      from ContractGen containing a unique, time-limited signing link. Clicking the link opens
      the contract directly in their browser — desktop or mobile — in a clean reading and
      signing interface. They review the full document, click each signature or initial field,
      apply their signature using one of three methods (type, draw, or upload), and click
      Submit. The system records their email address and IP address as part of the audit trail
      without requiring login credentials. The signing link expires after 30 days by default;
      you can adjust the expiry window per contract in the sending settings.
    </p>
  </div>

  <div class='faq-item'>
    <h3>How do I send a contract for signature?</h3>
    <p>
      After finalizing the contract content in the editor, click 'Send for Signature' in the
      top right of the editor toolbar. A sending panel opens where you enter the recipient's
      name and email address. If the contract requires signatures from multiple parties —
      for example, a mutual NDA where both sides sign — add each signer as a separate
      recipient and specify the signing order (simultaneous or sequential). Add an optional
      personal message that appears in the email above the signing link. Set the signing
      deadline (the link expiry date) and configure the automatic reminder schedule. Click
      Send. Each recipient receives an email from ContractGen with the link to their signing
      portal. You can track signing status in real time from the contract list — the status
      badge shows Sent, Partially Signed (some but not all signers complete), or Fully Executed.
    </p>
  </div>

  <div class='faq-item'>
    <h3>What contract types are supported?</h3>
    <p>
      ContractGen's built-in template library covers five core agreement types used by the
      majority of small businesses and freelancers: the non-disclosure agreement (NDA) in
      both mutual and one-way variants; the master service agreement (MSA) for ongoing client
      relationships; the project-based statement of work (SOW) for scoped deliverables; the
      independent contractor agreement for 1099 engagements; and the client retainer agreement
      for recurring monthly service relationships. Beyond the built-in templates, you can
      create any contract type from scratch using the blank document editor and save it as a
      custom template in your library. Custom templates support the same clause builder,
      variable fields, e-signature, and reminder features as built-in templates. Common
      custom templates created by ContractGen users include photography licensing agreements,
      consulting engagement letters, vendor supply agreements, and influencer partnership terms.
    </p>
  </div>
</div>
`;
