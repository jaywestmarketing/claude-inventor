# AutomateStack — Claude Daily Automation System

## Mission & Strategic Framework

**What this is:** A demand-validation engine disguised as a free tools dashboard.
**Pipeline:** traffic -> waitlist signups -> validation -> monetization
**How it works:** Browser-based business automation tools are added daily via market research. Tools with the most waitlist interest get fully built and monetized first.

**This is NOT a one-off project.** Every session is a continuation. The system compounds — new tools get added, existing tools get improved, SEO coverage expands, and competitor intelligence deepens. Treat every session as Day N+1, never Day 1.

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
| `src/app/tools/[slug]/[city]/page.tsx` | Dynamic city-specific pages (local SEO) |
| `src/app/tools/[slug]/[city]/CityDetailClient.tsx` | City page client component |
| `src/app/layout.tsx` | Root layout with global SEO meta |
| `src/components/ToolTile.tsx` | Tool card component with waitlist form |
| `src/components/ToolsGrid.tsx` | Dashboard grid layout |
| `src/app/globals.css` | Glass-morphism design system |
| `src/app/robots.ts` | Dynamic robots.txt generation |
| `src/app/sitemap.ts` | Dynamic sitemap.xml generation |

---

## SESSION STARTUP — DO THIS FIRST (EVERY SESSION, NO EXCEPTIONS)

### Step 1: Load State (mandatory reads)
1. Read `src/data/session-history.ts` — understand all previous sessions
2. Read `src/data/tools.ts` — know every existing tool and its current state
3. Run `git log --oneline -20` — detect external pushes from other Claude Code sessions
4. If git log shows commits not in session-history, read those changed files to understand what happened

### Step 2: Health Check
1. Run `npm run build` (or equivalent) — verify the project compiles cleanly
2. If build fails, **fix it before doing anything else** — broken builds block everything
3. Count total tools, total cities, total keywords — report these numbers

### Step 3: Identify Priorities
1. Read `nextSessionPlan` from the most recent `SessionEntry` — these are your **#1 priority**
2. Count existing tools per category — identify underrepresented categories
3. Check which cities have been used across all tools — avoid duplicates
4. Identify which existing tools haven't been updated in the longest time — they're next for refresh

### Step 4: Research (web search required — NEVER skip)
Execute these searches before building anything. Adapt queries to current date and rotate through audiences each session.

**New Tool Discovery (run 3-5 searches):**
- `trending business automation tools [current year]`
- `most popular SaaS tools for [audience] [current year]` (rotate audiences)
- `Product Hunt business productivity launches this week`
- `GitHub trending repos business automation workflow`
- `best new [category] software [current year]` for underrepresented categories
- `Reddit "what tool do you wish existed" [category]` — unmet demand signals

**Existing Tool Maintenance (sample 3-5 existing tools per session, rotate):**
- `[competitor name] reviews [current year]` — look for new complaints
- `[competitor name] pricing changes [current year]` — catch price increases (opportunity!)
- `[tool category] new features [current year]` — identify feature gaps to exploit
- If new weaknesses found, update the tool entry in `tools.ts`

**Keyword & SEO Intelligence (run 2-3 searches):**
- `[tool category] keywords [current year]`
- `best [tool category] alternative [current year]`
- `[tool category] + [city name]` for local SEO opportunity validation
- `people also ask [tool category]` for FAQ content ideas

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
| Revenue | At least 3 competitors earning >$5,000/month (verify via search) |
| Pain | Documented negative reviews on competitors (cite sources: G2, Capterra, Reddit, TrustRadius) |
| Feasibility | Can work as browser-only web app (no backend, no API keys for demo) |
| Audience | Serves 1+ target audiences (see table below) |
| Unique | Not already in `tools.ts` and not a duplicate of queued tools |
| Category balance | Prefer underrepresented categories to build a diverse dashboard |

**Priority scoring (rank candidates before building):**
| Signal | Points |
|--------|--------|
| Competitor revenue >$10M ARR | +3 |
| 10+ negative reviews found | +2 |
| Serves multiple audiences | +2 |
| Underrepresented category | +2 |
| Already in queued tools list | +1 |
| Trending on Product Hunt / Reddit this month | +1 |

