import { prisma } from "../src/server/db/client";
import { allPaints } from "./data";

async function main() {
  const data = allPaints.map((paint) => ({
    name: paint.name,
    hexCode: paint.hexCode,
    // range: "",
  }));

  await prisma.paint.createMany({
    data,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
