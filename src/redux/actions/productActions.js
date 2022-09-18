import NetworkService from "../../services/NetworkService";
import { ALL_PRODUCTS, LOADING_STATE, SEARCH_PRODUCTS } from "../types";

export const getAllProducts = () => (dispatch) => {

  dispatch({
    type: LOADING_STATE,
    payload: true
  });
  NetworkService.get("products")
    .then(({data}) => {
      dispatch({
        type: LOADING_STATE,
        payload: false
      });
      dispatch({
        type: ALL_PRODUCTS,
        payload: data.products
      });
    });
};

export const searchProduct = (searchTerm) => {

  return {
    type: SEARCH_PRODUCTS,
    payload:searchTerm
  };

};