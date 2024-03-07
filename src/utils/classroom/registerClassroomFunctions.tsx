import { REGISTER_CLASSROOM_FAIL, REGISTER_CLASSROOM_SUCCESS } from "../../api/types";
import { register_classroom } from "../../api/Classroom.api";


export interface inputRegisterClassroomProps 
{
    class_name: string;
    teacher_email: string;
    teacher_name: string;
    user_id: string;
    dispatch: any
 }

export const registerClassroom = (props: inputRegisterClassroomProps): void => {
    const { 
        class_name,
        teacher_email,
        teacher_name,
        user_id,
        dispatch
    } = props;

    const input: any = {
        class_name: class_name,
        teacher_email: teacher_email,
        teacher_name: teacher_name,
        user_id: user_id,
    }
        register_classroom(input).then((result) =>{
                if(result.success === true){
                    dispatch({ type: REGISTER_CLASSROOM_SUCCESS, payload: result.data });
                }else{
                    dispatch({ type: REGISTER_CLASSROOM_FAIL, payload: result.data})
                }
            
        })
  };



  