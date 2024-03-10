import React, { ReactNode, createContext, useReducer } from "react";

import { CHECK_USER_SUCESS, LOGIN_SUCCESS, LOGIN_USER_FAIL, LOGOUT } from "../api/types";


export interface StateUser {
    is_authenticated: boolean;
    is_admin: boolean;
    user_id: string;
    user_name: string;
    user_email: string;
    login_error: string;
    enrollment: string;
    classroom_id: string;
}
  
interface ActionUser{
    type: string; 
    payload: any;
  }
  

export const ContextUser = createContext<{
    stateUser: any;
    dispatchUser:any;
  } | undefined>(undefined);



const initalState: StateUser = {
  is_authenticated: false,
  user_id: "",
  user_name: "",
  user_email: "",
  is_admin: false,
  login_error: "",
  classroom_id: "",
  enrollment: "",
};

function reducer(stateUser: StateUser, actionUser: ActionUser) {
  switch (actionUser.type) {
    case LOGIN_SUCCESS:

        const is_authenticated = true

      return {...stateUser, is_authenticated: is_authenticated}
    
    case LOGIN_USER_FAIL:
      return {...stateUser, login_error: actionUser.payload}

    case CHECK_USER_SUCESS:
      if(actionUser.payload.body.data.data){
        const user_id = actionUser.payload.body.data.data.user_id
        const user_name = actionUser.payload.body.data.data.username
        const user_email = actionUser.payload.body.data.data.email
        const authenticated = actionUser.payload.body.data.is_authenticated
        const is_admin = actionUser.payload.body.data.data.is_admin === "False" ? false : true
        const classroom_id = actionUser.payload.body.data.data.classroom_id 
        const enrollment = actionUser.payload.body.data.data.enrollment
        
        return {...stateUser, is_authenticated: authenticated, user_email: user_email, user_id: user_id, user_name: user_name, is_admin: is_admin, classrom_id: classroom_id, enrollment: enrollment}

      }
      return {...stateUser}
        
        

    case LOGOUT:
        return {...stateUser, is_authenticated: false, user_email:"", user_id: "", user_name: ""}

    default:
      return { ...stateUser };
  }
}


export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [stateUser, dispatchUser] = useReducer(reducer, initalState);
  
    return (
      <ContextUser.Provider value={{ stateUser, dispatchUser }}>
        {children}
      </ContextUser.Provider>
    );
  };
  