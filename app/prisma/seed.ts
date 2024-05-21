import Color from "colorjs.io";

import { prisma } from "../src/server/db/client";
import { allPaints } from "./data";

Color.defaults.precision = 5;

async function main() {
  const data = allPaints
    // .slice(0, 2)
    .map((paint) => {
      return {
        name: paint.name,
        hexCode: paint.hexCode,
        hue: Number(paint.hue.toFixed(3)),
        chroma: Number(paint.chroma.toFixed(3)),
        luminance: Number(paint.luminance.toFixed(3)),
        // range: "",
      };
    });

  console.log("preparing to write data", data);

  await prisma.paint.createMany({
    data,
  });
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
