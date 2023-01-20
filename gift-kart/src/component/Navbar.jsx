import React from "react";
import MONEY from "../Images/GK.png"
import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Flex,
    Box,
    useDisclosure,
    Stack,
    Link,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Button,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

function Navbar() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (

        <>
            <Flex
                py={2}
                px={4}
                direction={["column", "row"]}
                justify="space-around"
                bg="green"
            >

                <Flex alignItems="center" wraps="wrap">
                    <Flex flexGrow={1} justify="center">
                        <Box ml={[4, 0]}>
                            <Image src={MONEY} alt="GiftKart" width='250px' marginLeft='50px' />
                        </Box>

                        <Box ml={[4, 0]}>
                            <InputGroup>
                                <Input
                                    placeholder="Search for products, brands and more"
                                    bg='white'
                                    w="450px"
                                    marginLeft='20px'
                                    size='sm'
                                    h='38px'
                                    marginTop = '28px'
                                />

                                <InputRightElement children={<SearchIcon color="#2874f0"   marginTop = '36px' />} />
                            </InputGroup>
                        </Box>

                        <Box ml={[4, 0]}>
                            <Button bg='white' 
                                    w="150px"
                                    marginLeft='20px'
                                    size='sm'
                                    h='38px'
                                    marginTop = '28px' 
                                    color="#2874f0">
                                Login
                            </Button>
                        </Box>
                    </Flex>

                    <HamburgerIcon
                        onClick={isOpen ? onClose : onOpen}
                        display={["inline", "none"]}
                    />
                </Flex>

                <Flex
                    display={[isOpen ? "flex" : "none", "flex"]}
                >

                    <Stack align="center" direction={["column", "row"]} spacing="30px"
                        marginLeft='100px' color="white">

                        <Link>Become a seller</Link>
                        <Link>More</Link>
                        <Link>Cart</Link>

                        {/* .. */}

                        <Link>Wishlist</Link>

                    </Stack>

                </Flex>

            </Flex>
        </>

    );
};


export default Navbar;