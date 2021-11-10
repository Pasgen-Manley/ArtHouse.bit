import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_PROJECT } from '../utils/mutations';
import { QUERY_PROJECTS } from '../utils/queries';

import Auth from '../utils/auth';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [twitter, setTwitter] = useState('');
  const [discord, setDiscord] = useState('');
  const [openSea, setOpenSea] = useState('');
  const [image, setImage] = useState('');

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
          image,
        },
      });

      setProjectName('');
      setDescription('');
      setReleaseDate('');
      setWebsite('');
      setTwitter('');
      setDiscord('');
      setOpenSea('');
      setImage('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "projectName":
        setProjectName(value);
        setCharacterCount(value.length);
        break;
      case "description":
        setDescription(value);
        setCharacterCount(value.length);
        break;
      case "website":
        setWebsite(value);
        setCharacterCount(value.length);
        break;
      case "twitter":
        setTwitter(value);
        setCharacterCount(value.length);
        break;
      case "discord":
        setDiscord(value);
        setCharacterCount(value.length);
        break;
      case "OpenSea":
        setOpenSea(value);
        setCharacterCount(value.length);
        break;
      case "image":
        setImage(value);
        setCharacterCount(value.length);
        break;
      default:
    }
  };
  

  
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'}>Let us know what you project is all about!</Heading>
          <Heading fontSize={'1xl'}>Fill out the sections below and your project will be ready to be displayed to our community!</Heading>
        </Stack>
        {/*{Auth.loggedIn() ? (   */}
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <form onSubmit={handleFormSubmit}>
              <Stack spacing={4}>
                <FormControl id="name">
                  <FormLabel>Project Name</FormLabel>
                  <Input 
                    className="form-input"
                    id="form-input"
                    placeholder="Please enter the name of your project"
                    name="projectName"
                    type="text"
                    value={projectName}
                    onChange={handleChange} 
                  />
                </FormControl>
                <FormControl id="description">
                  <FormLabel>Project description</FormLabel>
                  <Textarea 
                    className="form-input"
                    id="form-input"
                    placeholder="Please tell us a little about your project"
                    name="description"
                    type="text"
                    value={description}
                    onChange={handleChange} 
                  />
                </FormControl>
                <FormControl id="website">
                  <FormLabel>Website</FormLabel>
                  <Input 
                    className="form-input"
                    id="form-input"
                    placeholder="Website URL"
                    name="website"
                    type="url"
                    value={website}
                    onChange={handleChange} 
                  />
                </FormControl>
                <FormControl id="twitter">
                  <FormLabel>Twitter</FormLabel>
                  <Input 
                    className="form-input"
                    id="form-input"
                    placeholder="Projects twitter"
                    name="twitter"
                    type="url"
                    value={twitter}
                    onChange={handleChange} 
                  />
                </FormControl>
                <FormControl id="discord">
                  <FormLabel>Discord</FormLabel>
                  <Input 
                    className="form-input"
                    id="form-input"
                    placeholder="Projects discord server"
                    name="discord"
                    type="url"
                    value={discord}
                    onChange={handleChange} 
                  />
                </FormControl>
                <FormControl id="opensea">
                  <FormLabel>OpenSea</FormLabel>
                  <Input 
                    className="form-input"
                    id="form-input"
                    placeholder="Official page on OpenSea"
                    name="OpenSea"
                    type="url"
                    value={openSea}
                    onChange={handleChange} 
                  />
                </FormControl>
                <FormControl id="image">
                  <FormLabel>Display NFT</FormLabel>
                  <Input 
                    className="form-input"
                    id="form-input"
                    placeholder="Embed Display URL"
                    name="image"
                    type="url"
                    value={image}
                    onChange={handleChange}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Button
                    type="submit"
                    bg={'pink.500'}
                    color={'white'}
                    _hover={{
                      bg: 'pink.400',
                    }}>
                    Upload
                  </Button>
                </Stack>
              </Stack>
            </form>
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </Box>
        {/*}) : (
          <p>
            You need to be logged in to share your project.
            <Link to="/login"> login</Link> or <Link to="/signup">signup to continue!</Link>
          </p>
        )}*/}
      </Stack>
    </Flex>
  );
}

export default ProjectForm;