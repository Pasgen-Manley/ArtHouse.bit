import React from 'react';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson, BsLinkedin } from 'react-icons/bs';

export default function contact() {
  return (
    <Container bg="" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="grey.500"
          color="white"
          borderRadius="lg"
          boxShadow='dark-lg'
          m={{ sm: 2, md: 8, lg: 5 }}
          p={{ sm: 4, md: 4, lg: 12 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading color={'#1970F1'}>Contact Me</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    If you have any questions feel free to get in touch!
                  </Text>
                  <Box>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<BsPerson color="#1970F1" size="20px" />}>
                        Pasgen Manley
                      </Button>
                      <Button
                        as='a'
                        href="mailto:pasgenmanley@gmail.com"
                        size="md"
                        height="48px"
                        width="285px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                        pasgenmanley@gmail.com
                      </Button>
                      <Button
                        as='a'
                        href='https://www.google.com/maps/place/Perth+WA+6000/@-31.954748,115.8175192,13z/data=!3m1!4b1!4m5!3m4!1s0x2a32bad5293bd573:0x504f0b535df4ee0!8m2!3d-31.9514294!4d115.8617055'
                        target='_blank'
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                        Perth, Australia
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={"30%"}
                    alignItems="flex-start">
                    <IconButton
                      as='a'
                      href='https://www.linkedin.com/in/pasgen-manley-179718218/'
                      target='_blank'
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsLinkedin size="28px" />}
                    />
                    <IconButton
                      as="a"
                      href="https://github.com/Pasgen-Manley"
                      target='_blank'
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsGithub size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}