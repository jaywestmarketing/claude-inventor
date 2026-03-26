# AutomateStack — Claude Daily Automation System

## Mission
Demand-validation engine disguised as a free tools dashboard. Pipeline: **traffic -> waitlist signups -> validation -> monetization**. Browser-based business automation tools are added daily via market research. Tools with the most waitlist interest get fully built and monetized.

## Architecture
- **Framework:** Next.js App Router (TypeScript)
- **Styling:** CSS glass-morphism (semi-transparent white tiles, light shadows)
- **Data:** Static TypeScript — `src/data/tools.ts` (tool registry + session logs), `src/data/session-history.ts` (changelog)
- **SEO:** Schema.org JSON-LD triple stack, dynamic sitemap, robots.txt, OpenGraph + Twitter Cards
- **Waitlist:** localStorage (upgrade to backend later)
- **Deployment:** Static export, no backend/API keys required for demos

## Key Files
| File | Purpose |
|------|---------|
| `src/data/tools.ts` | **Central tool registry** — all tools, metadata, keywords, competitors, cities, session logs |
| `src/data/session-history.ts` | **Session changelog** — per-session history, research notes, next-session plans |
| `src/app/page.tsx` | Main dashboard landing page |
| `src/app/tools/[slug]/page.tsx` | Dynamic tool detail pages (SSG) |
| `src/app/tools/[slug]/ToolDetailClient.tsx` | Client-side tool demo + waitlist UI |
| `src/app/layout.tsx` | Root layout with global SEO meta |
| `src/components/ToolTile.tsx` | Tool card component with waitlist form |
| `src/components/ToolsGrid.tsx` | Dashboard grid layout |
| `src/app/globals.css` | Glass-morphism design system |
| `src/app/robots.ts` | Dynamic robots.txt generation |
| `src/app/sitemap.ts` | Dynamic sitemap.xml generation |

---

## SESSION STARTUP — DO THIS FIRST (EVERY SESSION, NO EXCEPTIONS)

This is a **recurring automation**. Every session is a continuation, not a fresh start. You must establish full context before doing any work.

### Step 1: Load State
1. Read `src/data/session-history.ts` — understand all previous sessions
2. Read `src/data/tools.ts` — know every existing tool and its current state
3. Run `git log --oneline -20` — detect external pushes from other Claude Code sessions
4. If git log shows commits not in session-history, read those files to understand what changed

### Step 2: Identify Priorities
1. Read `nextSessionPlan` from the most recent `SessionEntry` — these are your **#1 priority**
2. Count existing tools — plan to both UPDATE existing tools AND ADD new ones
3. Check which categories are underrepresented and which cities have been used

### Step 3: Research (web search required — never skip)
Execute these searches before building anything. Adapt queries to current date.

**New Tool Discovery:**
- `trending business automation tools [current year]`
- `most popular SaaS tools for [audience] [current year]` (rotate through audiences each session)
- `Product Hunt business productivity launches this week`
- `GitHub trending repos business automation workflow`
- `best new [category] software [current year]` for underrepresented categories

**Existing Tool Maintenance (sample 3-5 existing tools per session, rotate):**
- `[competitor name] reviews [current year]` — look for new complaints
- `[competitor name] pricing changes [current year]` — catch price increases (opportunity)
- `[tool category] new features [current year]` — identify feature gaps to exploit
- If new weaknesses found, update the tool entry in `tools.ts`

**Keyword & SEO Intelligence:**
- `[tool category] keywords [current year]`
- `best [tool category] alternative [current year]`
- `[tool category] + [city name]` for local SEO opportunity validation
- `people also ask [tool category]` for FAQ content ideas

---

## DAILY EXECUTION LOOP

### Phase 1: Tool Selection & Validation

Select 1-5 new tools per session. Every tool MUST pass ALL gates:

