import { LOGIN_FALSE, LOGIN_TRUE, REGISTER_CLASSROOM_FAIL, REGISTER_CLASSROOM_SUCCESS, SET_STATUS_CODE } from "../../api/types";
import { send_link_password_email, set_new_password } from "../../api/User.api";


export interface inputRegisterStudentFunctionProps{
    email: string,
    dispatch:any
}


export const sendLinkPasswordEmail = (props: inputRegisterStudentFunctionProps): void => {
    
    const { 
        email, 
        dispatch
    } = props;

    dispatch({ type: LOGIN_TRUE });
    

    

    send_link_password_email(email).then((result: any) =>{
            
                if(result.success === true){
                    dispatch({ type: SET_STATUS_CODE, payload: result.data.status_code });
                    dispatch({ type: LOGIN_FALSE });
                    

                }else{
                    dispatch({ type: SET_STATUS_CODE, payload: result.data.status_code });
                    dispatch({ type: LOGIN_FALSE });
                }
            
        })
  };



  
  export const setNewPassword = (props: any): void => {

    const {dispatch} = props;

    dispatch({ type: LOGIN_TRUE });
    

    

    set_new_password(props).then((result: any) =>{
            
                if(result.success === true){
                    dispatch({ type: SET_STATUS_CODE, payload: result.data.status_code });
                    dispatch({ type: LOGIN_FALSE });
                    

                }else{
                    dispatch({ type: SET_STATUS_CODE, payload: result.data.status_code });
                    dispatch({ type: LOGIN_FALSE });
                }
            
        })
  };
