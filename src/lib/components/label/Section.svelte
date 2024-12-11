<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import type { LabelsContext } from '.';

	let {
		title
	}: {
		title: string;
	} = $props();

	const context = getContext<LabelsContext>('labels');

	const item = context.addHeading(title, 2);
</script>

<h2 id={item.id}>
	{item.fullTitle}
</h2>
