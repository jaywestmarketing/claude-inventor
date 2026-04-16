# AutomateStack — Claude Daily Automation System

## Mission
**Demand-validation engine disguised as a free tools dashboard.**

Pipeline: **traffic → waitlist signups → validation → monetization**

Every tool must solve a documented, expensive problem that businesses already pay $5K+/month to solve badly. Build painkillers, not vitamins.

## Architecture
- **Framework:** Next.js App Router (TypeScript), static export
- **Styling:** Glass-morphism — semi-transparent white tiles, soft shadows, color-coded category badges
- **Data:** `src/data/tools.ts` (tool registry + session logs), `src/data/session-history.ts` (changelog)
- **SEO:** Schema.org JSON-LD triple stack, dynamic sitemap, robots.txt, OpenGraph + Twitter Cards
- **Waitlist:** localStorage keyed by tool slug (upgrade to backend later)
- **Deploy:** Static export on Netlify. No backend/API keys for demos.
- **Design:** Google Cloud Console aesthetic. Mobile-first (83% of traffic is mobile).

---

## SESSION PROTOCOL (MANDATORY — NEVER SKIP)

This is a **recurring automation**. Every session continues from the last.

### 1. Load State
```
READ src/data/session-history.ts   → all previous sessions
READ src/data/tools.ts             → every tool and its state
RUN  git log --oneline -20         → detect external pushes
```
If git log shows commits not in session-history → read changed files before proceeding.

### 2. Set Priorities
1. Read `nextSessionPlan` from latest `SessionEntry` — this is **#1 priority**
2. Count tools per category → find underrepresented categories
3. Collect ALL `targetCities` across ALL tools → avoid duplicates
4. Find oldest-updated tools → these get compounding updates

### 3. Research (NEVER SKIP)
Every search must produce **extracted data points** — names, prices, complaint quotes, revenue figures. No vague summaries.

**Research tracks (run in parallel where possible):**

| Track | What to Search | What to Extract |
|-------|---------------|-----------------|
| **New tool discovery** | Trending automation tools, SaaS launches, Reddit/ProductHunt, GitHub trending repos | Tool names, categories, user counts, pricing, gaps |
| **Competitor maintenance** | Reviews, pricing changes, outages, alternatives for 3-5 existing tools (oldest first) | NEW complaints, price increases, feature additions, churn signals |
| **Keyword intelligence** | Category keywords, "[competitor] alternative", "people also ask", "how to automate X" | High-volume terms not yet in our keyword lists |
| **GitHub/open-source** | Issues on popular OSS competitors (10+ thumbs up), "is there an alternative" discussions | Feature requests = validated demand, bug reports = pain points |

**Source priority:** G2/Capterra/TrustRadius > Reddit > Product Hunt > GitHub Issues > Crunchbase/SimilarWeb > Pricing pages > Twitter/X

**If research yields nothing useful:** Don't fabricate. Log what you searched in session-history. Move to updating existing tools.

### 4. Select & Score New Tools (1-5 per session)

**Every tool must pass ALL gates:**

| Gate | Requirement |
|------|-------------|
| Revenue | 3+ competitors earning >$5K/month (verified) |
| Pain | Documented negative reviews with specific quotes + sources |
| Feasibility | Browser-only web app, no backend/API keys for demo |
| Audience | Serves 1+ target audiences (see table below) |
| Unique | Not already in tools.ts, not a duplicate concept |

**Scoring (rank ALL candidates, build highest first):**

| Signal | Points |
|--------|--------|
| Competitor revenue >$10M ARR | +3 |
| 10+ negative reviews found | +2 |
| Serves multiple audiences | +2 |
| Underrepresented category | +2 |
| In queued pipeline | +1 |
| Competitor recently raised prices | +1 |
| Trending on Product Hunt/Reddit | +1 |

### 5. Deep Research Per Tool (BEFORE any code)

For each new tool, complete ALL sections:

**A. Competitors (5+ minimum)**
- Name, verified price range, top complaint (specific quote + source), ARR estimate
- Recent pricing changes, new features, audience fit

**B. Competitor Fixes (6+ per tool)**
- Each fix addresses a specific named competitor's documented complaint
- Concrete: "Instant setup in under 5 minutes — no consultants needed"
- NOT vague: "Better user experience" ← rejected

