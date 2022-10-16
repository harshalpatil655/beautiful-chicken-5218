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
  InputRightElement,
} from "@chakra-ui/react";
import {
  Drawer,
 DrawerBody,
 DrawerFooter,
 DrawerHeader,
 DrawerOverlay,
 DrawerContent,
 DrawerCloseButton,
 Grid
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react"
import { Search2Icon,HamburgerIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import styles from "../CSS/Navbar.module.css";
import { MobNavbar } from "./MobNavbar";

export const Navbar = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const placement = "left"

  const navigate = useNavigate();

  const handlehome = () => {
    navigate("/");
  };

  const handleShopping = () => {
    navigate("/shopping");
  };

  return (
    <>
    <div className={styles.mobnav}>
      <MobNavbar></MobNavbar>
    </div>
          
<div className={styles.desk}>
        <Box marginTop={"10px"}>
          <Flex justifyContent={"space-around"}>
            <Image
              className={styles.mytitle}
              onClick={handlehome}
              margin={"0px 50px 0px 33%"}
              height={"34px"}
              width={"240px"}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwd76d640f/images/svg-icons/Logos-main.svg?yocs=o_s_"
            />
            <Flex justifyContent={"space-evenly"} width="30%">
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

              <Link to="/cart">
                  {/* {getdata.length > 0 && <div>{getdata.length}</div>}{" "}
                  <BsFillHandbagFill
                  style={{ color: "blue",marginLeft:"10px"}}
                  size={30}
                  children={"123"}
                  ></BsFillHandbagFill> */}
                  <div className={styles.cart}>{getdata.length > 0 && getdata.length}</div>
              </Link>
            </Flex>
            
          </Flex>
        </Box>
        <Box marginTop={"20px"}>
          <Tabs justifyContent={"center"} width={"100%"}>
            <Flex justifyContent={"space-around"}>
              <TabList fontSize={"10px"}>
                <Tab fontSize={"12px"}>TOP OFFERS</Tab>
                <Tab onClick={handleShopping} fontSize={"12px"}>
                  BODY CARE
                </Tab>
                <Tab fontSize={"12px"}>CANDLES</Tab>
                <Tab fontSize={"12px"}>HOME FRAGRANCE</Tab>
                <Tab fontSize={"12px"}>HAND SOAPS SANITIZERS</Tab>
                <Tab fontSize={"12px"}>MEN'S</Tab>
                <Tab fontSize={"12px"}>GIFTS</Tab>
              </TabList>
            </Flex>
          </Tabs>
        </Box>
    </div>
      
    </>
  );
};


// import styles from "../CSS/Navbar.module.css";
// import { ImLocation2 } from "react-icons/im";
// import React from "react";
// import { CgProfile } from "react-icons/cg";
// import { BsFillHandbagFill } from "react-icons/bs";
// import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const getdata = useSelector((state) => state.cartreducer.carts);
//   const navigate = useNavigate();

//   const handleshopping = () => {
//     navigate("/shopping");
//   };
//   const handlelogin = () => {
//     navigate("/login");
//   };
//   const handlehome = () => {
//     navigate("/");
//   };

//   return (
//     <div>
//       <div className={styles.navtop}>
//         <div>
//           <h1 className={styles.text}>
//             POINTS,PERKS,EXCLUSIVE.{" "}
//             <span style={{ textDecoration: "underline" }}>Join Rewards!</span>
//           </h1>
//         </div>
//         <div style={{ display: "flex" }}>
//           <ImLocation2 size={25} />
//           <h1 className={styles.text}>
//             PICK UP IN STORE{" "}
//             <span style={{ textDecoration: "underline" }}>set store</span>{" "}
//           </h1>
//         </div>
//       </div>
//       {/* ///////////////////////////// */}
//       <div>
//         <div className={styles.navtit}>
//           <img
//             className={styles.title}
//             onClick={handlehome}
//             src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwd1c3a941/images/svg-icons/Logos-main.svg?yocs=o_s_"
//             alt="Bath&BodyWorks"
//           />
//           <input
//             className={styles.navinput}
//             placeholder="Search by Fragrance"
//             type="text"
//           />
//           <CgProfile
//             onClick={handlelogin}
//             style={{ color: "blue", margin: "5px" }}
//             size={30}
//           />

//           <Link to="/cart">
//             {getdata.length > 0 && <div>{getdata.length}</div>}{" "}
//             <BsFillHandbagFill
//               style={{ color: "blue", margin: "5px" }}
//               size={30}
//             />
//           </Link>
//         </div>
//       </div>
//       <div>
//         <div className={styles.navlist}>
//           <h1>TOP OFFERS</h1>
//           <h1
//             style={{
//               textDecoration: "underline",
//               color: "blue",
//               textDecorationColor: "red",
//             }}
//             onClick={handleshopping}
//           >
//             BODY CARE
//           </h1>
//           <h1>CANDLES</h1>
//           <h1>WALLFLOWER & AIR FRESHENERS</h1>
//           <h1>HAND SOAPS AND SANITIZERS</h1>
//           <h1>MEN'S SHOP</h1>
//           <h1>GIFTS</h1>
//           <h1 style={{ color: "red" }}>FALL SHOP</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Navbar;
