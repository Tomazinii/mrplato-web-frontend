import React, { ReactNode, createContext, useReducer } from "react";

import { GET_EXERCISE } from "../api/types";


export interface StateExercise {
  question: string;
  list_propositions: {content: string, methods_used_info: string, type:string }[]
}
  
interface ActionExercise {
    type: string; 
    payload: any;
  }
  

export const ContextExercises = createContext<{
    stateExercise: any;
    dispatchExercise:any;
  } | undefined>(undefined);



const initalState: StateExercise = {
  question: "",
  list_propositions: [],
};

function reducer(stateExercise: StateExercise, actionExercise: ActionExercise) {
  switch (actionExercise.type) {
    case GET_EXERCISE:

      return {...stateExercise,question:  actionExercise.payload}
    
    default:
      return { ...stateExercise };
  }
}



export const ExerciseProvider = ({ children }: { children: ReactNode }) => {
    const [stateExercise, dispatchExercise] = useReducer(reducer, initalState);
  
    return (
      <ContextExercises.Provider value={{ stateExercise, dispatchExercise }}>
        {children}
      </ContextExercises.Provider>
    );
  };
  