import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  HStack,
  VStack,
  StackDivider,
  Button,
  Heading,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

import ProjectList from '../components/ProjectList';
import { QUERY_PROJECTS } from '../utils/queries';

const Projects = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
        >
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProjectList
              projects={projects}
              title="Latest NFT Projects Added!"
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default ExploreNFTs;