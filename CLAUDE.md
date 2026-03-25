# AutomateHub — Claude Session Context

## Project Overview
AutomateHub is a collection of free, browser-based business automation tools targeting HR, office managers, small business owners, CEOs, sales, marketing, and desk clerks. The main dashboard at `public/index.html` lists all tools as semi-transparent white tiles with light shadows. Each tool has its own page with a working demo and waitlist.

## Architecture
- **Static site** served from `public/`
- `public/index.html` — Main dashboard/landing page
- `public/css/main.css` — Global styles (semi-transparent tiles, responsive)
- `public/js/tools-registry.js` — Central registry of ALL tools (add new tools here)
- `public/js/main.js` — Dashboard JS (grid rendering, waitlist forms, nav)
- `public/tools/{tool-slug}/` — Individual tool directories
- `data/session-log.json` — Session history and research log

## Adding a New Tool (Daily Process)
1. Research trending business automation tools via web search
2. Validate competitors earn >$5000/month
3. Find negative reviews of competitors and design fixes
4. Pick 5 low-competition US cities for local SEO
5. Add tool entry to `public/js/tools-registry.js` TOOLS_REGISTRY array
6. Create tool directory: `public/tools/{tool-slug}/`
7. Create tool page with: demo, waitlist, FAQ, city SEO sections, schema markup
8. Update `public/sitemap.xml` with new tool URL
9. Update `data/session-log.json` with session details

## SEO Strategy
- **Google/Bing/Yahoo/DuckDuckGo**: Schema markup (JSON-LD), semantic HTML, FAQ sections, meta tags
- **AEO** (Answer Engine Optimization): FAQ schema, HowTo schema, direct answer content
- **GEO** (Generative Engine Optimization): Structured data, authoritative content, clear entity definitions
- **Local SEO**: City-specific content sections, LocalBusiness schema, target 5 low-competition cities per tool

## Current Tools
1. **Smart Invoice Generator** (2026-03-25) — `public/tools/smart-invoice-generator/`
   - Target cities: Boise ID, Greenville SC, Huntsville AL, Provo UT, Fayetteville AR
   - Status: Demo
2. **AI Meeting Notes Summarizer** (2026-03-25) — `public/tools/ai-meeting-notes/`
   - Target cities: Boise ID, Huntsville AL, Wilmington NC, Provo UT, Lakeland FL
   - Status: Demo
   - Key differentiator: No bot joins meetings (unlike Otter.ai, Fireflies, Read.ai)
   - Competitor revenue validation: Otter.ai $100M ARR, Fireflies $1B valuation, Fathom $18.8M ARR

## Queued Tools (Research Next)
- Employee Onboarding Checklist Generator (target: HR managers)
- AI Business Proposal/Quote Builder (target: sales, freelancers, business owners)
- Lead Follow-up Sequence Builder (target: sales teams)
- Social Media Content Calendar (target: marketing teams)

## Key Guidelines
- All tools must work in-browser (no backend required for demos)
- Waitlist data stored in localStorage (connect to backend later)
- Every tool page needs: demo, FAQ, city SEO, schema markup, waitlist form
- Check `data/session-log.json` at start of each session for history
- Research keywords, competitor updates, and trending features each session

## SEO Research Findings (2026-03-25)
Key findings from research to apply on every page and tool:

### GEO Triple Stack (Critical)
Every tool page should include 3 JSON-LD schemas: Article/WebApplication + ItemList + FAQPage. Pages with the triple stack get **1.8x more AI citations**.

### AEO: Direct Answers
- Place concise answer in **first 150 words** of page (55% of AI citations come from first 30%)
- Use listicle/comparison table format (32% of AI citations are listicles)
- Add stats every 150-200 words
- Refresh content quarterly (3x more likely to lose AI citations if stale)

### Robots.txt Strategy
- Allow AI retrieval bots (ChatGPT-User, PerplexityBot, ClaudeBot, OAI-SearchBot)
- Block AI training bots (GPTBot, Google-Extended, CCBot)

### Waitlist Optimization
- Top waitlist pages convert at 25-85% (vs 3.8% median for SaaS)
- 83% mobile traffic — mobile-first mandatory
- Keep form fields to 5 or fewer (doubles conversion)
- Launch within 90 days of waitlist opening (conversion drops sharply after)

### Core Web Vitals
- LCP < 2.5s, INP < 200ms, CLS < 0.1
- Use fetchpriority="high" on hero images
- Inline critical CSS, defer non-critical
- Defer/async all non-critical scripts
- Use WebP/AVIF image formats

### Local SEO Without Physical Presence
- Create unique city-specific landing pages (100% unique content, not just city name swaps)
- Mention local business regulations, tax rates, popular industries
- Use LocalBusiness + Service schema per city page
- List on G2, Capterra, Product Hunt for backlinks
