import { LOADING_STATE } from "../types";

export const loadingReducer = (state = {loading:false}, action) => {
  switch (action.type) {
    case LOADING_STATE:
      return {
        loading:action.payload
      };
    default:
      return state;
  }
};
