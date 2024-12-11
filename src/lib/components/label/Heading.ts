import { Label } from './Labels.svelte';

export class Heading extends Label {
	indexStr: string;
	level: number = 0;

	constructor(title: string, index: number, level: number) {
		super(title, 'Heading', index);

		this.indexStr = index.toString();
		this.level = level;
	}

	get id() {
		// Replace everything that is not a letter or a number with a dash
		return this.indexStr + '-' + this.title.toLowerCase().replaceAll(/[^a-z0-9]/g, '-');
	}

	get anchor() {
		return '#' + this.id;
	}

	get fullTitle() {
		return this.indexStr + '. ' + this.title;
	}

	toAutoRef() {
		switch (this.level) {
			case 1:
				return 'Title ' + this.indexStr;
			case 2:
				return 'Section ' + this.indexStr;
			case 3:
				return 'Subsection ' + this.indexStr;
			case 4:
				return 'Subsubsection ' + this.indexStr;
			default:
				return 'Section ' + this.indexStr;
		}
	}
}
