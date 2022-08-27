import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useReducer } from "react";
import { PasswordInput } from "./PasswordInput";
import { account } from "../Redux/AuthReducer/action";
import * as types from "../Redux/AuthReducer/actiontypes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "name":
      return { ...state, name: payload };
    case "email":
      return { ...state, email: payload };
    case "password":
      return { ...state, password: payload };
  }
};

export const Account = () => {
  const [state, setState] = useReducer(reducer, initialState);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(account(state))
      .then((r) => {
        if (r === types.CREATE_ACCOUNT_SUCCESS) {
          navigate("/", { replace: true });
        }
      })
      .catch((r) => {
        console.log("here");
        console.log(r);
      });
  };
  return (
    <Box width="100%">
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
        <Image src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6f07f823/images/banners/create-account_d.png?yocs=s" />
      </Box>
      <Box margin="auto" marginTop="60px">
        <Text color="gray.700" marginRight="50rem" fontSize="30px">
          Create an Account
        </Text>

        <Box
          width={"75%"}
          height="1px"
          bg="black"
          margin="auto"
          marginTop="10px"
        ></Box>
        <FormControl isRequired width="30rem" margin="auto">
          <FormLabel>First name</FormLabel>
          <Input
            onChange={(e) =>
              setState({ type: "name", payload: e.target.value })
            }
          ></Input>
          <FormLabel>Last name</FormLabel>
          <Input></Input>
          <FormLabel>Email</FormLabel>
          <Input
            onChange={(e) =>
              setState({ type: "email", payload: e.target.value })
            }
          ></Input>
          <FormLabel>Confirm Email</FormLabel>
          <Input
            onChange={(e) =>
              setState({ type: "email", payload: e.target.value })
            }
          ></Input>
          <FormLabel>ZIP/Postal Code</FormLabel>
          <Input></Input>
          <FormLabel>Phone</FormLabel>
          <Input></Input>
          <FormLabel>Password</FormLabel>
          <Input
            onChange={(e) =>
              setState({ type: "password", payload: e.target.value })
            }
          ></Input>
        </FormControl>

        <Button
          marginTop="20px"
          bgColor="#333333"
          color="#FFFFFF"
          fontSize="11px"
          padding="0px 30.9375px"
          onClick={handleSubmit}
        >
          CREATE AN ACCOUNT
        </Button>
        <Text>Questions?</Text>
        <Text>We’re here for you! Call us at 1-800-756-5005.</Text>
      </Box>
    </Box>
  );
};
