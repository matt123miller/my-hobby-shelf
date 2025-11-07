# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**My Hobby Shelf** is a miniature painting companion app that helps painters find and work with paint colors. It suggests complementary colors and helps match paints from the Games Workshop Citadel range. The project uses color science (LCH color space) to calculate perceptually accurate color distances.

## Monorepo Structure

This is a monorepo with 3 main components:

- **`/app`** - Next.js 13 full-stack application (primary development focus)
- **`/scraping`** - Node.js tool for scraping paint data from Games Workshop
- **`/IGNORE-server`** - Legacy Hono server (not actively used)

## Commands

### Main App (`/app`)

Required: Node.js >= 22.0.0

```bash
# Development
cd app
pnpm dev                    # Start Next.js dev server

# Building
pnpm build                  # Build production Next.js app
pnpm start                  # Run production build
pnpm clean                  # Remove .next directory

# Linting
pnpm lint                   # Run ESLint

# Database (requires Docker running)
docker compose start        # Start PostgreSQL container
pnpm prisma db push         # Push schema changes to database
pnpm db-seed                # Seed database with paint data
pnpm db-clear               # Clear all database data
pnpm prisma studio          # Open Prisma Studio to view data

# Storybook
pnpm storybook              # Start Storybook on port 6006
pnpm build-storybook        # Build static Storybook
```

### Scraping (`/scraping`)

```bash
cd scraping
npm run scrape:gw           # Scrape Games Workshop paint data
```

## Architecture

### Tech Stack
- **Frontend**: Next.js 13, React 18, TypeScript, Tailwind CSS
- **Backend**: tRPC v10, Prisma ORM, PostgreSQL
- **State Management**: TanStack React Query v4, TanStack React Form
- **Color Science**: colorjs.io (LCH color space calculations)
- **Package Manager**: pnpm

### Data Flow: Scraping → Database → Frontend

1. **Scraping** (`/scraping/scrape.js`)
   - Downloads SVG files from Games Workshop URLs (defined in `gw.js`)
   - Extracts hex color codes from SVG fill attributes
   - Outputs to `/scraping/data/gw.json`

2. **Database Seeding** (`/app/prisma/seed.ts`)
   - Imports paint data from `/app/prisma/data.ts`
   - Converts hex codes to LCH color space (Hue, Chroma, Luminance)
   - Precomputes color metrics for efficient runtime distance calculations
   - Seeds PostgreSQL via Prisma

3. **Runtime Access**
   - Frontend makes tRPC calls → Prisma queries → PostgreSQL
   - Color distance calculations use precomputed LCH values

### Database Schema (`/app/prisma/schema.prisma`)

```prisma
model Paint {
  id         String   @id @default(cuid())
  name       String
  hexCode    String
  hue        Float      # LCH color space: 0-360°
  chroma     Float      # Color saturation
  luminance  Float      # Brightness: 0-100
  createdAt  DateTime
  updatedAt  DateTime
}
```

**Environment**: Requires `POSTGRES_DB_URL` in `.env` file

### tRPC API Structure (`/app/src/server/trpc/router/`)

**Main Router** (`_app.ts`):
```typescript
appRouter = router({
  example: exampleRouter,
  paints: paintRouter,
  users: userRouter,    // WIP - no database model yet
})
```

**Paint Router** (`paints.ts`) - 3 procedures:
- `paints.list` - Returns all paints
- `paints.search` - Search by name with optional sorting (case-insensitive)
- `paints.closestPaint` - Finds closest paint by LCH color distance

**tRPC Config**:
- Transformer: `superjson` (handles complex types)
- Context: Provides singleton Prisma client (`/src/server/db/client.ts`)
- Endpoint: `/api/trpc`

### Frontend Structure (`/app/src/`)

```
src/
├── pages/                  # Next.js routes
│   ├── _app.tsx           # tRPC provider wrapper
│   ├── index.tsx          # Main paint search/browse page
│   ├── inventory.tsx      # WIP inventory page (scaffold only)
│   └── api/trpc/[trpc].ts # tRPC API handler
│
├── server/                # Backend
│   ├── trpc/
│   │   ├── router/       # tRPC routers (paints, users, example)
│   │   ├── trpc.ts       # tRPC instance config
│   │   └── context.ts    # Request context
│   └── db/client.ts      # Singleton Prisma client
│
├── components/            # Atomic Design structure
│   ├── atoms/            # Card, ColourBlock, PaintDescription, InputToggle
│   ├── molecules/        # PaintCard, PaintList, DarkModeToggle
│   ├── pages/            # Main, Inventory
│   └── templates/        # Layout
│
├── hooks/                # useLocalPaintSelection, useLocalState
├── utils/
│   ├── trpc.ts          # tRPC client setup
│   └── colors.ts        # Color distance calculations (findClosestPaint)
├── types/index.ts       # TypeScript types (Paint, ExtendedPaint)
└── env/                 # Zod environment validation
```

### Key Patterns & Concepts

**Color Distance Calculation** (`/app/src/utils/colors.ts`):
- Uses LCH color space (perceptually uniform)
- Euclidean distance: `sqrt((Δhue)² + (Δchroma)² + (Δluminance)²)`
- Precomputed LCH values at seed time for performance
- Used by `paints.closestPaint` to find similar colors

**Component Architecture**:
- Follows Atomic Design: atoms → molecules → organisms → pages → templates
- Organisms layer mostly empty (opportunity for grouping complex UI)
- Components organized by complexity, not feature

**Local State Management**:
- `useLocalPaintSelection()` hook maintains in-memory paint selection
- Integrates with React Query cache for optimistic updates
- No backend persistence for selections (client-side only)

**Search with Debouncing**:
- Main page uses `useDebounce(searchTerm, 500ms)`
- Reduces API calls while typing
- tRPC automatically batches requests via httpBatchLink

## Development Workflow

1. **Starting Development**:
   ```bash
   cd app
   docker compose start    # Start PostgreSQL
   pnpm dev                # Start Next.js (runs prisma generate via postinstall)
   ```

2. **Database Changes**:
   - Edit `/app/prisma/schema.prisma`
   - Run `pnpm prisma db push` (local dev)
   - For production, use proper migrations (not yet configured)

3. **Adding New Paints**:
   - Update `/app/prisma/data.ts` with new paint data
   - Run `pnpm db-clear && pnpm db-seed`

4. **Storybook Development**:
   - Components have `.stories.tsx` files (currently CSF 2.0)
   - Run `pnpm storybook` to develop components in isolation
   - TODO: Migrate to CSF 3.0 format

## Known Issues & TODOs

**Current State**:
- Dark mode toggle UI exists but implementation incomplete
- User system (router defined, no database model or functionality)
- Inventory page is scaffold only
- Storybook stories use CSF 2.0 (should migrate to 3.0)

**Planned Features** (from README):
- Add more paint brands (currently Games Workshop only)
- Complementary color suggestions
- Color picker for selecting from uploaded images
- Filtering and sorting improvements

## Environment Setup

**Required `.env` file** (`/app/.env`):
```env
POSTGRES_DB_URL="postgresql://user:password@localhost:5432/dbname"
```

See `/app/.env.example` for template.

## External Resources

- Color science: https://colorjs.io/
- Complementary colors: https://en.wikipedia.org/wiki/Complementary_colors
- Color sorting algorithms: https://www.alanzucconi.com/2015/09/30/colour-sorting/
- LCH color calculator: https://planetcalc.com/7661/
