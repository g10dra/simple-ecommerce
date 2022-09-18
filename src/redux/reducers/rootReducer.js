import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { loadingReducer } from "./loadingReducer";
import { cartReducer } from "./cartReducer";

export default combineReducers({ productReducer,loadingReducer,cartReducer });
