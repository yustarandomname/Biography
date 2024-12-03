import type { Blog } from '$lib/types.ts';

export async function load({ fetch }) {
	const response = await fetch('api/blogs');
	const blogs: Blog[] = await response.json();
	return { blogs };
}
