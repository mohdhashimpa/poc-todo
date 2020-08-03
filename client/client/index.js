import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: 'http://localhost:4000', fetch })
});

export default client;