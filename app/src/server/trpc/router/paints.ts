import type { Prisma } from "@prisma/client";
import { z } from "zod";

import { publicProcedure, router } from "../trpc";

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
            mode: "insensitive",
          },
        };
      }

      const results = await ctx.prisma.paint.findMany(query);

      return {
        results,
      };
    }),
});
