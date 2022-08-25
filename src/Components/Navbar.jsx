import {
  Box,
  InputGroup,
  Flex,
  Input,
  Image,
  Avatar,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
// import { Search2Icon } from "@chakra-ui/icons";

export const Navbar = () => {
  return (
    <>
      <Box marginTop={"10px"}>
        <Flex>
          <Image
            margin={"0px 50px 0px 33%"}
            height={"34px"}
            width={"340px"}
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwd76d640f/images/svg-icons/Logos-main.svg?yocs=o_s_"
          />
          <InputGroup width={"300px"} outlineColor="grey">
            <Input
              borderRadius={"0px"}
              focusBorderColor="grey.500"
              placeholder={"Search by fragrance or Product..."}
            />
            {/* <InputRightElement children={<Search2Icon color="blue.300" />} /> */}
          </InputGroup>
          <Avatar
            cursor={"pointer"}
            src="https://bit.ly/broken-link"
            size="md"
            marginLeft={"10px"}
            marginTop="-5px"
          />

          <Image
            cursor={"pointer"}
            marginLeft={"20px"}
            marginTop="-7px"
            height={"45px"}
            width="45px"
            src="https://image.shutterstock.com/image-vector/shopping-cart-icon-bag-260nw-1520865410.jpg"
          ></Image>
        </Flex>
      </Box>
      <Box marginTop={"20px"}>
        <Tabs justifyContent={"center"} width={"100%"}>
          <Flex justifyContent={"space-around"}>
            <TabList fontSize={"10px"}>
              <Tab fontSize={"12px"}>TOP OFFERS</Tab>
              <Tab fontSize={"12px"}>BODY CARE</Tab>
              <Tab fontSize={"12px"}>CANDLES</Tab>
              <Tab fontSize={"12px"}>HOME FRAGRANCE</Tab>
              <Tab fontSize={"12px"}>HAND SOAPS SANITIZERS</Tab>
              <Tab fontSize={"12px"}>MEN'S</Tab>
              <Tab fontSize={"12px"}>GIFTS</Tab>
            </TabList>
          </Flex>
          <hr />
        </Tabs>
      </Box>
    </>
  );
};
