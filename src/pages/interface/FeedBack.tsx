import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import styles from './FeedBack.module.css'


interface feedBackProps {
    feedbackType: string;
    message: string;
    openFeedbackAlert: boolean;
    setOpenFeedbackAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const FeedBack: React.FC<feedBackProps> = ({feedbackType, message, openFeedbackAlert, setOpenFeedbackAlert}) =>{
    const time = 4000


    const vertical = "bottom"
    const horizontal = "center"
  return (
    <div className={styles.containerFeedback}>

        {feedbackType === "Error" &&
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={openFeedbackAlert} autoHideDuration={time} onClose={()=>{setOpenFeedbackAlert(false)}}>
            <Alert style={{width:"100%"}} onClose={()=>{setOpenFeedbackAlert(false)}} severity="error">
            <AlertTitle>Error</AlertTitle>
            {message}
            </Alert>
        </Snackbar>
      }


        {feedbackType === "Info" &&
        <Snackbar  anchorOrigin={{ vertical, horizontal }}  open={openFeedbackAlert} autoHideDuration={time} onClose={()=>{setOpenFeedbackAlert(false)}}>
            <Alert style={{width:"100%"}} onClose={()=>{setOpenFeedbackAlert(false)}}  severity="info">
                <AlertTitle>Created</AlertTitle>
                {message}
                
            </Alert>
        </Snackbar>
        }


        {feedbackType === "Success" &&
        <Snackbar anchorOrigin={{ vertical, horizontal }}  open={openFeedbackAlert} autoHideDuration={time} onClose={()=>{setOpenFeedbackAlert(false)}}>
            <Alert style={{width:"100%"}} onClose={()=>{setOpenFeedbackAlert(false)}}  severity="success">
                {message}
            </Alert>
      </Snackbar>
      }


</div>

  )
}

export default FeedBack