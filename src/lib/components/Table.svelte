<script lang="ts">
	import katex from 'katex';
	import { getContext, onMount, type Snippet } from 'svelte';
	import type { LabelsContext } from './label';
	import type { Label } from './label/Labels.svelte';

	type EquationProps = {
		data: string[][];
		label?: string;
		hasHeader?: boolean;
		children: Snippet;
	};

	let { data, label, hasHeader = false, children }: EquationProps = $props();

	const labelContext = getContext<LabelsContext>('labels');
	let tableLabel = $state<Label | undefined>(undefined);

	onMount(() => {
		if (label) {
			tableLabel = labelContext.addLabel(label, 'Table');

			return () => {
				if (tableLabel) {
					labelContext.removeLabel(tableLabel);
				}
			};
		}
	});
</script>

<div class="overflow-hidden rounded-lg border-2">
	<div class="w-full bg-slate-400 px-4 py-2 text-slate-900">
		{#if tableLabel}
			Table {tableLabel.index + 1} -
		{/if}
		{label}
	</div>

	<div class="p-4 pb-0">
		<table id={tableLabel?.id || ''} class="m-0 w-full">
			{#if hasHeader}
				<thead>
					<tr>
						{#each data[0] as header}
							<th>{header}</th>
						{/each}
					</tr>
				</thead>
			{/if}

			<tbody>
				{#each data.slice(hasHeader ? 1 : 0) as row}
					<tr>
						{#each row as cell}
							<td>{cell}</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<div class="mb-2 px-3 py-2 text-sm">
		{@render children()}
	</div>
</div>
