<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	type CardProps = {
		title?: string;
		description?: string;
		image?: string | Picture;
		linkToBlog?: string;
		actionText?: string;
		children?: any;
	};

	const {
		title = 'In Progress',
		description = 'This is a card that is in progress.',
		image,
		linkToBlog = '',
		actionText = 'Read the blog',
		children
	}: CardProps = $props();
</script>

<div class="card grid grid-cols-6 gap-2 rounded-xl border-2 bg-slate-100 px-4 py-3">
	<div class="col-span-4">
		<!-- Title -->
		<h3 class="m-0 mt-2">{title}</h3>

		<!-- Description -->
		{#if description}
			<p class="mb-0 text-xs">{description}</p>
		{/if}

		<!-- Content -->
		<p class="text-sm">
			{#if children}
				{@render children?.()}
			{/if}
		</p>
	</div>

	<div class="not-prose relative col-span-2">
		{#if image}
			<!-- Vite enhanced image such that the optimal resolution is served over the internets -->
			<div
				class="m-0 scale-75 overflow-hidden rounded-lg object-contain grayscale-[0.5] hover:scale-[0.9] hover:grayscale-0 motion-safe:transition-all"
				class:move-up={linkToBlog}
			>
				<enhanced:img src={image} alt="An image of + {description}" />
			</div>
		{/if}

		<!-- Optional link to an (internal/external) resource -->
		{#if linkToBlog}
			<a class="absolute bottom-0 right-0" href={linkToBlog}>{actionText}</a>
		{/if}
	</div>
</div>

<style>
	.move-up {
		@apply absolute top-1/2 -translate-y-1/2;
	}
</style>
