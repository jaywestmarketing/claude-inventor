export const content = `
<div class="doc-lead">
  <p>
    MeetingNotesAI is a free AI meeting notes tool that converts meeting recordings and
    transcripts into structured summaries, decisions, and action items — eliminating the
    manual note-taking that consumes an estimated 25-30% of every meeting's duration.
    Tools like Otter.ai ($10-20/month) and Fireflies.ai ($10-19/seat/month) require a
    bot to join every call, raising privacy concerns in client meetings; Notion AI ($10/month
    add-on) handles transcription only if your team is already inside Notion. MeetingNotesAI
    works with any recording or transcript you already have: upload an audio file, paste raw
    text, or drop in a transcript export from any platform. The AI generates a structured
    summary in seconds, extracts action items with assignees and due dates, and produces a
    shareable notes link you can send to attendees immediately after the meeting ends. This
    documentation covers transcript upload, AI summary generation, action item management,
    note templates, sharing, search, and bulk export.
  </p>
</div>

<h2>Getting Started with MeetingNotesAI</h2>
<ol class="doc-steps">
  <li>
    <strong>Upload or paste your meeting content.</strong> Click New Meeting and choose your
    input method: upload an MP3 or MP4 audio file, upload a plain text transcript, or paste
    raw meeting notes directly into the text editor. If you upload audio, MeetingNotesAI
    transcribes it automatically before running the AI summary. Audio files up to 500MB are
    supported; transcription typically completes in one to two minutes per hour of audio.
  </li>
  <li>
    <strong>Apply a meeting template.</strong> Select the meeting type from the template
    library — standup, retrospective, 1:1, board meeting, project kickoff, or client call.
    The template tells the AI which sections to prioritize and how to structure the output.
    You can skip this step and MeetingNotesAI will auto-detect the meeting type from context
    clues in the transcript.
  </li>
  <li>
    <strong>Generate the AI summary.</strong> Click Generate Summary. MeetingNotesAI produces
    a structured document with sections for key discussion points, decisions made, and action
    items. The summary appears alongside the full transcript so you can verify any section
    against the source in seconds. Generation typically completes in under thirty seconds
    for a one-hour meeting.
  </li>
  <li>
    <strong>Review and assign action items.</strong> Action items are extracted automatically
    with the person mentioned as responsible and any date referenced as the due date. Review
    each action item, correct any misidentified assignees, add due dates to items where none
    was mentioned, and add manual action items for anything the AI missed.
  </li>
  <li>
    <strong>Share with attendees.</strong> Click Share to generate a read-only link to the
    meeting notes. Paste the link into the meeting chat, a Slack channel, or a follow-up
    email. Attendees can view the summary, decisions, and action items without creating an
    account in MeetingNotesAI.
  </li>
</ol>

<h2>Core Features</h2>

<h3>Transcript Upload — MP3, MP4, and Text Paste</h3>
<p>
  MeetingNotesAI accepts meeting content in three formats. MP3 and MP4 audio files are
  transcribed automatically using speaker-diarized speech recognition that labels each
  paragraph with the speaker's name where it can be detected. Plain text transcripts from
  Zoom, Google Meet, Microsoft Teams, or any other conferencing platform can be uploaded
  directly or pasted into the input editor.
</p>
<p>
  Raw meeting notes — bullet points, fragmented sentences, shorthand — are also supported
  via paste. MeetingNotesAI normalizes the input before summarization so inconsistently
  formatted notes produce clean, structured output. The original transcript or pasted text
  is always preserved alongside the AI output and is not modified, so you retain full
  source fidelity for reference or dispute resolution.
</p>

<h3>AI Summary Generation</h3>
<p>
  The AI summary engine produces three structured sections for every meeting: Key Discussion
  Points (the main topics raised, condensed to one to two sentences per topic), Decisions Made
  (conclusions the group committed to, stated definitively rather than as discussion), and
  Action Items (specific tasks, each linked to an assignee and deadline where detectable).
  Each section is generated independently so you can regenerate one section without rewriting
  the others.
</p>
<p>
  Summary accuracy improves with cleaner transcripts — recordings with clear audio and
  multiple distinct speakers produce better results than heavily compressed or overlapping
  audio. For transcripts that use first-person references without names (I will, we agreed),
  MeetingNotesAI flags ambiguous assignees with a review prompt rather than silently
  guessing, reducing the chance of an action item being assigned to the wrong person.
</p>

<h3>Action Item Extraction with Assignee and Due Date Parsing</h3>
<p>
  MeetingNotesAI scans the transcript for language patterns that indicate a commitment:
  phrases like "will send," "is responsible for," "needs to," "by Friday," and "action for
  [name]." Each detected commitment is extracted as a standalone action item with the
  detected assignee pre-filled and the referenced date parsed into a calendar date where
  possible (next Tuesday → the specific date in the current week).
</p>
<p>
  The action item panel shows all extracted items in a checklist format. Each item has an
  editable assignee field, an editable due date picker, a priority tag (High, Medium, Low),
  and a status toggle (Open, In Progress, Done). Action item status is tracked over time so
  recurring meetings — weekly standups, for example — can carry forward incomplete items
  automatically from the prior week's notes.
</p>

<h3>Meeting Notes Template Library</h3>
<p>
  Templates pre-configure the AI output structure for specific meeting types. The standup
  template produces Yesterday / Today / Blockers sections. The retrospective template produces
  What Went Well / What Did Not / Action Items. The 1:1 template produces Goals Progress /
  Feedback / Next Steps. The board meeting template produces Agenda Items / Resolutions /
  Open Items. The project kickoff template produces Objectives / Stakeholders / Milestones /
  Risks / Next Steps.
</p>
<p>
  Custom templates can be created under Settings → Templates. Define the section names,
  the order they appear in the output, and optional prompt guidance for each section that
  tells the AI what to look for. Custom templates are available to all team members with
  access to your MeetingNotesAI workspace and appear in the template picker alongside
  the built-in options.
</p>

<h3>Shareable Read-Only Notes Link</h3>
<p>
  Every meeting notes document generates a public read-only link under Share → Copy Link.
  The shared view displays the meeting title, date, participants listed in the transcript,
  the full AI summary, the decisions list, and the action item checklist. Recipients can
  view all sections, expand the full transcript, and see action item status without creating
  an account.
</p>
<p>
  Share links are permanent by default but can be expired manually under Share → Revoke Link.
  A new link is generated automatically on revocation. You can also set an automatic expiry
  — seven, thirty, or ninety days — for sensitive meetings where you want notes to stop being
  accessible after a reasonable review window. Expired links display a polite message
  directing the viewer to contact the meeting organizer for access.
</p>

<h3>Search Across All Past Meeting Notes</h3>
<p>
  The search bar in the MeetingNotesAI dashboard searches across all meeting summaries,
  decisions, and action items in your account simultaneously. Search by keyword, person
  name, project name, or date range. Results show the matching meeting title, date, the
  section where the match was found, and a text snippet with the keyword highlighted.
</p>
<p>
  Search also queries the full stored transcript, not just the AI-generated summary, so
  a keyword mentioned once in passing during a meeting is findable even if it did not
  make it into the summary. This is particularly useful for retrieving a specific decision
  or commitment made in a meeting from several months ago without scrolling through every
  notes document manually.
</p>

<h3>Calendar Integration for Automatic Meeting Association</h3>
<p>
  Connect your Google Calendar or Outlook calendar under Settings → Integrations. Once
  connected, MeetingNotesAI reads your upcoming and recent calendar events and pre-populates
  the meeting title, date, and attendee list when you create a new notes document. Select
  the matching calendar event from the dropdown and the metadata fills in automatically,
  saving you from manually typing meeting details before every summary.
</p>
<p>
  Calendar integration also enables automatic association: if you upload a recording file
  within two hours of a calendar event ending, MeetingNotesAI offers to link the file to
  that event automatically. Linked notes appear alongside the calendar event in the meeting
  history view so you can navigate to the notes for any past meeting directly from the
  calendar without searching by date. For more on
  <a href='/blog/how-to-write-standard-operating-procedures'>turning meeting decisions into
  documented processes</a>, including how to convert recurring action items into SOPs, see
  our process documentation guide.
</p>

<h3>Bulk Export of Notes and Action Items as CSV</h3>
<p>
  Export all meeting notes from a selected date range as a zip file containing one text or
  PDF file per meeting, or export all action items across all meetings as a single CSV file.
  The action items CSV includes columns for Meeting Title, Meeting Date, Action Item Text,
  Assignee, Due Date, Priority, and Status — compatible with project management tools like
  Asana, Trello, and Monday.com that accept task import via CSV.
</p>
<p>
  Individual meeting notes export as PDF (formatted with sections and branding) or as plain
  text (for pasting into a wiki, email, or document). The bulk PDF export is useful for
  end-of-quarter reporting or archiving a project's full meeting history at project close.
  Export settings are available under Dashboard → Export.
</p>

<h2>Common Use Cases</h2>

<h3>Weekly Team Standup Documentation</h3>
<p>
  Standup meetings last fifteen minutes but often produce updates no one can recall three
  days later. Using MeetingNotesAI with the standup template, teams record the audio (or
  paste a transcript from a Teams or Zoom auto-caption) and generate Yesterday / Today /
  Blockers sections in under a minute after the meeting. Action items from blockers are
  extracted automatically and assigned to the person responsible for resolving them.
  The share link goes into the team Slack channel immediately so anyone who missed the
  standup or wants to reference a past update can do so without asking. After four weeks,
  the search feature makes it easy to trace when a specific decision or blocker first
  appeared, which is useful in sprint retrospectives.
</p>

<h3>Client Call Follow-Up Documentation</h3>
<p>
  Account managers and agency teams use MeetingNotesAI to turn client call recordings into
  professional follow-up documentation. Upload the call recording, generate the summary,
  and review the decisions and action items before sharing the link with the client. The
  read-only share format is appropriate to send to clients because it contains only the
  structured notes — not the full recording — and requires no account creation on the
  client's side. Teams that implement this workflow report faster client approval on next
  steps and fewer disputes about what was agreed on the call, because the decision record
  is clear, timestamped, and sent within minutes of the call ending.
</p>

<h3>Board Meeting and Leadership Review Minutes</h3>
<p>
  Board meetings and executive reviews produce decisions that must be formally documented
  for governance and compliance purposes. MeetingNotesAI's board meeting template structures
  output around agenda items, resolutions passed, and open items deferred to the next
  meeting. The AI summary gives the minute-taker a complete first draft that they refine
  rather than write from scratch, reducing the time from meeting to distributed minutes
  from days to under an hour. The decisions section serves as the authoritative resolution
  log, and the action item tracker ensures follow-up commitments made at the board level
  are tracked through completion with a clear record of who was responsible.
</p>

<div class="doc-tip">
  <strong>Tip:</strong> Review action items within twenty-four hours of the meeting while
  context is fresh. Assignees mentioned by nickname or first name only during the meeting
  may need to be clarified, and due dates stated as "by end of next week" need to be
  converted to a specific date before the note ages. A five-minute post-meeting review of
  the action item list prevents ambiguity from compounding over time.
</div>

<h2>Frequently Asked Questions</h2>

<div class="article-faq">
  <div class="faq-item">
    <h3>How do I upload a meeting recording or transcript?</h3>
    <p>
      Click New Meeting from the MeetingNotesAI dashboard. You will see three input options.
      Upload Audio accepts MP3 and MP4 files up to 500MB — drag and drop the file or click
      to browse. Once uploaded, the file is queued for transcription and you will see a
      progress indicator; transcription typically takes one to two minutes per hour of audio.
      Upload Transcript accepts plain text files (.txt) or formatted transcript exports from
      Zoom, Google Meet, or Microsoft Teams — the parser handles both speaker-labeled formats
      (Speaker 1: ...) and unlabeled formats. Paste Text opens a text editor where you can
      paste raw notes, bullet points, or a transcript copied from another application. All
      three input types produce the same AI summary output; audio upload produces a stored
      transcript as a byproduct that is searchable alongside the summary. After input, click
      Next to proceed to template selection and summary generation.
    </p>
  </div>

  <div class="faq-item">
    <h3>How does the AI summary generation work?</h3>
    <p>
      After you upload or paste your meeting content and click Generate Summary, MeetingNotesAI
      processes the transcript through its summarization model. The model reads the full
      transcript and produces three structured output sections: Key Discussion Points (the
      main topics raised, each condensed to one to two sentences), Decisions Made (clear
      commitments or conclusions the group reached, phrased definitively), and Action Items
      (specific tasks with detected assignee and due date). The selected template adjusts
      which sections appear and in what order. Summary generation takes under thirty seconds
      for most meetings. Each section can be regenerated independently if you are not satisfied
      with a specific section — click the Regenerate icon next to any section header and
      MeetingNotesAI will produce a new version of that section without altering the others.
      You can also edit any section manually after generation; edits are saved automatically
      and do not trigger a re-run of the AI.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I assign and track action items from a meeting?</h3>
    <p>
      After summary generation, open the Action Items tab in the notes editor. Extracted
      action items appear as a checklist with the detected assignee name and due date
      pre-filled. Click the assignee field on any item to correct or update the name — start
      typing and the field autocompletes from your team member list if you have calendar
      integration connected. Click the due date field to open a date picker and set or adjust
      the deadline. Use the Priority dropdown to tag each item as High, Medium, or Low. Click
      Add Action Item at the bottom of the list to add items the AI missed. As work progresses,
      assignees or managers can open the shared notes link and update the status of each action
      item (Open, In Progress, Done) — status changes on the shared link are reflected in the
      editor view in real time. For recurring meetings, incomplete action items from the previous
      session can be carried forward by clicking Carry Forward Incomplete Items when creating
      the next meeting in the same series.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I share meeting notes with attendees?</h3>
    <p>
      Once your notes are finalized, click the Share button in the top toolbar of the notes
      editor. MeetingNotesAI generates a unique read-only URL for this specific meeting's notes.
      Copy the URL and paste it wherever your attendees are — a follow-up email, a Slack message,
      a calendar event description, or a project management ticket. Recipients open the link in
      any browser and see the meeting title, date, participant list, AI summary, decisions, and
      action item checklist without creating an account or logging in to MeetingNotesAI. The
      shared view is read-only — recipients cannot edit the notes or action items through the
      share link. To revoke access after a set period, click Expire Link and choose an expiry
      window (7, 30, or 90 days). To revoke immediately, click Revoke Link — a new URL is
      generated for the same notes document and the old URL stops working instantly. You can
      reshare using the new link if needed. Visit <a href='/tools/meeting-notes-ai'>MeetingNotesAI</a>
      to get started.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I search past meeting notes?</h3>
    <p>
      Use the search bar at the top of the MeetingNotesAI dashboard. Type any keyword, person
      name, project name, or phrase and press Enter. The search runs across all meeting summaries,
      decision records, action items, and full stored transcripts in your account simultaneously.
      Results are displayed as a list of matching meetings with the meeting title, date, which
      section the match appeared in (Summary, Decisions, Action Items, or Transcript), and a
      short text snippet showing the keyword in context. Click any result to open the full
      notes document at the section where the match was found. Use the date range filter in
      the search panel to narrow results to a specific quarter or project period. If you are
      looking for all action items assigned to a specific person, use the Action Items filter
      under the search bar and enter the person's name — this surfaces every action item assigned
      to that person across all meetings in your account, with status and due date visible in
      the results list.
    </p>
  </div>
</div>
`;
