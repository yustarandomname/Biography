<script lang="ts">
	import { getContext, onMount, type Snippet } from 'svelte';
	import type { Picture } from 'vite-imagetools';
	import type { LabelsContext } from './label';
	import type { Label } from './label/Labels.svelte';

	type CardProps = {
		description?: string;
		image: Picture;
		label?: string;
		children: Snippet;
	};

	const { image, description, label, children }: CardProps = $props();

	const labelContext = getContext<LabelsContext>('labels');
	let figureLabel = $state<Label | undefined>(undefined);

	onMount(() => {
		if (label) {
			figureLabel = labelContext.addLabel(label, 'Figure');

			console.log('figureLabel', figureLabel.index);

			return () => {
				if (figureLabel) {
					labelContext.removeLabel(figureLabel);
				}
			};
		}
	});
</script>

<div id={figureLabel?.id ?? ''} class="m-2">
	<div class="overflow-hidden rounded-lg [&>*]:m-0">
		<enhanced:img src={image} alt={description || label || 'image'} />
	</div>

	<div class="mt-2 text-sm">
		{#if figureLabel}
			<span class="text-slate-500">Figure {figureLabel.index + 1}</span>
		{/if} -
		{@render children()}
	</div>
</div>