| Gate | Requirement |
|------|-------------|
| Revenue | At least 3 competitors earning >$5,000/month (verify via search) |
| Pain | Documented negative reviews on competitors (cite sources: G2, Capterra, Reddit, TrustRadius) |
| Feasibility | Can work as browser-only web app (no backend, no API keys for demo) |
| Audience | Serves 1+ target audiences (see table below) |
| Unique | Not already in `tools.ts` and not a duplicate of queued tools |
| Category balance | Prefer underrepresented categories to build a diverse dashboard |

**Priority scoring (use to rank candidates):**
- Competitor revenue >$10M ARR = +3 points
- 10+ negative reviews found = +2 points
- Serves multiple audiences = +2 points
- Underrepresented category = +2 points
- Queued tool (already in pipeline) = +1 point
- Build highest-scoring tools first

### Phase 2: Deep Research (Per Selected Tool)

Complete ALL sections before writing any code. No dummy data — every stat must be researched and real.

**A. Competitor Analysis (5 minimum)**
```
For each competitor:
- Name
- Price range (verified via their website or review sites)
- Top complaint (specific, from G2/Capterra/Reddit/TrustRadius — cite the source)
- ARR or revenue estimate if available
```

**B. Competitor Fixes (6+ per tool)**
- Each fix must directly address a specific competitor complaint
- Frame as "We do X instead of Y" — concrete, not vague

**C. Keyword Research (20 per tool)**
- 5 high-intent primary keywords (transactional: "best X software", "X tool for small business")
- 5 "[competitor] alternative" keywords
- 5 long-tail keywords (3-5 words, lower competition)
- 5 question-based keywords for FAQ/AEO ("how to automate X", "what is the best X")
- Include "best [category] [current year]" pattern

**D. Local SEO Cities (5 per tool)**
Pick 5 US cities meeting ALL criteria:
- Population 70k-350k (low competition, real demand)
- Growing business/tech scene or university town
- Not already targeted by another tool in `tools.ts` (check existing `targetCities`)
- Set `competitionLevel: 'low'` or `'medium'`
- Each session: also add 5 NEW cities to 2-3 existing tools (expand coverage)

**E. Tool Specification**
- 8 features (specific, not generic — what does it actually do?)
- Tagline: one-line value prop with primary keyword
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
     targetCities: [...],      // 5 CityTarget objects {city, state, population, competitionLevel}
     dateAdded: 'YYYY-MM-DD',
     waitlistCount: 0,
     slug: 'url-slug'
   }
   ```

2. **Add to `sessionLogs`** in `tools.ts`

3. **Tool pages auto-generate** via `[slug]/page.tsx` — no manual page creation needed

4. **Add new categories** if needed — update `categoryLabels` and `categoryBadgeClass`

### Phase 4: Update Existing Tools (COMPOUNDING — DO NOT SKIP)

Every session must improve 2-3 existing tools. Pick the oldest-updated tools first.

- Add 5 new cities per tool (expand local SEO reach)
- Refresh keywords if research revealed better ones
- Update competitor data if pricing changed or new complaints found
- Add new `competitorFixes` if competitors released features or got new complaints
- Update descriptions if AEO research suggests better phrasing

### Phase 5: Record Everything

**Update `src/data/session-history.ts`** — add new `SessionEntry`:
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
  nextSessionPlan: [           // CRITICAL — be specific, not generic
    'Build [specific tool name] — research shows [reason]',
    'Expand cities for [tool] — add [regions]',
    'Update [tool] keywords — [keyword] is trending',
    'Research [specific category] for new opportunities'
  ]
}
```

**Update CLAUDE.md** — update "Current Tools" and "Queued Tools" sections below.

---

## SEO STRATEGY

### GEO Triple Schema Stack (per tool page)
Every tool page must have three JSON-LD schema types:
1. `WebApplication` / `SoftwareApplication` — tool metadata + pricing + features
2. `ItemList` — feature list as structured data
3. `FAQPage` — 5+ Q&As targeting "People Also Ask" queries

