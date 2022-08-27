import { Badge, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../CSS/Product.module.css";
import { getProductsData } from "../Redux/AppReducer/action";
import { AiOutlinePlus, AiOutlineMinus, AiTwotoneMail } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";

import { ADD } from "../Redux/AppReducer/action";

const Product = () => {
  const { id } = useParams();
  const products = useSelector((store) => store.AppReducer.products);
  const [currentproduct, setCurrentproduct] = useState({});
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const myproducts = [
    {
      id: 22,
      name: "Bourbon",
      price: 12,
      title: "3 in one hair,face & body wash",
      image:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2dc11402/crop/026291952_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      category: "bath & body",
    },
    {
      id: 23,
      name: "Autumn Drive",
      price: 22,
      title: "fine fragrance mist",
      image:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw265c39be/crop/026495826_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      category: "fragrance",
    },
    {
      id: 24,
      name: "Twilight Woods",
      price: 11,
      title: "fine fragrance mist",
      image:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw2b7eaa43/crop/026499760_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      category: "fragrance",
    },
    {
      id: 25,
      name: "Sweet Pea",
      price: 35,
      title: "fine fragrance mist",
      image:
        "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dw1ca91477/crop/026434253_crop.jpg?sw=500&sh=600&sm=fit&q=75&yocs=o_s_",
      category: "fragrance",
    },
  ];

  const handleplus = () => {
    setCount(count + 1);
  };
  const handleminus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProductsData());
    }
  }, [dispatch, products.length]);

  useEffect(() => {
    if (id) {
      const currentproductData = products.find(
        (item) => item.id === Number(id)
      );
      currentproductData && setCurrentproduct(currentproductData);
    }
  }, [id, products]);

  // console.log(currentproduct);

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const send = (currentproduct) => {
    // console.log(currentproduct)
    dispatch(ADD(currentproduct));
  };

  return (
    <div>
      <div className={styles.lightblue}>
        <p>
          {" "}
          {`${currentproduct.category} Rewards is now available nationwide!`}
        </p>
      </div>
      <div className={styles.flexdiv}>
        <div className={styles.imgdiv}>
          <div>
            <img
              className={styles.prodimg}
              src={currentproduct.image}
              alt={currentproduct.name}
            />
          </div>
        </div>
        <div className={styles.sidediv}>
          <div>
            <div>
              <h1
                style={{
                  textAlign: "start",
                  fontSize: "50px",
                  marginBottom: "15px",
                }}
              >
                {currentproduct.name}
              </h1>
              <p
                style={{
                  textAlign: "start",
                  color: "gray",
                  marginBottom: "1px",
                }}
              >
                {currentproduct.title}
              </p>
              <h1
                style={{
                  textAlign: "start",
                  fontSize: "35px",
                  marginBottom: "10px",
                }}
              >{`$${currentproduct.price}`}</h1>
              <p
                style={{
                  textAlign: "start",
                  color: "red",
                  marginBottom: "15px",
                }}
              >
                Mix & Match Full size: Buy 3, Get 3 Free or Buy 2, Get 1 Free
              </p>
              <h1
                style={{
                  textAlign: "start",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                How do you want to receive it ?
              </h1>
              <div style={{ display: "flex" }}>
                {" "}
                <input type="radio" />
                <label>Ship It</label>
              </div>
              <div style={{ display: "flex" }}>
                {" "}
                <input type="radio" />
                <label>Pick up in Store</label>
              </div>
              <div style={{ marginTop: "25px", marginBottom: "25px" }}>
                <Button
                  onClick={handleminus}
                  colorScheme="rgb(51,51,51)"
                  variant="outline"
                >
                  <AiOutlineMinus />
                </Button>{" "}
                <Button colorScheme="rgb(51,51,51)" variant="outline">
                  {`${count}`}
                </Button>{" "}
                <Button
                  onClick={handleplus}
                  colorScheme="rgb(51,51,51)"
                  variant="outline"
                >
                  <AiOutlinePlus />
                </Button>{" "}
                <button
                  onClick={() => send(currentproduct)}
                  style={{
                    backgroundColor: "rgb(51,51,51)",
                    height: "40px",
                    color: "white",
                    width: "200px",
                  }}
                >
                  Add to Cart
                </button>
              </div>
              <div style={{ display: "flex", marginLeft: "100px" }}>
                <BsFacebook size={35} style={{ marginRight: "20px" }} />
                <BsTwitter size={35} style={{ marginRight: "20px" }} />
                <BsInstagram size={35} style={{ marginRight: "20px" }} />
                <AiTwotoneMail size={35} style={{ marginRight: "20px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.customersviewed}>
        {myproducts.map((el) => {
          return (
            <div key={el.id}>
              <div>
                <img
                  className={styles.imgcustom}
                  src={el.image}
                  alt={el.name}
                />
                <h1>{el.name}</h1>
                <p>{el.category}</p>
                <h1>{`$${el.price}`}</h1>

                <button className={styles.custombtn}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
