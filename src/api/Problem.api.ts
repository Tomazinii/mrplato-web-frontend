import axios from "axios";

const URL = process.env.REACT_APP_URL;
const PATH_DEFAULT = "/api/v1/problems"




export const get_all_problems = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      

      try {
        const res = (await axios.get(URL + PATH_DEFAULT + `/get_all_problem`, config));
        const data = res.data
        return {data:data, success: true};
      } catch (err: any) {
        const errMsg = err.response.data.detail
        return {data:errMsg, success: false};
      }
  };
  
  