import { readFileSync } from "fs";

import { makeExecutableSchema } from "graphql-tools";
import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { SchemaLink } from "@apollo/client/link/schema";

export const schema = makeExecutableSchema({
  typeDefs: readFileSync("gql/schema.graphql", "utf8"),
});

export const link = ApolloLink.from([
  onError(() => null),
  new SchemaLink({ schema }),
]);

export const testClient = () =>
  new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
