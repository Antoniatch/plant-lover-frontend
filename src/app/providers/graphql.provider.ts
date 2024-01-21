import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const uri = 'http://localhost:4000';

export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const document = inject(DOCUMENT);
  const localStorage = document.defaultView?.localStorage;
  const token = localStorage ? localStorage.getItem('token') : null;

  const authLink = setContext((_, { headers }) => {
    if (!token) {
      return {};
    } else {
      return {
        headers: {
          ...headers,
          Authorization: token,
        },
      };
    }
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError.name}`);
    }
  });

  const httpLink = inject(HttpLink);
  const link = ApolloLink.from([authLink, errorLink, httpLink.create({ uri })]);

  return {
    link,
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
