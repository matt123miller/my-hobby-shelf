import { z } from "zod";

import { router, publicProcedure } from "../trpc";

import allPaints from "../data";

export const paintRouter = router({
  list: publicProcedure.query(() => allPaints),
  search: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(async ({ input }) => {
      if (!input.name) {
        return {
          results: allPaints,
        };
      }

      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 5000);
      });

      const results = allPaints.filter((p) =>
        p.name.toLowerCase().includes(input.name)
      );
      return {
        results,
      };
    }),
});

function ListRoute() {
  return allPaints; // what does this look like on the front end?
}
