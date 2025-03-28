<script lang="ts">
  import { refState } from "./bib/RefState.svelte";

  const { label }: { label: string } = $props();

</script>

{#if refState.refStore.has(label)}
  <span>{refState.refStore.get(label)}</span>
{:else}
  <span>{label} ?? - </span>
{/if}
