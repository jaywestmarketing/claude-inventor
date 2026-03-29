# AutomateStack — Claude Daily Automation System

## Mission
Demand-validation engine disguised as a free tools dashboard.
Pipeline: **traffic → waitlist signups → validation → monetization**.
Browser-based business automation tools added daily via market research. Tools with the most waitlist interest get fully built and monetized.

## Architecture
- **Framework:** Next.js App Router (TypeScript), static export
- **Styling:** CSS glass-morphism (semi-transparent white tiles, light shadows)
- **Data:** Static TypeScript — `src/data/tools.ts` (tool registry + session logs), `src/data/session-history.ts` (changelog)
- **SEO:** Schema.org JSON-LD triple stack, dynamic sitemap, robots.txt, OpenGraph + Twitter Cards
- **Waitlist:** localStorage keyed by tool slug (upgrade to backend later)
- **Deployment:** Static export on Netlify, no backend/API keys required for demos

---

## SESSION STARTUP — MANDATORY EVERY SESSION

This is a **recurring automation**. Every session continues from the last. Never start fresh.

### 1. Load State (do first, no exceptions)
```
READ src/data/session-history.ts   → understand all previous sessions
READ src/data/tools.ts             → know every tool and its current state
RUN  git log --oneline -20         → detect external pushes from other sessions
```
If git log shows commits not in session-history, read those changed files before proceeding.

### 2. Identify Priorities
1. Read `nextSessionPlan` from the latest `SessionEntry` — this is your **#1 priority**
2. Count tools per category — identify underrepresented categories
3. Check which cities are already used (avoid duplicates)

### 3. Research (web search required — NEVER SKIP)

**For each search: extract specific data points, don't just read results. Record competitor names, prices, complaint quotes, and revenue figures.**

#### New Tool Discovery (3-5 searches)
- `trending business automation tools {current_year}` → extract: tool names, categories, user counts
- `most popular SaaS tools for {rotate_audience} {current_year}` → extract: tool names, pricing, audience size
- `Product Hunt business productivity launches this week` → extract: new entrants, feature lists
- `best new {underrepresented_category} software {current_year}` → extract: gaps in market
- `GitHub trending repos business automation` → extract: popular projects, issue complaints, feature gaps

#### Existing Tool Maintenance (rotate 3-5 tools per session)
- `{competitor_name} reviews {current_year}` → extract: NEW complaints not already in tools.ts
- `{competitor_name} pricing changes {current_year}` → extract: price increases (opportunity signal)
- `{tool_category} new features {current_year}` → extract: features competitors added that we should note

#### Keyword & SEO Intelligence
- `{tool_category} keywords {current_year}` → extract: high-volume terms not in our keyword lists
- `best {tool_category} alternative {current_year}` → extract: "[competitor] alternative" keyword patterns
- `people also ask {tool_category}` → extract: exact questions for FAQ sections

### Research Source Hierarchy (prioritize in this order)
1. **G2, Capterra, TrustRadius** — verified reviews with company size context
2. **Reddit (r/smallbusiness, r/startups, r/SaaS, r/entrepreneur)** — unfiltered complaints
3. **Product Hunt** — launch data, upvotes, competitor landscape
4. **GitHub Issues** — technical complaints, feature requests on open-source competitors
5. **Crunchbase / SimilarWeb** — revenue estimates, traffic data
6. **Company pricing pages** — direct price verification (never rely on outdated data)

### If Research Yields Nothing Useful
- Don't fabricate data. Skip the tool and move to the next candidate.
- Log what you searched and why it failed in `session-history.ts` under `researchNotes`
- Move to updating existing tools instead — there's always compounding work to do

---

## DAILY EXECUTION LOOP

### Phase 1: Tool Selection & Validation

Select 1-5 new tools per session. Every tool MUST pass ALL gates:

| Gate | Requirement |
|------|-------------|
| Revenue | 3+ competitors earning >$5,000/month (verify via search) |
| Pain | Documented negative reviews (cite source: G2, Capterra, Reddit, TrustRadius) |
| Feasibility | Works as browser-only web app (no backend, no API keys for demo) |
| Audience | Serves 1+ target audiences (see Audiences table below) |
| Unique | Not already in `tools.ts`, not a duplicate concept |
| Category | Prefer underrepresented categories for dashboard diversity |

**Priority scoring (rank candidates before building):**
| Signal | Points |
|--------|--------|
| Competitor revenue >$10M ARR | +3 |
| 10+ negative reviews found | +2 |
| Serves multiple audiences | +2 |
| Underrepresented category | +2 |
| Already in queued pipeline | +1 |

Build highest-scoring tools first.

### Phase 2: Deep Research Per Tool

Complete ALL sections before writing any code. No dummy data — every stat must come from research.

