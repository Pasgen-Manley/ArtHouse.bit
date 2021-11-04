import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_PROJECT } from '../../utils/mutations';
import { QUERY_PROJECTS } from '../../utils/queries';

import Auth from '../../utils/auth';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [twitter, setTwitter] = useState('');
  const [discord, setDiscord] = useState('');
  const [openSea, setOpenSea] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addProject, { error }] = useMutation(ADD_PROJECT, {
    update(cache, { data: { addProject } }) {
      try {
        const { projects } = cache.readQuery({ query: QUERY_PROJECTS });

        cache.writeQuery({
          query: QUERY_PROJECTS,
          data: { projects: [addProject, ...projects] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProject({
        variables: {
          projectName,
          description,
          website,
          twitter,
          discord,
          openSea,
        },
      });

      setProjectName('');
      setDescription('');
      setReleaseDate('');
      setWebsite('');
      setTwitter('');
      setDiscord('');
      setOpenSea('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'projectName' && value.length <= 280) {
      setProjectName(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>Let us know what you project is all about! Fill out the sections below and your project will be ready to be displayed to our community!</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9 mt-5">
              <input 
                className="form-control w-100"
                name="projectName"
                placeholder="Please enter the name of your project"
                value={projectName}
                onChange={handleChange}
              ></input>
            </div>
            <div className="col-12 col-lg-9">
              <textarea
                name="description"
                placeholder="Here's a new thought..."
                value={description}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="col-12 col-lg-9 mt-5">
              <input 
                className="form-control w-100"
                name="website"
                placeholder="Please enter your projects website"
                value={website}
                onChange={handleChange}
              ></input>
            </div>
            <div className="col-12 col-lg-9 mt-5">
              <input 
                className="form-control w-100"
                name="twitter"
                placeholder="Please enter your projects twitter"
                value={twitter}
                onChange={handleChange}
              ></input>
            </div>
            <div className="col-12 col-lg-9 mt-5">
              <input 
                className="form-control w-100"
                name="discord"
                placeholder="Please enter your projects discord"
                value={discord}
                onChange={handleChange}
              ></input>
            </div>
            <div className="col-12 col-lg-9 mt-5">
              <input 
                className="form-control w-100"
                name="openSea"
                placeholder="Please enter your projects OpenSea address"
                value={openSea}
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Upload Project
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your project.
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ProjectForm;