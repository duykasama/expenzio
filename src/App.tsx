import { ApolloProvider } from '@apollo/client';
import RouterComponent from './routes';
import useApollo from './hooks/useApollo';

function App() {
    const apolloClient = useApollo();
    return (
        <ApolloProvider client={apolloClient}>
            <RouterComponent />
        </ApolloProvider>
    );
}

export default App;
