import { useMemo } from 'react'
import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
//import { onError } from "@apollo/client/link/error";

import { concatPagination } from '@apollo/client/utilities'
import merge from 'deepmerge'
import isEqual from 'lodash.isequal'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'
const GRAPHQL_URL = process.env.API_URL || 'http://localhost:1337';
let apolloClient

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   // if (graphQLErrors)
//   //   graphQLErrors.forEach(({ message, locations, path }) =>
//   //     console.log(
//   //       `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//   //     )
//   //   );
//   if (networkError) {
//     console.log(`[Network error]: ${networkError}`);
//   }
// });

export function createApolloClient() {
  const linkOptions = {
    uri: GRAPHQL_URL + "/graphql", // Server URL (must be absolute)
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  }

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([
      //errorLink,
      new HttpLink(linkOptions),
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    }),
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()
  if (initialState) {
    const existingCache = _apolloClient.extract()
    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })

    _apolloClient.cache.restore(data)
  }
  
  if (typeof window === 'undefined') return _apolloClient
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function addApolloState(client, pageProps) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export function useApollo(pageProps) {
  const state = pageProps?.[APOLLO_STATE_PROP_NAME]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}