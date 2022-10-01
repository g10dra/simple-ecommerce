import React from 'react';
import { Navigate } from "react-router-dom"; 
import { useSelector } from 'react-redux';
const ProtectedRoute = ({ children }) => {
  const { userInfo } = useSelector(state => state.loginReducer);  
  if (!userInfo._id) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;