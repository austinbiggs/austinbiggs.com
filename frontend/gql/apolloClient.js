import {env} from "next.config";

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { PrismicLink } from 'apollo-link-prismic';

const apolloClient = () => {
	new ApolloClient({
		link: PrismicLink({
			uri: {process.env.prismicEndpoint},
			accessToken: {process.env.prismicAuthToken},
		}),
		cache: new InMemoryCache()
	});
};

export default apolloClient;