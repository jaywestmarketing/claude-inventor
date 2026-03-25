# AutomateStack — Claude Daily Automation System

## What This Is
AutomateStack is a demand-validation engine disguised as a free tools dashboard. Browser-based business automation tools are added daily based on market research. Each tool has a waitlist for lead collection. Whichever tools gain the most interest get fully built out. The pipeline: **traffic -> waitlist signups -> validation -> monetization**.

Target audience: HR managers, office managers, small business owners, CEOs, desk clerks, lead gen specialists, marketing teams, sales professionals, operations managers.

## Architecture
- **Framework:** Next.js App Router (TypeScript)
- **Styling:** CSS with glass-morphism design (semi-transparent white tiles, light shadows)
- **Data:** Static TypeScript files — `src/data/tools.ts` (tool registry + session logs) and `src/data/session-history.ts` (detailed session changelog)
- **SEO:** Schema.org JSON-LD (triple stack), dynamic sitemap, robots.txt, OpenGraph + Twitter Cards
- **Waitlist:** localStorage (to be upgraded to backend later)

## Key Files
| File | Purpose |
|------|---------|
| `src/data/tools.ts` | **Central tool registry** — all tools with metadata, keywords, competitors, cities. Also contains `SessionLog` entries. |
| `src/data/session-history.ts` | **Session changelog** — detailed per-session history with research notes and next-session plans |
| `src/app/page.tsx` | Main dashboard landing page |
| `src/app/tools/[slug]/page.tsx` | Dynamic tool detail pages (SSG) |
| `src/app/tools/[slug]/ToolDetailClient.tsx` | Client-side tool demo + waitlist UI |
| `src/app/layout.tsx` | Root layout with global SEO meta |
| `src/components/ToolTile.tsx` | Tool card component with waitlist form |
| `src/components/ToolsGrid.tsx` | Dashboard grid layout |
| `src/app/globals.css` | Glass-morphism design system |
| `src/app/robots.ts` | Dynamic robots.txt generation |
| `src/app/sitemap.ts` | Dynamic sitemap.xml generation |

## Session Startup (EVERY SESSION — DO THIS FIRST)
1. **Read `src/data/session-history.ts`** — understand all previous sessions, what was built, what's planned next
2. **Read `src/data/tools.ts`** — know every existing tool and its current state
3. **Check `git log`** — see if external updates were pushed from another Claude Code session
4. **Review `nextSessionPlan`** from the most recent session-history entry — these are your priority items
5. **Research** — web search for trending business automation tools, competitor updates, and keyword shifts

## Daily Execution Loop

### Phase 1: Research & Intelligence (Web Search Required)
Run these searches every session:

**New Tool Discovery:**
- Search: trending business automation tools [current year], most popular SaaS tools for [target audience]
- Search: Product Hunt launches in business/productivity category
- Search: GitHub trending repos for business automation, workflow tools
- Target audiences: HR, office managers, small business owners, CEOs, sales teams, marketing teams, desk clerks, lead gen specialists, operations managers

**Existing Tool Maintenance (for EVERY tool in `tools.ts`):**
- Search: [competitor name] reviews [current year], [competitor name] complaints
- Search: [tool category] new features [current year], [tool category] trends
- Search: [primary keywords] search volume trends
- Update tool entries if new competitor weaknesses or features found

**Keyword & SEO Research:**
- Search: [tool category] keywords, [tool name] long-tail keywords
- Search: [tool category] + city name for local SEO opportunity validation
- Identify keyword gaps competitors aren't targeting

### Phase 2: Tool Selection & Validation
Select new tools per session (target 1-5 based on scope). Each must meet ALL criteria:
- [ ] At least 3 competitors earning >$5,000/month (verify via search)
- [ ] Clear negative reviews on competitors (document specific complaints)
- [ ] Feasible as browser-only web app (no backend required for demo)
- [ ] Serves one or more target audiences
- [ ] Not already in `tools.ts` or queued tools list

### Phase 3: Deep Research (Per Selected Tool)
Document ALL of the following before building:

**A. Competitor Analysis (minimum 5 competitors per tool)**
```
For each competitor:
- Name
- Price range
- Top complaint (from G2, Capterra, Reddit, etc.)
```

**B. Competitor Fixes (6+ per tool)**
- Specific ways our tool solves each competitor complaint

**C. Keyword Research (20 per tool)**
- Primary + long-tail keywords
- Include "[category] alternative" and "best [category] [year]" patterns
- Search intent mapping (informational vs transactional)

**D. Local SEO Cities (5 per tool)**
Pick 5 US cities meeting these criteria:
- Population 70k-350k (low competition, real demand)
- Growing business/tech scene
- Not already targeted by another tool
- Include `competitionLevel: 'low'` or `'medium'`

**E. Market Data**
- Features list (8 per tool)
- Tagline + description with primary keyword in first 150 words

