export const content = `
<div class="doc-lead">
  <p>
    JobDescriptionGen is a free AI job description generator for small business that creates
    complete, bias-free job postings from a job title and a two-to-three sentence role brief —
    in under thirty seconds. Enterprise tools like Textio (enterprise pricing, not public) and
    Ongig ($500+/month) are built for HR teams at large companies running hundreds of job
    postings per year; ChatGPT produces generic text with no HR-specific structure, no bias
    detection, and no ready-to-post formatting. JobDescriptionGen fills the gap: structured
    AI output organized into role summary, responsibilities, qualifications, and benefits
    sections, plus a bias detection layer that flags gendered language, age-coded terms, and
    exclusionary requirements before you publish. Tone selector, skills suggestions, individual
    section regeneration, a 50+ template library, and DOCX/PDF export are all included at no
    cost. This documentation covers AI generation, bias detection, section editing, tone
    controls, skills suggestions, export, the template library, and section regeneration.
  </p>
</div>

<h2>Getting Started with JobDescriptionGen</h2>
<ol class="doc-steps">
  <li>
    <strong>Enter the job title and brief.</strong> On the JobDescriptionGen home screen,
    type the job title in the first field (for example, "Senior Account Executive" or
    "Operations Coordinator"). In the brief field below it, write two to three sentences
    describing the core purpose of the role — what the person in this role will primarily
    do, who they will work with, and any critical context (remote, industry, growth stage).
    More specific briefs produce more relevant output; a single sentence is the minimum.
  </li>
  <li>
    <strong>Choose a tone.</strong> Select the tone that matches your company culture from
    the tone selector: Formal (structured, professional language appropriate for corporate
    or regulated industries), Conversational (warm, direct language that reads like a
    person wrote it), or Startup (energetic, mission-forward language that emphasizes growth
    and impact). Tone applies consistently across all sections of the generated JD.
  </li>
  <li>
    <strong>Generate the job description.</strong> Click Generate. Within thirty seconds,
    JobDescriptionGen produces a complete four-section job description: Role Summary,
    Responsibilities (eight to ten bullet points), Qualifications (must-have and nice-to-have
    separated), and Benefits (a customizable template section). The output appears in a
    side-by-side editor with the original brief on the left and the generated JD on the right.
  </li>
  <li>
    <strong>Review the bias detection report.</strong> The Bias Report tab appears automatically
    after generation if any flagged language is detected. Each flag shows the specific word or
    phrase, the bias category (gendered, age-coded, exclusionary), and a suggested replacement.
    Click Apply Fix to replace the flagged term with the suggestion, or click Ignore to keep
    the original language.
  </li>
  <li>
    <strong>Export or copy.</strong> Click Copy to Clipboard to paste the final JD into your
    ATS, a job board, or an email. Click Export to download as a DOCX file for further
    editing in Word, or as a PDF for sharing with hiring managers for review and approval
    before posting.
  </li>
</ol>

<h2>Core Features</h2>

<h3>AI Generation from Job Title and Brief</h3>
<p>
  JobDescriptionGen builds the full job description from two inputs: the job title and a
  brief of two to three sentences. The title provides the structural anchor — the model
  draws from its knowledge of standard responsibilities and qualifications for that role
  across industries. The brief provides the customization layer — company context, reporting
  structure, remote or in-person setting, specific deliverables, or industry vertical that
  makes the output specific to your opening rather than a generic template.
</p>
<p>
  Generation produces four sections every time: a two-to-three paragraph Role Summary that
  opens with the primary value the person in this role delivers to the company, a
  Responsibilities section with eight to ten specific, action-led bullet points (not vague
  duties), a Qualifications section split into Required and Preferred groups, and a Benefits
  section with your company's standard offerings as a placeholder for your actual benefits.
  The entire JD is generated in one pass and is available for editing, section-by-section
  regeneration, or direct export within thirty seconds of clicking Generate.
</p>

<h3>Bias Detection and Flagging</h3>
<p>
  The bias detection layer scans the full generated job description for three categories of
  potentially exclusionary language. Gendered language includes terms associated statistically
  with male-coded roles (dominant, competitive, ninja, rockstar) or female-coded roles
  (nurturing, supportive, collaborative in specific construction patterns) that research shows
  reduce application rates from underrepresented candidates. Age-coded terms include phrases
  like "recent graduate," "digital native," "young and hungry," or "5-10 years" maximum
  experience requirements that may constitute age discrimination.
</p>
<p>
  Exclusionary requirements are qualifications that screen out candidates unnecessarily —
  degree requirements for roles where demonstrated experience is sufficient, or specific
  software tool requirements when adjacent tools would indicate the same competence. The
  Bias Report displays each flag with the full sentence in context, the flag category,
  the risk level (Low, Medium, High), and a suggested replacement phrase. Applying all
  High flags typically takes under two minutes and meaningfully broadens the candidate pool
  without weakening the quality bar for the role.
</p>

<h3>Structured Output — Role Summary, Responsibilities, Qualifications, Benefits</h3>
<p>
  Every generated job description follows a proven four-section structure that meets the
  formatting requirements of major job boards (Indeed, LinkedIn, Glassdoor) without
  reformatting. The Role Summary opens with the company context and the core impact of the
  role, setting candidate expectations before listing requirements. Responsibilities are
  written as action-led bullet points beginning with an active verb — Develops, Manages,
  Coordinates, Analyzes — rather than passive descriptions beginning with "Responsible for."
</p>
<p>
  The Qualifications section separates Required (must-have for the role) from Preferred
  (would strengthen a candidate's application but are not eliminators) to reduce the well-documented
  problem of qualified candidates self-selecting out because they do not meet every listed
  qualification. The Benefits section includes a configurable placeholder for your actual
  benefits — healthcare, equity, remote work policy, PTO — that you customize once and
  save as your default for all future generations.
</p>

<h3>Tone Selector — Formal, Conversational, Startup</h3>
<p>
  Tone is a document-wide setting that adjusts the vocabulary, sentence structure, and
  register of every generated section. Formal tone uses complete sentences, avoids
  contractions, and uses corporate vocabulary appropriate for regulated industries (finance,
  healthcare, legal) or large organizations where conservative language signals institutional
  stability. Conversational tone uses direct, second-person address ("You will..."), shorter
  sentences, and natural vocabulary that reads as if a real person wrote it — shown to
  increase application rates by making the role feel approachable.
</p>
<p>
  Startup tone uses mission-forward language, references growth and impact explicitly, and
  adopts the register common to Series A and B company job postings — "join us," "help
  shape," "move fast." Tone can be changed and the JD regenerated without re-entering the
  brief — click Regenerate with New Tone from the editor toolbar to apply a different tone
  to the same content. All three tone outputs go through the same bias detection pass, so
  tone selection does not create a bias blind spot.
</p>

<h3>Skills Suggestion Based on Job Title</h3>
<p>
  After generation, the Skills Panel on the right side of the editor displays a list of
  skills commonly associated with the job title you entered, organized into Technical Skills,
  Soft Skills, and Tools and Platforms categories. Each suggested skill shows a relevance
  score based on how frequently it appears in job postings for that title across industries.
  Skills not already in the generated qualifications section are flagged with a green plus
  icon for easy addition.
</p>
<p>
  Click any skill to add it to the Qualifications section as either a Required or Preferred
  item. The addition is immediate and the Bias Report re-runs automatically to check if the
  added skill introduces any exclusionary language. Skills suggestions are drawn from a
  continuously updated database of job posting patterns and are specific enough to be useful —
  for example, a Marketing Manager suggestion panel includes HubSpot, Marketo, A/B testing
  methodology, and content calendar management rather than generic terms like "communication"
  and "leadership."
</p>

<h3>Copy to Clipboard and Export as DOCX or PDF</h3>
<p>
  The Copy to Clipboard button in the editor toolbar copies the full job description as
  plain text — no HTML tags, no formatting artifacts — ready to paste into an ATS intake
  form, a job board posting interface, or an email. Pasting into a rich-text editor (Google
  Docs, Notion, Confluence) preserves basic formatting like bullet points and section headers.
</p>
<p>
  Export as DOCX produces a Microsoft Word file with section headers, bullet formatting,
  and your company logo in the document header if you have connected brand settings. DOCX
  is the standard format for internal review and approval workflows where the hiring manager
  or legal team needs to add comments or track changes before final posting. Export as PDF
  produces a polished, read-only document appropriate for sharing with an executive sponsor
  or external recruiter. Both export formats include the final bias-corrected text, not
  the pre-correction version.
</p>

<h3>Template Library of 50+ Role-Specific Starting Points</h3>
<p>
  The template library provides pre-built role briefs and qualifications frameworks for over
  fifty common job titles across seven function areas: Engineering (Software Engineer, DevOps,
  Data Analyst, Product Manager), Sales (Account Executive, SDR, Customer Success Manager),
  Marketing (Content Manager, Demand Generation, SEO Specialist), Finance (Controller, FP and A
  Analyst, Bookkeeper), Operations (Operations Manager, Executive Assistant, Office Manager),
  HR (HR Generalist, Recruiter, Talent Partner), and Customer Support (Support Specialist,
  Technical Support, Customer Experience Lead).
</p>
<p>
  Each template provides a pre-filled brief, a default qualifications framework tuned to
  the role, and a skills panel pre-populated with the most relevant skills for that title.
  Using a template as a starting point typically saves five to ten minutes compared to writing
  a brief from scratch and produces output with more specific, accurate qualifications. Templates
  are a starting point — all generated content is fully editable and the brief can be modified
  before generation to add your company-specific context on top of the template foundation.
  Learn more about <a href='/blog/employee-onboarding-software-small-business-2026'>building an
  effective hiring and onboarding process</a> in our hiring guide.
</p>

<h3>Regenerate Individual Sections</h3>
<p>
  After initial generation, any of the four sections can be regenerated independently without
  rewriting the full JD. Click the Regenerate icon (circular arrow) at the top right of any
  section header. The section regenerates using the same job title, brief, and tone settings,
  producing a new variation. The prior version of the section is saved in the section history
  and can be restored with one click if you prefer the original.
</p>
<p>
  Section-level regeneration is particularly useful when the Role Summary captures the role
  accurately but the Responsibilities feel too generic, or when the Qualifications are well
  calibrated but the Benefits placeholder text needs a fresh variation. You can regenerate
  any section up to five times in a session; each regeneration produces a meaningfully different
  output rather than minor paraphrasing. The Bias Report re-runs after each section regeneration
  to check the new content for any flags introduced in the new variation.
</p>

<h2>Common Use Cases</h2>

<h3>First-Time Hiring for a Founder or Small Business Owner</h3>
<p>
  Many founders write their first job description by copying a competitor's posting and
  editing it — inheriting whatever bias, vague language, or off-brand tone was in the
  original. JobDescriptionGen replaces that process with a structured starting point that
  is specific to the role and the company. Enter the title ("Operations Manager"), write
  three sentences about what you need this person to do in the first ninety days, select
  Conversational tone, and generate. The output gives the founder a complete, professional
  job description in thirty seconds that they refine rather than write. The bias report
  catches exclusionary language they would never have recognized on their own. The result
  is a job posting that attracts a broader, better-qualified candidate pool from the first
  hire.
</p>

<h3>HR Teams Scaling High-Volume Hiring</h3>
<p>
  HR teams running multiple concurrent searches use JobDescriptionGen to maintain quality
  and consistency across many simultaneous job postings without each posting taking an
  hour to write. Using the template library as a starting point, a recruiter can generate,
  review, bias-check, and export a finalized JD for a standard role in under ten minutes.
  The tone selector ensures every posting for a specific department uses the same voice —
  Engineering postings use a different tone than Customer Success postings, both set once
  and applied consistently. Section-level regeneration lets the recruiter refine one
  section per posting without starting over, reducing the total time per JD by sixty to
  seventy percent compared to manual writing.
</p>

<h3>Updating Stale Job Descriptions for Reopened Roles</h3>
<p>
  Companies frequently repost job descriptions written two or three years ago without
  reviewing them for outdated qualifications, changed market compensation expectations, or
  bias language that has become better understood since the original was written. Paste the
  existing JD text into the editor, run the bias detection report, and use the section
  regeneration feature to refresh sections that feel dated. The skills suggestion panel
  identifies tools and competencies that have become standard in the market since the original
  was written — for example, a Marketing Manager JD from 2022 may not mention AI writing tools
  or short-form video skills that are now expected. The result is a refreshed posting that
  reflects the current market without a complete rewrite from scratch.
</p>

<div class="doc-tip">
  <strong>Tip:</strong> Write your role brief in the language your best current employee in
  that role would use to describe their job to a peer — not in HR generalist language. Briefs
  that include a specific deliverable ("own the quarterly demand generation plan") and a
  specific context ("reporting to the VP of Marketing in a 30-person B2B SaaS company")
  produce job descriptions that are measurably more specific and attract candidates who are
  self-selecting based on accurate expectations rather than generic role titles.
</div>

<h2>Frequently Asked Questions</h2>

<div class="article-faq">
  <div class="faq-item">
    <h3>How do I generate a job description?</h3>
    <p>
      Go to <a href='/tools/job-description-gen'>JobDescriptionGen</a> and enter the job title
      in the first field. In the brief field, write two to three sentences describing the core
      purpose of the role — what the person will primarily do, who they will report to, and any
      context that makes your opening specific (industry, company stage, remote or hybrid
      setting, key deliverable in the first ninety days). Select your preferred tone from the
      tone selector: Formal, Conversational, or Startup. Click Generate. Within thirty seconds,
      the editor displays a complete four-section job description: Role Summary, Responsibilities,
      Qualifications (split into Required and Preferred), and Benefits. The Bias Report tab
      appears automatically if any flags are detected. Review the generated content, apply any
      bias fixes, edit sections as needed using the editor, and then export or copy the final
      version. You do not need to create an account to generate a job description — the tool
      works immediately on first visit.
    </p>
  </div>

  <div class="faq-item">
    <h3>How does bias detection work?</h3>
    <p>
      After generation, JobDescriptionGen automatically scans the full job description text
      for three categories of potentially exclusionary language. Gendered language detection
      identifies words and phrases that research in organizational psychology has shown to
      statistically reduce application rates from women or men, depending on the coding —
      for example, "competitive," "dominant," and "ninja" are associated with male-coded job
      postings that attract fewer women applicants. Age-coded language detection flags phrases
      that may imply a preferred age range — "digital native," "recent graduate," "5-10 years
      maximum" experience requirements, or "young and hungry" descriptions — which may
      constitute age discrimination under the Age Discrimination in Employment Act. Exclusionary
      requirements detection flags qualifications that create unnecessary barriers — a four-year
      degree requirement for a role where demonstrated experience is an equivalent qualifier,
      or a requirement for a specific proprietary tool when adjacent tools indicate the same
      skill set. The Bias Report shows each flag with the sentence in context, the category,
      a risk level (Low, Medium, High), and a suggested replacement. Click Apply Fix to accept
      the replacement or Ignore to retain the original.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I edit individual sections of the generated job description?</h3>
    <p>
      Each of the four sections in the generated job description — Role Summary, Responsibilities,
      Qualifications, and Benefits — is independently editable in the JobDescriptionGen editor.
      Click anywhere in a section to place your cursor and type or delete text exactly as you
      would in a word processor. Add or remove bullet points in the Responsibilities section
      by pressing Enter at the end of a line to add a new bullet, or selecting a bullet and
      deleting it. Move bullets up or down by cutting and pasting. To regenerate a section
      entirely rather than editing manually, click the Regenerate icon at the top right of the
      section header — this produces a new AI-generated variation of that section only, using
      the same job title and brief. The prior version is saved in the section history accessible
      via the History icon next to the Regenerate button. You can toggle between the AI-generated
      version and your edited version at any time; the version you have open when you export or
      copy is what gets captured in the final output. The Bias Report re-runs automatically
      after any edit or regeneration that changes the text.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I export a job description?</h3>
    <p>
      With the finalized job description open in the editor, click the Export button in the
      top toolbar and select your format. DOCX produces a Microsoft Word-compatible file with
      section headers formatted as Heading 1 and Heading 2 styles, bullet points preserved as
      list items, and your company logo in the document header if brand settings are configured
      under Settings → Brand. DOCX is the standard format for internal review workflows where
      the hiring manager needs to annotate or propose changes using Word's track changes feature
      before the JD is finalized. PDF produces a formatted, read-only document with consistent
      styling — appropriate for sharing with an external recruiter or an executive sponsor who
      needs to review and sign off before the role is posted publicly. Both formats export the
      bias-corrected final version — not the pre-correction draft. After export, you can also
      click Copy to Clipboard to copy the plain text of the full JD for pasting directly into
      an ATS, a job board like Indeed or LinkedIn, or an internal HRIS.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I use a role template as a starting point?</h3>
    <p>
      Click Template Library in the JobDescriptionGen navigation bar. Browse the library by
      function category or search by role title. Each template card shows the role title, the
      function category, and a preview of the pre-filled brief and the key qualifications
      framework built for that role. Click Use Template to load it into the generator. The
      template pre-fills the job title field and the brief field with a starting brief you can
      edit to add your company-specific context — for example, the Software Engineer template
      brief mentions backend API development and cross-functional collaboration, which you
      customize by adding your tech stack, team size, and the specific product area the engineer
      will own. The skills panel pre-populates with the most relevant skills for the template
      role so you can add or remove items before generating. Once you have customized the brief
      and reviewed the skills, click Generate to produce the full JD. Using a template as a
      starting point typically produces more accurate qualifications with less editing than
      starting from a blank brief, because the template frameworks are built from patterns
      across thousands of real job postings for each role.
    </p>
  </div>
</div>
`;
