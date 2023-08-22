import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {setContext} from '@apollo/client/link/context';
import {ApolloClientOptions, ApolloLink, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

const uri = 'https://api.github.com/graphql'; // <-- add the URL of the GraphQL server here
// const uri = '"https://api.github.com/repos/user/repo/issues?state=closed&access_token='; // <-- add the URL of the GraphQL server here

// tslint:disable-next-line:typedef
export function provideApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));
  const token = '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'; // Your github token here
  const auth = setContext((operation, context) => ({
    headers: {
      Authorization: `bearer ${token}`
    },
  }));

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache
  };
}

@NgModule({
  exports: [ApolloModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: provideApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
