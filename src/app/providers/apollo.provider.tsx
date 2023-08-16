import { FC, ReactNode, useMemo } from "react";
import nookies from "nookies";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  GraphQLRequest,
  Observable,
  FetchResult,
  ApolloLink,
  NormalizedCacheObject,
  split,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

import { StrictTypedTypePolicies } from "../../apollo-helpers";
import { DocumentNode, GraphQLError } from "graphql";
import { RefreshOwnerDocument } from "@/features/auth/hooks/auth.gen";
import { GetServerSidePropsContext } from "next";
import { getMainDefinition } from "@apollo/client/utilities";
import isEqual from "lodash.isequal";
import merge from "lodash.merge";
import { AppProps } from "next/app";
import { isServer } from "@/shared/lib/isServer";

const APOLLO_STATE_PROP_NAME = "APOLLO_STATE_PROP_NAME";
export const OWNER_ACCESS_TOKEN = "OWNER_ACCESS_TOKEN";

const isSSR = isServer();

let apolloClient: ApolloClient<NormalizedCacheObject>;

const httpLink = createUploadLink({
  credentials: "include",
  uri:
    process.env.NODE_ENV === "production"
      ? "https://api.entreeqr.com/graphql"
      : "http://localhost:3001/graphql",
});

/**
 * Next Context type
 */
export type WithNextContext = Pick<GetServerSidePropsContext, "req" | "res">;

export function getToken(context?: WithNextContext): string {
  return nookies.get(context)?.[OWNER_ACCESS_TOKEN];
}

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.message === "Owner is not authenticated") {
          // ignore 401 error for a refresh request
          if (operation.operationName === "refreshToken") return;

          const observable = new Observable<
            FetchResult<Record<string, unknown>>
          >((observer) => {
            // used an annonymous function for using an async function
            (async () => {
              try {
                const accessToken = await refreshToken();

                if (!accessToken) {
                  throw new GraphQLError("Empty AccessToken");
                }

                // Retry the failed request
                const subscriber = {
                  next: observer.next.bind(observer),
                  error: observer.error.bind(observer),
                  complete: observer.complete.bind(observer),
                };

                forward(operation).subscribe(subscriber);
              } catch (err) {
                observer.error(err);
              }
            })();
          });

          return observable;
        }
      }
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
  }
);

/**
 * Creates auth link
 */
const createAuthLink = (context?: WithNextContext, token?: string) => {
  const accessToken = token || getToken(context);

  return setContext((_, { headers }) => {
    return {
      headers: {
        ...(headers || {}),
        Authorization: accessToken ? `Bearer ${accessToken}` : "",
      },
    };
  });
};

function createApolloClient(context?: WithNextContext, token?: string) {
  const authLink = createAuthLink(context, token);
  // const accessToken = token || getToken(context)

  return new ApolloClient({
    ssrMode: isSSR,
    link: from([errorLink, authLink, httpLink]),

    cache: new InMemoryCache({
      typePolicies,
    }),
    // connectToDevTools: process.env.NODE_ENV !== 'production',
    connectToDevTools: true,
  });
}

export function initializeApollo(initialState: any | null = null) {
  const newApolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = newApolloClient.extract();

    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray: any, sourceArray: any[]) => [
        ...sourceArray,
        ...destinationArray.filter((d: any) =>
          sourceArray.every((s: any) => !isEqual(d, s))
        ),
      ],
    });

    newApolloClient.cache.restore(data);
  }
  if (isSSR) return newApolloClient;
  if (!apolloClient) apolloClient = newApolloClient;

  return newApolloClient;
}

export function addApolloState(client: any, pageProps: AppProps["pageProps"]) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function createLink(
  context?: WithNextContext,
  token?: string
): ApolloLink {
  const authLink = createAuthLink(context, token);
  return from([errorLink, authLink, httpLink]);
}

export function useApollo(pageProps: AppProps["pageProps"]) {
  const state = pageProps?.[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}

const typePolicies: StrictTypedTypePolicies = {
  CompanyQueries: {
    merge: true,
  },
};

// Request a refresh token to then stores and returns the accessToken.
const refreshToken = async () => {
  const client = initializeApollo();

  try {
    const refreshResolverResponse = await client.mutate<{
      auth: { refreshOwner: { accessToken: string } };
    }>({
      mutation: RefreshOwnerDocument,
    });

    console.log("refreshResolverResponse", refreshResolverResponse);

    const accessToken =
      refreshResolverResponse.data?.auth.refreshOwner.accessToken;
    nookies.set(null, OWNER_ACCESS_TOKEN, accessToken || "");
    return accessToken;
  } catch (err) {
    nookies.destroy(null, OWNER_ACCESS_TOKEN);
    throw err;
  }
};

interface ApolloProps {
  pageProps: AppProps["pageProps"];
  children: ReactNode;
}

// export const OWNER_ACCESS_TOKEN = "OWNER_ACCESS_TOKEN";

// const errorLink = onError(
//   ({ graphQLErrors, networkError, operation, forward }) => {
//     if (graphQLErrors) {
//       for (let err of graphQLErrors) {
//         switch (err.message) {
//           case "User is not authenticated":
//             // ignore 401 error for a refresh request
//             if (operation.operationName === "refreshToken") return;

//             const observable = new Observable<FetchResult<Record<string, any>>>(
//               (observer) => {
//                 // used an annonymous function for using an async function
//                 (async () => {
//                   try {
//                     const accessToken = await refreshToken();

//                     if (!accessToken) {
//                       throw new GraphQLError("Empty AccessToken");
//                     }

//                     // Retry the failed request
//                     const subscriber = {
//                       next: observer.next.bind(observer),
//                       error: observer.error.bind(observer),
//                       complete: observer.complete.bind(observer),
//                     };

//                     forward(operation).subscribe(subscriber);
//                   } catch (err) {
//                     observer.error(err);
//                   }
//                 })();
//               }
//             );

//             return observable;
//         }
//       }
//     }

//     if (networkError) console.log(`[Network error]: ${networkError}`);
//   }
// );

// const httpLink = createUploadLink({
//   credentials: "include",
//   uri:
//     process.env.NODE_ENV === "production"
//       ? "https://api.entreeqr.com/graphql"
//       : "http://localhost:3001/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem(OWNER_ACCESS_TOKEN);
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   link: ApolloLink.from([errorLink, authLink, httpLink]),
//   cache: new InMemoryCache({ typePolicies }),
// });

// // Request a refresh token to then stores and returns the accessToken.
// const refreshToken = async () => {
//   try {
//     const refreshResolverResponse = await client.mutate<{
//       auth: {
//         refreshOwner: { accessToken: string };
//       };
//     }>({
//       mutation: RefreshOwnerDocument,
//     });

//     const accessToken =
//       refreshResolverResponse.data?.auth.refreshOwner.accessToken;
//     localStorage.setItem(OWNER_ACCESS_TOKEN, accessToken || "");
//     return accessToken;
//   } catch (err) {
//     localStorage.removeItem(OWNER_ACCESS_TOKEN);
//     throw err;
//   }
// };

const Apollo: FC<ApolloProps> = ({ children, pageProps }) => {
  const client = useApollo(pageProps);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
