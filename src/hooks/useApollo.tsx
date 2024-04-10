import { ApolloClient, InMemoryCache } from '@apollo/client';

const useApollo = () => {
  return new ApolloClient({
    uri: import.meta.env.VITE_API_GRAPHQL_URL,
    cache: new InMemoryCache(),
  });
};

export default useApollo;
