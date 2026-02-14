<script>
  import { enhance } from "$app/forms";
  let { data, form } = $props();
</script>

<svelte:head>
  <title>Magento Headless | Setup</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<section
  class="min-h-screen flex items-center justify-center bg-base-300 text-base-content px-4 py-12"
  data-theme="dark"
>
  <div
    class="card w-full max-w-2xl bg-base-100/50 backdrop-blur-xxl border border-primary/50 shadow-2xl shadow-primary/60"
  >
    <div class="card-body p-8 md:p-12">
      <header class="space-y-2 mb-8 text-center md:text-left">
<div class="flex flex-col md:flex-row md:items-center gap-4 mb-6">
  <span class="text-3xl font-black tracking-tighter bg-gradient-to-r from-orange-500 via-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-sm">
    MageSvelte
  </span>

  <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-widest w-fit">
    <span class="relative flex h-2 w-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
    </span>
    v1.0.0-beta-experimental
  </div>
</div>
        <h1
          class="text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent"
        >
          Connect Magento
        </h1>
        <p class="text-sm text-base-content/60 leading-relaxed max-w-md">
          Connect your <strong>Adobe Commerce</strong> GraphQL API to initiate the
          SvelteKit edge storefront.
        </p>
      </header>

      <div
        class="join join-vertical w-full bg-base-200/50 border border-white/5 rounded-xl overflow-hidden"
      >
        <div class="collapse collapse-arrow join-item">
          <input type="radio" name="setup-info" checked />
          <div class="collapse-title text-sm font-semibold text-primary/80">
            Architecture Details
          </div>
          <div class="collapse-content text-xs text-base-content/70">
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 py-2">
              <li class="flex items-center gap-2">
                <span class="text-success text-lg leading-none">●</span> SvelteKit
                5 + Runes
              </li>
              <li class="flex items-center gap-2">
                <span class="text-success text-lg leading-none">●</span> Cloudflare
                Workers
              </li>
             
              <li class="flex items-center gap-2">
                <span class="text-success text-lg leading-none">●</span> GraphQL
                Native
              </li>
            </ul>
          </div>
        </div>

        <div class="collapse collapse-arrow join-item border-t border-white/5">
          <input type="radio" name="setup-info" />
          <div class="collapse-title text-sm font-semibold text-warning/80">
            Safety & Usage
          </div>
          <div class="collapse-content">
            <ul
              class="p-3 list bg-warning/5 border border-warning/10 rounded-lg text-xs text-warning/90 space-y-2"
            >
              <li class="list-item list-disc ml-4">Not production-ready software.</li>
              <li class="list-item list-disc ml-4">You are responsible for backend endpoint security.</li>
              <li class="list-item list-disc ml-4">Misconfigured APIs may expose catalog data.</li>
            </ul>
          </div>
        </div>
      </div>

      <form method="POST" use:enhance class="mt-8 space-y-6">
        <div class="form-control w-full">
          <label class="label pt-0" for="baseUrl">
            <span class="label-text font-medium opacity-70"
              >GraphQL Endpoint</span
            >
          </label>
          <div class="relative group mt-4">
            <input
              id="baseUrl"
              type="url"
              name="baseUrl"
              value={data?.config?.baseUrl}
              placeholder="https://your-store.com/graphql"
              class="input input-bordered w-full bg-base-300 focus:border-primary transition-all duration-300 pr-24"
              required
            />
            <div class="absolute inset-y-0 right-3 flex items-center">
              <span
                class="badge badge-neutral text-[10px] uppercase font-bold tracking-widest opacity-50"
                >Required</span
              >
            </div>
          </div>
        </div>

        {#if form?.error}
          <div
            class="alert alert-error text-sm py-3 rounded-lg animate-in fade-in slide-in-from-top-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current shrink-0 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              /></svg
            >
            <span>{form.error}</span>
          </div>
        {/if}

        <button
          class="btn btn-primary btn-block shadow-lg shadow-primary/20 group"
        >
          Connect Store
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </form>

      <footer class="mt-8 pt-6 border-t border-white/5">
        <p
          class="text-[11px] leading-relaxed text-center text-base-content/40 italic"
        >
          Disclaimer: This tool is provided "as-is". By connecting, you accept
          full responsibility for backend performance and data exposure. Use
          staging environments for testing.
        </p>
      </footer>
    </div>
  </div>
</section>
