export const content = `
<div class="doc-lead">
  <p>
    KPIDash is free KPI dashboard software for small business owners and operations managers
    who need real-time visibility into business performance without paying $47 to $199 per
    month for tools like Databox, Klipfolio, or Geckoboard. A KPI dashboard centralizes your
    most critical metrics — revenue, customer churn, support ticket volume, fulfillment rate,
    and more — in a single view that updates automatically and is accessible to every
    stakeholder who needs it. KPIDash is built for teams without a dedicated BI analyst:
    you drag widgets onto a canvas, connect your data source, set a target line, and share a
    read-only link with your leadership team in under fifteen minutes. This documentation
    covers setup, data connections, KPI configuration, RAG status thresholds, sharing options,
    and scheduled snapshot emails.
  </p>
</div>

<h2>Getting Started with KPIDash</h2>
<ol class="doc-steps">
  <li>
    <strong>Create your first dashboard.</strong> Click New Dashboard from the KPIDash home
    screen and give it a name — for example, "Weekly Operations Review" or "Sales KPIs Q3."
    Each dashboard is an independent canvas. You can create multiple dashboards for different
    teams or reporting cadences and switch between them from the sidebar.
  </li>
  <li>
    <strong>Add a data source.</strong> KPIDash connects to your data through CSV upload,
    manual entry, or webhook push. Upload a CSV export from your CRM, accounting system, or
    spreadsheet to get your first numbers into the platform. You can replace the CSV at any
    time to refresh the data, or configure a webhook endpoint to receive live data pushes from
    your other tools.
  </li>
  <li>
    <strong>Place KPI widgets on your canvas.</strong> Open the Widget Library and drag a
    number tile, trend line, gauge, bar chart, or table onto the grid. Assign each widget to
    a metric from your connected data source. The drag-and-drop grid snaps widgets to a
    twelve-column layout so your dashboard stays organized without pixel-level adjustments.
  </li>
  <li>
    <strong>Set targets and RAG thresholds.</strong> For each KPI widget, enter a target value
    and define the red, amber, and green threshold boundaries. KPIDash colors the widget
    header automatically based on where the current value falls relative to your thresholds,
    making it instantly obvious during a leadership meeting which metrics need attention.
  </li>
  <li>
    <strong>Share with stakeholders.</strong> Click Share on any dashboard to generate a
    read-only public link. Recipients see the live dashboard without needing an account.
    Alternatively, schedule a weekly PDF snapshot email so stakeholders receive a formatted
    report in their inbox every Monday morning without opening any application.
  </li>
</ol>

<h2>Core Features</h2>

<h3>KPI Widget Library</h3>
<p>
  KPIDash includes five widget types: a large-number tile for single-metric snapshots, a
  trend line for tracking a metric over time, a gauge for showing progress toward a capacity
  or quota, a bar chart for comparing values across categories or time periods, and a data
  table for displaying multi-row reports directly on the dashboard canvas.
</p>
<p>
  Every widget is resizable within the grid and supports a custom label, subtitle, unit
  suffix (%, $, hrs), and decimal precision setting. Widgets remember their configuration
  between sessions, so you only need to set up each KPI once. The library is designed to
  cover the most common business reporting scenarios without requiring chart-building
  expertise or SQL knowledge.
</p>

<h3>Data Source Connections</h3>
<p>
  KPIDash accepts data through three channels. CSV upload works with any export from
  QuickBooks, HubSpot, Google Sheets, Shopify, or any system that produces a standard
  comma-separated file. Manual entry lets you type values directly into a metric table for
  KPIs you track in your head or on a whiteboard. Webhook push enables real-time data
  delivery from tools that support outbound webhooks, such as Zapier, Make, or custom
  internal systems.
</p>
<p>
  Each data source maps its columns to the metrics your widgets display. Column mapping is
  done once through a point-and-click interface — no code required. When you upload a new
  CSV with the same column structure, the mapping applies automatically and all widgets
  update within seconds. Webhook data is processed as it arrives, keeping live dashboards
  current without manual refresh.
</p>

<h3>Drag-and-Drop Dashboard Layout</h3>
<p>
  The dashboard canvas uses a twelve-column responsive grid. Widgets snap to grid positions
  on drag-and-drop, preventing overlapping and accidental misalignment. You can span a widget
  across multiple columns for prominence — for example, placing a revenue trend line across
  eight columns at the top of the dashboard and stacking four smaller KPI tiles in a row
  beneath it.
</p>
<p>
  Layout changes save automatically. There is no publish step or draft mode — what you see in
  the editor is what stakeholders see on the shared link. On mobile devices the grid collapses
  to a single-column stack in the order widgets appear top-to-bottom on the canvas, so
  dashboards designed for desktop remain readable on a phone without a separate mobile layout.
</p>

<h3>Goal Target Lines</h3>
<p>
  Trend line and bar chart widgets support an overlay target line: a horizontal reference
  drawn at the goal value across the full chart width. The target line is labeled with the
  goal amount and appears in a contrasting color so the gap between actual performance and
  target is immediately visible at a glance. Target lines are especially useful for sales
  quota tracking, website traffic goals, and production output targets reviewed in weekly
  standups.
</p>
<p>
  You can set a static target (a fixed number for the quarter) or a dynamic target linked to
  a column in your data source so the goal line changes as your plan is updated. When actual
  values cross the target line, the widget border color shifts to match your RAG threshold
  configuration, providing a dual visual cue that the goal has been met or missed.
</p>

<h3>Scheduled PDF Snapshot Emails</h3>
<p>
  KPIDash can render any dashboard as a PDF and email it to a list of recipients on a weekly
  or monthly schedule. The PDF is a pixel-accurate snapshot of the full dashboard canvas,
  including all widget values, trend lines, RAG status colors, and target line overlays, as
  of the moment the snapshot is generated. Recipients receive a formatted report they can
  open, forward, and print without accessing the live application.
</p>
<p>
  Snapshot emails are configured per dashboard under Settings → Schedule. You choose the
  delivery day, time, and timezone, then enter recipient email addresses separated by commas.
  The email subject line includes the dashboard name and snapshot date for easy inbox
  filtering. Snapshots are also archived in KPIDash under Dashboard → Snapshot History so
  you can compare past reports without recreating them manually.
</p>

<h3>Public Read-Only Share Links</h3>
<p>
  Every KPIDash dashboard can be shared via a unique URL that requires no login to view.
  The shared view is read-only: visitors can see all widgets, values, and charts but cannot
  edit the layout, change data sources, or access account settings. Share links are
  revocable — clicking Revoke in the Share dialog generates a new URL and immediately
  invalidates the old one.
</p>
<p>
  Public share links work well for embedding a live dashboard link in a team Slack channel,
  weekly email update, or board portal. Because the link reflects live data, stakeholders
  always see current numbers rather than a stale screenshot. You can also protect a shared
  dashboard with a four-digit PIN for internal use cases where you want a lightweight access
  barrier without full account management.
</p>

<h3>Color-Coded RAG Status</h3>
<p>
  RAG status — red, amber, green — is configured per widget by defining two threshold
  boundaries. For a metric where higher is better (revenue, NPS score), green is above the
  upper threshold, amber is between thresholds, and red is below the lower threshold. For
  metrics where lower is better (error rate, support ticket backlog), the logic inverts.
  The widget header background changes color in real time as data updates.
</p>
<p>
  RAG indicators are visible on the shared public link and in PDF snapshots, making status
  immediately clear to executives who spend thirty seconds reviewing a dashboard before a
  meeting. For dashboards with ten or more KPI widgets, KPIDash also displays a summary
  count at the top of the canvas: how many metrics are green, amber, and red right now,
  giving a single-number health score for the business at a glance. For more on
  <a href='/blog/how-to-write-standard-operating-procedures'>documenting business performance
  standards</a>, including how to define meaningful KPI thresholds, see our SOP writing guide.
</p>

<h3>Mobile-Responsive Dashboard View</h3>
<p>
  KPIDash dashboards render correctly on phones, tablets, and desktop browsers without a
  separate mobile app. The twelve-column grid collapses to a single-column stack on screens
  narrower than 768px, preserving widget order and displaying all values, labels, and RAG
  colors at full readability. Charts re-render at the appropriate size for the viewport
  rather than scaling down a desktop layout.
</p>
<p>
  Mobile responsiveness applies to both the editor view and the public shared link, so
  stakeholders checking a dashboard link from a phone see the same information as those
  viewing it on a laptop. Trend lines and bar charts use touch-friendly tooltips that appear
  on tap rather than hover. The mobile view is particularly useful for operations managers
  who check key metrics first thing in the morning from their phone before arriving at the
  office.
</p>

<h2>Common Use Cases</h2>

<h3>Weekly Leadership Review Dashboard</h3>
<p>
  Executive teams at small businesses commonly spend the first fifteen minutes of their weekly
  meeting pulling numbers from five different systems — accounting software, a CRM, a support
  tool, and a spreadsheet. KPIDash consolidates those metrics into a single screen shared on
  the conference room display. Revenue to date, outstanding invoices, new leads, open support
  tickets, and fulfillment rate appear side by side with RAG status and target lines. The
  meeting starts with everyone looking at the same numbers, and follow-up actions are assigned
  to specific metrics rather than vague areas of concern. The scheduled PDF snapshot doubles
  as the pre-read distributed to attendees the day before the meeting.
</p>

<h3>Sales Team Quota Tracking</h3>
<p>
  Sales managers use KPIDash to give every rep visibility into their individual quota progress
  without building a custom spreadsheet for each person. A dashboard per rep — or a shared
  team dashboard with a bar chart comparing rep performance — shows closed revenue, pipeline
  value, activity counts, and quota attainment percentage in real time. Target lines on the
  bar chart mark the monthly quota so the gap is visually obvious. The dashboard is shared
  with reps via a read-only link embedded in the team Slack channel so they can check their
  numbers without asking the sales manager for an update. RAG status turns green when quota
  is met, creating a simple visual reward for high performers.
</p>

<h3>Operations Health Monitoring</h3>
<p>
  Operations managers responsible for fulfillment, customer support, or production output
  use KPIDash to track throughput KPIs that change throughout the day. Order fulfillment rate,
  average handling time, inventory levels at key SKUs, and on-time delivery percentage are
  connected via webhook push from the warehouse management or helpdesk system. The dashboard
  auto-refreshes as data arrives so the operations team sees current status without a manual
  report pull. When a metric drops into amber or red territory, the RAG indicator flags the
  issue before it becomes a customer-facing problem, giving the team time to intervene and
  correct course before the end of the shift.
</p>

<div class="doc-tip">
  <strong>Tip:</strong> Start with no more than eight KPI widgets on your first dashboard.
  Dashboards that try to show every metric at once lose the clarity that makes KPI tracking
  valuable. Pick the eight numbers that would change your decisions if they moved, configure
  RAG thresholds for each, and add additional metrics in a second dashboard once your team
  is comfortable with the first.
</div>

<h2>Frequently Asked Questions</h2>

<div class="article-faq">
  <div class="faq-item">
    <h3>How do I create my first KPI dashboard?</h3>
    <p>
      Navigate to <a href='/tools/kpi-dash'>KPIDash</a> and click New Dashboard. Enter a
      dashboard name that reflects its purpose — "Q3 Sales KPIs" or "Operations Daily" works
      well as a convention. Once the canvas opens, click Add Widget in the top toolbar to
      open the Widget Library. Select a widget type (start with a large-number tile for your
      most important single metric), give it a label, and place it on the canvas by dragging
      it to your preferred position. Repeat for each KPI you want to display. Once your
      widgets are placed, connect a data source under Dashboard Settings → Data Sources and
      map your data columns to the metrics each widget displays. Your first dashboard can be
      live with real data in under fifteen minutes. Save frequently using the Save button in
      the top right — KPIDash auto-saves every two minutes but manual saves guarantee your
      layout is preserved.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I connect a data source to KPIDash?</h3>
    <p>
      KPIDash supports three data connection methods. For CSV upload, go to Dashboard Settings
      → Data Sources → Add Source → CSV Upload, then select the file from your computer. The
      system reads the column headers and displays a column mapping interface where you assign
      each column to a metric name. For manual entry, select Manual Entry as the source type
      and type values directly into the metric table — this is useful for KPIs you calculate
      outside of any system, such as a weekly customer satisfaction score gathered from a
      survey. For webhook push, select Webhook as the source type to receive a unique endpoint
      URL. Configure your sending system (Zapier, Make, or a custom integration) to POST a
      JSON payload to that URL whenever your data updates. KPIDash parses the payload keys as
      metric names and updates all connected widgets automatically. Each data source can feed
      multiple widgets on the same dashboard.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I set KPI targets and RAG status thresholds?</h3>
    <p>
      Click the settings icon on any widget to open the Widget Configuration panel. Under the
      Target section, enter your goal value for the metric — for example, $50,000 for monthly
      revenue or 95 for a customer satisfaction score target. This value appears as a target
      line on trend and bar chart widgets and as a reference in the widget subtitle on number
      tiles. Under the RAG Thresholds section, enter your upper and lower boundary values and
      choose whether higher-is-better or lower-is-better applies to this metric. KPIDash
      colors the widget green when the current value is in the good zone, amber when it is in
      the warning zone, and red when it falls into the critical zone. Thresholds apply
      immediately and recalculate every time new data arrives. You can update thresholds at
      any time — for example, raising a revenue target at the start of a new quarter — without
      affecting historical data or snapshot archives.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I share a dashboard with stakeholders?</h3>
    <p>
      Open the dashboard you want to share and click the Share button in the top toolbar.
      KPIDash generates a unique public URL that anyone with the link can view without
      creating an account. Copy the link and distribute it via email, Slack, or embed it in
      an internal wiki. The shared view is read-only: recipients see all widget values, RAG
      status colors, trend lines, and chart data, but cannot edit the dashboard or access
      your account settings. If you want a lightweight access restriction, enable the PIN
      option in the Share dialog and set a four-digit code that recipients must enter before
      the dashboard loads. To revoke access, click Revoke Link in the Share dialog — this
      immediately invalidates the current URL and generates a new one. Anyone bookmarking the
      old link will see an access-expired message. You can share as many dashboards as you
      need; each has its own independent link and PIN configuration.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I schedule weekly dashboard email reports?</h3>
    <p>
      Open the dashboard you want to schedule and go to Dashboard Settings → Schedule. Toggle
      the Scheduled Snapshots switch to enabled. Select the delivery frequency — weekly or
      monthly — and set the day of week (or day of month), delivery time, and timezone. Enter
      the recipient email addresses, one per line or separated by commas. Click Save Schedule.
      KPIDash will render a PDF snapshot of the full dashboard at the scheduled time and
      deliver it to all listed recipients. The email subject line follows the format "[Dashboard
      Name] — Snapshot for [Date]" so recipients can filter and archive reports easily. You can
      preview the PDF snapshot immediately by clicking Send Test Snapshot, which delivers a
      current snapshot to your own email address without waiting for the scheduled time. Snapshot
      history is stored under Dashboard → Snapshots for the past ninety days, allowing you to
      retrieve any prior report without regenerating it.
    </p>
  </div>
</div>
`;
