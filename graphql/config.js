import { useMemo } from 'react'
import { ApolloClient,ApolloLink, HttpLink,InMemoryCache,split,concat} from '@apollo/client'
import {createUploadLink} from 'apollo-upload-client'
import { setContext } from "@apollo/client/link/context";
import { WebSocketLink } from "@apollo/link-ws"; 
import { getMainDefinition } from '@apollo/client/utilities' 
import isEqual from 'lodash/isEqual'
import merge from 'deepmerge'

import cookie from 'cookie'
import cache from './cache';



export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'


let apolloClient

//config for the urls
const HTTPUrl = process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL : "http://localhost:8080/v1/graphql"
const WEBSOCKETUrl = process.env.NEXT_PUBLIC_API_WS_URL ? process.env.NEXT_PUBLIC_API_WS_URL : "ws://localhost:8080/v1/graphql"


const authLink = setContext((req, {headers}) => {
  console.log("request type:",req.operationName)
  // Get token from cookie
  let accessToken = ""
 
  // Server side
  if (headers) {
    accessToken = headers.Cookie ? headers.Cookie : ""
  } 

  // Client side
  if (typeof window !== "undefined") {
    let cookies = cookie.parse(document.cookie || "")
    accessToken = (cookies && cookies.accessToken) || ""
  } 

  return {
    headers:{
      Cookie:accessToken ? accessToken : ""
    }
  }
})

//websocket call
const wsLink = process.browser
  ? new WebSocketLink({
      uri: WEBSOCKETUrl,
      options: {
        reconnect: true,
        timeout:30000,
        /* connectionParams: {} */
      },
    })
  : null;

//http link call
const httpLink = new HttpLink({
	uri: HTTPUrl,
  credentials: "include"
});

//uploadLink call
const uploadLink = createUploadLink({
  uri: HTTPUrl,
  fetchOptions: { credentials: 'include' },
});


const link = process.browser ? split( //only create the split in the browser
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  uploadLink,
) : uploadLink;


const ssrMode = typeof window === 'undefined'

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link:authLink.concat(link),
    /* cache:ssrMode ? new InMemoryCache() : cache, */
    cache:new InMemoryCache(),
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
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
  /* console.log("check apollo",pageProps) */
  let state
  if(pageProps?.props){
    state = pageProps[APOLLO_STATE_PROP_NAME]
   
  }
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}