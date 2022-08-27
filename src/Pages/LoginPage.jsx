import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { PasswordInput } from "./PasswordInput";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <Box width="100%" height={"100vh"}>
      <Box width="100%" height={"80px"}></Box>

      {/* This is Yorur issue */}

      <Flex width={"100%"} bg="#e6f5ff" height={"50px"}>
        <Text width="80%" margin="auto">
          My Bath & Body Works Rewards is now available nationwide!
        </Text>
      </Flex>

      <Box marginRight="60rem" color="gray" fontSize="12px">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>SIGN IN OR SIGN UP</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>

      {/* This is your issue */}

      <Box width="70%" margin="auto" marginTop="40px">
        <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67bc4699/images/banners/sign-in_d.png?yocs=s_" />
      </Box>
      <Box with="80%" margin="auto" marginTop="60px">
        <Text as="b" color="gray" marginRight="60rem">
          Sign In or Sign Up
        </Text>

        <Box
          width={"75%"}
          height="1px"
          bg="black"
          margin="auto"
          marginTop="10px"
        ></Box>

        {/* signin or sign up part */}

        <Flex
          width="75%"
          height={"300px"}
          margin={"auto"}
          mt="1rem"
          justifyContent={"space-between"}
        >
          <Box mt="20px">
            <Text>SIGN IN</Text>
            <Text>If you already have an account with us, sign in below</Text>
            <Text textAlign="start" mt="10px">
              Email Adress
            </Text>
            <Input />
            <Text textAlign="start">Password</Text>
            <PasswordInput />

            <HStack mt="40px">
              <Box>
                <Link to="/my-account/reset">ForgetPassword?</Link>
              </Box>
              <Spacer></Spacer>
              <Box>
                <Checkbox>Remember Me</Checkbox>
              </Box>
            </HStack>
            <Button
              mt="30px"
              marginTop="20px"
              bgColor="#333333"
              color="#FFFFFF"
              fontSize="11px"
              padding="0px 30.9375px"
            >
              SIGN IN
            </Button>
          </Box>

          <Box height={"150%"} width="2px" bg="gray"></Box>

          <Box marginTop="20px">
            <Text color="gray">SIGN UP</Text>
            <Text color="gray">
              Create an account to access the best of your favorite store
            </Text>
            <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0f47b7b9/images/loyalty/boc-launch-prospects_lacb_0.jpg?yocs=s_"></Image>

            <Button
              marginTop="20px"
              bgColor="#333333"
              color="#FFFFFF"
              fontSize="11px"
              padding="0px 30.9375px"
            >
              <Link to="/login/singup"> CREATE AN ACCOUNT</Link>
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default LoginPage;
