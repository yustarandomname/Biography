<script lang="ts">
	import { papers, type ReferenceId } from '$lib/bib/Bibliography';
	import { getContext } from 'svelte';

	const { paperId }: { paperId: ReferenceId } = $props();

	getContext<{
		addItem: (paperId: ReferenceId) => void;
	}>('papers').addItem(paperId);

	const paperUrlId = $derived(paperId.replaceAll(' ', '-').toLowerCase());

	function firstLetterLastname(author: string) {
		const fullname = author.split(' ');
		const containsComma = author.includes(',');

		const lastName = containsComma ? fullname[0] : fullname[fullname.length - 1];

		// If a name is a hyphenated name, return the initials of each part
		// "Alice Harry-Peterson" -> "HP"
		return lastName
			.split('-')
			.map((n) => n[0].toUpperCase())
			.join('');
	}

	function toString(paperId: ReferenceId) {
		const paper = papers[paperId];

		if (!paper) {
			console.log('No paper for id', paperId);
			return '';
		}

		const y = paper?.year.toString().slice(-2) ?? ''; // 2024 -> 24

		if (paper.ENTRYTYPE == 'webpage') {
			return paper.title + y;
		} else if (paper?.authors.length <= 4) {
			return paper.authors.map(firstLetterLastname).join('') + '' + y;
		} else {
			const firstThree = paper.authors.slice(0, 3).map(firstLetterLastname).join('') + '*' + y;
			return firstThree;
		}
	}
</script>

<a href="#{paperUrlId}">
	[{toString(paperId)}]
</a>
