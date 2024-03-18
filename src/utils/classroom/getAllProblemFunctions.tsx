

import { GET_ALL_PROBLEM_FAIL, GET_ALL_PROBLEM_SUCCESS, GET_CLASSROOM_FAIL, GET_CLASSROOM_SUCCESS} from "../../api/types";
import { get_classroom } from "../../api/Classroom.api";
import { get_all_problems } from "../../api/Problem.api";


export interface input{
    dispatch: any
 }

export const getAllProblemFunctions = (dispatch: any): void => {
    




    get_all_problems().then((result: any) =>{
            if(result.success === true){
                dispatch({ type: GET_ALL_PROBLEM_SUCCESS, payload: result.data });
            }else{
                dispatch({ type: GET_ALL_PROBLEM_FAIL})
            }
        
    })


  };



  