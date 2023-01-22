import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
 
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { NavLink } from 'react-router-dom';
import axios from 'axios';
// import {useHistory} from "react-router-dom"
  
  export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    // let History=useHistory()
    const [user,setUser]=useState({
        f_name:"",
        username:"",
        email:"",
        password:""

    })
    const{f_name,username,email,password}=user
    const onInputChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const submit = async (e) =>{
        e.preventDefault()
        await axios.post("https://639883a4fe03352a94d3d897.mockapi.io/product/kpc_user",user)
        setUser({f_name:"",username:"",email:"",password:""})
    }

    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4} >
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel> Name</FormLabel>
                    <Input type="text"
                    name='f_name' 
                    value={f_name}
                    onChange={e =>onInputChange(e) }/>
                  </FormControl>
                </Box>
               
              </HStack>
              <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>User Name</FormLabel>
                    <Input type="text"
                     name='username' 
                     value={username}
                     onChange={e =>onInputChange(e) } />
                  </FormControl>
                </Box>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" 
                 name='email' 
                 value={email}
                 onChange={e =>onInputChange(e) }/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} 
                   name='password' 
                   value={password}
                   onChange={e =>onInputChange(e) }/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
               <NavLink to="/login"> <Button onClick={submit}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'black'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button></NavLink>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <NavLink to="/login" color={'blue.400'}>Login</NavLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }