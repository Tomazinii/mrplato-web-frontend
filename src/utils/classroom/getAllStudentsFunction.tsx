

import {GET_ALL_STUDENTS_FAIL, GET_ALL_STUDENTS_SUCCESS} from "../../api/types";
import { InputGetAllStudents, get_all_students } from "../../api/Classroom.api";


export interface InputGetAllStudentFunction{
    classroom_id: string;
    dispatch: any
 }

export const getAllStudentsFunction = (input: InputGetAllStudentFunction): void => {
    
    const {classroom_id, dispatch} = input

    const props: InputGetAllStudents = {
        classroom_id: classroom_id,
    }

    get_all_students(props).then((result: any) =>{
            if(result.success === true){
                dispatch({ type: GET_ALL_STUDENTS_SUCCESS, payload: result.data });
            }else{
                dispatch({ type: GET_ALL_STUDENTS_FAIL})
            }
        
    })


  };



  