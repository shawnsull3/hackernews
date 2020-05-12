import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
// Apollo
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// connecting ApolloClient instance with the GraphQL API
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

// instantiating ApolloClient 
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// The App is wrapped with the higher-order component ApolloProvider 
// that gets passed the client as a prop
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
serviceWorker.unregister();
