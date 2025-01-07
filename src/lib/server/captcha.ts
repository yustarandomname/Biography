export class Captcha {
	emoji = {
		xl: new Set([
			{ id: 'castle', emoji: '🏰' },
			{ id: 'planet', emoji: '🪐' },
			{ id: 'earth', emoji: '🌍' },
			{ id: 'moon', emoji: '🌝' },
			{ id: 'volcano', emoji: '🌋' },
			{ id: 'stadium', emoji: '🏟️' }
		]),
		lg: new Set([
			{ id: 'whale', emoji: '🐳' },
			{ id: 'dinosaur', emoji: '🦖' },
			{ id: 'mammoth', emoji: '🦣' },
			{ id: 'house', emoji: '🏡' },
			{ id: 'elephant', emoji: '🐘' },
			{ id: 'buffalo', emoji: '🐃' },
			{ id: 'rocket', emoji: '🚀' }
		]),
		md: new Set([
			{ id: 'astronaut', emoji: '🧑‍🚀' },
			{ id: 'programmer', emoji: '👨‍💻' },
			{ id: 'kangaroo', emoji: '🦘' },
			{ id: 'gorilla', emoji: '🦍' },
			{ id: 'sloth', emoji: '🦥' },
			{ id: 'dolphin', emoji: '🐬' }
		]),
		sm: new Set([
			{ id: 'hand', emoji: '🖐️' },
			{ id: 'beer', emoji: '🍺' },
			{ id: 'heart', emoji: '🫀' },
			{ id: 'dodo', emoji: '🦤' },
			{ id: 'eggplant', emoji: '🍆' },
			{ id: 'pineapple', emoji: '🍍' }
		]),
		xs: new Set([
			{ id: 'blueberry', emoji: '🫐' },
			{ id: 'ant', emoji: '🐜' },
			{ id: 'tooth', emoji: '🦷' },
			{ id: 'tongue', emoji: '👅' },
			{ id: 'ladybug', emoji: '🐞' },
			{ id: 'crayon', emoji: '🖍️' }
		])
	};

	sortables: { id: string; emoji: string }[];

	constructor() {
		// Pick a random emoji from each set
		this.sortables = [
			[...this.emoji.xl][Math.floor(Math.random() * this.emoji.xl.size)],
			[...this.emoji.lg][Math.floor(Math.random() * this.emoji.lg.size)],
			[...this.emoji.md][Math.floor(Math.random() * this.emoji.md.size)],
			[...this.emoji.sm][Math.floor(Math.random() * this.emoji.sm.size)],
			[...this.emoji.xs][Math.floor(Math.random() * this.emoji.xs.size)]
		];

		// Shuffle the guess
		this.sortables.sort(() => Math.random() - 0.5);
	}

	// Inspired by https://stackoverflow.com/a/2450976
	shuffle() {
		let currentIndex = this.sortables.length;

		// While there remain elements to shuffle...
		while (currentIndex != 0) {
			// Pick a remaining element...
			const randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[this.sortables[currentIndex], this.sortables[randomIndex]] = [
				this.sortables[randomIndex],
				this.sortables[currentIndex]
			];
		}
	}
}
