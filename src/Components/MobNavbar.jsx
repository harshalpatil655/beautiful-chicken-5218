import { HamburgerIcon } from "@chakra-ui/icons"
import {
     Image,
     Flex,
     Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    InputGroup,
    Input,
    InputRightElement,
    Avatar,
    Tab,
    TabList,
    Tabs,
    Box,
    Grid
} from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
 import { useDisclosure } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import styles from "../CSS/Navbar.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

 export const MobNavbar = ()=>{
   const getdata = useSelector((state) => state.cartreducer.carts);
   const { isOpen, onOpen, onClose } = useDisclosure()
   const placement = "left"

    

    const navigate = useNavigate()

    const handleShopping = () => {
        navigate("/shopping");
      };
    return <>
        <Flex justifyContent={"space-between"}>
            <HamburgerIcon height={"30px"} width="30px" marginLeft={"20px"} onClick={onOpen}/>
            <Link to={"/"}>
                <Image 
                    height={"34px"}
                    width={"240px"}
                    src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwd76d640f/images/svg-icons/Logos-main.svg?yocs=o_s_">    
                </Image>
            </Link>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>
                <Flex justifyContent={"space-between"}>
                    <InputGroup width={"200px"} outlineColor="grey">
                    <Input
                        className={styles.inputtab}
                        borderRadius={"0px"}
                        focusBorderColor="grey.500"
                        placeholder={"Search by fragrance or Product..."}
                        height="30px"
                        width={"200px"}
                    />
                    <InputRightElement children={<Search2Icon marginBottom={"10px"} alignItems={"center"} color="blue.500" />} />
                    </InputGroup>
                    <Link to="/login">

                
                    <Avatar
                    className={styles.avatar}
                    cursor={"pointer"}
                    src="https://bit.ly/broken-link"
                    size="sm"
                    />
                    </Link>
              </Flex>
                </DrawerHeader>
        <DrawerBody>
            <Grid marginTop={"20px"} >
                        <div className={styles.moblist} onClick={handleShopping} fontSize={"12px"}>TOP OFFERS</div >
                        <div className={styles.moblist} onClick={handleShopping} fontSize={"12px"}>BODY CARE</div >
                        <div className={styles.moblist} onClick={handleShopping} fontSize={"12px"}>CANDLES</div >
                        <div className={styles.moblist} onClick={handleShopping} fontSize={"12px"}>HOME FRAGRANCE</div >
                        <div className={styles.moblist} onClick={handleShopping} fontSize={"12px"}>HAND SOAPS SANITIZERS</div >
                        <div className={styles.moblist} onClick={handleShopping} fontSize={"12px"}>MEN'S</div >
                        <div className={styles.moblist} onClick={handleShopping} fontSize={"12px"}>GIFTS</div >
            </Grid>
        </DrawerBody>
    </DrawerContent>
</Drawer>
           
            <Link to="/cart">
                    {/* {getdata.length > 0 && <div>{getdata.length}</div>}{" "}
                    <BsFillHandbagFill
                    style={{ color: "blue",marginLeft:"10px"}}
                    size={30}
                    children={"123"}
                    ></BsFillHandbagFill> */}
                    <div style={{marginRight:"20px"}} className={styles.cart}>{getdata.length > 0 && getdata.length}</div>
            </Link>
        </Flex>
        </>
}