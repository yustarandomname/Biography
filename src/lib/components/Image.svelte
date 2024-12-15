<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
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

	let isOpen = $state(false);

	let id = Math.random().toString(36).substring(7);

	onMount(() => {
		if (label) {
			figureLabel = labelContext.addLabel(label, 'Figure');
		}

		return () => {
			if (figureLabel) {
				labelContext.removeLabel(figureLabel);
			}
		};
	});
</script>

<div class="w-full">
	<Dialog.Root
		open={isOpen}
		onOpenChange={(open) => {
			isOpen = open;
		}}
	>
		<Dialog.Trigger>
			<div
				id={figureLabel?.id ?? ''}
				class="shadow-none transition-shadow hover:shadow-lg"
				role="figure"
				aria-labelledby="caption-{id}"
			>
				<div
					class="m-2 mx-auto block w-[70%] overflow-hidden rounded-lg [&>*]:m-0 [&>*]:transition-opacity"
				>
					<enhanced:img src={image} alt={description || label || 'image'} />
				</div>

				<div class="mt-2 text-sm" id="caption-{id}">
					{#if figureLabel}
						<span class="text-slate-500">Figure {figureLabel.index + 1}</span>
					{/if} -
					{@render children()}
				</div>
			</div>
		</Dialog.Trigger>

		<Dialog.Content class="sm:max-w-near-full lg:max-w-5xl">
			<Dialog.Header>
				{#if figureLabel}
					<Dialog.Title>Figure {figureLabel.index + 1}</Dialog.Title>
				{/if}
			</Dialog.Header>

			<Dialog.Description
				class="flex max-h-near-full flex-col items-center overflow-y-auto overflow-x-hidden"
			>
				<div class="mx-auto overflow-hidden rounded-lg">
					<enhanced:img src={image} alt={description || label || 'image'} />
				</div>

				<p class="mt-4">{@render children()}</p>
			</Dialog.Description>
		</Dialog.Content>
	</Dialog.Root>
</div>
