import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation ($input: CreateAuthInput!) {
    createAuth(createAuthInput: $input)
  }
`;
