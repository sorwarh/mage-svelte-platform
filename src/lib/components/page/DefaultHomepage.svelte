<script lang="ts">
  // Mock data for Adobe Commerce style sections
  const categories = [
    {
      name: "New Arrivals",
      image: "https://picsum.photos/id/20/400/300",
      link: "/new",
    },
    {
      name: "Women's Collection",
      image: "https://picsum.photos/id/21/400/300",
      link: "/women",
    },
    {
      name: "Men's Style",
      image: "https://picsum.photos/id/22/400/300",
      link: "/men",
    },
    {
      name: "Accessories",
      image: "https://picsum.photos/id/24/400/300",
      link: "/accessories",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Fusion Backpack",
      price: "$59.00",
      badge: "New",
      img: "https://picsum.photos/id/26/300/400",
    },
    {
      id: 2,
      name: "Summit Watch",
      price: "$82.00",
      badge: "Hot",
      img: "https://picsum.photos/id/28/300/400",
    },
    {
      id: 3,
      name: "Voyager Hoodie",
      price: "$45.00",
      badge: "",
      img: "https://picsum.photos/id/30/300/400",
    },
    {
      id: 4,
      name: "Classic Tee",
      price: "$24.00",
      badge: "Sale",
      img: "https://picsum.photos/id/32/300/400",
    },
  ];

  const blogPosts = [
    {
      title: "Summer Style Guide",
      date: "June 12, 2024",
      excerpt: "Discover the latest trends in sustainable summer fashion.",
    },
    {
      title: "Tech Gear Review",
      date: "May 28, 2024",
      excerpt: "We test the best adventure watches for your next hike.",
    },
  ];
</script>

<div class="min-h-screen bg-base-100">
  <div
    class="hero min-h-[60vh]"
    style="background-image: url(https://picsum.photos/id/10/1200/600);"
  >
    <div class="hero-overlay bg-opacity-40"></div>
    <div class="hero-content text-neutral-content text-center">
      <div
        class="max-w-md bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20"
      >
        <h1 class="mb-5 text-5xl font-bold uppercase tracking-widest">
          New Season
        </h1>
        <p class="mb-5">
          Refresh your wardrobe with our latest arrivals inspired by the Adobe
          Luma collection.
        </p>
        <button class="btn btn-primary rounded-none px-10">Shop Now</button>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 py-12">
    <section class="mb-16">
      <h2 class="text-3xl font-light mb-8 text-center uppercase tracking-wider">
        Shop by Category
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {#each categories as cat}
          <a href={cat.link} class="group relative block overflow-hidden">
            <img
              src={cat.image}
              alt={cat.name}
              class="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center"
            >
              <span
                class="bg-white text-black px-6 py-2 font-semibold uppercase"
                >{cat.name}</span
              >
            </div>
          </a>
        {/each}
      </div>
    </section>
    <section class="bg-base-200 py-16">
      <div class="container mx-auto px-4">
        <div class="hero">
          <div class="hero-content flex-col lg:flex-row-reverse gap-12">
            <div class="relative">
              <div
                class="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
              ></div>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Trending Product"
                class="max-w-sm rounded-none shadow-3xl border-8 border-white"
              />
            </div>

            <div class="max-w-xl text-center lg:text-left">
              <div
                class="badge badge-outline mb-4 tracking-widest uppercase text-xs"
              >
                Trending Now
              </div>
              <h2
                class="text-5xl font-black uppercase italic tracking-tighter mb-4"
              >
                The Hero <span class="text-primary">Jacket</span>
              </h2>
              <p class="text-lg mb-8 opacity-80 leading-relaxed">
                Experience the perfect blend of performance and style.
                Engineered for the modern explorer, this limited-edition release
                is our most requested item of the season.
              </p>
              <div
                class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button class="btn btn-primary btn-lg rounded-none px-12"
                  >Buy Now — $129</button
                >
                <button
                  class="btn btn-ghost btn-lg rounded-none border-base-300"
                  >View Details</button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="my-10 py-10">
      <div class="flex justify-between items-end mb-8">
        <h2 class="text-3xl font-light uppercase tracking-wider">
          Hot Sellers
        </h2>
        <a href="/shop" class="link link-primary">View All</a>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {#each featuredProducts as product}
          <div
            class="card card-compact bg-base-100 shadow-sm border border-base-200 rounded-none hover:shadow-md transition-shadow"
          >
            <figure class="relative">
              <img
                src={product.img}
                alt={product.name}
                class="h-80 w-full object-cover"
              />
              {#if product.badge}
                <div
                  class="badge badge-primary absolute top-2 right-2 rounded-none"
                >
                  {product.badge}
                </div>
              {/if}
            </figure>
            <div class="card-body items-center text-center">
              <h3 class="card-title text-sm uppercase tracking-tight">
                {product.name}
              </h3>
              <p class="font-bold text-lg">{product.price}</p>
              <div class="card-actions">
                <button class="btn btn-outline btn-sm rounded-none"
                  >Add to Cart</button
                >
              </div>
            </div>
          </div>
        {/each}
      </div>
    </section>

    <section class="py-12 border-t border-base-200">
      <h2
        class="text-2xl font-light mb-8 text-center uppercase tracking-widest"
      >
        From the Blog
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each blogPosts as post}
          <div class="flex flex-col md:flex-row gap-6 items-center">
            <div
              class="w-full md:w-1/3 aspect-video bg-base-300 rounded-lg"
            ></div>
            <div class="w-full md:w-2/3">
              <p class="text-xs text-base-content/60 mb-1 uppercase font-bold">
                {post.date}
              </p>
              <h3 class="text-xl font-bold mb-2">{post.title}</h3>
              <p class="text-sm text-base-content/80 mb-4">{post.excerpt}</p>
              <a href="/blog" class="btn btn-link btn-xs p-0 text-primary"
                >Read More &rarr;</a
              >
            </div>
          </div>
        {/each}
      </div>
    </section>
  </div>
</div>
