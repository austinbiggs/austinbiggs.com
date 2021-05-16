import { InMemoryCache } from "@apollo/client/cache";

import { TypedTypePolicies } from '../apollo-helpers';

const typePolicies: TypedTypePolicies = {

};

export const cache = new InMemoryCache({
  typePolicies,
});
