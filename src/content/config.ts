import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string().optional(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string().optional(),
			img_alt: z.string().optional(),
			img_object_pos: z.string().optional(),
			play_link: z.string().optional(),
			github_link: z.string(),
		}),
	}),
};
