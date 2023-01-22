import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useContext } from 'react';
import { NavLink} from "react-router-dom"
import { AuthContext } from '../context/AuthContext';

export default function LoginPage() {
  const{login,logout}=useContext(AuthContext)
  const[email,setEmail]=useState("eve.holt@reqres.in")
  const[password,setPassword]=useState("cityslicka")

    const handleClick = ()=>{
      const userDetails={
        email,
        password
      }
      fetch(`https://reqres.in/api/login`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }).then((res)=>res.json())
    .then((data)=>
    console.log(data)
   
  )
  login()
 
  }
 const handleLogout=()=>{
  logout()
 }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={((e)=>setEmail(e.target.value)) } />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"   value={password} onChange={((e)=>setPassword(e.target.value)) } />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <NavLink to="/signup" color={'blue.400'}>Don't have account?</NavLink>
              </Stack>
            
              <Button onClick={handleClick}
                >
                Sign in
              </Button>
              <Button onClick={handleLogout}
                >
                Sign out
              </Button>
              <NavLink to="/admin" style={{textDecoration:"none"}} ><Button
                >
                Sign in as Admin
              </Button></NavLink>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
