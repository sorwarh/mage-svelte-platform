<section class="min-h-auto flex items-start bg-base-100">
  <div
    class="card bg-base-100 h-auto mx-auto w-full max-w-xl shrink-0 shadow-xl my-10 p-12"
  >
    <h1 class="text-2xl font-bold mb-6">
      Magento 2 GraphQL Storefront Prototype
    </h1>

    <p class="text-lg mb-4">
      This application is a prototype eCommerce frontend powered by
      <strong>Magento 2</strong> and <strong>GraphQL</strong>.
    </p>

    <p class="mb-4 text-base-content/80">
      To get started, configure this app with your Magento store URL. Once
      configured, the application will send GraphQL requests to your provided
      store backend in order to retrieve product, category, and content data.
    </p>

    <p class="mb-6 text-base-content/80">
      This frontend does not contain hardcoded products. All visible data is
      dynamically fetched from the configured Magento 2 backend using GraphQL
      APIs.
    </p>

    <div class="alert alert-warning text-left">
      <span>
        ⚠️ Responsibility Notice: This page will send GraphQL requests to the
        configured store URL. Ensure that the backend endpoint is trusted and
        correctly secured.
      </span>
    </div>

    <a
      class="btn btn-primary my-10"
      title="Let's Connect to the Store"
      href="/setup">Let's Connect My Store</a
    >

    <div class="mt-8">
      <p class="text-sm text-base-content/60">
        Powered by SvelteKit, Cloudflare, and Magento 2 GraphQL API.
      </p>
    </div>
  </div>
</section>