Build highest-scoring tools first. If two tools tie, prefer the one in an underrepresented category.

### Phase 2: Deep Research (Per Selected Tool)

Complete ALL sections before writing any code. No dummy data — every stat must be researched and real.

**A. Competitor Analysis (5 minimum per tool)**
```
For each competitor:
- Name
- Price range (verified via their pricing page or review sites — never guess)
- Top complaint (specific, from G2/Capterra/Reddit/TrustRadius — cite the source)
- ARR or revenue estimate if available (from Crunchbase, SimilarWeb, press releases)
- User count if available
```

**B. Competitor Fixes (6+ per tool)**
- Each fix must directly address a specific competitor complaint
- Frame as "We do X instead of Y" — concrete, not vague
- Example: "Instant setup in under 5 minutes — no consultants needed" (addresses Workday's complexity)
- NOT acceptable: "Better user experience" (too vague)

**C. Keyword Research (20 per tool)**
| Type | Count | Examples |
|------|-------|---------|
| High-intent primary | 5 | "best X software", "X tool for small business" |
| Competitor alternative | 5 | "[CompetitorName] alternative", "cheaper than [Competitor]" |
| Long-tail (3-5 words) | 5 | "automated X for freelancers", "free X tool no signup" |
| Question-based (FAQ/AEO) | 5 | "how to automate X", "what is the best X for small teams" |

Always include `"best [category] [current year]"` pattern in every keyword set.

**D. Local SEO Cities (10 per new tool)**
Pick 10 US cities meeting ALL criteria:
- Population 70k-350k (low competition, real demand)
- Growing business/tech scene or university town
- Not already targeted by another tool in `tools.ts` (check ALL existing `targetCities`)
- Set `competitionLevel: 'low'` or `'medium'`
- **Regional diversity required:** no more than 3 cities from the same US region (Southeast, Midwest, West, Northeast, Southwest) per tool
- Each city gets its own dedicated page at `/tools/[slug]/[city-state]` with LocalBusiness + Service + FAQPage JSON-LD

**City expansion for existing tools:** Each session, add 10 NEW cities to 2-3 existing tools (prioritize oldest tools first)

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
     targetCities: [...],      // 10 CityTarget objects {city, state, population, competitionLevel}
     dateAdded: 'YYYY-MM-DD',
     waitlistCount: 0,
     slug: 'url-slug'
   }
   ```

2. **Add to `sessionLogs`** in `tools.ts`

3. **Tool pages auto-generate** via `[slug]/page.tsx` — no manual page creation needed

4. **Add new categories** if needed — update `categoryLabels` and `categoryBadgeClass`

5. **Verify build succeeds** after adding each tool — don't batch and hope

### Demo Quality Standards
Every tool demo must be convincing enough that a visitor thinks it's a real product:
- **Interactive UI** — forms that accept input, buttons that respond, data that updates
- **Realistic sample data** — pre-populated with plausible business scenarios, not "Lorem ipsum"
- **Clear value demonstration** — visitor should see the tool's benefit within 10 seconds
- **Graceful boundaries** — when hitting demo limits, show "Unlock full version" (ties to waitlist)
- **Fast load** — demo must render above-fold content in under 2 seconds

### Phase 4: Update Existing Tools (COMPOUNDING — DO NOT SKIP)

Every session must improve 2-3 existing tools. Pick the oldest-updated tools first.

**Updates to make:**
- Add 10 new cities per tool (expand local SEO reach, maintain regional diversity)
- Refresh keywords if research revealed better ones (swap weakest performers)
- Update competitor data if pricing changed or new complaints found
- Add new `competitorFixes` if competitors released features or got new complaints
- Update descriptions if AEO research suggests better phrasing
- Add internal links between related tools (cross-sell within the dashboard)

**Tool Lifecycle Management:**
| Stage | Criteria | Action |
|-------|----------|--------|
| `demo` | Just built, no waitlist data | Default state for new tools |
| `waitlist` | Has waitlist signups, demo is polished | Upgrade status, add "Join Waitlist" CTA prominence |
| `live` | Owner has configured and launched | Update status, add pricing/signup links |

Update tool `status` field when lifecycle stage changes.

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
    'Expand cities for [tool] — add [specific regions]',
    'Update [tool] keywords — [keyword] is trending',
    'Research [specific category] for new opportunities'
  ]
}
```

