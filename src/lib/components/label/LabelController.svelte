<script lang="ts">
	import { onDestroy, setContext, untrack } from 'svelte';
	import { type LabelsContext } from '.';
	import { Heading } from './Heading';
	import { Labels } from './Labels.svelte';

	let { children } = $props();

	type TreeItem = {
		index: number;
		title: string;
	};

	let labels = new Labels();

	let current = $state<TreeItem[]>([]);

	setContext<LabelsContext>('labels', { addHeading, labels });

	function addHeading(title: string, level: number) {
		const item = new Heading(title, 0, level);

		if (current.length > level) {
			const last = current[level];
			item.index = last.index + 1;

			current = current.slice(0, level);
		} else if (current.length < level) {
			// Fill up with empty items
			for (let i = current.length; i < level; i++) {
				current.push({ title: '', index: 0 });
			}
		}

		labels.addHeading(item);
		current.push(item);

		// Return the index of the item remove the first 2 items
		item.indexStr = current
			.map((item) => item.index + 1)
			.slice(2)
			.join('.');

		return item;
	}

	onDestroy(() => {
		current = [];
	});

	// $inspect(current);
</script>

{@render children()}
