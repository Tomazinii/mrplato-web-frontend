
    import { check_login } from "../../api/User.api";
    import { CHECK_USER_FAIL, CHECK_USER_SUCESS} from "../../api/types";
    
    
    export const checkAuthenticatedFunction = async (dispatch: any): Promise<any> => {
        try {
            const result = await check_login();
            if (result.success === true) {
                dispatch({ type: CHECK_USER_SUCESS, payload: result.data });
                return result.data
            } else {
                dispatch({ type: CHECK_USER_FAIL, payload: result.data });
            }
        } catch (error) {
            console.error("Error:", error);
            // Tratar o erro, se necessário
        }
    };
    
    
    
    