import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { Router } from '@angular/router';

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

  const router = inject(Router);
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });

      const firstError = graphQLErrors[0];
      if (firstError.message === 'Utilisateur non authentifié')
        router.navigate([
          '/connexion',
          { message: 'Veuillez vous authentifier pour accéder à cette page' },
        ]);
      else router.navigate(['/error', { message: graphQLErrors[0].message }]);
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError.name}`);
      router.navigate(['/error', { message: networkError.message }]);
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
