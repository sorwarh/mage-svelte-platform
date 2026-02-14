<script lang="ts">
  import type { PageProps } from "./$types";

  const { data } = $props();
  
  // Svelte 5 Runes: Direct derivation is cleaner than returning functions
  const category = $derived(data.categoryData);
  const products = $derived(category.products.items);
  const pageInfo = $derived(category.products.page_info);

  // Mock data for the demonstration of UI elements
  const filterGroups = [
    { name: 'Fit', options: ['Slim', 'Regular', 'Oversized', 'Athletic'] },
    { name: 'Size', options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
    { name: 'Color', options: ['Black', 'Navy', 'Stone', 'Olive'] }
  ];

  // Formatter for currency
  const priceFormat = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });
</script>

<div class="flex flex-col lg:flex-row min-h-screen bg-base-200/50">
  
  <aside class="w-full lg:w-72 lg:h-screen lg:sticky lg:top-0 bg-base-100 border-r border-base-300 z-10">
    <div class="p-6 overflow-y-auto h-full">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold tracking-tight">Filters</h2>
        <button class="btn btn-ghost btn-xs text-primary underline">Clear all</button>
      </div>
      
      <div class="space-y-2">
        <div class="collapse collapse-arrow bg-base-200/30 border border-base-300">
          <input type="checkbox" checked /> 
          <div class="collapse-title font-medium text-sm">Price Range</div>
          <div class="collapse-content space-y-4">
            <input type="range" min="0" max="500" class="range range-primary range-xs" />
            <div class="flex justify-between text-xs font-mono">
              <span>$0</span>
              <span>$500+</span>
            </div>
          </div>
        </div>

        {#each filterGroups as group}
          <div class="collapse collapse-arrow bg-base-200/30 border border-base-300">
            <input type="checkbox" /> 
            <div class="collapse-title font-medium text-sm">{group.name}</div>
            <div class="collapse-content">
              <div class="grid grid-cols-2 gap-2">
                {#each group.options as option}
                  <label class="label cursor-pointer justify-start gap-2 p-1">
                    <input type="checkbox" class="checkbox checkbox-xs checkbox-primary rounded" />
                    <span class="label-text text-xs">{option}</span>
                  </label>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </aside>

  <main class="flex-1 p-4 lg:p-8">
    <div class="max-w-7xl mx-auto">
      <header class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div class="text-sm breadcrumbs mb-1 opacity-50">
            <ul data-sveltekit-preload-data="false">
              <li><a href="/" title="Homepage" aria-label="Homepage">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li class="font-bold">{category.name}</li>
            </ul>
          </div>
          <h1 class="text-4xl font-black uppercase italic">{category.name}</h1>
        </div>
        
        <select class="select select-bordered select-sm w-full max-w-xs">
          <option disabled selected>Sort by</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </header>

      <section class="grid gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {#each products as product}
          <div class="group relative flex flex-col">
            <div class="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-base-300">
              <img 
                src={product.small_image?.url} 
                alt={product.name} 
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy" 
              />
              <div class="absolute top-3 left-3 flex flex-wrap gap-1">
                {#if product.fit}
                   <span class="badge badge-secondary text-[10px] font-bold uppercase">{product.fit}</span>
                {/if}
              </div>
              <div class="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                <button class="btn btn-primary btn-block shadow-xl">View Product</button>
              </div>
            </div>

            <div class="mt-4 flex flex-col flex-1">
              <div class="flex justify-between items-start">
                <h2 class="text-sm font-bold text-base-content/90 group-hover:text-primary transition-colors pr-2">
                  {product.name}
                </h2>
                <span class="text-sm font-black">
                  {priceFormat.format(product.price_range.minimum_price.final_price.value)}
                </span>
              </div>
              
              <p class="text-[12px] opacity-60 mt-1 line-clamp-2">
                {product.short_description?.html.replace(/<[^>]+>/g, "")}
              </p>

              <div class="mt-3 flex gap-1">
                {#each ['S', 'M', 'L'] as size}
                  <div class="w-6 h-6 rounded border border-base-300 flex items-center justify-center text-[10px] font-medium hover:border-primary cursor-pointer">
                    {size}
                  </div>
                {/each}
              </div>
            </div>
          </div>
        {/each}
      </section>

      <nav class="flex justify-center mt-16 mb-12">
        <div class="join">
          <a href="?page={pageInfo.current_page - 1}" class="join-item btn btn-outline border-base-300" class:btn-disabled={pageInfo.current_page <= 1}>Prev</a>
          <button class="join-item btn btn-outline border-base-300 no-animation">
            {pageInfo.current_page} of {pageInfo.total_pages}
          </button>
          <a href="?page={pageInfo.current_page + 1}" class="join-item btn btn-outline border-base-300" class:btn-disabled={pageInfo.current_page >= pageInfo.total_pages}>Next</a>
        </div>
      </nav>
    </div>
  </main>
</div>