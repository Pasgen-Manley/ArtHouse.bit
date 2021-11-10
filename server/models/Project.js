const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    minlength: 1,
    maxLength: 280,
    require: true,
    trim: true,
  },
  website: {
    type: String,
    trim: true,
  },
  twitter: {
    type: String,
    trim: true,
  },
  discord: {
    type: String,
    trim: true,
  },
  openSea: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
});

const Project = model('Project', projectSchema);

module.exports = Project;