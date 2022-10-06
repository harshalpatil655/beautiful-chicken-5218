import styles from "../CSS/Footer.module.css";
import {
  Flex,
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { FaBeer } from "react-icons/fa";

import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { BsInstagram, BsFacebook } from "react-icons/bs";
export const Footer = () => {
  return (
    <div className={styles.myfooter} >
      <Box width={"100%"} marginTop={"40px"}>
        <Flex justifyContent={"space-around"}>
          <Box width={"30%"} height="300px">
            <Box>
              <Text fontSize={"15px"}>
                Get email offers & the latest news from Bath & Body Works!
              </Text>
              <Text textAlign={"initial"}>Enter Email</Text>
              <Input borderRadius={"0px"}></Input>
              <Text textAlign={"initial"} marginTop="20px">
                Enter Confirm Email
              </Text>
              <Input borderRadius={"0px"} width="80%"></Input>
              <Button
                width="20%"
                background={"black"}
                color="white"
                borderRadius={"0px"}
                marginTop="-7px"
              >
                Submit
              </Button>
            </Box>
            <Box marginTop="20px">
              <Heading textAlign={"initial"} fontSize={"sm"}>
                GET CONNECTED
              </Heading>
              <Flex gap={"10px"}>
                <AiFillTwitterCircle
                  style={{ height: "30px", width: "30px" }}
                />
                <BsInstagram
                  style={{ height: "30px", width: "30px" }}
                ></BsInstagram>{" "}
                <BsFacebook style={{ height: "30px", width: "30px" }} />
                <AiFillYoutube
                  style={{ height: "30px", width: "30px" }}
                ></AiFillYoutube>
              </Flex>
            </Box>
          </Box>
          <Box width={"15%"} height="300px">
            <Stack direction="column" gap="10px">
              <Heading as={"h1"} fontSize="20px" textAlign={"initial"}>
                Customer Care
              </Heading>
              <Text textAlign={"initial"}> Help & FAQs</Text>
              <Text textAlign={"initial"}> Shipping</Text>
              <Text textAlign={"initial"}> Returns & Exchanges</Text>
              <Text textAlign={"initial"}> Order Tracking</Text>
              <Text textAlign={"initial"}> Corporate Sales & Gifts</Text>
              <Text textAlign={"initial"}> Contact Us</Text>
            </Stack>
          </Box>
          <Box width={"15%"} height="300px">
            <Stack direction="column" gap="10px">
              <Heading textAlign={"initial"} as={"h1"} fontSize="20px">
                My account
              </Heading>
              <Text textAlign={"initial"}> Sign In or Sign Up</Text>
              <Text textAlign={"initial"}> Order Tracking</Text>
              <Text textAlign={"initial"}> My Auto Refresh</Text>
              <Text textAlign={"initial"}> My Love-It List</Text>
              <Text textAlign={"initial"}> Contact Us</Text>
            </Stack>
          </Box>
          <Box width={"15%"} height="300px">
            <Stack direction="column" gap="10px">
              <Heading textAlign={"initial"} as={"h1"} fontSize="20px">
                Discover
              </Heading>
              <Text textAlign={"initial"}> About Us</Text>
              <Text textAlign={"initial"}> Gift Cards</Text>
              <Text textAlign={"initial"}> Shop by Fragrance</Text>
              <Text textAlign={"initial"}> Order Tracking</Text>
              <Text textAlign={"initial"}> Product Ingredients</Text>
            </Stack>
          </Box>
          <Box width={"15%"} height="300px">
            <Stack direction="column" gap="10px">
              <Heading textAlign={"initial"} as={"h1"} fontSize="20px">
                Find Us
              </Heading>
              <Text textAlign={"initial"}> Store Locator</Text>
              <Text textAlign={"initial"}> Global Locations</Text>
            </Stack>
          </Box>
        </Flex>
        <img
          className={styles.myimg}
          style={{ marginLeft: "68%" }}
          height={"200px"}
          width="300px"
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0c8e6af7/images/evergreen/Happiness_Guaranteedtimes2_v2.jpg?yocs=o_s_"
          alt=""
        />
      </Box>
    </div>
  );
};
