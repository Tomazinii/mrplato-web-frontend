import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';



interface feedBackProps {
    feedbackType: string;
    message: string;
    openFeedbackAlert: boolean;
    setOpenFeedbackAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const FeedBack: React.FC<feedBackProps> = ({feedbackType, message, openFeedbackAlert, setOpenFeedbackAlert}) =>{
    const time = 4000

  return (
    <>

        {feedbackType === "Error" &&
        <Snackbar  open={openFeedbackAlert} autoHideDuration={time} onClose={()=>{setOpenFeedbackAlert(false)}}>
            <Alert style={{width:"100%"}} onClose={()=>{setOpenFeedbackAlert(false)}} severity="error">
            <AlertTitle>Error</AlertTitle>
            {message}
            </Alert>
        </Snackbar>
      }


        {feedbackType === "Info" &&
        <Snackbar open={openFeedbackAlert} autoHideDuration={time} onClose={()=>{setOpenFeedbackAlert(false)}}>
            <Alert style={{width:"100%"}} onClose={()=>{setOpenFeedbackAlert(false)}}  severity="info">
                <AlertTitle>Created</AlertTitle>
                {message}
            </Alert>
        </Snackbar>
        }


        {feedbackType === "Success" &&
        <Snackbar open={openFeedbackAlert} autoHideDuration={time} onClose={()=>{setOpenFeedbackAlert(false)}}>
            <Alert style={{width:"100%"}} onClose={()=>{setOpenFeedbackAlert(false)}}  severity="success">
                {message}
            </Alert>
      </Snackbar>
      }


</>

  )
}

export default FeedBack