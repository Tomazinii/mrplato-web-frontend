import * as React from 'react';

import DrawerClassroom from '../../component/admin/DrawerClassroom';
import styles from './Invite.module.css'

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';









import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import 'react-datetime/css/react-datetime.css';



import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { AssignmentOutlined, Edit, Person, TimeToLeave, TimeToLeaveSharp, Timelapse } from '@mui/icons-material';
import { CircularProgress, Divider, Typography } from '@mui/material';
import { InputCreateInvitationProps, create_invitation, get_invites, inputGetInviteProps } from '../../api/Classroom.api';
import { ContextGlobal } from '../../context/ContextGlobal';
import { useParams } from 'react-router-dom';





export default function Invite() {
  const {idTurma} = useParams()
  const [emails, setEmails] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [messageSuccess, setMessageSuccess] = useState("")
  const [invites, setInvites]: any = useState("")

  const {dispatchGlobal, stateGlobal} = React.useContext(ContextGlobal) || {}

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const validateEmail = (email: string): boolean => {
    // Expressão regular para validar o formato do email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleAddInput = () => {
    const newEmails = inputValue
      .split(',')
      .map((email) => email.trim())
      .filter((email) => {
        if (!validateEmail(email)) {
          setError(`O email "${email}" não é válido.`);
          return false;
        }
        return true;
      });

    if (newEmails.length === 0) {
      setError('Please enter at least one valid email address.');
      return;
    }

    const input: InputCreateInvitationProps = {
      classroom_id: String(localStorage.getItem('classroom_id')),
      emails: newEmails,
      dispatch: dispatchGlobal,

    }

    create_invitation(input).then((result)=>{
      if(result.success === true){
        setMessageSuccess("Invitations sent successfully!")
      }

    })

    setEmails([...emails, ...newEmails]);
    
    setInputValue('');
    setError(null);
  };


  React.useEffect(()=>{
    const props: inputGetInviteProps = {
      classroom_id: String(idTurma)
    }
    get_invites(props).then((result)=>{
      if(result.success === true){
        setInvites(result.data.body.data)
      }
    })

  },[])
  
  
  return (
    <DrawerClassroom link_active={"invite"}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
        Send invitations to your students          
        
        </Typography>
        <Typography sx={{ mt: 3, mb: 2 }} variant="h6" component="div">
        To send the invitation, separate each email with a comma        
        
        </Typography>
      <h2 style={{color:"rgb(105, 105, 105)"}}></h2>
      <div className={styles.container}>
      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField
        fullWidth
        label="Add comma separated emails"
        value={inputValue}
        onChange={handleInputChange}
        error={!!error}
        helperText={error}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
        {stateGlobal && stateGlobal.loading ? <CircularProgress />:
        <Button variant="contained" onClick={handleAddInput}>
          Send invitations
        </Button>
        }
      </Box>
      <Box sx={{ marginTop: 3 }}>
      <Typography style={{color:"green"}} sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
        
      {messageSuccess}
      </Typography>
      </Box>
      
    </Box>
    <Divider style={{marginTop:"40px"}}/>
    <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
    Previous Invitations 
          </Typography>
          <div className={styles.containerInvites}>
            {invites && invites.map((element: any)=>(
            <List >
                <ListItem
                style={{borderRadius:"10px", boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px"}}
                  className={element.active ? `${styles.active}` : `${styles.deactive}`}
                  secondaryAction={!element.active ? "Expired": 
                    <>
                      <Timelapse style={{color:"#888"}}/>

                    </>
                    
                  }
                  
                >
                  
                  <ListItemAvatar>
                    <Avatar>
                      <Person />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={element.to}
                    secondary={`Invite sent`}
                  />
                </ListItem>
            </List>
))}
          </div>
      </div>
    </DrawerClassroom>
   
  );
}