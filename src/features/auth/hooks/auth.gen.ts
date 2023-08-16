import * as Types from '../../../models.gen';

import { gql } from '@apollo/client';
import { OwnerFragmentDoc } from '../../owners/hooks/owners.gen';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RegisterOwnerMutationVariables = Types.Exact<{
  input: Types.RegisterOwnerInput;
}>;


export type RegisterOwnerMutation = { __typename?: 'Mutation', auth: { __typename?: 'AuthMutations', registerOwner: { __typename: 'User', id: number } } };

export type LoginOwnerMutationVariables = Types.Exact<{
  input: Types.LoginOwnerInput;
}>;


export type LoginOwnerMutation = { __typename?: 'Mutation', auth: { __typename?: 'AuthMutations', loginOwner: { __typename: 'AuthTokens', accessToken: string } } };

export type RefreshOwnerMutationVariables = Types.Exact<{ [key: string]: never; }>;


export type RefreshOwnerMutation = { __typename?: 'Mutation', auth: { __typename?: 'AuthMutations', refreshOwner: { __typename: 'AuthTokens', accessToken: string } } };

export type GetCurrentOwnerQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCurrentOwnerQuery = { __typename?: 'Query', auth: { __typename?: 'AuthQueries', me: { __typename: 'User', id: number, email: string, phone?: string | null, firstName: string, lastName?: string | null, emailVerified: boolean, invitedCompanies: Array<{ __typename: 'Company', id: number, name: string, domain: string, ownerId: number, description: string, logo?: { __typename: 'CompanyLogo', small: string } | null }> } } };


export const RegisterOwnerDocument = gql`
    mutation RegisterOwner($input: RegisterOwnerInput!) {
  auth {
    registerOwner(input: $input) {
      id
      __typename
    }
  }
}
    `;
export type RegisterOwnerMutationFn = Apollo.MutationFunction<RegisterOwnerMutation, RegisterOwnerMutationVariables>;

/**
 * __useRegisterOwnerMutation__
 *
 * To run a mutation, you first call `useRegisterOwnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterOwnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerOwnerMutation, { data, loading, error }] = useRegisterOwnerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterOwnerMutation(baseOptions?: Apollo.MutationHookOptions<RegisterOwnerMutation, RegisterOwnerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterOwnerMutation, RegisterOwnerMutationVariables>(RegisterOwnerDocument, options);
      }
export type RegisterOwnerMutationHookResult = ReturnType<typeof useRegisterOwnerMutation>;
export type RegisterOwnerMutationResult = Apollo.MutationResult<RegisterOwnerMutation>;
export type RegisterOwnerMutationOptions = Apollo.BaseMutationOptions<RegisterOwnerMutation, RegisterOwnerMutationVariables>;
export const LoginOwnerDocument = gql`
    mutation LoginOwner($input: LoginOwnerInput!) {
  auth {
    loginOwner(input: $input) {
      accessToken
      __typename
    }
  }
}
    `;
export type LoginOwnerMutationFn = Apollo.MutationFunction<LoginOwnerMutation, LoginOwnerMutationVariables>;

/**
 * __useLoginOwnerMutation__
 *
 * To run a mutation, you first call `useLoginOwnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginOwnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginOwnerMutation, { data, loading, error }] = useLoginOwnerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginOwnerMutation(baseOptions?: Apollo.MutationHookOptions<LoginOwnerMutation, LoginOwnerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginOwnerMutation, LoginOwnerMutationVariables>(LoginOwnerDocument, options);
      }
export type LoginOwnerMutationHookResult = ReturnType<typeof useLoginOwnerMutation>;
export type LoginOwnerMutationResult = Apollo.MutationResult<LoginOwnerMutation>;
export type LoginOwnerMutationOptions = Apollo.BaseMutationOptions<LoginOwnerMutation, LoginOwnerMutationVariables>;
export const RefreshOwnerDocument = gql`
    mutation RefreshOwner {
  auth {
    refreshOwner {
      accessToken
      __typename
    }
  }
}
    `;
export type RefreshOwnerMutationFn = Apollo.MutationFunction<RefreshOwnerMutation, RefreshOwnerMutationVariables>;

/**
 * __useRefreshOwnerMutation__
 *
 * To run a mutation, you first call `useRefreshOwnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshOwnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshOwnerMutation, { data, loading, error }] = useRefreshOwnerMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshOwnerMutation(baseOptions?: Apollo.MutationHookOptions<RefreshOwnerMutation, RefreshOwnerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshOwnerMutation, RefreshOwnerMutationVariables>(RefreshOwnerDocument, options);
      }
export type RefreshOwnerMutationHookResult = ReturnType<typeof useRefreshOwnerMutation>;
export type RefreshOwnerMutationResult = Apollo.MutationResult<RefreshOwnerMutation>;
export type RefreshOwnerMutationOptions = Apollo.BaseMutationOptions<RefreshOwnerMutation, RefreshOwnerMutationVariables>;
export const GetCurrentOwnerDocument = gql`
    query GetCurrentOwner {
  auth {
    me {
      ...Owner
      __typename
    }
  }
}
    ${OwnerFragmentDoc}`;

/**
 * __useGetCurrentOwnerQuery__
 *
 * To run a query within a React component, call `useGetCurrentOwnerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentOwnerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentOwnerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentOwnerQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentOwnerQuery, GetCurrentOwnerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentOwnerQuery, GetCurrentOwnerQueryVariables>(GetCurrentOwnerDocument, options);
      }
export function useGetCurrentOwnerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentOwnerQuery, GetCurrentOwnerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentOwnerQuery, GetCurrentOwnerQueryVariables>(GetCurrentOwnerDocument, options);
        }
export type GetCurrentOwnerQueryHookResult = ReturnType<typeof useGetCurrentOwnerQuery>;
export type GetCurrentOwnerLazyQueryHookResult = ReturnType<typeof useGetCurrentOwnerLazyQuery>;
export type GetCurrentOwnerQueryResult = Apollo.QueryResult<GetCurrentOwnerQuery, GetCurrentOwnerQueryVariables>;