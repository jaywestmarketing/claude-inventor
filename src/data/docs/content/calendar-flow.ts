export const content = `
<div class="doc-lead">
  <p>
    CalendarFlow is free meeting scheduling software for small businesses that eliminates
    the back-and-forth of finding a meeting time by letting contacts book directly on your
    calendar. Instead of exchanging five emails to schedule a thirty-minute call, you share
    a booking link and your contact picks a slot that works for them — CalendarFlow blocks
    it instantly and sends confirmation emails to both parties automatically. Tools like
    Calendly ($10-16 per seat per month) and Acuity Scheduling ($16-49 per month) charge
    significant monthly fees for this capability; CalendarFlow provides the same core
    scheduling workflow at no cost. HubSpot Meetings offers a free tier but limits meeting
    types and removes branding controls. This documentation covers booking page setup,
    availability and buffer time configuration, meeting type creation, team round-robin
    scheduling, and confirmation email customization.
  </p>
</div>

<h2>Getting Started with CalendarFlow</h2>
<ol class="doc-steps">
  <li>
    <strong>Connect your calendar.</strong> CalendarFlow reads your existing calendar to
    determine when you are available. Connect Google Calendar or Microsoft Outlook from the
    Integrations screen. Once connected, CalendarFlow checks your calendar in real time when
    a contact opens your booking page, so any existing events — internal meetings, personal
    appointments, blocked focus time — automatically prevent double-booking without any
    manual configuration.
  </li>
  <li>
    <strong>Set your working hours and availability.</strong> Define the days and hours during
    which you accept bookings. Go to Availability → Working Hours and set your start and end
    times for each day of the week. You can set different hours for different days — for
    example, 9am to 5pm Monday through Thursday and 9am to noon on Friday. Days you toggle
    off entirely will show no available slots to contacts visiting your booking page.
  </li>
  <li>
    <strong>Create a meeting type.</strong> A meeting type is a reusable booking configuration:
    a 15-minute introductory call, a 30-minute product demo, or a 60-minute strategy
    consultation each become their own meeting type with a unique URL. Create your first
    meeting type by clicking New Meeting Type, entering the name, duration, description, and
    any intake questions you want to collect from the contact before they book.
  </li>
  <li>
    <strong>Share your booking link.</strong> Each meeting type generates a unique booking
    page URL. Add this link to your email signature, your website contact page, your LinkedIn
    profile, or anywhere you want contacts to be able to schedule time with you. When someone
    clicks the link, they see your available slots for that meeting type in their local
    timezone and can book in under sixty seconds.
  </li>
  <li>
    <strong>Review and manage bookings.</strong> Confirmed bookings appear in the CalendarFlow
    Bookings dashboard and are added to your connected calendar automatically. From the
    dashboard you can view upcoming bookings, see the intake form responses submitted by each
    contact, and cancel or reschedule any booking — an automated email notifies the contact
    of the change immediately.
  </li>
</ol>

<h2>Core Features</h2>

<h3>Booking Page with Real-Time Calendar Sync</h3>
<p>
  When a contact opens a CalendarFlow booking page, available time slots are calculated in
  real time by checking your connected calendar for existing events and comparing them against
  your configured working hours and buffer time settings. Slots that are already booked,
  blocked by a calendar event, or within a buffer window are hidden automatically. The contact
  sees only genuinely open slots without any manual updating on your part.
</p>
<p>
  The booking page displays your name, a meeting description you write when configuring the
  meeting type, and a clean calendar grid showing available days and time slots. The contact
  selects a date, sees available times for that day, picks a slot, fills in the intake form,
  and confirms. The entire booking flow takes under sixty seconds. The page is mobile-optimized
  and loads without any account creation step for the contact, removing every friction point
  between your link and a confirmed meeting.
</p>

<h3>Meeting Type Configuration</h3>
<p>
  Each meeting type has its own URL, duration, name, description, location setting (video
  call link, phone, or in-person address), color code for calendar display, and intake form.
  You can create as many meeting types as you need. Common configurations include a short
  discovery call for inbound leads, a longer demo for prospects further in the sales process,
  a weekly check-in for ongoing clients, and an internal one-on-one template for team
  scheduling. Meeting types can be paused — they stop accepting new bookings while keeping
  existing confirmed meetings intact — and re-activated at any time.
</p>
<p>
  Meeting type duration options range from 15 minutes to 4 hours in 15-minute increments.
  You can also set a custom duration outside these increments for specific use cases. The
  meeting location field supports a static video call URL (Zoom, Google Meet, Microsoft Teams),
  a phone number, an in-person address, or a custom field where the contact provides the
  location — useful for meetings that take place at the client's office. CalendarFlow
  includes the location detail in both the confirmation email and the calendar invite.
</p>

<h3>Buffer Time Between Meetings</h3>
<p>
  Buffer time settings add a gap before and after each booked meeting during which no
  additional bookings can be scheduled. A fifteen-minute buffer after a sixty-minute call,
  for example, prevents back-to-back bookings that leave no time for follow-up notes, bio
  breaks, or preparation for the next meeting. Buffer times are configured per meeting type
  so shorter meetings can have shorter buffers than longer, more intensive ones.
</p>
<p>
  You can set separate before-meeting and after-meeting buffers. A common configuration for
  a salesperson is zero minutes before (meetings can start immediately after a gap) and
  fifteen minutes after (to write notes and prepare for the next call). The buffer time is
  applied to bookings made by contacts — your own manually added calendar events are not
  affected. Buffer slots appear as blocked time on your booking page so contacts cannot book
  into them, but they do not create new events on your connected calendar.
</p>

<h3>Team Round-Robin Scheduling</h3>
<p>
  Round-robin scheduling distributes incoming bookings across a team of people automatically,
  routing each new booking to the next available team member. Set up a round-robin meeting
  type by selecting multiple team members from your CalendarFlow team and enabling round-robin
  distribution. When a contact books through a round-robin meeting type URL, CalendarFlow
  checks each team member's calendar in order and assigns the booking to the first person with
  an open slot at the requested time.
</p>
<p>
  Round-robin scheduling is ideal for sales teams handling inbound demo requests, customer
  success teams managing onboarding calls, and support teams scheduling technical
  consultations. Each team member must have their calendar connected to CalendarFlow for
  availability to be checked accurately. The confirmation email and calendar invite reflect
  the specific team member assigned to the booking, so the contact knows exactly who they
  are meeting with. Managers can view the distribution history to confirm bookings are
  routing evenly across the team.
</p>

<h3>Custom Intake Questions</h3>
<p>
  Before confirming a booking, contacts complete an intake form you configure per meeting
  type. The form appears between the time slot selection and the final confirm step in the
  booking flow. Default fields include name and email; you add custom questions as short
  text, long text, dropdown select, or checkbox inputs. Mark any question as required to
  prevent booking without an answer.
</p>
<p>
  Intake questions are most valuable for sales and support meeting types where context before
  the call improves the meeting quality significantly. Common questions include company size,
  current tools in use, specific topic the contact wants to discuss, and how they heard about
  your business. Intake responses are visible in the CalendarFlow Bookings dashboard next to
  each confirmed meeting and are included in the booking notification email sent to the host,
  so you arrive at every call already prepared. For more on
  <a href='/blog/zapier-vs-make-vs-n8n-workflow-automation-2026'>automating meeting follow-up
  workflows</a> triggered by new CalendarFlow bookings, see our workflow automation comparison.
</p>

<h3>Automated Confirmation and Reminder Emails</h3>
<p>
  CalendarFlow sends automated emails to both the contact and the host at three points in the
  booking lifecycle: immediately upon booking confirmation, 24 hours before the meeting, and
  again 1 hour before the meeting. The confirmation email includes the meeting name, date and
  time in the contact's local timezone, location or video call link, a calendar invite
  attachment (.ics file), and a reschedule or cancel link the contact can use without
  contacting you directly.
</p>
<p>
  Reminder emails repeat the meeting details and the video call link so the contact does not
  need to search for the original confirmation. The host receives a separate notification for
  each new booking with the contact name, meeting type, time, and intake form responses
  included. All automated emails are sent from a CalendarFlow domain by default, with your
  name and meeting branding applied. Custom reply-to addresses ensure that any replies from
  contacts land in your own inbox rather than disappearing into a no-reply queue.
</p>

<h3>Group Meeting Scheduling</h3>
<p>
  Group meeting types allow multiple contacts to book the same time slot up to a maximum
  capacity you define. A webinar, a group onboarding session, or a workshop with up to ten
  participants can be scheduled through a single booking page. Each participant books
  individually and receives their own confirmation email and calendar invite, while the host
  sees the full attendee list in the Bookings dashboard.
</p>
<p>
  Once the maximum capacity is reached, the slot is hidden from the booking page so new
  contacts cannot over-book it. You can close a group slot early by manually marking it full
  in the dashboard, or re-open a sold-out slot by increasing the capacity limit. Group
  meeting types work well for recurring community events, batch onboarding calls for new
  customers at the same plan tier, and any scenario where bringing multiple contacts together
  in one session is more efficient than individual meetings.
</p>

<h3>Timezone Detection for Global Contacts</h3>
<p>
  CalendarFlow detects each visitor's local timezone automatically when they open a booking
  page. Available time slots are displayed in the contact's local time — no manual timezone
  selection required. The host's availability is stored in their own timezone; CalendarFlow
  converts between the two transparently. The confirmation email, calendar invite, and
  reminder emails all display the meeting time in the contact's local timezone with a UTC
  offset included for reference.
</p>
<p>
  Timezone detection eliminates a common source of no-shows: the contact who misread a
  time zone and showed up an hour early or an hour late. For businesses with contacts across
  multiple countries, correct automatic timezone handling is non-negotiable. CalendarFlow
  uses the browser's reported timezone as the primary signal and falls back to IP geolocation
  if the browser signal is unavailable. Contacts can manually override the detected timezone
  on the booking page if they prefer to see slots in a different timezone — useful for
  travelers booking from a temporary location.
</p>

<h2>Common Use Cases</h2>

<h3>Inbound Sales Scheduling</h3>
<p>
  Sales teams handling inbound leads from a website or ad campaign use CalendarFlow to
  convert interest into booked demos immediately, while the lead's attention is highest.
  A "Book a Demo" button on the pricing page links directly to a 30-minute demo meeting type.
  Intake questions capture company size, current solution, and primary pain point so the
  sales rep arrives at the demo with full context and no discovery wasted on logistics.
  Round-robin distribution across the sales team ensures every rep gets a fair share of
  inbound bookings without manual assignment. Confirmation and reminder emails reduce no-show
  rates by keeping the meeting top of mind. The result is a self-service scheduling flow that
  generates qualified, prepared demos without requiring any SDR time for scheduling coordination.
</p>

<h3>Freelance and Consultant Client Calls</h3>
<p>
  Independent consultants, coaches, and freelancers share a CalendarFlow booking link in
  their email signature and LinkedIn profile so clients and prospects can schedule time
  without chasing availability through email. Multiple meeting types serve different
  relationship stages: a free 15-minute introductory call for new prospects, a paid 60-minute
  strategy session for clients, and a recurring 30-minute check-in for ongoing retainer
  relationships. Buffer times between meetings preserve space for preparation and follow-up.
  The timezone detection feature is particularly valuable for consultants working with
  international clients: contacts in different countries see available slots in their own
  time without any manual coordination from the consultant. Every booked call adds directly
  to the consultant's Google Calendar with the intake responses attached.
</p>

<h3>Internal Team Meeting Coordination</h3>
<p>
  Managers and HR teams use CalendarFlow to streamline recurring internal scheduling tasks
  that currently consume significant email back-and-forth: performance review meetings,
  one-on-ones, new hire orientation sessions, and benefits enrollment appointments. Rather
  than coordinating each meeting individually, the manager creates a meeting type, sets
  appropriate duration and buffer times, and shares the link with the relevant team members.
  Each person books into an available slot independently, spreading meetings across the week
  according to mutual availability without any manual calendar management. For group
  onboarding or all-hands scheduling, the group meeting type lets multiple team members book
  the same session slot up to a defined capacity, eliminating the need to send calendar
  invites individually to each attendee.
</p>

<div class="doc-tip">
  <strong>Tip:</strong> Set your minimum scheduling notice to at least four hours for any
  meeting type where you need preparation time. This setting, found under each meeting type's
  Advanced Options, prevents contacts from booking a slot thirty minutes from now before you
  have had any chance to review their intake responses or prepare for the conversation.
</div>

<h2>Frequently Asked Questions</h2>

<div class="article-faq">
  <div class="faq-item">
    <h3>How do I set up a booking page?</h3>
    <p>
      Go to <a href='/tools/calendar-flow'>CalendarFlow</a> and click Get Started. The setup
      flow walks you through three steps: connecting your calendar, setting your working hours,
      and creating your first meeting type. Calendar connection requires authorizing CalendarFlow
      to read (not write) your Google Calendar or Microsoft Outlook calendar — this read access
      is used solely to identify busy times and prevent double-booking. Working hours define
      when your booking page shows available slots; set them to match the times you genuinely
      want to take external meetings, which may be narrower than your full working day. After
      creating your first meeting type, CalendarFlow generates a unique booking page URL in the
      format calendarflow.app/your-name/meeting-type-slug. Copy this URL and paste it anywhere
      you want contacts to be able to schedule with you. The booking page is live immediately —
      there is no approval step or waiting period. Test your own booking page by opening it in
      an incognito browser window and booking a test appointment to confirm the flow works end
      to end before sharing the link publicly.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I configure availability and buffer times?</h3>
    <p>
      Working hours are configured globally under Account → Availability → Working Hours.
      Toggle each day of the week on or off and set start and end times for active days. These
      hours apply as the outer boundary for all meeting types — no booking can be made outside
      these hours regardless of meeting type settings. Within working hours, individual meeting
      types can further restrict availability: for example, limiting a 60-minute strategy call
      to Tuesday and Thursday afternoons even though your working hours span Monday through
      Friday. Meeting-type-specific availability is configured in the meeting type settings
      under Availability Override. Buffer times are configured per meeting type under Advanced
      Options → Buffer Time. Set separate before-meeting and after-meeting buffer durations
      in 5-minute increments from 0 to 60 minutes. Buffer time is applied automatically to
      all bookings for that meeting type. You can also block specific dates — vacation,
      holidays, personal days — under Account → Availability → Date Overrides, which removes
      all availability for the selected date regardless of working hours or meeting type
      settings.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I create different meeting types?</h3>
    <p>
      Navigate to Meeting Types in the left sidebar and click New Meeting Type. The creation
      form has five sections. Details: enter the meeting name, a short description visible
      on the booking page, and the duration. Location: choose between a video call link
      (paste your Zoom or Google Meet room URL), phone call (enter your number), in-person
      address, or ask the contact to provide the location. Availability: optionally restrict
      this meeting type to specific days or times within your working hours. Intake Questions:
      add any custom questions you want to collect before the booking is confirmed. Advanced:
      set buffer times, minimum scheduling notice (how far in advance someone must book),
      maximum future booking window (how many days out slots are shown), and maximum bookings
      per day for this meeting type. Click Save. The meeting type is live immediately with its
      own unique URL. You can create as many meeting types as needed and pause any of them
      temporarily without deleting the configuration. Pausing a meeting type hides the booking
      page from new visitors while keeping all existing confirmed bookings active.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I set up team round-robin scheduling?</h3>
    <p>
      Round-robin scheduling requires at least two team members in your CalendarFlow account,
      each with their calendar connected. First, invite team members under Account → Team →
      Invite Member. Each invited member receives an email to join the CalendarFlow team and
      connect their own calendar. Once team members are connected, create a new meeting type
      and under the Host section switch from Individual to Round-Robin. Select the team members
      to include in the rotation. By default, CalendarFlow distributes bookings equally across
      included team members — the next available member in the rotation receives each new
      booking. You can weight the distribution if one team member should receive more bookings
      than others by adjusting the distribution percentage in the round-robin settings.
      Alternatively, switch from equal rotation to load-balancing mode, where each new booking
      goes to the team member with the fewest bookings in the current period. The round-robin
      meeting type generates a single shared booking URL — contacts see one unified booking
      page without knowing which team member they will be assigned to until the confirmation
      email arrives.
    </p>
  </div>

  <div class="faq-item">
    <h3>How do I customize the booking confirmation email?</h3>
    <p>
      Open the meeting type you want to customize and click Email Settings. The confirmation
      email template editor shows the default layout with merge fields for meeting name, date,
      time, location, and the contact's name. Click any text block to edit it — add a personal
      greeting, include your company's tone of voice, or add specific pre-meeting instructions
      such as asking the contact to review a document or test their video connection before
      joining. Merge fields are inserted using double-curly-brace notation: for example,
      adding "Hi {{contact_name}}," at the top of the email personalizes every confirmation
      automatically. You can edit the subject line of the confirmation email and the 24-hour
      and 1-hour reminder emails independently — each has its own template in the Email
      Settings panel. The reply-to address on all automated emails defaults to your connected
      account email so contact replies land in your inbox. Logo and color customization is
      available in Account → Branding, where changes apply to all booking pages and email
      templates across all meeting types simultaneously.
    </p>
  </div>
</div>
`;
