<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Form from '$lib/components/ui/form/index.js';
	import type { DragDropState } from '@thisux/sveltednd';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import { fade } from 'svelte/transition';
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import SortableList from './SortableList.svelte';
	import { formSchema, type FormSchema } from './zodSchema';

	type Sortable = {
		id: string;
		emoji: string;
	};

	type Props = {
		sortables: Sortable[];
		dataForm: SuperValidated<Infer<FormSchema>>;
	};

	let { sortables, dataForm }: Props = $props();

	let items = $state(sortables);
	let captchaOpen = $state(false);

	function handleDrop(state: DragDropState<Sortable>) {
		const { draggedItem, targetContainer } = state;
		const dragIndex = items.findIndex((item) => item.id === draggedItem.id);
		const dropIndex = parseInt(targetContainer ?? '0');

		if (dragIndex !== -1 && !isNaN(dropIndex)) {
			const [item] = items.splice(dragIndex, 1);
			items.splice(dropIndex, 0, item);
		}
	}

	const form = superForm(dataForm, {
		validators: zodClient(formSchema),
		onResult: ({ result }) => {
			if (result.type == 'success') {
				captchaOpen = false;
			}
		}
	});

	const { enhance } = form;
</script>

Solve captcha to unlock Email and Phone

<Button
	class="no-prose mt-2 flex w-64 items-center justify-between rounded border-2 border-slate-200 bg-slate-50 px-3 py-8 text-slate-900 hover:bg-slate-200 dark:border-slate-400 dark:bg-slate-800 dark:text-slate-200"
	onclick={() => (captchaOpen = !captchaOpen)}
>
	<div class="w-full p-2 text-left">
		<input
			id="captcha"
			class="mr-2 scale-[1.5] cursor-pointer"
			type="checkbox"
			disabled
			bind:checked={captchaOpen}
		/>
		<label for="captcha" class="cursor-pointer">I'm not a robot</label>
	</div>
	<div>
		<div class="text-4xl opacity-80 saturate-[0.7]">🤪</div>
		<div class="text-xs">Captcha</div>
	</div>
</Button>

{#if captchaOpen}
	<form
		class="my-2 rounded border-2 border-slate-500 p-2"
		method="POST"
		in:fade={{ duration: 300 }}
		use:enhance
	>
		<div class="flex items-center gap-3">
			<Button class="text-xs" variant="outline" onclick={() => (captchaOpen = false)}>
				<ChevronLeft /> Close
			</Button>
			<h3 class="m-0">Emoji Captcha</h3>
		</div>
		<p>
			Sort the emojis from largest (left) to smallest (right) real-world size to unlock the email
			and phone number.
		</p>

		<SortableList {items} {handleDrop}></SortableList>

		<Form.Field {form} name="guess">
			<Form.Control>
				{#snippet children({ props })}
					<input type="hidden" {...props} value={items.map((i) => i.id).join('-')} />
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
		<div class="flex justify-end">
			<Form.Button>Submit</Form.Button>
		</div>
	</form>
{/if}
