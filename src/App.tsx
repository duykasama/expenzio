import { ApolloProvider } from '@apollo/client';
import RouterComponent from './routes';
import useApollo from './hooks/useApollo';
import store from './store';
import { Provider } from 'react-redux';
import { Toaster } from './components/ui/toaster';

function App() {
    const apolloClient = useApollo();
    return (
        <Provider store={store}>
            <ApolloProvider client={apolloClient}>
                <RouterComponent />
                <Toaster />
            </ApolloProvider>
        </Provider>
    );
}

export default App;
