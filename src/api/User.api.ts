import axios from "axios";

const URL = process.env.REACT_APP_URL;
const PATH_DEFAULT = "/api/v1/accounts"

export interface inputLoginProps{
    email: string;
    password: string;
  }
  

export const login = async (props: inputLoginProps) => {
  const {email, password} = props;

    const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
  
        },
        withCredentials: true
  
      };
      
      const body = JSON.stringify({
        email: email,
        password: password
      });
      
      try {
        const res = (await axios.post(URL + PATH_DEFAULT + "/login", body, config));
        const data = res.data

        
        return {data:data, success: true};
      } catch (err: any) {
        const errMsg = err.response.data.detail
        return {data:errMsg, success: false};
      }
  };
  
 

  export const check_login = async () => {
      const config = {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
    
          },
          withCredentials: true
    
        };
        
        
        try {
          const res = (await axios.get(URL + PATH_DEFAULT + "/verify", config));
          const data = res.data
          return {data:data, success: true};

        } catch (err: any) {
          const errMsg = err.response.data.detail
          return {data:errMsg, success: false};
        }
    };
    
   
     

  export const logout = async () => {
    const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
  
        },
        withCredentials: true
  
      };
      
      try {
        const res = (await axios.get(URL + PATH_DEFAULT + "/logout", config));
        const data = res.data
        return {data:data, success: true};

      } catch (err: any) {
        const errMsg = err.response.data.detail
        return {data:errMsg, success: false};
      }
  };
  