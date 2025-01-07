import { Captcha } from '$lib/server/captcha';
import type { Blog } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	const response = await fetch('api/blogs');

	const blogs: Blog[] = await response.json();

	const isHuman = cookies.get('isHuman');

	const captcha = new Captcha();

	return {
		isHuman,
		blogs,
		sortables: captcha.sortables
	};
};

export const actions = {
	// default: async (request) => {}
};
