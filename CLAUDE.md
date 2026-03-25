# AutomateStack - Claude Session Context

## Project Overview
AutomateStack is a dashboard of AI-powered business automation tools. New tools are added daily based on market research. Each tool has a waitlist for lead collection. Target audience: HR managers, office managers, small business owners, CEOs, desk clerks, lead gen specialists, marketing teams, sales professionals.

## Session Workflow (Read Every Session)
1. **Read** `src/data/session-history.ts` for full context of all previous sessions
2. **Read** `src/data/tools.ts` for current tool inventory
3. **Research** new trending automation tools via web search
4. **Update** existing tools: check for new keywords, competitor changes, trending features
5. **Add** new tools (target: 1+ per session) with full data: keywords, competitors, fixes, cities
6. **SEO Check**: Research keyword ranking changes, add new low-competition cities (5 per tool)
7. **Update** `session-history.ts` with new session entry
8. **Check GitHub** for any external updates between sessions

## Architecture
- **Framework**: Next.js App Router (TypeScript)
- **Styling**: CSS with glass-morphism design (semi-transparent white tiles, light shadows)
- **Data**: Static TypeScript files (tools.ts, session-history.ts)
- **SEO**: Schema.org JSON-LD, dynamic sitemap, robots.txt allowing AI crawlers
- **Waitlist**: localStorage (to be upgraded to backend)

## Tool Requirements
- Revenue validation: Competitors must earn >$5,000/month
- Each tool needs: 20 keywords, 5 competitors with complaints, fixes, 5 target cities
- All tools are browser-based web apps with demo mode + waitlist

## SEO/AEO/GEO Strategy

### GEO Triple Stack (Critical)
Every tool page should include 3 JSON-LD schemas: WebApplication + ItemList + FAQPage. Pages with the triple stack get **1.8x more AI citations**.

### AEO: Direct Answers
- Place concise answer in **first 150 words** of page (55% of AI citations come from first 30%)
- Use listicle/comparison table format (32% of AI citations are listicles)
- Add stats every 150-200 words
- Refresh content quarterly

### Robots.txt Strategy
- Allow AI retrieval bots (ChatGPT-User, PerplexityBot, ClaudeBot, OAI-SearchBot)
- Block AI training bots (GPTBot, Google-Extended, CCBot) — NOTE: currently allowing all; adjust if needed

### Waitlist Optimization
- Top waitlist pages convert at 25-85% (vs 3.8% median for SaaS)
- 83% mobile traffic — mobile-first mandatory
- Keep form fields to 5 or fewer (doubles conversion)
- Launch within 90 days of waitlist opening

### Core Web Vitals
- LCP < 2.5s, INP < 200ms, CLS < 0.1
- Use fetchpriority="high" on hero images
- Inline critical CSS, defer non-critical
- Use WebP/AVIF image formats

### Local SEO Without Physical Presence
- Create unique city-specific landing pages (100% unique content, not just city name swaps)
- Mention local business regulations, tax rates, popular industries
- Use LocalBusiness + Service schema per city page
- List on G2, Capterra, Product Hunt for backlinks
- Target 5 low-competition cities per tool, expand by 5 each session

### Google/Bing/Yahoo/DuckDuckGo
- Schema.org structured data, semantic HTML, FAQ sections, meta tags
- Dynamic sitemap.xml and robots.txt
- OpenGraph + Twitter Card meta tags

## Key Files
- `src/data/tools.ts` - All tools with metadata, keywords, competitors, cities
- `src/data/session-history.ts` - Session-by-session changelog and plans
- `src/app/page.tsx` - Main dashboard landing page
- `src/app/tools/[slug]/page.tsx` - Individual tool pages
- `src/app/layout.tsx` - Root layout with global SEO meta
- `src/components/ToolTile.tsx` - Tool card component with waitlist form
- `src/app/globals.css` - Glass-morphism design system

## Current Tools (Session 1 - 2026-03-25)
1. **OnboardFlow** (HR) - Employee onboarding automation
2. **InvoiceAI** (Finance) - AI-powered invoice generation
3. **LeadPilot** (Marketing) - Lead capture and nurturing
4. **CalendarFlow** (Productivity) - Smart meeting scheduling
5. **ExpenseBot** (Finance) - Automated expense reporting

## Queued Tools (Research Next)
- PTO/Time-Off Tracker
- Proposal Generator
- Social Media Scheduler
- Payroll Calculator
- Helpdesk Ticketing
