const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    projects: [Project]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProject(
      projectName: String!, description: String!, releaseDate: Date!, website: String, twitter: String, discord: String, openSea: String
    ): Project
  }
`;

module.exports = typeDefs;