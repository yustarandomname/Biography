<script lang="ts">
	import Card from '$lib/Card.svelte';
	import DutchConfetti from '$lib/DutchConfetti.svelte';
	import Section from '$lib/Section.svelte';
	import Toc from '$lib/Toc.svelte';
	import { Canvas } from '@threlte/core';
	import BachelorsThesisImage from './images/Beb.webp?enhanced';
	import CenterOSImage from './images/CenterOS.png?enhanced';
	import LavaImage from './images/Lava.png?enhanced';
	import OpenLaImage from './images/OpenLaBook.png?enhanced';
	import Scene from './Scene.svelte';
	import TextBookImage from './images/textbooks.png?enhanced';
	import VanHoochImage from './images/VanHooch.png?enhanced';
	import { formatDate } from '$lib/utils';

	let { data } = $props();

	function capitalizeFirstLetter(val: string) {
		return String(val).charAt(0).toUpperCase() + String(val).slice(1);
	}
</script>

<!-- Header -->
<div class="mx-auto my-12 aspect-square h-64 w-64 max-w-full rounded-full bg-red-50">
	<Canvas>
		<Scene />
	</Canvas>
</div>

<div class="prose mx-auto text-center">
	<h1 class="font-thin">Abel de Bruijn</h1>
	<p>Developer based in <DutchConfetti /></p>
</div>

<div class="relative grid grid-cols-1 px-4 lg:grid-cols-[1fr_minmax(auto,42rem)_1fr]">
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

		<Section
			id="in-progress"
			name="In Progress"
			emoji="🏗️"
			description="2024- | If you are an expert in one of these fields, please send me an email with your contact
					information so we can schedule a meeting."
		>
			<Card
				image={VanHoochImage}
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
				image={TextBookImage}
				title="TU Delft Textbooks"
				description="2024- | Jupyter notebooks 2.0 template interactive books."
			>
				The TU Delft library is working on a new template for interactive books. The goal is to make
				learning more interactive and engaging. I am working on the development of a new type of
				<b class="text-green-700">Jupyter notebooks</b> that can be used to create interactive
				books. For this project we would like to see if we can migrate from
				<code><a href="https://mystmd.org/">jupyter-myst</a></code>
				to
				<code><a href="https://next.jupyterbook.org/">jupyter-book-2.0</a></code>
			</Card>
		</Section>

		<Section
			id="projects"
			name="Projects"
			emoji="💡"
			description="These are finished projects that I have worked on outside of my studies."
		>
			<Card
				image={OpenLaImage}
				title="Linear Algebra Book"
				description="2021-2024 | A Book for first year students at TU Delft."
				linkToBlog="./blogs/linear-algebra-book"
				actionText="Go to website"
			>
				Abstract linear algebra concepts are visualized interactively to enhance student
				understanding. The book features applets that use 2D and 3D graphics, providing a hands-on
				experience to explore these concepts. You can view the book at
				<a href="https://prime.pages.ewi.tudelft.nl/openlabook-published/index.html"
					>prime.pages.ewi.tudelft.nl</a
				>
			</Card>

			<Card
				image={CenterOSImage}
				title={'CenterOS'}
				description={'2017-2018 | A central location for all my highschool data. '}
				linkToBlog="https://centeros.nl"
				actionText="Go to website"
			>
				This project sprung from the idea that during my high school year I had to carry so many
				books and other materials arround. I discovered that the books were publicly hosted on the
				publishers website. I decided to create a central location for all my school data including
				a text editor, chat environment, calculator. Use credentials abeltest1@hotmail.com and
				password: 123456 to login.
			</Card>
		</Section>

		<Section
			id="university-projects"
			name="University Projects"
			emoji="🎓"
			description="In 2019 I started my bachelor in Computer Science at TU Delft. In 2023 I continued with my masters in Computer Science. These are some of the projects I have worked on during my studies."
		>
			<!-- <Card
				image={SeminarImage}
				title={'Seminar'}
				description={'2024 | ...'}
				linkToBlog="./blogs/seminar"
			/> -->

			<Card
				image={BachelorsThesisImage}
				title={'Bachelors Thesis'}
				description={'2023 | Model for Bacteria mixing in three-dimensions using random walker agents'}
				linkToBlog="./blogs/bachelor-thesis"
			>
				For my bachelors thesis I worked on a model for bacteria mixing in three-dimensions using
				random walker agents. The goal of the project was to create a model that could be used to
				understand how bacteria mix in 3D. Each agent excretes a chemical that replels agents from
				the other kind. This research was a generalisation of A. Barbaro et al. An interactive 3D
				visualization of the model can be found at <a
					href="https://3d-walker.vercel.app/vision/slice">3d-walker.vercel.app/vision/slice</a
				>.
			</Card>

			<Card
				image={LavaImage}
				title={'Project Lava flow'}
				description={'2022 | Project Lava flow'}
				linkToBlog="https://lava.ewi.tudelft.nl/"
				actionText="Visit the website"
			>
				This Lava application is an experiment conducted by PRIME to provide first-year students
				with a tangible understanding of directional derivatives in the field. In both physical and
				digital maps, contour lines are used to represent elevation on a 2-dimensional surface.
				These lines form bands that indicate areas of constant elevation. The main task is to
				encourage students to unleash their creativity and draw their own contour lines. These lines
				are then transformed into a 3-dimensional mountain. Students are tasked with placing
				turbines in locations they believe will be affected by lava flowing from the mountain's
				highest point.
			</Card>
		</Section>

		<!-- {@render content('university-projects', 'University Projects', '')} -->

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
	</main>
</div>
