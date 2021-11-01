const { Project } = require('../models');

const resolvers = {
  Query: {
    projects: async () => {
      return Project.find({});
    },
  },

  Mutation: {
    addProject: async (parent, { projectName, description, releaseDate, website, twitter, discord, openSea }) => {
      return Project.create({ projectName, description, releaseDate, website, twitter, discord, openSea });
    },
  },
};

module.exports = resolvers;