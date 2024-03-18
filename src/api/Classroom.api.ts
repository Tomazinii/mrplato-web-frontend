import axios from "axios";
import { LOGIN_FALSE, LOGIN_TRUE } from "./types";

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


    
export interface inputGetInviteProps{
  classroom_id: string;
}



  export const get_invites = async (props: inputGetInviteProps) => {
    const {classroom_id} = props;
  
      const config = {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
    
          },
          withCredentials: true
    
        };
  
        try {
          const res = (await axios.get(URL + PATH_DEFAULT + `/get_invite_students/${classroom_id}`, config));
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
  
  

  export interface inputRegisterActivityBySelectProps{
      time:any
      problem_id: string
      classroom_id: string
      category: string
      availability: boolean

  }

  export const register_activity_by_select_problem = async (props: inputRegisterActivityBySelectProps) => {
  
    const {classroom_id, availability, category, problem_id, time} = props;
      
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
  
        },
        withCredentials: true
  
      };
      
      const body = JSON.stringify({ 
        classroom_id:classroom_id,
        availability: availability,
        category: category,
        problem_id: problem_id,
        time: time
      });
  
      try {
        const res = (await axios.post(URL + PATH_DEFAULT + "/register_activity_select_problem", body, config));
        const data = res.data
          
        return {data:data, success: true};
      } catch (err: any) {
        const errMsg = err.response.data.detail
        return {data:errMsg, success: false};
      }
  };


  export interface inputUpdateActivityProps {
    time:any
    activity_id: string
    category: string
    availability: boolean
  }

  
  export const update_activity = async (props: inputUpdateActivityProps) => {
  
    const {availability, category, activity_id, time} = props;
      
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
  
        },
        withCredentials: true
  
      };
      
      const body = JSON.stringify({ 
        activity_id:activity_id,
        availability: availability,
        category: category,
        time: time
      });
      try {
        const res = (await axios.put(URL + PATH_DEFAULT + "/update_activity", body, config));
        const data = res.data
          
        return {data:data, success: true};
      } catch (err: any) {
        const errMsg = err.response.data.detail
        return {data:errMsg, success: false};
      }
  };





  export interface inputDeleteActivityProps {
    activity_id: string
  }


  export const delete_activity = async (props: inputDeleteActivityProps) => {
  
    const {activity_id } = props;
      
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
  
        },
        withCredentials: true
  
      };
      
      try {
        const res = (await axios.delete(URL + PATH_DEFAULT + `/delete_activity/${activity_id}`, config));
        const data = res.data
          
        return {data:data, success: true};
      } catch (err: any) {
        const errMsg = err.response.data.detail
        return {data:errMsg, success: false};
      }
  };





  export interface inputRegisterActivityByInsertProps{
    time:any
    file:any
    classroom_id: string
    problem_list_name: string
    category: string
    availability: boolean
  }

  

  
  export const register_activity_by_insert_problem = async (input: inputRegisterActivityByInsertProps) => {
      const {availability, category, classroom_id, file, problem_list_name, time } = input
      
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true
  
      };

      const formData = new FormData();
      formData.append('file', file); 
      

      try {
        const res = (await axios.post(URL + PATH_DEFAULT + `/register_activity_insert_problem?category=${category}&availability=${availability}&problem_list_name=${problem_list_name}&classroom_id=${classroom_id}&time=${time}`,formData, config));
        const data = res.data
          
        return {data:data, success: true};
      } catch (err: any) {
        const errMsg = err.response.data.detail
        return {data:errMsg, success: false};
      }
  };


  
export interface InputCreateInvitationProps{
  emails: Array<string>
  classroom_id: string
  dispatch: any
}

export const create_invitation = async (props: InputCreateInvitationProps) => {
  const {classroom_id, emails, dispatch} = props;
  dispatch({type: LOGIN_TRUE})
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    
    const body = JSON.stringify({ 
      classroom_id: classroom_id, 
      students_email: emails, 
    });
    
    try {
      const res = (await axios.post(URL + PATH_DEFAULT + "/create_invite", body, config));
      const data = res.data
      dispatch({type: LOGIN_FALSE})

      return {data:data, success: true};
    } catch (err: any) {
     dispatch({type: LOGIN_FALSE})

      const errMsg = err.response.data.detail
      return {data:errMsg, success: false};
    }
};