**C. Keywords (20 per tool, structured)**
- 5 high-intent primary ("best X software", "X tool for small business")
- 5 "[competitor] alternative" ("Calendly alternative", "cheaper than HubSpot")
- 5 long-tail (3-5 words, lower competition)
- 5 question-based for AEO ("how to automate X", "what is the best X for")
- Always include "best [category] {current_year}"

**D. Local SEO Cities (10 per new tool)**
- Population 70K-350K, growing business/tech/university presence
- NOT already used by any other tool (check ALL tools)
- Geographic diversity (spread across regions)
- Set `competitionLevel: 'low'` or `'medium'`

**E. Tool Spec**
- 8 features (specific user actions, not generic claims)
- Tagline: one-line value prop with primary keyword
- Description: 2-3 sentences, primary keyword in first 150 words, answers "What is [tool name]?"

### 6. Build

Add tool to `src/data/tools.ts` matching the `Tool` interface exactly:
```typescript
{
  id: 'kebab-case-unique-id',
  name: 'ToolName',
  tagline: 'Value prop with primary keyword',
  description: 'Primary keyword in first 150 words.',
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

- Add to `sessionLogs` in tools.ts
- Tool pages auto-generate via `[slug]/page.tsx` and `[slug]/[city]/page.tsx`
- New categories → update `categoryLabels` and `categoryBadgeClass`

### 7. Compound Existing Tools (DO NOT SKIP)

Every session must improve 2-3 existing tools (oldest-updated first):
- Add 10 new cities (expand local SEO, maintain regional diversity)
- Refresh keywords if research found better ones (swap weakest, keep 20 total)
- Update competitor data if pricing changed or new complaints found
- Add new `competitorFixes` for new complaints
- Update descriptions for better AEO phrasing
- Check if tool should move: `demo` → `waitlist` → `live`

### 8. Build Verification (NEVER SKIP)
```bash
npm run build 2>&1 | tail -30
```
Fix TypeScript errors immediately. Do NOT proceed until build passes.

### 9. Record Everything

**A. Add `SessionEntry` to `src/data/session-history.ts`:**
```typescript
{
  sessionDate: 'YYYY-MM-DD',
  sessionNumber: N,
  toolsAdded: [{name, slug, category}],
  toolsUpdated: [{name, changes: ['specific change']}],
  keywordsResearched: [{tool, keywords: [...], trending: [...]}],
  citiesAdded: [{tool, cities: [...]}],
  competitorChanges: [{tool, notes: 'what changed and why'}],
  seoUpdates: ['specific changes'],
  nextSessionPlan: [
    'Build [tool name] — [reason from research]',
    'Expand cities for [tool] — [region]',
    'Update [tool] keywords — [keyword] trending per [source]',
    'Research [category] — [opportunity signal]'
  ]
}
```

**B. Update CLAUDE.md** — Current Tools + Queued Tools sections at bottom.

**C. Git commit** with descriptive message.

---

## SEO STRATEGY

### Multi-Engine Targeting
| Engine | Strategy |
|--------|----------|
| Google | Schema.org, Core Web Vitals, semantic HTML, FAQ, internal links, local SEO pages |
| Bing/Yahoo | IndexNow, BingSiteAuth, structured data, meta tags |
| DuckDuckGo | Clean semantic HTML, no tracking, fast loads |
| AI Engines | AEO: structured answers, cited stats, front-loaded value, comparison tables |
| Social | OpenGraph + Twitter Cards |

### JSON-LD Triple Stack (every tool page)
1. `SoftwareApplication` — tool metadata, pricing, features
2. `Article` (comparison) — tool vs competitors
3. `FAQPage` — 5+ Q&As targeting "People Also Ask"

### AEO / GEO Rules
- First 150 words: direct answer to "What is [tool name]?"
- Stats/data every 150-200 words (AI citation bait)
- Front-load value — 55% of AI citations come from first 30% of page
- Include comparison tables (AI engines love structured comparisons)
- Structure as Q&A pairs, include "According to [source]" citations

### On-Page SEO
- Title: `[Tool Name] - Free [Category] Tool | AutomateStack`
- Meta: 150-160 chars, primary keyword + CTA
- Heading hierarchy: H1 > H2 > H3 (never skip)
- Internal links: every tool page → 2-3 related tools
- Breadcrumbs: Dashboard > Category > Tool Name
- URLs: `/tools/[slug]` and `/tools/[slug]/[city-state]`

### Local SEO (per city per tool)
- `LocalBusiness` + `Service` schema per city page
- Unique content per city (local industries, business climate, university) — NOT template swaps
- Cities: 70K-350K population, low competition

### Robots.txt
- Allow: ChatGPT-User, PerplexityBot, ClaudeBot, OAI-SearchBot
- Block: GPTBot, Google-Extended, CCBot (training bots)

---

## WAITLIST & CONVERSION
- **Fields:** Name + Email only (maximize conversion)
- **Storage:** localStorage by tool slug
- **UX:** "Early access" messaging, estimated launch date
- **Validation:** Most signups → build that tool first → notify on launch
- **Demo first:** Working interactive demo ABOVE the waitlist form

---

## TARGET AUDIENCES

| Audience | Pain Points | WTP |
|----------|-------------|-----|
| HR Managers | Manual onboarding, compliance, PTO chaos | $5-15/emp/mo |
| Office Managers | Scheduling, supplies, visitors | $20-50/mo |
| Small Biz Owners | Invoicing, expenses, proposals | $30-100/mo |
| CEOs/Executives | No KPI visibility, board reports | $50-200/mo |
| Sales Teams | Lead follow-up, commissions | $20-80/seat/mo |
| Marketing Teams | Content planning, email, A/B testing | $20-60/mo |
| Desk Clerks | Appointments, documents, data entry | $10-20/mo |
| Lead Gen Specialists | Landing pages, scoring, outreach | $30-100/mo |
| Operations Managers | Workflows, inventory, vendors | $30-100/mo |

**Rotate audiences each session.** Don't build 3 tools for the same audience in a row.

---

## ERROR RECOVERY

| Problem | Action |
|---------|--------|
| Build fails | Fix TypeScript errors, check interface conformance, rebuild |
| Search returns nothing | Try competitor names directly, check G2/Capterra/Reddit |
| Can't verify $5K/mo revenue | Skip tool candidate, move to next highest-scoring |
| Git conflict | Read both versions, preserve all tool data, merge intelligently |
| City already used | Pick different city in same population range and region |
| Session interrupted | Next startup: detect incomplete work via git log vs session-history, complete first |

## CONTEXT BUDGET
If running low on context:
1. **Must complete:** Session history + nextSessionPlan (preserves continuity)
2. **Prioritize:** New tools over existing tool updates
3. **Defer:** Move incomplete work to nextSessionPlan with specifics
4. **Never:** Leave tools.ts broken or skip build verification

---

## KEY FILES

| File | Purpose |
|------|---------|
| `src/data/tools.ts` | Central tool registry — all tools, metadata, keywords, competitors, cities, session logs |
| `src/data/session-history.ts` | Session changelog — history, research notes, next-session plans |
| `src/app/page.tsx` | Dashboard landing page |
| `src/app/tools/[slug]/page.tsx` | Dynamic tool detail pages (SSG) |
| `src/app/tools/[slug]/ToolDetailClient.tsx` | Client-side tool demo + waitlist UI |
| `src/app/tools/[slug]/[city]/page.tsx` | City-specific pages (local SEO) |
| `src/app/tools/[slug]/[city]/CityDetailClient.tsx` | City page client component |
| `src/app/layout.tsx` | Root layout with global SEO meta |
| `src/components/ToolTile.tsx` | Tool card component with waitlist form |
| `src/components/ToolsGrid.tsx` | Dashboard grid layout |
| `src/app/globals.css` | Glass-morphism design system |
| `src/app/robots.ts` | Dynamic robots.txt |
| `src/app/sitemap.ts` | Dynamic sitemap.xml |

---

## CRITICAL RULES (NEVER VIOLATE)

1. **Browser-only** — no backend, no server, no API keys for demos
2. **Complete tools** — working demo + waitlist + FAQ + city SEO + JSON-LD
3. **Research before code** — validate demand before building
4. **Compound daily** — update existing tools AND build new ones
5. **Session history is truth** — read first, update last, never skip
6. **Quality over quantity** — one well-researched tool > three rushed ones
7. **Real data only** — never fabricate cities, stats, complaints, or quotes
8. **TypeScript strict** — all data must match `Tool` interface exactly
9. **Minimums** — 20 keywords, 5 competitors, 10 cities, 8 features, 6 fixes per tool
10. **Mobile-first** — design for mobile, scale up
11. **Build must pass** — never commit broken code
12. **Extract, don't browse** — every search → specific data points in tools.ts
13. **Rotate audiences** — spread across segments
14. **Specific plans** — nextSessionPlan must name tools, tasks, and reasons

---

## GITHUB SYNC
- External pushes may come from another Claude Code session anytime
- Check `git log` at session start for commits not in session-history
- If conflicts: preserve both, merge intelligently
- If git log shows external work → read those files, integrate before proceeding

---

## CURRENT TOOLS

### Session 1 (2026-03-25) — Next.js Dashboard Launch
1. **OnboardFlow** (HR) — Employee onboarding automation — `onboard-flow` — 13 cities
2. **InvoiceAI** (Finance) — AI-powered invoice generation — `invoice-ai` — 13 cities
3. **LeadPilot** (Marketing) — Lead capture and nurturing — `lead-pilot` — 13 cities
4. **CalendarFlow** (Productivity) — Smart meeting scheduling — `calendar-flow` — 13 cities
5. **ExpenseBot** (Finance) — Automated expense reporting — `expense-bot` — 13 cities

### Session 2 (2026-04-16) — Sales Category Added
6. **ProposalPro** (Sales) — AI business proposal builder — `proposal-pro` — 10 cities

### Session 3 (2026-04-16, loop run 1) — Marketing Expansion + 20 Cities
7. **SocialQueue** (Marketing) — Social media post scheduler — `social-queue` — 14 cities

### Session 4 (2026-04-16, loop run 2) — 10 Tools + 20 Cities + UI Redesign
8.  **PTOTracker** (HR) — Leave management & accrual automation — `pto-tracker` — 17 cities
9.  **KPIDash** (Operations) — Real-time KPI dashboard builder — `kpi-dash` — 17 cities
10. **MeetingNotesAI** (Productivity) — AI meeting summarizer — `meeting-notes-ai` — 16 cities
11. **PayrollCalc** (Finance) — Payroll tax & pay stub calculator — `payroll-calc` — 15 cities
12. **HelpDeskAI** (Operations) — AI helpdesk ticketing — `help-desk-ai` — 15 cities
13. **EmailSigGen** (Marketing) — Team email signature generator — `email-sig-gen` — 15 cities
14. **DocTemplates** (Productivity) — Business document template library — `doc-templates` — 15 cities
15. **ClientPortal** (Sales) — White-label client portal — `client-portal` — 15 cities
16. **CommissionCalc** (Sales) — Sales commission tracker — `commission-calc` — 15 cities (+ interactive demo)
17. **EmailCampaigns** (Marketing) — Email marketing & automation — `email-campaigns` — 15 cities

### Session 5 (2026-04-16, loop run 3) — 2 Tools + 20 Cities + Interactive Demos
18. **TimeTracker** (Productivity) — Billable hours & project time tracker — `time-tracker` — 15 cities
19. **ContractGen** (Sales) — E-signature & contract generation — `contract-gen` — 15 cities

### Session 6 (2026-04-16, loop run 4) — 1 Tool + 20 Cities + Interactive Demo
20. **InventoryTracker** (Operations) — Stock tracking & reorder automation — `inventory-tracker` — 15 cities (+ interactive demo)

### UI/SEO Upgrades (Session 4–7)
- Redesigned: PayPal navy nav + Amazon orange CTA cards (no glass-morphism)
- Web3Forms integrated for real email capture (key: 7d643d3d-…)
- Schema.org @graph consolidated in layout.tsx (Organization + WebSite + FAQPage)
- AEO descriptions on all new tools ("what is the best X" answered in first 150 words)
- Interactive demos added: PayrollCalc (payroll estimator), CommissionCalc (tier builder), EmailSigGen (live signature preview), InventoryTracker (live stock table with alerts)
- DemoPanel.tsx component renders slug-conditional demos above waitlist CTA

### Static HTML Demos (in `public/tools/`)
- **Smart Invoice Generator** — `public/tools/smart-invoice-generator/`
- **AI Meeting Notes Summarizer** — `public/tools/ai-meeting-notes/`

**Total: 20 Next.js tools, ~440 city SEO pages**

## QUEUED TOOLS (Prioritized)
1. **FormBuilder** (Marketing) — Typeform $50/mo complaints; JotForm feature-gating on free tier
2. **JobDescriptionGen** (HR) — Textio/Ongig pricing; generic JD generators lack compliance
3. **VendorPortal** (Operations) — Vendor invoice tracking; Precoro/Coupa inaccessible for SMB
4. Add interactive demos for TimeTracker (live timer) and ContractGen (template preview)
5. SEO plan implementation — comparison pages, FAQ content, schema upgrades (see session-history)
