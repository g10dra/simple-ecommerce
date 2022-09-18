import {  DECREASE, INCREASE } from "../types";

export const increase = (product_id) => {
  return {
    type: INCREASE,
    payload: product_id
  }
};

export const decrease = (product_id) => {

  return {
    type: DECREASE,
    payload: product_id
  }
 
};
