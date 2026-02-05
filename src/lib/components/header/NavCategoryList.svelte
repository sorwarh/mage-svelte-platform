<script>
  /**
   * @type {any[] | null | undefined}
   */
  export let categoryList = [];

  /**
   * @type {any[] | null | undefined}
   */
  let randomCategories = [];
  let isReady = false;

  $: if (categoryList?.length) {
    randomCategories = [...categoryList]
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);

    setTimeout(() => {
      isReady = true;
    }, 0);
  }
</script>

{#if isReady}
  <ul class="menu menu-horizontal px-1 gap-1">
    {#each randomCategories as cat (cat.id)}
      <li>
        <a
          href={`/category/${cat.url_key ?? cat.id}`}
          class="font-medium transition-colors"
          aria-label={cat.name}
        >
          {cat.name}
        </a>
      </li>
    {/each}
  </ul>
{:else}
  <span  class="loading loading-dots loading-xl"></span>

{/if}
