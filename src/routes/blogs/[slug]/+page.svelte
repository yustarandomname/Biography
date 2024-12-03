<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<Breadcrumb.Root class="border-b-2 border-red-100 p-6">
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
		</Breadcrumb.Item>

		<Breadcrumb.Separator />

		<Breadcrumb.Item>
			<Breadcrumb.Link href="/blogs">Blogs</Breadcrumb.Link>
		</Breadcrumb.Item>

		<Breadcrumb.Separator />

		<Breadcrumb.Item>
			<Breadcrumb.Page>{data.meta.title}</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>
</Breadcrumb.Root>

<main class="prose mx-auto my-32">
	<p>Published at {formatDate(data.meta.date)}</p>
	<p>Written by {data.meta.author}</p>

	{#if data.meta.tags}
		<div class="mb-4 flex gap-2 text-sm">
			{#each data.meta.tags as category}
				<span class="rounded-full bg-slate-100 px-3 py-2">&num;{category}</span>
			{/each}
		</div>
	{/if}

	<article>
		<data.content />
	</article>
</main>
