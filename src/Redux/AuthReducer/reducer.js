import * as types from "./actiontypes"
import { getLocal } from "../../util/localstorage";
const initialState = {
  isAuth:getLocal()?true:false || false,
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,{type,payload}) => {

  switch(type){
    case types.CREATE_ACCOUNT_REQUEST:
      return {...state,isLoading:true}
    case types.CREATE_ACCOUNT_SUCCESS:
      return {...state, isAuth:true}
    case types.CREATE_ACCOUNT_FAILURE:
      return {...state, isError:false}
      case types.LOGIN_REQUEST:
        return {...state,isLoading:true}
      case types.LOGIN_SUCCESS:
        return {...state, isAuth:true}
      case types.LOGIN_FAILURE:
        return {...state, isError:true}
    default:
        return state;
    
  }
  
};

export { reducer };