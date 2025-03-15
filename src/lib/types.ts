export type Blog = {
	title: string;
	slug: string;
	description: string;
	date: string;
	author: string;
	coauthors?: string[];
	tags?: string[];
	published: boolean;
};
