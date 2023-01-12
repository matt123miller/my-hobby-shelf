import { prisma } from "../src/server/db/client";
import { rawData } from "./data";

async function main() {
  const data = rawData.map((paint) => ({
    name: paint.name,
    hexCode: paint.hexCode,
    // range: "",
  }));

  return prisma.paint.createMany({
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
