<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import Card from '$lib/Card.svelte';
	import Toc from '$lib/Toc.svelte';
</script>

<!-- Header -->
<div class="mx-auto my-12 aspect-square max-h-64 max-w-full rounded-full bg-green-50">
	<Canvas>
		<Scene />
	</Canvas>
</div>

<div class="prose mx-auto text-center">
	<h1 class="font-thin">Abel de Bruijn</h1>
	<p>Developer based in 🇳🇱</p>
</div>

<div class="relative grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,42rem)_1fr]">
	<Toc
		items={[
			{ id: 'socials', name: 'Socials' },
			{ id: 'in-progress', name: 'In Progress' },
			{ id: 'projects', name: 'Projects' },
			{ id: 'university-projects', name: 'University Projects' },
			{ id: 'Blogs', name: 'Blogs' }
		]}
	/>
	<main>
		<div id="socials" class="prose mx-auto my-12">
			<h2 class="font-medium">🌐 Socials</h2>

			<ul>
				<li>
					<a href="https://github.com/yustarandomname"> GitHub </a>
				</li>
				<li>
					<a class="" href="https://linkedin.com/in/abeldebruijn"> LinkedIn </a>
				</li>
				<li>
					<button> Email </button>
				</li>
				<li>
					<button> Phone </button>
				</li>
			</ul>
		</div>

		{@render content()}

		{@render content('projects', 'Projects', '💡')}

		{@render content('university-projects', 'University Projects', '🎓')}

		{@render content('Blogs', 'Blogs', '📝')}

		{#snippet content(id = 'in-progress', name = 'In Progress', emoji = '🏗️')}
			<div {id} class="prose mx-auto my-12">
				<h2 class="font-medium">{emoji ? emoji + ' ' : ''}{name}</h2>
				<p>
					If you are an expert in one of these fields, please send me an email with your contact
					information so we can schedule a meeting.
				</p>

				<div class="cols-1 grid gap-3">
					<Card
						image="./VanHooch.png"
						title="Master Thesis"
						description="Development of a new type data interaction"
						linkToBlog="./blogs/master-thesis"
					>
						My master thesis at <a href="https://www.tudelft.nl">TU Delft</a> with the
						<a
							href="https://www.tudelft.nl/ewi/over-de-faculteit/afdelingen/intelligent-systems/computer-graphics-and-visualization"
							>Computer Graphics and Data Visualisations Group</a
						>
						is about the development of a new type
						<b class="text-green-700"> data interaction</b>. In collaboration with the Dutch
						Rijksmuseum, I am developing a new type of data interaction that allows painting
						conservators to identify pigments in paintings. The goal is to make the process of
						clustering 200+ dimensional scans of paintings more efficient.
					</Card>

					<Card
						image="https://avatars.githubusercontent.com/u/153208040?s=200&v=4"
						title="TU Delft Textbooks"
						description="Jupyter notebooks 2.0 template interactive books."
					>
						The TU Delft library is working on a new template for interactive books. The goal is to
						make learning more interactive and engaging. I am working on the development of a new
						type of
						<b class="text-green-700">Jupyter notebooks</b> that can be used to create interactive
						books. For this project we would like to see if we can migrate from
						<code><a href="https://mystmd.org/">jupyter-myst</a></code>
						to
						<code><a href="https://next.jupyterbook.org/">jupyter-book-2.0</a></code>
					</Card>
				</div>
			</div>
		{/snippet}
	</main>
</div>
