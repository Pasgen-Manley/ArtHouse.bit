import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [login, {error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          {data ? (
              <p>
                Success! Taking you {' '}
                <Link to="/explore">Explore NFTs.</Link>
              </p>
            ) : (
          <form onSubmit={handleFormSubmit}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input 
                className="form-input"
                id="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input 
                className="form-input"
                id="form-input"
                placeholder="Your email"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
              </Stack>
              <Button 
                colorScheme={'blue'} 
                variant={'solid'}
                type="submit"
              >
                Sign in
              </Button>        
            </Stack>
          </form>
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">
          {error.message}
        </div>
        )}  
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://www.artblocks.io/_next/image?url=https%3A%2F%2Fartblocks-mainnet.s3.amazonaws.com%2F78000041.png&w=1920&q=75'
          }
        />
      </Flex>
    </Stack>
  );
}

export default Login;