<script lang="ts">
  import { goto } from "$app/navigation";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  let { categoryData } = data;

  const products = categoryData.products.items;
  const pageInfo = categoryData.products.page_info;

  console.log(products);
</script>

<section
  class="grid gap-6
         grid-cols-1
         sm:grid-cols-2
         lg:grid-cols-3
         xl:grid-cols-4"
>
  {#each products as product}
    <div
      class="card bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <figure>
        <img src={product.small_image?.url} alt={product.name} loading="lazy" />
      </figure>

      <div class="card-body p-4">
        <h2 class="card-title text-lg font-semibold line-clamp-2">
          {product.name}
        </h2>
        <p class="text-gray-600 text-sm line-clamp-3">
          {product.short_description?.html.replace(/<[^>]+>/g, "")}
        </p>
        <p class="text-primary font-bold">
          {product.price_range.minimum_price.final_price.value}
          {product.price_range.minimum_price.final_price.currency}
        </p>
        <div class="card-actions justify-end mt-4">
          <button class="btn btn-sm btn-success">Buy Now</button>
        </div>
      </div>
    </div>
  {/each}
</section>

<!-- PAGINATION -->
<nav class="flex justify-center mt-8">
  <div class="join">
    {#if pageInfo.current_page > 1}
      <a class="join-item btn" href={`?page=${pageInfo.current_page - 1}`}>
        «
      </a>
    {/if}

    <button class="join-item btn btn-active">
      Page {pageInfo.current_page} / {pageInfo.total_pages}
    </button>

    {#if pageInfo.current_page < pageInfo.total_pages}
      <a class="join-item btn" href={`?page=${pageInfo.current_page + 1}`}>
        »
      </a>
    {/if}
  </div>
</nav>
