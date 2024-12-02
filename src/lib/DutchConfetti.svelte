<script lang="ts">
	import Confetti from 'svelte-confetti';

	let showConfetti = $state(false);

	const emoji = ['./emoji/Cheese.png'];
	let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

	async function confetti() {
		showConfetti = true;
		if (timeout) clearTimeout(timeout);

		timeout = setTimeout(() => {
			showConfetti = false;
		}, 2000);
	}
</script>

<button class="relative scale-100 hover:scale-110" onclick={() => confetti()}>
	🇳🇱

	{#if showConfetti}
		<div class="absolute">
			<Confetti size={30} amount={200} colorArray={emoji.map((e) => `url(${e})`)} />
		</div>
	{/if}
</button>
