import { createRouter } from "./context";
import { z } from "zod";
const multi:boolean[][] = [[true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,],[true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,false]]

export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Trpc Will Book you a Sunbed Eventually `,
      };
    },
  })
    .query("grid", {
        input: z
            .object({
                text: z.string().nullish(),
            })
            .nullish(),
        resolve({ input }) {
            return {
                greeting: `App in Development..`,
            };
        },
    })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  });
