import { z } from 'zod';

export const formSchema = z.object({
	guess: z.string()
});

export type FormSchema = typeof formSchema;
