import * as Types from '../../../models.gen';

import { gql } from '@apollo/client';
import { CompanyFragmentDoc } from '../../company/hooks/company.gen';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateOwnerMutationVariables = Types.Exact<{
  input: Types.UpdateOwnerInput;
}>;


export type UpdateOwnerMutation = { __typename?: 'Mutation', users: { __typename?: 'UserMutations', updateOwner: { __typename: 'User', id: number, email: string, phone?: string | null, firstName: string, lastName?: string | null, emailVerified: boolean, invitedCompanies: Array<{ __typename: 'Company', id: number, name: string, domain: string, ownerId: number, description: string, logo?: { __typename: 'CompanyLogo', small: string } | null }> } } };

export type OwnerFragment = { __typename?: 'User', id: number, email: string, phone?: string | null, firstName: string, lastName?: string | null, emailVerified: boolean, invitedCompanies: Array<{ __typename: 'Company', id: number, name: string, domain: string, ownerId: number, description: string, logo?: { __typename: 'CompanyLogo', small: string } | null }> };

export const OwnerFragmentDoc = gql`
    fragment Owner on User {
  id
  email
  phone
  firstName
  lastName
  emailVerified
  invitedCompanies {
    ...Company
    __typename
  }
}
    ${CompanyFragmentDoc}`;
export const UpdateOwnerDocument = gql`
    mutation UpdateOwner($input: UpdateOwnerInput!) {
  users {
    updateOwner(input: $input) {
      ...Owner
      __typename
    }
  }
}
    ${OwnerFragmentDoc}`;
export type UpdateOwnerMutationFn = Apollo.MutationFunction<UpdateOwnerMutation, UpdateOwnerMutationVariables>;

/**
 * __useUpdateOwnerMutation__
 *
 * To run a mutation, you first call `useUpdateOwnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOwnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOwnerMutation, { data, loading, error }] = useUpdateOwnerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOwnerMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOwnerMutation, UpdateOwnerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOwnerMutation, UpdateOwnerMutationVariables>(UpdateOwnerDocument, options);
      }
export type UpdateOwnerMutationHookResult = ReturnType<typeof useUpdateOwnerMutation>;
export type UpdateOwnerMutationResult = Apollo.MutationResult<UpdateOwnerMutation>;
export type UpdateOwnerMutationOptions = Apollo.BaseMutationOptions<UpdateOwnerMutation, UpdateOwnerMutationVariables>;