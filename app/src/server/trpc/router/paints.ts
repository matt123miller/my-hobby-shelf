import { z } from "zod";

import { router, publicProcedure } from "../trpc";

import { rawData as allPaints } from "../data";
import type { PaintRecord } from "@typing";

export const SORT_OPTIONS = ["colour", "name"] as const;
export const SORT_DIR = ["asc", "desc"] as const;

export const paintRouter = router({
  list: publicProcedure.query(() => allPaints),
  search: publicProcedure
    .input(
      z.object({
        name: z.string().default(""),
        sortField: z.enum(SORT_OPTIONS).optional(),
        sortDir: z.enum(SORT_DIR).optional(),
      })
    )
    .query(async ({ input }) => {
      const { name, sortField, sortDir } = input;

      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });

      // filter all paints that include name
      let results = allPaints.filter((paint) =>
        paint.name.toLowerCase().includes(name.toLowerCase())
      );

      const sortFunc = sortField === "name" ? sortByName(sortDir) : () => 1;

      results = results.sort(sortFunc);

      return {
        results,
      };
    }),
});

function sortByName(sortDir: string | undefined) {
  return (a: PaintRecord, b: PaintRecord) => {
    if (sortDir === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  };
}

function ListRoute() {
  return allPaints; // what does this look like on the front end?
}