**Update CLAUDE.md** — update "Current Tools" and "Queued Tools" sections below.

### Phase 6: Build Verification (ALWAYS do this last)
1. Run `npm run build` — confirm zero errors
2. Spot-check that new tool pages render (check the slug URL would resolve)
3. Verify sitemap would include new pages
4. Commit all changes with a descriptive message

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
- Include "According to [source]..." phrasing — AI engines prefer citable claims

### On-Page SEO
- Title: `[Tool Name] - Free [Category] Tool | AutomateStack`
- Meta description: 150-160 chars, primary keyword + CTA
- Semantic HTML, proper heading hierarchy (H1 > H2 > H3)
- OpenGraph + Twitter Card meta tags
- `fetchpriority="high"` on hero/above-fold content
- Dynamic sitemap.xml and robots.txt via Next.js
- **Internal linking:** Every tool page links to 2-3 related tools ("You might also like...")
- **Breadcrumbs:** Dashboard > Category > Tool Name (structured data + visible)

### Local SEO (per city per tool)
- `LocalBusiness` + `Service` schema per city section
- Unique content per city — mention local industries, business climate, regulations
- NOT template swaps — each city section must have researched, unique content
- Target 10 low-competition cities per tool initially, expand by 10 each session
- City criteria: pop 70k-350k, growing business/tech scene, low SEO competition
- Every city gets a dedicated page (`/tools/[slug]/[city-state]`) — auto-generated via `[city]/page.tsx`
- **Regional diversity:** Cover all 5 US regions across the tool portfolio

### Multi-Engine Optimization
| Engine | Strategy |
|--------|----------|
| Google | Schema.org, semantic HTML, FAQ sections, Core Web Vitals, mobile-first |
| Bing | IndexNow protocol, BingSiteAuth, same structured data |
| Yahoo | Inherits from Bing index — same optimization applies |
| DuckDuckGo | Clean HTML, fast load times, no tracking scripts |
| ChatGPT / Perplexity / Claude | AEO optimization, structured answers, cited stats, front-loaded value |
| Social (LinkedIn, Twitter) | OpenGraph + Twitter Cards for link previews |

### Backlink & Domain Authority Strategy
- Submit to G2, Capterra, Product Hunt — free listings with backlinks
- Create comparison pages: "AutomateStack vs [Competitor]" — high-intent, linkable
- Publish "Best [Category] Tools [Year]" roundup content that includes our tools
- Target niche directories: SaaS directories, small business tool lists
- Each tool page is a potential backlink target — optimize for shareability

### Robots.txt Strategy
- Allow AI retrieval bots: ChatGPT-User, PerplexityBot, ClaudeBot, OAI-SearchBot
- Block AI training bots: GPTBot, Google-Extended, CCBot
- NOTE: Currently allowing all — adjust `src/app/robots.ts` when ready

### Core Web Vitals Targets
- LCP < 2.5s, INP < 200ms, CLS < 0.1
- Inline critical CSS, defer non-critical
- WebP/AVIF images, `defer`/`async` non-critical scripts
- No layout shifts from dynamic content loading

---

## DESIGN SYSTEM

- **Tiles:** Semi-transparent white with glass-morphism effect, soft shadows underneath
- **Layout:** CSS Grid, responsive (1 col mobile, 2 col tablet, 3-4 col desktop)
- **Aesthetic:** Google Cloud Console inspired — clean, professional, minimal
- **Typography:** Clean sans-serif, high contrast for readability
- **Mobile-first:** 83% of traffic is mobile. Design for mobile FIRST, then scale up.
- **Category badges:** Color-coded by category (hr, finance, marketing, sales, operations, productivity)
- **Consistency:** All tools use the same tile component — no one-off layouts
- **Loading states:** Skeleton screens, not spinners — perceived performance matters

