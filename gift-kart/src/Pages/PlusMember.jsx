import {
    Flex,
    Box,
    Image,Grid,
    Icon,
    chakra,
    Tooltip
  } from "@chakra-ui/react"
  import { FiShoppingCart } from "react-icons/fi"
  
  import axios from "axios"
  import { useEffect } from "react"
  import { useState } from "react"
 
  
 
  
  function PlusMember() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        getProduct()
    },[])
     
    const getProduct= async()=>{
        const ProductData=await axios.get("  http://localhost:3001/products")
        setProducts(ProductData.data)
    }
    return (
      <Grid templateColumns='repeat(4, 1fr)' gap={3} w="80%" m="auto" mt={10} mb={10}>
            {products?.map((prod)=>(
                 <Box
              
                 maxW="300px"
                 borderWidth="1px"
                 rounded="lg"
                 shadow="lg"
                 position="relative"
                 display="flex"
                 flexDirection="column"
                
               >
                 
         
                 <Image
                   src={prod.image}
                   alt="Products"
                   roundedTop="lg"
                   w="50%"
                   margin="auto"
                   padding="15px"
                 />
         
                 <Box p="6" >
                   
                   
                     <Box
                       fontSize="l"
                       fontWeight="semibold"
                       as="h4"
                    //    lineHeight="tight"
                       isTruncated
                     >
                       {prod.title}
                     </Box>
                    
                   
         
                   <Flex justifyContent="space-between" alignContent="center">
                     <Box fontSize="2xl" >
                       <Box as="span" color={"gray.600"} fontSize="lg">
                         $
                       </Box>
                       {prod.price}
                     </Box>
                     <Tooltip
                       label="Add to cart"
                       bg="white"
                       placement={"bottom"}
                       color={"gray.800"}
                       fontSize={"1.2em"}
                     >
                       <chakra.a href={"#"} display={"flex"}>
                         <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                       </chakra.a>
                     </Tooltip>
                   </Flex>
                 </Box>
               </Box>
            ))}
       
      </Grid>
    )
  }
  
  export default PlusMember
  