# Mage–Svelte Platform

**Mage–Svelte Platform** is a configurable, headless storefront frontend built with **SvelteKit** for **Adobe Commerce (Magento 2)**.

The platform decouples the frontend from Magento and delivers a fast, SEO-friendly user experience using **Cloudflare edge services** such as Workers, KV, and Images.


## The storefront focuses on

* Performance
* Scalability
* Developer experience
* Optimized rendering for web and mobile



## Architecture Goals

* Fully decoupled frontend (headless Magento)
* Edge-first request handling
* Optimized server-side rendering (SSR) for SEO
* CDN-delivered media and assets



## Data Flow (Example: Product Page)

1. User requests a product page.
2. The SvelteKit route calls the Worker API.
3. The Worker checks Cloudflare KV for cached product data.
4. If there is a cache miss:

   * Fetches product data from Magento GraphQL
   * Normalizes and stores it in KV
5. Returns optimized JSON to SvelteKit.
6. SvelteKit renders the page (SSR + hydration).



## Technology Stack

### Frontend

* SvelteKit 2
* Tailwind CSS + DaisyUI
* Server-side rendering (SSR)
* Component-based UI

### Edge & Infrastructure

* Cloudflare Workers – API gateway / BFF
* Cloudflare KV – edge caching
* Cloudflare Images – product image delivery
* Cloudflare CDN – static and SSR caching

### Backend

* Adobe Commerce (Magento 2.4+)
* GraphQL API
* No Magento theme or frontend rendering



### Image Delivery

Product images are served through **Cloudflare Images** to provide:

* Automatic resizing
* WebP / AVIF formats
* CDN distribution
* Reduced Magento media load

```
Magento Media → Cloudflare Images → Storefront UI
```