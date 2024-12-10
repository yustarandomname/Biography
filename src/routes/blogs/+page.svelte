<script lang="ts">
	import Card from '$lib/Card.svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import Section from '$lib/Section.svelte';
	import { formatDate } from '$lib/utils';

	let { data } = $props();

	function capitalizeFirstLetter(val: string) {
		return String(val).charAt(0).toUpperCase() + String(val).slice(1);
	}
</script>

<Breadcrumb.Root class="flex justify-between border-b-2 border-red-100 p-6">
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link href="/">Abel de Bruijn</Breadcrumb.Link>
		</Breadcrumb.Item>

		<Breadcrumb.Separator />

		<Breadcrumb.Item>
			<Breadcrumb.Link href="/blogs">Blogs</Breadcrumb.Link>
		</Breadcrumb.Item>
	</Breadcrumb.List>

	<ThemeSwitcher />
</Breadcrumb.Root>

<Section id="blogs" name="Blogs" emoji="📝">
	{#each data.blogs as blog}
		{@const date = formatDate(blog.date)}
		{@const tags = blog.tags?.map((t) => capitalizeFirstLetter(t)).join(', ')}

		{@const description = [date, tags].filter((x) => x).join(' | ')}

		<Card title={blog.title} {description} linkToBlog={'./blogs/' + blog.slug}>
			{blog.description}
			{tags}
		</Card>
	{/each}
</Section>
