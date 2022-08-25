import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "../Redux/AppReducer/reducer.js";
import { reducer as AuthReducer } from "../Redux/AuthReducer/reducer.js";

const rootReducer = combineReducers({ AppReducer, AuthReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
