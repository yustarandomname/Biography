export class Heading {
	title: string;
	index: number;
	indexStr: string;
	level: number = 0;

	constructor(title: string, index: number, level: number) {
		this.title = title;
		this.index = index;
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
}
