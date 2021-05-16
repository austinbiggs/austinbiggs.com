import {ApolloClient, NormalizedCacheObject} from "@apollo/client";

import { cache } from "./cache";
import { link } from "./link";

const client = (): ApolloClient<NormalizedCacheObject> =>
  new ApolloClient({
    cache,
    link,
  });

export default client;
