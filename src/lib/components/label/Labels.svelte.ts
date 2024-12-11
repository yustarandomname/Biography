import type { Heading } from './Heading';

export class Labels {
	headings: { [key: string]: Heading } = $state({});
	// tables: [],
	// figures: []

	constructor() {}

	addHeading(heading: Heading) {
		// if there is already a heading with the same title, throw an error
		if (this.headings[heading.title]) {
			throw new Error(`Duplicate heading: ${heading.title}`);
		}

		this.headings[heading.title] = heading;
	}
}
