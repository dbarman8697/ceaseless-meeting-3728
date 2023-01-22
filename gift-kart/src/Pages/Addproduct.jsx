import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    Stack,
    Button,
    Heading,
    useColorModeValue,
 
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
  export default function Addproduct() {
    const navigate=useNavigate()
    const [user,setUser]=useState({
        title:"",
        catagory:"",
        price:"",
        image:""

    })
    const{title,catagory,price,image}=user
    const onInputChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const submit = async (e) =>{
        e.preventDefault()
        await axios.post("http://localhost:3001/products",user)
        setUser({title:"",catagory:"",price:"",image:""})
        navigate("/dashboard")
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
             Add product
            </Heading>
           
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
                    <FormLabel> Title</FormLabel>
                    <Input type="text"
                    name='title' 
                    value={title}
                    onChange={e =>onInputChange(e) }/>
                  </FormControl>
                </Box>
               
              </HStack>
              <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Price</FormLabel>
                    <Input type="text"
                     name='price' 
                     value={price}
                     onChange={e =>onInputChange(e) } />
                  </FormControl>
                </Box>
              <FormControl id="email" isRequired>
                <FormLabel>Catagory</FormLabel>
                <Input type="text" 
                 name='catagory' 
                 value={catagory}
                 onChange={e =>onInputChange(e) }/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Image</FormLabel>
                <InputGroup>
                  <Input type="url"
                   name='image' 
                   value={image}
                   onChange={e =>onInputChange(e) }/>
                 
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
                 Add Product
                </Button></NavLink>
              </Stack>
             
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
