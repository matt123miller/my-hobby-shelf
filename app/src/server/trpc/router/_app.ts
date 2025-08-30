import { router } from "../trpc";
import { exampleRouter } from "./example";
import { paintRouter } from "./paints";
import { userRouter } from "./user";

export const appRouter = router({
  example: exampleRouter,
  paints: paintRouter,
  users: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