### AEO (Answer Engine Optimization)
- First 150 words of description: direct answer to "What is [tool name]?"
- Stats/data every 150-200 words (AI citation bait)
- FAQ sections answer exact search queries
- Listicle/comparison format (32% of AI citations use listicles)
- 55% of AI citations come from first 30% of page content — front-load value

### On-Page SEO
- Title: `[Tool Name] - Free [Category] Tool | AutomateStack`
- Meta description: 150-160 chars, primary keyword + CTA
- Semantic HTML, proper heading hierarchy (H1 > H2 > H3)
- OpenGraph + Twitter Card meta tags
- `fetchpriority="high"` on hero/above-fold content
- Dynamic sitemap.xml and robots.txt via Next.js

### Local SEO (per city per tool)
- `LocalBusiness` + `Service` schema per city section
- Unique content per city — mention local industries, business climate, regulations
- NOT template swaps — each city section must have researched, unique content
- Target 5 low-competition cities per tool initially, expand by 5 each session
- City criteria: pop 70k-350k, growing business/tech scene, low SEO competition

### Multi-Engine Optimization
- **Google/Bing/Yahoo/DuckDuckGo:** Schema.org, semantic HTML, FAQ sections, meta tags
- **AI Engines (ChatGPT, Perplexity, Claude):** AEO optimization, structured answers, cited stats
- **Social:** OpenGraph + Twitter Cards for link previews
- **Backlink targets:** G2, Capterra, Product Hunt listings

### Robots.txt Strategy
- Allow AI retrieval bots: ChatGPT-User, PerplexityBot, ClaudeBot, OAI-SearchBot
- Block AI training bots: GPTBot, Google-Extended, CCBot
- NOTE: Currently allowing all — adjust `src/app/robots.ts` when ready

### Core Web Vitals Targets
- LCP < 2.5s, INP < 200ms, CLS < 0.1
- Inline critical CSS, defer non-critical
- WebP/AVIF images, `defer`/`async` non-critical scripts

---

## DESIGN SYSTEM

- **Tiles:** Semi-transparent white with glass-morphism effect, soft shadows underneath
- **Layout:** CSS Grid, responsive (1 col mobile, 2 col tablet, 3-4 col desktop)
- **Aesthetic:** Google Cloud Console inspired — clean, professional, minimal
- **Typography:** Clean sans-serif, high contrast for readability
- **Mobile-first:** 83% of traffic is mobile. Design for mobile FIRST, then scale up.
- **Category badges:** Color-coded by category (hr, finance, marketing, sales, operations, productivity)

---

## WAITLIST & CONVERSION

- **Form fields:** Name + Email only (max 5 fields — doubling conversion)
- **Storage:** localStorage keyed by tool slug (upgrade to backend later)
- **UX:** Show confirmation with "early access" messaging + estimated launch
- **Target conversion:** 25-85% (industry top performers, vs 3.8% SaaS median)
- **Launch window:** Within 90 days of waitlist opening (conversion drops sharply after)
- **Validation signal:** Tools with most waitlist signups get built first

---

## TARGET AUDIENCES

| Audience | Pain Points | Example Tools |
|----------|-------------|---------------|
| HR Managers | Manual onboarding, compliance tracking, PTO chaos | Onboarding checklists, PTO trackers, offer letter generators |
| Office Managers | Meeting scheduling, supply tracking, visitor management | Meeting schedulers, supply trackers, visitor logs |
| Small Biz Owners | Invoicing delays, expense chaos, proposal creation | Invoicing, expense reports, proposal builders |
| CEOs/Executives | No visibility into KPIs, board report creation | KPI dashboards, OKR trackers, board report generators |
| Sales Teams | Lead follow-up gaps, commission disputes, proposal bottlenecks | Lead sequences, CRM lite, commission calculators |
| Marketing Teams | Content planning, email branding, A/B testing | Content calendars, email signature generators, A/B planners |
| Desk Clerks | Appointment scheduling, document formatting, data entry | Appointment schedulers, document templates, data entry tools |
| Lead Gen Specialists | Landing page creation, lead scoring, outreach management | Landing page builders, lead scoring, outreach templates |
| Operations Managers | Workflow bottlenecks, inventory gaps, vendor management | Workflow automation, inventory trackers, vendor management |

