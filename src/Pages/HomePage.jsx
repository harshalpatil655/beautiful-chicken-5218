import React from "react";
import styles from "../CSS/HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <div className={styles.bluetop}>
        <p className={styles.bluetopp}>
          My Bath & Body Works Rewards is now available nationwide!{" "}
          <span className={styles.bluetopspan}> JOIN THE VIPS</span>
        </p>
      </div>
      <div className={styles.topimg}>
        <img
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwed7a9159/images/Fall2022/50offmens_fa3_16x9.jpg?yocs=s_"
          alt="topimg"
        />
      </div>
      <div>
        <div className={styles.offers}>
          <div>
            <p style={{ fontWeight: "600", fontSize: "25px", margin: "1rem" }}>
              TODAY'S TOP OFFERS
            </p>
          </div>
          <div className={styles.offersflex}>
            <div className={styles.offersdiv}>
              <p className={styles.bluetopp}>Today Only!</p>
              <p style={{ fontSize: "12px" }}>All Men's Body Care</p>
              <h1 className={styles.offersdivh1}>50% off</h1>
              <button className={styles.offersbtn}>SHOP</button>
            </div>
            <div className={styles.offersdiv}>
              <p className={styles.bluetopp}>Select Full Body Care </p>

              <h1 className={styles.offersdivh1}>BUY 3, GET 1 Free</h1>
              <p style={{ fontSize: "12px" }}>Lowest price items is free</p>
              <button className={styles.offersbtn}>SHOP</button>
            </div>
            <div className={styles.offersdiv}>
              <p className={styles.bluetopp}>Ends today!</p>
              <p style={{ fontSize: "12px" }}>All Sanitizers Sprays</p>
              <h1 className={styles.offersdivh1}>$2.95 </h1>
              <button className={styles.offersbtn}>SHOP</button>
            </div>
            <div className={styles.offersdiv}>
              <p className={styles.bluetopp}>Hand Soaps!</p>
              <p style={{ fontSize: "12px" }}>All Body Care</p>
              <h1 className={styles.offersdivh1}>5/$25</h1>
              <button className={styles.offersbtn}>SHOP</button>
            </div>
          </div>
        </div>
      </div>
      {/* ///////////////////////////////////// */}
      <div className={styles.fragimg}>
        <img
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw508eb210/images/Fall2022/cndl_thankful-toast_fa3_hm.jpg?yocs=s_"
          alt="Festivefrag"
        />
      </div>
      {/* //////////////////////////////////// */}
      <div>
        <div>
          <h1 className={styles.cat}>SHOP BY CATEGORY</h1>
        </div>
        <div className={styles.catflex}>
          <div className={styles.catflexdiv}>
            <img
              className={styles.catimg}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5c79520c/images/Fall2022/bc_fall-in-bloom_fa2_vn%E2%80%8B.jpg?yocs=o_s_"
              alt="bodycare"
            />
            <p style={{ textDecoration: "underline" }}>Body Care</p>
          </div>
          <div className={styles.catflexdiv}>
            <img
              className={styles.catimg}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw16b341ca/images/Fall2022/cndl_thankful-toast_fa3_vn%E2%80%8B.jpg?yocs=o_s_"
              alt=""
            />
            <p style={{ textDecoration: "underline" }}>Candles</p>
          </div>
          <div className={styles.catflexdiv}>
            <img
              className={styles.catimg}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw85446105/images/Fall2022/diff_holiday-newness_fa3_vn%E2%80%8B.jpg?yocs=o_s_"
              alt="wallflowers"
            />
            <p style={{ textDecoration: "underline" }}>Wallflowers</p>
          </div>
          <div className={styles.catflexdiv}>
            <img
              className={styles.catimg}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw5d0a0476/images/Fall2022/sp_thankful-toast_fa3_vn%E2%80%8B.jpg?yocs=o_s_"
              alt="Soaps"
            />
            <p style={{ textDecoration: "underline" }}>Soaps</p>
          </div>
          <div className={styles.catflexdiv}>
            <img
              className={styles.catimg}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw751cc2c2/images/Fall2022/bc_at-presspause_fa3_vn%E2%80%8B%E2%80%8B.jpg?yocs=o_s_"
              alt="Aeromatherapy"
            />
            <p style={{ textDecoration: "underline" }}>Aeromatherapy</p>
          </div>
          <div className={styles.catflexdiv}>
            <img
              className={styles.catimg}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8a1239a3/images/Fall2022/bc_new-mensshop_fa3_vn%E2%80%8B.jpg?yocs=o_s_"
              alt="Shop Men's"
            />
            <p style={{ textDecoration: "underline" }}>Shop Men's</p>
          </div>
        </div>
      </div>
      {/* //////////////////////////////// */}
      <div className={styles.shop}>
        <div className={styles.shopdiv}>
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw87e16b0d/images/Fall2022/xcat_thankful-toast_fa3_hps.jpg?yocs=o_s_"
            alt="one"
          />
          <h1>The best wat to celebrate is with all the new fall things.</h1>
          <p
            style={{
              textDecoration: "underline",
              fontSize: "12px",
              fontWeight: 500,
            }}
          >
            Shop New Arrivals
          </p>
        </div>

        <div className={styles.shopdiv}>
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwe7929b0b/images/Fall2022/bc_at-presspause_fa3_hps.jpg?yocs=o_s_"
            alt="one"
          />
          <h1>Fall for the comform of a new kind od cozy.</h1>
          <p
            style={{
              textDecoration: "underline",
              fontSize: "12px",
              fontWeight: 500,
            }}
          >
            Shop New Arrivals
          </p>
        </div>
        <div className={styles.shopdiv}>
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw9a7949c7/images/Fall2022/xcat_mens_fa3_hps.jpg?yocs=o_s_"
            alt="one"
          />
          <h1>Find so many new scents ath the Men's Shop.</h1>
          <p
            style={{
              textDecoration: "underline",
              fontSize: "12px",
              fontWeight: 500,
            }}
          >
            Shop New Arrivals
          </p>
        </div>
        <div className={styles.shopdiv}>
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb144b2bc/images/Fall2022/xcat_fall-in-bloom-xcat_fa2_hps.jpg?yocs=o_s_"
            alt="one"
          />
          <h1>
            Vibrant. Warm. Sweet. Try fall in bloom-the perfect right now.
          </h1>
          <p
            style={{
              textDecoration: "underline",
              fontSize: "12px",
              fontWeight: 500,
            }}
          >
            Shop New Arrivals
          </p>
        </div>
      </div>
      {/* ////////////////////////////////////////////// */}
      <div className={styles.pinkimgdiv}>
        <div>
          <img
            className={styles.pinkimg}
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwad656e28/images/Fall2022/boc-launch-prospects_hb_0.jpg?yocs=s_"
            alt="pinkimg"
          />
        </div>
        <div>
          <img
            className={styles.pinkimg}
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwda661154/images/Fall2022/xcat_stl-givelove_fa1_hb%E2%80%8B.jpg?yocs=s_"
            alt="pinkimg"
          />
        </div>
      </div>
      {/* ////////////////////////////////////////////////// */}
      <div className={styles.btndowngrid}>
        <button className={styles.btndown}>TOP GIFTS PICKS</button>
        <button className={styles.btndown}>GIFT SETS</button>
        <button className={styles.btndown}>GIFTS UNDER $15</button>
        <button className={styles.btndown}>GIFTS UNDER $50</button>
        <button className={styles.btndown}>GIFTS FOR HER</button>
      </div>
      {/* //////////////////////////////////////// */}
      <div>
        <div>
          <h1 className={styles.cat}>MORE GOOD THINGS, THIS WAY</h1>
        </div>
        <div className={styles.catflex}>
          <div className={styles.catflexdiv}>
            <img
              className={styles.catimg}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwb9d60d44/images/Fall2022/boc-launch-prospects_vn_0.png?yocs=o_s_"
              alt="vip"
            />
            <p style={{ textDecoration: "underline" }}>JOIN THE VIP'S</p>
          </div>
          <div className={styles.catflexdiv}>
            <img
              className={styles.catimg}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw8f6e14ad/images/Spring2022/xcat_mwts-bopis_sp2_vn.jpg?yocs=o_s_"
              alt="SHOPFAST"
            />
            <p style={{ textDecoration: "underline" }}>SHOP IT FAST</p>
          </div>
          <div className={styles.catflexdiv}>
            <img
              className={styles.catimg}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw644e724c/images/Spring2022/xcat_mwts-sms_sp2_vn.jpg?yocs=o_s_"
              alt="TEXTS"
            />
            <p style={{ textDecoration: "underline" }}>SHOP UP FOR TEXT'S</p>
          </div>
          <div className={styles.catflexdiv}>
            <img
              className={styles.catimg}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw41a3328c/images/Spring2022/xcat_mwts-email_sp2_vn.jpg?yocs=o_s_"
              alt="EMAILS"
            />
            <p style={{ textDecoration: "underline" }}>SIGN UP FOR EMAILS</p>
          </div>
          <div className={styles.catflexdiv}>
            <img
              className={styles.catimg}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw611329aa/images/Spring2022/xcat_mwts-autorefresh_sp2_vn.png?yocs=o_s_"
              alt="REFRESH"
            />
            <p style={{ textDecoration: "underline" }}>
              CHECK OUT AUTO REFRESH
            </p>
          </div>
          <div className={styles.catflexdiv}>
            <img
              className={styles.catimg}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw4dd3c5f1/images/Spring2022/xcat_mwts-returns_sp2_vn.jpg?yocs=o_s_"
              alt="POLICY"
            />
            <p style={{ textDecoration: "underline" }}>SEE OUR RETURE POLICY</p>
          </div>
        </div>
      </div>
      {/* //////////////////////////////////////////////// */}
      {/* //////////////////////////////////////// */}
      <div>
        <div>
          <div className={styles.down}>
            <h1 className={styles.downh1}>@BATHANDBODYWORKS</h1>
            <p style={{ color: "gray" }}>
              Daily Inspiration. Instant happiness. Right here.
            </p>
          </div>
          <div className={styles.downflex}>
            <div>
              <img
                src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjY0OTcxMzM0LjIwODg5OTM4MTc4NS5qcGVn.jpg?w=640&h=640&fit=cover"
                alt="one"
              />
            </div>
            <div>
              <img
                src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjY0ODk5NDI1LjY0NDY0OTM4NzcxLmpwZWc=.jpg?w=640&h=640&fit=cover"
                alt="two"
              />
            </div>
            <div>
              <img
                src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjY0ODEyODYzLjUyMjQyNjE1NDg5OC5qcGVn.jpg?w=640&h=640&fit=cover"
                alt="three"
              />
            </div>
            <div>
              <img
                src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjY0NzM3MzAyLjM4MTkzOTIxNDk4Ny5qcGVn.jpg?w=640&h=640&fit=cover"
                alt="foue"
              />
            </div>
          </div>
        </div>
      </div>
      {/* //////////////////////////////// */}
      <div>
        <div>
          <h1 className={styles.downh1}>Bath & Body Works</h1>
        </div>
        <div>
          <p className={styles.downp}>
            Bath and Body Works is your go-to place for gifts & goodies that
            surprise & delight. From fresh fragrances to soothing skin care, we
            make finding your perfect something special a happy-memory-making
            experience. Searching for new seasonal creations or your favorite
            discontinued scents? We’ve got you covered there, too. Oh! And while
            you're browsing, shop our latest & greatest selection of lotions,
            soaps and candles!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
