import styles from "../CSS/Footer.module.css"
import { Flex,Box,Text,Input, InputGroup, InputRightElement,Button, Heading, Stack} from "@chakra-ui/react"
export const Footer = ()=>{
  return <div>
    <Box width={"100%"} border="1px solid red" height="400px">
      <Flex justifyContent={"space-around"}>
        <Box width={"30%"} height="300px" border={"1px solid blue"}>
          <Text textAlign={"initial"} fontSize={"15px"}>Get email offers & the latest news from Bath & Body Works!</Text>
          <Text>Enter Email</Text>
          <Input borderRadius={"0px"}></Input>
          <Text>Enter Confirm Email</Text>
            <Input borderRadius={"0px"} width="80%"></Input>
            <Button width="20%" background={"black"} color="white" borderRadius={"0px"} marginTop="-7px">Submit</Button>

        </Box>
         <Box width={"15%"} height="300px" border={"1px solid blue"}>
          <Stack direction="column" gap="10px">
            <Heading as={"h1"} fontSize="20px">Customer Care</Heading>
            <Text> Help & FAQs</Text>
            <Text> Shipping</Text>
            <Text> Returns & Exchanges</Text>
            <Text> Order Tracking</Text>
            <Text> Corporate Sales & Gifts</Text>
            <Text> Contact Us</Text>
          </Stack>

        </Box>
        <Box width={"15%"} height="300px" border={"1px solid blue"}>
          <Stack direction="column" gap="10px">
            <Heading as={"h1"} fontSize="20px">My account</Heading>
            <Text> Help & FAQs</Text>
            <Text> Shipping</Text>
            <Text> Returns & Exchanges</Text>
            <Text> Order Tracking</Text>
            <Text> Corporate Sales & Gifts</Text>
            <Text> Contact Us</Text>
          </Stack>

        </Box>
        <Box width={"15%"} height="300px" border={"1px solid blue"}>
          <Stack direction="column" gap="10px">
            <Heading as={"h1"} fontSize="20px">Discover</Heading>
            <Text> Help & FAQs</Text>
            <Text> Shipping</Text>
            <Text> Returns & Exchanges</Text>
            <Text> Order Tracking</Text>
            <Text> Corporate Sales & Gifts</Text>
            <Text> Contact Us</Text>
          </Stack>

        </Box>
        <Box width={"15%"} height="300px" border={"1px solid blue"}>
          <Stack direction="column" gap="10px">
            <Heading as={"h1"} fontSize="20px">Find Us</Heading>
            <Text> Help & FAQs</Text>
            <Text> Shipping</Text>
            <Text> Returns & Exchanges</Text>
            <Text> Order Tracking</Text>
            <Text> Corporate Sales & Gifts</Text>
            <Text> Contact Us</Text>
          </Stack>

        </Box>
      </Flex>
    </Box>
    
  </div>
}
