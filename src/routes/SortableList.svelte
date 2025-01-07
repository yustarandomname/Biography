<script lang="ts">
	import { draggable, droppable, type DragDropState } from '@thisux/sveltednd';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	type Sortable = {
		id: string;
		emoji: string;
	};

	let { sortables = $bindable() }: { sortables: Sortable[] } = $props();

	function handleDrop(state: DragDropState<Sortable>) {
		const { draggedItem, targetContainer } = state;
		if (!targetContainer) {
			console.log('no target container');
			return;
		}

		sortables = sortables.filter((sortable: Sortable) => sortable.id !== draggedItem.id); // Remove the dragged item
		sortables.splice(parseInt(targetContainer), 0, draggedItem); // Insert the dragged item at the new position
	}
</script>

<div class="flex overflow-x-auto p-4">
	{#each sortables as sortable, index (sortable.id)}
		<div
			use:droppable={{ container: index.toString(), callbacks: { onDrop: handleDrop } }}
			class="relative rounded-xl p-1"
			animate:flip={{ duration: 200 }}
		>
			<div
				use:draggable={{
					container: index.toString(),
					dragData: sortable
				}}
				in:fade={{ duration: 150 }}
				out:fade={{ duration: 150 }}
				class="svelte-dnd-touch-feedback grid h-20 w-20 cursor-move items-center justify-center rounded-xl bg-slate-200 transition-colors hover:bg-slate-300"
			>
				{sortable.emoji}
			</div>

			<!-- Added position indicator -->
			<div class="mx-auto mt-2 w-fit rounded bg-slate-100 p-1 text-center text-xs">
				{sortable.id}
			</div>
		</div>
	{/each}
</div>
