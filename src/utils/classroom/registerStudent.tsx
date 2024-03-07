import { LOGIN_FALSE, LOGIN_TRUE, REGISTER_CLASSROOM_FAIL, REGISTER_CLASSROOM_SUCCESS, SET_STATUS_CODE } from "../../api/types";
import {  register_student } from "../../api/Classroom.api";


export interface inputRegisterStudentFunctionProps{
    enrollment: string,
    username: string,
    email: string,
    password: string,
    classroom_id: string,
    invite_id:string,
    dispatch:any
}


export const registerStudentFunction = (props: inputRegisterStudentFunctionProps): void => {
    
    const { 
        classroom_id, 
        email, 
        enrollment, 
        password,
        username,
        invite_id,
        dispatch
    } = props;

    dispatch({ type: LOGIN_TRUE });
    

    
      const input: any = {
        enrollment: enrollment,
        username: username,
        email: email,
        password: password,
        classroom_id:classroom_id,
        invite_id: invite_id

      }
        register_student(input).then((result) =>{
            
                if(result.success === true){
                    dispatch({ type: SET_STATUS_CODE, payload: result.data.status_code });
                    dispatch({ type: LOGIN_FALSE });
                    

                }else{
                    dispatch({ type: SET_STATUS_CODE, payload: result.data.status_code });
                    dispatch({ type: LOGIN_FALSE });
                }
            
        })
  };



  