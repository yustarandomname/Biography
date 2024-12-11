<script lang="ts">
	import { getContext } from 'svelte';
	import type { LabelsContext } from '.';

	let {
		title
	}: {
		title: string;
	} = $props();

	const context = getContext<LabelsContext>('labels');

	const item = context.addHeading(title, 3);
</script>

<h3 id={item.id}>
	{item.fullTitle}
</h3>
