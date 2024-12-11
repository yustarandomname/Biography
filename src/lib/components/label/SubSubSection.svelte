<script lang="ts">
	import { getContext } from 'svelte';
	import type { LabelsContext } from '.';

	let {
		title
	}: {
		title: string;
	} = $props();

	const context = getContext<LabelsContext>('labels');

	const item = context.addHeading(title, 4);
</script>

<h4 id={item.anchor}>
	{item.fullTitle}
</h4>