### Phase 4: Build the Tool
1. **Add to `src/data/tools.ts`** — follow exact `Tool` interface:
   ```typescript
   {
     id: 'unique-id',
     name: 'ToolName',
     tagline: 'One-line value prop',
     description: 'Detailed description with primary keyword in first 150 words',
     category: 'hr' | 'finance' | 'marketing' | 'sales' | 'operations' | 'productivity',
     status: 'demo',
     icon: 'emoji',
     features: [...],          // 8 features
     keywords: [...],          // 20 keywords
     competitors: [...],       // 5 Competitor objects {name, priceRange, topComplaint}
     competitorFixes: [...],   // 6+ fix strings
     targetCities: [...],      // 5 CityTarget objects {city, state, population, competitionLevel}
     dateAdded: 'YYYY-MM-DD',
     waitlistCount: 0,
     slug: 'url-slug'
   }
   ```

2. **Add to `sessionLogs`** in `tools.ts` — record new tool names

3. **Update `src/data/session-history.ts`** — add new `SessionEntry` with:
   - `toolsAdded`, `toolsUpdated`, `keywordsResearched`, `citiesAdded`
   - `competitorChanges`, `seoUpdates`, `nextSessionPlan`

4. **Update new categories** if needed — add to `categoryLabels` and `categoryBadgeClass` in `tools.ts`

5. **Tool pages auto-generate** via `[slug]/page.tsx` — no manual page creation needed

### Phase 5: SEO Implementation (Applied Globally)

**GEO Triple Stack (already implemented in layout/pages):**
Three JSON-LD schema types per tool page:
1. `WebApplication` / `SoftwareApplication` — tool metadata
2. `ItemList` — feature list as structured data
3. `FAQPage` — FAQ Q&As for AI citations

**AEO Optimization (apply to every tool description):**
- First 150 words: concise direct answer to "What is [tool name]?"
- Include stats every 150-200 words in page content
- Answer "People Also Ask" queries in FAQ sections
- Listicle/comparison format (32% of AI citations)

**On-Page SEO (handled by Next.js layout):**
- Title: `[Tool Name] - Free [Category] Tool | AutomateStack`
- Meta description: 150-160 chars with primary keyword + CTA
- Semantic HTML, proper heading hierarchy
- OpenGraph + Twitter Card meta tags
- `fetchpriority="high"` on hero images
- Dynamic sitemap.xml and robots.txt

**Local SEO per city:**
- `LocalBusiness` + `Service` schema per city section
- Mention: local business regulations, tax rates, dominant industries
- Unique content per city (NOT template swaps)
- Target 5 low-competition cities per tool, expand by 5 each session

**Robots.txt Strategy:**
- Allow AI retrieval bots (ChatGPT-User, PerplexityBot, ClaudeBot, OAI-SearchBot)
- Block AI training bots (GPTBot, Google-Extended, CCBot)
- NOTE: Currently allowing all — adjust `src/app/robots.ts` when ready

### Phase 6: Update Session History
Add new entry to `src/data/session-history.ts` with complete data:
```typescript
{
  sessionDate: 'YYYY-MM-DD',
  sessionNumber: N,
  toolsAdded: [...],
  toolsUpdated: [...],
  keywordsResearched: [...],
  citiesAdded: [...],
  competitorChanges: [...],
  seoUpdates: [...],
  nextSessionPlan: [...]  // CRITICAL: specific tasks for next session
}
```

### Phase 7: Update This File
Update the "Current Tools" and "Queued Tools" sections below.

## Design System
- **Tiles:** Semi-transparent white with glass-morphism effect, soft shadows
- **Layout:** CSS Grid, responsive (1 col mobile, 2 col tablet, 3-4 col desktop)
- **Typography:** Clean sans-serif, high contrast
- **Aesthetic:** Google Cloud Console inspired — clean, professional, minimal
- **Mobile-first:** 83% of traffic is mobile. Design for mobile FIRST.
- **Category badges:** Color-coded by category (hr, finance, marketing, sales, operations, productivity)

## Waitlist Strategy
- Form fields: Name + Email only (max 5 fields — doubles conversion)
- Store in localStorage with tool slug as key
- Show confirmation with "early access" messaging
- Each tool's waitlist data is independent
- Target: 25-85% conversion rate (industry top performers)
- Launch within 90 days of waitlist opening (conversion drops sharply after)

## Target Audiences
| Audience | Example Tools |
|----------|--------------|
| HR Managers | Onboarding checklists, PTO trackers, offer letter generators |
| Office Managers | Meeting schedulers, supply trackers, visitor logs |
| Small Biz Owners | Invoicing, expense reports, proposal builders |
| CEOs/Executives | KPI dashboards, OKR trackers, board report generators |
| Sales Teams | Lead follow-up sequences, CRM lite, commission calculators |
| Marketing Teams | Content calendars, email signature generators, A/B test planners |
| Desk Clerks | Appointment schedulers, document templates, data entry tools |
| Lead Gen | Landing page builders, lead scoring tools, outreach templates |
| Operations | Workflow automations, inventory trackers, vendor management |

