import { gql, GraphQLClient } from 'graphql-request';

export async function load({ cookies, locals }) {
	//     Return data to the page on that rote

	if (!locals.config?.baseUrl) {
		return {
			categoryList: null,
			locals: locals,
			config: null
		};
	}
	const graphqlClient = new GraphQLClient(locals.config.baseUrl, { headers: {} });
	// const query = gql`query {
	// 					products(
	// 						filter: {
	// 						category_id: { eq: "1015" }
	// 						}
	// 						pageSize: 20
	// 						currentPage: 1
	// 					) {
	// 						total_count
	// 						items {
	// 						id
	// 						sku
	// 						name
	// 						url_key
	// 						price_range {
	// 							minimum_price {
	// 							final_price {
	// 								value
	// 								currency
	// 							}
	// 							}
	// 						}
	// 						small_image {
	// 							url
	// 						}
	// 					}
	// 				}
	// 			}
	// `;

	const query = `
					query {
					categoryList{
						id
						name
						level
						url_key
						children {
						id
						name
						level
						url_key
						}
					}
					}
				`;

	const data = await graphqlClient.request(query);

	return {
		categoryList: data?.categoryList.length === 1 ? data.categoryList[0].children : data?.categoryList,
		locals: locals
	};
}