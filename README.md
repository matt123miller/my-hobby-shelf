# paint-mixer-app

## [View a WIP version here](https://paints.m11r.dev/).

There's 2 main applications in this monorepo.

- [apps/scraper](./apps/scraper/README.md) for scraping websites to get info about the paints.
- [apps/site](./apps/site/README.md) for the front end site that uses that scraped info.

I wanted a little tool for helping me when miniature painting. Something that could suggest complimentary colours.

## Installation

This repo uses pnpm workspaces.

- Run `pnpm install` at the repo root
- Use `pnpm --filter site ...` or `pnpm --filter scraper ...` to target one app

## TODO

- Add more colours to complete the Citadel range
- Add other brands of paints
- When suggesting a complimentary colour also suggest the paint in the list closest to that colour
- Picking a colour from a colour picker and/or from an uploaded image.
- Some filtering and sorting options
- Light/dark mode support
- Refactor this increasingly messy code

## Deployment

This project is deployed on Vercel and the frontend [can be viewed here](https://paints.m11r.dev/)
### Process

- Ensure your changes are all committed and merged into master.
- run the site deployment flow from `apps/site`

## Notes

Relies on the [colourjs.io library](https://colorjs.io/)

https://en.wikipedia.org/wiki/Complementary_colors

https://planetcalc.com/7661/
