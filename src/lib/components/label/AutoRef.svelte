<script lang="ts">
	import { getContext } from 'svelte';
	import type { LabelsContext } from '.';
	import { Labels } from './Labels.svelte';

	const labels = getContext<LabelsContext>('labels').labels;

	let { label: labelId }: { label: string } = $props();

	const autoRef = $derived.by(() => {
		const id = Labels.toId(labelId);
		const label = labels.find(id);

		if (!label) {
			console.warn(`Label not found: ${labelId}`);

			return undefined;
		}

		return label;
	});
</script>

{#if autoRef}
	<a
		class="text-slate-500 no-underline transition-colors hover:text-slate-700 hover:underline dark:hover:text-slate-300"
		href={autoRef.anchor}>{autoRef.toAutoRef()}</a
	>
{:else}
	<span class="font-bold text-red-600">[???]</span>
{/if}
