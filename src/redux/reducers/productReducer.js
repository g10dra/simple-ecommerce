import { ALL_PRODUCTS, SEARCH_PRODUCTS } from "../types";

export const productReducer = (state = {products:[],searchTerm:''}, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        products:action.payload
      };
    case SEARCH_PRODUCTS:
        return {
          ...state,
          searchTerm:action.payload
        };
    default:
      return state;
  }
};
