import React from "react";
import styles from "../CSS/Footer.module.css";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { TiSocialPinterest } from "react-icons/ti";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerflex}>
        <div className={styles.flexdiv}>
          <h1 className={styles.fooh1}>CUSTOMER CARE</h1>
          <p>Help & FAQs</p>
          <p>Shipping</p>
          <p>Returns & Exchanges</p>
          <p>Order Tracking</p>
          <p>Corporate Sales & Gifts</p>
          <p>Contact Us</p>
        </div>
        <div className={styles.flexdiv}>
          <h1 className={styles.fooh1}>MY ACCOUNT</h1>
          <p>Sign In or Sign Up</p>
          <p>Order Tracking</p>
          <p>My Auto Refresh</p>
          <p>My Love-It List</p>
        </div>
        <div className={styles.flexdiv}>
          <h1 className={styles.fooh1}>DISCOVER</h1>
          <p>About Us</p>
          <p>Careers</p>
          <p>Gift Cards</p>
          <p>Shop by Fragrance</p>
          <p>Product Ingredients</p>
          <p>Get Inspired</p>
          <p>Diversity, Equity & Inclusion</p>
        </div>
        <div className={styles.flexdiv}>
          <h1 className={styles.fooh1}>FIND US</h1>
          <p>Store Locator</p>
          <p>Global Locations</p>
        </div>
      </div>
      <div className={styles.logos}>
        <p style={{ textAlign: "start" }}>Get Connected</p>
        <div className={styles.logosdiv}>
          <BsFacebook size={25} />
          <BsTwitter size={25} />
          <BsInstagram size={25} />
          <BsYoutube size={25} />
          <TiSocialPinterest size={25} />
        </div>
      </div>
      <div>
        <div className={styles.footerdown}>
          <p>Terms Of Use</p>
          <p> Privacy Policy</p>
          <p> Security Bug Report</p>
          <p>States Privacy Rights Notice (Certain States)</p>
          <p> Do Not Sell or Share My Personal Information (Certain States)</p>
          <p> Transparency in Supply Chains</p>
          <p>Targeted Ad Preferences (Certain States)</p>
          <p>
            {" "}
            Limit the Use of My Sensitive Personal Information (California)
          </p>
        </div>
        <div className={styles.rights}>
          <h1>@2022 Bath & Body Works Direct,Inc. All Rights Reserved.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
