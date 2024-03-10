import axios from "axios";

const URL = process.env.REACT_APP_URL;
const PATH_DEFAULT = "/api/v1/classroom"



  
export interface inputGetClassroomProps{
    teacher_id: string;
  }
  

export const get_classroom = async (props: inputGetClassroomProps) => {
  const {teacher_id} = props;

    const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
  
        },
        withCredentials: true
  
      };
      

      try {
        const res = (await axios.get(URL + PATH_DEFAULT + `/get_classroom/${teacher_id}`, config));
        const data = res.data

        
        return {data:data, success: true};
      } catch (err: any) {
        const errMsg = err.response.data.detail
        return {data:errMsg, success: false};
      }
  };
  


export interface inputRegisterClassroomProps {
  class_name: string;
  teacher_email: string;
  teacher_name: string;
  user_id: string;
}


export const register_classroom = async (props: inputRegisterClassroomProps) => {
  
  const {class_name, teacher_email, teacher_name, user_id} = props;
    
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

      },
      withCredentials: true

    };
    
    const body = JSON.stringify({ 
      class_name: class_name,
        teacher_email: teacher_email,
        teacher_name: teacher_name,
        user_id: user_id,
    });
    


    try {

      const res = (await axios.post(URL + PATH_DEFAULT + "/register_classroom", body, config));
      const data = res.data
        
      return {data:data, success: true};
    } catch (err: any) {
      const errMsg = err.response.data.detail
      return {data:errMsg, success: false};
    }
};




export interface inputRegisterStudentProps{
    enrollment: string,
    username: string,
    email: string,
    password: string,
    classroom_id: string,
    invite_id: string,
}


export const register_student = async (props: inputRegisterStudentProps) => {
  
  const {classroom_id, email, enrollment, password, username, invite_id} = props;
    
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

      },
      withCredentials: true

    };
    
    const body = JSON.stringify({ 
      classroom_id:classroom_id,
      email: email,
      enrollment: enrollment,
      password: password,
      username: username,
      invite_id: invite_id
    });


    try {
      const res = (await axios.post(URL + PATH_DEFAULT + "/register_student", body, config));
      const data = res.data
        
      return {data:data, success: true};
    } catch (err: any) {
      const errMsg = err.response.data.detail
      return {data:errMsg, success: false};
    }
};


export interface GetActivityProps {
  classroom_id: string;
}

export const get_activity_by_classroom = async (props: GetActivityProps) => {
      const {classroom_id} = props
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      

      try {
        const res = (await axios.get(URL + PATH_DEFAULT + `/get_activity_by_classroom/${classroom_id}`, config));
        const data = res.data
        return {data:data, success: true};
      } catch (err: any) {
        const errMsg = err.response.data.detail
        return {data:errMsg, success: false};
      }
  };
  
  