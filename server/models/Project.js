const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    maxLength: 80,
    require: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  website: {
    type: String,
  },
  twitter: {
    type: String,
  },
  discord: {
    type: String,
  },
  openSea: {
    type: String
  },
});

const Project = model('Project', projectSchema);

module.exports = Project;