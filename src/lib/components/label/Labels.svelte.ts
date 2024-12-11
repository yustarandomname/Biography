import type { Heading } from './Heading';

export class Labels {
	headings: { [key: string]: Heading } = $state({});
	// tables: [],
	// figures: []

	constructor() {}

	static toId(title: string) {
		return title.toLowerCase().replaceAll(/[^a-z0-9]/g, '-');
	}

	addHeading(heading: Heading) {
		// if there is already a heading with the same title, throw an error
		if (this.headings[heading.title]) {
			throw new Error(`Duplicate heading: ${heading.title}`);
		}

		const id = Labels.toId(heading.title);
		this.headings[id] = heading;
	}

	/**
	 * find a heading by its id, if not found return null
	 * @param id - The id of the heading to find
	 * @returns The heading with the given id or null if not found
	 */
	find(id: string) {
		if (id in this.headings) {
			return this.headings[id];
		}

		return null;
	}
}
