import axios from "axios";

const URL = process.env.REACT_APP_URL;
const PATH_DEFAULT = "/api/v1/exercises"

export const get_exercise = async () => {
        
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      try {
        const res = (await axios.get(URL + PATH_DEFAULT + "/exercise/", config));
        const data = res.data
        return data
      } catch (err) {
      }
  };
  
 