import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

const ArticleList = ({ projects }) => {
  if (projects && !projects.length) {
    return <h3>Can't find any articles!</h3>
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={12}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'}>Explore the lastest Projects Added!</Heading>
        </Stack>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          {projects.map((projects) => (
            <Box 
              rounded={'lg'}
              boxShadow={'lg'}
              key={projects._id}
            >
              <Image src={''} alt={'NFT examples'} left={''} boxSize="200px" />
              <Heading fontSize={'2x1'} right={''}>{projects.projectName}</Heading>
              <Heading fontSize={'1x1'} right={''}>{projects.description}</Heading>
              <div>
                <a href={projects.website}>
                  <span>{projects.website}</span>
                </a>
                <a href={projects.discord}>
                  <Image src={'../assets/Discord-Logo-Color.png'}/>
                  <span>Discord</span>
                </a>
                <a href={projects.twitter}>
                  <Image src={'../assets/twitter.png'}/>
                  <span>{projects.twitter}</span>
                </a>
                <a href={projects.openSea}>
                  <Image src={'../assets/OpenSea-Logomark-Blue.png'}/>
                  <span>OpenSea</span>
                </a>
              </div>
            </Box>
          ))}
        </VStack>
      </Stack>
    </Flex>
  );
}

export default ProjectList;