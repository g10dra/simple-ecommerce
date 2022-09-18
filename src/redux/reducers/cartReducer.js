import { INCREASE,DECREASE } from "../types";


export const cartReducer = (state = {}, action) => {

 const productID=action.payload;

  switch (action.type) {
    case INCREASE:
      return ({
        ...state,
        [productID]:state[productID]?state[productID]+1:1
      });
    case DECREASE:
      const quantity=state[productID]?state[productID]-1:0;
      if(quantity===0){
        let cartData = Object.assign({}, state)
        delete cartData[productID];
        return cartData
      }
      return ({
        ...state,
        [productID]:quantity
      });

    default:
      return state;
  }
};
