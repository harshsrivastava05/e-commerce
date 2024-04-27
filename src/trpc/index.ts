import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    anyApiRouter: publicProcedure.query(()=>{
        return 3
    })
})

export type AppRouter = typeof appRouter