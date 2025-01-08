<script lang="ts">
	import { draggable, droppable, type DragDropState } from '@thisux/sveltednd';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	interface Item {
		id: string;
		emoji: string;
	}

	type Props = {
		items: Item[];
		handleDrop: (state: DragDropState<Item>) => void;
	};

	const { items = $bindable(), handleDrop }: Props = $props();
</script>

<div class="flex justify-center gap-2 py-4">
	{#each items as item, index (item.id)}
		<div
			use:draggable={{ container: index.toString(), dragData: item }}
			use:droppable={{
				container: index.toString(),
				callbacks: { onDrop: handleDrop }
			}}
			animate:flip={{ duration: 200 }}
			in:fade={{ duration: 150 }}
			out:fade={{ duration: 150 }}
			class="svelte-dnd-touch-feedback grid h-16 w-16 cursor-move items-center rounded-lg bg-white text-center shadow-sm ring-1 ring-gray-200 transition-all duration-200 hover:shadow-md hover:ring-2 hover:ring-blue-200 dark:bg-slate-700"
		>
			<div class="w-full text-center">
				<div class="h-8 select-none text-2xl">{item.emoji}</div>
				<div class="w-full select-none text-xs text-slate-700 dark:text-slate-300">{item.id}</div>
			</div>
		</div>
	{/each}
</div>

<style>
	:global(.dragging) {
		@apply opacity-50 shadow-lg ring-2 ring-blue-400;
	}

	:global(.drag-over) {
		@apply bg-blue-50;
	}
</style>
