import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';

// graphql
import { ApolloProvider, InMemoryCache, HttpLink, ApolloLink, ApolloClient } from '@apollo/client';
// import reportWebVitals from './reportWebVitals';


import '../node_modules/jquery/dist/jquery.slim';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
/**
 * create a new apollo client
 */

const httpLink = new HttpLink({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000'
      : 'https://pgm-promotion.herokuapp.com/',
});

const authLink  = new ApolloLink((operation, forward) => {
  // grab the token form localstorage
    const token  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmFlNjAzMDU3YjlhNDMwMzc4ZDU3NzEiLCJlbWFpbCI6InJvbWFuaWVkZWxwb3J0ZTIzMEBnbWFpbC5jb20iLCJpYXQiOjE2MDUyNjM0MTMsImV4cCI6MTYwNTI2NzAxM30.D2jd8QTIKtQqYAnA7G1CPMprEVkb5hBaQt95h_nOAlI";

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token} `: ''     
      }
    });

    return forward(operation);
});

// init apolloclient
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );