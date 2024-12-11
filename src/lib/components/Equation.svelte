<script lang="ts">
	import katex from 'katex';
	import { getContext, onMount } from 'svelte';
	import type { LabelsContext } from './label';
	import type { Label } from './label/Labels.svelte';

	type EquationProps = {
		latex: string;
		label?: string;
		block?: boolean;
	};

	let { latex, label, block = false }: EquationProps = $props();

	const labelContext = getContext<LabelsContext>('labels');

	let equationLabel = $state<Label | undefined>(undefined);

	let strOutput = $derived.by(() => {
		let input = latex;

		try {
			// For reference: https://katex.org/docs/options.html
			const results = katex.renderToString(input, {
				displayMode: block,
				leqno: false,
				fleqn: false,
				throwOnError: true,
				output: 'mathml',
				trust: true,
				strict: false
			});

			return results;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (e: any) {
			return e.message;
		}
	});

	onMount(() => {
		if (label) {
			equationLabel = labelContext.addLabel(label, 'Equation');

			return () => {
				if (equationLabel) {
					labelContext.removeLabel(equationLabel);
				}
			};
		}
	});
</script>

{#if block}
	<div
		id={equationLabel?.id || ''}
		class="m-2 flex max-w-full flex-col-reverse items-start justify-start gap-2 text-xs sm:text-base md:flex-row md:items-center md:justify-between"
	>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<div class="max-w-full overflow-x-auto overflow-y-hidden pb-2">
			{@html strOutput}
		</div>

		{#if equationLabel}
			<div class=" text-nowrap text-sm text-slate-500">
				(Eqn {equationLabel.index + 1}.)
			</div>
		{/if}
	</div>
{:else}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<span>{@html strOutput}</span>
{/if}
