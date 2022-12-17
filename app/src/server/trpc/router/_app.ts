import { router } from "../trpc";
import { exampleRouter } from "./example";
import { paintRouter } from "./paints";

export const appRouter = router({
  example: exampleRouter,
  paints: paintRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
