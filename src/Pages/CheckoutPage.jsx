import { Button, Input, Radio, Select } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../CSS/Checkoutpage.module.css";

export const CheckoutPage = () => {
  const navigate = useNavigate();

  const handlehomepage=()=>{
      navigate("/")
  }

  const handleClick = () => {
    alert("Your Order Successfully placed, Thank You");
  };
  return (
    <div>
      <div className={styles.container}>
        <div style={{ fontSize: "30px" }}>Shipping Address</div>
        <div>
          <div className={styles.details}>
            <div className={styles.checklabel}>
              {" "}
              <label>*FIRST NAME</label>
            </div>
            <div>
              {" "}
              <Input variant="filled" placeholder="Enter your First Name" />
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.checklabel}>
              {" "}
              <label>*LAST NAME</label>
            </div>
            <div>
              {" "}
              <Input variant="filled" placeholder="Enter your Last Name" />
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.checklabel}>
              {" "}
              <label>*ADDRESS1</label>
            </div>
            <div>
              {" "}
              <Input variant="filled" placeholder="Enter your Address1" />
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.checklabel}>
              {" "}
              <label>*ADDRESS</label>
            </div>
            <div>
              {" "}
              <Input variant="filled" placeholder="Enter your Address2" />
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.checklabel}>
              {" "}
              <label>*COUNTRY</label>
            </div>
            <div>
              {" "}
              <Select placeholder="Enter Country">
                <option value="option1">INDIA</option>
                <option value="option2">USA</option>
                <option value="option2">POLAND</option>
                <option value="option2">ENGLAND</option>
              </Select>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.checklabel}>
              {" "}
              <label>*CITY</label>
            </div>
            <div>
              {" "}
              <Input variant="filled" placeholder="Enter your city" />
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.checklabel}>
              {" "}
              <label>*STATE</label>
            </div>
            <div>
              {" "}
              <Input variant="filled" placeholder="Enter your State" />
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.checklabel}>
              {" "}
              <label>*ZIP CODE</label>
            </div>
            <div>
              {" "}
              <Input variant="filled" placeholder="Enter your Zip Code" />
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.checklabel}>
              {" "}
              <label>*PHONE NUMBER</label>
            </div>
            <div>
              {" "}
              <Input variant="filled" placeholder="Enter your Phone Number" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.delivery}>
        <div style={{ fontSize: "25px" }}>SHIPPING METHOD</div>
        <div>
          <Radio style={{ border: "1px solid black" }} value="1">
            Standard 3-7 Business Days $6.99
          </Radio>
        </div>
        <div>
          <Radio style={{ border: "1px solid black" }} value="1">
            Expidited 2 Business Days $15.99
          </Radio>
        </div>
        <div>
          <Radio style={{ border: "1px solid black" }} value="1">
            Overnight 1 Business Days $20.99
          </Radio>
        </div>
      </div>
      <div>
        <Button
          size="md"
          height="48px"
          width="200px"
          border="2px"
          borderColor="green.500"
          onClick={handleClick}
        >
          Click to Buy
        </Button>
      </div>
      <div>
        <Button
          onClick={handlehomepage}
          style={{ margin: "2rem" }}
          colorScheme="teal"
          variant="link"
        >
          Go to HomePage
        </Button>
      </div>
    </div>
  );
};
