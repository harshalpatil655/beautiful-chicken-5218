import axios from "axios";
import * as types from "./actiontypes";
import { setLocal } from "../../util/localstorage";

export const account = (payload) => (dispatch) => {
  console.log("here")
  dispatch({ type: types.CREATE_ACCOUNT_REQUEST });
  // let axiosConfig = {
  //   headers: {
  //     "Content-Type": "application/json;charset=UTF-8",
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // };
   return axios
    .post(
      "https://cw4tanishq.herokuapp.com/register",payload
        
      )
    .then((r) => {
      
      if(r.status==200){
        dispatch({ type: types.CREATE_ACCOUNT_SUCCESS });
      }
      
      setLocal();
      return types.CREATE_ACCOUNT_SUCCESS;
    })
    .catch((r) => {
      alert("email id exists")
      return r
    });
};

export const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };
  return axios
    .post(
      "https://cw4tanishq.herokuapp.com/login",
      payload,
      axiosConfig
    )
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS });
      setLocal();
      return types.LOGIN_SUCCESS;
    })
    .catch((r) => {
      return types.LOGIN_FAILURE;
    });
};
