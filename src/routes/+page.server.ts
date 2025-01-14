import { Captcha } from '$lib/server/captcha';
import type { Blog } from '$lib/types';
import { setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad } from './$types';
import { formSchema } from './zodSchema';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	const response = await fetch('api/blogs');

	const blogs: Blog[] = await response.json();

	const isHuman = cookies.get('isHuman');

	const captcha = new Captcha();

	return {
		isHuman,
		email: isHuman ? 'abeldebruijn@hotmail.com' : '',
		whatsapp: isHuman ? 'https://wa.me/+31624335892' : '',
		blogs,
		sortables: captcha.sortables,
		form: await superValidate(zod(formSchema))
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));

		if (!form.valid) {
			return setError(form, 'guess', 'Invalid captcha');
		}

		const validate = Captcha.validate(form.data.guess.split('-'));

		if (validate) {
			event.cookies.set('isHuman', 'true', {
				maxAge: 60 * 60 * 24 * 7,
				path: '/'
			});
		} else {
			return setError(form, 'guess', 'Invalid captcha, try again');
		}
	}
};
