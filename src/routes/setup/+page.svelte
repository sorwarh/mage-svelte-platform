<script>
  import { enhance } from "$app/forms";

  let { data, form } = $props();
</script>

<section class="min-h-auto flex items-start bg-base-100">
  <div
    class="card bg-base-100 h-auto mx-auto w-full max-w-xl shrink-0 shadow-xl my-10 p-6"
  >
    <div class="card-body">
      <form method="POST" use:enhance>
        <h1 class="text-2xl font-bold mb-4">Connect Your Magento Store</h1>
        <p class="card-subtitle">
          Enter the GraphQL endpoint of your Magento store to get started.
        </p>

        <div class="form-control my-4">
          <label class="input w-full" for="baseUrl">
            Base Url
            <input
              type="text"
              class="grow"
              name="baseUrl"
              placeholder="https://mystore.com/graphql"
              required
            />
            <span class="badge badge-neutral badge-sm">Required</span>
          </label>
        </div>
        {#if form?.error}
          <div class="alert alert-error mt-4" aria-live="polite">
            <span>{form.error}</span>
          </div>
        {/if}
        <div class="form-control mt-10 text-center">
          <button class="btn btn-primary" title="Let's Connect to the Store"
            >Let's Connect</button
          >
        </div>
      </form>

      <div class="alert alert-warning alert-soft text-left my-6">
        <span class="text-sm text-black font-bold">
          ⚠️ Responsibility Notice: This page will send GraphQL requests to the
          configured store URL. Ensure that the backend endpoint is trusted and
          correctly secured.
        </span>
      </div>
    </div>
  </div>
</section>
