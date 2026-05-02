import { publicProcedure, router } from "../trpc";

export const userRouter = router({
  hello: publicProcedure.query(({ ctx }) => {
    return "Hello, world!";
  }),
  // inventory: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.users.findMany();
  // }),
});
