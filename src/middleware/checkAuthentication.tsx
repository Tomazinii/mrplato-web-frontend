import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContextUser } from "../context/ContenxtUser";
import { checkAuthenticatedFunction } from "../utils/user/checkAuthenticatedFunction";
import { getActivityFunctions, inputgetActivityFunctionsProps } from "../utils/classroom/getActivitiesFunctions";
import { ContextClassroom } from "../context/ContextClassroom";

export const CheckAuthentication = ({ children }: any) => {
  const { dispatchUser } = useContext(ContextUser) || {};
  const { dispatchClassroom } = useContext(ContextClassroom) || {};

  document.title = "Mrplato";
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      
      const result = await checkAuthenticatedFunction(dispatchUser);
      
      if (result.body.data.is_authenticated === false) {
        navigate('/login');
      }

      const props: inputgetActivityFunctionsProps = {
          classroom_id: result && result.body.data.data.classroom_id,
          dispatch: dispatchClassroom,
      }
    
      getActivityFunctions(props)
      

    };
  
    fetchData();
  
  }, []);


  return <div>{children}</div>;
};