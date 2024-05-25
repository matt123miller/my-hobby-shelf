# My Hobby Space

Nextjs front end built on create-t3-app, including prisma, trpc and tailwind.

DB hosted on somewhere, locally run using docker postgres

UI all available in Storybook

## DB

DB is postgres managed via [prisma](https://www.prisma.io/orm). You can use [Prisma Studio](https://www.prisma.io/studio) to view the data which is fun, by running `pnx prisma studip

### Local dev

- Make sure the docker containers are running `docker compose start`
- `pnx prisma db push` to copy whatever the current schema state is to the DB
- If the db is empty then run `pnx tsx prisma/seed.ts` to seed the db with the intitial data

### Remote hosting

- Use the prisma migration stuff properly. When we get that far follow some guides.
- Pick your poison of postgres providers, or self host on railway.

## UI Features to get working

https://codepen.io/Kilian/pen/YzYLprM

https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually

https://www.npmjs.com/package/use-dark-mode but forked by @fisch0920/use-dark-mode

## TODO:

- Pick and configure remote postgres provider
- Fix storybook files to use CSF 3 with nicer es6 exports https://storybook.js.org/docs/7.0/react/api/csf

## Resources

https://www.alanzucconi.com/2015/09/30/colour-sorting/
