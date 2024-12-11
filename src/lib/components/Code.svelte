<script lang="ts">
	import { getContext, onMount, type Snippet } from 'svelte';
	import type { LabelsContext } from './label';
	import type { Label } from './label/Labels.svelte';

	type EquationProps = {
		label?: string;
		children: Snippet;
	};

	let { label, children }: EquationProps = $props();

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

<div id={codeLabel?.id || ''} class="no-prose rounded-lg bg-gray-900 text-xs sm:text-base">
	{#if codeLabel}
		<div class="w-full bg-slate-400 p-1 text-slate-900">Algorithm {codeLabel.index + 1}</div>
	{/if}

	<div class="p-3">
		{@render children?.()}
	</div>
</div>
