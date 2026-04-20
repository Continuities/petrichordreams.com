<script lang="ts">
  import { Spinner } from '$lib/components/ui/spinner';
  let props = $props();
  let loaded = $state(false);
</script>

{#if !loaded}
  <Spinner class="size-8 absolute left-[50%] top-[50%] ml-[-12px] opacity-20" />
{/if}

<img
  {...props}
  onload={() => (loaded = true)}
  class:loading={!loaded}
  class:loadTransition={true}
/>

<style>
  .loading {
    opacity: 0;
    transform: translateY(-5px);
  }
  .loadTransition {
    transition:
      opacity 0.3s ease-in-out,
      transform 0.3s ease-in-out;
  }
</style>
