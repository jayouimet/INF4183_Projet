import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import { useState } from 'react';
import '../styles/globals.css'

const createApolloClient = (authToken) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:8080/v1/graphql',
      
      /*headers: {
        Authorization: `Bearer ${authToken}`
      }*/
    }),
    cache: new InMemoryCache(),
  });
};

function MyApp({ Component, pageProps }) {
  // Anonymous, no token required
  const [client] = useState(createApolloClient());
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
