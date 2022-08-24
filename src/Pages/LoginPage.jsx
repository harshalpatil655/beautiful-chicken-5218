import React from "react";
// import "../CSS/Login.module.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  textDecoration,
} from "@chakra-ui/react";

import {
  Stack,
  HStack,
  VStack,
  Box,
  Image,
  Text,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  show,
  InputRightElement,
  Button,
  Flex,
} from "@chakra-ui/react";

export const LoginPage = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  // marginRight: "70rem", color: "#454545", fontSize: "12px"

  return (
    <Container>
      <Text bg="#e6f5ff" width="100rem" margin="auto">
        My Bath & Body Works Rewards is now available nationwide!
      </Text>

      <Box>
        <Breadcrumb>
          <BreadcrumbLink style={{ color: "gray" }} href="">
            Home /{" "}
          </BreadcrumbLink>

          <BreadcrumbLink fontSize="12px"> SIGN IN OR SIGN UP</BreadcrumbLink>
        </Breadcrumb>
      </Box>

      <Box>
        <Stack>
          <Box>
            <Image
              style={{ width: "55rem" }}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s"
            ></Image>
          </Box>
        </Stack>

        <Text
        // style={{
        //   color: "#333333",
        //   fontSize: "30px",
        //   marginRight: "38rem",
        // }}
        >
          Sign In or Sign Up
        </Text>
        {/* <hr style={{ maxWidth: "53rem" }} /> */}
      </Box>

      {/* <SimpleGrid column={[2, null, 1]}> */}
      {/* <Flex>
        <Text>SIGN IN</Text>
        <Text color="red">
          If you already have an account with us, sign in below
        </Text>
        <Text>Email Address</Text>
        <Input></Input>
        <InputGroup size="md">
          <Input pr="4.5rem" type={show ? "text" : "password"} />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Box>
          <Text>SIGN UP</Text>
          <Text></Text>
        </Box>
      </Flex> */}
      {/* </SimpleGrid> */}
    </Container>
  );
};
