import { z } from "zod";
import type { Paint, Prisma } from "@prisma/client";

import { router, publicProcedure } from "../trpc";

import type { PaintRecord } from "@typing";

export const SORT_OPTIONS = ["colour", "name"] as const;
export const SORT_DIR = ["asc", "desc"] as const;

export const paintRouter = router({
  list: publicProcedure.query(async ({ ctx }) => {
    const results = await ctx.prisma.paint.findMany({});

    return {
      results,
    };
  }),
  search: publicProcedure
    .input(
      z.object({
        name: z.string().default(""),
        sortField: z.enum(SORT_OPTIONS).optional(),
        sortDir: z.enum(SORT_DIR).optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { name, sortField, sortDir } = input;

      const query: Prisma.PaintFindManyArgs = {};

      if (name) {
        query.where = {
          name: {
            contains: name,
          },
        };
      }

      const results = await ctx.prisma.paint.findMany(query);

      return {
        results,
      };
    }),
});
