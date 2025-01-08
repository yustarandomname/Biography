const emoji = {
	xl: [
		{ id: 'castle', emoji: '🏰' },
		{ id: 'planet', emoji: '🪐' },
		{ id: 'earth', emoji: '🌍' },
		{ id: 'moon', emoji: '🌝' },
		{ id: 'volcano', emoji: '🌋' },
		{ id: 'stadium', emoji: '🏟️' }
	],
	lg: [
		{ id: 'whale', emoji: '🐳' },
		{ id: 'dinosaur', emoji: '🦖' },
		{ id: 'mammoth', emoji: '🦣' },
		{ id: 'house', emoji: '🏡' },
		{ id: 'elephant', emoji: '🐘' },
		{ id: 'buffalo', emoji: '🐃' },
		{ id: 'rocket', emoji: '🚀' }
	],
	md: [
		{ id: 'astronaut', emoji: '🧑‍🚀' },
		{ id: 'developer', emoji: '👨‍💻' },
		{ id: 'kangaroo', emoji: '🦘' },
		{ id: 'gorilla', emoji: '🦍' },
		{ id: 'sloth', emoji: '🦥' },
		{ id: 'dolphin', emoji: '🐬' }
	],
	sm: [
		{ id: 'hand', emoji: '🖐️' },
		{ id: 'beer', emoji: '🍺' },
		{ id: 'heart', emoji: '🫀' },
		{ id: 'dodo', emoji: '🦤' },
		{ id: 'eggplant', emoji: '🍆' },
		{ id: 'pineapple', emoji: '🍍' }
	],
	xs: [
		{ id: 'blueberry', emoji: '🫐' },
		{ id: 'ant', emoji: '🐜' },
		{ id: 'tooth', emoji: '🦷' },
		{ id: 'tongue', emoji: '👅' },
		{ id: 'ladybug', emoji: '🐞' },
		{ id: 'crayon', emoji: '🖍️' }
	]
};

export class Captcha {
	sortables: { id: string; emoji: string }[];

	constructor() {
		// Pick a random emoji from each set
		this.sortables = [
			emoji.xl[Math.floor(Math.random() * emoji.xl.length)],
			emoji.lg[Math.floor(Math.random() * emoji.lg.length)],
			emoji.md[Math.floor(Math.random() * emoji.md.length)],
			emoji.sm[Math.floor(Math.random() * emoji.sm.length)],
			emoji.xs[Math.floor(Math.random() * emoji.xs.length)]
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

	static validate(guess: string[]) {
		if (guess.length !== 5) return false;

		const xlCorrect = emoji.xl.filter((emoji) => emoji.id === guess[0]).length == 1;
		const lgCorrect = emoji.lg.filter((emoji) => emoji.id === guess[1]).length == 1;
		const mdCorrect = emoji.md.filter((emoji) => emoji.id === guess[2]).length == 1;
		const smCorrect = emoji.sm.filter((emoji) => emoji.id === guess[3]).length == 1;
		const xsCorrect = emoji.xs.filter((emoji) => emoji.id === guess[4]).length == 1;

		return xlCorrect && lgCorrect && mdCorrect && smCorrect && xsCorrect;
	}
}
