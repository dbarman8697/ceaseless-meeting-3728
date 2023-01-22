import React, { useReducer, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
 
   
  } from '@chakra-ui/react';
  import { MdLocalShipping } from 'react-icons/md';

const initState={
    products:[],
    isLoading:true,
    isErr:""
}

const reducer=(state,action) =>{


switch(action.type){
   case "FETCH_SUCCESS":
    return{
        ...state,
    products:action.payload,
    isLoading:false,
    isErr:false
   }
   case "FETCH_FAILED":
    return{
        products:[],
        isLoading:false,
        isErr:true
    }
   default:
    throw new Error()
}
}

function ProductDetails() {
    const[state,dispatch]=useReducer(reducer,initState)
    const{products}=state;
    const{id}=useParams()

    const getData =async(id)=>{
        axios
        .get(`  http://localhost:3001/products/${id}`)
       .then((res)=>{
        dispatch({type:"FETCH_SUCCESS",payload:res.data});

       })
       .catch((err)=>{
        dispatch({type:"FETCH_FAILED",payload:err})
    })
    }
   
useEffect(() =>{
getData(id)
},[id])
console.log(products)

const{image,title,description,category,price}=products

    return (
       <div>
        <h1>Product Details Page</h1>
        <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'sm'}
            alt={'product image'}
            src={image}
            
            // fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '500px', lg: '700px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
            {title}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
            Price: {price}$
            </Text>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
             
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
               {category}
              </Text>
              <Text fontSize={'lg'}>
               {description}
              </Text>
            </VStack>
            <Box>
              
             
            </Box>
           
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
       </div>
    )
}

export default ProductDetails
