<script lang="ts">
  import DefaultHomepage from "$lib/components/page/DefaultHomepage.svelte";
  import Homepage from "$lib/components/page/Homepage.svelte";

  let { data } = $props();
  let { config } = data;
</script>

{#if config.baseUrl}
<Homepage />
{:else}
  <DefaultHomepage />
{/if}
