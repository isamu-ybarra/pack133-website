import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const imageField = z.object({
  src: z.string(),
  alt: z.string(),
}).optional();

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    eyebrow: z.string().optional(),
    heroImage: imageField,
    navOrder: z.number().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ base: './src/content/events', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    featured: z.boolean().default(false),
    registrationUrl: z.url().optional(),
    image: imageField,
    draft: z.boolean().default(false),
  }),
});

const updates = defineCollection({
  loader: glob({ base: './src/content/updates', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    image: imageField,
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { pages, events, updates };
