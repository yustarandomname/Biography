<script lang="ts">
	import { onMount } from 'svelte';

	type TocProps = {
		items: { id: string; name: string }[];
	};

	const { items }: TocProps = $props();

	let hightlighted = $state();

	function handleScroll() {
		const middleOfScreen = window.innerHeight / 8;
		let closestElement = null;
		let closestDistance = Infinity;

		items.forEach(({ id }) => {
			const element = document.getElementById(id);
			if (element) {
				const rect = element.getBoundingClientRect();
				const distance = Math.abs(rect.top - middleOfScreen);
				if (distance < closestDistance) {
					closestDistance = distance;
					closestElement = id;
				}
			}
		});

		if (closestElement) {
			hightlighted = closestElement;
		}
	}

	onMount(() => {
		handleScroll();
	});
</script>

<svelte:window onscroll={handleScroll} />

<nav class="sticky h-fit p-12">
	<ul>
		{#each items as { id, name }}
			<li class="m-2 text-slate-400" class:highlight={hightlighted == id}>
				<a href={`#${id}`}>{name}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		top: 1.5rem;
	}

	.highlight {
		color: black;
	}
</style>
