<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import SortableList from './SortableList.svelte';

	type Props = {
		sortables: { id: string; emoji: string }[];
	};

	let { sortables }: Props = $props();
</script>

Solve captcha to unlock Email and Phone

<Dialog.Root open={true}>
	<Dialog.Trigger
		class="no-prose mt-2 flex w-64 items-center justify-between rounded border-2 border-slate-200 bg-slate-50 px-3 py-2 text-slate-900"
	>
		<div class="w-full p-2 text-left">
			<input id="captcha" class="mr-2 scale-[1.5] cursor-pointer" type="checkbox" />
			<label for="captcha" class="cursor-pointer">I'm not a robot</label>
		</div>
		<div>
			<div class="text-4xl opacity-80 saturate-[0.7]">🤪</div>
			<div class="text-xs">Captcha</div>
		</div>
	</Dialog.Trigger>

	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Emoji Captcha</Dialog.Title>
			<Dialog.Description>
				Sort the emojis from smallest to largest real-world size to unlock the email and phone
				number. {sortables.map((s) => s.emoji).join(' ')}
			</Dialog.Description>

			<SortableList bind:sortables></SortableList>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
