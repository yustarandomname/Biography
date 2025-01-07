<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Form from '$lib/components/ui/form/index.js';
	import type { DragDropState } from '@thisux/sveltednd';
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
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;
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

			<form method="POST" use:enhance>
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
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>
