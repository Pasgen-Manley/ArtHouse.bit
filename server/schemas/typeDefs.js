const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Project {
    _id: ID!
    projectName: String!
    description: String!
    releaseDate: Date!
    website: String
    twitter: String
    discord: String
    openSea: String
  }

  type Query {
    projects: [Project]
  }

  type Mutation {
    addProject(
      projectName: String!, description: String!, releaseDate: Date!, website: String, twitter: String, discord: String, openSea: String
    ): Project
  }
`;

module.exports = typeDefs;