import { gql } from 'apollo-angular';

export const CREATE_NEW_USER = gql`
  mutation CreateOneUser($data: LoginInput!) {
    createOneUser(data: $data) {
      id
      name
      email
    }
  }
`;

export const LOGIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      accessToken
      id
      name
    }
  }
`;
