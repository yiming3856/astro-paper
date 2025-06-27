import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDatetime: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog,
};
