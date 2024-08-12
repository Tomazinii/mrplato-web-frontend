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
    const time = 20000


    const vertical = "top"
    const horizontal = "center"
  return (
    <div className={styles.containerFeedback}>

        {feedbackType === "Error" &&
        <Snackbar style={{ top: '80px' , width:"80%"}} anchorOrigin={{ vertical, horizontal }} open={openFeedbackAlert} autoHideDuration={time} onClose={()=>{setOpenFeedbackAlert(false)}}>
            <Alert className={styles.logerror}  style={{width:"100%"}} onClose={()=>{setOpenFeedbackAlert(false)}} variant='filled' severity="error">
            <AlertTitle>Error</AlertTitle>
            {message}
            </Alert>
        </Snackbar>
      }


        {feedbackType === "Info" &&
        <Snackbar style={{ top: '80px' , width:"80%"}}  anchorOrigin={{ vertical, horizontal }}  open={openFeedbackAlert} autoHideDuration={time} onClose={()=>{setOpenFeedbackAlert(false)}}>
            <Alert style={{width:"100%"}} onClose={()=>{setOpenFeedbackAlert(false)}} variant='filled' severity="info">
                <AlertTitle>RULE APPLIED</AlertTitle>
                {message}
                
            </Alert>
        </Snackbar>
        }


        {feedbackType === "Success" &&
        <Snackbar style={{ top: '80px' , width:"80%"}} anchorOrigin={{ vertical, horizontal }}  open={openFeedbackAlert} autoHideDuration={time} onClose={()=>{setOpenFeedbackAlert(false)}}>
            <Alert style={{width:"100%"}} onClose={()=>{setOpenFeedbackAlert(false)}} variant='filled' severity="success">
                {message}
            </Alert>
      </Snackbar>
      }


</div>

  )
}

export default FeedBack