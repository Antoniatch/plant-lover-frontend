import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Apollo, MutationResult, gql } from 'apollo-angular';
import { ILoginOutput, ISubscriptionOutput, LoginResponse } from '../types/interfaces';
import { Observable, map, tap } from 'rxjs';
import { CREATE_NEW_USER, LOGIN } from '../graphql/mutations';

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
    this.apollo
      .mutate({
        mutation: CREATE_NEW_USER,
        variables: {
          data: {
            email,
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
          email,
          password,
        },
      },
    });
  }
}
