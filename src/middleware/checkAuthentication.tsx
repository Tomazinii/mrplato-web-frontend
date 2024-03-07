import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ContextUser } from "../context/ContenxtUser";
import { checkAuthenticatedFunction } from "../utils/user/checkAuthenticatedFunction";

export const CheckAuthentication = ({ children }: any) => {
  const { stateUser, dispatchUser } = useContext(ContextUser) || {};
  document.title = "Mrplato";
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const result = await checkAuthenticatedFunction(dispatchUser);
      
      if (result.body.data.is_authenticated === false) {
        navigate('/login');
      }
    };
  
    fetchData();
  
  }, []);


  return <div>{children}</div>;
};