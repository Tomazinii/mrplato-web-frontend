import React from 'react'


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


interface AlertPropos {
    openAlert: boolean;
    setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
    messageAlert: string;

}


const Alert: React.FC<AlertPropos> = ({openAlert, setOpenAlert, messageAlert}) => {

     const handleClose = () => {
        setOpenAlert(false);
    };

  return (
    <div>
      <Dialog
      
        open={openAlert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{color: "#333"}} id="alert-dialog-title">
          {"Validation Error"}
        </DialogTitle>
        <DialogContent >
          <DialogContentText  id="alert-dialog-description">
           {messageAlert}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{fontWeight:600, color: "#333"}} onClick={handleClose}>Close</Button>

        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Alert