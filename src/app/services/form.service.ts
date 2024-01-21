import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Apollo, MutationResult, gql } from 'apollo-angular';
import { ILoginOutput, ISubscriptionOutput } from '../interfaces';
import { Observable, map, tap } from 'rxjs';

const CREATE_NEW_USER = gql`
  mutation CreateOneUser($data: LoginInput!) {
    createOneUser(data: $data) {
      id
      name
      email
    }
  }
`;

type LoginResponse = {
  login: ILoginOutput;
};

const LOGIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      accessToken
      id
      name
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private apollo: Apollo) {}

  fieldHasError(field: AbstractControl | null): string | boolean {
    return field?.touched && field?.hasError('required')
      ? 'Champ requis'
      : field?.touched && field?.hasError('email')
        ? 'E-mail invalide'
        : false;
  }

  subscriptionData: ISubscriptionOutput | null = null;
  loginData: ILoginOutput | null = null;
  data = null;
  error = null;

  submitSubscription(email: string, name: string, password: string) {
    console.log(email, name, password);

    this.apollo
      .mutate({
        mutation: CREATE_NEW_USER,
        variables: {
          data: {
            name,
            password,
          },
        },
      })
      .subscribe({
        next(value) {
          console.log(value);
        },
        error(err) {
          console.log(err);
        },
        complete() {
          console.log('Completed');
        },
      });
  }

  login(email: string, password: string): Observable<MutationResult<LoginResponse | null>> {
    return this.apollo.mutate<LoginResponse>({
      mutation: LOGIN,
      variables: {
        data: {
          // email,
          name: email,
          password,
        },
      },
    });
  }
}
