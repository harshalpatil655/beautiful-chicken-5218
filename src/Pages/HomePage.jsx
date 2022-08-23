import React from "react";
import styles from "../CSS/HomePage.module.css";
import { BsFillSunFill } from "react-icons/bs";

export const HomePage = () => {
  return (
    <div className={styles.home}>
      HomePage
      <BsFillSunFill size={30} />
    </div>
  );
};
