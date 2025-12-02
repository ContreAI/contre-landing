# Contre.AI Blog Engine

This is the configuration for generating high-quality, SEO-optimized blog content for Contre.AI. All articles should feel like editorial magazine content, not corporate blog filler.

---

## Design Philosophy (Intercom-Style)

Articles produced by this engine should embody:

- **Magazine-quality editorial** - Every piece should feel like it belongs in a respected industry publication, not a content mill
- **Strong visual hierarchy** - Clear H1 > H2 > H3 structure with purposeful formatting
- **Scannable but substantive** - Readers can skim for value, but depth rewards those who read fully
- **Reading time awareness** - Target word counts that respect the reader's time (see templates)
- **Author voice** - Content should feel human and opinionated, not AI-generated slop

---

## Brand Voice & Tone

**Contre.AI speaks with:**
- Confidence without arrogance
- Expertise without jargon-bombing
- Urgency without fear-mongering (save that for broker-specific pieces)
- Empathy for the chaos of real estate transactions

**Words/Phrases We Use:**
- Transaction intelligence
- Deal protection
- Institutional knowledge
- Compliance confidence
- Revenue protection

**Words/Phrases We Avoid:**
- "Revolutionary" / "Game-changing" (overused)
- "Leverage" as a verb (corporate speak)
- "Synergy" (obvious)
- "Simple" when describing complex things
- "Just" (minimizes difficulty)

---

## Target Avatars

Before writing any article, identify which avatar you're targeting. Load the full avatar profile from `/avatars/` for detailed guidance.

### Quick Reference:

| Avatar | Primary Motivation | Content Tone | CTA Focus |
|--------|-------------------|--------------|-----------|
| Broker Ben | Protect revenue, reduce liability | Professional, ROI-focused | Demo/Assessment |
| Agent Amanda | Close more deals, look professional | Practical, action-oriented | Free tools/Resources |
| Hannah Homebuyer | Understand process, reduce anxiety | Educational, reassuring | Share with agent |

---

## SEO Requirements

Every article must include:

1. **Primary keyword** in:
   - H1 title (naturally, not forced)
   - First 100 words
   - At least one H2
   - Meta description
   - URL slug

2. **Secondary keywords** (2-3):
   - Sprinkled naturally throughout
   - In at least one H2 or H3

3. **Meta description**: 150-160 characters, includes primary keyword, compelling hook

4. **Internal links**: Minimum 2 links to other Contre content (specify placeholders if content doesn't exist yet)

5. **External links**: 1-2 authoritative sources (NAR stats, industry reports, etc.)

---

## Article Template

All articles use the same consistent layout. Load the master template from `/templates/article.md`.

**Word Count:** 1,000-1,800 words (adjust based on topic depth)  
**Author:** CT (default for all articles)

### Content Categories

| Category | Focus | Primary Avatar |
|----------|-------|----------------|
| Regulatory Updates | New/changed state forms and disclosures | Agent Amanda, Broker Ben |
| Document Intelligence | Deep dives into specific document types | Agent Amanda |
| Transaction Management | Process, timelines, best practices | All |
| Brokerage Operations | Systems, ROI, team management | Broker Ben |
| Consumer Education | Jargon-free guides for buyers/sellers | Hannah Homebuyer |

Categories are tags, not structural changes. Same layout every time.

---

## Article Structure Standards

### Opening (First 150 words)
- Hook with a specific problem, stat, or scenario
- Establish stakes (what's at risk)
- Promise value (what reader will learn/gain)
- Include primary keyword naturally

### Body
- H2s every 200-300 words for scannability
- One core idea per section
- Use specifics over generalities (numbers, examples, scenarios)
- Include a "pattern interrupt" - callout box, stat highlight, or quote

### Closing
- Summarize key takeaway in 1-2 sentences
- Clear CTA appropriate to avatar
- Don't introduce new concepts

---

## Formatting Rules

```markdown
# H1: Only one per article, includes primary keyword

## H2: Major sections, 3-6 per article

### H3: Subsections when needed, not required

**Bold**: Key terms, important callouts (use sparingly)

*Italic*: Emphasis, publication titles

> Blockquotes: For statistics, expert quotes, or callout statements

- Bullets: Only for actual lists of 3+ items
- Not for paragraph content disguised as bullets
```

---

## Output Format

Every generated article should include:

```markdown
---
title: [SEO-optimized title]
slug: [url-friendly-slug]
avatar: [broker-ben | agent-amanda | hannah-homebuyer]
category: [Regulatory Updates | Document Intelligence | Transaction Management | Brokerage Operations | Consumer Education]
primary_keyword: [main SEO target]
secondary_keywords: [keyword1, keyword2]
meta_description: [150-160 chars]
reading_time: [X min]
author: CT
tags: [tag1, tag2, tag3]
---

[Article content here]
```

---

## Usage Examples

**Regulatory update article:**
```
Write an article about California's 2025 TDS changes.
Target: agents
Primary keyword: "California transfer disclosure statement 2025"
Explain what changed, what agents need to do differently, and how Contre helps them stay compliant.
```

**Document intelligence article:**
```
Write an article breaking down HOA documents for agents.
Primary keyword: "reading HOA documents real estate"
Cover the sections that kill deals and what to look for.
```

**Brokerage operations article:**
```
Write an article for brokers about the cost of transaction failures.
Primary keyword: "real estate transaction management"
Include the 15% failure rate stat and $225K annual loss calculation.
```

**Consumer education article:**
```
Write an article for homebuyers about what happens between offer and closing.
Primary keyword: "home buying process timeline"
Keep jargon-free, reassuring, position the agent as the guide.
```

---

## Extension Points

This configuration is designed to grow. Add to it by:

1. **New avatars**: Add profile to `/avatars/[name].md`
2. **New categories**: Add to category table above
3. **New SEO rules**: Add section below
4. **State-specific content**: Add state disclosure guides to `/seo/`
5. **Campaign-specific rules**: Add temporary sections as needed

---

## Changelog

| Date | Change | Reason |
|------|--------|--------|
| 2024-XX-XX | Initial creation | Foundation setup |

---

*Last updated: [Auto-update on modification]*
