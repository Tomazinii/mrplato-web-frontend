import React, { ReactNode, createContext, useReducer } from "react";
import { GET_ACTIVITY_FAIL, GET_ACTIVITY_SUCCESS, GET_ALL_PROBLEM_FAIL, GET_ALL_PROBLEM_SUCCESS, GET_ALL_STUDENTS_FAIL, GET_ALL_STUDENTS_SUCCESS, GET_CLASSROOM_FAIL, GET_CLASSROOM_SUCCESS, REGISTER_CLASSROOM_FAIL, REGISTER_CLASSROOM_SUCCESS } from "../api/types";



export interface StateClassroom {
    classrooms_list: Array<any>;
    class_name: string;
    class_id: string;
    teacher_email: string;
    teacher_name: string;
    activity_list: Array<any>;
    problems: Array<any>;
    students: Array<any>;
}
  
interface ActionClassroom{
    type: string; 
    payload: any;
  }
  

export const ContextClassroom = createContext<{
    stateClassroom: any;
    dispatchClassroom:any;
  } | undefined>(undefined);



const initalState: StateClassroom = {
    class_id: "",
    class_name:"",
    teacher_email: "",
    teacher_name: "",
    classrooms_list: [],
    activity_list: [],
    problems: [],
    students: [],
};

function reducer(stateClassroom: StateClassroom, actionClassroom: ActionClassroom) {
  switch (actionClassroom.type) {
        case GET_CLASSROOM_SUCCESS:      
            return {...stateClassroom, classrooms_list: actionClassroom.payload.body.data.classrooms}

        case GET_CLASSROOM_FAIL:
          return {...stateClassroom}      

        case REGISTER_CLASSROOM_SUCCESS:
          return {...stateClassroom}

        case REGISTER_CLASSROOM_FAIL:
          return {...stateClassroom}

        case GET_ACTIVITY_SUCCESS:
          const activity_list = actionClassroom.payload.body.data
          
          return {...stateClassroom, activity_list: activity_list}

        case GET_ALL_PROBLEM_SUCCESS:
          return {...stateClassroom, problems: actionClassroom.payload.body.data}

        case GET_ALL_PROBLEM_FAIL:
          return {...stateClassroom}

        case GET_ACTIVITY_FAIL:
            return {...stateClassroom}

        case GET_ALL_STUDENTS_SUCCESS:
          return {...stateClassroom, students: actionClassroom.payload.body.data}

        case GET_ALL_STUDENTS_FAIL:
          return {...stateClassroom}

      
    default:
      return { ...stateClassroom };
  }
}


export const ClassroomProvider = ({ children }: { children: ReactNode }) => {
    const [stateClassroom, dispatchClassroom] = useReducer(reducer, initalState);
  
    return (
      <ContextClassroom.Provider value={{ stateClassroom, dispatchClassroom }}>
        {children}
      </ContextClassroom.Provider>
    );
  };
  