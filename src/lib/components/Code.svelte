<script lang="ts">
	import { getContext, onMount, type Snippet } from 'svelte';
	import type { LabelsContext } from './label';
	import type { Label } from './label/Labels.svelte';

	type EquationProps = {
		title: string;
		label?: string;
		children: Snippet;
	};

	let { label, title, children }: EquationProps = $props();

	const labelContext = getContext<LabelsContext>('labels');

	let codeLabel = $state<Label | undefined>(undefined);

	onMount(() => {
		if (label) {
			codeLabel = labelContext.addLabel(label, 'Algorithm');

			return () => {
				if (codeLabel) {
					labelContext.removeLabel(codeLabel);
				}
			};
		}
	});
</script>

<div
	id={codeLabel?.id || ''}
	class="no-prose overflow-hidden rounded-lg bg-gray-900 text-xs sm:text-base"
>
	<div class="w-full bg-slate-400 px-4 py-2 text-slate-900">
		{#if codeLabel}
			Algorithm {codeLabel.index + 1} -
		{/if}
		{title}
	</div>

	<code class="block p-3 text-gray-100">
		{@render children?.()}
	</code>
</div>
