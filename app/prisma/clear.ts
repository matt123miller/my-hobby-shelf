import { prisma } from "../src/server/db/client";

async function main() {
  // await prisma.
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("uhoh");
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
