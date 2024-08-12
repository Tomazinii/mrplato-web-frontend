import axios from "axios";

const URL = process.env.REACT_APP_URL;
const PATH_DEFAULT = "/api/v1/statistic"




export const get_solved_activity = async (activity_id: string, user_id:string) => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        withCredentials: true
      };

      const body = JSON.stringify({ 
        activity_id: String(activity_id),
        user_id: String(user_id),
      });

      try {
        const res = (await axios.post(URL + PATH_DEFAULT + `/get_solved_activity`, body, config));
        const data = res.data
        return {data:data, success: true};
      } catch (err: any) {
        const errMsg = err.response.data.detail
        return {data:errMsg, success: false};
      }
  };
  


  
export const copy_hash_solution = async (activity_id: string, user_id:string) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true
  };

  const body = JSON.stringify({ 
    activity_id: String(activity_id),
    user_id: String(user_id),
  });

  try {
    const res = (await axios.post(URL + PATH_DEFAULT + `/generate-hash`, body, config));
    const data = res.data
    return {data:data, success: true};
  } catch (err: any) {
    const errMsg = err.response.data.detail
    return {data:errMsg, success: false};
  }
};


  


  