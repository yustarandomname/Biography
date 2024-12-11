<script lang="ts">
	import { goto } from '$app/navigation';
	import Bibliography from '$lib/components/Bibliography.svelte';
	import LabelController from '$lib/components/label/LabelController.svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { formatDate } from '$lib/utils';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<Breadcrumb.Root class="flex justify-between border-b-2 border-red-100 p-2">
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/">Abel de Bruijn</Breadcrumb.Link>
		</Breadcrumb.Item>

		<Breadcrumb.Separator />

		<Breadcrumb.Item class="hidden md:block">
			<Breadcrumb.Link href="/blogs">Blogs</Breadcrumb.Link>
		</Breadcrumb.Item>

		<Breadcrumb.Item class="hidden sm:block md:hidden">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'link', size: 'icon' })}>
					...
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Item onclick={() => goto('/blogs')}>blogs</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</Breadcrumb.Item>

		<Breadcrumb.Separator class="hidden sm:block" />

		<Breadcrumb.Item>
			<Breadcrumb.Page>{data.meta.title}</Breadcrumb.Page>
		</Breadcrumb.Item>
	</Breadcrumb.List>

	<ThemeSwitcher />
</Breadcrumb.Root>

<main class="prose mx-auto my-32 px-6 dark:prose-invert">
	<p>Published on {formatDate(data.meta.date)}</p>
	<p>Written by {data.meta.author}</p>

	{#if data.meta.tags}
		<div class="mb-4 flex gap-2 text-sm">
			{#each data.meta.tags as category}
				<span class="rounded-full bg-slate-100 px-3 py-2 dark:bg-slate-800">&num;{category}</span>
			{/each}
		</div>
	{/if}

	<article>
		<Bibliography>
			<LabelController>
				<data.content />
			</LabelController>
		</Bibliography>
	</article>
</main>