---

## CURRENT TOOLS

### Session 1 (2026-03-25) — Next.js Dashboard
1. **OnboardFlow** (HR) — Employee onboarding automation — `onboard-flow`
2. **InvoiceAI** (Finance) — AI-powered invoice generation — `invoice-ai`
3. **LeadPilot** (Marketing) — Lead capture and nurturing — `lead-pilot`
4. **CalendarFlow** (Productivity) — Smart meeting scheduling — `calendar-flow`
5. **ExpenseBot** (Finance) — Automated expense reporting — `expense-bot`

### Static HTML Demos (in `public/tools/`)
6. **Smart Invoice Generator** — `public/tools/smart-invoice-generator/` — Cities: Boise ID, Greenville SC, Huntsville AL, Provo UT, Fayetteville AR
7. **AI Meeting Notes Summarizer** — `public/tools/ai-meeting-notes/` — Cities: Boise ID, Huntsville AL, Wilmington NC, Provo UT, Lakeland FL
   - Key differentiator: No bot joins meetings (solves #1 complaint against Otter.ai, Fireflies, Read.ai)
   - Competitor validation: Otter.ai $100M ARR, Fireflies.ai $1B valuation, Fathom AI $18.8M ARR

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

---

## COMPETITOR INTELLIGENCE DATABASE

### AI Meeting Notes Market
| Competitor | ARR/Revenue | Users | Top Complaint |
|-----------|------------|-------|---------------|
| Otter.ai | $100M ARR | 25M+ | Transcription accuracy (52 G2 mentions), billing dark patterns, bot joins uninvited |
| Fireflies.ai | $10.9M+ ARR | 20M+ | Surprise $228 charges, bot joins unannounced, poor speaker ID |
| Fathom AI | $18.8M ARR | 500K+ | Visible bot participant, no mobile app, hidden AI caps |
| Read.ai | Unknown | Unknown | Banned by universities for "virus-like" behavior, can't delete account |
| tl;dv | $4.5M ARR | Unknown | Messy video library, misleading integrations, poor accent transcription |

---

## GITHUB SYNC PROTOCOL
- External pushes may come from another Claude Code session at any time
- Always check `git log` at session start for commits not in session-history
- If conflicts found: preserve both sets of changes, merge intelligently
- Analyze trending GitHub repos in business automation for feature ideas
- Check GitHub issues on popular SaaS tools for user complaint data

---

## CRITICAL RULES (NEVER VIOLATE)

1. **Browser-only** — every tool must work in-browser, no backend, no server, no API keys for demo
2. **Complete tools only** — every tool needs: working demo + waitlist + FAQ + city SEO + triple schema stack
3. **Research before building** — validate demand before writing code (competitors >$5K/mo, documented complaints)
4. **Compound daily** — update existing tools AND build new ones each session
5. **Session history is truth** — always read it first, always update it last
6. **Quality over quantity** — one well-researched tool beats three rushed ones
7. **Real data only** — every city, FAQ, stat, competitor complaint must be researched and verified
8. **Follow TypeScript interfaces** — all tool data must match the `Tool` interface exactly
9. **Minimums per tool** — 20 keywords, 5 competitors, 5 cities, 8 features, 6 competitor fixes — no exceptions
10. **Mobile-first** — 83% of traffic is mobile, design accordingly
11. **Never skip the startup sequence** — session-history and tools.ts must be read before any work
12. **Specific next-session plans** — never write vague plans like "add more tools", always name specific tools and tasks
