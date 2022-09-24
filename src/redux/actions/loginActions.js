import NetworkService from "../../services/NetworkService";
import { USER_INFO,LOADING_STATE, USER_LOGIN_ERROR } from "../types";

export const loginUser = (formData) => (dispatch) => {

  dispatch({
    type: LOADING_STATE,
    payload: true
  });
  NetworkService.post("login",formData)
    .then(({data}) => {
      console.log('api data ',data)
      dispatch({
        type: LOADING_STATE,
        payload: false
      });
      if(data.success){ 
        const userData={
          ...data.user,
          token:data.token,
        }
        localStorage.setItem('userData',JSON.stringify(userData));//physically store the data in localstorage

        dispatch({
          type: USER_LOGIN_ERROR,
          payload: ''
        });
        dispatch({
          type: USER_INFO,
          payload: userData
        });
      }
    }).catch(err=>{ 
      dispatch({
        type: LOADING_STATE,
        payload: false
      });
      dispatch({
        type: USER_INFO,
        payload: {}
      });
      dispatch({
        type: USER_LOGIN_ERROR,
        payload: err.response.data.message
      });

    });
};

export const logoutUser = () => {
  return {
    type: USER_INFO,
    payload: {}
  };
}

export const persistUserLogin = (data) => {
  return {
    type: USER_INFO,
    payload: data
  };
}
