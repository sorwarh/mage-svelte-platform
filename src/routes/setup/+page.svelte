<script>
  import { enhance } from "$app/forms";

  let { data, form } = $props();

  console.log(data);
  console.log(form);
</script>

<div class="card bg-base-100 mx-auto w-full max-w-xl shrink-0 shadow-xl">
  <div class="card-body">
    <form method="POST" use:enhance>
      <h1 class="text-4xl font-bold mb-4">Connect Your Magento Store</h1>
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
  </div>
</div>