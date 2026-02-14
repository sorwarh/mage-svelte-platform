import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { GraphQLClient, gql } from 'graphql-request';

export const load: PageServerLoad = async ({ params, locals, setHeaders, url }) => {
  // s-maxage=3600 caches the page on the CDN for 1 hour
  // stale-while-revalidate=600 serves old content for 10 mins while fetching new data in background
  setHeaders({
    'cache-control': 'public, s-maxage=3600, stale-while-revalidate=600'
  });

  if (!params.slug) {
    throw error(404, 'Not found');
  }

  const page = Number(url.searchParams.get('page') ?? 1);

  const graphqlClient = new GraphQLClient(locals.config.baseUrl, {
    headers: {}
  });

  const gqlQuery = gql`
    query GetCategoryProducts(
      $slug: String!
      $pageSize: Int!
      $currentPage: Int!
    ) {
      categories(filters: { url_key: { eq: $slug } }) {
        items {
          id
          name
          url_key
          product_count
          description

          products(pageSize: $pageSize, currentPage: $currentPage) {
            total_count
            page_info {
              current_page
              total_pages
              page_size
            }
            items {
              name
              url_key
              sku
              small_image {
                url
              }
              price_range {
                minimum_price {
                  final_price {
                    value
                    currency
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    slug: params.slug,
    pageSize: 24,
    currentPage: page
  };
  const data = await graphqlClient.request(gqlQuery, variables);

  if (!data.categories.items.length) {
    throw error(404, 'Category not found');
  }
  return {
    categoryData: data.categories.items[0],
  };
};
