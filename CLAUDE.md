# Contre-Landing

> Part of the **Contre** real estate AI platform.
>
> For blog content and editorial guidelines, see [content/CLAUDE.md](./content/CLAUDE.md).

## Project Overview

Production marketing site and blog engine for Contre.AI. Built with Next.js App Router, features SEO-optimized pages, an MDX-powered blog, 3D visuals, and Kubernetes deployment. This is the public-facing site at contre.ai.

## Tech Stack

- **Framework**: Next.js 16.1 (App Router)
- **UI**: React 19, Tailwind CSS 3.4, Radix UI
- **Animation**: Framer Motion, Three.js (3D graphics)
- **Content**: MDX via next-mdx-remote 6
- **Language**: TypeScript 5.9
- **Email**: SendGrid (quote request form)
- **Theming**: next-themes (dark mode)
- **Fonts**: Inter, Bebas Neue, Manrope
- **Deployment**: Docker, Kubernetes (k8s/)

## Directory Structure

```
src/
  app/                  # Next.js App Router pages
    api/quote-request/  # API route for contact form
    blog/[slug]/        # Dynamic blog routes
    agents/             # Agent-focused pages
    brokerages/         # Brokerage-focused pages
    about/, contact/    # Static pages
    privacy/, terms/    # Legal pages
  components/
    blog/               # Blog-specific components
    ui/                 # Radix UI component wrappers
    seo/                # SEO components
  hooks/                # Custom React hooks
  lib/                  # Utility functions
content/
  blog/                 # Blog articles (MDX)
  avatars/              # Target audience profiles
  templates/            # Article templates
  CLAUDE.md             # Blog editorial guidelines (DO NOT MODIFY without marketing approval)
public/                 # Static assets
k8s/                    # Kubernetes deployment configs
```

## Getting Started

### Prerequisites

- Node.js 22+
- npm

### Setup & Running

```bash
npm install
npm run dev          # Dev server on port 5138
npm run build        # Production build
npm run lint         # ESLint
```

## Development Workflow

### Branching

- **Default branch is `master`** (not main)
- NEVER commit directly to `master` — always create a feature branch
- Always `git pull origin master` before starting work
- Open a PR for all changes

### CI/CD

- **`pr-check.yml`** — runs on PRs: lint, build, type check (Node 22)
- **`release.yml`** — release workflow on merge

### Testing

- Type checking: `npx tsc --noEmit`
- Lint: `npm run lint`
- Build validation: `npm run build`

## Code Conventions & Patterns

- Next.js App Router file conventions (`page.tsx`, `layout.tsx`, `loading.tsx`)
- Tailwind CSS with custom HSL color system defined in `tailwind.config.ts`
- Radix UI primitives wrapped in `src/components/ui/`
- MDX articles use frontmatter with SEO metadata (see `content/templates/article.md`)
- Standalone output mode for Docker deployment

## Integration Points

- **Public site** for the Contre platform — links to the app (contre-ai-ui) for sign-up/login
- **Blog content** follows editorial guidelines in `content/CLAUDE.md` (brand voice, avatars, SEO rules)
- **SendGrid** for quote request form submissions
- **Kubernetes** configs in `k8s/` deploy alongside other Contre services

## CRITICAL SAFETY RULES

> These rules are non-negotiable. Violating them risks the live marketing site or team workflow.

1. **NEVER push directly to `master`** — always work on a branch and open a PR
2. **NEVER force-push** (`git push --force`) to shared branches
3. **Always `git pull origin master`** before starting any work
4. **NEVER bypass CI checks** — all PRs must pass lint, build, and type checks
5. **NEVER commit secrets** (.env files, API keys, SendGrid tokens) — check `.gitignore`
6. **NEVER modify `content/CLAUDE.md`** without marketing team approval — it governs brand voice and editorial standards

## What NOT To Do

- **Don't modify `content/CLAUDE.md` editorial guidelines** without marketing approval
- **Don't add large assets to `public/`** without checking bundle size impact — especially Three.js assets
- **Don't use inline styles** — use Tailwind classes or the custom theme system
- **Don't create pages outside the App Router** (`src/app/`) — Next.js App Router is the routing standard
- **Don't skip SEO metadata** on new pages — every page needs proper meta tags