**A. Competitor Analysis (5 minimum per tool)**
For each competitor, record:
- Name, verified price range, top complaint (specific quote + source), ARR estimate if available

**B. Competitor Fixes (6+ per tool)**
- Each fix directly addresses a specific competitor complaint
- Frame as "We do X instead of Y" — concrete, not vague
- Example: "Instant setup in under 5 minutes — no consultants needed" (addresses Workday's complexity)
- NOT acceptable: "Better user experience" (too vague)

**C. Keyword Research (20 per tool)**
- 5 high-intent primary keywords (transactional: "best X software", "X tool for small business")
- 5 "[competitor] alternative" keywords
- 5 long-tail keywords (3-5 words, lower competition)
- 5 question-based keywords for FAQ/AEO ("how to automate X", "what is the best X")
- Always include "best [category] {current_year}" pattern

**D. Local SEO Cities (10 per new tool)**
Pick 10 US cities meeting ALL criteria:
- Population 70k-350k (low competition, real demand)
- Growing business/tech scene or university town
- NOT already used by another tool in `tools.ts` (check all existing `targetCities`)
- Set `competitionLevel: 'low'` or `'medium'`

**Also each session:** Add 10 NEW cities to 2-3 existing tools (expand coverage, rotate oldest-updated tools first).

**City expansion for existing tools:** Each session, add 10 NEW cities to 2-3 existing tools (prioritize oldest tools first)

**E. Tool Specification**
- 8 features (specific actions, not generic claims)
- Tagline: one-line value prop containing primary keyword
- Description: 2-3 sentences, primary keyword in first 150 words, answers "What is [tool name]?"

### Phase 3: Build

1. **Add tool to `src/data/tools.ts`** — must match the `Tool` interface exactly:
   ```typescript
   {
     id: 'kebab-case-unique-id',
     name: 'ToolName',
     tagline: 'One-line value prop with primary keyword',
     description: 'Primary keyword in first 150 words. Direct answer to "What is [tool]?"',
     category: 'hr' | 'finance' | 'marketing' | 'sales' | 'operations' | 'productivity',
     status: 'demo',
     icon: 'emoji',
     features: [...],          // exactly 8
     keywords: [...],          // exactly 20
     competitors: [...],       // 5+ Competitor objects {name, priceRange, topComplaint}
     competitorFixes: [...],   // 6+ specific fix strings
     targetCities: [...],      // 10 CityTarget objects {city, state, population, competitionLevel}
     dateAdded: 'YYYY-MM-DD',
     waitlistCount: 0,
     slug: 'url-slug'
   }
   ```

2. **Add to `sessionLogs`** in `tools.ts`

3. **Tool pages auto-generate** via `[slug]/page.tsx` and `[slug]/[city]/page.tsx` — no manual page creation needed

4. **New categories?** Update `categoryLabels` and `categoryBadgeClass` in `tools.ts`

### Phase 4: Build Verification (NEVER SKIP)

After all code changes, run:
```bash
npx next build 2>&1 | tail -20
```
If build fails: fix errors immediately before proceeding. Do not record the session as complete until the build passes.

### Phase 5: Update Existing Tools (COMPOUNDING — DO NOT SKIP)

Every session must improve 2-3 existing tools. Pick oldest-updated tools first.

**Updates to make:**
- Add 10 new cities per tool (expand local SEO reach, maintain regional diversity)
- Refresh keywords if research revealed better ones (swap weakest performers)
- Update competitor data if pricing changed or new complaints found
- Add new `competitorFixes` if competitors got new complaints
- Update descriptions if AEO research suggests better phrasing
- Add internal links between related tools (cross-sell within the dashboard)

**Tool Lifecycle Management:**
| Stage | Criteria | Action |
|-------|----------|--------|
| `demo` | Just built, no waitlist data | Default state for new tools |
| `waitlist` | Has waitlist signups, demo is polished | Upgrade status, add "Join Waitlist" CTA prominence |
| `live` | Owner has configured and launched | Update status, add pricing/signup links |

Update tool `status` field when lifecycle stage changes.

### Phase 6: Record Everything

**A. Update `src/data/session-history.ts`** — add new `SessionEntry`:
```typescript
{
  sessionDate: 'YYYY-MM-DD',
  sessionNumber: N,           // increment from last session
  toolsAdded: [{name, slug, category}],
  toolsUpdated: [{name, changes: ['what changed']}],
  keywordsResearched: [{tool, keywords: [...], trending: [...]}],
  citiesAdded: [{tool, cities: [...]}],
  competitorChanges: [{tool, notes: 'what changed and why'}],
  seoUpdates: ['specific SEO changes made'],
  nextSessionPlan: [           // CRITICAL — must be SPECIFIC
    'Build [specific tool name] — [specific reason from research]',
    'Expand cities for [tool] — add [specific region/states]',
    'Update [tool] keywords — [keyword] is trending',
    'Research [specific category] — [specific opportunity signal]'
  ]
}
```

**B. Update CLAUDE.md** — update "Current Tools" and "Queued Tools" sections at bottom of this file.

**C. Git commit** with descriptive message summarizing what was added/changed.

---

## CONTEXT BUDGET MANAGEMENT

If running low on context window during a session:

1. **Must complete:** Record session history + nextSessionPlan (Phase 6)
2. **Prioritize:** New tools over existing tool updates
3. **Defer gracefully:** Move incomplete work to nextSessionPlan with specific details
4. **Never:** Leave tools.ts in a broken state or skip build verification

---

## ERROR RECOVERY

| Problem | Action |
|---------|--------|
| Build fails after changes | Fix TypeScript errors immediately. Check interface conformance. |
| Web search returns no results | Try alternative queries. Use competitor names directly. Check G2/Capterra/Reddit specifically. |
| Research can't verify $5K/mo revenue | Skip that tool candidate. Move to next highest-scoring. |
| Git conflict detected | Read both versions. Preserve all tool data. Merge intelligently. |
| City already used by another tool | Pick a different city in same population range. |
| Category has no competitors >$5K/mo | Skip category. Focus on validated categories. |

### Phase 6: Build Verification (ALWAYS do this last)
1. Run `npm run build` — confirm zero errors
2. Spot-check that new tool pages render (check the slug URL would resolve)
3. Verify sitemap would include new pages
4. Commit all changes with a descriptive message

---

## SEO STRATEGY

### JSON-LD Triple Stack (every tool page)
1. `SoftwareApplication` — tool metadata, pricing, features
2. `Article` (comparison) — tool vs competitors structured data
3. `FAQPage` — 5+ Q&As targeting "People Also Ask" queries

### AEO (Answer Engine Optimization)
- First 150 words: direct answer to "What is [tool name]?"
- Stats/data every 150-200 words (AI citation bait)
- FAQ answers exact search queries
- 55% of AI citations come from first 30% of page — front-load value

### On-Page SEO
- Title: `[Tool Name] - Free [Category] Tool | AutomateStack`
- Meta description: 150-160 chars, primary keyword + CTA
- Semantic HTML, heading hierarchy (H1 > H2 > H3)
- OpenGraph + Twitter Card meta tags
- Dynamic sitemap.xml and robots.txt via Next.js
- **Internal linking:** Every tool page links to 2-3 related tools ("You might also like...")
- **Breadcrumbs:** Dashboard > Category > Tool Name (structured data + visible)

### Local SEO (per city per tool)
- `LocalBusiness` + `Service` schema per city page
- Unique content per city — mention local industries, business climate
- NOT template swaps — each city must have researched, unique content
- Every city gets a dedicated page at `/tools/[slug]/[city-state]`

### Multi-Engine Targeting
- **Google/Bing/Yahoo/DuckDuckGo:** Schema.org, semantic HTML, FAQ, meta tags
- **AI Engines (ChatGPT, Perplexity, Claude):** AEO, structured answers, cited stats
- **Social:** OpenGraph + Twitter Cards for link previews

### Robots.txt Strategy
- Allow AI retrieval bots: ChatGPT-User, PerplexityBot, ClaudeBot, OAI-SearchBot
- Block AI training bots: GPTBot, Google-Extended, CCBot
- Currently allowing all — adjust `src/app/robots.ts` when ready

---

## DESIGN SYSTEM

- **Tiles:** Semi-transparent white, glass-morphism effect, soft shadows
- **Layout:** CSS Grid responsive (1 col mobile → 2 tablet → 3-4 desktop)
- **Aesthetic:** Google Cloud Console inspired — clean, professional, minimal
- **Mobile-first:** Design for mobile FIRST. 83% of traffic is mobile.
- **Category badges:** Color-coded per category (hr, finance, marketing, sales, operations, productivity)

---

## WAITLIST & CONVERSION

- **Fields:** Name + Email only (max conversion)
- **Storage:** localStorage keyed by tool slug
- **UX:** Confirmation with "early access" messaging + estimated launch
- **Validation signal:** Most waitlist signups → build that tool first
- **Launch window:** Within 90 days of waitlist opening

---

## TARGET AUDIENCES

| Audience | Pain Points | Tool Examples |
|----------|-------------|---------------|
| HR Managers | Manual onboarding, compliance, PTO chaos | Onboarding, PTO trackers, offer letters |
| Office Managers | Meeting scheduling, supplies, visitors | Schedulers, supply trackers, visitor logs |
| Small Biz Owners | Invoicing, expenses, proposals | Invoicing, expense reports, proposals |
| CEOs/Executives | No KPI visibility, board reports | KPI dashboards, OKR trackers |
| Sales Teams | Lead follow-up, commissions, proposals | Lead sequences, CRM lite, commission calc |
| Marketing Teams | Content planning, email, A/B testing | Content calendars, email signatures |
| Desk Clerks | Appointments, documents, data entry | Appointment schedulers, templates |
| Lead Gen Specialists | Landing pages, lead scoring, outreach | Landing page builders, lead scoring |
| Operations Managers | Workflows, inventory, vendors | Workflow automation, inventory trackers |

---

## KEY FILES

| File | Purpose |
|------|---------|
| `src/data/tools.ts` | **Central tool registry** — all tools, metadata, keywords, competitors, cities, session logs |
| `src/data/session-history.ts` | **Session changelog** — per-session history, research notes, next-session plans |
| `src/app/page.tsx` | Main dashboard landing page |
| `src/app/tools/[slug]/page.tsx` | Dynamic tool detail pages (SSG) |
| `src/app/tools/[slug]/ToolDetailClient.tsx` | Client-side tool demo + waitlist UI |
| `src/app/tools/[slug]/[city]/page.tsx` | Dynamic city-specific pages (local SEO) |
| `src/app/tools/[slug]/[city]/CityDetailClient.tsx` | City page client component |
| `src/app/layout.tsx` | Root layout with global SEO meta |
| `src/components/ToolTile.tsx` | Tool card component with waitlist form |
| `src/components/ToolsGrid.tsx` | Dashboard grid layout |
| `src/app/globals.css` | Glass-morphism design system |
| `src/app/robots.ts` | Dynamic robots.txt generation |
| `src/app/sitemap.ts` | Dynamic sitemap.xml generation |

---

## GITHUB SYNC PROTOCOL
- External pushes may come from another Claude Code session at any time
- Always check `git log` at session start for commits not in session-history
- If conflicts found: preserve both sets of changes, merge intelligently
- Check GitHub issues on popular SaaS tools for user complaint data

---

## CRITICAL RULES (NEVER VIOLATE)

1. **Browser-only** — every tool works in-browser, no backend, no server, no API keys for demo
2. **Complete tools only** — working demo + waitlist + FAQ + city SEO + JSON-LD schema stack
3. **Research before building** — validate demand (competitors >$5K/mo, documented complaints) before code
4. **Compound daily** — update existing tools AND build new ones each session
5. **Session history is truth** — read it first, update it last
6. **Quality over quantity** — one well-researched tool beats three rushed ones
7. **Real data only** — every city, FAQ, stat, competitor complaint must be researched and verified
8. **TypeScript interfaces** — all tool data must match the `Tool` interface exactly
9. **Minimums per tool** — 20 keywords, 5 competitors, 10 cities, 8 features, 6 competitor fixes
10. **Mobile-first** — design for mobile, scale up
11. **Never skip startup** — session-history and tools.ts read before any work
12. **Specific plans** — nextSessionPlan entries must name specific tools, specific tasks, specific reasons
13. **Build must pass** — never commit code that doesn't compile
14. **Extract, don't browse** — every search must produce specific data points recorded in tools.ts

---

## CURRENT TOOLS

### Session 1 (2026-03-25) — Next.js Dashboard Launch
1. **OnboardFlow** (HR) — Employee onboarding automation — `onboard-flow`
2. **InvoiceAI** (Finance) — AI-powered invoice generation — `invoice-ai`
3. **LeadPilot** (Marketing) — Lead capture and nurturing — `lead-pilot`
4. **CalendarFlow** (Productivity) — Smart meeting scheduling — `calendar-flow`
5. **ExpenseBot** (Finance) — Automated expense reporting — `expense-bot`

### Static HTML Demos (in `public/tools/`)
6. **Smart Invoice Generator** — `public/tools/smart-invoice-generator/` — Cities: Boise ID, Greenville SC, Huntsville AL, Provo UT, Fayetteville AR
7. **AI Meeting Notes Summarizer** — `public/tools/ai-meeting-notes/` — Cities: Boise ID, Huntsville AL, Wilmington NC, Provo UT, Lakeland FL

## QUEUED TOOLS (Research & Build Next — Prioritize Top Items)
1. **AI Meeting Notes Summarizer** (Productivity) — research complete, static demo built, NEEDS Next.js integration
2. **AI Business Proposal/Quote Builder** (Sales) — PandaDoc $100M ARR, Proposify well-funded, clear pain points
3. PTO/Time-Off Tracker (HR, office managers)
4. Payroll Calculator (HR, small business)
5. Social Media Scheduler (marketing teams)
6. Helpdesk Ticketing (operations, customer support)
7. Email Signature Generator (marketing, all office workers)
8. KPI Dashboard Builder (executives, managers)
9. Document Template Library (desk clerks, office managers)
10. Client Portal Builder (sales, account managers)
11. Commission Calculator (sales teams)
12. Proposal Generator (sales, freelancers)