---

## WAITLIST & CONVERSION

- **Form fields:** Name + Email only (max 5 fields — doubling conversion)
- **Storage:** localStorage keyed by tool slug (upgrade to backend later)
- **UX:** Show confirmation with "early access" messaging + estimated launch
- **Target conversion:** 25-85% (industry top performers, vs 3.8% SaaS median)
- **Launch window:** Within 90 days of waitlist opening (conversion drops sharply after)
- **Validation signal:** Tools with most waitlist signups get built first
- **Social proof:** Show waitlist count on tiles once > 0 ("47 people waiting")
- **Urgency:** "Limited early access spots" messaging

---

## TARGET AUDIENCES

| Audience | Pain Points | Example Tools | Search Behavior |
|----------|-------------|---------------|-----------------|
| HR Managers | Manual onboarding, compliance tracking, PTO chaos | Onboarding checklists, PTO trackers, offer letter generators | "HR automation software", "employee onboarding tool" |
| Office Managers | Meeting scheduling, supply tracking, visitor management | Meeting schedulers, supply trackers, visitor logs | "office management software", "meeting room booking" |
| Small Biz Owners | Invoicing delays, expense chaos, proposal creation | Invoicing, expense reports, proposal builders | "free invoice generator", "small business tools" |
| CEOs/Executives | No visibility into KPIs, board report creation | KPI dashboards, OKR trackers, board report generators | "executive dashboard", "KPI tracking software" |
| Sales Teams | Lead follow-up gaps, commission disputes, proposal bottlenecks | Lead sequences, CRM lite, commission calculators | "sales automation tool", "lead management software" |
| Marketing Teams | Content planning, email branding, A/B testing | Content calendars, email signature generators, A/B planners | "marketing automation", "content calendar tool" |
| Desk Clerks | Appointment scheduling, document formatting, data entry | Appointment schedulers, document templates, data entry tools | "appointment booking system", "document template" |
| Lead Gen Specialists | Landing page creation, lead scoring, outreach management | Landing page builders, lead scoring, outreach templates | "lead generation tool", "landing page builder" |
| Operations Managers | Workflow bottlenecks, inventory gaps, vendor management | Workflow automation, inventory trackers, vendor management | "workflow automation software", "operations management" |

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

*(Expand this database as new tools are researched each session)*

---

## GITHUB SYNC PROTOCOL
- External pushes may come from another Claude Code session at any time
- **Always** check `git log` at session start for commits not in session-history
- If conflicts found: preserve both sets of changes, merge intelligently
- Analyze trending GitHub repos in business automation for feature ideas
- Check GitHub issues on popular SaaS tools for user complaint data
- After every session's work: commit with clear message describing what was added/changed

---

## CRITICAL RULES (NEVER VIOLATE)

1. **Browser-only** — every tool must work in-browser, no backend, no server, no API keys for demo
2. **Complete tools only** — every tool needs: working demo + waitlist + FAQ + city SEO + triple schema stack
3. **Research before building** — validate demand before writing code (competitors >$5K/mo, documented complaints)
4. **Compound daily** — update existing tools AND build new ones each session
5. **Session history is truth** — always read it first, always update it last
6. **Quality over quantity** — one well-researched tool beats three rushed ones
7. **Real data only** — every city, FAQ, stat, competitor complaint must be researched and verified. Never fabricate.
8. **Follow TypeScript interfaces** — all tool data must match the `Tool` interface exactly
9. **Minimums per tool** — 20 keywords, 5 competitors, 10 cities, 8 features, 6 competitor fixes — no exceptions
10. **Mobile-first** — 83% of traffic is mobile, design accordingly
11. **Never skip the startup sequence** — session-history and tools.ts must be read before any work
12. **Specific next-session plans** — never write vague plans like "add more tools", always name specific tools and tasks
13. **Build must pass** — never end a session with a broken build. Run `npm run build` before and after.
14. **Cite your sources** — every competitor complaint must reference where it was found (G2, Reddit, etc.)
15. **No orphan pages** — every new page must be linked from the dashboard and included in the sitemap
