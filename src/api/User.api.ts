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
        withCredentials: true,
        credentials: 'include'
  
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


  export const send_link_password_email = async (email: string) => {
  
      
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
  
        },
        withCredentials: true
  
      };
      
      const body = JSON.stringify({ 
        user_email: email,
      });
  
      try {
        const res = (await axios.post(URL + PATH_DEFAULT + "/link-forgot-password", body, config));
        const data = res.data
          
        return {data:data, success: true};
      } catch (err: any) {
        const errMsg = err.response.data.detail
        return {data:errMsg, success: false};
      }
  };
  
  

  
  export const set_new_password = async (props: any) => {
  
          
    const { 
      password,
      email,
      link_id,
  } = props;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

      },
      withCredentials: true

    };
    
    const body = JSON.stringify({ 
      new_password: password,
      user_email: email,
      link_id: link_id
    });

    try {
      const res = (await axios.post(URL + PATH_DEFAULT + "/set-password", body, config));
      const data = res.data
        
      return {data:data, success: true};
    } catch (err: any) {
      const errMsg = err.response.data.detail
      return {data:errMsg, success: false};
    }
};


export const check_link_password = async (params: any) => {

  const {link_id} = params;
  
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

      },
      withCredentials: true
    };

    const body = JSON.stringify({ 
      link_id: String(link_id)
    });
    
    try {
      const res = (await axios.post(URL + PATH_DEFAULT + "/check-link-reset-password", body, config));
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
  

  export interface InputChangePassword{
    password: string
  }


  export const change_password = async (props: InputChangePassword) => {
    const {password} = props;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

      },
      withCredentials: true

    };

        
    const body = JSON.stringify({
      password: password
    });
    

    try {
      const res = (await axios.post(URL + PATH_DEFAULT + "/change-password", body, config));
      const data = res.data
      return {data:data, success: true};

    } catch (err: any) {
      const errMsg = err.response.data.detail
      return {data:errMsg, success: false};
    }

  }