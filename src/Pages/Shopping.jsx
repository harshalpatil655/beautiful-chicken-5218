import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import styles from "../CSS/Shopping.module.css";
import { getProductsData } from "../Redux/AppReducer/action";

// https://my-json-server.typicode.com/harshalpatil655/json-server/products

const Shopping = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.AppReducer.products);
  const initialCategoryParams = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategoryParams || []);
  const location = useLocation();
  const initialSortParams = searchParams.get("sortBy");
  const [sortBy, setSortBy] = useState(initialSortParams || "");

  useEffect(() => {
    if (category || sortBy) {
      setSearchParams({ category: category, sortBy: sortBy });
    }
  }, [category, setSearchParams, sortBy]);

  useEffect(() => {
    if (location || products.length === 0) {
      const sortBy = searchParams.get("sortBy");
      const queryParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortBy && `price`,
          _order: sortBy,
        },
      };
      dispatch(getProductsData(queryParams));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const option = e.target.value;

    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <Flex color="white">
      <Box className={styles.flexbox1} flex="1">
        <h2 className={styles.sortfilter}>Filter</h2>
        <div className={styles.labelall}>
          <input
            type="checkbox"
            defaultChecked={category.includes(`fragrance`)}
            onChange={handleChange}
            value="fragrance"
          />
          <label>Fragrance</label>
        </div>
        <div className={styles.labelall}>
          <input
            type="checkbox"
            defaultChecked={category.includes(`bath & body`)}
            value="bath & body"
            onChange={handleChange}
          />
          <label>Body & Bath</label>
        </div>
        <div className={styles.labelall}>
          <input
            type="checkbox"
            defaultChecked={category.includes(`moisturizers`)}
            value="moisturizers"
            onChange={handleChange}
          />
          <label>Moisturizers</label>
        </div>
        <div className={styles.labelall}>
          <input
            type="checkbox"
            defaultChecked={category.includes(`aeromatherapy`)}
            value="aeromatherapy"
            onChange={handleChange}
          />
          <label>Aromatherapy</label>
        </div>
        <h2 className={styles.sortfilter}>Sort</h2>
        <div onChange={handleSort}>
          <div className={styles.labelall}>
            <input
              type="radio"
              name="sortBy"
              defaultChecked={sortBy === "asc"}
              value="asc"
            />
            <label>Price low to high</label>
          </div>
          <div className={styles.labelall}>
            <input
              type="radio"
              name="sortBy"
              defaultChecked={sortBy === "desc"}
              value="desc"
            />
            <label>Price high to low</label>
          </div>
        </div>
      </Box>
      <Box className={styles.flexbox2} flex="3">
        <div className={styles.shoppingGrid}>
          {products.length > 0 &&
            products.map((item) => {
              return (
                <div className={styles.griddiv} key={item.id}>
                  <div className={styles.productgrid}>
                    <img
                      className={styles.shoppingimg}
                      src={item.image}
                      alt={item.name}
                    />
                    <h1>{item.name}</h1>
                    <p style={{ color: "gray" }}>{item.title}</p>
                    <p>{item.category}</p>
                    <h2>{item.price}</h2>
                    <p style={{ color: "red" }}>
                      Mix & Match Full-Size:Buy 3,Get 3 Free or Buy 2, Get 1
                      Free
                    </p>
                    <button className={styles.shoppingbtn}>Add to Cart</button>
                  </div>
                </div>
              );
            })}
        </div>
      </Box>
    </Flex>
  );
};

export default Shopping;
