# YAAWA Website Specification

## Project Overview

Create a modern Astro-based website for:

**YAAWA (You Ask And We Answer)**

Tagline:

> You Ask. We Answer.

The website should feel like a trusted advisor for wedding planning questions and decisions.

The site will initially focus on wedding-related questions gathered from Reddit and other online communities.

The site should be:

* Fast
* SEO optimized
* Mobile-first
* Static-site friendly
* GitHub Pages compatible
* Markdown-driven
* Easy for AI agents to generate new content

---

# Design Direction

## Overall Feel

The design should feel:

* Trustworthy
* Elegant
* Helpful
* Professional
* Calm
* Wedding-inspired without looking like a wedding invitation website

Avoid:

* Excessive floral decorations
* Heavy animations
* Overly feminine styling
* Generic blog appearance

Think:

> Modern knowledge base meets luxury wedding planner.

---

# Color Palette

Primary:

* Ivory (#F8F5F0)

Secondary:

* Champagne (#E8DCCB)

Accent:

* Sage Green (#A8B5A2)

Text:

* Charcoal (#333333)

Highlight:

* Rose Gold (#B76E79)

---

# Typography

Headings:

* Playfair Display
* Cormorant Garamond

Body:

* Inter
* Source Sans Pro

Style:

* Elegant headings
* Highly readable body text

---

# Homepage

## Hero Section

Large headline:

> Wedding Questions Answered with Confidence

Subheadline:

> Trusted answers, practical advice, and real-world insights for every wedding decision.

Primary CTA:

> Browse Answers

Secondary CTA:

> Explore Categories

Search bar prominently displayed.

Placeholder:

> Ask a wedding question...

---

# Homepage Sections

## Popular Questions

Cards showing questions such as:

* Is a cash bar rude?
* Should I invite coworkers?
* How much should parents contribute?
* Is it okay to have a child-free wedding?

---

## Categories

Grid of categories:

* Budget
* Etiquette
* Guest List
* Family Issues
* Vendors
* Venues
* Planning Timeline
* Gifts
* Fashion
* Ceremony

---

## Featured Guides

Long-form content:

* Wedding Budget Guide
* Guest List Planning Guide
* Wedding Etiquette Guide
* Vendor Selection Guide

---

## Why Trust Us

Explain:

* Questions sourced from real discussions
* Advice synthesized from multiple viewpoints
* Practical and unbiased guidance

---

# Site Structure

## Home

/

---

## Answers

/answers

List all answer pages.

Searchable.

Filterable by category.

---

## Individual Answer Page

Example:

/answers/is-a-cash-bar-rude

Layout:

* Title
* Quick Answer Summary
* Detailed Explanation
* Pros
* Cons
* Common Situations
* Recommendation
* Related Questions

---

## Categories

/categories

Each category has its own page.

Examples:

/categories/budget

/categories/etiquette

/categories/family

---

## Guides

/guides

Long-form evergreen content.

Examples:

* Wedding Budget Guide
* Guest List Guide
* Vendor Guide

---

## About

/about

Explain mission:

> Helping couples make wedding decisions with confidence.

---

# Content System

Use Astro Content Collections.

Structure:

src/content/answers/

src/content/guides/

src/content/categories/

---

Answer frontmatter:

```yaml
title: Is a Cash Bar Rude?
slug: is-a-cash-bar-rude
category: etiquette
created: 2026-01-01
updated: 2026-01-01
excerpt: Learn whether cash bars are considered rude and when they can work well.
```

Guide frontmatter:

```yaml
title: Wedding Budget Guide
slug: wedding-budget-guide
```

---

# Search

Implement site-wide search.

Requirements:

* Fast
* Client-side
* Search all answers
* Search all guides

Preferred:

Pagefind

---

# SEO

Every page must include:

* SEO title
* Meta description
* Canonical URL
* OpenGraph tags
* Structured data where possible

Generate:

* sitemap.xml
* robots.txt

---

# Related Content

Each answer page should automatically show:

* Related answers
* Same category answers
* Recommended guides

---

# Footer

Sections:

Answers

Guides

Categories

About

Social Links

Copyright

---

# Future Features

Design the architecture so the following can be added later:

## AI Question Submission

User asks a question.

AI generates answer.

Human reviews.

Published automatically.

---

## Wedding Health Check

Upload:

* Budget
* Guest list
* Timeline

Receive recommendations.

---

## Vendor Comparison Tools

Compare:

* Venues
* Photographers
* DJs
* Caterers

---

## User Accounts

Optional future feature.

---

# Technical Requirements

Framework:

Astro

Styling:

Tailwind CSS

Content:

Markdown

Hosting:

GitHub Pages

Deployment:

GitHub Actions

Search:

Pagefind

Analytics:

Cloudflare Analytics

Performance Target:

95+ Lighthouse score

Accessibility:

WCAG AA

---

# Content Philosophy

Every answer should:

* Answer the question immediately
* Provide balanced perspectives
* Avoid clickbait
* Be trustworthy
* Be practical
* Feel like advice from an experienced wedding planner

Tone:

Professional

Warm

Helpful

Non-judgmental

Clear

Concise

---

# Brand

Name:

YAAWA

Expanded:

You Ask And We Answer

Tagline:

You Ask. We Answer.

Mission:

Help couples make wedding decisions with confidence.

Core Promise:

Clear answers to wedding questions.
