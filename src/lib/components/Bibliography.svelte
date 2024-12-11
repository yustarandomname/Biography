<script lang="ts">
	import { setContext } from 'svelte';
	import { SvelteSet } from 'svelte/reactivity';
	import { papers, type ReferenceId } from '$lib/bib/Bibliography';

	let { children } = $props();

	let paperSet = new SvelteSet<ReferenceId>();

	setContext('papers', { addItem });

	function addItem(paperId: ReferenceId) {
		$effect(() => {
			paperSet.add(paperId);

			return () => paperSet.delete(paperId);
		});
	}
</script>

{@render children()}

<h3>Bibliography</h3>
<div class="prose-sm grid gap-2">
	{#each Array.from(paperSet) as paperId}
		{@const paper = papers[paperId]}
		{@const paperUrlId = paperId.replaceAll(' ', '-').toLowerCase()}

		<div
			id={paperUrlId}
			class="rounded-xl border-2 bg-slate-100 px-4 py-3 dark:bg-slate-900 dark:text-slate-400"
		>
			<h4 class="mt-0">{paper.title} - {'month' in paper ? paper.month + '/' : ''} {paper.year}</h4>

			{#if 'authors' in paper}
				<p class="m-0">{paper.authors.join(', ')}</p>
			{/if}

			<!-- LINK -->
			{#if 'url' in paper}
				<a href={paper.url}>Source</a>
			{:else if 'doi' in paper}
				<a href={'https://doi.org/' + paper.doi}>Source</a>
			{/if}
		</div>
	{/each}
</div>
