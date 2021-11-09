const { Project, User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, {username}) => {
      return User.findOne({ username });
    },
    projects: async () => {
      return Project.find({});
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this username or password!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('No user found with this username or password!');
      }

      const token = signToken(user);

      return { token, user };
    },
    addProject: async (parent, { projectName, description, website, twitter, discord, openSea }) => {
      return Project.create({ projectName, description, website, twitter, discord, openSea });
    },
  },
};

module.exports = resolvers;