import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PROJECT = gql`
  mutation addProject($projectName: String!, $description: String!, $website: String, $twitter: String, $discord: String, $openSea: String) {
    addProject(projectName: $projectName, description: $description, website: $website, twitter: $twitter, discord: $discord, openSea: $openSea) {
      _id
      projectName
      description
      website
      twitter
      discord
      openSea
    }
  }
`;