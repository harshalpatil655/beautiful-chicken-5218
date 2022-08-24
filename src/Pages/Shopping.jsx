import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../CSS/Shopping.module.css";
import { getProductsData } from "../Redux/AppReducer/action";

// https://my-json-server.typicode.com/harshalpatil655/json-server/products

const Shopping = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.AppReducer.products);
  console.log(products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProductsData());
    }
  }, []);

  return (
    <Flex color="white">
      <Box className={styles.flexbox1} flex="1">
        <Text>Box 3</Text>
      </Box>
      <Box className={styles.flexbox2} flex="3">
        <Text>Box 4</Text>
      </Box>
    </Flex>
  );
};

export default Shopping;
