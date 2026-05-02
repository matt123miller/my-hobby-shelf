import { readFileSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import https from "node:https";
import path from "node:path";

import { allPaints } from "./gw";

type ScrapedPaint = {
  name: string;
  svg: string;
  hexCode: string;
  filePath: string;
};

async function scrape(): Promise<void> {
  console.log(
    `Attempting to scrape data for ${allPaints.length} paints from the GW site.`,
  );

  try {
    const formattedPaintInfo = await Promise.all(
      allPaints.map(async (paint): Promise<ScrapedPaint> => {
        const svg = await downloadSvg(paint.svg);
        const filePath = path.join("paintimages", "gw", `${paint.name}.svg`);
        const file = await saveFile(filePath, svg);
        const hexCode = getHexCodeFromFile(file);

        return {
          ...paint,
          hexCode,
          filePath,
        };
      }),
    );

    await saveFile(
      path.join("data", "gw.json"),
      JSON.stringify(formattedPaintInfo, null, 2),
    );

    console.log("Success!");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Failed :( ${message}`);
    process.exitCode = 1;
  }
}

function getHexCodeFromFile(file: string): string {
  const searchTerm = 'fill="#';
  const fillIndex = file.indexOf(searchTerm) + searchTerm.length;
  const hexCode = file.slice(fillIndex, fillIndex + 6);
  return `#${hexCode}`;
}

async function saveFile(filePath: string, data: string): Promise<string> {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, data, "utf8");
  return readFileSync(filePath, "utf8");
}

async function downloadSvg(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let contents = "";
    https
      .get(url, (response) => {
        response.on("data", (chunk) => {
          contents += chunk;
        });
        response.on("end", () => {
          resolve(contents);
        });
      })
      .on("error", reject);
  });
}

void scrape();
