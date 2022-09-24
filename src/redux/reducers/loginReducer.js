import { USER_INFO,USER_LOGIN_ERROR } from "../types";

export const loginReducer = (state = { userInfo: {}, loginError: "" }, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      }
    default:
      return state;
  }
};
