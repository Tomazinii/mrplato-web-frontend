import React, { ReactNode, createContext, useReducer } from "react";
import { LOGIN_FALSE, LOGIN_TRUE, SET_STATUS_CODE } from "../api/types";



export interface StateGlobal {
    loading: boolean;
    msg_register: string;
    status_code: any
}
  
interface ActionGlobal{
    type: string; 
    payload: any;
  }
  

export const ContextGlobal = createContext<{
    stateGlobal: any;
    dispatchGlobal:any;
  } | undefined>(undefined);



const initalState: StateGlobal= {
    loading: false,
    msg_register: "",
    status_code: null,
    
};

function reducer(stateGlobal: StateGlobal, actionGlobal: ActionGlobal) {
  switch (actionGlobal.type) {
        case LOGIN_TRUE:
            return {...stateGlobal, loading: true};   
        case LOGIN_FALSE:
            return {...stateGlobal, loading: false};

        case SET_STATUS_CODE:
            return {...stateGlobal, status_code: actionGlobal.payload}

    default:
      return { ...stateGlobal };
  }
}


export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [stateGlobal, dispatchGlobal] = useReducer(reducer, initalState);
  
    return (
      <ContextGlobal.Provider value={{ stateGlobal, dispatchGlobal }}>
        {children}
      </ContextGlobal.Provider>
    );
  };
  