const { Project } = require('../models');

const resolvers = {
  Query: {
    projects: async () => {
      return Project.find({});
    },
  },

  Mutation: {
    addProject: async (parent, { name, description, releaseDate, website, twitter, discord, openSea }) => {
      return Project.create({ name, description, releaseDate, website, twitter, discord, openSea });
    },
  },
};

module.exports = resolvers;