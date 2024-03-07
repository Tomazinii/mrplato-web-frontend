import { GET_CLASSROOM_FAIL, GET_CLASSROOM_SUCCESS} from "../../api/types";
import { get_classroom } from "../../api/Classroom.api";


export interface inputGetClassroomFunctionProps 
{
    teacher_id: string;
    dispatch: any
 }

export const getClassroom = (props: inputGetClassroomFunctionProps): void => {
    const { 
        teacher_id,
        dispatch
    } = props;

    const input: any = {
        teacher_id: teacher_id
    }

    get_classroom(input).then((result) =>{
            if(result.success === true){
                dispatch({ type: GET_CLASSROOM_SUCCESS, payload: result.data });
            }else{
                dispatch({ type: GET_CLASSROOM_FAIL})
            }
        
    })


  };



  