## Current Tools (Session 1 — 2026-03-25)
1. **OnboardFlow** (HR) — Employee onboarding automation — `onboard-flow`
2. **InvoiceAI** (Finance) — AI-powered invoice generation — `invoice-ai`
3. **LeadPilot** (Marketing) — Lead capture and nurturing — `lead-pilot`
4. **CalendarFlow** (Productivity) — Smart meeting scheduling — `calendar-flow`
5. **ExpenseBot** (Finance) — Automated expense reporting — `expense-bot`

### Also Built (Static HTML demos in `public/tools/`)
6. **Smart Invoice Generator** — `public/tools/smart-invoice-generator/` — Cities: Boise ID, Greenville SC, Huntsville AL, Provo UT, Fayetteville AR
7. **AI Meeting Notes Summarizer** — `public/tools/ai-meeting-notes/` — Cities: Boise ID, Huntsville AL, Wilmington NC, Provo UT, Lakeland FL
   - Key differentiator: No bot joins meetings (solves #1 complaint against Otter.ai, Fireflies, Read.ai)
   - Competitor validation: Otter.ai $100M ARR, Fireflies.ai $1B valuation, Fathom AI $18.8M ARR

## Queued Tools (Research & Build Next)
- **AI Meeting Notes Summarizer** (Productivity) — research complete, static demo built, needs Next.js integration
- **AI Business Proposal/Quote Builder** (Sales) — PandaDoc $100M ARR, Proposify well-funded, clear pain points
- PTO/Time-Off Tracker (HR, office managers)
- Proposal Generator (sales, freelancers)
- Social Media Scheduler (marketing teams)
- Payroll Calculator (HR, small business)
- Helpdesk Ticketing (operations, customer support)
- Email Signature Generator (marketing, all office workers)
- KPI Dashboard Builder (executives, managers)
- Document Template Library (desk clerks, office managers)
- Client Portal Builder (sales, account managers)
- Commission Calculator (sales teams)

## Competitor Intelligence (From Research)
### AI Meeting Notes Market
- **Otter.ai**: $100M ARR, 25M+ users, 5.9M monthly visits. Top complaints: transcription accuracy (52 G2 mentions), billing dark patterns, privacy invasion (bot joins uninvited)
- **Fireflies.ai**: $10.9M+ ARR, $1B valuation, 20M+ users. Top complaints: surprise $228 charges, bot joins unannounced, poor speaker ID
- **Fathom AI**: $18.8M ARR, 500K+ users. Top complaints: visible bot participant, no mobile app, hidden AI caps
- **Read.ai**: Banned by Chapman University & University of Washington for "virus-like" behavior. Cannot delete account.
- **tl;dv**: $4.5M ARR. Top complaints: messy video library, misleading integrations, poor accent transcription

## GitHub Sync Awareness
- External pushes may come from another Claude Code session
- Always check `git log` at session start for changes not in session-history
- If conflicts found, preserve both sets of changes
- Analyze trending GitHub repos in business automation for feature ideas

## Critical Rules
1. **Every tool must work in-browser** — no backend, no server, no API keys for demo
2. **Every tool needs:** working demo + waitlist + FAQ + city SEO + triple schema stack
3. **Never skip research** — validate demand before building (competitors >$5K/mo)
4. **Compound daily** — update existing tools AND build new ones each session
5. **Session history is the source of truth** — always read it first, always update it last
6. **Quality over quantity** — one well-researched, well-built tool beats three rushed ones
7. **Data-driven decisions** — cite real competitor pricing, real complaints, real keywords
8. **No dummy content** — every city section, FAQ, and stat must be researched and real
9. **Follow TypeScript interfaces** — all tool data must match the `Tool` interface exactly
10. **20 keywords, 5 competitors, 5 cities minimum** per tool — no exceptions

## SEO Research Findings (2026-03-25)

### Core Web Vitals Targets
- LCP < 2.5s, INP < 200ms, CLS < 0.1
- `fetchpriority="high"` on hero images
- Inline critical CSS, defer non-critical
- `defer`/`async` all non-critical scripts
- WebP/AVIF images

### AEO Stats
- 55% of AI citations come from first 30% of page content
- 32% of AI citations are listicles
- 1.8x more AI citations with GEO triple schema stack
- 3x more likely to lose citations if content is stale (refresh quarterly)

### Waitlist Benchmarks
- Top pages convert at 25-85% (vs 3.8% median for SaaS)
- 83% mobile traffic — mobile-first mandatory
- Max 5 form fields (doubles conversion)
- 90-day window before conversion drops sharply

### Multi-Engine SEO
- Google/Bing/Yahoo/DuckDuckGo: Schema.org, semantic HTML, FAQ sections, meta tags
- OpenGraph + Twitter Card meta tags for social
- Dynamic sitemap.xml and robots.txt via Next.js
- Target: G2, Capterra, Product Hunt for backlinks
