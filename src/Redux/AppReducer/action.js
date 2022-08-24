import * as types from "./actiontypes.js";
import axios from "axios";

export const getProductsData = (params) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_REQUEST });
  return axios
    .get(
      "https://my-json-server.typicode.com/harshalpatil655/json-server/products",
      params
    )
    .then((res) => {
      return dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_PRODUCT_FAILURE });
    });
};
