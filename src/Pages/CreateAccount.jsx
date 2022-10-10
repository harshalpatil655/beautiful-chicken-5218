import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
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
  firstName: "",
  lastName:"",
  email: "",
  temail:"",
  password: "",
  mobileNo:""
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "first_name":
      return { ...state, firstName: payload };
    case "last_name":
      return { ...state, lastName: payload };
    case "email":
      return { ...state, email: payload };
    case "temail":
      return { ...state, temail: payload };
    case "mobileNo":
      return { ...state, mobileNo: payload };
    case "password":
      return { ...state, password: payload };
  }
};

export const Account = () => {
  const [state, setState] = useReducer(reducer, initialState);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault()
    console.log(state)

    if(state.firstName==="" || state.lastName==="") return

    if(state.email!==state.temail){
      alert("Email and confirm email not matched")
      return
    }

    if(!ValidateEmail(state.email)){
      alert("Invalid email id")
      return
    }
    if(!phonenumber(state.mobileNo)){
      alert("Invalid mobile no")
      return
    }

    function phonenumber(phone){
      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if(phone.match(phoneno)) return true
      else return false;
    }

    function ValidateEmail(mail) 
    {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
          return (true)
        }
          return (false)
    }

    const {firstName,lastName,mobileNo,email,password} = state

    const data = {firstName,lastName,email,password,mobileNo}

    dispatch(account(data))
      .then((r) => {
        if (r === types.CREATE_ACCOUNT_SUCCESS) {
          alert("You have successfully Signup");
          navigate("/login", { replace: true });
        }
      })
      .catch((r) => {
        console.log("here");
        // console.log(r);
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
        <form action="" onSubmit={handleSubmit}>
        <FormControl isRequired width="30rem" margin="auto">
          <FormLabel>First name</FormLabel>
          <Input
            onChange={(e) =>
              setState({ type: "first_name", payload: e.target.value })
            }
          ></Input>
          <FormLabel>Last name</FormLabel>
          <Input onChange={(e) =>
              setState({ type: "last_name", payload: e.target.value })
            }></Input>
          <FormLabel>Email</FormLabel>
          <Input
            onChange={(e) =>
              setState({ type: "temail", payload: e.target.value })
            }
          ></Input>
          <FormLabel>Confirm Email</FormLabel>
          <Input
            onChange={(e) =>
              setState({ type: "email", payload: e.target.value })
            }
          ></Input>
          <FormLabel>ZIP/Postal Code</FormLabel>
          <Input type={"number"}></Input>
          <FormLabel>Phone</FormLabel>
          <Input  onChange={(e) =>
              setState({ type: "mobileNo", payload: e.target.value })
            } type={"number"}></Input>
          <FormLabel>Password</FormLabel>
          <Input type={"password"}
            onChange={(e) =>
              setState({ type: "password", payload: e.target.value })
            }
          ></Input>
        </FormControl>

        <input type={"submit"} name="CREATE AN ACCOUNT"
          
          value="CREATE AN ACCOUNT"
          style={{
            marginTop:"20px",
            backgroundColor:"#333333",
            color:"#FFFFFF",
            fontSize:"11px",
            padding:"0px 30.9375px",
            height:"40px",
            borderRadius:"5px"
          }}
        />
        </form>
       
        <Text>Questions?</Text>
        <Text>We’re here for you! Call us at 1-800-756-5005.</Text>
      </Box>
    </Box>
  );
};
