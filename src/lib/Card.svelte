<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	type CardProps = {
		title?: string;
		description?: string;
		image?: string | Picture;
		linkToBlog?: string;
		children?: any;
	};

	const {
		title = 'In Progress',
		description = 'This is a card that is in progress.',
		image,
		linkToBlog = '',
		children
	}: CardProps = $props();
</script>

<div class="grid grid-cols-6 gap-2 rounded-xl border-2 bg-slate-100 px-4 py-3">
	<div class="col-span-4">
		<h3 class="m-0 mt-2">{title}</h3>

		{#if description}
			<p class="mb-0 text-xs">{description}</p>
		{/if}

		<p class="text-sm">
			{@render children()}
		</p>
	</div>

	<div class="relative col-span-2">
		{#if image}
			<enhanced:img
				class="m-0 max-h-[12rem] scale-75 rounded object-contain hover:scale-100 motion-safe:transition-transform"
				class:move-up={linkToBlog}
				src={image}
				alt="An image of + {description}"
			/>
		{/if}
		{#if linkToBlog}
			<a class="absolute bottom-0 right-0" href={linkToBlog}>Go to blog</a>
		{/if}
	</div>
</div>

<style>
	.move-up {
		@apply -translate-y-5 hover:translate-y-0;
	}
</style>
