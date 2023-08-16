import * as Types from '../../../models.gen';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateCompanyMutationVariables = Types.Exact<{
  input: Types.CreateCompanyInput;
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', companies: { __typename?: 'CompanyMutations', create: { __typename: 'Company', id: number, name: string, domain: string, ownerId: number, description: string, logo?: { __typename: 'CompanyLogo', small: string } | null } } };

export type GetOwnerCompaniesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetOwnerCompaniesQuery = { __typename?: 'Query', companies: { __typename?: 'CompanyQueries', owned: Array<{ __typename: 'Company', id: number, name: string, domain: string, ownerId: number, description: string, logo?: { __typename: 'CompanyLogo', small: string } | null }> } };

export type CompanyFragment = { __typename?: 'Company', id: number, name: string, domain: string, ownerId: number, description: string, logo?: { __typename: 'CompanyLogo', small: string } | null };

export const CompanyFragmentDoc = gql`
    fragment Company on Company {
  id
  name
  logo {
    small
    __typename
  }
  domain
  ownerId
  description
}
    `;
export const CreateCompanyDocument = gql`
    mutation CreateCompany($input: CreateCompanyInput!) {
  companies {
    create(input: $input) {
      ...Company
      __typename
    }
  }
}
    ${CompanyFragmentDoc}`;
export type CreateCompanyMutationFn = Apollo.MutationFunction<CreateCompanyMutation, CreateCompanyMutationVariables>;

/**
 * __useCreateCompanyMutation__
 *
 * To run a mutation, you first call `useCreateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCompanyMutation, { data, loading, error }] = useCreateCompanyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCompanyMutation(baseOptions?: Apollo.MutationHookOptions<CreateCompanyMutation, CreateCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCompanyMutation, CreateCompanyMutationVariables>(CreateCompanyDocument, options);
      }
export type CreateCompanyMutationHookResult = ReturnType<typeof useCreateCompanyMutation>;
export type CreateCompanyMutationResult = Apollo.MutationResult<CreateCompanyMutation>;
export type CreateCompanyMutationOptions = Apollo.BaseMutationOptions<CreateCompanyMutation, CreateCompanyMutationVariables>;
export const GetOwnerCompaniesDocument = gql`
    query GetOwnerCompanies {
  companies {
    owned {
      ...Company
      __typename
    }
  }
}
    ${CompanyFragmentDoc}`;

/**
 * __useGetOwnerCompaniesQuery__
 *
 * To run a query within a React component, call `useGetOwnerCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOwnerCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOwnerCompaniesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOwnerCompaniesQuery(baseOptions?: Apollo.QueryHookOptions<GetOwnerCompaniesQuery, GetOwnerCompaniesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOwnerCompaniesQuery, GetOwnerCompaniesQueryVariables>(GetOwnerCompaniesDocument, options);
      }
export function useGetOwnerCompaniesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOwnerCompaniesQuery, GetOwnerCompaniesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOwnerCompaniesQuery, GetOwnerCompaniesQueryVariables>(GetOwnerCompaniesDocument, options);
        }
export type GetOwnerCompaniesQueryHookResult = ReturnType<typeof useGetOwnerCompaniesQuery>;
export type GetOwnerCompaniesLazyQueryHookResult = ReturnType<typeof useGetOwnerCompaniesLazyQuery>;
export type GetOwnerCompaniesQueryResult = Apollo.QueryResult<GetOwnerCompaniesQuery, GetOwnerCompaniesQueryVariables>;