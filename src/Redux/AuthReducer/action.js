import axios from "axios";
import * as types from "./actiontypes";
import { setLocal } from "../../util/localstorage";

export const account = (payload) => (dispatch) => {
  dispatch({ type: types.CREATE_ACCOUNT_REQUEST });
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };
  return axios
    .post(
      "https://gentle-escarpment-82476.herokuapp.com/register",
      payload,
      axiosConfig
    )
    .then((r) => {
      dispatch({ type: types.CREATE_ACCOUNT_SUCCESS });
      setLocal();
      return types.CREATE_ACCOUNT_SUCCESS;
    })
    .catch((r) => {
      return types.CREATE_ACCOUNT_FAILURE;
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
      "https://gentle-escarpment-82476.herokuapp.com/login",
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
