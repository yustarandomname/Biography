import type { Heading } from './Heading';

export type LabelType = 'Equation' | 'Heading' | 'Figure' | 'Algorithm' | 'Table';

export class Labels {
	headings: { [key: string]: Heading } = $state({});
	equations: { [key: string]: Label } = $state({});
	figures: { [key: string]: Label } = $state({});
	algorithms: { [key: string]: Label } = $state({});
	tables: { [key: string]: Label } = $state({});

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
				this.equations[id] = label;
				break;
			case 'Figure':
				this.figures[id] = label;
				break;
			case 'Algorithm':
				this.algorithms[id] = label;
				break;
			case 'Table':
				this.tables[id] = label;
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
			case 'Figure':
				delete this.figures[id];
				break;
			case 'Algorithm':
				delete this.algorithms[id];
				break;
			case 'Table':
				delete this.tables[id];
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
		} else if (id in this.figures) {
			return this.figures[id];
		} else if (id in this.algorithms) {
			return this.algorithms[id];
		} else if (id in this.tables) {
			return this.tables[id];
		}

		return null;
	}
}

export class Label {
	title: string;
	type: LabelType;
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
