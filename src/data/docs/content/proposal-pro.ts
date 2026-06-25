export const content = `
<div class='doc-lead'>
  <p>
    ProposalPro is a free business proposal software and proposal builder for small business
    sales teams, freelancers, and agencies that eliminates the hours spent writing proposals
    from scratch in Google Docs. Platforms like Proposify ($49-590/month), Better Proposals
    ($19-49/month), and Qwilr ($35-59/month) charge significant monthly fees for functionality
    that most small teams use only a fraction of. ProposalPro gives you the core capabilities
    that win business — AI-generated content from a client brief, professional templates,
    interactive pricing tables, e-signature integration, and real-time open tracking — without
    a per-seat subscription. This documentation covers how to create your first proposal,
    use the AI content generator, set up interactive pricing, track client engagement, and
    manage team collaboration on proposals in progress.
  </p>
</div>

<h2>Getting Started with ProposalPro</h2>
<ol class='doc-steps'>
  <li>
    <strong>Create a new proposal from a template or from scratch.</strong> Click 'New Proposal'
    from the dashboard and either select a template from the library (retainer, project-based,
    SaaS, consulting, or agency-specific formats) or start with a blank canvas. Templates
    pre-populate the standard proposal sections — cover page, executive summary, scope of work,
    pricing, timeline, and about us — so the structure is ready before you write a single word.
    Name the proposal with the client name and project type for easy retrieval later.
  </li>
  <li>
    <strong>Run the AI content generator on your client brief.</strong> In the AI Content panel,
    paste or type a brief description of the client, their problem, and the solution you are
    proposing. The AI generates draft content for the executive summary, problem statement, and
    proposed approach sections based on your input. Review each generated section, accept it as
    written, edit it, or regenerate with a more detailed brief. Use the generated content as a
    starting point — personalize it with client-specific details before sending.
  </li>
  <li>
    <strong>Build the pricing table.</strong> Add the services or products you are proposing in
    the Pricing section. Each line item includes a name, description, quantity, unit price, and
    optional toggle for the client to add or remove. Set your currency, tax rate, and any discount.
    The pricing table updates totals dynamically. Mark specific line items as optional so clients
    can configure their own package within your proposal — this is the interactive pricing feature
    that consistently increases average deal size.
  </li>
  <li>
    <strong>Send the proposal via link or PDF.</strong> When the proposal is complete, click Send.
    Deliver it as a web link (recommended — enables open tracking and interactive pricing) or
    export it as a PDF for clients who prefer a document attachment. The web link version opens in
    the client's browser with full formatting, interactive pricing, and the e-signature block.
    Add an optional cover note that appears on the proposal landing page before the client begins
    reading.
  </li>
  <li>
    <strong>Monitor engagement and follow up at the right moment.</strong> ProposalPro notifies
    you when the client opens the proposal for the first time. The analytics panel shows how many
    times the proposal was opened, which sections the client spent the most time on, whether they
    interacted with the pricing table, and whether they scrolled past the signature block.
    Use this data to time your follow-up call — a client who spent four minutes on the pricing
    section and two minutes on the timeline is ready for a pricing conversation, not a product
    overview.
  </li>
</ol>

<h2>Core Features</h2>

<h3>AI Content Generation</h3>
<p>
  The AI content generator turns a brief client description into structured proposal sections.
  Provide the client's industry, their stated problem, your proposed solution, and the primary
  outcome you are promising. ProposalPro generates draft text for the executive summary, the
  problem statement, the proposed approach, and the why-us section — the four most time-consuming
  sections to write from scratch. Each generated section is independent, so you can accept some
  and regenerate others without losing progress.
</p>
<p>
  The generator uses your saved proposal history to match tone and format to your previous
  accepted work. After you have sent three or more proposals, the AI learns what language you
  keep versus what you rewrite, and adjusts its output toward your editing patterns. Generated
  content is always a draft — review every section for accuracy, client specificity, and your
  business voice before sending.
</p>

<h3>Proposal Template Library</h3>
<p>
  ProposalPro ships with templates organized by business type: agency templates (digital marketing,
  creative, SEO, PPC), consulting templates (strategy, operations, fractional CFO), software
  templates (SaaS retainer, custom development, implementation services), and professional services
  templates (legal, accounting, HR consulting). Each template arranges the proposal sections in the
  order that converts best for that business type based on common sales practices.
</p>
<p>
  Save any customized proposal as a new template for future reuse. Agencies and sales teams that
  frequently pursue similar types of work save time by maintaining a portfolio of tailored templates
  — one for each service line — so new proposals start 80% complete and require only
  client-specific customization.
</p>

<h3>Interactive Pricing Tables</h3>
<p>
  Standard proposal pricing is a static table the client can only read. ProposalPro's interactive
  pricing tables let clients toggle optional line items on or off and select from tiered service
  packages, with the total updating in real time as they configure their selection. This transforms
  the proposal from a take-it-or-leave-it document into a self-service configuration experience
  that gives clients agency over the engagement scope.
</p>
<p>
  Mark individual line items as optional to let clients add or remove them. Create package tiers
  (Basic, Standard, Premium) using the package toggle feature — clients see each package side by
  side and select the one that fits. ProposalPro logs which line items the client toggled and
  which package they selected in the analytics panel, giving you precise insight into client
  priorities before your follow-up call.
</p>

<h3>E-Signature Integration</h3>
<p>
  ProposalPro includes an e-signature block that can be added to the end of any proposal. The
  client reviews the full proposal, then clicks the signature field to apply their signature
  using a typed or drawn method. Signature events are recorded with the signer's name, email,
  IP address, and timestamp — the same evidentiary standard as standalone e-signature tools.
  Both parties receive an email confirmation with the signed proposal attached as a PDF.
</p>
<p>
  Using ProposalPro's built-in signature eliminates the need to export the proposal, upload it
  to a separate e-signature tool, and send another link. The client approves and signs in a
  single session within the proposal web view. For complex agreements requiring lawyer-reviewed
  contract language, you can pair ProposalPro (for the commercial proposal) with
  <a href='/tools/contract-gen'>ContractGen</a> (for the formal service agreement) to keep
  each document focused on its purpose.
</p>

<h3>Proposal Analytics (Open Tracking and Section Time)</h3>
<p>
  When you send a proposal as a web link, ProposalPro tracks every client interaction with the
  document: the exact time the proposal was first opened, the total number of views, the time
  spent on each named section, whether interactive pricing was engaged, and whether the client
  reached the signature block. You receive a push notification the moment the proposal is opened
  for the first time.
</p>
<p>
  Section-level time data tells you where the client is focused. A client spending disproportionate
  time on your About Us section may need more credibility signals in your follow-up. A client who
  skips the scope section but reads the pricing section three times is likely comparing your price
  to a competitor — be ready with your value justification. Proposals sent as PDFs do not generate
  analytics data; use the web link for client-facing delivery whenever possible.
</p>

<h3>Client Approval Workflow</h3>
<p>
  Beyond the signature block, ProposalPro supports a formal approval workflow for teams that
  require multiple sign-offs before an engagement begins. Add approval recipients beyond the
  primary signer — for example, both the department head and procurement contact at a larger
  client. Each recipient receives the proposal link and their approval is tracked individually.
  ProposalPro shows the approval status for each recipient in a timeline view: sent, opened,
  approved, or declined.
</p>
<p>
  If an approver declines, ProposalPro captures their decline reason (from a short-answer field
  on the approval page) and notifies you immediately. This surfaces objections that would
  otherwise only surface on a follow-up call, giving you specific feedback to address in
  a revised proposal.
</p>

<h3>Multi-Currency Support</h3>
<p>
  Set the currency for any proposal independently of your account default. ProposalPro supports
  all major currencies with correct symbol placement and number formatting per locale. Clients
  in Canada, the UK, Australia, or the EU see pricing in their local currency without you
  maintaining separate proposal versions per region. Set the currency in the proposal settings
  panel before building the pricing table.
</p>
<p>
  For agencies billing in multiple currencies across a client portfolio, ProposalPro's proposal
  list displays each proposal's currency alongside its value. Revenue summary figures on the
  dashboard are shown in your account's base currency with a note indicating the exchange rate
  applied for converted values.
</p>

<h3>Team Collaboration with Comments</h3>
<p>
  Multiple team members can work on a proposal simultaneously. The editor shows live presence
  indicators when a colleague is viewing or editing. Leave inline comments on any section —
  highlight the text, click Comment, and type your note. Comments are threaded, so teammates
  can reply directly to a question without creating a separate communication thread. Resolve
  comments when the issue is addressed; resolved comments are archived but not deleted.
</p>
<p>
  For proposals that require review before sending, set the proposal status to In Review and
  assign a reviewer. The reviewer receives an email notification with a direct link to the
  proposal and can approve it for sending or return it with comments from the review panel.
  See the <a href='/blog/best-free-crm-small-business-2026'>CRM and sales pipeline guide</a>
  for connecting ProposalPro output to your broader sales pipeline tracking workflow.
</p>

<h2>Common Use Cases</h2>

<h3>Agency Responding to a New Business RFP</h3>
<p>
  A digital marketing agency receives a request for proposal from a mid-market retailer
  seeking SEO and paid search services. The account manager opens ProposalPro, selects the
  agency SEO template, and pastes the client brief into the AI generator. Within two minutes,
  the executive summary and proposed approach sections are drafted. The manager adds specific
  campaign examples from prior work, builds a pricing table with three service tier options
  (Starter, Growth, and Enterprise), and marks the link-building package as an optional add-on.
  A colleague leaves a comment on the pricing section suggesting a higher retainer rate based
  on the project complexity. The manager adjusts, resolves the comment, and sends the proposal
  as a web link. ProposalPro notifies the manager 18 hours later when the client opens the
  proposal, and the section analytics show four minutes spent on the case studies section —
  a signal to lead the follow-up call with results data.
</p>

<h3>Freelance Consultant Closing a Strategy Engagement</h3>
<p>
  An independent operations consultant uses ProposalPro to close every new client engagement.
  After an initial discovery call, she opens the consulting template, fills in the client
  variables, runs the AI generator with three sentences describing the client's operational
  problem, and spends 20 minutes refining the scope and outcome sections. She adds a milestone
  payment schedule in the pricing table — 30% on signing, 40% at midpoint, 30% at delivery.
  She sends the proposal as a web link with a 5-day expiry. When the client opens it and
  spends significant time on the timeline section without signing, she follows up proactively
  to ask if the timeline works for their team. The client signs within 24 hours of the follow-up.
</p>

<h3>SaaS Sales Team Standardizing Proposal Quality</h3>
<p>
  A 12-person SaaS sales team was producing inconsistent proposals — some reps sent polished
  PDF decks, others sent Google Docs, and a few sent email summaries with no formal document.
  The sales manager used ProposalPro to build a single master SaaS proposal template covering
  their standard implementation, training, and support tiers. All reps now start from the
  master template, customize the client name and specific use case, and send via ProposalPro
  web link. The manager tracks open rates and proposal-to-close conversion in the analytics
  dashboard, identifying that proposals with three or fewer pricing line items close at twice
  the rate of proposals with six or more.
</p>

<div class='doc-tip'>
  <strong>Tip:</strong> Always send proposals as a web link rather than a PDF if the client
  will open it on a desktop browser. The analytics data you gain — open time, section attention,
  pricing interaction — is worth more than the marginal convenience of a PDF attachment, and
  it allows the client to interact with your pricing table rather than just read it.
</div>

<h2>Frequently Asked Questions</h2>

<div class='article-faq'>
  <div class='faq-item'>
    <h3>How do I create a proposal from scratch?</h3>
    <p>
      Click 'New Proposal' on the dashboard and select 'Blank Proposal' to start from an empty
      canvas, or choose a template to start with a pre-built structure. If starting blank, add
      sections using the 'Add Section' button — choose from pre-defined section types (cover,
      executive summary, scope, pricing, timeline, team, case studies, terms, signature) or
      create a custom section with a title and free-form content block. Arrange sections by
      dragging the section handle on the left side of each block. Fill in content either by
      typing directly, using the AI generator for text-heavy sections, or pasting content
      from an existing document. Add images, tables, and dividers from the formatting toolbar.
      When the structure and content are complete, preview the proposal in the client view
      (the same experience your client will see) before sending. Save as a template if you
      expect to send similar proposals in the future.
    </p>
  </div>

  <div class='faq-item'>
    <h3>How does AI content generation work?</h3>
    <p>
      The AI content generator appears in the right-side panel when you are editing a text
      section. Click 'Generate with AI' and a brief input form opens. Describe the client's
      business and industry, the specific problem they are trying to solve, the solution you
      are proposing, and the primary outcome or result you are promising to deliver. The more
      specific your brief, the more useful the generated output. With a detailed brief, the AI
      produces complete draft paragraphs for the executive summary, problem statement, and
      proposed approach that require only light editing rather than a complete rewrite. With a
      vague brief ('marketing agency, client needs social media help'), the output will be
      generic and require substantial personalization. The generator runs in under 10 seconds.
      You can regenerate any section as many times as needed — each generation is independent
      of the others, so regenerating the approach section does not change the executive summary.
    </p>
  </div>

  <div class='faq-item'>
    <h3>How do I track if a client opened the proposal?</h3>
    <p>
      Proposal tracking is automatic for proposals sent as web links. When you send via ProposalPro,
      the system records each time the proposal link is opened, including the time, date, and
      approximate location based on IP address. You receive a real-time email and in-app notification
      the first time a client opens the proposal. For all subsequent opens, the activity log on
      the proposal detail page updates automatically — no manual refresh required. The activity
      log shows every view event in chronological order with the section-level time data for each
      session. If a proposal was opened five times across three days, each session's section
      engagement is recorded separately so you can track how the client's attention pattern
      changes across sessions. Proposals sent as PDF attachments do not generate open or
      engagement tracking data because ProposalPro cannot instrument a downloaded file.
    </p>
  </div>

  <div class='faq-item'>
    <h3>How do I add pricing tables to a proposal?</h3>
    <p>
      Add a Pricing section from the section library, or click 'Add Pricing Table' within an
      existing section. The pricing table editor opens as a panel where you add line items one
      by one: each item has a name, a short description (optional but recommended), a quantity,
      a unit price, and an optional toggle for the item's interactivity setting. Set a line item
      to 'Optional' to let the client include or exclude it from their total. Set it to 'Required'
      to lock it into the proposal regardless of client configuration. For package tiers, use the
      'Create Package' feature — define two or three named packages (Basic, Standard, Premium) and
      assign line items to each. The client sees the packages side by side and selects one. Set
      your currency, applicable tax rate, and any overall discount in the pricing table settings
      panel on the right. The client-facing pricing table updates totals in real time as clients
      toggle items.
    </p>
  </div>

  <div class='faq-item'>
    <h3>Can multiple team members collaborate on a proposal?</h3>
    <p>
      Yes. ProposalPro is designed for collaborative proposal writing. Any team member with access
      to the account can open and edit a proposal simultaneously. The editor shows colored presence
      avatars at the top of the screen indicating who is currently viewing or editing. To avoid
      conflicting edits, sections lock to the person currently editing them and unlock when they
      click away. Use inline comments to leave section-specific feedback without editing the
      content directly — highlight text, click the comment icon in the formatting toolbar, and
      type your note. Your colleague sees the comment highlighted in yellow in their editor view.
      They can reply, resolve, or act on the comment. Resolved comments are archived in the
      comments history. For proposals that go through a formal internal review before sending,
      use the proposal status workflow: Draft, In Review, Approved for Sending. The reviewer
      receives a notification when the proposal is set to In Review and can approve or return
      it with comments from the review panel.
    </p>
  </div>
</div>
`;
