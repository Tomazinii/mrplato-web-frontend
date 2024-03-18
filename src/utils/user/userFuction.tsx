import { Dispatch } from "react";
import { inputLoginProps, login, logout } from "../../api/User.api";
import { LOGIN_SUCCESS, LOGIN_USER_FAIL, LOGOUT } from "../../api/types";


export interface inputLoginFunctionProps 
{
    email: string;
    password: string;
    dispatch: Dispatch<any>
 }

export const loginFunction = async (props: inputLoginFunctionProps) => {
    const { 
        email,
        password,
        dispatch
    } = props;

    const input: inputLoginProps = {
        email: email,
        password: password
    }
      try{
        const result = await login(input);

        if (result.success === true) {
            dispatch({ type: LOGIN_SUCCESS, payload: result.data });
        } else {
            dispatch({ type: LOGIN_USER_FAIL, payload: result.data });
        }

        // Retornar o resultado da função login
        
        return result;

        }catch(err){
        
        }
    

  };


  export const logoutFunction = (dispatch: any): void => {
    
   
      try{
            logout().then((result) =>{
                if(result.success === true){
                    dispatch({ type: LOGOUT, payload: result.data });
                }else{
                    dispatch({ type: LOGOUT, payload: result.data})
                }
            
        })
        }catch(err){
        
        }
    

  };


  