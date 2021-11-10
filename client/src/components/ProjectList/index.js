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
  SimpleGrid,
  Grid,
  Text,
} from '@chakra-ui/react';

const ProjectList = ({ projects }) => {
  if (projects && !projects.length) {
    return <h3>Can't find any articles!</h3>
  }

  return (
    <Flex
      minH={'20vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} w={'80%'} py={12} px={1}>
        <Stack align={'center'}>
          <Heading fontSize={'3xl'}>Explore the lastest Projects Added!</Heading>
        </Stack>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          {projects.map((projects) => (
            <Grid
              h="200px"
              templateColumns="repeat(3, 1fr)"
              shadow={'dark-lg'}
              borderLeftRadius="10"
              borderRightRadius="10"
            >
              {/*<Box 
                rounded={'lg'}
                boxShadow={'lg'}
                key={projects._id}
                bg={useColorModeValue('gray.50', 'purple.800')}
              >*/}
              <Box w="100%" h="100%" bg={useColorModeValue('gray.50', 'purple.800')} borderLeftRadius="10" >
                <Image src={'images/Bears-Deluxe.png'} alt={'NFT example'} left={''} boxSize="200px" />
              </Box>
              <Box w="100%" h="100%" bg={useColorModeValue('gray.50', 'purple.800')}>
                <Heading fontSize={'3x1'} textAlign={'flex-start'}>{projects.projectName}</Heading>
                <h3 fontSize={'1x1'} align={'flex-start'}>{projects.description}</h3>
              </Box>
              <Box w="100%" h="100%" bg={useColorModeValue('gray.50', 'purple.800')} borderRightRadius="10">
                <div>
                  <div>
                    <a href={projects.website} target='_blank'>
                      <span>{projects.website}</span>
                    </a>
                  </div>
                  <a href={projects.discord} target='_blank'>
                    <Image width='5' height='5' float='left' mt={3} src={'images/Discord-Logo-Color.png'}/>
                    <Text mt={2}>Discord</Text>
                  </a>
                  <a href={projects.twitter} target='_blank'>
                    <Image width='5' height='5' float='left' mt={3} src={'images/twitter.png'}/>
                    <Text mt={2}>{projects.twitter}</Text>
                  </a>
                  <a href={projects.openSea} target='_blank'>
                    <Image width='5' height='5' float='left' mt={3} src={'images/OpenSea-Logomark-Blue.png'}/>
                    <Text mt={2}>OpenSea</Text>
                  </a>
                </div>
              </Box>
              {/*</Box>*/}
            </Grid>
          ))}
        </VStack>
      </Stack>
    </Flex>
  );
}

export default ProjectList;