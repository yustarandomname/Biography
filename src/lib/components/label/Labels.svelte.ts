import type { Heading } from './Heading';

export type LabelType = 'Equation' | 'Heading';

export class Labels {
	headings: { [key: string]: Heading } = $state({});
	equations: { [key: string]: Label } = $state({});
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

	addLabel(label: Omit<Label, 'Heading'>) {
		const id = Labels.toId(label.title);

		switch (label.type) {
			case 'Equation':
				console.log('added Equation');
				this.equations[id] = label;
				break;
			default:
				throw new Error(`Unknown label type: ${label.type}`);
		}
	}

	removeLabel(label: Omit<Label, 'Heading'>) {
		const id = Labels.toId(label.title);

		switch (label.type) {
			case 'Equation':
				delete this.equations[id];
				break;
			default:
				throw new Error(`Unknown label type: ${label.type}`);
		}
	}

	/**
	 * find a heading by its id, if not found return null
	 * @param id - The id of the heading to find
	 * @returns The heading with the given id or null if not found
	 */
	find(idStr: string): Label | null {
		const id = Labels.toId(idStr);

		if (id in this.headings) {
			return this.headings[id];
		} else if (id in this.equations) {
			return this.equations[id];
		}

		return null;
	}
}

export class Label {
	title: string;
	type: string;
	index: number;

	constructor(title: string, type: LabelType, index: number) {
		this.title = title;
		this.type = type;
		this.index = index;
	}

	get id() {
		return Labels.toId(this.title);
	}

	get anchor() {
		return '#' + this.id;
	}

	toAutoRef() {
		return this.type + ' ' + (this.index + 1);
	}
}
