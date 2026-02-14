<script>
  /**
   * @type {any[] | null | undefined}
   */
  export let categoryList = [];
</script>

<ul class="menu menu-horizontal px-1 gap-1" data-sveltekit-preload-data="false">
  {#each categoryList as cat (cat.id)}
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