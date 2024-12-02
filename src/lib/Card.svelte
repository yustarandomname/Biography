<script lang="ts">
	const {
		title = 'In Progress',
		description = 'This is a card that is in progress.',
		image = '',
		linkToBlog = '',
		children
	} = $props();
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
		<img
			class="m-0 w-full scale-75 rounded-md bg-contain hover:scale-100 motion-safe:transition-transform"
			class:move-up={linkToBlog}
			src={image}
			alt="An image of + {description}"
		/>
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
