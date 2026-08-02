import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    // the accented half of the headline, e.g. "market data, live."
    tagline: z.string(),
    summary: z.string(),
    order: z.number(),
    receipts: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
        // optional hover-expand: the story behind the number
        expand: z
          .object({ items: z.array(z.string()), note: z.string().optional() })
          .optional(),
      })
    ),
    // night-mode only: the honest annotation
    marginalia: z.string().optional(),
    // night-mode only: what I didn't know going in — the clueless-but-learning list
    learned: z.array(z.string()).optional(),
    wip: z.boolean().default(false),
    link: z.string().url().optional(),
    // multiple labeled links (e.g. live demo + code), shown alongside the single `link` above
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).optional(),
    // night-mode only: a real excerpt pulled from the running system, not written by me
    transmission: z.object({ text: z.string(), source: z.string() }).optional(),
  }),
});

export const collections = { projects };
