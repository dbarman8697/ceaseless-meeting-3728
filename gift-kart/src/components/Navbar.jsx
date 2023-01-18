
import React, { useContext } from "react";
import { AuthContext } from "../context/AppContext";


function selects() {
  return (
    <select
      style={{ background: "transparent", width: "100%", cursor: "pointer" }}
    >
      <option value="">All Departments</option>
      <option value="">Auto</option>
      <option value="">Baby</option>
      <option value="">Beuty</option>
    </select>
  );
}
function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [placement, setPlacement] = React.useState('right')
  const {isAuth,logOutuser}=useContext(AuthContext);
  const logoutUser=()=>{
    logOutuser();
  }
  // if(!isAuth)
  // {
  //   return <Navigate to="/login" />
  // }

  // console.log(isModalOpen)
  return (
    <>
    {/* pos="fixed"  zIndex={2} _after={{marginTop:"0px"}} */}
      <Box bg="#f0f1f7"  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" w="100%" p={4}
      >
        <Flex zIndex={-5}>
          <Box>
            <Link to="/">
              {" "}
              <Image
                ml={5}
                w="200px"
                src=""
                alt="SHOP.COM"
              />
            </Link>
          </Box>
          <Spacer />
          <Box w="45%">
            {" "}
            <InputGroup borderRadius={50} border="1px solid black" size="sm">
              <InputLeftAddon
                borderRadius={50}
                mt={2}
                mb={2}
                border="none"
                borderRight="1px solid black"
                children={selects()}
              />
              <Input
                border="none"
                mt={2}
                mb={2}
                placeholder="Search SHOP.COM…"
              />
              <InputRightAddon
                cursor="pointer"
                borderRadius={50}
                border="none"
                bg="#202340"
                h=""
                borderLeft="1px solid black"
                children={<Search2Icon color="white" />}
              />
            </InputGroup>
          </Box>
          <Spacer />
          <Box display="flex" justifyContent="right" w="30%">
            <Link to="/">
              <Image
                w="100%"
                src=""
                alt="offer"
              ></Image>
            </Link>
          </Box>
        </Flex>

        <Flex mt={1}>
       
          <Spacer />
          <Box mt={2} w="45%">
            <Flex justifyContent="space-between" alignItems="center">
              {links.map((item) => (
                <NavLink key={item.path} to={item.path}>
                  <Text _hover={{ color: "#0098b8" }} fontSize="14px">
                    {item.title}
                  </Text>
                </NavLink>
              ))}
            </Flex>
          </Box>
          <Spacer />
          <Box mt={2} w="26%">
            <Flex alignItems="center" justifyContent="space-evenly">
              <Box>
                {/* < to="/login"> */}
                {isAuth?  <Flex  _hover={{ color: "#0098b8" }} alignItems="center">
                    <Button onClick={logoutUser}> <Avatar
                      size="sm"
                      _hover={{ background: "#0098b8" }}
                      bg="black" mr={2}
                    /> Log Out</Button>
                  </Flex> :  <Link to="/login">  <Flex  _hover={{ color: "#0098b8" }} alignItems="center">
                    <Avatar
                      size="sm"
                      _hover={{ background: "#0098b8" }}
                      bg="black"
                    />
                    
                    <Text ml={2}>Sign in</Text>
                  </Flex> 
                  </Link>}
                

              </Box>
              <Box>
                <Link to="/orders">
                  {" "}
                  <Flex _hover={{ color: "#0098b8" }} alignItems="center">
                    <Icon w={6} h={6} as={RepeatClockIcon} />
                    <Text ml={2}>Orders</Text>
                  </Flex>
                </Link>
              </Box>
              <Box>
                <Link to="/cart">
                  {" "}
                  <Flex _hover={{ color: "#0098b8" }} alignItems="center">
                    <Avatar
                      size="sm"
                      _hover={{ background: "#0098b8" }}
                      bg="transparent"
                      src="https://img.icons8.com/material-rounded/344/shopping-cart.png"
                    />
                    <Text ml={2}>Cart</Text>
                  </Flex>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <hr></hr>
      <Box
        bg="#f0f1e0"
       
        color="black"
        w="100%"
        p={2}
      >
        <Flex fontSize="13px" justifyContent="space-between">
          <Box>
            <Flex>
              
              <Text ml={2}>Your Shop Consultant is </Text>
              <Link to="/">
                <Text fontWeight="bold" textDecoration="underline" ml={1}>
                  SHOP Corporate Services
                </Text>
              </Link>
            </Flex>
          </Box>
          <Box>
            <Text mr={2}>Earn up to <b>50% Cashback</b> on eligible purchases.<Link to="/"><b><u>Learn More</u></b></Link></Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
