import * as types from "./actiontypes.js";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };
    }
    case types.GET_PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return initialState;
    }
  }
};
