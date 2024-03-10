import React, { ReactNode, createContext, useReducer } from "react";

import {
  ADD_NEW_LINE_TO_LIST,
  GET_OPTIONS_SELECTED_FORM,
  REMOVE_LAST_LINE_FROM_LIST,
  RESET_LIST_NEW_LINES,
  REMOVE_METHOD_AND_CHANGE_NEW_LIST,
  SET_LIST_PROPOSITONS,
  ADD_NEW_LINES_TO_LIST,
  CREATE_SESSION_EXERCISE
} from "../api/types";


export interface StateMrplato {
    content: null | any; 
    new_lines_list: {content: string, methods_used_info: string, type:string }[]
    get_selected_options: {content: string, methods_used_info: string, type:string }[]
    list_propositions: {content: string, methods_used_info: string, type:string }[]
    lines_list: any
    info_exercise: any

}
  
interface ActionMrplato {
    type: string; 
    payload: any;
  }
  

export const ContextMrplato = createContext<{
    stateMrplato: any;
    dispatchMrplato:any;
  } | undefined>(undefined);



const initalState: StateMrplato = {
  content: null,
  new_lines_list: [],
  lines_list: [],
  get_selected_options: [],
  list_propositions: [],
  info_exercise: null
};

function reducer(stateMrplato: StateMrplato, actionMrplato: ActionMrplato) {
  switch (actionMrplato.type) {

    case ADD_NEW_LINE_TO_LIST:
      let verify = false
      
      stateMrplato.new_lines_list.forEach(element => {
        if(element.content === actionMrplato.payload.content && element.type === actionMrplato.payload.type){
            verify = true
            
      }});
      if(verify){
          return { ...stateMrplato};
      }else{
          return { ...stateMrplato,  new_lines_list: [...stateMrplato.new_lines_list, actionMrplato.payload]};
      }

    case ADD_NEW_LINES_TO_LIST:
      let lista:any = []

      
      
          actionMrplato.payload.map((element: any) => {
            if(element.methods_used_info !== "P"){
              lista.push(element)
            }
          })

            return { ...stateMrplato,  lines_list: lista};


      


    case REMOVE_LAST_LINE_FROM_LIST:
        const updatelist = stateMrplato.new_lines_list.slice(0, -1);
        return { ...stateMrplato,  new_lines_list: updatelist};
      
    case RESET_LIST_NEW_LINES:
      
      return {...stateMrplato,  lines_list: []};
    case GET_OPTIONS_SELECTED_FORM:

      return { ...stateMrplato, get_selected_options: actionMrplato.payload}

    case REMOVE_METHOD_AND_CHANGE_NEW_LIST:

      
        return {
          ...stateMrplato,
          new_lines_list: actionMrplato.payload.rows_created_modified
        };


    case CREATE_SESSION_EXERCISE:

    console.log("TESTE",actionMrplato);
    
      
        return {
          ...stateMrplato,
          info_exercise: actionMrplato.payload,
          lines_list: actionMrplato.payload.new_lines
        };



    case SET_LIST_PROPOSITONS:
      return {
      ...stateMrplato,
        list_propositions: actionMrplato.payload
      };
    
    default:
      return { ...stateMrplato };
  }
}



export const MrplatoProvider = ({ children }: { children: ReactNode }) => {
    const [stateMrplato, dispatchMrplato] = useReducer(reducer, initalState);
  
    return (
      <ContextMrplato.Provider value={{ stateMrplato, dispatchMrplato }}>
        {children}
      </ContextMrplato.Provider>
    );
  };
  