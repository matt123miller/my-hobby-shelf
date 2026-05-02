import { TRPCError } from "@trpc/server";
import { z } from "zod";

import type { Prisma } from "@prisma/client";
import { findClosestPaint } from "@utils/colors";
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
  closestPaint: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { id } = input;

      if (!id) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Invalid input, id is required",
        });
      }
      if (id === -1) {
        return { result: null };
      }

      const query: Prisma.PaintFindUniqueArgs = { where: { id: String(id) } };

      const targetPaint = await ctx.prisma.paint.findUnique(query);

      if (!targetPaint) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Paint not found with the given id",
        });
      }

      const allPaints = await ctx.prisma.paint.findMany({});

      const closestPaint = findClosestPaint(allPaints, targetPaint);

      return { result: closestPaint };
    }),
});
