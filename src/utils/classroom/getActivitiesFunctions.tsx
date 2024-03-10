import { GET_ACTIVITY_FAIL, GET_ACTIVITY_SUCCESS} from "../../api/types";
import { get_activity_by_classroom } from "../../api/Classroom.api";


export interface inputgetActivityFunctionsProps 
{
    classroom_id: string;
    dispatch: any

 }

export const getActivityFunctions = (props: inputgetActivityFunctionsProps): void => {
    const { 
        classroom_id,
        dispatch,
    } = props;

    const input: any = {
        classroom_id: classroom_id
    }

    get_activity_by_classroom(input).then((result) =>{
            if(result.success === true){
                dispatch({ type: GET_ACTIVITY_SUCCESS, payload: result.data });
            }else{
                dispatch({ type: GET_ACTIVITY_FAIL})
            }
        
    })


  };

