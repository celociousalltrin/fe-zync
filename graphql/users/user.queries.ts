import { gql } from "@apollo/client";

export const GET_USER = gql`
  query ($id: Int!) {
    auth(id: $id) {
      firstName
      lastName
      email
      phoneNumber
      userName
    }
  }
`;
