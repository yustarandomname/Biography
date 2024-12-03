import type { Blog } from '$lib/types.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`$blogs/${params.slug}.svx`);

		return {
			content: post.default,
			meta: post.metadata as Omit<Blog, 'slug'>
		};
	} catch {
		error(404, `Could not find ${params.slug}`);
	}
}
