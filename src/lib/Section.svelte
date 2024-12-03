<script lang="ts">
	import type { Snippet } from 'svelte';

	type SectionProps = {
		id: string;
		name: string;
		emoji: string;
		description?: string;
		children: Snippet;
	};

	const { id, name, emoji, description = '', children }: SectionProps = $props();
</script>

<section {id} class="prose mx-auto my-12">
	<h2 class="font-medium">{emoji ? emoji + ' ' : ''}{name}</h2>

	{#if description}
		<p>{description}</p>
	{/if}

	<div class="cols-1 grid gap-3">
		{@render children()}
	</div>
</section>
