import {  Flex, Box, Image,Grid, Icon, chakra, Tooltip} from "@chakra-ui/react"
  import { FiShoppingCart } from "react-icons/fi"
  import axios from "axios"
  import { useEffect } from "react"
  import { useState } from "react"
  import { Link as NavLink} from 'react-router-dom'

  
 
  
  function ProductPage() {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        getProduct()
    },[])
     
    const getProduct= async()=>{
        const ProductData=await axios.get(" http://localhost:3001/products")
        setProducts(ProductData.data)
    }
    return (
      <>
      <div 
      style={{display:'flex',justifyContent:"space-between",width:"80%",margin:"auto",padding:"15px",alignItems:"center"}}>
      <input type="search" placeholder="search"style={{padding:"10px",border:"1px solid black",height:"40px",borderRadius:"10px"}} />
      <button className="btn btn-primary m-3">sort</button>
      </div>
      <Grid templateColumns='repeat(4, 1fr)' gap={3} w="80%" m="auto" mt={10} mb={10} >
           
            {products?.map((prod)=>(
               <NavLink to={`/product/${prod.id}`} style={{textDecoration:"none"}} >
                 <Box
                key={prod.key}
                 maxW="300px"
                 maxH="500px"
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
         
                 <Box p="6" key={prod.id}>
                   
                   
                     <Box
                       fontSize="xl"
                       fontWeight="semibold"
                       as="h4"
                   
                       isTruncated
                     >
                       {prod.title}
                     </Box>
                     <Box
                       fontSize="l"
                       fontWeight="semibold"
                       as="h4"
                   
                       isTruncated
                     >
                       {prod.category}
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
                </NavLink>
            ))}
          
       
      </Grid>
      </>
    )
  }
  
  export default ProductPage
  