import { defineCollection, z } from "astro:content";

const comparisons = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      logo: image(),
      color: z.string(),
    }),
});

export const collections = {
  comparisons,
};
