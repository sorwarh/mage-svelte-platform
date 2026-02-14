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
    const graphqlClient = new GraphQLClient(locals.config?.baseUrl, { headers: {} });

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
        locals: locals,
        config: locals.config
    };
}
