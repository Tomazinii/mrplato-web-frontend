import axios from "axios";

const URL = process.env.REACT_APP_URL;
const PATH_DEFAULT = "/api/v1/classroom"



export interface inputCheckInvitationProps {
    invite_id: string;
}


export const check_invite = async (props: inputCheckInvitationProps) => {
    
  const {invite_id} = props;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

      },
      withCredentials: true
    };

    const body = JSON.stringify({ 
        invite_id:invite_id
    });
    
    try {

      const res = (await axios.post(URL + PATH_DEFAULT + "/check_invite", body, config));
      const data = res.data
        
      return {data:data, success: true};
    } catch (err: any) {

      const errMsg = err.response.data.detail
      return {data:errMsg, success: false};
    }
};


