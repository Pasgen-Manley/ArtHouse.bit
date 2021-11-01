import { gql } from '@apollo/client';

export const ADD_PROJECT = gql`
  mutation addProject($projectName: String!, $description: String!, $releaseDate: Date!, $website: String, $twitter: String, $discord: String, $openSea: String) {
    addProject(projectName: $projectName, description: $description, releaseDate: $releaseDate, website: $website, twitter: $twitter, discord: $discord, openSea: $openSea) {
      _id
      projectName
      description
      releaseDate
      website
      twitter
      discord
      openSea
    }
  }
`;