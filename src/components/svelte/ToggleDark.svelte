<script lang="ts">
  import Sun from "@lucide/svelte/icons/sun";
  import Moon from "@lucide/svelte/icons/moon";

  import { toggleMode } from "mode-watcher";
  import { Button } from "bits-ui";
</script>

<Button.Root style="width: 3rem;" onclick={toggleMode}>
  <Sun class="sun" />
  <Moon class="moon" />
  <span class="sr-only">Toggle theme</span>
</Button.Root>

<style class="postcss">
  :global(.sun, .moon) {
    position:absolute;
    width: 3rem;
  }

  :global(.sun, .dark .moon) {
    rotate: 0deg;
    scale: 1;
  }

  :global(.dark .sun, .moon) {
    rotate: -90deg;
    scale: 0;
  }
</style>
