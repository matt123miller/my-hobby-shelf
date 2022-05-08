# paint-mixer-app

## [View a WIP version here](https://matt123miller.github.io/paint-mixer-app/).

There's 2 folders.

- [scraping](./scraping/README.md) for scraping websites to get info about the paints.
- [paint-mixer-frontend](./paint-mixer-frontend/README.md) for the front end site that uses that scraped info.

I wanted a little tool for helping me when miniature painting. Something that could suggest complimentary colours.

## Installation

There are 2 npm projects in here though both are the same.

- `cd` into either directory
- `npm install`

## TODO

- Add more colours to complete the Citadel range
- Add other brands of paints
- When suggesting a complimentary colour also suggest the paint in the list closest to that colour
- Picking a colour from a colour picker and/or from an uploaded image.
- Some filtering and sorting options
- Light/dark mode support
- Refactor this increasingly messy code

## Deployment

This project is deployed on github pages [and can be viewed here](https://matt123miller.github.io/paint-mixer-app/).

### Process

- Ensure your changes are all committed and merged into master.
- `cd ./paint-mixer-frontend`
- `npm run deploy`

## Notes

Relies on the [colourjs.io library](https://colorjs.io/)

https://en.wikipedia.org/wiki/Complementary_colors

https://planetcalc.com/7661/
