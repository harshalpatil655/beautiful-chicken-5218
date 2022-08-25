import React from "react";
import styles from "../CSS/HomePage.module.css";
import { BsFillSunFill } from "react-icons/bs";
import { Box,Heading,HStack,Stack,Text,Flex,Button} from "@chakra-ui/react";

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <div style={{border:"1px dashed black",width:"90%",marginLeft:"5%"}}>
        <img width={"100%"} height="250px" src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw10c21dc4/images/Fall2022/boc-launch-prospects_hm_0.gif?yocs=s_" alt="" />
      </div>
      <Box background={"gray.200"} w="94%" height={"300px"} marginLeft="3%" marginTop={"30px"}>
        <Box  marginTop={"30px"}>
        <Heading as='h2' size='lg' noOfLines={1} color="black" >
          TODAY'S TOP OFFERS
        </Heading>
        </Box>
          <Flex justifyContent={"space-around"} marginTop="20px">
          <Box background={"white"} color="black" width={"20%"} height="200px">
              <Text>All Single Wick Candles</Text>
              <Text fontSize={"2xl"}>$6.25</Text>
              <Text>Limit 20 with code: COZYHOME</Text>
              <Button background={"black"} borderRadius="0px" color={"white"} width="100px" marginTop={"20px"}>SHOP</Button>
            </Box>
            <Box background={"white"} color="black" width={"20%"} height="200px">
              <Text>All Single Wick Candles</Text>
              <Text fontSize={"2xl"}>$6.25</Text>
              <Text>Limit 20 with code: COZYHOME</Text>
              <Button background={"black"} borderRadius="0px" color={"white"} width="100px" marginTop={"20px"}>SHOP</Button>
            </Box>
            <Box background={"white"} color="black" width={"20%"} height="200px">
              <Text>All Single Wick Candles</Text>
              <Text fontSize={"2xl"}>$6.25</Text>
              <Text>Limit 20 with code: COZYHOME</Text>
              <Button background={"black"} borderRadius="0px" color={"white"} width="100px" marginTop={"20px"}>SHOP</Button>
            </Box>
            <Box background={"white"} color="black" width={"20%"} height="200px">
              <Text>All Single Wick Candles</Text>
              <Text fontSize={"2xl"}>$6.25</Text>
              <Text>Limit 20 with code: COZYHOME</Text>
              <Button background={"black"} borderRadius="0px" color={"white"} width="100px" marginTop={"20px"}>SHOP</Button>
            </Box>
          </Flex>
      </Box>
      <div style={{border:"1px dashed black",width:"90%",marginLeft:"5%",marginTop:"20px"}}>
        <img width={"100%"} height="1700px" src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw45ce316f/images/Fall2022/bc_sweaterweather_fa1_hm.jpg?yocs=s_" alt="" />
      </div>
      <Box w="94%" height={"300px"} marginLeft="3%" marginTop={"30px"}>
        <Box  marginTop={"30px"}>
        <Heading as='h3' size='md' noOfLines={1} color="black" >
          Shop By Category
        </Heading>
        </Box>
          <Flex justifyContent={"space-around"} marginTop="20px">
            <Box color="black" width={"20%"} height="200px">
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw415d6bf8/images/Fall2022/bc_midamber_sfl_fa1_vn2.jpg?yocs=o_s_" alt="" height={"200px"} width="200px"/>
              <Text ><u>Body Care</u></Text>  
            </Box>
            <Box color="black" width={"20%"} height="200px">
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc2ca0b55/images/Fall2022/cndl_roadtrip_fa1_vn.jpg?yocs=o_s_" alt="" height={"200px"} width="200px"/>
              <Text ><u>Candles</u></Text>  
            </Box>
            <Box color="black" width={"20%"} height="200px">
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwf6577e0c/images/Fall2022/diff_Ingredient_fa1_vn.jpg?yocs=o_s_" alt="" height={"200px"} width="200px"/>
              <Text ><u>Wallflowers</u></Text>  
            </Box>
            <Box color="black" width={"20%"} height="200px">
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw806578a9/images/Fall2022/sp_roadtrip_decor_fa1_vn.jpg?yocs=o_s_" alt="" height={"200px"} width="200px"/>
              <Text ><u>HandSoaps</u></Text>  
            </Box>
            <Box color="black" width={"20%"} height="200px">
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc728cf91/images/Fall2022/bc_at_sanctuary_fa1_vn2.jpg?yocs=o_s_" alt="" height={"200px"} width="200px"/>
              <Text ><u>Armatherapy</u></Text>  
            </Box>
            <Box color="black" width={"20%"} height="200px">
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5a02a7ff/images/Fall2022/bc_ingredientled_fa1_vn2.jpg?yocs=o_s_  " alt="" height={"200px"} width="200px"/>
              <Text ><u>Men's</u></Text>  
            </Box>
          </Flex>
      </Box>
      <Box width={"80%"} marginLeft="9%">
        <Flex justifyContent={"space-around"} gap="20px">
            <Box width={"95%"} height="300px">
              <img height="300px" src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw241908af/images/Fall2022/xcat_roadtrip_fa1_hps.jpg?yocs=o_s_" alt="" />
              <Text color={"grey"}>From late summer to early fall, you just have to try it all. Your fragrance adventure starts now.</Text>
              <Text color={"black"}><b><u>Shop New Arrival's</u></b></Text>
            </Box>
            <Box width={"95%"}>
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwe67edd78/images/Fall2022/xcat_ingredientled_fa1_hps.jpg?yocs=o_s_" alt="" />
              <Text color={"grey"}>From late summer to early fall, you just have to try it all. Your fragrance adventure starts now.</Text>
              <Text color={"black"}><b><u>Shop New Arrival's</u></b></Text>
            </Box>
        </Flex>
      </Box>

      <Box width={"80%"} marginLeft="9%">
        <Flex justifyContent={"space-around"} gap="20px">
            <Box width={"95%"} height="300px">
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw48de6656/images/Fall2022/xcat_fall_pumpkin_fa1_hps.jpg?yocs=o_s_" alt="" />
              <Text color={"grey"}>From late summer to early fall, you just have to try it all. Your fragrance adventure starts now.</Text>
              <Text color={"black"}><b><u>Shop New Arrival's</u></b></Text>

            </Box>
            <Box width={"95%"}>
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw79491a41/images/Fall2022/bc_at_sanctuary_fa1_hps.jpg?yocs=o_s_" alt="" />
              <Text color={"grey"}>From late summer to early fall, you just have to try it all. Your fragrance adventure starts now.</Text>
              <Text color={"black"}><b><u>Shop New Arrival's</u></b></Text>
            </Box>
        </Flex>
      </Box>

      <Box width={"90%"} marginLeft="6%"marginTop={"20px"}>
        <img style={{height:"250px",width:"100%"}} src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwfd31720e/images/Summer2022/xcat_halloween_su3_hb.jpg?yocs=s_" alt="" width={"100%"} height={"300px"}  />
      </Box>

      <Box width={"90%"} marginLeft="6%"marginTop={"20px"}>
        <img style={{height:"100px",width:"100%"}} src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwda661154/images/Fall2022/xcat_stl-givelove_fa1_hb%E2%80%8B.jpg?yocs=s_" alt="" width={"100%"} height={"300px"}  />
      </Box>
              
      <Box width={"80%"} marginLeft="11%">
        <Flex justifyContent={"space-around"} gap="10px">
          <Button background={"black"} borderRadius="0px" color={"white"} width="150px" marginTop={"20px"}>TOP GIFT PICKS</Button>
          <Button background={"black"} borderRadius="0px" color={"white"} width="150px" marginTop={"20px"}>GIFT SETS</Button>
          <Button background={"black"} borderRadius="0px" color={"white"} width="150px" marginTop={"20px"}>GIFTS UNDER $15</Button>
          <Button background={"black"} borderRadius="0px" color={"white"} width="150px" marginTop={"20px"}>GIFTS UNDER $30</Button>
          <Button background={"black"} borderRadius="0px" color={"white"} width="150px" marginTop={"20px"}>GIFTS FOR HER</Button>
        </Flex>
      </Box>
      <Box w="90%" height={"300px"} marginLeft="7%" marginTop={"70px"}>
        <Box  marginTop={"30px"}>
          <Heading as='h3' size='md' noOfLines={1} color="black" >
            MORE GOOD THINGS, THIS WAY
          </Heading>
        </Box>
          <Flex justifyContent={"space-around"} marginTop="20px">
            <Box color="black" width={"15%"} height="150px">
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8f6e14ad/images/Spring2022/xcat_mwts-bopis_sp2_vn.jpg?yocs=o_s_" alt="" height={"200px"} width="200px"/>
              <Text fontSize={"sm"}><b><u>Shop—it’s fast, free, easy</u></b></Text>  
            </Box>
            <Box color="black" width={"15%"} height="150px">
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw644e724c/images/Spring2022/xcat_mwts-sms_sp2_vn.jpg?yocs=o_s_" alt="" height={"200px"} width="200px"/>
              <Text fontSize={"sm"}><b><u>Sign up for texts</u></b></Text>  
            </Box>
            <Box color="black" width={"15%"} height="150px">
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw611329aa/images/Spring2022/xcat_mwts-autorefresh_sp2_vn.png?yocs=o_s_" alt="" height={"200px"} width="200px"/>
              <Text fontSize={"sm"}><b><u>Sign up for emails</u></b></Text>  
            </Box>
            <Box color="black" width={"15%"} height="150px">
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb9d60d44/images/Fall2022/boc-launch-prospects_vn_0.png?yocs=o_s_" alt="" height={"200px"} width="200px"/>
              <Text fontSize={"sm"}><b><u>Check out Auto Refresh</u></b></Text>  
            </Box>
            <Box color="black" width={"15%"} height="150px">
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4dd3c5f1/images/Spring2022/xcat_mwts-returns_sp2_vn.jpg?yocs=o_s_" alt="" height={"200px"} width="200px"/>
              <Text fontSize={"sm"}><b><u>Join the VIPs</u></b></Text>  
            </Box>
            <Box color="black" width={"15%"} height="150px">
              <img src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw41a3328c/images/Spring2022/xcat_mwts-email_sp2_vn.jpg?yocs=o_s_" alt="" height={"200px"} width="200px"/>
              <Text fontSize={"xs"}><b><u>Sign up for emails</u></b></Text>    
            </Box>
          </Flex>
      </Box>
    </div>
  );
};
