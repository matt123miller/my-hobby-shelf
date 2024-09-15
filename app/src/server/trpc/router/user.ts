import { publicProcedure, router } from "../trpc";

export const userRouter = router({
  inventory: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.users.findMany();
  }),
});
