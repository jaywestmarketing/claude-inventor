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

## Queued Tools (Research Next)
- AI Meeting Notes Summarizer (target: office managers, executives)
- Employee Onboarding Checklist Generator (target: HR managers)
- Lead Follow-up Sequence Builder (target: sales teams)
- Social Media Content Calendar (target: marketing teams)

## Key Guidelines
- All tools must work in-browser (no backend required for demos)
- Waitlist data stored in localStorage (connect to backend later)
- Every tool page needs: demo, FAQ, city SEO, schema markup, waitlist form
- Check `data/session-log.json` at start of each session for history
- Research keywords, competitor updates, and trending features each session
