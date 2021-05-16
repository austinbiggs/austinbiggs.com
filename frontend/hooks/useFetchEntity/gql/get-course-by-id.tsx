/* eslint-disable */
// @generated by graphql-codegen
// This file was automatically generated and should not be edited.
import * as Types from "../../../gql/types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {};
export type GetCourseByIdQueryVariables = Types.Exact<{
  id: Types.Scalars["Int"];
}>;

export type GetCourseByIdQuery = { __typename?: "query_root" } & {
  posts_by_pk?: Types.Maybe<
    { __typename?: "posts" } & Pick<
      Types.Posts,
      | "id"
      | "createdAt"
      | "updatedAt"
      | "status"
      | "slug"
      | "title"
      | "content"
      | "summary"
    > & {
        userByCreatedById: { __typename?: "users" } & Pick<
          Types.Users,
          "fullName"
        >;
        userByUpdatedById: { __typename?: "users" } & Pick<
          Types.Users,
          "fullName"
        >;
      }
  >;
};

export const GetCourseByIdDocument = gql`
  query GetCourseById($id: Int!) {
    posts_by_pk(id: $id) {
      id
      createdAt
      updatedAt
      status
      slug
      title
      content
      summary
      userByCreatedById {
        fullName
      }
      userByUpdatedById {
        fullName
      }
    }
  }
`;

/**
 * __useGetCourseByIdQuery__
 *
 * To run a query within a React component, call `useGetCourseByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourseByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourseByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCourseByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCourseByIdQuery,
    GetCourseByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCourseByIdQuery, GetCourseByIdQueryVariables>(
    GetCourseByIdDocument,
    options
  );
}
export function useGetCourseByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCourseByIdQuery,
    GetCourseByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCourseByIdQuery, GetCourseByIdQueryVariables>(
    GetCourseByIdDocument,
    options
  );
}
export type GetCourseByIdQueryHookResult = ReturnType<
  typeof useGetCourseByIdQuery
>;
export type GetCourseByIdLazyQueryHookResult = ReturnType<
  typeof useGetCourseByIdLazyQuery
>;
export type GetCourseByIdQueryResult = Apollo.QueryResult<
  GetCourseByIdQuery,
  GetCourseByIdQueryVariables
>;
