// import {
//   Box,
//   InputGroup,
//   Flex,
//   Input,
//   Image,
//   Avatar,
//   Tabs,
//   TabList,
//   Tab,
// } from "@chakra-ui/react";
// import { useSelector } from "react-redux";
// import styles from "../CSS/Navbar.module.css";

// import { Link, useNavigate } from "react-router-dom";

// // import { Search2Icon } from "@chakra-ui/icons";
// import { BsBagCheckFill } from "react-icons/bs";

// export const Navbar = () => {
//   const getdata = useSelector((state) => state.cartreducer.carts);

//   // console.log(data);

//   const navigate = useNavigate();

//   const handlehome = () => {
//     navigate("/");
//   };

//   const handleShopping = () => {
//     navigate("/shopping");
//   };

//   return (
//     <>
//       <Box marginTop={"10px"}>
//         <Flex>
//           <Image
//             className={styles.mytitle}
//             onClick={handlehome}
//             margin={"0px 50px 0px 33%"}
//             height={"34px"}
//             width={"340px"}
//             src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwd76d640f/images/svg-icons/Logos-main.svg?yocs=o_s_"
//           />

//           <InputGroup width={"200px"} outlineColor="grey">
//             <Input
//               className={styles.inputtab}
//               borderRadius={"0px"}
//               focusBorderColor="grey.500"
//               placeholder={"Search by fragrance or Product..."}
//             />
//             {/* <InputRightElement children={<Search2Icon color="blue.300" />} /> */}
//           </InputGroup>
//           <Link to="/login">
//             <Avatar
//               className={styles.avatar}
//               cursor={"pointer"}
//               src="https://bit.ly/broken-link"
//               size="md"
//               marginLeft={"10px"}
//               marginTop="-5px"
//             />
//           </Link>

//           <Flex alignItems="center" gap="2">
//             <Link to="/cart">
//               {getdata.length > 0 && <div>{getdata.length}</div>}

//               <BsBagCheckFill className={styles.mybag} size={26} />
//             </Link>
//           </Flex>
//         </Flex>
//       </Box>
//       <Box marginTop={"20px"}>
//         <Tabs justifyContent={"center"} width={"100%"}>
//           <Flex justifyContent={"space-around"}>
//             <TabList fontSize={"10px"}>
//               <Tab fontSize={"12px"}>TOP OFFERS</Tab>
//               <Tab onClick={handleShopping} fontSize={"12px"}>
//                 BODY CARE
//               </Tab>
//               <Tab fontSize={"12px"}>CANDLES</Tab>
//               <Tab fontSize={"12px"}>HOME FRAGRANCE</Tab>
//               <Tab fontSize={"12px"}>HAND SOAPS SANITIZERS</Tab>
//               <Tab fontSize={"12px"}>MEN'S</Tab>
//               <Tab fontSize={"12px"}>GIFTS</Tab>
//             </TabList>
//           </Flex>
//         </Tabs>
//       </Box>
//     </>
//   );
// };

import styles from "../CSS/Navbar.module.css";
import { ImLocation2 } from "react-icons/im";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsFillHandbagFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
      <div className={styles.navtop}>
        <div>
          <h1 className={styles.text}>
            POINTS,PERKS,EXCLUSIVE.{" "}
            <span style={{ textDecoration: "underline" }}>Join Rewards!</span>
          </h1>
        </div>
        <div style={{ display: "flex" }}>
          <ImLocation2 size={25} />
          <h1 className={styles.text}>
            PICK UP IN STORE{" "}
            <span style={{ textDecoration: "underline" }}>set store</span>{" "}
          </h1>
        </div>
      </div>
      {/* ///////////////////////////// */}
      <div>
        <div className={styles.navtit}>
          <img
            className={styles.title}
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dwd1c3a941/images/svg-icons/Logos-main.svg?yocs=o_s_"
            alt="Bath&BodyWorks"
          />
          <input
            className={styles.navinput}
            placeholder="Search by Fragrance"
            type="text"
          />
          <CgProfile style={{ color: "blue", margin: "5px" }} size={30} />
          <BsFillHandbagFill
            style={{ color: "blue", margin: "5px" }}
            size={30}
          />
        </div>
      </div>
      <div>
        <div className={styles.navlist}>
          <h1>TOP OFFERS</h1>
          <h1
            style={{
              textDecoration: "underline",
              color: "blue",
              textDecorationColor: "red",
            }}
          >
            BODY CARE
          </h1>
          <h1>CANDLES</h1>
          <h1>WALLFLOWER & AIR FRESHENERS</h1>
          <h1>HAND SOAPS AND SANITIZERS</h1>
          <h1>MEN'S SHOP</h1>
          <h1>GIFTS</h1>
          <h1 style={{ color: "red" }}>FALL SHOP</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
