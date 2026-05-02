# AGENTS.md

This file provides guidance to Codex and other coding agents working in this repository.

## Project Overview

**My Hobby Shelf** is a miniature painting companion app for finding and working with paint colors. It focuses on Games Workshop Citadel paints and uses LCH color space to calculate perceptually meaningful color distances.

## Monorepo Structure

This repository is a pnpm workspace monorepo with two active applications and shared packages:

- `/apps/site` - Next.js 13 full-stack application and primary development target
- `/apps/scraper` - Node.js scraper for Games Workshop paint data
- `/packages/*` - shared config packages and future shared runtime libraries

## Tooling Expectations

- Package manager: `pnpm`
- Workspace management: `pnpm workspaces`
- Required Node.js version: `>=24.0.0`
- Run commands from the repository root unless there is a reason to scope to a workspace directly

## Common Commands

### Root workspace

```bash
pnpm dev
pnpm build
pnpm lint
pnpm clean
```

### Target a specific workspace

```bash
pnpm -F site dev
pnpm -F site build
pnpm -F site lint

pnpm -F scraper scrape:gw
```

## Main App

Location: `/apps/site`

Stack:

- Next.js 13
- React 18
- TypeScript
- Tailwind CSS
- tRPC v10
- Prisma
- PostgreSQL
- TanStack React Query
- TanStack React Form

Useful commands:

```bash
pnpm -F site dev
pnpm -F site build
pnpm -F site start
pnpm -F site clean
pnpm -F site lint

pnpm -F site storybook
pnpm -F site build-storybook
```

### Database workflow

The app requires PostgreSQL and uses Prisma.

```bash
docker compose start
pnpm -F site prisma db push
pnpm -F site db-seed
pnpm -F site db-clear
pnpm -F site prisma studio
```

Environment:

- `/apps/site/.env` must define `POSTGRES_DB_URL`
- `/apps/site/.env.example` is the template

## Scraping Workflow

Location: `/apps/scraper`

Command:

```bash
pnpm -F scraper scrape:gw
```

Data flow:

1. `apps/scraper/src/scrape.ts` downloads and parses Games Workshop SVG data.
2. The scraper writes normalized paint data to `apps/scraper/data/gw.json`.
3. `apps/site/prisma/seed.ts` imports paint data and precomputes LCH metrics before seeding PostgreSQL.
4. The app queries those records through tRPC and Prisma.

## Architecture Notes

### Core domain model

The central model is `Paint`, which stores:

- `name`
- `hexCode`
- `hue`
- `chroma`
- `luminance`

LCH values are precomputed at seed time for efficient similarity lookups at runtime.

### Backend structure

The active API layer is in `/apps/site/src/server/trpc/router/`.

Key routers:

- `paints`
- `example`
- `users` - work in progress

The main paint router currently exposes:

- `paints.list`
- `paints.search`
- `paints.closestPaint`

### Frontend structure

Primary app code lives under `/apps/site/src`.

Notable areas:

- `pages/` - Next.js routes
- `components/` - Atomic Design component structure
- `server/` - tRPC and Prisma integration
- `utils/colors.ts` - color distance logic
- `hooks/` - local state helpers

## Project Conventions

- Prefer working in `/apps/site` unless the task is explicitly about data ingestion or scraping.
- Preserve the current Atomic Design component organization in `/apps/site/src/components`.
- Prefer existing tRPC and Prisma patterns over introducing new API conventions.
- Keep color-related logic consistent with the existing LCH-based approach.
- Put new shared config or runtime packages under `/packages`.

## Development Guidance For Agents

- Verify workspace-specific scripts in `package.json` before documenting or changing commands.
- If a task involves paint similarity, inspect `apps/site/src/utils/colors.ts` and the `paints` router first.
- If a task involves persisted data, inspect `apps/site/prisma/schema.prisma`, `apps/site/prisma/seed.ts`, and related Prisma scripts first.
- If a task involves scraped source data, inspect `apps/scraper/src/scrape.ts`, `apps/scraper/src/gw.ts`, and `apps/scraper/data/`.
- Be aware that some areas are intentionally incomplete: dark mode, inventory, and user functionality are not fully implemented.

## Known Status

Current incomplete or planned areas called out by the repository guidance:

- dark mode toggle exists but implementation is incomplete
- inventory page is scaffolded
- user system is not fully implemented
- Storybook stories are older CSF 2 style
- support for additional paint brands is planned
- complementary color workflows and image-based color picking are planned

## Practical Starting Points

For most work:

1. Start PostgreSQL if the app needs live data.
2. Run `pnpm -F site dev` for the main application.
3. Use `pnpm -F site lint` and relevant builds to validate changes.
4. Reseed the database if paint data or schema assumptions change.
