import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
  query projects {
    projects {
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