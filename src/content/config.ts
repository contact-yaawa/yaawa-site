import { defineCollection, z } from 'astro:content';

const answers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    created: z.coerce.date(),
    updated: z.coerce.date(),
    excerpt: z.string(),
    quickAnswer: z.string(),
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
    recommendation: z.string().optional(),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    created: z.coerce.date(),
    updated: z.coerce.date(),
  }),
});

const categories = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    icon: z.string(),
  }),
});

export const collections = { answers, guides, categories };
