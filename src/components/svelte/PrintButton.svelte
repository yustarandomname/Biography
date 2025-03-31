<script>
  import Printer from "@lucide/svelte/icons/printer";
</script>

<button onclick={() => window.print()}>
  <Printer class="absolute right-12 text-lime-950 dark:text-lime-50" />
</button>
